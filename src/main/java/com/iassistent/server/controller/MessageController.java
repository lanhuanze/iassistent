package com.iassistent.server.controller;

import com.iassistent.server.result.ResponseUtils;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by lan on 11/25/14.
 */
@Controller
@RequestMapping(value = "/message/v1")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @RequestMapping(value = "/publish", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> publish(@RequestBody String json) {
        Result<?> r = messageService.publishMessage(json);
        return ResponseUtils.jsonResp(r);
    }

    @RequestMapping(value = "/action", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<String> action(HttpServletRequest req, HttpServletResponse resp) {
        Result<?> r = messageService.getAction(req, resp);
        return ResponseUtils.jsonResp(r);
    }
}
