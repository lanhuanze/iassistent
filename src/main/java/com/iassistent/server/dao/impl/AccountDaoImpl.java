package com.iassistent.server.dao.impl;

import com.iassistent.server.dao.AccountDao;
import com.iassistent.server.enities.Account;
import com.iassistent.server.enities.Device;
import com.iassistent.server.sql.MySQL;
import org.springframework.jdbc.core.PreparedStatementSetter;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by lan on 11/24/14.
 */
public class AccountDaoImpl extends BaseDaoImpl implements AccountDao, MySQL.AccountSQL {
    @Override
    public int createAccount(final Account a) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, a.getId());
                ps.setString(i++, a.getUsername());
                ps.setString(i++, a.getEmail());
                ps.setString(i++, a.getPassword());
                ps.setString(i++, a.getSalt());
                ps.setTimestamp(i++, toTimestamp(a.getCreateTime()));
                ps.setString(i++, a.getSecurityQuestionIndex());
                ps.setString(i++, a.getSecurityAnswer());
            }
        };

        return jdbcTemplate.update(CREATE_ACCOUNT, pss);
    }

    @Override
    public int createDevice(final Device d) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, d.getId());
                ps.setString(i++, d.getAccountId());
                ps.setString(i++, d.getDisplayName());
                ps.setString(i++, d.getHandshakeToken());
                ps.setString(i++, d.getNetworkType());
                ps.setTimestamp(i++, toTimestamp(d.getLastAccessTime()));
                ps.setTimestamp(i++, toTimestamp(d.getCreateTime()));
                ps.setInt(i++, d.getStatus());
                ps.setString(i++, d.getDeviceOs());
                ps.setString(i++, d.getDeviceOsVersion());
                ps.setString(i++, d.getLocale());
                ps.setString(i++, d.getPhoneNumber());
            }
        };

        return jdbcTemplate.update(CREATE_DEVICE, pss);
    }
}
