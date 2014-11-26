/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/widget/login/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-login">\r\n    <div class="widget-login-head"></div>\r\n    <div class="widget-login-main">\r\n        <div class="widget-login-frm widget-login-cnt" style="display: block;">\r\n            <div class="widget-login-account">\r\n                <div class="widget-login-account-area">\r\n                    <h2>' + (null == (__t = commonLang.Already_have_account) ? "" : __t) + '</h2>\r\n                    <div class="widget-login-account-item">\r\n                        <input class="widget-login-account-input" type="text" value="" placeholder="' + (null == (__t = commonLang.Email) ? "" : __t) + '"/>\r\n                    </div>\r\n                    <div class="widget-login-account-item">\r\n                        <input class="widget-login-pwd-input" type="password" value="" placeholder="' + (null == (__t = commonLang.Password) ? "" : __t) + '"/>\r\n                        <button class="btn widget-login-btn" type="button" cmd="internetLogin">' + (null == (__t = loginLang.Button_Login) ? "" : __t) + '\r\n                        </button>\r\n                    </div>\r\n                    <div class="widget-login-account-item widget-login-account-meta">\r\n                        <span class="widget-login-keep">\r\n                            <em class="checkbox widget-login-keep-checkbox" check="0"></em>' + (null == (__t = commonLang.KeepLogin) ? "" : __t) + '\r\n                            <a class="widget-login-forgot-password" target="_blank" href="' + (null == (__t = userApiUrl) ? "" : __t) + 'user/sendresetpwmail.html\r\n">' + (null == (__t = commonLang.forgot_password) ? "" : __t) + '</a>\r\n                        </span>\r\n                    </div>\r\n                    <div class="float-tip-box hide">\r\n                        <p>' + (null == (__t = CAPS_Lock) ? "" : __t) + '</p>\r\n                        <i class="left"></i>\r\n                    </div>\r\n                </div>\r\n                <div class="widget-login-message"></div>\r\n            </div>\r\n            <div class="widget-login-qr">\r\n                <h2>' + (null == (__t = commonLang.Or_You_May_QR) ? "" : __t) + '</h2>\r\n                <div class="widget-login-qr-imgWrapper widget-login-qr-loading">\r\n                    <img src="" height="125" width="125" style="display: none;"/>\r\n                </div>\r\n                <a class="widget-login-refresh-qrcode" href="#">' + (null == (__t = commonLang.Refresh) ? "" : __t) + '</a>\r\n            </div>\r\n            <div class="clearfix"></div>\r\n            <div class="widget-login-bottom">\r\n                <div class="widget-login-bottom-left" style="overflow:hidden;">\r\n                    <div class="widget-login-bottom-left-text">' + (null == (__t = commonLang.login_with) ? "" : __t) + '</div>\r\n                    <div class="widget-login-bottom-left-list"></div>\r\n                </div>\r\n                <div class="widget-login-bottom-right">\r\n                    <a class="widget-login-show-signUp" href="http://www.airdroid.com/signup/"\r\n                       target="_blank">' + (null == (__t = commonLang.Register) ? "" : __t) + '</a>\r\n                </div>\r\n            </div>\r\n            <i></i>\r\n        </div>\r\n        <div class="widget-login-conn widget-login-cnt"></div>\r\n        <div class="widget-login-footer"></div>\r\n    </div>\r\n    <div class="widget-login-btn-close"></div>\r\n</div>';
    return __p
};
this.ajst["views/widget/login_thirdParty.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<a class="google_oauth" tabname="Google+" href="' + (null == (__t = userApiUrl) ? "" : __t) + '/user/tplogin.html?service=google">\r\n    <img src="' + (null == (__t = imgBase) ? "" : __t) + 'tp_google.png" alt="' + (null == (__t = commonLang.login_with2.format("google")) ? "" : __t) + '"\r\n         title="' + (null == (__t = commonLang.login_with2.format("google")) ? "" : __t) + '"/>\r\n</a>\r\n<a class="facebook_oauth" tabname="Facebook" href="' + (null == (__t = userApiUrl) ? "" : __t) + '/user/tplogin.html?service=facebook">\r\n    <img src="' + (null == (__t = imgBase) ? "" : __t) + 'tp_facebook.png" alt="' + (null == (__t = commonLang.login_with2.format("facebook")) ? "" : __t) + '"\r\n        title="' + (null == (__t = commonLang.login_with2.format("facebook")) ? "" : __t) + ' "/>\r\n</a>\r\n<a class="twitter_oauth" tabname="Twitter" href="' + (null == (__t = userApiUrl) ? "" : __t) + '/user/tplogin.html?service=twitter">\r\n    <img src="' + (null == (__t = imgBase) ? "" : __t) + 'tp_twitter.png" alt="' + (null == (__t = commonLang.login_with2.format("twitter")) ? "" : __t) + '"\r\n        title="' + (null == (__t = commonLang.login_with2.format("twitter")) ? "" : __t) + '"/>\r\n</a>\r\n\r\n';
    return __p
};
this.ajst["views/widget/login/conn.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-login-connecting" style="display: none">\r\n    <div class="widget-login-connecting-log"></div>\r\n    <div class="widget-login-connecting-loading"></div>\r\n    <button class="btn widget-login-cancel-connect">' + (null == (__t = commonLang.Button_Cancel) ? "" : __t) + "</button>\r\n</div>\r\n\r\n";
    return __p
};
this.ajst["views/widget/login/fail.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-login-failed" style="display: none;">\r\n    <p class="widget-login-failed-title">' + (null == (__t = LoginLang.Msg_Srv_Unavailable) ? "" : __t) + '</p>\r\n\r\n    <div class="widget-login-failed-text">\r\n        <ul>\r\n            <li>' + (null == (__t = LoginLang.Msg_Srv_Unavailable_1) ? "" : __t) + "</li>\r\n            <li>" + (null == (__t = LoginLang.Msg_Srv_Unavailable_2) ? "" : __t) + "</li>\r\n            <li>" + (null == (__t = commonLang.Msg_Srv_Unavailable_3) ? "" : __t) + '</li>\r\n        </ul>\r\n        <div class="widget-login-failed-reconn">\r\n            <button class="btn widget-login-failed-reconn-btn">' + (null == (__t = commonLang.ReConnect) ? "" : __t) + '</button>\r\n        </div>\r\n        <p><a target="_blank"\r\n              href="http://help.airdroid.com/customer/portal/articles/1369133-failed-to-connect-to-device">' + (null == (__t = commonLang.ConnFAQ) ? "" : __t) + "</a>\r\n        </p>\r\n    </div>\r\n</div>";
    return __p
};
Airdroid.Widget.Login = Core.extend(Airdroid.AppBase, {
    domElement: [],
    loginSuccCallBack: null,
    isKeepLogin: "0",
    qrSocket: null,
    deviceOpt: null,
    successCb: null,
    failCb: null,
    autoLoginHistory: !1,
    detectCapsLockPosition: {
        top: "95px",
        left: "314px"
    },
    events: {
        "click .widget-login-btn": "doLoginHandler",
        "click .widget-login-btn-close": "doCloseHandler",
        "click .widget-login-keep-checkbox": "doKeepLoginHandler",
        "click .widget-login-cancel-connect": "doCancelConnectHandler",
        "click .widget-login-failed-reconn-btn": "doReconnectHandler",
        "click .widget-login-refresh-qrcode": "doRefreshQrCodeHandler",
        "keyup .widget-login-account-input,.widget-login-pwd-input": "doTriggerLoginHandler",
        "keypress .widget-login-pwd-input": "checkDetectCapsLock"
    },
    initialize: function() {},
    onCreate: function() {
        var e = this;
        e.commonLang = Airdroid.Util.getLang("Common", null), e.loginLang = Airdroid.Util.getLang("Login", null), e.userApiUrl = Airdroid.Config.userApiUrl, e._refDOM = $(Airdroid.Util.getTemplate("widget/login", "index", {
            commonLang: e.commonLang,
            loginLang: e.loginLang,
            userApiUrl: e.userApiUrl,
            CAPS_Lock: Airdroid.Util.getLang("FindMyPhone", "CAPS_Lock")
        })), Airdroid.Util.trackPageLoadTime("login"), delete Airdroid.Runtime.resourceStartTime, e.setContent(e._refDOM), e._refDOM.find(".widget-login-bottom-left-list").append($(Airdroid.Util.getTemplate("widget", "login_thirdParty", {
            imgBase: Airdroid.Service.getImgAssets(""),
            commonLang: e.commonLang,
            LoginLang: e.loginLang,
            userApiUrl: e.userApiUrl
        })));
        var t = e._refDOM.find(".widget-login-conn");
        t.append($(Airdroid.Util.getTemplate("widget/login", "conn", {
            commonLang: e.commonLang,
            LoginLang: e.loginLang
        }))), t.append($(Airdroid.Util.getTemplate("widget/login", "fail", {
            commonLang: e.commonLang,
            LoginLang: e.loginLang
        }))), e.domElement = {
            closeBtn: e._refDOM.find(".widget-login-btn-close"),
            loginBtn: e._refDOM.find(".widget-login-btn"),
            msg: e._refDOM.find(".widget-login-message"),
            ckbKeepLogin: e._refDOM.find(".widget-login-keep-checkbox"),
            qrImgWrapDom: e._refDOM.find(".widget-login-qr-imgWrapper"),
            connDom: t,
            emailInputDom: e._refDOM.find(".widget-login-account-input"),
            pwdInputDom: e._refDOM.find(".widget-login-pwd-input"),
            loginFrmDom: e._refDOM.find(".widget-login-frm"),
            loginFailDom: e._refDOM.find(".widget-login-failed"),
            connectingDom: e._refDOM.find(".widget-login-connecting"),
            connectingLogDom: e._refDOM.find(".widget-login-connecting-log"),
            detectCapsLockDom: e._refDOM.find(".float-tip-box")
        }, e.domElement.detectCapsLockDom.css(e.detectCapsLockPosition)
    },
    onCreated: function() {
        var e = this;
        return Airdroid.Runtime.QRNoAccount ? (Airdroid.DeviceManage.isCurrentDeviceRemote() || e.destroy(), void 0) : (!Airdroid.DeviceManage.isCurrentDeviceConnected() && Airdroid.UserManage.checkUserLogin() || e.hasKeepCookie() ? (Airdroid.Util.trackEvent("W-Login", "Login", "KeepLogin"), e.doLoginHandler()) : e.initQrSocket("airdroid:" + e.util.UUID.uuid4()), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.client_auto_login, function() {
            delete Airdroid.Runtime.clientAutoLogin, e.showConnectingOperate("")
        }), _.each(["google_oauth", "facebook_oauth", "twitter_oauth"], function(t) {
            var i, n = {
                popup: {
                    width: 700,
                    height: 550
                },
                id: t
            };
            e._refDOM.find("." + t).click(function() {
                void 0 !== i && i.close();
                var o, a = o = this.href;
                a += (a.indexOf("?") >= 0 ? "&" : "?") + "redirect_uri=" + encodeURIComponent(o), a += "&js";
                var r = ($(window).width() - n.popup.width) / 2,
                    s = ($(window).height() - n.popup.height) / 2;
                i = window.open(a, "airdroid_auth_popup", "width=" + n.popup.width + ",height=" + n.popup.height + ",left=" + r + ",top=" + s + ",resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes"), i.focus(), Airdroid.Util.trackEvent("W-Login", "TPLogin", "open");
                var d = setInterval(function() {
                    if (i.closed) {
                        clearInterval(d), e.domElement.msg.html(e.util.getLang("Common", "Authenticating")), e.disableLoginDom(e.domElement);
                        var o = {
                            successCb: function() {
                                e.enableLoginDom(e.domElement), e.showConnectingOperate(t)
                            },
                            failCb: function() {
                                e.enableLoginDom(e.domElement), e.domElement.msg.html("")
                            },
                            timeoutCb: function() {
                                e.enableLoginDom(e.domElement)
                            }
                        };
                        e.util.authWindowClose(n.id, o)
                    }
                }, 200);
                return !1
            })
        }), Airdroid.Util.hasCookie("email") && e.domElement.emailInputDom.val(Airdroid.Util.getCookie("email")), e.setFocusInput(), void 0)
    },
    onResize: function() {},
    onClose: function() {
        this.qrSocket && 1 === this.qrSocket.readyState && this.qrSocket.close(), Airdroid.MessageManage.removeListener(Airdroid.MessageManage.EventTypes.client_auto_login)
    },
    onDataChange: function(e) {
        var t = this;
        $.isFunction(e.data.callBack) && (t.domElement.loginSuccCallBack = e.data.callBack), Airdroid.Runtime.clientAutoLogin ? (delete Airdroid.Runtime.clientAutoLogin, t.showConnectingOperate("")) : e.data.needConnect && t.showConnectingOperate("")
    },
    setQRCodeStatus: function(e) {
        e ? (this.domElement.qrImgWrapDom.removeClass("widget-login-qr-loading-error").addClass("widget-login-qr-loading"), this._refDOM.find(".widget-login-refresh-qrcode").hide()) : (this.domElement.qrImgWrapDom.removeClass("widget-login-qr-loading").addClass("widget-login-qr-loading-error"), this._refDOM.find(".widget-login-refresh-qrcode").show(), this.domElement.qrImgWrapDom.find("img").hide())
    },
    setFocusInput: function() {
        var e = this;
        "" == e.domElement.emailInputDom.val().trim() ? e.domElement.emailInputDom.focus() : e.domElement.pwdInputDom.focus()
    },
    doLoginHandler: function() {
        var e = this,
            t = e.domElement.emailInputDom.val().trim(),
            i = e.domElement.pwdInputDom.val(),
            n = Airdroid.Util.validateLoginInput(t, i);
        if (n.fail && "0" === e.isKeepLogin && "qr" != e.tp_type) return e.domElement.msg.html(n.msg), void 0;
        "qr" == e.tp_type && (i = ""), e.domElement.msg.html(e.util.getLang("Common", "Authenticating")), e.disableLoginDom(e.domElement);
        var o = function() {
                e.enableLoginDom(e.domElement), Airdroid.UserManage.setAccount(null), Airdroid.Runtime.onLogining = !1, Airdroid.Service.connectStateLog({
                    status: 0,
                    type: 4,
                    tp_type: e.tp_type
                })
            },
            a = {
                isKeepLogin: e.autoLoginHistory ? "0" : e.isKeepLogin,
                successCb: function(t) {
                    e.showConnectingOperate(t)
                },
                failCb: function(t) {
                    e.domElement.msg.html(t), o()
                },
                timeoutCb: function(t) {
                    e.util.alert(t), e.util.removeLoadingMask($("body")), e.domElement.msg.html(""), o()
                }
            };
        Airdroid.Util.doLogin(t, i, a)
    },
    doCloseHandler: function() {
        this.destroy(), Airdroid.DeviceManage.cancelCurrentDeviceConnect()
    },
    doKeepLoginHandler: function(e) {
        var t = this,
            i = $(e.currentTarget);
        "disabled" != i.attr("disabled") && Airdroid.Util.toggleChecked(i, function() {
            Airdroid.Util.setChecked(i), t.isKeepLogin = "1"
        }, function() {
            Airdroid.Util.setUnchecked(i), t.isKeepLogin = "0"
        })
    },
    doCancelConnectHandler: function() {
        this.destroy(), Airdroid.DeviceManage.cancelCurrentDeviceConnect()
    },
    doReconnectHandler: function() {
        var e = this,
            t = {
                logHandle: function(t) {
                    e.domElement.connectingLogDom.text(t)
                },
                showHandle: function() {
                    e.domElement.loginFrmDom.hide(), e.domElement.connDom.show().find(".widget-login-connecting").show(), e.domElement.loginFailDom.hide()
                }
            };
        this.startConnectPhone("", "", t)
    },
    doRefreshQrCodeHandler: function() {
        this.initQrSocket("airdroid:" + Airdroid.Util.UUID.uuid4())
    },
    checkDetectCapsLock: function(e) {
        var t = this;
        13 != e.keyCode && Airdroid.Util.detectCapsLock(e, function() {
            t.domElement.detectCapsLockDom.removeClass("hide")
        }, function() {
            t.domElement.detectCapsLockDom.addClass("hide")
        })
    },
    doTriggerLoginHandler: function(e) {
        var t = this;
        13 == e.keyCode ? this.doLoginHandler() : "" == $(e.currentTarget).val() && t.domElement.detectCapsLockDom.addClass("hide")
    },
    initQrSocket: function(e) {
        var t = this;
        this.setQRCodeStatus(!0), this.qrSocket = new WebSocket(Airdroid.Config.qrSocketUrl + e), this.qrSocket.onopen = function() {
            var i = !0,
                n = "http://chart.googleapis.com/chart?cht=qr&chs=100x100&choe=UTF-8&chld=L|0&chl=" + e,
                o = "http://qr.liantu.com/api.php?w=100&m=5&el=l&text=" + e,
                a = n;
            Airdroid.Util.checkChina() && (i = !1, a = o);
            var r = function() {
                t.domElement.qrImgWrapDom.find("img").attr("src", a).load(function() {
                    $(this).show()
                }).error(function() {
                    i ? (i = !1, a = o, r()) : t.setQRCodeStatus(!1)
                })
            };
            r()
        }, this.qrSocket.onmessage = function(i) {
            $log.info(i.data);
            var n = $.parseJSON(i.data);
            if ("connect" == n.action) {
                if (Airdroid.Util.trackEvent("W-Login", "Login", "QrScan"), void 0 === n.data.ver && void 0 == n.data.accountId) {
                    var o = "http://" + n.data.ip + ":" + n.data.port + "/cloud.htm?token=" + e + "&nobg=0";
                    t.runApp(Airdroid.Config.dependApps.Update, {
                        cloud_url: o
                    }), t.destroy()
                }
                if (Airdroid.Runtime.onLogining) return;
                var a = n.data,
                    r = {
                        ip: a.ip,
                        port: a.port,
                        socket_port: a.socket_port,
                        ssl_port: a.ssl_port,
                        usewifi: a.usewifi
                    },
                    s = function() {
                        t.tp_type = "qrNoAccount";
                        var e = {
                                successCb: function() {
                                    t.connectSuccessHandler()
                                },
                                failCb: function() {
                                    t.showQrNotSameWifiNoAccountBox()
                                },
                                logHandle: function(e) {
                                    t.domElement.connectingLogDom.text(e)
                                },
                                showHandle: function() {
                                    t.domElement.loginFrmDom.hide(), t.domElement.connDom.show().find(".widget-login-connecting").show(), t.domElement.loginFailDom.hide()
                                }
                            },
                            i = {
                                QRCode: !0,
                                netOpts: r,
                                sdkApiLevel: a.sdkLevel
                            };
                        Airdroid.DeviceManage.setCurrentDevice(i), t.startConnectPhone(i, t.tp_type, e)
                    };
                "" != a.accountid && "" != a.deviceid ? (Airdroid.Util.trackEvent("W-Login", "Login", "QrLoginGotAccount"), t._service.getAccount({
                    accountId: a.accountid,
                    deviceId: a.deviceid
                }, function(e) {
                    1 == e.code ? (t.tp_type = "qr", Airdroid.Runtime.QRWithAccount = !0, Airdroid.DeviceManage.setCurrentDevice(e.result.device), t.doLoginHandler()) : (Airdroid.Util.trackEvent("W-Login", "Login", "QrLoginNotAccount"), Airdroid.Runtime.qrCode = a.code, s())
                }, function() {})) : (Airdroid.Runtime.QRNoAccount = !0, Airdroid.Util.deleteCookie("account_info", "/", ".airdroid.com"), Airdroid.Util.deleteCookie("account_kp", "/", ".airdroid.com"), Airdroid.Runtime.qrCode = a.code, s())
            }
        }, this.qrSocket.onerror = function() {
            t.setQRCodeStatus(!1), t.qrSocket = null
        }, this.qrSocket.onclose = function() {
            t.setQRCodeStatus(!1), t.qrSocket = null
        }
    },
    beforeConnecting: function(e, t) {
        var i = this;
        if (Airdroid.UserManage.isBindDevice())
            if (Airdroid.DesktopManage.changeNavUser(), Airdroid.Util.setCookie("versionCode", Airdroid.Config.versionCode, 1209600), Airdroid.DeviceManage.checkNeedSelectDevicePanel()) i.destroy(), Airdroid.DeviceManage.selectTargetDevice({
                successCb: function() {
                    i.connectSuccessHandler()
                },
                tp_type: e
            });
            else {
                var n = {
                    successCb: function() {
                        i.connectSuccessHandler()
                    },
                    failCb: function() {
                        i.domElement.connectingDom.hide(), i.domElement.loginFailDom.show()
                    },
                    logHandle: function(e) {
                        t.logHandle(e)
                    },
                    showHandle: function() {
                        t.showHandle()
                    }
                };
                i.startConnectPhone(Airdroid.DeviceManage.getCurrentDeviceOpt(), e, n)
            } else i.destroy(), Airdroid.AppManage.getConfig(function() {
            Airdroid.DesktopManage.initDesktops(!1), Airdroid.DesktopManage.changeNavUser()
        }, !0), Airdroid.CenterManage.showBindDeviceBox();
        $(".nav-oprate .language").hide()
    },
    startConnectPhone: function(e, t, i) {
        var n = this;
        e && Airdroid.Util.checkUserLogin() && Airdroid.DeviceManage.closeUploadConn(), n.deviceOpt = e || n.deviceOpt || {}, n.successCb = i.successCb || n.successCb, n.failCb = i.failCb || n.failCb;
        var o = {
                successCb: n.successCb,
                failCb: n.failCb,
                tp_type: t || "account",
                logHandle: function(e) {
                    i.logHandle(e)
                },
                showHandle: function() {
                    i.showHandle()
                }
            },
            a = Airdroid.DeviceManage.getCurrentDeviceObj();
        a.doConnect(o)
    },
    connectSuccessHandler: function() {
        var e = this;
        e.destroy();
        var t = function() {
            Airdroid.MessageManage.removeListener(Airdroid.MessageManage.EventTypes.get_user_config_succeed, void 0, "widget_login"), Airdroid.DeviceManage.switchPhoneSuccess(), _.isFunction(e.loginSuccCallBack) && e.loginSuccCallBack()
        };
        Airdroid.UserManage.checkUserConfigLoad() || !Airdroid.Util.checkUserLogin() && Airdroid.UserManage.checkDefaultConfigLoad() ? (t(), console.log("user config loaded")) : Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.get_user_config_succeed, function() {
            t(), console.log("user config loaded when connect")
        }, "widget_login"), Airdroid.TaskbarManage.setConnectModel()
    },
    showConnectingOperate: function(e) {
        var t = this,
            i = {
                logHandle: function(e) {
                    t.domElement.connectingLogDom.text(e)
                },
                showHandle: function() {
                    t.domElement.loginFrmDom.hide(), t.domElement.connDom.show().find(".widget-login-connecting").show(), t.domElement.loginFailDom.hide()
                }
            };
        t.beforeConnecting(e, i)
    },
    hasKeepCookie: function() {
        var e = this,
            t = !1;
        return Airdroid.Util.hasCookie("account_kp") && Airdroid.Util.hasCookie("account_info") ? (e.isKeepLogin = "1", t = !0) : e.isKeepLogin = "0", Airdroid.Util.hasCookie("airdroid_history") && (parseInt(Airdroid.Util.getCookie("airdroid_history")) >= parseInt(Airdroid.Config.compatibleVersion) ? "0" === e.isKeepLogin && (e.isKeepLogin = "1", e.autoLoginHistory = !0, t = !0) : Airdroid.Util.deleteCookie("airdroid_history_id", "/", ".airdroid.com"), Airdroid.Util.deleteCookie("airdroid_history", "/", ".airdroid.com")), t
    },
    showQrNotSameWifiNoAccountBox: function() {
        var e = this;
        Airdroid.Util.trackEvent("W-Login", "Login", "QrNotSameWiFiNotAccount"), e.destroy(), Airdroid.Runtime.QRNoAccount === !0 && (Airdroid.Runtime.QRNoAccount = !1), Airdroid.Util.gotItMsgTip(Airdroid.Util.getLang("Common", "QrNotSameWifiNoAccount"), function() {
            Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.loginWidget, {})
        }, Airdroid.Util.getLang("Common", "UseAccountLogin"))
    },
    disableLoginDom: function(e) {
        var t = this;
        t.util.disableDom(e.emailInputDom), t.util.disableDom(e.pwdInputDom), t.util.disableDom(e.ckbKeepLogin), t.util.disableButton(e.loginBtn)
    },
    enableLoginDom: function(e) {
        var t = this;
        t.setFocusInput(), t.util.enableDom(e.emailInputDom), t.util.enableDom(e.pwdInputDom), t.util.enableDom(e.ckbKeepLogin), t.util.enableButton(e.loginBtn)
    }
});