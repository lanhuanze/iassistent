package com.iassistent.server.service.impl;

import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.iassistent.server.dao.AnonymousDataDao;
import com.iassistent.server.enities.AnonymousData;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AnonymousService;
import com.iassistent.server.utils.GsonHelper;
import com.iassistent.server.utils.ID;
import org.springframework.util.CollectionUtils;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

/**
 * Created by lan on 11/21/14.
 */

public class AnonymousServiceImpl implements AnonymousService {

   private AnonymousDataDao anonymousDataDao;

    @Override
    public Result<AnonymousData> create(String json) {
        Result<AnonymousData> r = Result.newResult();
        try {
            Type type = new TypeToken<List<AnonymousData>>() {
            }.getType();
            List<AnonymousData> datas = GsonHelper.jsonToList(json, type);
            if(CollectionUtils.isEmpty(datas)) {
                r.setMessage("Empty request");
                r.setStatusCode(400);
            }else {
                AnonymousData data = datas.get(0);
                data.setId(ID.id());
                data.setCreateTime(new Date());
                int ret = anonymousDataDao.create(data);
                if (ret > 0) {
                    r.add(data);
                    r.setMessage("OK");
                } else {
                    r.setMessage("ERROR: UNKNOWN");
                }
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
