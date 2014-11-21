package com.iassistent.server.module;

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
public class Device extends AbstractModule {
    private String accountId;
    private String displayName;
    private String handshakeToken;
    private String networkType;
    private Date lastAccessTime;
    private Date createTime;
    private int status;
    private String deviceOs;
    private String deviceOsVersion;
    private String locale;
}
