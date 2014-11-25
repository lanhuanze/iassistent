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
                "(?,?,?,?,?,?,?)";
    }

    interface AccountSQL {
        String CREATE_ACCOUNT = "INSERT INTO `iassistent`.`account`\n" +
                "(`id`,\n" +
                "`username`,\n" +
                "`email`,\n" +
                "`phonenumber`,\n" +
                "`password`,\n" +
                "`salt`,\n" +
                "`createtime`,\n" +
                "`securityquestionindex`,\n" +
                "`securityanswer`)\n" +
                "VALUES\n" +
                "(?,?,?,?,?,?,?,?,?)";
        String CREATE_DEVICE = "INSERT INTO `iassistent`.`device`\n" +
                "(`id`,\n" +
                "`accountid`,\n" +
                "`displayname`,\n" +
                "`handshaketoken`,\n" +
                "`networktype`,\n" +
                "`lastaccesstime`,\n" +
                "`createtime`,\n" +
                "`status`,\n" +
                "`deviceos`,\n" +
                "`deviceosversion`,\n" +
                "`locale`)\n" +
                "VALUES\n" +
                "(?,?,?,?,?,?,?,?,?,?,?)";
    }
}
