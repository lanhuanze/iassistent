package com.iassistent.server.controller;

import com.iassistent.server.result.ResponseUtils;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lan on 11/24/14.
 */
@Controller
@RequestMapping(value="/account/v1")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping(value = "/register", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> create(@RequestBody String json) {
        Result<?> r = accountService.create(json);
        return ResponseUtils.jsonResp(r);
    }
}
