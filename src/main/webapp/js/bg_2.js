/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/widget/placard/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-placard" style="display: none" load="0">\r\n    <div class="widget-placard-arrow"></div>\r\n    <div class="widget-placard-con">\r\n        <div class="widget-placard-title">\r\n            ' + (null == (__t = common.placard) ? "" : __t) + '\r\n        </div>\r\n        <div class="widget-placard-body" style="display: none;">\r\n            <div class="widget-placard-list">\r\n\r\n            </div>\r\n            <div class="widget-placard-see">\r\n                ' + (null == (__t = common.see_all_placard) ? "" : __t) + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/widget/placard/item.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) _.each(items, function(e) {
        __p += '\r\n<table class="widget-placard-item i-width100p" placardId="' + (null == (__t = e.id) ? "" : __t) + '" mstype="' + (null == (__t = e.ms_type) ? "" : __t) + '" style="opacity:0;margin-left: 176px;" pshow="0">\r\n    <tr>\r\n        <td class="widget-placard-itemImg' + (null == (__t = e.icon) ? "" : __t) + '"><div></div></td>\r\n        <td class="widget-placard-itemCon">\r\n            <div class="widget-placard-itemTeam  over-ellipsis">' + (null == (__t = e.title) ? "" : __t) + '</div>\r\n            <div class="widget-placard-itemDate">' + (null == (__t = Airdroid.Util.dateFormateYMD(Date.parse(new Date(e.publish_start)))) ? "" : __t) + "</div>\r\n            ", e.link_url && (__p += '\r\n            <a class="widget-placard-link"  placardLink="' + (null == (__t = e.link_url) ? "" : __t) + '">\r\n                '), __p += '\r\n                <div class="widget-placard-itemBody"><p>' + (null == (__t = e.summary) ? "" : __t) + '</p>\r\n                    <div class="widget-placard-itemMore">>></div>\r\n                </div>\r\n                ', e.link_url && (__p += "\r\n            </a>\r\n            "), __p += '\r\n        </td>\r\n        <td class="widget-placard-itemOp">\r\n            <div class="widget-placard-itemCancel"></div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n<div class="widget-placard-sep"></div>\r\n'
    });
    return __p
};
var Channel = function() {
    "use strict";

    function e(e, t, i, n) {
        function r(t) {
            for (var i = 0; t.length > i; i++)
                if (t[i].win === e) return !0;
            return !1
        }
        var a = !1;
        if ("*" === t) {
            for (var s in o)
                if (o.hasOwnProperty(s) && "*" !== s && "object" == typeof o[s][i] && (a = r(o[s][i]))) break
        } else o["*"] && o["*"][i] && (a = r(o["*"][i])), !a && o[t] && o[t][i] && (a = r(o[t][i]));
        if (a) throw "A channel is already bound to the same window which overlaps with origin '" + t + "' and has scope '" + i + "'";
        "object" != typeof o[t] && (o[t] = {}), "object" != typeof o[t][i] && (o[t][i] = []), o[t][i].push({
            win: e,
            handler: n
        })
    }

    function t(e, t, i) {
        for (var n = o[t][i], r = 0; n.length > r; r++) n[r].win === e && n.splice(r, 1);
        0 === o[t][i].length && delete o[t][i]
    }

    function i(e) {
        return Array.isArray ? Array.isArray(e) : -1 != ("" + e.constructor).indexOf("Array")
    }
    var n = Math.floor(1000001 * Math.random()),
        o = {},
        r = {},
        a = function(e) {
            try {
                var t = JSON.parse(e.data);
                if ("object" != typeof t || null === t) throw "malformed"
            } catch (e) {
                return
            }
            var i, n, a, s = e.source,
                c = e.origin;
            if ("string" == typeof t.method) {
                var d = t.method.split("::");
                2 == d.length ? (i = d[0], a = d[1]) : a = t.method
            }
            if (t.id !== void 0 && (n = t.id), "string" == typeof a) {
                var l = !1;
                if (o[c] && o[c][i])
                    for (var n = 0; o[c][i].length > n; n++)
                        if (o[c][i][n].win === s) {
                            o[c][i][n].handler(c, a, t), l = !0;
                            break
                        }
                if (!l && o["*"] && o["*"][i])
                    for (var n = 0; o["*"][i].length > n; n++)
                        if (o["*"][i][n].win === s) {
                            o["*"][i][n].handler(c, a, t);
                            break
                        }
            } else n !== void 0 && r[n] && r[n](c, a, t)
        };
    return window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a), {
        build: function(o) {
            var a = function(e) {
                if (o.debugOutput && window.console && window.console.log) {
                    try {
                        "string" != typeof e && (e = JSON.stringify(e))
                    } catch (t) {}
                    console.log("[" + d + "] " + e)
                }
            };
            if (!window.postMessage) throw "jschannel cannot run this browser, no postMessage";
            if (!window.JSON || !window.JSON.stringify || !window.JSON.parse) throw "jschannel cannot run this browser, no JSON parsing/serialization";
            if ("object" != typeof o) throw "Channel build invoked without a proper object argument";
            if (!o.window || !o.window.postMessage) throw "Channel.build() called without a valid window argument";
            if (window === o.window) throw "target window is same as present window -- not allowed";
            var s = !1;
            if ("string" == typeof o.origin) {
                var c;
                "*" === o.origin ? s = !0 : null !== (c = o.origin.match(/^https?:\/\/(?:[-a-zA-Z0-9\.])+(?::\d+)?/)) && (o.origin = c[0].toLowerCase(), s = !0)
            }
            if (!s) throw "Channel.build() called with an invalid origin";
            if (o.scope !== void 0) {
                if ("string" != typeof o.scope) throw "scope, when specified, must be a string";
                if (o.scope.split("::").length > 1) throw "scope may not contain double colons: '::'"
            }
            var d = function() {
                    for (var e = "", t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", i = 0; 5 > i; i++) e += t.charAt(Math.floor(Math.random() * t.length));
                    return e
                }(),
                l = {},
                u = {},
                p = {},
                h = !1,
                f = [],
                g = function(e, t, i) {
                    var n = !1,
                        o = !1;
                    return {
                        origin: t,
                        invoke: function(t, n) {
                            if (!p[e]) throw "attempting to invoke a callback of a nonexistent transaction: " + e;
                            for (var o = !1, r = 0; i.length > r; r++)
                                if (t === i[r]) {
                                    o = !0;
                                    break
                                }
                            if (!o) throw "request supports no such callback '" + t + "'";
                            _({
                                id: e,
                                callback: t,
                                params: n
                            })
                        },
                        error: function(t, i) {
                            if (o = !0, !p[e]) throw "error called for nonexistent message: " + e;
                            delete p[e], _({
                                id: e,
                                error: t,
                                message: i
                            })
                        },
                        complete: function(t) {
                            if (o = !0, !p[e]) throw "complete called for nonexistent message: " + e;
                            delete p[e], _({
                                id: e,
                                result: t
                            })
                        },
                        delayReturn: function(e) {
                            return "boolean" == typeof e && (n = e === !0), n
                        },
                        completed: function() {
                            return o
                        }
                    }
                },
                m = function(e, t, i) {
                    return window.setTimeout(function() {
                        if (u[e]) {
                            var n = "timeout (" + t + "ms) exceeded on method '" + i + "'";
                            u[e].error("timeout_error", n), delete u[e], delete r[e]
                        }
                    }, t)
                },
                E = function(e, t, n) {
                    if ("function" == typeof o.gotMessageObserver) try {
                        o.gotMessageObserver(e, n)
                    } catch (s) {
                        a("gotMessageObserver() raised an exception: " + ("" + s))
                    }
                    if (n.id && t) {
                        if (l[t]) {
                            var c = g(n.id, e, n.callbacks ? n.callbacks : []);
                            p[n.id] = {};
                            try {
                                if (n.callbacks && i(n.callbacks) && n.callbacks.length > 0)
                                    for (var d = 0; n.callbacks.length > d; d++) {
                                        for (var h = n.callbacks[d], f = n.params, m = h.split("/"), E = 0; m.length - 1 > E; E++) {
                                            var A = m[E];
                                            "object" != typeof f[A] && (f[A] = {}), f = f[A]
                                        }
                                        f[m[m.length - 1]] = function() {
                                            var e = h;
                                            return function(t) {
                                                return c.invoke(e, t)
                                            }
                                        }()
                                    }
                                var _ = l[t](c, n.params);
                                c.delayReturn() || c.completed() || c.complete(_)
                            } catch (s) {
                                var v = "runtime_error",
                                    B = null;
                                if ("string" == typeof s ? B = s : "object" == typeof s && (s && i(s) && 2 == s.length ? (v = s[0], B = s[1]) : "string" == typeof s.error && (v = s.error, s.message ? "string" == typeof s.message ? B = s.message : s = s.message : B = "")), null === B) try {
                                    B = JSON.stringify(s), B === void 0 && (B = "" + s)
                                } catch (y) {
                                    B = "" + s
                                }
                                c.error(v, B)
                            }
                        }
                    } else n.id && n.callback ? u[n.id] && u[n.id].callbacks && u[n.id].callbacks[n.callback] ? u[n.id].callbacks[n.callback](n.params) : a("ignoring invalid callback, id:" + n.id + " (" + n.callback + ")") : n.id ? u[n.id] ? (n.error ? u[n.id].error(n.error, n.message) : void 0 !== n.result ? u[n.id].success(n.result) : u[n.id].success(), delete u[n.id], delete r[n.id]) : a("ignoring invalid response: " + n.id) : t && l[t] && l[t](null, n.params)
                };
            e(o.window, o.origin, "string" == typeof o.scope ? o.scope : "", E);
            var A = function(e) {
                    return "string" == typeof o.scope && o.scope.length && (e = [o.scope, e].join("::")), e
                },
                _ = function(e, t) {
                    if (!e) throw "postMessage called with null message";
                    var i = h ? "post  " : "queue ";
                    if (a(i + " message: " + JSON.stringify(e)), t || h) {
                        if ("function" == typeof o.postMessageObserver) try {
                            o.postMessageObserver(o.origin, e)
                        } catch (n) {
                            a("postMessageObserver() raised an exception: " + ("" + n))
                        }
                        o.window.postMessage(JSON.stringify(e), o.origin)
                    } else f.push(e)
                },
                v = function(e, t) {
                    if (a("ready msg received"), h) throw "received ready message while in ready state.  help!";
                    for (d += "ping" === t ? "-R" : "-L", B.unbind("__ready"), h = !0, a("ready msg accepted."), "ping" === t && B.notify({
                        method: "__ready",
                        params: "pong"
                    }); f.length;) _(f.pop());
                    "function" == typeof o.onReady && o.onReady(B)
                },
                B = {
                    unbind: function(e) {
                        if (l[e]) {
                            if (!delete l[e]) throw "can't delete method: " + e;
                            return !0
                        }
                        return !1
                    },
                    bind: function(e, t) {
                        if (!e || "string" != typeof e) throw "'method' argument to bind must be string";
                        if (!t || "function" != typeof t) throw "callback missing from bind params";
                        if (l[e]) throw "method '" + e + "' is already bound!";
                        return l[e] = t, this
                    },
                    call: function(e) {
                        if (!e) throw "missing arguments to call function";
                        if (!e.method || "string" != typeof e.method) throw "'method' argument to call must be string";
                        if (!e.success || "function" != typeof e.success) throw "'success' callback missing from call";
                        var t = {},
                            i = [],
                            o = function(e, n) {
                                if ("object" == typeof n)
                                    for (var r in n)
                                        if (n.hasOwnProperty(r)) {
                                            var a = e + (e.length ? "/" : "") + r;
                                            "function" == typeof n[r] ? (t[a] = n[r], i.push(a), delete n[r]) : "object" == typeof n[r] && o(a, n[r])
                                        }
                            };
                        o("", e.params);
                        var a = {
                            id: n,
                            method: A(e.method),
                            params: e.params
                        };
                        i.length && (a.callbacks = i), e.timeout && m(n, e.timeout, A(e.method)), u[n] = {
                            callbacks: t,
                            error: e.error,
                            success: e.success
                        }, r[n] = E, n++, _(a)
                    },
                    notify: function(e) {
                        if (!e) throw "missing arguments to notify function";
                        if (!e.method || "string" != typeof e.method) throw "'method' argument to notify must be string";
                        _({
                            method: A(e.method),
                            params: e.params
                        })
                    },
                    destroy: function() {
                        t(o.window, o.origin, "string" == typeof o.scope ? o.scope : ""), window.removeEventListener ? window.removeEventListener("message", E, !1) : window.detachEvent && window.detachEvent("onmessage", E), h = !1, l = {}, p = {}, u = {}, o.origin = null, f = [], a("channel destroyed"), d = ""
                    }
                };
            return B.bind("__ready", v), setTimeout(function() {
                _({
                    method: A("__ready"),
                    params: "ping"
                }, !0)
            }, 0), B
        }
    }
}();
(function() {
    var e = Airdroid.Service,
        t = Airdroid.Util;
    window.ApiProvider = function(e, t) {
        var i = this;
        i._accessToken = null, i._accessMothod = null, i.chan = Channel.build({
            window: document.getElementById(e).contentWindow,
            origin: "*",
            scope: "AirDroid_Web_OpenAPI",
            onReady: function() {
                i.init(), t.hookChan(i.chan)
            }
        }), i.controlMap = {
            d41d8cd98f00b204e9800998ecf8427e: {
                token: "c03acf2ccd22250040fee52dc36adbf7",
                openMap: {
                    SERVER_METHODS: ["registerPushHandle", "getAccount", "getDeviceOpt", "connectPhone", "jsonpRequest", "getStreamAssets", "reconnectPhone"],
                    SYSTEM_METHODS: ["system.alert", "system.confirm", "system.showBodyMask", "system.removeBodyMask", "system.prompt"]
                }
            },
            fc33eb0086f72981713f944c3f9f9d48: {
                token: "e6e21d612b4341fc86ec60338356cb61",
                openMap: {
                    SERVER_METHODS: ["openPlayStoreOnDeviceThemer", "sendIntentBroadCastThemer", "isThemerAppInstalled"],
                    SYSTEM_METHODS: ["system.alert", "system.confirm"]
                }
            }
        }
    }, ApiProvider.prototype = {
        init: function() {
            var i = this;
            i.SERVER_APIS = {
                init: function(e, t) {
                    e.delayReturn(!0);
                    var n = t.accessKey,
                        o = i.controlMap[n];
                    if (!o) throw {
                        error: "forbidden",
                        message: "Illegal access key"
                    };
                    i._accessToken = o.token, i._accessMothod = o.openMap.SERVER_METHODS.concat(o.openMap.SYSTEM_METHODS), e.complete(i.getAccessToken())
                },
                registerPushHandle: function(e, t) {
                    var n = t.deviceId,
                        o = t.pushArr;
                    Airdroid.MessageManage.addWhiteListListener(o), _.each(o, function(e) {
                        Airdroid.MessageManage.removeListener(e, void 0, "open_api_" + n), Airdroid.MessageManage.addListener(e, function(t) {
                            t.data.deviceId === n && i.chan.call({
                                method: e,
                                params: t.data,
                                success: function() {
                                    return !0
                                },
                                error: function() {
                                    return !1
                                }
                            })
                        }, "open_api_" + n)
                    })
                },
                connectPhone: function(e, t) {
                    e.delayReturn(!0);
                    var i = t.deviceId,
                        n = Airdroid.DeviceManage.getDeviceObjById(i),
                        o = function(e) {
                            return {
                                result: e ? 1 : 0,
                                isRemote: n.isRemote()
                            }
                        };
                    if (n.isConnect()) return e.complete(o(!0)), !1;
                    var r = {
                        successCb: function() {
                            e.complete(o(!0))
                        },
                        failCb: function() {
                            e.complete(o(!1))
                        },
                        tp_type: "account"
                    };
                    n.doConnect(r)
                },
                reconnectPhone: function(e, t) {
                    e.delayReturn(!0);
                    var i = t.deviceId,
                        n = Airdroid.DeviceManage.getDeviceObjById(i),
                        o = function(e) {
                            return {
                                result: e ? 1 : 0,
                                isRemote: n.isRemote()
                            }
                        };
                    n._connectObj.reconnectPhone(function() {
                        e.complete(o(!0))
                    }, function() {
                        e.complete(o(!1))
                    })
                },
                jsonpRequest: function(t, i) {
                    t.delayReturn(!0);
                    var n = i.deviceId,
                        o = Airdroid.DeviceManage.getDeviceObjById(n);
                    Airdroid.DeviceManage.setRequestDeviceObj(o), e.jsonpRequest("", i.path, i.params, function(e) {
                        t.complete({
                            result: 1,
                            data: e
                        })
                    }, function(e) {
                        t.complete({
                            result: 0,
                            data: e
                        })
                    })
                },
                getStreamAssets: function(t, i) {
                    var n = i.deviceId,
                        o = Airdroid.DeviceManage.getDeviceObjById(n);
                    return Airdroid.DeviceManage.setRequestDeviceObj(o), e.getStreamAssets("", i.path, i.params)
                },
                getDeviceOpt: function(e, t) {
                    var i = t.deviceId,
                        n = Airdroid.DeviceManage.getDeviceObjById(i);
                    return n.getDeviceOpt()
                },
                getAccount: function() {
                    return Airdroid.UserManage.getAccount()
                },
                openPlayStoreOnDeviceThemer: function(i) {
                    i.delayReturn(!0);
                    var n = Airdroid.DeviceManage.getCurrentDeviceObj();
                    t.trackEvent("AD_OPEN", "themer", "openStore"), n && n.isConnect() || i.complete({
                        result: 0
                    });
                    var o = t.getPartnerConfigByName("Themer");
                    Airdroid.DeviceManage.setRequestDeviceObj(n), e.openPlayStoreOnDevice({
                        url: o.playUrl
                    }, function(e) {
                        1 == e.result ? i.complete({
                            result: 1
                        }) : i.complete({
                            result: 0
                        })
                    }, function() {
                        i.complete({
                            result: 0
                        })
                    })
                },
                isThemerAppInstalled: function(i) {
                    i.delayReturn(!0);
                    var n = Airdroid.DeviceManage.getCurrentDeviceObj();
                    Airdroid.DeviceManage.setRequestDeviceObj(n);
                    var o = t.getPartnerConfigByName("Themer");
                    e.isAppInstalled({
                        appId: o.appId
                    }, function(e) {
                        Airdroid.Util.trackEvent("AD_OPEN", "themer", 1 == e.result ? "installed" : "noInstalled"), 1 == e.result ? i.complete({
                            result: 1,
                            appVer: e.appVer
                        }) : i.complete({
                            result: 0
                        })
                    })
                },
                sendIntentBroadCastThemer: function(i, n) {
                    i.delayReturn(!0), t.trackEvent("AD_OPEN", "themer", "broadcast");
                    var o = JSON.stringify(n.extras),
                        r = Airdroid.DeviceManage.getCurrentDeviceObj();
                    Airdroid.DeviceManage.setRequestDeviceObj(r);
                    var a = t.getPartnerConfigByName("Themer");
                    e.sendIntentBroadCast({
                        action: a.api.broadcastAction,
                        extras: o
                    }, function(e) {
                        1 == e.result ? i.complete({
                            result: 1
                        }) : i.complete({
                            result: 0
                        })
                    }, function() {
                        i.complete({
                            result: 0
                        })
                    })
                }
            }, i.SYSTEM_APIS = {
                "system.alert": function(e, n) {
                    var o = $.extend({}, n);
                    return o.yesCallback = function() {
                        if (n.yesCallback) {
                            if (_.isObject(n.param)) var e = n.param;
                            else var e = {};
                            i.chan.call({
                                method: n.yesCallback,
                                params: e,
                                success: function() {
                                    return i.chan.call({
                                        method: "removecbListen",
                                        params: n.yesCallback,
                                        success: function() {
                                            return !0
                                        },
                                        error: function() {
                                            return !1
                                        }
                                    }), !0
                                },
                                error: function() {
                                    return !1
                                }
                            })
                        }
                    }, t.alert(o.msg, o.yesCallback), !0
                },
                "system.confirm": function(e, n) {
                    var o = $.extend({}, n);
                    if (_.isObject(n.param)) var r = n.param;
                    else var r = {};
                    return o.yesCallback = function() {
                        n.yesCallback && i.chan.call({
                            method: n.yesCallback,
                            params: r,
                            success: function() {
                                return i.chan.call({
                                    method: "removecbListen",
                                    params: n.yesCallback,
                                    success: function() {
                                        return !0
                                    },
                                    error: function() {
                                        return !1
                                    }
                                }), !0
                            },
                            error: function() {
                                return !1
                            }
                        })
                    }, o.cancelCallback = function() {
                        n.cancelCallback && i.chan.call({
                            method: n.cancelCallback,
                            params: r,
                            success: function() {
                                return i.chan.call({
                                    method: "removecbListen",
                                    params: n.cancelCallback,
                                    success: function() {
                                        return !0
                                    },
                                    error: function() {
                                        return !1
                                    }
                                }), !0
                            },
                            error: function() {
                                return !1
                            }
                        })
                    }, t.confirm(o.msg, o.yesCallback, o.cancelCallback), !0
                },
                "system.prompt": function(e, n) {
                    var o = $.extend({}, n);
                    if (_.isObject(n.param)) var r = n.param;
                    else var r = {};
                    return o.yesCallback = function() {
                        var e = arguments[0];
                        n.yesCallback && i.chan.call({
                            method: n.yesCallback,
                            params: {
                                data: e
                            },
                            success: function() {
                                return i.chan.call({
                                    method: "removecbListen",
                                    params: n.yesCallback,
                                    success: function() {
                                        return !0
                                    },
                                    error: function() {
                                        return !1
                                    }
                                }), !0
                            },
                            error: function() {
                                return !1
                            }
                        })
                    }, o.cancelCallback = function() {
                        n.cancelCallback && i.chan.call({
                            method: n.cancelCallback,
                            params: r,
                            success: function() {
                                return i.chan.call({
                                    method: "removecbListen",
                                    params: n.cancelCallback,
                                    success: function() {
                                        return !0
                                    },
                                    error: function() {
                                        return !1
                                    }
                                }), !0
                            },
                            error: function() {
                                return !1
                            }
                        })
                    }, o.validateCallback = function(e, t) {
                        n.validateCallback && i.chan.call({
                            method: n.validateCallback,
                            params: {
                                data: e
                            },
                            success: function(e) {
                                return t(e) && i.chan.call({
                                    method: "removecbListen",
                                    params: n.validateCallback,
                                    success: function() {
                                        return !0
                                    },
                                    error: function() {
                                        return !1
                                    }
                                }), !0
                            },
                            error: function() {
                                return !1
                            }
                        })
                    }, t.prompt(o.type, o.title, o.fieldName, o.defaultValue, o.yesCallback, o.cancelCallback, o.validateCallback), !0
                },
                "system.showBodyMask": function() {
                    t.showBodyMask()
                },
                "system.removeBodyMask": function() {
                    t.removeBodyMask()
                },
                "system.traceEventXDA": function(e, i) {
                    var n = i.themeName,
                        o = i.active;
                    t.trackEvent("AD_OPEN", "themer_" + n, o)
                }
            }, i.ALL_APIS = $.extend(!0, {}, i.SERVER_APIS, i.SYSTEM_APIS), i.provideAll()
        },
        getAccessToken: function() {
            return this._accessToken
        },
        provideAll: function() {
            var e = this;
            e.provide(_.keys(e.ALL_APIS))
        },
        provide: function(e) {
            var t = this;
            e = e || [], _.each(e, function(e) {
                var i = _.has(t.ALL_APIS, e);
                i && t.chan.bind(e, function(i, n) {
                    var o = n.accessToken;
                    if (o && t.getAccessToken() === o && t._accessMothod.indexOf(e) > -1 || "init" === e) return t.ALL_APIS[e].apply(this, arguments);
                    if (t.getAccessToken() !== o) throw {
                        error: "forbidden",
                        message: "token error"
                    };
                    if (0 > t._accessMothod.indexOf(e)) throw {
                        error: "forbidden",
                        message: e + " method forbidden"
                    }
                })
            })
        },
        getChannelObj: function() {
            return this.chan
        }
    }
})(),
    function(e, t, i) {
        e.fn.jScrollPane = function(n) {
            function o(n, o) {
                function r(t) {
                    var o, s, d, u, p, h, m = !1,
                        E = !1;
                    if (W = t, $ === i) p = n.scrollTop(), h = n.scrollLeft(), n.css({
                        overflow: "hidden",
                        padding: 0
                    }), q = n.innerWidth() + _t, z = n.innerHeight(), n.width(q), $ = e('<div class="jspPane" />').css("padding", At).append(n.children()), H = e('<div class="jspContainer" />').css({
                        width: q + "px",
                        height: z + "px"
                    }).append($).appendTo(n);
                    else {
                        if (n.css("width", ""), m = W.stickToBottom && S(), E = W.stickToRight && x(), u = n.innerWidth() + _t != q || n.outerHeight() != z, u && (q = n.innerWidth() + _t, z = n.innerHeight(), H.css({
                                width: q + "px",
                                height: z + "px"
                            })), !u && vt == V && $.outerHeight() == Y) return n.width(q), i;
                        vt = V, $.css("width", ""), n.width(q), H.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    $.css("overflow", "auto"), V = t.contentWidth ? t.contentWidth : $[0].scrollWidth, Y = $[0].scrollHeight, $.css("overflow", ""), G = V / q, Q = Y / z, X = Q > 1, K = G > 1, K || X ? (n.addClass("jspScrollable"), o = W.maintainPosition && (et || nt), o && (s = k(), d = D()), a(), c(), l(), o && (b(E ? V - q : s, !1), C(m ? Y - z : d, !1)), M(), T(), R(), W.enableKeyboardNavigation && L(), W.clickOnTrack && f(), N(), W.hijackInternalLinks && P()) : (n.removeClass("jspScrollable"), $.css({
                        top: 0,
                        width: H.width() - _t
                    }), F(), U(), O(), g()), W.autoReinitialise && !Et ? Et = setInterval(function() {
                        r(W)
                    }, W.autoReinitialiseDelay) : !W.autoReinitialise && Et && clearInterval(Et), p && n.scrollTop(0) && C(p, !1), h && n.scrollLeft(0) && b(h, !1), n.trigger("jsp-initialised", [K || X])
                }

                function a() {
                    X && (H.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ot = H.find(">.jspVerticalBar"), rt = ot.find(">.jspTrack"), J = rt.find(">.jspDrag"), W.showArrows && (dt = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", p(0, -1)).bind("click.jsp", I), lt = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", p(0, 1)).bind("click.jsp", I), W.arrowScrollOnHover && (dt.bind("mouseover.jsp", p(0, -1, dt)), lt.bind("mouseover.jsp", p(0, 1, lt))), u(rt, W.verticalArrowPositions, dt, lt)), st = z, H.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        st -= e(this).outerHeight()
                    }), J.hover(function() {
                        J.addClass("jspHover")
                    }, function() {
                        J.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", I), J.addClass("jspActive");
                        var i = t.pageY - J.position().top;
                        return e("html").bind("mousemove.jsp", function(e) {
                            E(e.pageY - i, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", m), !1
                    }), s())
                }

                function s() {
                    rt.height(st + "px"), et = 0, at = W.verticalGutter + rt.outerWidth(), $.width(q);
                    try {
                        0 === ot.position().left && $.css("margin-left", at + "px")
                    } catch (e) {}
                }

                function c() {
                    K && (H.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), ut = H.find(">.jspHorizontalBar"), pt = ut.find(">.jspTrack"), tt = pt.find(">.jspDrag"), W.showArrows && (gt = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", p(-1, 0)).bind("click.jsp", I), mt = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", p(1, 0)).bind("click.jsp", I), W.arrowScrollOnHover && (gt.bind("mouseover.jsp", p(-1, 0, gt)), mt.bind("mouseover.jsp", p(1, 0, mt))), u(pt, W.horizontalArrowPositions, gt, mt)), tt.hover(function() {
                        tt.addClass("jspHover")
                    }, function() {
                        tt.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", I), tt.addClass("jspActive");
                        var i = t.pageX - tt.position().left;
                        return e("html").bind("mousemove.jsp", function(e) {
                            _(e.pageX - i, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", m), !1
                    }), ht = H.innerWidth(), d())
                }

                function d() {
                    H.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        ht -= e(this).outerWidth()
                    }), pt.width(ht + "px"), nt = 0
                }

                function l() {
                    if (K && X) {
                        var t = pt.outerHeight(),
                            i = rt.outerWidth();
                        st -= t, e(ut).find(">.jspCap:visible,>.jspArrow").each(function() {
                            ht += e(this).outerWidth()
                        }), ht -= i, z -= i, q -= t, pt.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), s(), d()
                    }
                    K && $.width(H.outerWidth() - _t + "px"), Y = $.outerHeight(), Q = Y / z, K && (ft = Math.ceil(1 / G * ht), ft > W.horizontalDragMaxWidth ? ft = W.horizontalDragMaxWidth : W.horizontalDragMinWidth > ft && (ft = W.horizontalDragMinWidth), tt.width(ft + "px"), it = ht - ft, v(nt)), X && (ct = Math.ceil(1 / Q * st), ct > W.verticalDragMaxHeight ? ct = W.verticalDragMaxHeight : W.verticalDragMinHeight > ct && (ct = W.verticalDragMinHeight), J.height(ct + "px"), Z = st - ct, A(et))
                }

                function u(e, t, i, n) {
                    var o, r = "before",
                        a = "after";
                    "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == r ? a = t : t == a && (r = t, o = i, i = n, n = o), e[r](i)[a](n)
                }

                function p(e, t, i) {
                    return function() {
                        return h(e, t, this, i), this.blur(), !1
                    }
                }

                function h(t, i, n, o) {
                    n = e(n).addClass("jspActive");
                    var r, a, s = !0,
                        c = function() {
                            0 !== t && Bt.scrollByX(t * W.arrowButtonSpeed), 0 !== i && Bt.scrollByY(i * W.arrowButtonSpeed), a = setTimeout(c, s ? W.initialDelay : W.arrowRepeatFreq), s = !1
                        };
                    c(), r = o ? "mouseout.jsp" : "mouseup.jsp", o = o || e("html"), o.bind(r, function() {
                        n.removeClass("jspActive"), a && clearTimeout(a), a = null, o.unbind(r)
                    })
                }

                function f() {
                    g(), X && rt.bind("mousedown.jsp", function(t) {
                        if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                            var n, o = e(this),
                                r = o.offset(),
                                a = t.pageY - r.top - et,
                                s = !0,
                                c = function() {
                                    var e = o.offset(),
                                        r = t.pageY - e.top - ct / 2,
                                        l = z * W.scrollPagePercent,
                                        u = Z * l / (Y - z);
                                    if (0 > a) et - u > r ? Bt.scrollByY(-l) : E(r);
                                    else {
                                        if (!(a > 0)) return d(), i;
                                        r > et + u ? Bt.scrollByY(l) : E(r)
                                    }
                                    n = setTimeout(c, s ? W.initialDelay : W.trackClickRepeatFreq), s = !1
                                },
                                d = function() {
                                    n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", d)
                                };
                            return c(), e(document).bind("mouseup.jsp", d), !1
                        }
                    }), K && pt.bind("mousedown.jsp", function(t) {
                        if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                            var n, o = e(this),
                                r = o.offset(),
                                a = t.pageX - r.left - nt,
                                s = !0,
                                c = function() {
                                    var e = o.offset(),
                                        r = t.pageX - e.left - ft / 2,
                                        l = q * W.scrollPagePercent,
                                        u = it * l / (V - q);
                                    if (0 > a) nt - u > r ? Bt.scrollByX(-l) : _(r);
                                    else {
                                        if (!(a > 0)) return d(), i;
                                        r > nt + u ? Bt.scrollByX(l) : _(r)
                                    }
                                    n = setTimeout(c, s ? W.initialDelay : W.trackClickRepeatFreq), s = !1
                                },
                                d = function() {
                                    n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", d)
                                };
                            return c(), e(document).bind("mouseup.jsp", d), !1
                        }
                    })
                }

                function g() {
                    pt && pt.unbind("mousedown.jsp"), rt && rt.unbind("mousedown.jsp")
                }

                function m() {
                    e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), J && J.removeClass("jspActive"), tt && tt.removeClass("jspActive")
                }

                function E(e, t) {
                    X && (0 > e ? e = 0 : e > Z && (e = Z), t === i && (t = W.animateScroll), t ? Bt.animate(J, "top", e, A) : (J.css("top", e), A(e)))
                }

                function A(e) {
                    e === i && (e = J.position().top), H.scrollTop(0), et = e;
                    var t = 0 === et,
                        o = et == Z,
                        r = e / Z,
                        a = -r * (Y - z);
                    (yt != t || bt != o) && (yt = t, bt = o, n.trigger("jsp-arrow-change", [yt, bt, Ct, wt])), B(t, o), $.css("top", a), n.trigger("jsp-scroll-y", [-a, t, o]).trigger("scroll")
                }

                function _(e, t) {
                    K && (0 > e ? e = 0 : e > it && (e = it), t === i && (t = W.animateScroll), t ? Bt.animate(tt, "left", e, v) : (tt.css("left", e), v(e)))
                }

                function v(e) {
                    e === i && (e = tt.position().left), H.scrollTop(0), nt = e;
                    var t = 0 === nt,
                        o = nt == it,
                        r = e / it,
                        a = -r * (V - q);
                    (Ct != t || wt != o) && (Ct = t, wt = o, n.trigger("jsp-arrow-change", [yt, bt, Ct, wt])), y(t, o), $.css("left", a), n.trigger("jsp-scroll-x", [-a, t, o]).trigger("scroll")
                }

                function B(e, t) {
                    W.showArrows && (dt[e ? "addClass" : "removeClass"]("jspDisabled"), lt[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function y(e, t) {
                    W.showArrows && (gt[e ? "addClass" : "removeClass"]("jspDisabled"), mt[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function C(e, t) {
                    var i = e / (Y - z);
                    E(i * Z, t)
                }

                function b(e, t) {
                    var i = e / (V - q);
                    _(i * it, t)
                }

                function w(t, i, n) {
                    var o, r, a, s, c, d, l, u, p, h = 0,
                        f = 0;
                    try {
                        o = e(t)
                    } catch (g) {
                        return
                    }
                    for (r = o.outerHeight(), a = o.outerWidth(), H.scrollTop(0), H.scrollLeft(0); !o.is(".jspPane");)
                        if (h += o.position().top, f += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName)) return;
                    s = D(), d = s + z, s > h || i ? u = h - W.verticalGutter : h + r > d && (u = h - z + r + W.verticalGutter), u && C(u, n), c = k(), l = c + q, c > f || i ? p = f - W.horizontalGutter : f + a > l && (p = f - q + a + W.horizontalGutter), p && b(p, n)
                }

                function k() {
                    return -$.position().left
                }

                function D() {
                    return -$.position().top
                }

                function S() {
                    var e = Y - z;
                    return e > 20 && 10 > e - D()
                }

                function x() {
                    var e = V - q;
                    return e > 20 && 10 > e - k()
                }

                function T() {
                    H.unbind(Dt).bind(Dt, function(e, t, i, n) {
                        var o = nt,
                            r = et;
                        return Bt.scrollBy(i * W.mouseWheelSpeed, -n * W.mouseWheelSpeed, !1), o == nt && r == et
                    })
                }

                function F() {
                    H.unbind(Dt)
                }

                function I() {
                    return !1
                }

                function M() {
                    $.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                        w(e.target, !1)
                    })
                }

                function U() {
                    $.find(":input,a").unbind("focus.jsp")
                }

                function L() {
                    function t() {
                        var e = nt,
                            t = et;
                        switch (i) {
                            case 40:
                                Bt.scrollByY(W.keyboardSpeed, !1);
                                break;
                            case 38:
                                Bt.scrollByY(-W.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                Bt.scrollByY(z * W.scrollPagePercent, !1);
                                break;
                            case 33:
                                Bt.scrollByY(-z * W.scrollPagePercent, !1);
                                break;
                            case 39:
                                Bt.scrollByX(W.keyboardSpeed, !1);
                                break;
                            case 37:
                                Bt.scrollByX(-W.keyboardSpeed, !1)
                        }
                        return o = e != nt || t != et
                    }
                    var i, o, r = [];
                    K && r.push(ut[0]), X && r.push(ot[0]), $.focus(function() {
                        n.focus()
                    }), n.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(n) {
                        if (n.target === this || r.length && e(n.target).closest(r).length) {
                            var a = nt,
                                s = et;
                            switch (n.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    i = n.keyCode, t();
                                    break;
                                case 35:
                                    C(Y - z), i = null;
                                    break;
                                case 36:
                                    C(0), i = null
                            }
                            return o = n.keyCode == i && a != nt || s != et, !o
                        }
                    }).bind("keypress.jsp", function(e) {
                        return e.keyCode == i && t(), !o
                    }), W.hideFocus ? (n.css("outline", "none"), "hideFocus" in H[0] && n.attr("hideFocus", !0)) : (n.css("outline", ""), "hideFocus" in H[0] && n.attr("hideFocus", !1))
                }

                function O() {
                    n.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
                }

                function N() {
                    if (location.hash && location.hash.length > 1) {
                        var t, i, n = escape(location.hash.substr(1));
                        try {
                            t = e("#" + n + ', a[name="' + n + '"]')
                        } catch (o) {
                            return
                        }
                        t.length && $.find(n) && (0 === H.scrollTop() ? i = setInterval(function() {
                            H.scrollTop() > 0 && (w(t, !0), e(document).scrollTop(H.position().top), clearInterval(i))
                        }, 50) : (w(t, !0), e(document).scrollTop(H.position().top)))
                    }
                }

                function P() {
                    e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(i) {
                        var n, o, r, a, s, c, d = this.href.substr(0, this.href.indexOf("#")),
                            l = location.href;
                        if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), d === l) {
                            n = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                o = e("#" + n + ', a[name="' + n + '"]')
                            } catch (u) {
                                return
                            }
                            o.length && (r = o.closest(".jspScrollable"), a = r.data("jsp"), a.scrollToElement(o, !0), r[0].scrollIntoView && (s = e(t).scrollTop(), c = o.offset().top, (s > c || c > s + e(t).height()) && r[0].scrollIntoView()), i.preventDefault())
                        }
                    }))
                }

                function R() {
                    var e, t, n, o, r, a = !1;
                    H.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(i) {
                        var s = i.originalEvent.touches[0];
                        e = k(), t = D(), n = s.pageX, o = s.pageY, r = !1, a = !0
                    }).bind("touchmove.jsp", function(i) {
                        if (a) {
                            var s = i.originalEvent.touches[0],
                                c = nt,
                                d = et;
                            return Bt.scrollTo(e + n - s.pageX, t + o - s.pageY), r = r || Math.abs(n - s.pageX) > 5 || Math.abs(o - s.pageY) > 5, c == nt && d == et
                        }
                    }).bind("touchend.jsp", function() {
                        a = !1
                    }).bind("click.jsp-touchclick", function() {
                        return r ? (r = !1, !1) : i
                    })
                }

                function j() {
                    var e = D(),
                        t = k();
                    n.removeClass("jspScrollable").unbind(".jsp"), n.replaceWith(kt.append($.children())), kt.scrollTop(e), kt.scrollLeft(t), Et && clearInterval(Et)
                }
                var W, $, q, z, H, V, Y, G, Q, X, K, J, Z, et, tt, it, nt, ot, rt, at, st, ct, dt, lt, ut, pt, ht, ft, gt, mt, Et, At, _t, vt, Bt = this,
                    yt = !0,
                    Ct = !0,
                    bt = !1,
                    wt = !1,
                    kt = n.clone(!1, !1).empty(),
                    Dt = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                At = n.css("paddingTop") + " " + n.css("paddingRight") + " " + n.css("paddingBottom") + " " + n.css("paddingLeft"), _t = (parseInt(n.css("paddingLeft"), 10) || 0) + (parseInt(n.css("paddingRight"), 10) || 0), e.extend(Bt, {
                    reinitialise: function(t) {
                        t = e.extend({}, W, t), r(t)
                    },
                    scrollToElement: function(e, t, i) {
                        w(e, t, i)
                    },
                    scrollTo: function(e, t, i) {
                        b(e, i), C(t, i)
                    },
                    scrollToX: function(e, t) {
                        b(e, t)
                    },
                    scrollToY: function(e, t) {
                        C(e, t)
                    },
                    scrollToPercentX: function(e, t) {
                        b(e * (V - q), t)
                    },
                    scrollToPercentY: function(e, t) {
                        C(e * (Y - z), t)
                    },
                    scrollBy: function(e, t, i) {
                        Bt.scrollByX(e, i), Bt.scrollByY(t, i)
                    },
                    scrollByX: function(e, t) {
                        var i = k() + Math[0 > e ? "floor" : "ceil"](e),
                            n = i / (V - q);
                        _(n * it, t)
                    },
                    scrollByY: function(e, t) {
                        var i = D() + Math[0 > e ? "floor" : "ceil"](e),
                            n = i / (Y - z);
                        E(n * Z, t)
                    },
                    positionDragX: function(e, t) {
                        _(e, t)
                    },
                    positionDragY: function(e, t) {
                        E(e, t)
                    },
                    animate: function(e, t, i, n) {
                        var o = {};
                        o[t] = i, e.animate(o, {
                            duration: W.animateDuration,
                            easing: W.animateEase,
                            queue: !1,
                            step: n
                        })
                    },
                    getContentPositionX: function() {
                        return k()
                    },
                    getContentPositionY: function() {
                        return D()
                    },
                    getContentWidth: function() {
                        return V
                    },
                    getContentHeight: function() {
                        return Y
                    },
                    getPercentScrolledX: function() {
                        return k() / (V - q)
                    },
                    getPercentScrolledY: function() {
                        return D() / (Y - z)
                    },
                    getIsScrollableH: function() {
                        return K
                    },
                    getIsScrollableV: function() {
                        return X
                    },
                    getContentPane: function() {
                        return $
                    },
                    scrollToBottom: function(e) {
                        E(Z, e)
                    },
                    hijackInternalLinks: e.noop,
                    destroy: function() {
                        j()
                    }
                }), r(o)
            }
            return n = e.extend({}, e.fn.jScrollPane.defaults, n), e.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                n[this] = n[this] || n.speed
            }), this.each(function() {
                var t = e(this),
                    i = t.data("jsp");
                i ? i.reinitialise(n) : (e("script", t).filter('[type="text/javascript"],not([type])').remove(), i = new o(t, n), t.data("jsp", i))
            })
        }, e.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: i,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 0,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        }
    }(jQuery, this),
    function(e) {
        function t(t, n) {
            var r = t == window,
                l = n && void 0 !== n.message ? n.message : void 0;
            n = e.extend({}, e.blockUI.defaults, n || {}), n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {});
            var g = e.extend({}, e.blockUI.defaults.css, n.css || {}),
                m = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {});
            if (l = void 0 === l ? n.message : l, r && h && i(window, {
                    fadeOut: 0
                }), l && "string" != typeof l && (l.parentNode || l.jquery)) {
                var E = l.jquery ? l[0] : l,
                    A = {};
                e(t).data("blockUI.history", A), E && (A.el = E, A.parent = E.parentNode, A.display = E.style.display, A.position = E.style.position, A.parent && A.parent.removeChild(E))
            }
            e(t).data("blockUI.onUnblock", n.onUnblock);
            var _, v, B = n.baseZ,
                y = e.browser.msie || n.forceIframe ? e('<iframe class="blockUI" style="z-index:' + B++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'),
                C = n.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + B++ +';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + B++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
            v = n.theme && r ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (B + 10) + ';display:none;position:fixed">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>" + '<div class="ui-widget-content ui-dialog-content"></div>' + "</div>" : n.theme ? '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (B + 10) + ';display:none;position:absolute">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>" + '<div class="ui-widget-content ui-dialog-content"></div>' + "</div>" : r ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (B + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (B + 10) + ';display:none;position:absolute"></div>', _ = e(v), l && (n.theme ? (_.css(m), _.addClass("ui-widget-content")) : _.css(g)), n.theme || n.applyPlatformOpacityRules && e.browser.mozilla && /Linux/.test(navigator.platform) || C.css(n.overlayCSS), C.css("position", r ? "fixed" : "absolute"), (e.browser.msie || n.forceIframe) && y.css("opacity", 0);
            var b = [y, C, _],
                w = r ? e("body") : e(t);
            e.each(b, function() {
                this.appendTo(w)
            }), n.theme && n.draggable && e.fn.draggable && _.draggable({
                handle: ".ui-dialog-titlebar",
                cancel: "li"
            });
            var k = u && (!e.boxModel || e("object,embed", r ? null : t).length > 0);
            if (p || k) {
                if (r && n.allowBodyStretch && e.boxModel && e("html,body").css("height", "100%"), (p || !e.boxModel) && !r) var D = c(t, "borderTopWidth"),
                    S = c(t, "borderLeftWidth"),
                    x = D ? "(0 - " + D + ")" : 0,
                    T = S ? "(0 - " + S + ")" : 0;
                e.each([y, C, _], function(e, t) {
                    var i = t[0].style;
                    if (i.position = "absolute", 2 > e) r ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), r ? i.setExpression("width", 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), T && i.setExpression("left", T), x && i.setExpression("top", x);
                    else if (n.centerY) r && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0;
                    else if (!n.centerY && r) {
                        var o = n.css && n.css.top ? parseInt(n.css.top) : 0,
                            a = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + o + ') + "px"';
                        i.setExpression("top", a)
                    }
                })
            }
            if (l && (n.theme ? _.find(".ui-widget-content").append(l) : _.append(l), (l.jquery || l.nodeType) && e(l).show()), (e.browser.msie || n.forceIframe) && n.showOverlay && y.show(), n.fadeIn) {
                var F = n.onBlock ? n.onBlock : d,
                    I = n.showOverlay && !l ? F : d,
                    M = l ? F : d;
                n.showOverlay && C._fadeIn(n.fadeIn, I), l && _._fadeIn(n.fadeIn, M)
            } else n.showOverlay && C.show(), l && _.show(), n.onBlock && n.onBlock();
            if (o(1, t, n), r ? (h = _[0], f = e(":input:enabled:visible", h), n.focusInput && setTimeout(a, 20)) : s(_[0], n.centerX, n.centerY), n.timeout) {
                var U = setTimeout(function() {
                    r ? e.unblockUI(n) : e(t).unblock(n)
                }, n.timeout);
                e(t).data("blockUI.timeout", U)
            }
        }

        function i(t, i) {
            var r = t == window,
                a = e(t),
                s = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), i = e.extend({}, e.blockUI.defaults, i || {}), o(0, t, i), null === i.onUnblock && (i.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var d;
            d = r ? e("body").children().filter(".blockUI").add("body > .blockUI") : e(".blockUI", t), r && (h = f = null), i.fadeOut ? (d.fadeOut(i.fadeOut), setTimeout(function() {
                n(d, s, i, t)
            }, i.fadeOut)) : n(d, s, i, t)
        }

        function n(t, i, n, o) {
            t.each(function() {
                this.parentNode && this.parentNode.removeChild(this)
            }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.parent && i.parent.appendChild(i.el), e(o).removeData("blockUI.history")), "function" == typeof n.onUnblock && n.onUnblock(o, n)
        }

        function o(t, i, n) {
            var o = i == window,
                a = e(i);
            if ((t || (!o || h) && (o || a.data("blockUI.isBlocked"))) && (o || a.data("blockUI.isBlocked", t), n.bindEvents && (!t || n.showOverlay))) {
                var s = "mousedown mouseup keydown keypress";
                t ? e(document).bind(s, n, r) : e(document).unbind(s, r)
            }
        }

        function r(t) {
            if (t.keyCode && 9 == t.keyCode && h && t.data.constrainTabKey) {
                var i = f,
                    n = !t.shiftKey && t.target === i[i.length - 1],
                    o = t.shiftKey && t.target === i[0];
                if (n || o) return setTimeout(function() {
                    a(o)
                }, 10), !1
            }
            var r = t.data;
            return e(t.target).parents("div." + r.blockMsgClass).length > 0 ? !0 : 0 == e(t.target).parents().children().filter("div.blockUI").length
        }

        function a(e) {
            if (f) {
                var t = f[e === !0 ? f.length - 1 : 0];
                t && t.focus()
            }
        }

        function s(e, t, i) {
            var n = e.parentNode,
                o = e.style,
                r = (n.offsetWidth - e.offsetWidth) / 2 - c(n, "borderLeftWidth"),
                a = (n.offsetHeight - e.offsetHeight) / 2 - c(n, "borderTopWidth");
            t && (o.left = r > 0 ? r + "px" : "0"), i && (o.top = a > 0 ? a + "px" : "0")
        }

        function c(t, i) {
            return parseInt(e.css(t, i)) || 0
        }
        if (/1\.(0|1|2)\.(0|1|2)/.test(e.fn.jquery) || /^1.1/.test(e.fn.jquery)) return alert("blockUI requires jQuery v1.2.3 or later!  You are using v" + e.fn.jquery), void 0;
        e.fn._fadeIn = e.fn.fadeIn;
        var d = function() {},
            l = document.documentMode || 0,
            u = e.browser.msie && (8 > e.browser.version && !l || 8 > l),
            p = e.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !l;
        e.blockUI = function(e) {
            t(window, e)
        }, e.unblockUI = function(e) {
            i(window, e)
        }, e.growlUI = function(t, i, n, o) {
            var r = e('<div class="growlUI"></div>');
            t && r.append("<h1>" + t + "</h1>"), i && r.append("<h2>" + i + "</h2>"), void 0 == n && (n = 3e3), e.blockUI({
                message: r,
                fadeIn: 700,
                fadeOut: 1e3,
                centerY: !1,
                timeout: n,
                showOverlay: !1,
                onUnblock: o,
                css: e.blockUI.defaults.growlCSS
            })
        }, e.fn.block = function(i) {
            return this.unblock({
                fadeOut: 0
            }).each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative"), e.browser.msie && (this.style.zoom = 1), t(this, i)
            })
        }, e.fn.unblock = function(e) {
            return this.each(function() {
                i(this, e)
            })
        }, e.blockUI.version = 2.39, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 99999,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            applyPlatformOpacityRules: !0,
            onBlock: null,
            onUnblock: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg"
        };
        var h = null,
            f = []
    }(jQuery), "undefined" != typeof jQuery && function(e) {
    e.imgpreload = function(t, i) {
        i = e.extend({}, e.fn.imgpreload.defaults, i instanceof Function ? {
            all: i
        } : i), "string" == typeof t && (t = Array(t));
        var n = [];
        e.each(t, function(o, r) {
            var a = new Image,
                s = r,
                c = a;
            "string" != typeof r && (s = e(r).attr("src"), c = r), e(a).bind("load error", function(o) {
                n.push(c), e.data(c, "loaded", "error" != o.type), i.each instanceof Function && i.each.call(c), n.length >= t.length && i.all instanceof Function && i.all.call(n), e(this).unbind("load error")
            }), a.src = s
        })
    }, e.fn.imgpreload = function(t) {
        return e.imgpreload(this, t), this
    }, e.fn.imgpreload.defaults = {
        each: null,
        all: null
    }
}(jQuery),
    function(e) {
        function t(t) {
            var i = t || window.event,
                n = [].slice.call(arguments, 1),
                o = 0,
                r = 0,
                a = 0;
            return t = e.event.fix(i), t.type = "mousewheel", i.wheelDelta && (o = i.wheelDelta / 120), i.detail && (o = -i.detail / 3), a = o, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (a = 0, r = -1 * o), void 0 !== i.wheelDeltaY && (a = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (r = -1 * i.wheelDeltaX / 120), n.unshift(t, o, r, a), (e.event.dispatch || e.event.handle).apply(this, n)
        }
        var i = ["DOMMouseScroll", "mousewheel"];
        if (e.event.fixHooks)
            for (var n = i.length; n;) e.event.fixHooks[i[--n]] = e.event.mouseHooks;
        e.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var e = i.length; e;) this.addEventListener(i[--e], t, !1);
                else this.onmousewheel = t
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1);
                else this.onmousewheel = null
            }
        }, e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }(jQuery),
    function(e) {
        var t, i, n, o, r, a, s, c, d, l, u, p, h, f, g, m, E, A, v, B, y, C, b = 0,
            w = {},
            k = [],
            D = 0,
            S = null,
            x = [],
            T = new Image,
            F = 0,
            I = 1,
            M = !0,
            U = 1,
            L = !1,
            O = e.extend(e("<div/>")[0], {
                prop: 0
            }),
            N = {
                filelist: "filelist",
                photo: "photo",
                thief: "thief"
            },
            P = "url(" + Airdroid.Service.getImgAssets("pre.cur") + "),auto",
            R = "url(" + Airdroid.Service.getImgAssets("next.cur") + "),auto";
        _abort = function() {
            i.hide(), T.onerror = T.onload = null, t.empty(), e.fancybox.trackEvent("Abort")
        }, _error = function() {
            return !1 === w.onError(k, b, w) ? (i.hide(), L = !1, void 0) : (w.width = "auto", w.height = "auto", t.html('<p id="fancybox-error">The requested content cannot be loaded.Please try again later.</p>'), w.loadError = !0, _process_inline(), L = !1, e.fancybox.trackEvent("LoadError"), void 0)
        }, _start = function() {
            if (e("body").css("position", "absolute").css("left", "0").css("top", "0"), $log.log("fancybox_start"), !L) {
                _asset_cursor(), e("#fancy").removeClass("hide"), e(".fancy_zoom").removeClass("fancy_zoom"), e(E).hide();
                var i, o, r = k[b];
                if ("function" == typeof r.get && (k[b] = r.get(0), r = k[b]), w = e.extend({}, e.fn.fancybox.defaults, e(r).data("fancybox") === void 0 ? w : e(r).data("fancybox")), o = w.onStart(k, b, w), o === !1) return L = !1, void 0;
                "object" == typeof o && (w = e.extend(w, o)), r.nodeName && !w.orig && (w.orig = e(r).children("img:first").length ? e(r).children("img:first") : e(r)), i = w.href || (r.nodeName ? e(r).attr("href") : r.href) || null, w.type = "image", w.href = i, w.autoDimensions = !1, w.modal && (w.overlayShow = !0, w.hideOnOverlayClick = !1, w.hideOnContentClick = !1, w.enableEscapeButton = !1), w.padding = parseInt(w.padding, 10), w.marginLeftRight = parseInt(w.marginLeftRight, 10), w.marginBottonTop = parseInt(w.marginBottonTop, 10), t.css("padding", w.padding), e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
                    e(this).replaceWith(a.children())
                }), e.fancybox.showActivity(), v.show(), e(a.add(n)).unbind(), w.overlayShow ? (n.css({
                    "background-color": w.overlayColor,
                    opacity: w.overlayOpacity,
                    cursor: w.hideOnOverlayClick ? "pointer" : "auto"
                }), n.is(":visible") || n.show()) : n.hide(), T = new Image, T.src = i, T.onerror = function() {
                    _error()
                }, T.onload = function() {
                    T.onerror = T.onload = null, _process_image()
                }, e.fancybox.trackEvent("StartLoad")
            }
        }, _asset_cursor = function() {
            e("#fancybox-right,.arrow_r").css("cursor", R), e("#fancybox-left,.arrow_l").css("cursor", P)
        }, _process_inline = function() {
            $log.log("fancybox_process_inline");
            var i = w.width,
                n = w.height;
            i = ("" + i).indexOf("%") > -1 ? parseInt((e(window).width() - 2 * w.marginLeftRight) * parseFloat(i) / 100, 10) + "px" : "auto" == i ? "auto" : i + "px", n = ("" + n).indexOf("%") > -1 ? parseInt((e(window).height() - 2 * w.marginBottonTop) * parseFloat(n) / 100, 10) + "px" : "auto" == n ? "auto" : n + "px", t.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == w.scrolling ? "auto" : "yes" == w.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'), w.width = t.width(), w.height = t.height(), _show()
        }, _setOptionsBtnState = function(e) {
            var t = e ? "removeClass" : "addClass";
            g.find("a.fx_zoom_in")[t]("disabled"), g.find("a.fx_zoom_out")[t]("disabled"), g.find("a.fx_rotate_left")[t]("disabled"), g.find("a.fx_rotate_right")[t]("disabled")
        }, _process_image = function() {
            $log.log("fancybox_process_image"), w.width = T.width, w.height = T.height, e(T).attr({
                id: "fancybox-img",
                alt: e(k[b]).attr("fx_name"),
                "data-width": T.width,
                "data-height": T.height
            }).appendTo(t), _show(), L = !1
        }, _show = function() {
            $log.log("fancybox_show"), 0 == b ? (g.find(".fx_prev").addClass("disabled"), e("#fancybox-left,.arrow_l").css("cursor", "default"), e("#fancy .arrow_l").addClass("disabled"), s.addClass("disabled")) : (g.find(".fx_prev").removeClass("disabled"), e("#fancy .arrow_l").removeClass("disabled"), e("#fancybox-left,.arrow_l").css("cursor", P), s.removeClass("disabled")), 1 == m ? (g.find(".fx_next").addClass("disabled"), e("#fancy .arrow_r").addClass("disabled"), e("#fancybox-right,.arrow_r").css("cursor", "default"), c.addClass("disabled")) : (g.find(".fx_next").removeClass("disabled"), e("#fancy .arrow_r").removeClass("disabled"), c.removeClass("disabled"), e("#fancybox-right,.arrow_r").css("cursor", R));
            var n, r;
            if (i.hide(), S && o.is(":visible") && !1 === S.onCleanup(x, D, S)) return e.event.trigger("fancybox-cancel"), void 0;
            e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), x = k, D = b, S = w, _preload_images(), S.imgWrap = e(k[b]), e.fancybox.resetTransform();
            var d = S.imgWrap.find("img").attr("class");
            return S.loadError ? (S.isRotate = !1, S.rotateCls = "", delete S.loadError, _setOptionsBtnState(!1)) : (S.isRotate = "rotate_90" == d || "rotate_270" == d, S.rotateCls = d || "", _setOptionsBtnState(!0)), C = _get_zoom_to(), l.html(D + 1 + " / " + m), u.html(S.imgWrap.attr("fx_name") || ""), p.html(S.imgWrap.attr("fx_size") || ""), f.html(S.imgWrap.attr("fx_pix") || ""), h.html(S.imgWrap.attr("fx_date") || ""), o.is(":visible") ? (n = o.position(), y = {
                top: n.top,
                left: n.left,
                width: o.width(),
                height: o.height()
            }, r = y.width == C.width && y.height == C.height, a.fadeTo(S.changeFade, .3, function() {
                var i = function() {
                    a.html(t.contents()).fadeTo(S.changeFade, 1, _finish)
                };
                e.event.trigger("fancybox-change"), a.empty().removeAttr("filter").css({
                    width: C.width - 2 * S.padding,
                    height: w.autoDimensions ? "auto" : C.height - 2 * S.padding
                }), r ? i() : (O.prop = 0, e(O).animate({
                    prop: 1
                }, {
                    duration: S.changeSpeed,
                    easing: S.easingChange,
                    step: _draw,
                    complete: i
                }))
            }), void 0) : (o.removeAttr("style"), a.css("border-width", S.padding), "elastic" == S.transitionIn ? (y = _get_zoom_from(), a.html(t.contents()), o.show(), v.show(), S.opacity && (C.opacity = 0), O.prop = 0, e(O).animate({
                prop: 1
            }, {
                duration: S.speedIn,
                easing: S.easingIn,
                step: _draw,
                complete: _finish
            }), void 0) : (1 == S.isRotate && o.hide(), a.css({
                width: C.width - 2 * S.padding,
                height: w.autoDimensions ? "auto" : C.height - 2 * S.padding
            }).html(t.contents()), o.css(C).fadeIn("none" == S.transitionIn ? 0 : S.speedIn, _finish), e.fancybox.trackEvent("Show"), void 0))
        }, _set_navigation = function() {
            return $log.log("fancybox_set_navigation"), (S.enableEscapeButton || S.enableKeyboardNav) && e(document).bind("keydown.fb", function(t) {
                27 == t.keyCode && S.enableEscapeButton ? (t.preventDefault(), e.fancybox.close(), e(".widget-share").hide()) : 37 != t.keyCode && 39 != t.keyCode || !S.enableKeyboardNav || "INPUT" === t.target.tagName || "TEXTAREA" === t.target.tagName || "SELECT" === t.target.tagName ? 38 != t.keyCode && 40 != t.keyCode || !S.enableKeyboardNav || "INPUT" === t.target.tagName || "TEXTAREA" === t.target.tagName || "SELECT" === t.target.tagName || (t.preventDefault(), 38 == t.keyCode ? e.fancybox.rotate("left", !0) : e.fancybox.rotate("right", !0)) : (t.preventDefault(), e.fancybox[37 == t.keyCode ? "prev" : "next"]())
            }), S.showNavArrows ? (S.cyclic && x.length > 1 && 0 != D && (s.removeClass("hide"), n.find(".arrow_l").removeClass("hide")), S.cyclic && x.length > 1 && D != x.length - 1 && (c.removeClass("hide"), n.find(".arrow_r").removeClass("hide")), void 0) : (s.hide(), c.hide(), n.find(".arrow_l,.arrow_r").addClass("hide"), void 0)
        }, _finish = function() {
            $log.log("fancybox_finish"), e.support.opacity || (a.get(0).style.removeAttribute("filter"), o.get(0).style.removeAttribute("filter")), w.autoDimensions && a.css("height", "auto"), _set_navigation(), S.hideOnContentClick && a.bind("click", e.fancybox.close), e(window).bind("resize.fb", e.fancybox.resize), S.centerOnScroll && e(window).bind("scroll.fb", e.fancybox.center), S.onComplete(x, D, S), o.find("img").attr("class", S.rotateCls).show(), o.show(), A.show(), 1 == S.isRotate && e.fancybox.resize(!0), e.fancybox.center(), L = !1
        }, _preload_images = function() {
            if (M) {
                for (var e = U; e >= 1; e--)
                    if (x.length - e > D) {
                        B = e, M = !1;
                        break
                    }
                for (e = 1; B >= e; e++) _preload_image_item(e)
            } else _preload_image_item(B + 1)
        }, _preload_image_item = function(t) {
            $log.log("fancybox_preload_images");
            var i, n;
            if (x.length - t > D) {
                if (n = x[D + t], "function" == typeof n.get && (n = n.get(0)), i = (n.nodeName ? e(n).attr("href") : n.href) || null, null != i) {
                    var o = new Image;
                    o.src = i
                }
                e.fancybox.trackEvent("PreLoad")
            }
        }, _draw = function(e) {
            $log.log("fancybox_draw");
            var t = {
                width: parseInt(y.width + (C.width - y.width) * e, 10),
                height: parseInt(y.height + (C.height - y.height) * e, 10),
                top: parseInt(y.top + (C.top - y.top) * e, 10),
                left: parseInt(y.left + (C.left - y.left) * e, 10)
            };
            C.opacity !== void 0 && (t.opacity = .5 > e ? .5 : e), o.css(t), a.css({
                width: t.width - 2 * S.padding,
                height: t.height - 2 * S.padding
            }), o.hide()
        }, _get_viewport = function() {
            return $log.log("fancybox_get_viewport"), [e(window).width() - 2 * S.marginLeftRight, e(window).height() - 2 * S.marginBottonTop, e(document).scrollLeft() + S.marginLeftRight, e(document).scrollTop() + S.marginBottonTop]
        }, _get_zoom_to = function() {
            $log.log("fancybox_get_zoom_to");
            var e, t = _get_viewport(),
                i = {},
                n = S.autoScale,
                o = 2 * S.padding;
            return i.width = ("" + S.width).indexOf("%") > -1 ? parseInt(t[0] * parseFloat(S.width) / 100, 10) : S.isRotate ? S.height + o : S.width + o, i.height = ("" + S.height).indexOf("%") > -1 ? parseInt(t[1] * parseFloat(S.height) / 100, 10) : S.isRotate ? S.width + o : S.height + o, n && (i.width > t[0] || i.height > t[1]) && ("image" == w.type ? (e = S.width / S.height, S.isRotate && (e = S.height / S.width), i.width > t[0] && (i.width = t[0], i.height = parseInt((i.width - o) / e + o, 10)), i.height > t[1] && (i.height = t[1], i.width = parseInt((i.height - o) * e + o, 10))) : (i.width = Math.min(i.width, t[0]), i.height = Math.min(i.height, t[1]))), i.top = parseInt(Math.max(t[3] - S.marginBottonTop, t[3] + .5 * (t[1] - i.height - S.marginBottonTop) - S.padding)), i.left = parseInt(Math.max(t[2] - S.marginLeftRight, t[2] + .5 * (t[0] - i.height - S.marginLeftRight) - S.padding)), i
        }, _get_obj_pos = function(e) {
            $log.log("fancybox_get_obj_pos");
            var t = e.offset();
            return t.top += parseInt(e.css("paddingTop"), 10) || 0, t.left += parseInt(e.css("paddingLeft"), 10) || 0, t.top += parseInt(e.css("border-top-width"), 10) || 0, t.left += parseInt(e.css("border-left-width"), 10) || 0, t.width = e.width(), t.height = e.height(), t
        }, _get_zoom_from = function() {
            $log.log("fancybox_get_zoom_from");
            var t, i, n = w.orig ? e(w.orig) : !1,
                o = {};
            return n && n.length ? (t = _get_obj_pos(n), o = {
                width: t.width + 2 * S.padding,
                height: t.height + 2 * S.padding,
                top: t.top - S.padding - 20,
                left: t.left - S.padding - 20
            }) : (i = _get_viewport(), o = {
                width: 2 * S.padding,
                height: 2 * S.padding,
                top: parseInt(i[3] + .5 * i[1], 10),
                left: parseInt(i[2] + .5 * i[0], 10)
            }), o
        }, e.fn.fancybox = function(t) {
            if (!e(this).length) return this;
            console.log("fancyBox init");
            var i = "click" == t.openType ? "click" : "dblclick";
            if (U = t.preloadCount || U, e(this).data("fancybox", e.extend({}, t, e.metadata ? e(this).metadata() : {})).unbind(i).bind(i, function(i) {
                    i.preventDefault(), e(this).blur(), k = [], b = 0;
                    var n = e(this).attr("rel") || "";
                    n && "" != n && "nofollow" !== n ? (t.selectedAr ? (k = t.selectedAr, b = k.index(this)) : k.push(this), m = k.length, t.totalItems && (m = t.totalItems)) : (k.push(this), m = 1), t.showBottomOprationPanel ? (A.removeClass("hide"), _.isObject(t.btnConfig) ? _.each(t.btnConfig, function(e, t) {
                        e ? g.find("a[cmd='" + t + "']").show() : g.find("a[cmd='" + t + "']").hide()
                    }) : g.find("a").show(), Airdroid.Util.checkUserLogin() || g.find(".share-btn").hide()) : A.addClass("hide"), _start()
                }), t.showBottomOprationPanel && g && 0 == g.find(".fancybox_item_command").length) {
                t.btnConfig = e.extend(!0, e.fn.fancybox.defaults.btnConfig, t.btnConfig || {});
                var n = function(e) {
                    return e ? "" : "display:none"
                };
                g.append('<div class="fancybox_item_command"><a class="fx_zoom_in" cmd="zoomIn" style="' + n(t.btnConfig.zoomIn) + '" title="' + Airdroid.Util.getLang("Common", "ZoomIn") + '"></a>' + '<a class="fx_zoom_out" cmd="zoomOut" style="' + n(t.btnConfig.zoomOut) + '" title="' + Airdroid.Util.getLang("Common", "ZoomOut") + '"></a>' + '<a class="fx_rotate_left" cmd="rotateLeft" style="' + n(t.btnConfig.rotateLeft) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_RotateLeft") + '"></a>' + '<a class="fx_rotate_right" cmd="rotateRight" style="' + n(t.btnConfig.rotateRight) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_RotateRight") + '"></a>' + '<a class="fx_prev" cmd="prev" style="' + n(t.btnConfig.prev) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_Prev") + '"></a>' + '<a class="fx_next" cmd="next" style="' + n(t.btnConfig.next) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_Next") + '"></a>' + '<a class="fx_delete" cmd="imgdelete" style="' + n(t.btnConfig.imgdelete) + '" title="' + Airdroid.Util.getLang("Common", "Delete") + '"></a>' + '<a class="fx_setting" cmd="setting" style="' + n(t.btnConfig.setting) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_SetAsWallpaper") + '"></a>' + '<a class="fx_download" cmd="download" style="' + n(t.btnConfig.download) + '" title="' + Airdroid.Util.getLang("Common", "Download") + '"></a>' + '<a class="share-btn" cmd="share" style="' + n(t.btnConfig.share) + '" title="' + Airdroid.Util.getLang("Common", "ToolTip_Share") + '"></a>' + "</div>").click(function(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }), g.find("a").click(function(t) {
                    var i = e(t.currentTarget),
                        n = i.attr("cmd");
                    return i.hasClass("disabled") ? !1 : ("zoomIn" == n ? e.fancybox.zoomIn() : "zoomOut" == n ? e.fancybox.zoomOut() : "share" == n ? e.fancybox.share(t) : "setting" == n ? e.fancybox.setting_bg() : "download" == n ? e.fancybox.download() : "prev" == n ? e.fancybox.prev() : "next" == n ? e.fancybox.next() : "rotateLeft" == n ? e.fancybox.rotate("left", !0) : "rotateRight" == n ? e.fancybox.rotate("right", !0) : "imgdelete" == n && e.fancybox.deleteImg(t), void 0)
                })
            }
            return this
        }, e.fancybox = function(t) {
            var i;
            if (!L) {
                if (L = !0, i = arguments[1] !== void 0 ? arguments[1] : {}, k = [], b = parseInt(i.index, 10) || 0, e.isArray(t)) {
                    for (var n = 0, o = t.length; o > n; n++) "object" == typeof t[n] ? e(t[n]).data("fancybox", e.extend({}, i, t[n])) : t[n] = e({}).data("fancybox", e.extend({
                        content: t[n]
                    }, i));
                    k = jQuery.merge(k, t)
                } else "object" == typeof t ? e(t).data("fancybox", e.extend({}, i, t)) : t = e({}).data("fancybox", e.extend({
                    content: t
                }, i)), k.push(t);
                (b > k.length || 0 > b) && (b = 0), _start()
            }
        }, e.fancybox.set_zoom = function(t) {
            var i, n, r;
            if (!(.1 > t || t > 3)) {
                e("#fancy").addClass("fancy_zoom"), i = o.find("img"), n = e(E), r = o.find("#fancybox-content");
                var a = e.fancybox.getRotation(i);
                i.css("transform", "rotate(" + a + "deg),scale(" + I + ")"), r.draggable("destroy"), r.draggable(), n.text(parseInt(100 * i.height() / i.attr("data-height") * t) + "%"), n.fadeIn(function() {
                    n.fadeOut()
                }), i.stop(), i.transit({
                    scale: t
                }, 300, "snap"), I = t
            }
        }, e.fancybox.zoomIn = function() {
            e.fancybox.trackEvent("ZoomIn"), this.set_zoom(I + .1)
        }, e.fancybox.zoomOut = function() {
            e.fancybox.trackEvent("ZoomOut"), this.set_zoom(I - .1)
        }, e.fancybox.rotate = function(t) {
            e.fancybox.trackEvent("Rotate");
            var i = S.imgWrap.find("img"),
                n = i.attr("class"),
                r = n;
            "" == r && (r = "rotate_0"), "right" == t ? (F += 90, n = "rotate_90" == n ? "rotate_180" : "rotate_180" == n ? "rotate_270" : "rotate_270" == n ? "" : "rotate_90") : (F -= 90, n = "rotate_270" == n ? "rotate_180" : "rotate_180" == n ? "rotate_90" : "rotate_90" == n ? "" : "rotate_270");
            var a = 0;
            "rotate_90" == n ? (a = 1, S.isRotate = !0) : "rotate_180" == n ? (a = 2, S.isRotate = !1) : "rotate_270" == n ? (a = 3, S.isRotate = !0) : S.isRotate = !1, e.fancybox.rotateByType(i, {
                orient: a,
                cb: function(e, t, a) {
                    a || i.removeClass(r).addClass(n);
                    var s = o.find("img");
                    s.stop(), s.transit({
                        rotate: F
                    }), Airdroid.Service.orientPhoto(e, t, function() {})
                }
            })
        }, e.fancybox.rotateByType = function(e, t) {
            var i = {},
                n = null,
                o = !1;
            switch (S.module) {
                case N.filelist:
                    i.orient = t.orient, i.path = S.imgWrap.data("file_details").absrc;
                    break;
                case N.photo:
                    i.orient = t.orient, n = S.imgWrap.attr("photoid");
                    break;
                case N.thief:
                    i.orient = t.orient, n = S.imgWrap.attr("photoid"), o = !0
            }
            _.isFunction(t.cb) && t.cb(n, i, o)
        }, e.fancybox.showActivity = function() {
            i.show()
        }, e.fancybox.hideActivity = function() {
            i.hide()
        }, e.fancybox.setting_bg = function() {
            e.fancybox.trackEvent("SettingBg");
            var t = e.fancybox.setting_bgByType(),
                i = function(t) {
                    "1" == t.result && (e.fancybox.hideActivity(), Airdroid.Util.showDelayMsg(e("body"), Airdroid.Util.getLang("Photo", "Message_SetWallpaperSucceed")))
                };
            Airdroid.Util.confirm(Airdroid.Util.getLang("Photo", "Message_SureToSetAsWallpaper"), function() {
                switch (e.fancybox.showActivity(), S.module) {
                    case N.filelist:
                        Airdroid.Service.setWallpaper(t, i);
                        break;
                    case N.photo:
                        var n = Airdroid.DeviceManage.getCurrentDeviceObj();
                        n._dataCenter.image.setAsWallpaper(t.id).done(i)
                }
            })
        }, e.fancybox.setting_bgByType = function() {
            var e = {};
            switch (S.module) {
                case N.filelist:
                    e.path = S.imgWrap.data("file_details").absrc;
                    break;
                case N.photo:
                    e.id = S.imgWrap.attr("photoid")
            }
            return e
        }, e.fancybox.share = function(t) {
            e.fancybox.trackEvent("Share"), A.find(".widget-share").length > 0 && A.find(".widget-share").remove();
            var i = e.fancybox.shareBytype(),
                n = e(t.currentTarget).offset(),
                o = {
                    position: {
                        direction: "down",
                        xPos: n.left,
                        yPos: 0
                    },
                    param: i,
                    parent: A
                },
                r = !0;
            Airdroid.Util.share(o, r), A.unbind().bind("mouseleave", function() {
                A.find(".widget-share").hide()
            })
        }, e.fancybox.shareBytype = function() {
            var t = {},
                i = e("#fancybox-content > img").attr("class") || "";
            switch (S.module) {
                case N.filelist:
                    t = {
                        type: 2,
                        path: S.imgWrap.data("file_details").absrc,
                        rotate: i
                    };
                    break;
                case N.photo:
                    t = {
                        type: 1,
                        id: S.imgWrap.attr("photoid"),
                        rotate: i
                    }
            }
            return t
        }, e.fancybox.download = function() {
            e.fancybox.trackEvent("Download");
            var t = e.fancybox.downloadByType();
            t = t.replace("type=0", "type=1"), Airdroid.Util.download(t)
        }, e.fancybox.downloadByType = function() {
            var e = "";
            switch (S.module) {
                case N.filelist:
                    e = "server" == S.from ? Airdroid.Service.getThiefImgUrl(S.imgWrap.attr("imgid")) : Airdroid.Service.getFileRaw({
                        pathfile: S.imgWrap.data("file_details").absrc,
                        saveas: 1,
                        last_modified: S.imgWrap.data("file_details").last_modified
                    });
                    break;
                case N.photo:
                    e = S.imgWrap.attr("href");
                    break;
                case N.thief:
                    e = "server" == S.from ? Airdroid.Service.getThiefImgUrl(S.imgWrap.attr("imgid")) : S.imgWrap.attr("href")
            }
            return e
        }, e.fancybox.next = _(function() {
            if (!L) {
                if (1 == m) return console.log("only 1 photo"), !1;
                e.fancybox.trackEvent("Next"), o.find("#fancybox-content").draggable("destroy"), e(".fancy_zoom").removeClass("fancy_zoom"), D >= x.length - 4 && x.length < S.totalItems + 1 && S.nextPageFunction && (S.nextPageFunction(x, k), console.log("=========load next page=========="));
                var t = D + 1;
                if (D == x.length - 2) {
                    if (!S.cyclic) return;
                    Airdroid.Util.showDelayMsg(e("body"), Airdroid.Util.getLang("Photo", "Last_Tip")), console.log("========the last photo========")
                }
                return D == x.length - 1 && (t = 0), e.fancybox.pos(t)
            }
        }).throttle(500), e.fancybox.prev = _(function() {
            return L ? void 0 : 0 == b ? (console.log("it is the first photo"), !1) : (o.find("#fancybox-content").draggable("destroy"), e(".fancy_zoom").removeClass("fancy_zoom"), e.fancybox.trackEvent("Prev"), e.fancybox.pos(D - 1))
        }).throttle(500), e.fancybox.resetTransform = function() {
            F = this.getOriginRotation(), I = 1, o.find("#fancybox-content").css({
                top: 0,
                left: 0
            }), o.find("img").css("transform", null)
        }, e.fancybox.getOriginRotation = function() {
            var t = S.imgWrap.find("img");
            return e.fancybox.getRotation(t)
        }, e.fancybox.getRotation = function(e) {
            var t = e.attr("style") || "",
                i = t.match(/rotate\((.+?)deg\)/);
            if (i) return parseInt(i[1]);
            var n = e.attr("class") || "";
            return i = n.match(/(rotate_\d+ |rotate_\d+)/), i ? parseInt(i[0].trim().replace("rotate_", "")) : 0
        }, e.fancybox.deleteImg = function(t) {
            var i = e(t.currentTarget);
            if (!i.hasClass("fx_delete_disabled") && !L) {
                i.addClass("fx_delete_disabled");
                var n = function() {
                    x && x.length > 1 ? (m && (m -= 1), x = _.without(x, x[D]), e.fancybox.pos(D)) : e.fancybox.close(), S.onDeleteSucCallBack && S.onDeleteSucCallBack(), S.imgWrap.remove(), i.removeClass("fx_delete_disabled")
                };
                e.fancybox.trackEvent("Delete"), e.fancybox.deleteImgByType(i, n)
            }
        }, e.fancybox.deleteImgByType = function(t, i) {
            switch (S.module) {
                case N.filelist:
                    var n = S.imgWrap.data("file_details");
                    Airdroid.Util.confirm(Airdroid.Util.getLang("Filemanage", "Message_SureToDeleteFile"), function() {
                        e.fancybox.showActivity(), Airdroid.Service.deleteFile({
                            cur_path: S.cur_path,
                            files: n.absrc.substr(n.absrc.lastIndexOf("/") + 1)
                        }, function() {
                            e.fancybox.hideActivity(), S.imgWrap.remove(), _.isFunction(i) && i()
                        })
                    }, function() {
                        t.removeClass("fx_delete_disabled")
                    });
                    break;
                case N.photo:
                    Airdroid.Util.confirm(Airdroid.Util.getLang("Photo", "Message_SureToDeleteThisPhoto"), function() {
                        if (S.imgWrap) {
                            var e = S.imgWrap.attr("photoid"),
                                t = Airdroid.DeviceManage.getCurrentDeviceObj();
                            S.imgWrap.remove(), t._dataCenter.image.deleteById(e).done(function() {
                                _.isFunction(i) && i()
                            }).fail(function() {
                                Airdroid.Util.alert(Airdroid.Util.getLang("Photo", "Message_DeleteThisPhotoFailure"))
                            })
                        }
                    }, function() {
                        t.removeClass("fx_delete_disabled")
                    })
            }
        }, e.fancybox.pos = function(e) {
            L || (e = parseInt(e), k = x, e > -1 && x.length > e ? (b = e, _start()) : S.cyclic && x.length > 1 && (b = e >= x.length ? 0 : x.length - 1, _start()))
        }, e.fancybox.cancel = function() {
            L || (L = !0, e.event.trigger("fancybox-cancel"), _abort(), w.onCancel(k, b, w), L = !1, e.fancybox.trackEvent("Cancel"))
        }, e.fancybox.close = function() {
            function t() {
                v.hide(), n.fadeOut(function() {
                    Airdroid.Util.fullScreenApi.cancelFullScreen(document.getElementsByTagName("body")[0])
                })
            }

            function r() {
                t(), o.hide(), A.hide(), a.empty(), S.onClosed(x, D, S), x = w = [], D = b = 0, S = w = {}, L = !1
            }
            if (!n.is(":visible") && !i.is(":visible")) return !1;
            if (g.find(".fx_delete_disabled").removeClass("fx_delete_disabled"), e(".widget-share").hide(), S && !e.isEmptyObject(S) && !1 === S.onCleanup(x, D, S)) return L = !1, void 0;
            if (_abort(), e(a.add(n)).unbind(), e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), o.stop(), i.hide(), S && !e.isEmptyObject(S))
                if ("elastic" == S.transitionOut) {
                    y = _get_zoom_from();
                    var s = o.position();
                    C = {
                        top: s.top,
                        left: s.left,
                        width: o.width(),
                        height: o.height()
                    }, S.opacity && (C.opacity = 1), O.prop = 1, e(O).animate({
                        prop: 0
                    }, {
                        duration: S.speedOut,
                        easing: S.easingOut,
                        step: _draw,
                        complete: r
                    })
                } else o.fadeOut("none" == S.transitionOut ? 0 : S.speedOut, r);
            else t();
            v.attr("data-action", ""), e("body").css("position", "absolute"), e.fancybox.trackEvent("Close")
        }, e.fancybox.resize = function(t) {
            C = _get_zoom_to(), o.css(C);
            var i = o.find("img");
            a.css({
                width: C.width - 2 * S.padding,
                height: w.autoDimensions ? "auto" : C.height - 2 * S.padding
            }), navigator.userAgent.toLowerCase(), Math.abs(C.height - C.width) / 2, 1 == S.isRotate ? (i.css("width", C.height - 2 * S.padding + "px"), i.css("height", C.width - 2 * S.padding + "px")) : (i.css("width", C.width - 2 * S.padding + "px"), i.css("height", C.height - 2 * S.padding + "px"));
            var n = i.position();
            if (1 == S.isRotate)
                if (1 == t) i.css("top", -n.top + "px"), i.css("left", -n.left + "px");
                else {
                    var r = parseInt(i.css("left")),
                        s = parseInt(i.css("top"));
                    i.css("top", s - n.top + "px"), i.css("left", r - n.left + "px")
                }
            e.fancybox.center(!0)
        }, e.fancybox.center = function() {
            var e, t;
            L || (t = arguments[0] === !0 ? 1 : 0, e = _get_viewport(), (t || !(o.width() > e[0] || o.height() > e[1])) && (o.stop().css({
                top: parseInt(Math.max(e[3], e[3] + .5 * (e[1] - a.height()))),
                left: parseInt(Math.max(e[2], e[2] + .5 * (e[0] - a.width())))
            }), o.find("img").hasClass("rotate_90") || o.find("img").hasClass("rotate_270") || o.find("img").css({
                top: "0",
                left: "0"
            })))
        }, e.fancybox.init = function() {
            if (!e("#fancybox-wrap").length) {
                console.log("fancyBox create");
                var m = e('<div id="fancy" class="hide"></div>').append(t = e('<div id="fancybox-tmp"></div>'), i = e('<div id="fancybox-loading"><div class="loadingflag loading-blue-mask"></div></div>'), n = e('<div id="fancybox-overlay"><div class="arrow_l"></div><div class="arrow_r"></div></div>'), o = e('<div id="fancybox-wrap"></div>'), A = e('<div id="fancybox-command" style="display:none;"><div class="bg"></div><div class="full-screen-logo"></div></div>'), v = e('<a class="full-screen-close"/>'));
                e("body").append(m), A.append(d = e('<div id="fancybox-title"></div>'), g = e('<div id="bottom-opration-panel"></div>')), d.append(l = e('<span class="fx-imgcount"></span>'), u = e('<span class="fx-name"></span>'), p = e('<span class="fx-size"></span>'), f = e('<span class="fx-pix"></span>'), h = e('<span class="fx-date"></span>')).click(function(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }), r = e('<div id="fancybox-outer"></div>').appendTo(o), r.append(a = e('<div id="fancybox-content"></div>'), s = e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), c = e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'), E = e('<div class="block_num">80%</div>')), v.click(function() {
                    e.fancybox.close()
                }), i.click(function() {
                    e.fancybox.cancel(), n.is(":visible") || Airdroid.Util.fullScreenApi.isFullScreen() || v.trigger("click")
                }), s.click(function(t) {
                    t.preventDefault(), e.fancybox.prev()
                }), c.click(function(t) {
                    t.preventDefault(), e.fancybox.next()
                }), e.fn.mousewheel && o.bind("mousewheel.fb", function(t, i) {
                    L ? t.preventDefault() : (0 == e(t.target).get(0).clientHeight || e(t.target).get(0).scrollHeight === e(t.target).get(0).clientHeight) && (t.preventDefault(), e.fancybox[i > 0 ? "zoomIn" : "zoomOut"]())
                }), e(".arrow_l").click(function() {
                    e.fancybox.prev()
                }), e(".arrow_r").click(function() {
                    e.fancybox.next()
                })
            }
        }, e.fancybox.trackEvent = function(e, t, i, n) {
            Airdroid.Util.trackEvent("UI-Fancybox", e, t, i, n)
        }, e.fn.fancybox.defaults = {
            padding: 0,
            marginLeftRight: 0,
            marginBottonTop: 0,
            opacity: !1,
            modal: !1,
            cyclic: !0,
            scrolling: "auto",
            width: 560,
            height: 340,
            isRotate: !1,
            autoScale: !0,
            autoDimensions: !0,
            centerOnScroll: !1,
            hideOnOverlayClick: !0,
            hideOnContentClick: !1,
            overlayShow: !0,
            overlayOpacity: 1,
            overlayColor: "#1A1A1A",
            transitionIn: "fade",
            transitionOut: "none",
            speedIn: 100,
            speedOut: 100,
            changeSpeed: 100,
            changeFade: "fast",
            easingIn: "swing",
            easingOut: "swing",
            showNavArrows: !0,
            enableEscapeButton: !0,
            enableKeyboardNav: !0,
            showBottomOprationPanel: !0,
            btnConfig: {
                zoomIn: !0,
                zoomOut: !0,
                rotateLeft: !0,
                rotateRight: !0,
                prev: !0,
                next: !0,
                imgdelete: !0,
                setting: !0,
                download: !0,
                share: !0
            },
            from: "phone",
            onStart: function() {},
            onCancel: function() {},
            onComplete: function() {},
            onCleanup: function() {},
            onClosed: function() {},
            onError: function() {}
        }, e.fancybox.init()
    }(jQuery), Airdroid.Widget.Placard = Core.extend(Airdroid.Base, {
    _placardDom: null,
    _data: null,
    _placardNavDom: null,
    create: function(e) {
        var t = this;
        t._data = e, t._placardDom = $(Airdroid.Util.getTemplate("widget/placard", "index", {
            common: t.util.getLang("Common")
        })), t._placardNavDom = $(".block-topNav .nav"), t.initView()
    },
    initView: function() {
        var e = this,
            t = $(e.util.getTemplate("widget/placard", "item", {
                items: e._data
            }));
        e._placardDom.find(".widget-placard-list").html("").html(t), e._placardDom.appendTo(e._placardNavDom), e.util.checkUserLogin() || (e._placardDom.find(".widget-placard-see").hide(), e._placardDom.find(".widget-placard-sep:last").remove()), e._placardNavDom.find(".placard-count").html(e._data.length);
        var i = e._placardNavDom.find(".placard").position().left - parseInt(e._placardDom.width() / 2) + 12,
            n = e._placardNavDom.height();
        e._placardDom.css({
            position: "absolute",
            top: n + "px",
            left: i + "px"
        }), e._placardDom.find(".widget-placard-link").click(function(t) {
            var i = $(this).parents(".widget-placard-item"),
                n = $(this).attr("placardLink");
            return Airdroid.Util.openTabInPlacard(n), e.setNotificationRead(i), t.preventDefault(), !1
        }), e._placardDom.find(".widget-placard-itemCancel").click(function() {
            var t = $(this).parents(".widget-placard-item");
            return e.setNotificationRead(t), !1
        }), e._placardDom.find(".widget-placard-itemBody a").click(function(t) {
            t.preventDefault();
            var i = $(this).attr("href");
            Airdroid.Util.openTabInPlacard(i);
            var n = $(this).parents(".widget-placard-item");
            return e.setNotificationRead(n), !1
        }), e._placardDom.find(".widget-placard-see,.widget-placard-item").click(function() {
            Airdroid.AppManage.createAppByAppId(e.config.dependApps.userCenter, {
                tab: "placard"
            })
        }), $(document).click(function() {
            e._placardDom && e._placardDom.hide()
        })
    },
    setNotificationRead: function(e) {
        var t = this,
            i = e.attr("placardId"),
            n = e.attr("mstype");
        e.fadeOut(300, function() {
            1 == t._placardDom.find(".widget-placard-item").length ? t.clear(!0) : (e.next(".widget-placard-sep").length > 0 ? e.next(".widget-placard-sep").remove() : e.prev(".widget-placard-sep").remove(), e.remove(), t._placardNavDom.find(".placard-count").html(t._placardDom.find(".widget-placard-item").length))
        }), Airdroid.Runtime.unreadPlacard = _.without(Airdroid.Runtime.unreadPlacard, i), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.setReadNotice, {
            placardId: i
        }), Airdroid.Util.viewNotice(i, n)
    },
    setAnimate: function() {
        var e = this,
            t = function() {
                var i = "-=176px";
                e._placardDom.find(".widget-placard-item[pshow='0']:first").animate({
                    marginLeft: i,
                    opacity: 1
                }, 300, function() {
                    $(this).attr("pshow", "1"), $(this).find("p").height() > 36 && $(this).find(".widget-placard-itemMore").show(), t()
                })
            };
        e._placardDom.find(".widget-placard-body").slideDown(300 * e._placardDom.find(".widget-placard-item").length), t()
    },
    show: function() {
        var e = this;
        e._placardDom.show(), "0" == e._placardDom.attr("load") && (e.setAnimate(), e._placardDom.attr("load", "1"))
    },
    clear: function(e) {
        this._placardDom.remove(), this.util._placardWidget = null, this._data = null, this._placardNavDom.find(".placard-count").html(""), e || (Airdroid.Runtime.placardData = [], Airdroid.Runtime.unreadPlacard = [])
    }
}), ! function(e) {
    function t(e, t) {
        return function(i) {
            return c(e.call(this, i), t)
        }
    }

    function i(e, t) {
        return function(i) {
            return this.lang().ordinal(e.call(this, i), t)
        }
    }

    function n() {}

    function o(e) {
        a(this, e)
    }

    function r(e) {
        var t = e.years || e.year || e.y || 0,
            i = e.months || e.month || e.M || 0,
            n = e.weeks || e.week || e.w || 0,
            o = e.days || e.day || e.d || 0,
            r = e.hours || e.hour || e.h || 0,
            a = e.minutes || e.minute || e.m || 0,
            s = e.seconds || e.second || e.s || 0,
            c = e.milliseconds || e.millisecond || e.ms || 0;
        this._input = e, this._milliseconds = +c + 1e3 * s + 6e4 * a + 36e5 * r, this._days = +o + 7 * n, this._months = +i + 12 * t, this._data = {}, this._bubble()
    }

    function a(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    }

    function s(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function c(e, t) {
        for (var i = e + ""; t > i.length;) i = "0" + i;
        return i
    }

    function d(e, t, i, n) {
        var o, r, a = t._milliseconds,
            s = t._days,
            c = t._months;
        a && e._d.setTime(+e._d + a * i), (s || c) && (o = e.minute(), r = e.hour()), s && e.date(e.date() + s * i), c && e.month(e.month() + c * i), a && !n && L.updateOffset(e), (s || c) && (e.minute(o), e.hour(r))
    }

    function l(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function u(e, t) {
        var i, n = Math.min(e.length, t.length),
            o = Math.abs(e.length - t.length),
            r = 0;
        for (i = 0; n > i; i++) ~~e[i] !== ~~t[i] && r++;
        return r + o
    }

    function p(e) {
        return e ? at[e] || e.toLowerCase().replace(/(.)s$/, "$1") : e
    }

    function h(e, t) {
        return t.abbr = e, R[e] || (R[e] = new n), R[e].set(t), R[e]
    }

    function f(e) {
        delete R[e]
    }

    function g(e) {
        if (!e) return L.fn._lang;
        if (!R[e] && j) try {
            require("./lang/" + e)
        } catch (t) {
            return L.fn._lang
        }
        return R[e] || L.fn._lang
    }

    function m(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function E(e) {
        var t, i, n = e.match(q);
        for (t = 0, i = n.length; i > t; t++) n[t] = lt[n[t]] ? lt[n[t]] : m(n[t]);
        return function(o) {
            var r = "";
            for (t = 0; i > t; t++) r += n[t] instanceof Function ? n[t].call(o, e) : n[t];
            return r
        }
    }

    function A(e, t) {
        function i(t) {
            return e.lang().longDateFormat(t) || t
        }
        for (var n = 5; n-- && (z.lastIndex = 0, z.test(t));) t = t.replace(z, i);
        return st[t] || (st[t] = E(t)), st[t](e)
    }

    function _(e, t) {
        switch (e) {
            case "DDDD":
                return Y;
            case "YYYY":
                return G;
            case "YYYYY":
                return Q;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return V;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return X;
            case "a":
            case "A":
                return g(t._l)._meridiemParse;
            case "X":
                return Z;
            case "Z":
            case "ZZ":
                return K;
            case "T":
                return J;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return H;
            default:
                return RegExp(e.replace("\\", ""))
        }
    }

    function v(e) {
        var t = (K.exec(e) || [])[0],
            i = (t + "").match(nt) || ["-", 0, 0],
            n = +(60 * i[1]) + ~~i[2];
        return "+" === i[0] ? -n : n
    }

    function B(e, t, i) {
        var n, o = i._a;
        switch (e) {
            case "M":
            case "MM":
                null != t && (o[1] = ~~t - 1);
                break;
            case "MMM":
            case "MMMM":
                n = g(i._l).monthsParse(t), null != n ? o[1] = n : i._isValid = !1;
                break;
            case "D":
            case "DD":
                null != t && (o[2] = ~~t);
                break;
            case "DDD":
            case "DDDD":
                null != t && (o[1] = 0, o[2] = ~~t);
                break;
            case "YY":
                o[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                o[0] = ~~t;
                break;
            case "a":
            case "A":
                i._isPm = g(i._l).isPM(t);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                o[3] = ~~t;
                break;
            case "m":
            case "mm":
                o[4] = ~~t;
                break;
            case "s":
            case "ss":
                o[5] = ~~t;
                break;
            case "S":
            case "SS":
            case "SSS":
                o[6] = ~~(1e3 * ("0." + t));
                break;
            case "X":
                i._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                i._useUTC = !0, i._tzm = v(t)
        }
        null == t && (i._isValid = !1)
    }

    function y(e) {
        var t, i, n, o = [];
        if (!e._d) {
            for (n = C(e), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = n[t];
            for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            o[3] += ~~((e._tzm || 0) / 60), o[4] += ~~((e._tzm || 0) % 60), i = new Date(0), e._useUTC ? (i.setUTCFullYear(o[0], o[1], o[2]), i.setUTCHours(o[3], o[4], o[5], o[6])) : (i.setFullYear(o[0], o[1], o[2]), i.setHours(o[3], o[4], o[5], o[6])), e._d = i
        }
    }

    function C(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function b(e) {
        var t, i, n = e._f.match(q),
            o = "" + e._i;
        for (e._a = [], t = 0; n.length > t; t++) i = (_(n[t], e).exec(o) || [])[0], i && (o = o.slice(o.indexOf(i) + i.length)), lt[n[t]] && B(n[t], i, e);
        o && (e._il = o), e._isPm && 12 > e._a[3] && (e._a[3] += 12), e._isPm === !1 && 12 === e._a[3] && (e._a[3] = 0), y(e)
    }

    function w(e) {
        var t, i, n, r, s, c = 99;
        for (r = 0; e._f.length > r; r++) t = a({}, e), t._f = e._f[r], b(t), i = new o(t), s = u(t._a, i.toArray()), i._il && (s += i._il.length), c > s && (c = s, n = i);
        a(e, n)
    }

    function k(e) {
        var t, i = e._i,
            n = et.exec(i);
        if (n) {
            for (e._f = "YYYY-MM-DD" + (n[2] || " "), t = 0; 4 > t; t++)
                if (it[t][1].exec(i)) {
                    e._f += it[t][0];
                    break
                }
            K.exec(i) && (e._f += " Z"), b(e)
        } else e._d = new Date(i)
    }

    function D(t) {
        var i = t._i,
            n = W.exec(i);
        i === e ? t._d = new Date : n ? t._d = new Date(+n[1]) : "string" == typeof i ? k(t) : l(i) ? (t._a = i.slice(0), y(t)) : t._d = i instanceof Date ? new Date(+i) : new Date(i)
    }

    function S(e, t, i, n, o) {
        return o.relativeTime(t || 1, !!i, e, n)
    }

    function x(e, t, i) {
        var n = P(Math.abs(e) / 1e3),
            o = P(n / 60),
            r = P(o / 60),
            a = P(r / 24),
            s = P(a / 365),
            c = 45 > n && ["s", n] || 1 === o && ["m"] || 45 > o && ["mm", o] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", P(a / 30)] || 1 === s && ["y"] || ["yy", s];
        return c[2] = t, c[3] = e > 0, c[4] = i, S.apply({}, c)
    }

    function T(e, t, i) {
        var n, o = i - t,
            r = i - e.day();
        return r > o && (r -= 7), o - 7 > r && (r += 7), n = L(e).add("d", r), {
            week: Math.ceil(n.dayOfYear() / 7),
            year: n.year()
        }
    }

    function F(e) {
        var t = e._i,
            i = e._f;
        return null === t || "" === t ? null : ("string" == typeof t && (e._i = t = g().preparse(t)), L.isMoment(t) ? (e = a({}, t), e._d = new Date(+t._d)) : i ? l(i) ? w(e) : b(e) : D(e), new o(e))
    }

    function I(e, t) {
        L.fn[e] = L.fn[e + "s"] = function(e) {
            var i = this._isUTC ? "UTC" : "";
            return null != e ? (this._d["set" + i + t](e), L.updateOffset(this), this) : this._d["get" + i + t]()
        }
    }

    function M(e) {
        L.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function U(e, t) {
        L.duration.fn["as" + e] = function() {
            return +this / t
        }
    }
    for (var L, O, N = "2.1.0", P = Math.round, R = {}, j = "undefined" != typeof module && module.exports, W = /^\/?Date\((\-?\d+)/i, $ = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, q = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, z = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, H = /\d\d?/, V = /\d{1,3}/, Y = /\d{3}/, G = /\d{1,4}/, Q = /[+\-]?\d{1,6}/, X = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, K = /Z|[\+\-]\d\d:?\d\d/i, J = /T/i, Z = /[\+\-]?\d+(\.\d{1,3})?/, et = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, tt = "YYYY-MM-DDTHH:mm:ssZ", it = [
        ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], nt = /([\+\-]|\d\d)/gi, ot = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), rt = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, at = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        W: "isoweek",
        M: "month",
        y: "year"
    }, st = {}, ct = "DDD w W M D d".split(" "), dt = "M D H h m s w W".split(" "), lt = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return this.lang().monthsShort(this, e)
        },
        MMMM: function(e) {
            return this.lang().months(this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return this.lang().weekdaysMin(this, e)
        },
        ddd: function(e) {
            return this.lang().weekdaysShort(this, e)
        },
        dddd: function(e) {
            return this.lang().weekdays(this, e)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return c(this.year() % 100, 2)
        },
        YYYY: function() {
            return c(this.year(), 4)
        },
        YYYYY: function() {
            return c(this.year(), 5)
        },
        gg: function() {
            return c(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return this.weekYear()
        },
        ggggg: function() {
            return c(this.weekYear(), 5)
        },
        GG: function() {
            return c(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return this.isoWeekYear()
        },
        GGGGG: function() {
            return c(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return ~~(this.milliseconds() / 100)
        },
        SS: function() {
            return c(~~(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return c(this.milliseconds(), 3)
        },
        Z: function() {
            var e = -this.zone(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + c(~~(e / 60), 2) + ":" + c(~~e % 60, 2)
        },
        ZZ: function() {
            var e = -this.zone(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + c(~~(10 * e / 6), 4)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        }
    }; ct.length;) O = ct.pop(), lt[O + "o"] = i(lt[O], O);
    for (; dt.length;) O = dt.pop(), lt[O + O] = t(lt[O], 2);
    for (lt.DDDD = t(lt.DDD, 3), n.prototype = {
        set: function(e) {
            var t, i;
            for (i in e) t = e[i], "function" == typeof t ? this[i] = t : this["_" + i] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
            var t, i, n;
            for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
                if (this._monthsParse[t] || (i = L([2e3, t]), n = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[t] = RegExp(n.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, i, n;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (i = L([2e3, 1]).day(t), n = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[t] = RegExp(n.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase()[0]
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, i) {
            return e > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var i = this._calendar[e];
            return "function" == typeof i ? i.apply(t) : i
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, i, n) {
            var o = this._relativeTime[i];
            return "function" == typeof o ? o(e, t, i, n) : o.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var i = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof i ? i(t) : i.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return T(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }, L = function(e, t, i) {
        return F({
            _i: e,
            _f: t,
            _l: i,
            _isUTC: !1
        })
    }, L.utc = function(e, t, i) {
        return F({
            _useUTC: !0,
            _isUTC: !0,
            _l: i,
            _i: e,
            _f: t
        })
    }, L.unix = function(e) {
        return L(1e3 * e)
    }, L.duration = function(e, t) {
        var i, n, o = L.isDuration(e),
            a = "number" == typeof e,
            s = o ? e._input : a ? {} : e,
            c = $.exec(e);
        return a ? t ? s[t] = e : s.milliseconds = e : c && (i = "-" === c[1] ? -1 : 1, s = {
            y: 0,
            d: ~~c[2] * i,
            h: ~~c[3] * i,
            m: ~~c[4] * i,
            s: ~~c[5] * i,
            ms: ~~c[6] * i
        }), n = new r(s), o && e.hasOwnProperty("_lang") && (n._lang = e._lang), n
    }, L.version = N, L.defaultFormat = tt, L.updateOffset = function() {}, L.lang = function(e, t) {
        return e ? (t ? h(e, t) : null === t ? (f(e), e = "en") : R[e] || g(e), L.duration.fn._lang = L.fn._lang = g(e), void 0) : L.fn._lang._abbr
    }, L.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), g(e)
    }, L.isMoment = function(e) {
        return e instanceof o
    }, L.isDuration = function(e) {
        return e instanceof r
    }, L.fn = o.prototype = {
        clone: function() {
            return L(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            return A(L(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return null == this._isValid && (this._isValid = this._a ? !u(this._a, (this._isUTC ? L.utc(this._a) : L(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
        },
        invalidAt: function() {
            var e, t = this._a,
                i = (this._isUTC ? L.utc(this._a) : L(this._a)).toArray();
            for (e = 6; e >= 0 && t[e] === i[e]; --e);
            return e
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function(e) {
            var t = A(this, e || L.defaultFormat);
            return this.lang().postformat(t)
        },
        add: function(e, t) {
            var i;
            return i = "string" == typeof e ? L.duration(+t, e) : L.duration(e, t), d(this, i, 1), this
        },
        subtract: function(e, t) {
            var i;
            return i = "string" == typeof e ? L.duration(+t, e) : L.duration(e, t), d(this, i, -1), this
        },
        diff: function(e, t, i) {
            var n, o, r = this._isUTC ? L(e).zone(this._offset || 0) : L(e).local(),
                a = 6e4 * (this.zone() - r.zone());
            return t = p(t), "year" === t || "month" === t ? (n = 432e5 * (this.daysInMonth() + r.daysInMonth()), o = 12 * (this.year() - r.year()) + (this.month() - r.month()), o += (this - L(this).startOf("month") - (r - L(r).startOf("month"))) / n, o -= 6e4 * (this.zone() - L(this).startOf("month").zone() - (r.zone() - L(r).startOf("month").zone())) / n, "year" === t && (o /= 12)) : (n = this - r, o = "second" === t ? n / 1e3 : "minute" === t ? n / 6e4 : "hour" === t ? n / 36e5 : "day" === t ? (n - a) / 864e5 : "week" === t ? (n - a) / 6048e5 : n), i ? o : s(o)
        },
        from: function(e, t) {
            return L.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(L(), e)
        },
        calendar: function() {
            var e = this.diff(L().startOf("day"), "days", !0),
                t = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(t, this))
        },
        isLeapYear: function() {
            var e = this.year();
            return 0 === e % 4 && 0 !== e % 100 || 0 === e % 400
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? "string" == typeof e && (e = this.lang().weekdaysParse(e), "number" != typeof e) ? this : this.add({
                d: e - t
            }) : t
        },
        month: function(e) {
            var t, i = this._isUTC ? "UTC" : "";
            return null != e ? "string" == typeof e && (e = this.lang().monthsParse(e), "number" != typeof e) ? this : (t = this.date(), this.date(1), this._d["set" + i + "Month"](e), this.date(Math.min(t, this.daysInMonth())), L.updateOffset(this), this) : this._d["get" + i + "Month"]()
        },
        startOf: function(e) {
            switch (e = p(e)) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "isoweek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoweek" === e && this.isoWeekday(1), this
        },
        endOf: function(e) {
            return e = p(e), this.startOf(e).add("isoweek" === e ? "week" : e, 1).subtract("ms", 1)
        },
        isAfter: function(e, t) {
            return t = t !== void 0 ? t : "millisecond", +this.clone().startOf(t) > +L(e).startOf(t)
        },
        isBefore: function(e, t) {
            return t = t !== void 0 ? t : "millisecond", +this.clone().startOf(t) < +L(e).startOf(t)
        },
        isSame: function(e, t) {
            return t = t !== void 0 ? t : "millisecond", +this.clone().startOf(t) === +L(e).startOf(t)
        },
        min: function(e) {
            return e = L.apply(null, arguments), this > e ? this : e
        },
        max: function(e) {
            return e = L.apply(null, arguments), e > this ? this : e
        },
        zone: function(e) {
            var t = this._offset || 0;
            return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = v(e)), 16 > Math.abs(e) && (e = 60 * e), this._offset = e, this._isUTC = !0, t !== e && d(this, L.duration(t - e, "m"), 1, !0), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        daysInMonth: function() {
            return L.utc([this.year(), this.month() + 1, 0]).date()
        },
        dayOfYear: function(e) {
            var t = P((L(this).startOf("day") - L(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add("d", e - t)
        },
        weekYear: function(e) {
            var t = T(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == e ? t : this.add("y", e - t)
        },
        isoWeekYear: function(e) {
            var t = T(this, 1, 4).year;
            return null == e ? t : this.add("y", e - t)
        },
        week: function(e) {
            var t = this.lang().week(this);
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        isoWeek: function(e) {
            var t = T(this, 1, 4).week;
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        weekday: function(e) {
            var t = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == e ? t : this.add("d", e - t)
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        get: function(e) {
            return e = p(e), this[e.toLowerCase() + "s"]()
        },
        set: function(e, t) {
            e = p(e), this[e.toLowerCase() + "s"](t)
        },
        lang: function(t) {
            return t === e ? this._lang : (this._lang = g(t), this)
        }
    }, O = 0; ot.length > O; O++) I(ot[O].toLowerCase().replace(/s$/, ""), ot[O]);
    I("year", "FullYear"), L.fn.days = L.fn.day, L.fn.months = L.fn.month, L.fn.weeks = L.fn.week, L.fn.isoWeeks = L.fn.isoWeek, L.fn.toJSON = L.fn.toISOString, L.duration.fn = r.prototype = {
        _bubble: function() {
            var e, t, i, n, o = this._milliseconds,
                r = this._days,
                a = this._months,
                c = this._data;
            c.milliseconds = o % 1e3, e = s(o / 1e3), c.seconds = e % 60, t = s(e / 60), c.minutes = t % 60, i = s(t / 60), c.hours = i % 24, r += s(i / 24), c.days = r % 30, a += s(r / 30), c.months = a % 12, n = s(a / 12), c.years = n
        },
        weeks: function() {
            return s(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        },
        humanize: function(e) {
            var t = +this,
                i = x(t, !e, this.lang());
            return e && (i = this.lang().pastFuture(t, i)), this.lang().postformat(i)
        },
        add: function(e, t) {
            var i = L.duration(e, t);
            return this._milliseconds += i._milliseconds, this._days += i._days, this._months += i._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var i = L.duration(e, t);
            return this._milliseconds -= i._milliseconds, this._days -= i._days, this._months -= i._months, this._bubble(), this
        },
        get: function(e) {
            return e = p(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            return e = p(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: L.fn.lang
    };
    for (O in rt) rt.hasOwnProperty(O) && (U(O, rt[O]), M(O.toLowerCase()));
    U("Weeks", 6048e5), L.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, L.lang("en", {
        ordinal: function(e) {
            var t = e % 10,
                i = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + i
        }
    }), j && (module.exports = L), "undefined" == typeof ender && (this.moment = L), "function" == typeof define && define.amd && define("moment", [], function() {
        return L
    })
}.call(this),
    function(e) {
        var t = {
            _isRich: !1,
            _range: null,
            setRichEditor: function(e) {
                this._isRich = e
            },
            checkIsRich: function() {
                return this._isRich
            },
            createSelection: function(e, t, i) {
                if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.collapse(!0), n.moveStart("character", t), n.moveEnd("character", i), n.select()
                } else e.setSelectionRange ? e.setSelectionRange(t, i) : e.selectionStart && (e.selectionStart = t, e.selectionEnd = i);
                e.focus()
            },
            setNewLine: function(e) {
                if (this.checkIsRich())
                    if (Airdroid.Util.browser.chrome || Airdroid.Util.browser.firefox || Airdroid.Util.browser.safari) {
                        var t = "<br>&nbsp;";
                        this.insertHtmlAtCaret(t, {
                            type: "newline"
                        })
                    } else {
                        var t = "<br>";
                        this.insertHtmlAtCaret(t)
                    } else {
                    var i = e;
                    if (i.val().length > 0) {
                        var n = i.get(0),
                            t = "\r\n";
                        if (document.selection) {
                            n.focus();
                            var o = document.selection.createRange();
                            o.text = t
                        } else if ("number" == typeof n.selectionStart && "number" == typeof n.selectionEnd) {
                            var r = n.selectionStart,
                                a = n.selectionEnd,
                                s = n.value;
                            n.value = s.substring(0, r) + t + s.substring(a, s.length)
                        } else n.value += t;
                        this.setCaretToPos(n, r + 1)
                    } else i.val("\r\n")
                }
            },
            setSelectionRange: function(e, t, i) {
                if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, i);
                else if (e.createTextRange) {
                    var n = e.createTextRange();
                    n.collapse(!0), n.moveEnd("character", i), n.moveStart("character", t), n.select()
                }
            },
            setCaretToPos: function(e, t) {
                this.setSelectionRange(e, t, t)
            },
            saveRange: function() {
                var t = this;
                if (e.getSelection) {
                    var i = e.getSelection();
                    if (i.getRangeAt && i.rangeCount) {
                        var n = i.getRangeAt(0);
                        t._range = n
                    }
                } else document.selection && "Control" != document.selection.type && (t._range = document.selection.createRange())
            },
            reductionRange: function() {
                var t = this;
                if (null != t._range)
                    if (e.getSelection) {
                        var i = e.getSelection();
                        i.removeAllRanges(), i.addRange(t._range)
                    } else t.browser.ie && (t._range.setEndPoint("EndToStart", t._range), t._range.collapse(!1), t._range.setEndPoint("EndToEnd", t._range), t._range.select())
            },
            checkRangeInRich: function(e) {
                var t = this._range.commonAncestorContainer;
                return this.contains(e, t, !0)
            },
            contains: function(e, t, i) {
                if (!i && e === t) return !1;
                if (e.compareDocumentPosition) {
                    var n = e.compareDocumentPosition(t);
                    if (20 === n || 0 == n) return !0
                } else if (e.contains(t)) return !0;
                return !1
            },
            insertHtmlAtCaret: function(t, i) {
                var n, o;
                _.isUndefined(i) && (i = {});
                var r = {
                    type: "",
                    el: "",
                    browser: ""
                };
                if (i = $.extend(r, i), e.getSelection) {
                    if (n = e.getSelection(), n.getRangeAt && n.rangeCount) {
                        o = n.getRangeAt(0), o.deleteContents();
                        var a = document.createElement("div");
                        a.innerHTML = t;
                        for (var s, c, d = document.createDocumentFragment(); s = a.firstChild;) c = d.appendChild(s);
                        o.insertNode(d), c && (o = o.cloneRange(), o.setStartAfter(c), o.collapse(!0), n.removeAllRanges(), n.addRange(o), "newline" == i.type && document.execCommand("Delete", !1, null))
                    }
                } else document.selection && "Control" != document.selection.type && document.selection.createRange().pasteHTML(t)
            },
            editDivAppend: function(e, t) {
                if (this.checkIsRich()) e.html(), this.checkRangeInRich(e.get(0)) && (this.reductionRange(), this.insertHtmlAtCaret(t), this.saveRange());
                else {
                    var i = e.get(0);
                    if (document.selection) {
                        i.focus();
                        var n = document.selection.createRange();
                        n.text = t
                    } else if ("number" == typeof i.selectionStart && "number" == typeof i.selectionEnd) {
                        var o = i.selectionStart,
                            r = i.selectionEnd,
                            a = i.value;
                        i.value = a.substring(0, o) + t + a.substring(r, a.length)
                    } else i.value += t;
                    var s = o + t.length;
                    this.setCaretToPos(i, s)
                }
                e.focus()
            },
            getContentValue: function(e, t) {
                if (_.isUndefined(t) && (t = !1), this.checkIsRich()) {
                    if (t) {
                        for (var i, n = 0, o = /<img\s+.*?code=(?:'(.+?)'|"(.+?)")\s*.*?(?:>|\/>)/gim, r = e.html(), a = r; i = o.exec(r);) a = a.replace(i[0], i[2]), n += 1;
                        return Airdroid.Util.browser.ie && (a = a.replace(/<p>/g, "<div>"), a = a.replace(/<\/p>/g, "")), a = a.replace(/<div><br><\/div>/g, "\r\n"), a = a.replace(/<\/div>/g, ""), a = a.replace(/<div>/g, "\r\n"), a = a.replace(/<br>/g, "\r\n"), a = $("<div/>").html(a).text(), a = Airdroid.Util.HTMLDecode(a), a.trim()
                    }
                    return e.html().trim()
                }
                return e.val().trim()
            },
            setContentValue: function(e, t) {
                this.checkIsRich() ? e.html(t) : e.val(t)
            }
        };
        Airdroid.Util.Editor = t, Airdroid.Util.Editor.setRichEditor(!0)
    }(window), Airdroid.Util._shareWidget = null, Airdroid.Util.share = function(e, t) {
    var i = this,
        n = function() {
            i._shareWidget = new Airdroid.Widget.Share, e.parent ? i._shareWidget.create(e.parent) : i._shareWidget.create()
        };
    null == this._shareWidget ? n() : t && (this._shareWidget.clear(), n()), this._shareWidget.initView(e)
},
    function() {
        var e = null,
            t = [],
            i = Date.now();
        if (Airdroid.Util.UploadCenter = {
                UPLOAD_STATUS_WAITING: 0,
                UPLOAD_STATUS_UPLOADING: 1,
                UPLOAD_STATUS_SUCCESS: 2,
                UPLOAD_STATUS_FAIL: 3,
                UPLOAD_STATUS_CANCEL: 4,
                _runUploadCenterWidget: function(e) {
                    Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.UploadCenter, e)
                },
                _getUploader: function() {
                    var n = this;
                    return e ? e : (setInterval(function() {
                        Date.now() - i > 1e3 && n._removeAllDropAreaDragOverClass()
                    }, 500), this._runUploadCenterWidget(), e = new Airdroid.Uploader({
                        common: {
                            fpath: "",
                            uploadStarted: function(e) {
                                $(e.dropArea).data("dropAreaInfo"), n._runUploadCenterWidget({
                                    file: e
                                }), _.invoke(t, "call", this, e, n.UPLOAD_STATUS_WAITING), console.debug("uploadStarted:", arguments)
                            },
                            progressUpdated: function(e, i) {
                                _.invoke(t, "call", this, e, n.UPLOAD_STATUS_UPLOADING, i), console.debug("progress:", i)
                            },
                            uploadFinished: function(e, i, o) {
                                var r = this,
                                    a = $(e.dropArea).data("dropAreaInfo");
                                setTimeout(function() {
                                    a && a.onFinish(e, i, o), _.invoke(t, "call", r, e, n.UPLOAD_STATUS_SUCCESS)
                                }, Airdroid.Config.uploadRefeshDelay), console.debug("uploadFinished:", arguments)
                            },
                            error: function(e, i, o) {
                                var r = $(e.dropArea).data("dropAreaInfo");
                                r && r.onError(e, i, o), e.id && _.invoke(t, "call", this, e, n.UPLOAD_STATUS_FAIL), Airdroid.Util.alert(i), console.debug("uploadError", arguments)
                            },
                            cancel: function(e) {
                                var i = $(e.dropArea).data("dropAreaInfo");
                                i && i.onCancel(e), e.id && _.invoke(t, "call", this, e, n.UPLOAD_STATUS_CANCEL), console.debug("uploadCancel", arguments)
                            }
                        },
                        xhr: {
                            isFitDir: !1,
                            dropArea: $(""),
                            supportFolderUpload: !0,
                            beforeEach: function(e) {
                                var t = $(e.dropArea).data("dropAreaInfo"),
                                    i = t.acceptExtension,
                                    n = Airdroid.Util.getFileExt(e.name);
                                if ("*" === i) return !0;
                                if (_.isArray(i)) {
                                    if (-1 == _.indexOf(i, n)) return !1
                                } else if (i !== n) return !1;
                                return !0
                            },
                            afterAll: function() {},
                            drop: function(t) {
                                var i = $(t.currentTarget).data("dropAreaInfo"),
                                    o = i.uploadTo;
                                e.setFilePath(o), n._removeAllDropAreaDragOverClass(), i.onDrop(t)
                            },
                            dragOver: function(e) {
                                var t = $(e.currentTarget),
                                    o = t.data("dropAreaInfo");
                                n._getUploader().getDropArea().not(t).removeClass(o.dragOverClass), t.addClass(o.dragOverClass), i = Date.now(), o.onDragOver(e)
                            },
                            dragLeave: function(e) {
                                var t = $(e.currentTarget).data("dropAreaInfo");
                                $(e.currentTarget).removeClass(t.dragOverClass), t.onDragLeave(e)
                            },
                            afterLoad: function() {}
                        }
                    }))
                },
                isDropArea: function(e) {
                    return this._getUploader().isDropArea(e)
                },
                addDropArea: function(e, t) {
                    this.configDropArea(e, t), this._getUploader().addDropArea(e)
                },
                removeDropArea: function(e) {
                    this._getUploader().removeDropArea(e)
                },
                addDropAreas: function(e) {
                    this._getUploader().addDropArea(e)
                },
                configDropArea: function(e, t) {
                    e.data("dropAreaInfo", _.defaults(t, e.data("dropAreaInfo"), {
                        acceptExtension: "*",
                        uploadTo: "/sdcard",
                        dragOverClass: "hover",
                        onDragOver: $.noop,
                        onDragLeave: $.noop,
                        onDrop: $.noop,
                        onFinish: $.noop,
                        onError: $.noop,
                        onCancel: $.noop
                    }))
                },
                _removeAllDropAreaDragOverClass: function() {
                    var e, t, i, n;
                    e = this._getUploader().getDropArea(), _.each(e, function(e) {
                        t = $(e), n = t.data("dropAreaInfo"), n && (i = n.dragOverClass, t.removeClass(i))
                    })
                },
                addUploadStatusListener: function(e) {
                    t.push(e)
                },
                cancel: function(t, i) {
                    e.cancelUpload(t, i)
                }
            }, Airdroid.Util.browser.ie8 || Airdroid.Util.browser.ie9) {
            for (var n in Airdroid.Util.UploadCenter) $.isFunction(Airdroid.Util.UploadCenter[n]) && (Airdroid.Util.UploadCenter[n] = $.noop);
            console.log("No support drag & drop files to upload.")
        }
    }();
