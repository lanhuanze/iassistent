package com.iassistent.server.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * Created by lan on 11/21/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account extends AbstractModule {
private String username;
    private String password;
    private String salt;
    private String securityQuestionIndex;
    private String securityAnswer;
    private String email;
    private String phoneNumber;
    private Date createTime;
}
