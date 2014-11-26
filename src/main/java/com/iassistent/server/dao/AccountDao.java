package com.iassistent.server.dao;

import com.iassistent.server.enities.Account;
import com.iassistent.server.enities.Device;

/**
 * Created by lan on 11/21/14.
 */
public interface AccountDao {
    int createAccount( Account account);
    int createDevice(Device device);
}
