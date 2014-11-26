/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
function initAirDroid() {
    Airdroid.Config.fileList.required.push(Airdroid.Config.baseUri + "assets/lng/" + Airdroid.Config.product + "/en.js");
    var loading_bar = document.querySelector(".block-loading-bar"),
        loading_bar_text = document.querySelector(".block-loading-text"),
        runLoading = function(e, t) {
            var i = "intl" === Airdroid.Config.product ? 121 : 140,
                n = Math.round((e + 1) / Airdroid.Config.fileList.resource.length * i),
                o = Math.round(100 * ((e + 1) / Airdroid.Config.fileList.resource.length));
            loading_bar.style.width = n > i ? i : n + "px", loading_bar_text.innerHTML = o > 100 ? "100%" : o + "%", Airdroid.Config.fileList.resource.length > e ? head.js(Airdroid.Config.fileList.resource[e], function() {
                runLoading(e + 1, t)
            }) : t()
        },
        onFileList1Loaded = function() {
            function bgListLoad() {
                Airdroid.Util.trackPageLoadTime("bg"), Airdroid.Runtime.bgListLoaded = !0, Airdroid.MessageManage.bgFilesAllLoaded()
            }
            Airdroid.Util.trackPageLoadTime("required"), Airdroid.Runtime.locale = Airdroid.Util.getCookie("language"), Airdroid.Config.lang[Airdroid.Runtime.locale] || Airdroid.Config.lang[window.navigator.language] && (Airdroid.Runtime.locale = window.navigator.language), "" == Airdroid.Runtime.locale && (Airdroid.Runtime.locale = "en"), Airdroid.Config.fileList.resource.push(Airdroid.Config.baseUri + "assets/lng/" + Airdroid.Config.product + "/" + Airdroid.Runtime.locale.replace(/_/g, "-") + ".js"), runLoading(0, function() {
                Airdroid.Config.goPush = "1" == Airdroid.Util.getUrlParam("useGoPush") ? !0 : Airdroid.Config.goPush, Airdroid.Config.multiDesktop = "1" == Airdroid.Util.getUrlParam("useMultiDesktop") ? !0 : Airdroid.Config.multiDesktop, Airdroid.Util.trackEvent("Desktop", "Init"), Airdroid.CenterManage.init(), Airdroid.Util.trackPageLoadTime("resource"), $("#block-loading").remove(), $("#block-wallpaper").removeClass("hide"), Airdroid.Util.trackEvent("Desktop", "Finish"), Airdroid.Runtime.Referrer = document.referrer, Airdroid.Runtime.fromOffer = document.referrer.indexOf("offer.airdroid.com") > -1 ? !0 : !1, document.referrer && Airdroid.Util.trackEvent("Referrer", document.referrer), eval('head.js("' + Airdroid.Config.fileList.bg.join('","') + '",function(){bgListLoad();});'), "en" != Airdroid.Runtime.locale && head.js(Airdroid.Config.baseUri + "assets/momentLang/" + Airdroid.Runtime.locale + ".js"), Airdroid.AppManage.getLabConfig();
                var token = Airdroid.Util.getUrlParam("token"),
                    device_id = Airdroid.Util.getUrlParam("device_id");
                token && device_id && Airdroid.Service.quickSignIn({
                    token: token,
                    device_id: device_id
                }, function(e) {
                    1 == e.code && (Airdroid.Runtime.clientAutoLogin = !0, Airdroid.UserManage.setAccount(e.result), Airdroid.DeviceManage.setCurrentDevice(e.result.device), Airdroid.UserManage.getUserInfo(), Airdroid.Util.trackEvent("Client2Web", Airdroid.Util.OS.getOSName()), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.client_auto_login, {}))
                })
            })
        };
    eval('head.js("' + Airdroid.Config.fileList.required.join('","') + '",function(){onFileList1Loaded();});')
}
Airdroid = {}, Airdroid.Interface = {}, Airdroid.Module = {}, Airdroid.Widget = {}, Airdroid.Lang = {}, Airdroid.UsedLang = {}, Airdroid.Runtime = {}, Airdroid.Config = {}, Airdroid.DataCenter = {}, Airdroid.Model = {}, Airdroid.UI = {}, Airdroid.Runtime.SwitchDesktop = {
    AtSwitch: !1
}, Airdroid.Runtime.noCacheImg = [], Airdroid.Runtime.placardData = [], Airdroid.Runtime.unreadPlacard = [], Airdroid.PartnerConfig = {}, Airdroid.Runtime.setRemote = !1, Airdroid.Runtime.resourceStartTime = window.options.resourceStartTime, Airdroid.Config = {
    version: window.options.version,
    apiVersion: window.options.apiVersion,
    publishDate: window.options.publishDate,
    versionCode: window.options.versionCode,
    androidVersionCode: window.options.androidVersionCode,
    compatibleVersion: window.options.compatibleVersion,
    product: window.options.product,
    appVer: window.options.appVer,
    baseUri: window.options.baseUri,
    isLiteVersion: window.options.isLiteVersion || !1,
    historyRedirectUrl: window.options.historyRedirectUrl || "",
    serverCenterUrl: window.options.serverCenterUrl || "",
    qrSocketUrl: window.options.qrSocketUrl || "",
    userApiUrl: window.options.userApiUrl,
    payApiUrl: window.options.payApiUrl,
    loadBalanceUrl: window.options.loadBalanceUrl || "",
    chromeOsUrl: window.options.chromeOsUrl || "",
    srvUrl: window.options.srvUrl || "",
    uploadUrl: window.options.uploadUrl || "",
    stateUrl: window.options.stateUrl || "",
    desktopIconFolder: window.options.desktopIconFolder,
    fileList: window.options.fileList,
    isPublish: window.options.isPublish,
    isBeta: window.options.isBeta,
    betaUrl: window.options.betaUrl,
    releaseUrl: window.options.releaseUrl,
    partnerConfigUrl: window.options.partnerConfigUrl,
    webVer: window.options.webVer,
    showGuide: window.options.showGuide,
    lang: window.options.lang,
    xdaUrl: window.options.xdaUrl,
    openUrl: window.options.openUrl,
    openHelper: window.options.openHelper || !1,
    getUploadInfo: window.options.getUploadInfo || !1,
    getUploadInfoMin: window.options.getUploadInfoMin || -1,
    getUploadInfoMax: window.options.getUploadInfoMax || -1,
    goPush: window.options.goPush || !1,
    multiDesktop: window.options.multiDesktop || !1,
    serverErrorLimit: 3,
    imagespath: "theme/stock/images/",
    desktopFolder: "image_folder.png",
    supportSDCard: !0,
    extendSdCardPath: "no",
    nameReg: /[\\:\/\*\?"<>|,&]/,
    fileNameMaxLen: 50,
    uploadRefeshDelay: 1e3,
    photoItemsPerPageNum: 52,
    musicItemsPerPageNum: 50,
    frequentContactSize: 8,
    uploadMaxPerFileSize: 10,
    uploadMaxPerFileSizePremium: 100,
    defaultLatLng: {
        lat: 37.26531,
        lng: -119.534546
    },
    dependApps: {
        audioPlayer: "14",
        uploader: "13",
        browser: "15",
        sms: "1",
        Files: "3",
        videoPlayer: "27",
        videoPlayerH5: "85",
        chat: "20",
        summaryDetail: "24",
        frequentContacts: "53",
        SMSOffsetSetting: "30",
        multiChat: "60",
        loginWidget: "61",
        quixey: "62",
        FindMyPhone: "63",
        userCenter: "64",
        desktopFolder: "65",
        DialPad: "66",
        linkFolder: "67",
        CallRing: "68",
        CallOut: "69",
        CallLog: "8",
        Contact: "7",
        ContactLink: "70",
        DesktopContact: "72",
        DesktopFileList: "73",
        RegisterWidget: "71",
        Language: "76",
        ContactCut: "77",
        Update: "80",
        IncreaseData: "81",
        Premium: "82",
        Present: "86",
        UrlLink: "87",
        UploadCenter: "88",
        Guide: "89",
        Theme: "90"
    },
    desktopIcon: {
        viewGapV: 115,
        viewGapH: 115,
        iconWidth: 115,
        iconHeight: 115,
        marginLeft: 50,
        marginTop: 30
    },
    quickSearch: [{
        name: "Google Play",
        search: "https://play.google.com/store/search?q={0}",
        css: "googleplay"
    }, {
        name: "Quixey",
        search: "https://www.quixey.com/search?q={0}",
        css: "quixey"
    }],
    SystemSettingNames: {
        cameraSaveType: {
            name: "cameraSaveType",
            def: "0"
        },
        screenshotSaveType: {
            name: "screenshotSaveType",
            def: "0"
        },
        SMSSendStyle: {
            name: "SMSSendStyle",
            def: "0"
        },
        locale: {
            name: "locale",
            def: "en"
        },
        smsNotice: {
            name: "smsNotice",
            def: {
                notice: !0,
                led: !0,
                desktop: !1,
                voice: !1,
                icon: !0
            }
        },
        callNotice: {
            name: "callNotice",
            def: {
                notice: !0,
                desktop: !1,
                voice: !1,
                led: !0,
                icon: !0
            }
        },
        externalSdPath: {
            name: "externalSdPath",
            def: {}
        },
        theme: {
            name: "theme",
            def: "default.jpg"
        },
        airTransportUploadPath: {
            name: "airTransportUploadPath",
            def: {}
        },
        recommend: {
            name: "recommend",
            def: {}
        }
    }
}, Airdroid.Config.GoogleMapLang = {
    cs: "cs",
    da: "da",
    de: "de",
    en: "en",
    "es-ES": "es",
    fi: "fi",
    fr: "fr",
    hr: "hr",
    hu: "hu",
    id: "id",
    it: "it",
    ja: "ja",
    ko: "ko",
    pl: "pl",
    "pt-BR": "pt-BR",
    "pt-BT": "pt-BT",
    ro: "ro",
    ru: "ru",
    tr: "tr",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW"
}, Airdroid.Config.serverCenterUrl += Airdroid.Config.apiVersion + "/", Airdroid.Config.userApiUrl += Airdroid.Config.apiVersion + "/",
    function(e, t) {
        "use strict";

        function i() {}

        function n(e, t) {
            if (e) {
                "object" == typeof e && (e = [].slice.call(e));
                for (var i = 0, n = e.length; n > i; i++) t.call(e, e[i], i)
            }
        }

        function o(e, i) {
            var n = Object.prototype.toString.call(i).slice(8, -1);
            return i !== t && null !== i && n === e
        }

        function r(e) {
            return o("Function", e)
        }

        function a(e) {
            return o("Array", e)
        }

        function s(e) {
            var t = e.split("/"),
                i = t[t.length - 1],
                n = i.indexOf("?");
            return -1 !== n ? i.substring(0, n) : i
        }

        function d(e) {
            e = e || i, e._done || (e(), e._done = 1)
        }

        function c(e) {
            var t = {};
            if ("object" == typeof e)
                for (var i in e) e[i] && (t = {
                    name: i,
                    url: e[i]
                });
            else t = {
                name: s(e),
                url: e
            };
            var n = C[t.name];
            return n && n.url === t.url ? n : (C[t.name] = t, t)
        }

        function l(e) {
            e = e || C;
            for (var t in e)
                if (e.hasOwnProperty(t) && e[t].state !== T) return !1;
            return !0
        }

        function u(e) {
            e.state = S, n(e.onpreload, function(e) {
                e.call()
            })
        }

        function p(e) {
            e.state === t && (e.state = D, e.onpreload = [], f({
                url: e.url,
                type: "cache"
            }, function() {
                u(e)
            }))
        }

        function h(e, o) {
            return o = o || i, e.state === T ? (o(), t) : e.state === x ? (k.ready(e.name, o), t) : e.state === D ? (e.onpreload.push(function() {
                h(e, o)
            }), t) : (e.state = x, f(e, function() {
                e.state = T, o(), n(y[e.name], function(e) {
                    d(e)
                }), A && l() && n(y.ALL, function(e) {
                    d(e)
                })
            }), t)
        }

        function f(t, n) {
            function o(t) {
                t = t || e.event, a.onload = a.onreadystatechange = a.onerror = null, n()
            }

            function r(t) {
                t = t || e.event, ("load" === t.type || /loaded|complete/.test(a.readyState) && (!_.documentMode || 9 > _.documentMode)) && (a.onload = a.onreadystatechange = a.onerror = null, n())
            }
            n = n || i;
            var a;
            /\.css[^\.]*$/.test(t.url) ? (a = _.createElement("link"), a.type = "text/" + (t.type || "css"), a.rel = "stylesheet", a.href = t.url) : (a = _.createElement("script"), a.type = "text/" + (t.type || "javascript"), a.src = t.url), a.onload = a.onreadystatechange = r, a.onerror = o, a.async = !1, a.defer = !1;
            var s = _.head || _.getElementsByTagName("head")[0];
            s.insertBefore(a, s.lastChild)
        }

        function g() {
            return _.body ? (A || (A = !0, n(v, function(e) {
                d(e)
            })), t) : (e.clearTimeout(k.readyTimeout), k.readyTimeout = e.setTimeout(g, 50), t)
        }

        function m() {
            _.addEventListener ? (_.removeEventListener("DOMContentLoaded", m, !1), g()) : "complete" === _.readyState && (_.detachEvent("onreadystatechange", m), g())
        }
        var E, A, _ = e.document,
            v = [],
            B = [],
            y = {},
            C = {},
            b = "async" in _.createElement("script") || "MozAppearance" in _.documentElement.style || e.opera,
            w = e.head_conf && e.head_conf.head || "head",
            k = e[w] = e[w] || function() {
                k.ready.apply(null, arguments)
            },
            D = 1,
            S = 2,
            x = 3,
            T = 4;
        if (k.load = b ? function() {
                var e = arguments,
                    t = e[e.length - 1],
                    i = {};
                return r(t) || (t = null), n(e, function(n, o) {
                    n !== t && (n = c(n), i[n.name] = n, h(n, t && o === e.length - 2 ? function() {
                        l(i) && d(t)
                    } : null))
                }), k
            } : function() {
                var e = arguments,
                    t = [].slice.call(e, 1),
                    i = t[0];
                return E ? (i ? (n(t, function(e) {
                    r(e) || p(c(e))
                }), h(c(e[0]), r(i) ? i : function() {
                    k.load.apply(null, t)
                })) : h(c(e[0])), k) : (B.push(function() {
                    k.load.apply(null, e)
                }), k)
            }, k.js = k.load, k.test = function(e, t, n, o) {
                var r = "object" == typeof e ? e : {
                        test: e,
                        success: t ? a(t) ? t : [t] : !1,
                        failure: n ? a(n) ? n : [n] : !1,
                        callback: o || i
                    },
                    s = !!r.test;
                return s && r.success ? (r.success.push(r.callback), k.load.apply(null, r.success)) : !s && r.failure ? (r.failure.push(r.callback), k.load.apply(null, r.failure)) : o(), k
            }, k.ready = function(e, t) {
                if (e === _) return A ? d(t) : v.push(t), k;
                if (r(e) && (t = e, e = "ALL"), "string" != typeof e || !r(t)) return k;
                var i = C[e];
                if (i && i.state === T || "ALL" === e && l() && A) return d(t), k;
                var n = y[e];
                return n ? n.push(t) : n = y[e] = [t], k
            }, k.ready(_, function() {
                l() && n(y.ALL, function(e) {
                    d(e)
                }), k.feature && k.feature("domloaded", !0)
            }), "complete" === _.readyState) g();
        else if (_.addEventListener) _.addEventListener("DOMContentLoaded", m, !1), e.addEventListener("load", g, !1);
        else {
            _.attachEvent("onreadystatechange", m), e.attachEvent("onload", g);
            var F = !1;
            try {
                F = null == e.frameElement && _.documentElement
            } catch (I) {}
            F && F.doScroll && function M() {
                if (!A) {
                    try {
                        F.doScroll("left")
                    } catch (i) {
                        return e.clearTimeout(k.readyTimeout), k.readyTimeout = e.setTimeout(M, 50), t
                    }
                    g()
                }
            }()
        }
        setTimeout(function() {
            E = !0, n(B, function(e) {
                e()
            })
        }, 300)
    }(window), window.onload = function() {
    initAirDroid(), window.airdoidInit = !0
};
