package com.iassistent.server.dao.impl;

import com.google.gson.reflect.TypeToken;
import com.iassistent.server.utils.GsonHelper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.lang.reflect.Type;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

/**
 * Created by lan on 11/21/14.
 */
public abstract class BaseDaoImpl {
    protected JdbcTemplate jdbcTemplate;

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    protected static Timestamp toTimestamp(Date date) {
        if(date == null) {
            return null;
        }
        return new Timestamp(date.getTime());
    }

    protected static Date getDate(ResultSet rs, String name) throws SQLException{
       Timestamp t = rs.getTimestamp(name);
        if(t == null) {
            return null;
        }
        return new Date(t.getTime());
    }

    protected static String toJson(Object o) {
        return GsonHelper.toJson(o);
    }

    protected static Map<String, String> fromJson(String json) {
        Type type = new TypeToken<Map<String, String>>() {
        }.getType();
        return GsonHelper.jsonToMap(json, type);
    }
}
