package com.iassistent.server.sql;

/**
 * Created by lan on 11/21/14.
 */
public interface MySQL {
    interface AnonymousDataSQL {
        String CREATE = "INSERT INTO `iassistent`.`anonymousdata`\n" +
                "(`id`,\n" +
                "`clienttype`,\n" +
                "`createtime`,\n" +
                "`clientversion`,\n" +
                "`clientid`,\n" +
                "`ip`,\n" +
                "`carrier`)\n" +
                "VALUES\n" +
                "(?,?,?,?,?,?,?,?)";
    }
}
