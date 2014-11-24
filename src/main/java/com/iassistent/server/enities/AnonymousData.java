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
public class AnonymousData extends AbstractModule{
    private String clientType;
    private Date createTime;
    private String clientVersion;
    private String clientId;
    private String ip;
    private String carrier;
}
