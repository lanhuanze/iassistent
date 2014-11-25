package com.iassistent.server.enities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by lan on 11/25/14.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageResult {
    private String actionId;
    private int count;
    private String message;
}
