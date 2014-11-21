package com.iassistent.server.module;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by lan on 11/21/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Keys extends AbstractModule {
    private String key;
    private String value;
    private String type;

    public static enum Type {
        SECURITY_QUESTION, /** type of security question. */
    }
}
