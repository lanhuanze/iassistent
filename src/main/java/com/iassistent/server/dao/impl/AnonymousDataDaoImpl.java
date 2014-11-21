package com.iassistent.server.dao.impl;

import com.iassistent.server.dao.AnonymousDataDao;
import com.iassistent.server.sql.MySQL;

/**
 * Created by lan on 11/21/14.
 */
public class AnonymousDataDaoImpl<AnonymousData> extends BaseDaoImpl implements AnonymousDataDao<AnonymousData>, MySQL.AnonymousDataSQL {

    @Override
    public int create(AnonymousData anonymousData) {

        return jdbcTemplate.update(CREATE);
    }

    @Override
    public int update(AnonymousData anonymousData) {
        return 0;
    }

    @Override
    public AnonymousData getById(String id) {
        return null;
    }

    @Override
    public int delete(String id) {
        return 0;
    }
}
