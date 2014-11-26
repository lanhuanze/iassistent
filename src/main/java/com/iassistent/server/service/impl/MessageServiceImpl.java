package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.enities.MessageEntity;
import com.iassistent.server.enities.MessageResult;
import com.iassistent.server.message.PubnubConst;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.MessageService;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.RemoteAddressHelper;
import com.pubnub.api.Callback;
import com.pubnub.api.Pubnub;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Type;
import java.util.List;

/**
 * Created by lan on 11/25/14.
 */
@Slf4j
public class MessageServiceImpl implements MessageService {
    @Override
    public Result<MessageResult> publishMessage(String jsonMessage) {
        Result<MessageResult> r = Result.newResult();

        try {
            Type type = new TypeToken<List<MessageEntity>>() {
            }.getType();
            List<MessageEntity> mes = GsonHelper.fromJson(jsonMessage, type);
            if(CollectionUtils.isEmpty(mes)) {
                r.setCount(0);
                r.setMessage("Format error.");
                r.setStatusCode(400);
            }else {
                MessageEntity me = mes.get(0);
                pubnub.publish(me.getDeviceId(), me.getAction(), new Callback() {
                    @Override
                    public void successCallback(String s, Object o) {
                        super.successCallback(s, o);
                        log.error("successCallback s:" + s +", o:" + GsonHelper.toJson(o));
                    }

                    @Override
                    public void errorCallback(String s, Object o) {
                        super.errorCallback(s, o);
                        log.error("errorCallback s:" + s +", o:" + GsonHelper.toJson(o));
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
            }
        }catch(JsonSyntaxException je) {
            r.setMessage("ERROR:" + je.getMessage());
        }catch(Exception e) {
            r.setMessage("ERROR:" + e.getMessage());
        }

        return r;
    }

    @Override
    public Result<ActionEntity> getAction(HttpServletRequest req, HttpServletResponse resp) {
        String ip = RemoteAddressHelper.getRemoteIpFrom(req);
        log.info("remote ip:" + ip);
        Result<ActionEntity> r = Result.newResult();
        r.add(new ActionEntity("open_vnc_server"));
        return r;
    }

    public void init() {
        pubnub = new Pubnub(PubnubConst.PUBLISH_KEY, PubnubConst.SUBSCRIBE_KEY);
    }

    private Pubnub pubnub;
}
