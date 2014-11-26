package com.iassistent.server.controller;

import com.iassistent.server.result.ResponseUtils;
import com.iassistent.server.result.Result;
import com.iassistent.server.service.ActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lan on 11/26/14.
 */
@Controller
@RequestMapping(value = "/action/v1")
public class ActionController {
    @Autowired
    private ActionService actionService;

    @RequestMapping(value = "/create", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> create(@RequestBody String json) {
        Result<?> r = actionService.create(json);
        return ResponseUtils.jsonResp(r);
    }

    @RequestMapping(value = "/retrieve/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<String> retrieve(@PathVariable String id, HttpServletRequest req) {
        Result<?> r = actionService.retrieve(id, req);
        return ResponseUtils.jsonResp(r);
    }

    @RequestMapping(value = "/respond/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> retrieve(@PathVariable String id, @RequestBody String json) {
        Result<?> r = actionService.responded(id, json);
        return ResponseUtils.jsonResp(r);
    }

    @RequestMapping(value = "/query/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<String> query(@PathVariable String id) {
        Result<?> r = actionService.byId(id);
        return ResponseUtils.jsonResp(r);
    }

    @RequestMapping(value = "/finish/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<String> finish(@PathVariable String id) {
        Result<?> r = actionService.finish(id);
        return ResponseUtils.jsonResp(r);
    }
}
