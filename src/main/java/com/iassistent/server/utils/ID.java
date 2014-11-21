package com.iassistent.server.utils;

import java.util.UUID;

/**
 * Created by lan on 11/21/14.
 */
public class ID {
    public static final String id() {
        return UUID.randomUUID().toString();
    }
}
