package com.iassistent.server.dao;

import com.iassistent.server.enities.ActionEntity;

import javax.swing.*;
import java.util.List;

/**
 * Created by lan on 11/26/14.
 */
public interface ActionDao {
    int create(ActionEntity entity);
    int updateStatus(ActionEntity entity);
    int updateExtra(ActionEntity entity);
    int updateStatusAndExtra(ActionEntity entity);
    ActionEntity byId(String id);
    List<ActionEntity> byStatus(ActionEntity.Status status, int offset, int count);
}
