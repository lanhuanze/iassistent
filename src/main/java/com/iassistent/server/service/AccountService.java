package com.iassistent.server.service;

import com.iassistent.server.enities.RegisterEntity;
import com.iassistent.server.result.Result;

/**
 * Created by lan on 11/24/14.
 */
public interface AccountService {
    Result<RegisterEntity> create(String json);
}
