package com.iassistent.server.dao;

import com.iassistent.server.enities.ActionEntity;

import javax.swing.*;

/**
 * Created by lan on 11/26/14.
 */
public interface ActionDao {
    int create(ActionEntity entity);
    int updateStatus(ActionEntity entity);
    int updateExtra(ActionEntity entity);
    int updateStatusAndExtra(ActionEntity entity);
    ActionEntity byId(String id);
}
