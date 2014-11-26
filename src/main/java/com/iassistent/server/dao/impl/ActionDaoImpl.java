package com.iassistent.server.dao.impl;

import com.iassistent.server.dao.ActionDao;
import com.iassistent.server.enities.ActionEntity;
import com.iassistent.server.sql.MySQL;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by lan on 11/26/14.
 */
@Slf4j
public class ActionDaoImpl extends BaseDaoImpl implements ActionDao, MySQL.ActionSQL {
    @Override
    public int create(final ActionEntity e) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, e.getId());
                ps.setString(i++, e.getAction());
                ps.setTimestamp(i++, toTimestamp(e.getExpireTime()));
                ps.setString(i++, toJson(e.getExtra()));
                ps.setString(i++, e.getStatus());
            }
        };

        return jdbcTemplate.update(CREATE, pss);
    }

    @Override
    public int updateStatus(final ActionEntity e) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, e.getStatus());
                ps.setString(i++, e.getId());
            }
        };

        return jdbcTemplate.update(UPDATE_STATUS, pss);
    }

    @Override
    public int updateExtra(final ActionEntity e) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, toJson(e.getExtra()));
                ps.setString(i++, e.getId());
            }
        };

        return jdbcTemplate.update(UPDATE_EXTRA, pss);
    }

    @Override
    public int updateStatusAndExtra(final ActionEntity e) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, e.getStatus());
                ps.setString(i++, toJson(e.getExtra()));
                ps.setString(i++, e.getId());
            }
        };

        return jdbcTemplate.update(UPDATE_STATUS_AND_EXTRA, pss);
    }

    @Override
    public ActionEntity byId(final String id) {
        PreparedStatementSetter pss = new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                int i = 1;
                ps.setString(i++, id);
            }
        };

        ResultSetExtractor<ActionEntity> rse = new ResultSetExtractor<ActionEntity>() {
            @Override
            public ActionEntity extractData(ResultSet resultSet)
                    throws SQLException, DataAccessException {
                while (resultSet.next()) {
                    return extraActionEntity(resultSet);
                }
                return null;
            }
        };
        return jdbcTemplate.query(BY_ID, pss, rse);
    }

    private static ActionEntity extraActionEntity(ResultSet rs) {
        ActionEntity e = new ActionEntity();
        try {
            e.setId(rs.getString("id"));
            e.setAction(rs.getString("action"));
            e.setExpireTime(getDate(rs, "expiretime"));
            e.setStatus(rs.getString("status"));
            e.setExtra(fromJson(rs.getString("extra")));
        }catch(SQLException sqle) {
            log.error("extraActionEntity get error:" + sqle.getMessage());
            return null;
        }
        return e;
    }
}
