package com.iassistent.server.dao.impl;

import com.iassistent.server.dao.BaseDao;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by lan on 11/21/14.
 */
public abstract class BaseDaoImpl {
    protected JdbcTemplate jdbcTemplate;

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Timestamp toTimestamp(Date date) {
        if(date == null) {
            return null;
        }
        return new Timestamp(date.getTime());
    }

    public Date getDate(ResultSet rs, String name) throws SQLException{
       Timestamp t = rs.getTimestamp(name);
        if(t == null) {
            return null;
        }
        return new Date(t.getTime());
    }
}
