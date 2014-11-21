package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.iassistent.server.dao.AnonymousDataDao;
import com.iassistent.server.module.AnonymousData;
import com.iassistent.server.result.NonObject;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AnonymousService;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.ID;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

/**
 * Created by lan on 11/21/14.
 */

public class AnonymousServiceImpl implements AnonymousService {

   private AnonymousDataDao anonymousDataDao;

    @Override
    public Result<AnonymousData> create(String json) {
        Result<AnonymousData> r = Result.newResult();
        try {
            AnonymousData data = GsonHelper.fromJson(json, AnonymousData.class);
            data.setId(ID.id());
            data.setCreateTime(new Date());
            int ret = anonymousDataDao.create(data);
            if(ret > 0) {
                r.add(data);
                r.setMessage("OK");
            }else {
                r.setMessage("ERROR: UNKNOWN");
            }

        }catch(JsonSyntaxException je) {
            r.setMessage("ERROR:" + je.getMessage());
        }catch(Exception e) {
            r.setMessage("ERROR:" + e.getMessage());
        }
        return r;
    }

    public void setAnonymousDataDao(AnonymousDataDao anonymousDataDao) {
        this.anonymousDataDao = anonymousDataDao;
    }
}
