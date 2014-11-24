package com.iassistent.server.dao;

import com.iassistent.server.enities.AnonymousData;

/**
 * Created by lan on 11/21/14.
 */
public interface AnonymousDataDao{
    int create(AnonymousData t);
    int update(AnonymousData t);
    AnonymousData getById(String id);
    int delete(String id);
}
