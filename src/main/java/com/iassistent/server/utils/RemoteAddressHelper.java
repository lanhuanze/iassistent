package com.iassistent.server.utils;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lan on 11/25/14.
 */
public class RemoteAddressHelper {

        private static final String UNKNOWN = "unknown";

        public static String getRemoteIpFrom(HttpServletRequest request) {
            String ip = null;
            int tryCount = 1;

            while (!isIpFound(ip) && tryCount <= 6) {
                switch (tryCount) {
                    case 1:
                        ip = request.getHeader(HttpHeader.X_FORWARDED_FOR.key());
                        break;
                    case 2:
                        ip = request.getHeader(HttpHeader.PROXY_CLIENT_IP.key());
                        break;
                    case 3:
                        ip = request.getHeader(HttpHeader.WL_PROXY_CLIENT_IP.key());
                        break;
                    case 4:
                        ip = request.getHeader(HttpHeader.HTTP_CLIENT_IP.key());
                        break;
                    case 5:
                        ip = request.getHeader(HttpHeader.HTTP_X_FORWARDED_FOR.key());
                        break;
                    default:
                        ip = request.getRemoteAddr();
                }

                tryCount++;
            }

            return ip;
        }

        private static boolean isIpFound(String ip) {
            return ip != null && ip.length() > 0 && !UNKNOWN.equalsIgnoreCase(ip);
        }

    static enum HttpHeader {
        AUTHORIZATION("Authorization"),
        AUTHENTICATION_TYPE_BASIC("Basic"),
        X_AUTH_TOKEN("X-AUTH-TOKEN"),
        WWW_Authenticate("WWW-Authenticate"),
        X_FORWARDED_FOR("X-Forwarded-For"),
        PROXY_CLIENT_IP("Proxy-Client-IP"),
        WL_PROXY_CLIENT_IP("WL-Proxy-Client-IP"),
        HTTP_CLIENT_IP("HTTP_CLIENT_IP"),
        HTTP_X_FORWARDED_FOR("HTTP_X_FORWARDED_FOR");

        private String key;

        private HttpHeader(String key) {
            this.key = key;
        }

        public String key() {
            return this.key;
        }
    }
}
