package com.iassistent.server.service;

import com.iassistent.server.enities.AnonymousData;
import com.iassistent.server.result.Result;

/**
 * Created by lan on 11/21/14.
 */
public interface AnonymousService {
    Result<AnonymousData> create(String json);
}
