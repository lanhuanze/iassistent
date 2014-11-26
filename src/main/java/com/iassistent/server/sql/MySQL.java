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

        interface ActionSQL {
                String CREATE = "INSERT INTO `iassistent`.`actions`\n" +
                        "(`id`,\n" +
                        "`action`,\n" +
                        "`expiretime`,\n" +
                        "`extra`,\n" +
                        "`status`, `target`)\n" +
                        "VALUES(?,?,?,?,?,?)";
                String UPDATE_STATUS = "UPDATE `iassistent`.`actions`\n" +
                        "SET `status` = ? WHERE `id` = ?";
                String UPDATE_EXTRA = "UPDATE `iassistent`.`actions`\n" +
                        "SET `extra` = ? WHERE `id` = ?";
                String UPDATE_STATUS_AND_EXTRA = "UPDATE `iassistent`.`actions`\n" +
                        "SET `status` = ?, `extra`=? WHERE `id` = ?";

                String BY_ID = "SELECT `actions`.`id`,\n" +
                        "    `actions`.`action`,\n" +
                        "    `actions`.`expiretime`,\n" +
                        "    `actions`.`extra`,\n" +
                        "    `actions`.`status`,\n" +
                        "    `actions`.`target`, \n" +
                        "    `actions`.`createtime` \n" +
                        "FROM `iassistent`.`actions` WHERE `actions`.`id` = ?";
                String BY_STATUS = "SELECT `actions`.`id`,\n" +
                        "    `actions`.`action`,\n" +
                        "    `actions`.`expiretime`,\n" +
                        "    `actions`.`extra`,\n" +
                        "    `actions`.`status`,\n" +
                        "    `actions`.`target`,\n" +
                        "    `actions`.`createtime` \n" +
                        "FROM `iassistent`.`actions`  WHERE `actions`.`status` = ? ORDER BY createtime DESC LIMIT ?,?";
        }
}
