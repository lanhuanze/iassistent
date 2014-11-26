package com.iassistent.server.service;

import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.result.Result;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lan on 11/26/14.
 */
public interface ActionService {
    Result<ActionEntity> create(String json);
    Result<ActionEntity> updateStatus(String json);
    Result<ActionEntity> updateExtra(String json);
    Result<ActionEntity> updateStatusAndExtra(String json);
    Result<ActionEntity> byId(String id);
    Result<ActionEntity> retrieve(String id, HttpServletRequest req);
    Result<ActionEntity> finish(String id);
    Result<ActionEntity> responded(String id, String json);
}
