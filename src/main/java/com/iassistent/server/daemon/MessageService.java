package com.iassistent.server.daemon;

import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.iassistent.server.dao.ActionDao;
import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.enities.MessageEntity;
import com.iassistent.server.enities.MessageResult;
import com.iassistent.server.message.PubnubConst;
import com.iassistent.server.result.Result;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.RemoteAddressHelper;
import com.pubnub.api.Callback;
import com.pubnub.api.Pubnub;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;

/**
 * Created by lan on 11/25/14.
 */
@Slf4j
public class MessageService {

    private ActionDao actionDao;

    public boolean publishMessage(ActionEntity ae) {
        //boolean ret = false;
        try {
            String message = GsonHelper.toJson(ae);
            log.debug("publishMessage json message:" + message);
            JSONObject jsonMsg = new JSONObject(message);
            pubnub.publish(ae.getTarget(), jsonMsg , new Callback() {
                @Override
                public void successCallback(String s, Object o) {
                    super.successCallback(s, o);
                    log.error("successCallback s:" + s + ", o:" + o.toString());
                }

                @Override
                public void errorCallback(String s, Object o) {
                    super.errorCallback(s, o);
                    log.error("errorCallback s:" + s + ", o:" + o.toString());
                }

                @Override
                public void connectCallback(String s, Object o) {
                    super.connectCallback(s, o);
                }

                @Override
                public void reconnectCallback(String s, Object o) {
                    super.reconnectCallback(s, o);
                }

                @Override
                public void disconnectCallback(String s, Object o) {
                    super.disconnectCallback(s, o);
                }
            });
        } catch (Exception e) {
            log.error("ERROR:" + e.getMessage());
            return false;
        }

        return true;
    }


    public void init() {
        pubnub = new Pubnub(PubnubConst.PUBLISH_KEY, PubnubConst.SUBSCRIBE_KEY);
        sendThread.start();
        String message ="{\"action\":\"poll\",\"expireTime\":\"1970-01-01T08:30:00+0830\",\"status\":\"created\",\"target\":\"f4deffa7-ca87-4c0d-8447-b8e8b4772750\",\"extra\":{},\"id\":\"7401d65c-7ed9-4300-bc16-43e33dffe54a\"}";
    }

    public void destroy() {
        shouldStopThread = true;
    }

    private Pubnub pubnub;

    private int sleepInterval = 5000; //ms
    private boolean shouldStopThread = false;
    private int batchSize = 1000;

    private Thread sendThread = new Thread("sendActionThread") {
        @Override
        public void run() {
            while(true) {
                List<ActionEntity> list = actionDao.byStatus(ActionEntity.Status.created, 0, batchSize);
                for(ActionEntity e: list) {
                   boolean ret = publishMessage(e);
                    log.info("publishMessage (" + e +") returns " + ret);
                    if(ret) {
                        e.setStatus(ActionEntity.Status.sent.name());
                        int count = actionDao.updateStatus(e);
                        log.info("Update (" + e +") returns " + count);
                    }
                }

                if(CollectionUtils.isEmpty(list)) {
                    // if no more actions. select a while.
                    log.debug("sendThread sleeps for " + sleepInterval);
                    try {
                        sleep(sleepInterval);
                    }catch (InterruptedException e) {
                        log.error("sendThread sleep get action:" + e.getMessage());
                    }
                }

                if(shouldStopThread) {
                    log.warn("sendThread will break and go to die");
                    break;
                }
            }
        }
    };


    public void setActionDao(ActionDao actionDao) {
        this.actionDao = actionDao;
    }

    public void setSleepInterval(int sleepInterval) {
        this.sleepInterval = sleepInterval;
    }

    public void setBatchSize(int batchSize) {
        this.batchSize = batchSize;
    }
}
