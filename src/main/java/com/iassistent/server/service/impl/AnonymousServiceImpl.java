package com.iassistent.server.service.impl;

import com.iassistent.server.dao.AnonymousDataDao;
import com.iassistent.server.result.NonObject;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AnonymousService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by lan on 11/21/14.
 */
public class AnonymousServiceImpl implements AnonymousService {

   private AnonymousDataDao anonymousDataDao;

    @Override
    public Result<NonObject> create(String json) {
        Result<NonObject> r = Result.newResult();
        return r;
    }

    public void setAnonymousDataDao(AnonymousDataDao anonymousDataDao) {
        this.anonymousDataDao = anonymousDataDao;
    }
}
