package com.iassistent.server.service;

import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.enities.MessageResult;
import com.iassistent.server.result.Result;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by lan on 11/25/14.
 */
public interface MessageService {
    Result<MessageResult> publishMessage(String json);
    Result<ActionEntity> getAction(HttpServletRequest req, HttpServletResponse resp);
}
