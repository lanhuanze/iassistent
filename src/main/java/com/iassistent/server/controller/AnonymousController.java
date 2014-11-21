package com.iassistent.server.controller;

import com.iassistent.server.service.AnonymousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by lan on 11/21/14.
 */
@Controller
public class AnonymousController {
    @Autowired
    private AnonymousService anonymousService;


}
