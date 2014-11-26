package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.iassistent.server.dao.ActionDao;
import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.ActionService;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.ID;

import java.util.Date;

/**
 * Created by lan on 11/26/14.
 */
public class ActionServiceImpl implements ActionService {

    private ActionDao actionDao;
    @Override
    public Result<ActionEntity> create(String json) {
        Result<ActionEntity> r = Result.newResult();
        try {
            ActionEntity ae = GsonHelper.fromJson(json, ActionEntity.class);
            ae.setId(ID.id());
            if(ae.getExpireTime() == null) {
                ae.setExpireTime(new Date(0));
            }
            ae.setStatus(ActionEntity.Status.created.name());
            int ret = actionDao.create(ae);
            if(ret > 0) {
                r.setCount(1);
                r.add(ae);
                r.setStatusCode(201);
            }else {
                r.setCount(0);
                r.setStatusCode(500);
                r.setMessage("ERROR: Unknown error");
            }
        }catch (JsonSyntaxException jse) {

        }catch(Exception e) {

        }
        return r;
    }

    @Override
    public Result<ActionEntity> updateStatus(String json) {
        return null;
    }

    @Override
    public Result<ActionEntity> updateExtra(String json) {
        return null;
    }

    @Override
    public Result<ActionEntity> updateStatusAndExtra(String json) {
        return null;
    }

    @Override
    public Result<ActionEntity> byId(String id) {
        return null;
    }

    public void setActionDao(ActionDao actionDao) {
        this.actionDao = actionDao;
    }
}
