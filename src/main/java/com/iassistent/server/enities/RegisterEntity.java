package com.iassistent.server.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by lan on 11/24/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterEntity {
    private String email;
    private String password;
    private String phoneNumber;
    private String securityAnswer;
    private int securityQuestionIndex;
}
