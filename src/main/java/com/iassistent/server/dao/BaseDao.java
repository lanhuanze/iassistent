package com.iassistent.server.dao;

import com.iassistent.server.enities.AbstractModule;

/**
 * Created by lan on 11/21/14.
 */
public interface BaseDao<T extends AbstractModule> {
    int create(T t);
    int update(T t);
    T getById(String id);
    int delete(String id);
}
