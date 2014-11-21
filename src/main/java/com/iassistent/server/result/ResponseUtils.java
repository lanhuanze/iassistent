package com.iassistent.server.result;

import com.iassistent.server.utils.GsonHelper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Created by lan on 11/21/14.
 */
public class ResponseUtils {
    private static HttpHeaders JsonResponseHeaders = new HttpHeaders();
    private static HttpHeaders HtmlResponseHeaders = new HttpHeaders();
    private static HttpHeaders XmlResponseHeaders = new HttpHeaders();
    static {
        JsonResponseHeaders.add("Content-Type", "application/json; charset=utf-8");
        HtmlResponseHeaders.add("Content-Type", "text/html; charset=utf-8");
        XmlResponseHeaders.add("Content-Type", "text/xml; charset=utf-8");
    }

    public static final ResponseEntity<String> jsonResp(Result<?> r) {
        return new ResponseEntity<String>(GsonHelper.toJson(r), JsonResponseHeaders, HttpStatus.valueOf(r.getStatusCode()));
    }

    public static final ResponseEntity<String> htmlResp(HtmlGenerator generator, HttpStatus status) {
        return new ResponseEntity<String>(generator.toHtml(),HtmlResponseHeaders, status);
    }

    public static final ResponseEntity<String> xmlResp(XmlGenerator generator, HttpStatus status) {
        return new ResponseEntity<String>(generator.toXml(),HtmlResponseHeaders, status);
    }
}
