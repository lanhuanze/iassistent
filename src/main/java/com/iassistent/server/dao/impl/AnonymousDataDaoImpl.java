package com.iassistent.server.dao.impl;

import com.iassistent.server.dao.AnonymousDataDao;
import com.iassistent.server.enities.AnonymousData;
import com.iassistent.server.sql.MySQL;
import org.springframework.jdbc.core.PreparedStatementSetter;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by lan on 11/21/14.
 */
public class AnonymousDataDaoImpl extends BaseDaoImpl implements AnonymousDataDao, MySQL.AnonymousDataSQL {

    @Override
    public int create(final AnonymousData d) {

        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, d.getId());
                ps.setString(i++, d.getClientType());
                ps.setTimestamp(i++, toTimestamp(d.getCreateTime()));
                ps.setString(i++, d.getClientVersion());
                ps.setString(i++, d.getClientId());
                ps.setString(i++, d.getIp());
                ps.setString(i++, d.getCarrier());
            }
        };

        return jdbcTemplate.update(CREATE, pss);
    }

    @Override
    public int update(AnonymousData anonymousData) {
        return 0;
    }

    @Override
    public AnonymousData getById(String id) {
        return null;
    }

    @Override
    public int delete(String id) {
        return 0;
    }
}
