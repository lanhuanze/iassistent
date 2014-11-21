package com.iassistent.server.service;

import com.iassistent.server.module.AnonymousData;
import com.iassistent.server.result.NonObject;
import com.iassistent.server.result.Result;

/**
 * Created by lan on 11/21/14.
 */
public interface AnonymousService {
    Result<AnonymousData> create(String json);
}
