package com.iassistent.server.service.impl;

import com.iassistent.server.dao.AccountDao;
import com.iassistent.server.enities.RegisterEntity;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AccountService;

/**
 * Created by lan on 11/24/14.
 */
public class AccountServiceImpl implements AccountService {

    private AccountDao accountDao;

    @Override
    public Result<RegisterEntity> create(String json) {
        return null;
    }

    public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }
}
