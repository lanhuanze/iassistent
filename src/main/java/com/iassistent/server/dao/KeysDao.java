package com.iassistent.server.dao;

import com.iassistent.server.dao.BaseDao;

import java.util.List;

/**
 * Created by lan on 11/21/14.
 */
public interface KeysDao<Keys> extends BaseDao {
    List<Keys> getByName(String name);
    List<Keys> getByType(String type);
}
