package com.iassistent.server.dao;

/**
 * Created by lan on 11/21/14.
 */
public interface BaseDao<T> {
    int create(T t);
    int update(T t);
    T getById(String id);
    int delete(String id);
}
