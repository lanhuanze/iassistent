package com.iassistent.server.enities;

import com.google.common.collect.Maps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Map;

/**
 * Created by lan on 11/25/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActionEntity extends AbstractModule{
    private String action;
    private Date expireTime;
    private String status;
    private Map<String, String> extra = Maps.newHashMap();

    public static enum Status {
        created,sent,responded,finished
    }
}
