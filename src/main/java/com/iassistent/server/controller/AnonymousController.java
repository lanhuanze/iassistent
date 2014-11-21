package com.iassistent.server.controller;

import com.iassistent.server.result.ResponseUtils;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AnonymousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lan on 11/21/14.
 */
@Controller
@RequestMapping(value="/device/v1")
public class AnonymousController {
    @Autowired
    private AnonymousService anonymousService;


    @RequestMapping(value = "/anonymousdata/create", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> create(@RequestBody String json) {
        Result<?> r = anonymousService.create(json);
        return ResponseUtils.jsonResp(r);
    }
}
