/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/sys/window.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="window" app="' + (null == (__t = appwin_id) ? "" : __t) + '" max="false">\r\n    <div class="window_outer">\r\n        <div class="window_inner">\r\n            <div class="window_bg_container is-hide"></div>\r\n            <div class="window_content">\r\n                <div class="window_titleBar">\r\n                    <div class="window_toolButtonBar is-hide">[ Edit ]</div>\r\n                    <div class="window_titleButtonBar">\r\n                        <a class="window_action_button window_close"></a>\r\n                        <a class="window_action_button window_max"></a>\r\n                        <a class="window_action_button window_min"></a>\r\n                        <a class="window_action_button window_setting is-hide"></a>\r\n                    </div>\r\n                    <div class="window_title titleText">\r\n                        <img class="window_icon is-hide" valign="middle"/>\r\n                        <span class="window_title_text over-ellipsis">Window Name</span>\r\n                        <span class="window_title_des"></span>\r\n                    </div>\r\n                    <div class="window_title_params is-hide">\r\n\r\n                    </div>\r\n                </div>\r\n                <div class="window_bodyOuter">\r\n                    <div class="window_bodyArea">\r\n                        <div class="content_area">\r\n                        \r\n                        </div>\r\n                    </div>\r\n                </div>                \r\n            </div>\r\n            <div class="window_resize_l ui-resizable-handle ui-resizable-w"></div>\r\n            <div class="window_resize_r ui-resizable-handle ui-resizable-e"></div>\r\n            <div class="window_resize_t ui-resizable-handle ui-resizable-n"></div>\r\n            <div class="window_resize_b ui-resizable-handle ui-resizable-s"></div>\r\n            <div class="window_resize_lt ui-resizable-handle ui-resizable-nw"></div>\r\n            <div class="window_resize_lb ui-resizable-handle ui-resizable-sw"></div>\r\n            <div class="window_resize_rt ui-resizable-handle ui-resizable-ne"></div>\r\n            <div class="window_resize_rb ui-resizable-handle ui-resizable-se"></div>\r\n        </div>\r\n    </div>\r\n    <div class="window_switch_mask"></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/widget.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget" id="widget_' + (null == (__t = widget_id) ? "" : __t) + '">\r\n    <div class="widget-tool-bar">\r\n        <div class="widget-btn-bar is-hide">\r\n             <a class="window_action_button window_close"></a>\r\n            <a class="window_action_button window_min"></a>\r\n        </div>\r\n     </div>\r\n    <div class="widget-content"></div>\r\n    <div class="widget_switch_mask" style="display: none; "></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/sys_iframe_params.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<form>\r\n    <div class="clearfix"></div>\r\n    ', _.each(params, function(e) {
        switch (e.field_type) {
            case "text":
                __p += '\r\n                <div class="clearfix params_item" for="' + (null == (__t = encodeURIComponent(e.field_name)) ? "" : __t) + '" key="' + (null == (__t = encodeURIComponent(e.field_key)) ? "" : __t) + '">\r\n                    <label>' + (null == (__t = e.field_name) ? "" : __t) + '</label>\r\n                    <div class="input">\r\n                        <input class="xlarge params_item_input" type="text" value="' + (null == (__t = void 0 == e.field_default ? "" : e.field_default) ? "" : __t) + '">\r\n                    </div>\r\n                </div>\r\n                ';
                break;
            case "select":
                __p += '\r\n                <div class="clearfix params_item" for="' + (null == (__t = encodeURIComponent(e.field_name)) ? "" : __t) + '" key="' + (null == (__t = encodeURIComponent(e.field_key)) ? "" : __t) + '">\r\n                    <label>' + (null == (__t = e.field_name) ? "" : __t) + '</label>\r\n                    <div class="input">\r\n                        <select class="params_item_input">\r\n                            ', _.each(JSON.parse(e.field_value_array), function(t) {
                    __p += e.field_default != t.value ? '\r\n                                <option value="' + (null == (__t = t.value) ? "" : __t) + '">' + (null == (__t = t.text) ? "" : __t) + "</option>\r\n                                " : '\r\n                                <option value="' + (null == (__t = t.value) ? "" : __t) + '" selected="selected">' + (null == (__t = t.text) ? "" : __t) + "</option>\r\n                                "
                }), __p += "\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                ";
                break;
            case "checkbox":
                __p += '\r\n                <div class="clearfix params_item" for="' + (null == (__t = encodeURIComponent(e.field_name)) ? "" : __t) + '" key="' + (null == (__t = encodeURIComponent(e.field_key)) ? "" : __t) + '">\r\n                    <label>' + (null == (__t = e.field_name) ? "" : __t) + '</label>\r\n                    <div class="input">\r\n                        ', __p += 0 == e.field_default ? '\r\n                            <input type="checkbox" class="params_item_input">\r\n                        ' : '\r\n                            <input type="checkbox" class="params_item_input" checked="checked">\r\n                        ', __p += "\r\n                    </div>\r\n                </div>\r\n                "
        }
    }), __p += '\r\n    <div class="clearfix">\r\n        <label> </label>\r\n        <div class="input">\r\n            <div class="btn primary btn_save_params">OK</div>\r\n        </div>\r\n    </div>\r\n</form>';
    return __p
};
this.ajst["views/sys/load_error.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="mod-default i-width100p i-height100p ' + (null == (__t = type) ? "" : __t) + '">\r\n    <table class="i-height100p i-width100p">\r\n        <tr>\r\n            <td>\r\n                <div class="mod-default-con">\r\n                    <div class="mod-default-tip">' + (null == (__t = lang.loadErrorTip) ? "" : __t) + '</div>\r\n                    <img class="mod-default-errorImg" src="' + (null == (__t = errorImg) ? "" : __t) + '" />\r\n                    <div class="mod-default-reload">' + (null == (__t = lang.load_again.format("<a>", "</a>")) ? "" : __t) + "</div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n";
    return __p
};
this.ajst["views/widget/share/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<div class="widget-share">\r\n    <div  class="widget-share-arrow"></div>\r\n    <div class="share-btns">\r\n        ', _.each(data, function(e) {
        _.indexOf(e.type, type) > -1 && (__p += '\r\n            <a class="share-type share-' + (null == (__t = e.name) ? "" : __t) + '" cmd="' + (null == (__t = e.name) ? "" : __t) + '"></a>\r\n        ')
    }), __p += '\r\n    </div>\r\n    <div class="loading-wraper">\r\n        <div class="loading-blue-mask" ></div>\r\n    </div>\r\n</div>';
    return __p
};
this.ajst["views/widget/share/input.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<div class="widget-share-body">\r\n    <div class="loading-wraper">\r\n        <div class="loading-blue-mask" ></div>\r\n    </div>\r\n    <div class="widget-share-innerBody">\r\n        <div class="widget-share-imgCon" >\r\n            <table>\r\n                <tr>\r\n                    <td>\r\n                        <img src="' + (null == (__t = phoneImg) ? "" : __t) + '" alt="sorry,can not work" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class="widget-share-con">\r\n            <div class="widget-share-tip"></div>\r\n            <textarea class="widget-share-content"/>\r\n            <div class="widget-share-count ', limit || (__p += "hide"), __p += '"></div>\r\n        </div>\r\n    </div>\r\n</div>';
    return __p
};

function hex_md5(e) {
    return rstr2hex(rstr_md5(str2rstr_utf8(e)))
}

function hex_hmac_md5(e, t) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(e), str2rstr_utf8(t)))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}

function rstr_md5(e) {
    return binl2rstr(binl_md5(rstr2binl(e), 8 * e.length))
}

function rstr_hmac_md5(e, t) {
    var i = rstr2binl(e);
    i.length > 16 && (i = binl_md5(i, 8 * e.length));
    for (var n = Array(16), o = Array(16), r = 0; 16 > r; r++) n[r] = 909522486 ^ i[r], o[r] = 1549556828 ^ i[r];
    var a = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
    return binl2rstr(binl_md5(o.concat(a), 640))
}

function rstr2hex(e) {
    try {} catch (t) {
        hexcase = 0
    }
    for (var i, n = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", o = "", r = 0; e.length > r; r++) i = e.charCodeAt(r), o += n.charAt(15 & i >>> 4) + n.charAt(15 & i);
    return o
}

function str2rstr_utf8(e) {
    for (var t, i, n = "", o = -1; ++o < e.length;) t = e.charCodeAt(o), i = e.length > o + 1 ? e.charCodeAt(o + 1) : 0, t >= 55296 && 56319 >= t && i >= 56320 && 57343 >= i && (t = 65536 + ((1023 & t) << 10) + (1023 & i), o++), 127 >= t ? n += String.fromCharCode(t) : 2047 >= t ? n += String.fromCharCode(192 | 31 & t >>> 6, 128 | 63 & t) : 65535 >= t ? n += String.fromCharCode(224 | 15 & t >>> 12, 128 | 63 & t >>> 6, 128 | 63 & t) : 2097151 >= t && (n += String.fromCharCode(240 | 7 & t >>> 18, 128 | 63 & t >>> 12, 128 | 63 & t >>> 6, 128 | 63 & t));
    return n
}

function rstr2binl(e) {
    for (var t = Array(e.length >> 2), i = 0; t.length > i; i++) t[i] = 0;
    for (var i = 0; 8 * e.length > i; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
    return t
}

function binl2rstr(e) {
    for (var t = "", i = 0; 32 * e.length > i; i += 8) t += String.fromCharCode(255 & e[i >> 5] >>> i % 32);
    return t
}

function binl_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var i = 1732584193, n = -271733879, o = -1732584194, r = 271733878, a = 0; e.length > a; a += 16) {
        var s = i,
            d = n,
            c = o,
            l = r;
        i = md5_ff(i, n, o, r, e[a + 0], 7, -680876936), r = md5_ff(r, i, n, o, e[a + 1], 12, -389564586), o = md5_ff(o, r, i, n, e[a + 2], 17, 606105819), n = md5_ff(n, o, r, i, e[a + 3], 22, -1044525330), i = md5_ff(i, n, o, r, e[a + 4], 7, -176418897), r = md5_ff(r, i, n, o, e[a + 5], 12, 1200080426), o = md5_ff(o, r, i, n, e[a + 6], 17, -1473231341), n = md5_ff(n, o, r, i, e[a + 7], 22, -45705983), i = md5_ff(i, n, o, r, e[a + 8], 7, 1770035416), r = md5_ff(r, i, n, o, e[a + 9], 12, -1958414417), o = md5_ff(o, r, i, n, e[a + 10], 17, -42063), n = md5_ff(n, o, r, i, e[a + 11], 22, -1990404162), i = md5_ff(i, n, o, r, e[a + 12], 7, 1804603682), r = md5_ff(r, i, n, o, e[a + 13], 12, -40341101), o = md5_ff(o, r, i, n, e[a + 14], 17, -1502002290), n = md5_ff(n, o, r, i, e[a + 15], 22, 1236535329), i = md5_gg(i, n, o, r, e[a + 1], 5, -165796510), r = md5_gg(r, i, n, o, e[a + 6], 9, -1069501632), o = md5_gg(o, r, i, n, e[a + 11], 14, 643717713), n = md5_gg(n, o, r, i, e[a + 0], 20, -373897302), i = md5_gg(i, n, o, r, e[a + 5], 5, -701558691), r = md5_gg(r, i, n, o, e[a + 10], 9, 38016083), o = md5_gg(o, r, i, n, e[a + 15], 14, -660478335), n = md5_gg(n, o, r, i, e[a + 4], 20, -405537848), i = md5_gg(i, n, o, r, e[a + 9], 5, 568446438), r = md5_gg(r, i, n, o, e[a + 14], 9, -1019803690), o = md5_gg(o, r, i, n, e[a + 3], 14, -187363961), n = md5_gg(n, o, r, i, e[a + 8], 20, 1163531501), i = md5_gg(i, n, o, r, e[a + 13], 5, -1444681467), r = md5_gg(r, i, n, o, e[a + 2], 9, -51403784), o = md5_gg(o, r, i, n, e[a + 7], 14, 1735328473), n = md5_gg(n, o, r, i, e[a + 12], 20, -1926607734), i = md5_hh(i, n, o, r, e[a + 5], 4, -378558), r = md5_hh(r, i, n, o, e[a + 8], 11, -2022574463), o = md5_hh(o, r, i, n, e[a + 11], 16, 1839030562), n = md5_hh(n, o, r, i, e[a + 14], 23, -35309556), i = md5_hh(i, n, o, r, e[a + 1], 4, -1530992060), r = md5_hh(r, i, n, o, e[a + 4], 11, 1272893353), o = md5_hh(o, r, i, n, e[a + 7], 16, -155497632), n = md5_hh(n, o, r, i, e[a + 10], 23, -1094730640), i = md5_hh(i, n, o, r, e[a + 13], 4, 681279174), r = md5_hh(r, i, n, o, e[a + 0], 11, -358537222), o = md5_hh(o, r, i, n, e[a + 3], 16, -722521979), n = md5_hh(n, o, r, i, e[a + 6], 23, 76029189), i = md5_hh(i, n, o, r, e[a + 9], 4, -640364487), r = md5_hh(r, i, n, o, e[a + 12], 11, -421815835), o = md5_hh(o, r, i, n, e[a + 15], 16, 530742520), n = md5_hh(n, o, r, i, e[a + 2], 23, -995338651), i = md5_ii(i, n, o, r, e[a + 0], 6, -198630844), r = md5_ii(r, i, n, o, e[a + 7], 10, 1126891415), o = md5_ii(o, r, i, n, e[a + 14], 15, -1416354905), n = md5_ii(n, o, r, i, e[a + 5], 21, -57434055), i = md5_ii(i, n, o, r, e[a + 12], 6, 1700485571), r = md5_ii(r, i, n, o, e[a + 3], 10, -1894986606), o = md5_ii(o, r, i, n, e[a + 10], 15, -1051523), n = md5_ii(n, o, r, i, e[a + 1], 21, -2054922799), i = md5_ii(i, n, o, r, e[a + 8], 6, 1873313359), r = md5_ii(r, i, n, o, e[a + 15], 10, -30611744), o = md5_ii(o, r, i, n, e[a + 6], 15, -1560198380), n = md5_ii(n, o, r, i, e[a + 13], 21, 1309151649), i = md5_ii(i, n, o, r, e[a + 4], 6, -145523070), r = md5_ii(r, i, n, o, e[a + 11], 10, -1120210379), o = md5_ii(o, r, i, n, e[a + 2], 15, 718787259), n = md5_ii(n, o, r, i, e[a + 9], 21, -343485551), i = safe_add(i, s), n = safe_add(n, d), o = safe_add(o, c), r = safe_add(r, l)
    }
    return [i, n, o, r]
}

function md5_cmn(e, t, i, n, o, r) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, r)), o), i)
}

function md5_ff(e, t, i, n, o, r, a) {
    return md5_cmn(t & i | ~t & n, e, t, o, r, a)
}

function md5_gg(e, t, i, n, o, r, a) {
    return md5_cmn(t & n | i & ~n, e, t, o, r, a)
}

function md5_hh(e, t, i, n, o, r, a) {
    return md5_cmn(t ^ i ^ n, e, t, o, r, a)
}

function md5_ii(e, t, i, n, o, r, a) {
    return md5_cmn(i ^ (t | ~n), e, t, o, r, a)
}

function safe_add(e, t) {
    var i = (65535 & e) + (65535 & t),
        n = (e >> 16) + (t >> 16) + (i >> 16);
    return n << 16 | 65535 & i
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}(function(e) {
    "use strict";
    var t, i, n, o, r, a, s = [],
        d = ['<div class="notification-body">', '   <div class="notification-icon"></div>', '   <div class="notification-text">', '       <h4 class="notification-title"></h4>', '       <p class="notification-content"></p>', "   </div>", '   <div class="clearfix"></div>', "</div>", '<div class="notification-split-bar"></div>'].join("");
    t = {
        right: -350,
        opacity: 0
    }, n = {
        right: 24,
        opacity: 1
    }, i = t, o = {
        right: -20,
        opacity: 0,
        height: 0
    }, r = {
        right: 0,
        opacity: 1,
        height: 0
    }, a = {
        right: -40,
        opacity: 0,
        height: 0
    };
    var c = function(e, t) {
        var i, n, o, r, a, c, u, p, h = this;
        if (t = t || {}, o = t.body, i = t.icon, this.replaceId = t.replaceId, r = this.$el = $(d), a = this.$icon = r.find(".notification-icon"), c = this.$text = r.find(".notification-text"), u = this.$title = c.find(".notification-title"), p = this.$content = c.find(".notification-content"), i)
            if (i.className) a.addClass(i.className);
            else {
                n = i.url || i, a.css({
                    backgroundImage: "url(" + n + ")",
                    width: i.width || "",
                    height: i.height || ""
                });
                var f = new Image;
                f.onload = function() {
                    f.width >= 50 && f.height >= 50 ? a.css("background-size", "100% auto") : a.css("background-position", "center")
                }, f.src = n
            } else a.addClass("is-hide"), r.addClass("notification-no-icon");
        e ? u.html(e) : (u.addClass("is-hide"), r.addClass("notification-no-title")), p.html(o), r.click(function() {
            $.isFunction(h.onclick) && h.onclick(), h.close()
        }), r.addClass("is-hide"), l.container().append(r), s.push(this)
    };
    c.prototype.show = function() {
        var e = this,
            t = this.$el;
        if (1 >= s.length) t.removeClass("is-hide"), l.showContainer();
        else {
            for (var i = !1, n = s.length - 1; n >= 0; n--)
                if (i = s[n].replaceId === e.replaceId, i && s[n] !== e) return s[n].replaceWith(e), void 0;
            setTimeout(function() {
                r.height = t.height(), t.css(o), t.removeClass("is-hide"), t.css(r)
            }, 0)
        }
        $.isFunction(this.ondisplay) && this.ondisplay()
    }, c.prototype.replaceWith = function(e) {
        var t = this.$el,
            i = e.$el;
        t.replaceWith(i), r.height = i.height(), i.css(r), i.removeClass("is-hide"), this.remove()
    }, c.prototype.remove = function() {
        var e = s.indexOf(this);
        s.splice(e, 1), this.isRemoved = !0
    }, c.prototype.close = function(e) {
        var t = this,
            i = this.$el;
        1 >= l.all().length ? l.closeAll(e) : i.is(":visible") ? (i.css(a), t.remove(), setTimeout(function() {
            i.remove(), e && e()
        }, 250)) : e && e(), $.isFunction(this.onclose) && this.onclose()
    };
    var l = {};
    l.createNotification = function(e, t, i) {
        return new c(t, {
            icon: e,
            body: i
        })
    }, l.all = function() {
        return s
    }, l.count = function() {
        return s.length
    }, l.container = function() {
        var e, t = $(".notifications");
        return 0 === t.length && (t = $('<div class="notifications"></div>'), t.append('<span class="notification-close">×</span>'), e = t.find(".notification-close"), e.click(function() {
            l.closeAll()
        }), t.addClass("is-hide"), $("body").append(t)), t
    }, l.showContainer = function() {
        var e = l.container();
        e.css(t), e.removeClass("is-hide"), e.css(n)
    }, l.closeAll = function(e) {
        var t = l.container();
        t.css(i), setTimeout(function() {
            t.remove(), s = [], e && e()
        }, 250)
    }, l.css = function() {
        var e = l.container();
        e.css.apply(e, arguments)
    }, e.Airdroid.Notification = c, e.Airdroid.Notifications = l
})(window),
    function(e) {
        function t() {}
        e.fn.airBalloonTip = function(i, n) {
            if ("object" == typeof i) n = i;
            else if ("string" == typeof i) {
                var o = [],
                    r = this.each(function() {
                        var t = e(this).data("_airTip");
                        t && void 0 !== e.fn.airBalloonTip.defaultSettings[i] && (void 0 !== n ? t.settings[i] = n : o.push(t.settings[i]))
                    });
                return 1 === o.length ? o[0] : o.length > 0 ? o : r
            }
            return this.each(function() {
                var i, o = e(this),
                    r = e.extend({}, e.fn.airBalloonTip.defaultSettings, n || {});
                i = o.data("_airTip"), i || (i = new t), i.generate(r, o), i.show(), o.data("_airTip", i)
            })
        }, e.fn.airBalloonTip.defaultSettings = {
            replaceId: "",
            content: "",
            className: "",
            delay: 5e7,
            hideOnOutsideClick: !0,
            onshow: function() {},
            onhide: function() {},
            onclick: function() {}
        }, t.prototype = {
            generate: function(t, i) {
                t = (this.settings = t) || this.settings, i = (this.$target = i) || this.$target;
                var n, o = this.$el,
                    r = e("body");
                t.replaceId && e("#airtip_" + t.replaceId).remove(), n = t.replaceId || Date.now(), o = this.$el = e(['<div id="airtip_' + n + '" class="airtip">', '    <div class="airtip-content"></div>', '    <div class="airtip-arrow"></div>', "</div>"].join("")), t.className && o.addClass(t.className), this.$airtipContent = o.find(".airtip-content").append(t.content), o.hide(), r.append(o), r.click(function(n) {
                    var r = e(n.target);
                    t.hideOnOutsideClick && 0 === r.closest(i).length && 0 === r.closest(o).length && o.is(":visible") && o.fadeOut()
                });
                var a = o.show;
                o.show = function() {
                    a.apply(o, arguments), o.trigger("airtip.show")
                };
                var s = o.hide;
                o.hide = function() {
                    s.apply(o, arguments), o.trigger("airtip.hide")
                };
                var d = o.fadeIn;
                o.fadeIn = function() {
                    d.apply(o, arguments), o.trigger("airtip.show")
                };
                var c = o.fadeOut;
                return o.fadeOut = function() {
                    c.apply(o, arguments), o.trigger("airtip.hide")
                }, o.bind("click", t.onclick), o.bind("airtip.show", function() {
                    t.onshow.apply(this, arguments), e(".airtip").not(o).fadeOut(), setTimeout(function() {
                        o.fadeOut()
                    }, t.delay)
                }), o.bind("airtip.hide", t.onhide), o
            },
            show: function() {
                var e, t, i, n, o, r;
                n = this.$airtipContent, o = this.$target, r = this.$el, e = o.offset(), t = o.outerWidth(), r.css("position", "absolute"), i = r.outerWidth();
                var a = window.innerWidth - e.left - i / 2 - t / 2;
                r.css({
                    right: a,
                    bottom: window.innerHeight - e.top + 13
                }), 0 > a - 24 && n.css({
                    right: Math.abs(a - 24),
                    position: "relative"
                }), r.is(":visible") || this.$el.fadeIn.apply(this, arguments)
            },
            hide: function() {
                this.$el.fadeOut.apply(this, arguments)
            },
            remove: function() {
                var e = this;
                this.hide(), setTimeout(function() {
                    e.$el.remove()
                }, 250)
            }
        }
    }(jQuery),
    function(e, t, i, n) {
        "use strict";
        var o = function() {
                var e, t = i.body || i.documentElement,
                    o = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        MsTransition: "MSTransitionEnd",
                        OTransition: "oTransitionEnd otransitionend"
                    };
                for (e in o)
                    if (t.style[e] !== n) return o[e];
                return !1
            }(),
            r = function(t, i) {
                this.$element = e(t), this.options = i, this.looping = !1;
                var n = this;
                this.$element.attr("tabindex", 0).keydown(function(e) {
                    switch (e.which) {
                        case 37:
                            n.prev();
                            break;
                        case 39:
                            n.next();
                            break;
                        default:
                            return
                    }
                    e.preventDefault()
                }).find(".item").attr("aria-hidden", !0), "hover" === this.options.pause && this.$element.bind("mouseenter", e.proxy(this.pause, this)).bind("mouseleave", e.proxy(this.loop, this)), this.$element.trigger("init")
            };
        r.prototype = {
            loop: function(t) {
                return t || (this.paused = !1), this.interval && (clearInterval(this.interval), this.interval = null), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
            },
            pause: function(e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && o && (this.$element.trigger(o), this.loop()), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                return this.looping ? this : this.go("next")
            },
            prev: function() {
                return this.looping ? this : this.go("prev")
            },
            to: function(t) {
                if (this.looping) return this;
                --t;
                var i = this.$element.find(".item"),
                    n = i.filter(".active"),
                    o = i.index(n);
                return t > i.length - 1 || 0 > t ? this : o == t ? this.pause().loop() : this.go(e(i[t]))
            },
            go: function(t) {
                if (this.looping) return this;
                var i = this.$element.find(".item"),
                    n = this.$element.find('[data-looper="to"]');
                if (!i.length) return this;
                var r = i.filter(".active"),
                    a = i.index(r),
                    s = "string" == typeof t ? r[t]() : t,
                    d = i.index(s),
                    c = this.interval,
                    l = "string" == typeof t ? t : -1 == a && -1 == d || d > a ? "next" : "prev",
                    u = "next" == l ? "first" : "last",
                    p = this,
                    h = function(t, n, o) {
                        if (this.looping) {
                            this.looping = !1, t.removeClass("active go " + o).attr("aria-hidden", !0), n.removeClass("go " + o).addClass("active").removeAttr("aria-hidden");
                            var r = e.Event("shown", {
                                relatedTarget: n[0],
                                relatedIndex: i.index(n)
                            });
                            this.$element.trigger(r)
                        }
                    };
                if (s = s && s.length ? s : i[u](), s.hasClass("active")) return this;
                var f = e.Event("show", {
                    relatedTarget: s[0],
                    relatedIndex: i.index(s[0])
                });
                if (this.$element.trigger(f), f.isDefaultPrevented()) return this;
                if (this.looping = !0, c && this.pause(), n.length && n[s.index()] && (e(n[r.index()]).removeClass("cur"), e(n[s.index()]).addClass("cur")), this.$element.hasClass("slide") || this.$element.hasClass("xfade"))
                    if (o) s.addClass(l), r.addClass("go " + l), s[0].offsetWidth, s.addClass("go"), this.$element.one(o, function() {
                        r.length && h.call(p, r, s, l)
                    }), setTimeout(function() {
                        h.call(p, r, s, l)
                    }, this.options.speed);
                    else {
                        var E, g, m = {},
                            A = {};
                        E = r.attr("style"), g = s.attr("style"), this.$element.hasClass("xfade") && (m.opacity = 0, A.opacity = 1, s.css("opacity", 0)), this.$element.hasClass("slide") && (this.$element.hasClass("up") ? (m.top = "next" == l ? "-100%" : "100%", A.top = 0) : this.$element.hasClass("down") ? (m.top = "next" == l ? "100%" : "-100%", A.top = 0) : this.$element.hasClass("right") ? (m.left = "next" == l ? "100%" : "-100%", A.left = 0) : (m.left = "next" == l ? "-100%" : "100%", A.left = 0)), s.addClass(l), r.animate(m, this.options.speed), s.animate(A, this.options.speed, function() {
                            h.call(p, r, s, l), r.attr("style", E || ""), s.attr("style", g || "")
                        })
                    } else h.call(p, r, s, l);
                return (c || !c && this.options.interval) && (!t || "string" == typeof t && t !== this.options.pause || t.length && "to" !== this.options.pause) && this.loop(), this
            }
        }, e.fn.looper = function(t) {
            var i = arguments;
            return this.each(function() {
                var n = e(this),
                    o = n.data("looperjs"),
                    a = e.extend({}, e.fn.looper.defaults, e.isPlainObject(t) ? t : {}),
                    s = "string" == typeof t ? t : t.looper,
                    d = t.args || i.length > 1 && Array.prototype.slice.call(i, 1);
                o || n.data("looperjs", o = new r(this, a)), "number" == typeof t ? o.to(t) : s ? d ? o[s].apply(o, d.length ? d : ("" + d).split(",")) : o[s]() : a.interval ? o.loop() : o.go()
            })
        }, e.fn.looper.defaults = {
            interval: 5e3,
            pause: "hover",
            speed: 500
        }, e.fn.looper.Constructor = r, e(function() {
            e("body").delegate("[data-looper]", "click.looper", function(t) {
                var i = e(this);
                if ("go" != i.data("looper")) {
                    var n, o = e(i.data("target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                        r = e.extend({}, o.data(), i.data());
                    o.looper(r), t.preventDefault()
                }
            }), e('[data-looper="go"]').each(function() {
                var t = e(this);
                t.looper(t.data())
            })
        })
    }(jQuery, window, document),
    function(e, t) {
        function i(e) {
            return [].slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var i in t) void 0 === e[i] && (e[i] = t[i])
            }), e
        }
        var n, o = {
                fps: 2,
                prefix: "",
                text: ""
            },
            r = "",
            a = {
                show: function(e) {
                    var t, a, s, d;
                    r && this.clear(), r = document.title, e = "string" == typeof e ? {
                        text: e
                    } : e || {}, e = i(e, o), s = e.text, d = e.prefix, t = s.split("").map(function(e, t) {
                        return d + s.slice(t)
                    }), a = 0, n = setInterval(function() {
                        a > t.length - 1 && (a = 0), document.title = t[a++]
                    }, 1e3 / e.fps)
                },
                clear: function() {
                    clearInterval(n), r && (document.title = r)
                }
            };
        t.ActionTitle = a, e && (e.ActionTitle = a)
    }($, window),
    function(e, t) {
        var i = {
            docHead: document.getElementsByTagName("head")[0],
            setUrl: function(e) {
                this._addLink(e, "icon"), this._addLink(e, "shortcut icon")
            },
            _addLink: function(e, t) {
                var i = document.createElement("link");
                return i.type = "image/png", i.rel = t, i.href = e, this._removeLinkIfExists(t), this.docHead.appendChild(i), i
            },
            _removeLinkIfExists: function(e) {
                for (var t = this.docHead.getElementsByTagName("link"), i = 0; t.length > i; i++) {
                    var n = t[i];
                    if (n.rel == e) return this.docHead.removeChild(n), void 0
                }
            },
            init: function(e) {
                this.originalIcon ? e.call(this) : (this.workCanvas = document.createElement("canvas"), this.workCanvas.width = 16, this.workCanvas.height = 16, this.ctx = this.workCanvas.getContext("2d"), this.readBackLink(e))
            },
            readBackLink: function(e) {
                var t = document.createElement("canvas");
                t.width = 16, t.height = 16;
                var i = document.querySelector('link[type="image/x-icon"]');
                if (this.originalIcon = t, i) {
                    var n = new Image;
                    n.crossOrigin = "*";
                    var o = this;
                    n.onload = function() {
                        t.getContext("2d").drawImage(this, 0, 0, 16, 16), e.call(o)
                    }, n.src = i.href
                } else e.call(this)
            },
            updateIcon: function() {
                var e = this.workCanvas.toDataURL();
                this.setUrl(e)
            },
            addMarker: function() {
                this.init(function() {
                    this.ctx.clearRect(0, 0, 16, 16), this.ctx.drawImage(this.originalIcon, 0, 0), this.ctx.fillStyle = "red", this.ctx.beginPath(), this.ctx.arc(12, 4, 2.6, -Math.PI, Math.PI, !1), this.ctx.fill(), this.updateIcon()
                })
            },
            clear: function() {
                this.init(function() {
                    this.ctx.clearRect(0, 0, 16, 16), this.ctx.drawImage(this.originalIcon, 0, 0), this.updateIcon()
                })
            }
        };
        t.Favicon = i, e && (e.Favicon = i)
    }($, window), Airdroid.AppWindow = Core.extend(Airdroid.Base, {
    _uniqueId: null,
    _app: null,
    _checkExist: null,
    _wDom: null,
    _wContentDom: null,
    _appWinId: null,
    _appConfig: null,
    _isIframeApp: !1,
    _exitNeedConfirm: !1,
    _exitConfirmText: null,
    _initData: null,
    _data: null,
    _winType: null,
    _isCreated: !1,
    _desktop: null,
    _taskItem: null,
    _notifyIconItem: null,
    _minAble: !1,
    _maxAble: !1,
    _title: null,
    InitPosition: {
        top_left: "top_left",
        top_center: "top_center",
        top_right: "top_right",
        right_center: "right_center",
        bottom_right: "bottom_right",
        bottom_center: "bottom_center",
        left_bottom: "left_bottom",
        left_center: "left_center",
        center: "center",
        RelativeTopRight: "RelativeTopRight"
    },
    _construct: function() {
        this._exitConfirmText = this.util.getLang("Common", "Message_ExitConfirm")
    },
    checkExist: function(e) {
        return _.isFunction(this._checkExist) ? this._checkExist.apply(this._app, [this._uniqueId, e]) : this._uniqueId == e
    },
    initOpts: function() {
        var e = this;
        1 == e._appConfig.widget && (e._widgetDragOpts = {
            zIndex: 1e4,
            distance: 3,
            scroll: !1,
            start: function(t, i) {
                Airdroid.Runtime.SwitchDesktop.AtSwitch && (this.oridom = $(this).closest(".layout-desktop-container"), this.oripos = {
                    x1: $(this).offset().left,
                    y1: $(this).offset().top
                }, $(this).appendTo(".layout-desktops-container"), $(this).css("transform", "scale(0.36)")), e.util.clearContextMenu(), i.helper.addClass("noclick"), e._isIframeApp && e._wDom.find(".widget_switch_mask").show()
            },
            stop: function(t, i) {
                var n = this,
                    o = i.helper,
                    r = 0,
                    a = 0;
                if ($.browser.mozilla && 12 > parseInt($.browser.version.substr(0, 2)) ? (r = o.offset().left + .64 * o.width() / 2, a = o.offset().top + .64 * o.height() / 2) : (r = o.offset().left, a = o.offset().top), !_.isUndefined(e._appConfig)) {
                    if (e._appConfig.opts.xPos = r, e._appConfig.opts.yPos = a, Airdroid.Runtime.SwitchDesktop.AtSwitch) {
                        var s = t.clientX,
                            d = t.clientY,
                            c = !1,
                            l = function(e, t, i) {
                                var o = Math.abs(s - t.x1 - (s - r)) / .36,
                                    c = Math.abs(d - t.y1 - (d - a)) / .36;
                                i && ($.browser.mozilla && 12 > parseInt($.browser.version.substr(0, 2)) ? (o = Math.abs(n.oridom.offset().left + .64 * (n.oridom.width() / 2) - t.x1) / .36, c = Math.abs(n.oridom.offset().top + .64 * (n.oridom.height() / 2) - t.y1) / .36) : (o = Math.abs(n.oridom.offset().left - t.x1) / .36, c = Math.abs(n.oridom.offset().top - t.y1) / .36)), e.css({
                                    left: o + "px",
                                    top: c + "px"
                                })
                            };
                        _.each(Airdroid.Runtime.SwitchDesktop.Desktops, function(t) {
                            if (s >= t.x1 && t.x2 >= s && d >= t.y1 && t.y2 >= d) {
                                l($(n), t), $(n).appendTo(t.dom);
                                var i = t.dom.attr("index").replace("desktop_", "");
                                e._desktop = Airdroid.DesktopManage.getDesktop(i), c = !0
                            }
                        }), c || (l($(n), n.oripos, !0), $(n).appendTo(n.oridom)), $(n).css("transform", "")
                    } else {
                        var u = i.helper,
                            p = e._desktop._desktopDom,
                            h = u.position().top,
                            f = u.position().left,
                            E = p.width(),
                            g = p.height(),
                            m = u.width(); - 65 > h ? h = -65 : h > g - 30 && (h = g - 30), 30 - m > f ? f = 30 - m : f > E - 30 && (f = E - 30), u.css({
                            top: h + "px",
                            left: f + "px"
                        })
                    }
                    e._isIframeApp && !Airdroid.Runtime.SwitchDesktop.AtSwitch && e._wDom.find(".widget_switch_mask").hide(), e._desktop = Airdroid.DesktopManage._desktops[$(this).closest(".layout-desktop-container").attr("index")], e._wDom.css("z-index", e._desktop.getTopperZIndex())
                }
            },
            helper: function() {
                return $(this)
            }
        })
    },
    createView: function() {
        null == this._appConfig || this._isCreated || (("IframeApp" == this._appConfig.className || "IframeWidget" == this._appConfig.className) && (this._isIframeApp = !0), this.initOpts(), 1 == this._appConfig.window ? (this._title = this.util.getLang("Modules", this._appConfig.nameLngKey || this._appConfig.appName), (_.isUndefined(this._title) || "" == this._title) && (this._title = this._appConfig.appName), this.createWindow(), this.onResize(this._wContentDom.width(), this._wContentDom.height()), this._wContentDom.html('<div class="app-load app-loading-mask"></div>')) : 1 == this._appConfig.widget && (this._title = this.util.getLang("Modules", this._appConfig.nameLngKey || this._appConfig.appName), (_.isUndefined(this._title) || "" == this._title) && (this._title = this._appConfig.appName), this.createWidget(), this.onResize(this._wContentDom.width(), this._wContentDom.height()), _.isObject(this._appConfig.opts) && "1" == this._appConfig.opts.noMask || this._wContentDom.html('<div class="app-load widget-loading  loading-blue-mask"></div>')), this._wDom.find(".window_setting").hide(), this.show(), this._isCreated = !0)
    },
    proxyFunc_DragStart: function() {},
    proxyFunc_AfterDataChanged: function() {},
    createWindow: function() {
        var e = this,
            t = 0 != e._appConfig.opts.closeAble,
            i = 0 != e._appConfig.opts.maxAble,
            n = 0 != e._appConfig.opts.minAble,
            o = 1 == e._appConfig.opts.hideMin,
            r = 0 != e._appConfig.opts.resizeAble,
            a = 0 != e._appConfig.opts.dragAble;
        e._minAble = n, e._maxAble = i, e._wDom = $(this.util.getTemplate("sys", "window", {
            appwin_id: e._appWinId
        })).click(function(t, i) {
            return $(this).css("z-index", e._desktop.getTopperZIndex()), Airdroid.TaskbarManage.highlightTask(e), e.show(), e._app && _.isFunction(e._app.onWindowClick) && e._app.onWindowClick(), 1 == (i || !1) ? !1 : void 0
        }).bind("contextmenu", function(t) {
            e.util.clearContextMenu(), e.util.cancelEventBubble(t)
        }), e.util.smallWindow, Airdroid.Util.OS.ChromeOs || e._wDom.addClass("hardwareSpeed"), _.isString(e._title) && e._wDom.find(".window_title_text").html(e._title.escapeHTML()), _.isString(this._appConfig.icon) && (e._wDom.find(".window_icon").attr("src", e._appConfig.icon), e._wDom.find(".window_icon").removeClass("is-hide")), n ? $(".window_min", e._wDom).click(function(t) {
            e.util.cancelEventBubble(t), e.minimize()
        }) : $(".window_min", e._wDom).remove(), o && $(".window_min", e._wDom).remove(), t ? $(".window_close", e._wDom).click(function(t) {
            e.util.cancelEventBubble(t);
            var i = function() {
                e._isIframeApp && e._chan ? e._chan.call({
                    method: "window.close",
                    params: {},
                    timeout: 50,
                    success: function() {
                        return e.destroy(), !0
                    },
                    error: function() {
                        return e.destroy(), !1
                    }
                }) : e.destroy()
            };
            e._exitNeedConfirm ? e.util.confirm(e._exitConfirmText, function() {
                i()
            }) : i()
        }) : $(".window_close", e._wDom).remove();
        var s = Airdroid.DesktopManage._currentDesktop._desktopDom.width(),
            d = Airdroid.DesktopManage._currentDesktop._desktopDom.height();
        if (r) {
            var c = _.isUndefined(e._appConfig.opts.minWidth) ? 200 : e._appConfig.opts.minWidth;
            c = c > s ? s : c;
            var l = _.isUndefined(e._appConfig.opts.minHeight) ? 300 : e._appConfig.opts.minHeight;
            l = l > d ? d : l, e._wDom.attr("mw", c).attr("mh", l);
            var u = function(t) {
                    var i = t.helper.offset(),
                        n = t.helper.width(),
                        o = t.helper.height(),
                        r = i.top;
                    e._wDom.css({
                        top: r - 40,
                        left: i.left,
                        width: n,
                        height: o
                    }), $(".window_bodyOuter", e._wDom).css("height", o - 50), e.onResize(n - 22, o - 50)
                },
                p = _.throttle(u, 10);
            e._wDom.resizable({
                helper: "ui-resize-helper",
                minWidth: c,
                minHeight: l - 40,
                handles: {
                    n: $(".window_resize_t", e._wDom),
                    e: $(".window_resize_l", e._wDom),
                    s: $(".window_resize_b", e._wDom),
                    w: $(".window_resize_r", e._wDom),
                    se: $(".window_resize_rb", e._wDom),
                    sw: $(".window_resize_lb", e._wDom),
                    ne: $(".window_resize_rt", e._wDom),
                    nw: $(".window_resize_lt", e._wDom)
                },
                start: function() {
                    e._isIframeApp && e._wContentDom.find("iframe").hide()
                },
                resize: function(e, t) {
                    p(t)
                },
                stop: function(t, i) {
                    e._isIframeApp && e._wContentDom.find("iframe").show(), u(i);
                    var n = i.helper,
                        o = e._desktop._desktopDom,
                        r = n.position().top,
                        a = n.position().left,
                        s = o.width(),
                        d = o.height(),
                        c = n.width(); - 50 > r ? r = -50 : r > d - 30 && (r = d - 30), 30 - c > a ? a = 30 - c : a > s - 30 && (a = s - 30), n.css({
                        top: r + "px",
                        left: a + "px"
                    })
                }
            })
        } else e._wDom.find(".ui-resizable-handle").remove();
        i ? ($(".window_max", e._wDom).click(function() {
            e.maxWindow()
        }), $(".window_title", e._wDom).bind("dblclick", function() {
            $(".window_max", e._wDom).trigger("click")
        })) : $(".window_max", e._wDom).remove(), a ? e._wDom.draggable({
            handle: ".window_title",
            zIndex: 1e6,
            start: function() {
                if (e.util.clearContextMenu(), e.proxyFunc_DragStart(), "true" == $(this).attr("max") && !Airdroid.Runtime.SwitchDesktop.AtSwitch) return !1;
                if ("true" == $(this).attr("max") && Airdroid.Runtime.SwitchDesktop.AtSwitch) {
                    var t = e._wDom.attr("oWidth"),
                        i = e._wDom.attr("oHeight");
                    e._wDom.attr("oLeft"), e._wDom.attr("oTop"), e._wDom.attr("max", "false").css({
                        width: t + "px",
                        height: i + "px"
                    }).find(".ui-resizable-handle").show(), e._wDom.find(".window_titleBar").removeClass("max"), $(".window_bodyOuter", e._wDom).css("height", i - 50 + "px"), e._wDom.find(".window_max").removeClass("window_restore"), this.oWidth = t, this.oHeight = i, this.needResizeEvent = !0
                }
                Airdroid.Runtime.SwitchDesktop.AtSwitch && (this.oridom = $(this).closest(".layout-desktop-container"), this.oripos = {
                    x1: $(this).offset().left,
                    y1: $(this).offset().top
                }, $(this).appendTo(".layout-desktops-container"), $(this).css("transform", "scale(0.36)")), e._isIframeApp && e._wContentDom.find(".iframe-move-mask").css("z-index", "10")
            },
            stop: function(t, i) {
                var n = this;
                e._isIframeApp && e._wContentDom.find(".iframe-move-mask").css("z-index", "1");
                var o = i.helper,
                    r = 0,
                    a = 0;
                if ($.browser.mozilla && 12 > parseInt($.browser.version.substr(0, 2)) ? (r = o.offset().left + .64 * o.width() / 2, a = o.offset().top + .64 * o.height() / 2) : (r = o.offset().left, a = o.offset().top), Airdroid.Runtime.SwitchDesktop.AtSwitch) {
                    var s = t.clientX,
                        d = t.clientY,
                        c = !1,
                        l = function(e, t, i) {
                            var o = Math.abs(s - t.x1 - (s - r)) / .36,
                                c = Math.abs(d - t.y1 - (d - a)) / .36;
                            i && ($.browser.mozilla && 12 > parseInt($.browser.version.substr(0, 2)) ? (o = Math.abs(n.oridom.offset().left + .64 * (n.oridom.width() / 2) - t.x1) / .36, c = Math.abs(n.oridom.offset().top + .64 * (n.oridom.height() / 2) - t.y1) / .36) : (o = Math.abs(n.oridom.offset().left - t.x1) / .36, c = Math.abs(n.oridom.offset().top - t.y1) / .36)), e.css({
                                left: o + "px",
                                top: c + "px"
                            })
                        };
                    _.each(Airdroid.Runtime.SwitchDesktop.Desktops, function(t) {
                        if (s >= t.x1 && t.x2 >= s && d >= t.y1 && t.y2 >= d) {
                            l($(n), t), $(n).appendTo(t.dom);
                            var i = t.dom.attr("index").replace("desktop_", "");
                            e._desktop = Airdroid.DesktopManage.getDesktop(i), c = !0
                        }
                    }), c || (l($(n), n.oripos, !0), $(n).appendTo(n.oridom)), $(n).css("transform", "")
                } else {
                    var u = i.helper,
                        p = e._desktop._desktopDom,
                        h = u.position().top,
                        f = u.position().left,
                        E = p.width(),
                        g = p.height(),
                        m = u.width(); - 50 > h ? h = -50 : h > g - 30 && (h = g - 30), 30 - m > f ? f = 30 - m : f > E - 30 && (f = E - 30), u.css({
                        top: h + "px",
                        left: f + "px"
                    })
                }
                this.needResizeEvent && e.onResize(this.oWidth - 22, this.oHeight - 50), e._desktop = Airdroid.DesktopManage._desktops[$(this).closest(".layout-desktop-container").attr("index")], e._wDom.css("z-index", e._desktop.getTopperZIndex())
            }
        }) : e._wDom.find(".window_titleBar").css("cursor", "default");
        var h = e._appConfig.opts.width,
            f = e._appConfig.opts.height;
        h > s && (h = _.isUndefined(e._appConfig.opts.minWidth) ? s : e._appConfig.opts.minWidth), f > d && (f = d), e._wDom.css({
            position: "absolute",
            width: h + "px",
            height: f + "px"
        }).find(".window_bodyOuter").css("height", f - 50 + "px"), e._wDom.hide().appendTo(e._desktop._desktopDom), e._wDom.transformable(), e._wContentDom = e._wDom.find(".content_area"), e._taskItem = Airdroid.TaskbarManage.createTaskItem({
            task_title: e._title,
            task_icon: e._appConfig.icon,
            task_name: e._title
        }), e._taskItem.click(function() {
            return Airdroid.DesktopManage._isAtSwitch ? !1 : ($(this).hasClass("active") ? e._wDom.find(".window_min").trigger("click") : (e.show(), Airdroid.DesktopManage.setCurrentDesktop(e._desktop), e.onResize(e._wContentDom.width(), e._wContentDom.height())), void 0)
        }), Airdroid.TaskbarManage.addTask(e), e.setInitPosition()
    },
    createWidget: function() {
        var e = this,
            t = 0 == e._appConfig.opts.closeAble ? !1 : !0,
            i = 0 == e._appConfig.opts.minAble ? !1 : !0,
            n = 1 != e._appConfig.opts.hideMin ? !1 : !0,
            o = 0 == e._appConfig.opts.dragAble ? !1 : !0;
        e._wDom = $(this.util.getTemplate("sys", "widget", {
            widget_id: e._appWinId
        })).hover(function() {
            e._wDom.find(".widget-btn-bar").show()
        }, function() {
            e._wDom.find(".widget-btn-bar").hide()
        }).click(function() {
            $(this).css("z-index", e._desktop.getTopperZIndex()), e._app && _.isFunction(e._app.onWindowClick) && e._app.onWindowClick()
        }).bind("contextmenu", function(t) {
            e.util.clearContextMenu(), e.util.cancelEventBubble(t)
        }), Airdroid.Util.OS.ChromeOs || e._wDom.addClass("hardwareSpeed"), t ? e._wDom.find(".window_close").click(function() {
            e._isIframeApp && e._chan ? e._chan.call({
                method: "widget.close",
                params: {},
                timeout: 50,
                success: function() {
                    return e.destroy(), !0
                },
                error: function() {
                    return e.destroy(), !1
                }
            }) : e.destroy()
        }) : e._wDom.find(".window_close").remove(), i ? (e._wDom.find(".window_min").click(function(t) {
            e.util.cancelEventBubble(t), e.minimize()
        }), 1 == e._appConfig.opts.isNotify ? e._notifyIconItem = Airdroid.TaskbarManage.createNotifyIconItem({
            className: "app-notify-icon",
            title: e._title,
            iconUrl: e._appConfig.icon
        }) : (e._taskItem = Airdroid.TaskbarManage.createTaskItem({
            task_title: e._title,
            task_icon: Airdroid.Service.getImgAssets("desktopicon" + e._appConfig.icon),
            task_name: e._title
        }), e._taskItem.click(function() {
            return Airdroid.DesktopManage._isAtSwitch ? !1 : (e.show(), Airdroid.DesktopManage.setCurrentDesktop(e._desktop), e.onResize(e._wContentDom.width(), e._wContentDom.height()), void 0)
        }))) : e._wDom.find(".window_min").remove(), n && $(".window_min", e._wDom).remove(), o ? e._wDom.draggable(e._widgetDragOpts) : e._wDom.css("cursor", "default"), e._wDom.css({
            width: e._appConfig.opts.width + "px",
            height: parseInt(e._appConfig.opts.height) + 25 + "px",
            "z-index": e._desktop.getTopperZIndex()
        }).appendTo(e._desktop._desktopDom), e._wDom.transformable(), e._wDom.hide(), e._wContentDom = e._wDom.find(".widget-content"), e.setInitPosition(), e._wContentDom.css({
            width: this._appConfig.opts.width + "px",
            height: this._appConfig.opts.height + "px"
        })
    },
    updateTitle: function(e) {
        var t = this;
        _.isString(e) || (e = t._title), t._wDom.find(".window_title_text").html(e.escapeHTML()), t._taskItem.attr("title", e).find("span").text(e)
    },
    show: function() {
        this._wDom.css("z-index", this._desktop.getTopperZIndex()).show(), null != this._taskItem && 1 == this._appConfig.window && Airdroid.TaskbarManage.highlightTask(this), null != this._notifyIconItem && this._notifyIconItem.remove(), this._app && _.isFunction(this._app.onShow) && this._app.onShow()
    },
    bringToFront: function(e) {
        (e || parseInt(this._wDom.css("z-index")) < this._desktop._zIndex) && this._wDom.trigger("click")
    },
    setData: function(e) {
        e && this._data != e && (null == this._uniqueId && (this._uniqueId = e.uniqueId), null == this._checkExist && (this._checkExist = e.checkExist), e.uniqueId = this._uniqueId, e.checkExist = this._checkExist, this._data = e, this._app && _.isFunction(this._app.onDataChange) && this._app.onDataChange({
            data: e
        }))
    },
    setCloseConfirm: function(e) {
        _.isEmpty(e) || (this._exitConfirmText = e), this._exitNeedConfirm = !0
    },
    removeCloseConfirm: function() {
        this._exitNeedConfirm = !1
    },
    hide: function() {
        this._wDom.hide(), this._app && _.isFunction(this._app.onHide) && this._app.onHide()
    },
    triggerDesktopSwitchEvent: function() {
        this._app && _.isFunction(this._app.onDesktopSwitch) && this._app.onDesktopSwitch()
    },
    setInitPosition: function() {
        if (_.isString(this._appConfig.position.pos) && $.trim(this._appConfig.position.pos).length > 0) {
            var e = this._desktop._desktopDom.width(),
                t = this._desktop._desktopDom.height(),
                i = this._wDom.width(),
                n = this._wDom.height(),
                o = this._appConfig.position.pos;
            1 == this._appConfig.window && (i > e && (i = Math.max(e, parseInt(this._appConfig.opts.minWidth))), n > t && (n = Math.max(n, parseInt(this._appConfig.opts.minHeight))));
            var r = (e - i) / 2,
                a = (t - n) / 2;
            switch (0 > r && (r = ($("body").width() - i) / 2, 0 > r && (r = 0)), 0 > a && (a = ($("body").height() - n) / 2, 0 > a && (a = 0)), o) {
                case this.InitPosition.top_left:
                    this._wDom.css({
                        left: "0px",
                        top: "0px"
                    });
                    break;
                case this.InitPosition.top_center:
                    this._wDom.css({
                        left: r + "px",
                        top: "0px"
                    });
                    break;
                case this.InitPosition.top_right:
                    this._wDom.css("right", "0px").css("top", "0px");
                    break;
                case this.InitPosition.right_center:
                    this._wDom.css("right", "0px").css("top", a + "px");
                    break;
                case this.InitPosition.bottom_right:
                    this._wDom.css("right", "0px").css("bottom", "0px");
                    break;
                case this.InitPosition.bottom_center:
                    this._wDom.css("left", r + "px").css("bottom", "0px");
                    break;
                case this.InitPosition.left_bottom:
                    this._wDom.css("left", "0px").css("bottom", "0px");
                    break;
                case this.InitPosition.left_center:
                    this._wDom.css("left", "0px").css("top", a + "px");
                    break;
                default:
                    this._wDom.css("left", r + "px").css("top", a + "px")
            }
            this._wDom.show()
        }
        if (1 == this._appConfig.widget) {
            var s = this._appConfig.position.xPos || "",
                d = this._appConfig.position.yPos || "";
            "" !== s && (-1 != s.indexOf("R") ? this._wDom.css("right", s.replace(/R/g, "") + "px") : this._wDom.css("left", s + "px")), "" !== d && (-1 != d.indexOf("B") ? this._wDom.css("bottom", d.replace(/B/g, "") + "px") : this._wDom.css("top", d + "px"))
        } else if (1 == this._appConfig.window && !_.isUndefined(this._appConfig.position.xPos) && !_.isUndefined(this._appConfig.position.yPos)) return this._wDom.css({
            left: this._appConfig.position.xPos + "px",
            top: this._appConfig.position.yPos + "px"
        }), void 0
    },
    bringToCurrentDesktop: function() {
        this._desktop = Airdroid.DesktopManage._currentDesktop, this._desktop._desktopDom.append(this._wDom), this._wDom.find(".window_switch_mask").hide()
    },
    setCenter: function() {
        var e = this._desktop._desktopDom.width(),
            t = this._desktop._desktopDom.height(),
            i = this._wDom.width(),
            n = this._wDom.height(),
            o = (e - i) / 2,
            r = (t - n) / 2;
        0 > o && (o = 0), 0 > r && (r = 0), this._wDom.css("left", o + "px").css("top", r + "px")
    },
    destroy: function() {
        var e = this;
        if (e._app)
            if (_.isFunction(e._app.beforeClose)) {
                var t = e._app.beforeClose();
                t && (e.doDestroy(), e._app.onClose())
            } else e.doDestroy(), e._app.onClose();
        else e.doDestroy(), e._initData && _.isFunction(e._initData.destroyCb) && (e._initData.destroyCb(), e._initData = null)
    },
    doDestroy: function() {
        var e = this;
        e._wDom.remove(), e._desktop._windowManage.removeAppWin(e._winType, e), Airdroid.TaskbarManage.deleteTask(e), e._desktop.setTopVisiableAppTaskItemHightlight()
    },
    minimize: function() {
        var e = this;
        if (this.hide(), 1 == this._appConfig.widget) null != this._taskItem ? (this._isIframeApp && this._chan && this._taskItem.one("click", function() {
            e._chan.call({
                method: "window.restore",
                params: {},
                success: function() {
                    return !0
                },
                error: function() {
                    return !1
                }
            })
        }), Airdroid.TaskbarManage.addTask(this)) : null != this._notifyIconItem && (this._isIframeApp && this._chan && this._notifyIconItem.one("click", function() {
            e._chan.call({
                method: "window.restore",
                params: {},
                success: function() {
                    return !0
                },
                error: function() {
                    return !1
                }
            })
        }), e._notifyIconItem.click(function() {
            e._desktop.restoreDesktop(), e.show(), e._notifyIconItem.remove(), Airdroid.DesktopManage.setCurrentDesktop(e._desktop)
        }), Airdroid.TaskbarManage.addNotifyIcon(e._notifyIconItem), $(window).trigger("resize"));
        else if (1 == this._appConfig.window) {
            if (this._isIframeApp && this._chan) this._taskItem.one("click", function() {
                e._chan.call({
                    method: "window.restore",
                    params: {},
                    success: function() {
                        return !0
                    },
                    error: function() {
                        return !1
                    }
                })
            });
            else {
                var t = this._appConfig.className,
                    i = $(".layout-desktop-container .desktopicon[m='" + t + "']"),
                    n = function() {
                        e.onResize(e._wContentDom.width(), e._wContentDom.height()), $.isFunction(e._app.onRestore) && e._app.onRestore(), e._taskItem.unbind("click", n), i.unbind("click", n)
                    };
                this._taskItem.bind("click", n), i.bind("click", n)
            }
            this._desktop.setTopVisiableAppTaskItemHightlight()
        }
        this._isIframeApp && this._chan && this._chan.call({
            method: "window.min",
            params: {},
            success: function() {
                return !0
            },
            error: function() {
                return !1
            }
        }), $.isFunction(this._app.onMinimize) && this._app.onMinimize()
    },
    maxWindow: function() {
        var e = this,
            t = "" + e._wDom.attr("max");
        if ("false" == t) {
            e._wDom.attr("oWidth", e._wDom.width()), e._wDom.attr("oHeight", e._wDom.height()), e._wDom.attr("oLeft", e._wDom.position().left), e._wDom.attr("oTop", e._wDom.position().top), e._wDom.find(".window_titleBar").addClass("max");
            var i = e._desktop._desktopDom.width(),
                n = e._desktop._desktopDom.height();
            e._wDom.attr("mw") > i && (i = parseInt(e._wDom.attr("mw"))), e._wDom.attr("mh") > n && (n = parseInt(e._wDom.attr("mh"))), e._wDom.attr("max", "true").css({
                left: "0px",
                top: "0px",
                width: i + "px",
                height: n + "px"
            }).find(".ui-resizable-handle").hide(), $(".window_bodyOuter", e._wDom).css("height", n - 50 + "px"), e.onResize(i - 22, n - 50), e._isIframeApp && e._chan && e._chan.call({
                method: "window.max",
                params: {},
                success: function() {
                    return !0
                },
                error: function() {
                    return !1
                }
            }), e._wDom.find(".window_max").addClass("window_restore")
        } else {
            var o = e._wDom.attr("oWidth"),
                r = e._wDom.attr("oHeight"),
                a = e._wDom.attr("oLeft"),
                s = e._wDom.attr("oTop");
            e._wDom.attr("max", "false").css({
                left: a + "px",
                top: s + "px",
                width: o + "px",
                height: r + "px"
            }).find(".ui-resizable-handle").show(), e._wDom.find(".window_titleBar").removeClass("max"), $(".window_bodyOuter", e._wDom).css("height", r - 50 + "px"), e.onResize(o - 22, r - 50), e._isIframeApp && e._chan && e._chan.call({
                method: "window.restore",
                params: {},
                success: function() {
                    return !0
                },
                error: function() {
                    return !1
                }
            }), e._wDom.find(".window_max").removeClass("window_restore")
        }
    },
    changeHeight: function(e) {
        return this._wDom.css({
            height: this._wDom.height() + e + "px"
        }), this._wDom.find(".window_bodyOuter").css({
            height: this._wDom.find(".window_bodyOuter").height() + e + "px"
        }), !1
    },
    generateParamsMenu: function(e, t) {
        var i = this;
        void 0 == this._tpl_params_menu && (this._tpl_params_menu = this.util.getTemplate("sys", "sys_iframe_params"));
        var n = this._tpl_params_menu({
            params: e
        });
        this._wDom.find(".window_title_params").html(n), this._wDom.find(".window_title_params .btn_save_params").click(function() {
            var e = {};
            i._wDom.find(".params_item").each(function() {
                var t = decodeURIComponent($(this).attr("key")),
                    i = $(this).find(".params_item_input").val();
                "checkbox" == $(this).find(".params_item_input").attr("type") && (i = $(this).find(".params_item_input").is(":checked")), e[t] = i
            });
            var n = function() {
                t.call({
                    method: "system.paramsChange",
                    params: e,
                    success: function() {
                        return !0
                    }
                })
            };
            n(), i.paramSaveFunc = n, i.hideParamsMenu()
        }), this._wDom.find(".window_toolButtonBar").unbind().click(function() {
            return i.showParamsMenu(), !1
        }).removeClass("is-hide")
    },
    showParamsMenu: function() {
        if (this._wDom.find(".window_title_params").is(":visible")) return this.hideParamsMenu(), !1;
        this._wDom.find(".window_title_params").removeClass("is-hide");
        var e = this._wDom.find(".window_title_params").height();
        this.changeHeight(e), this._wDom.find(".content_area").css("margin-top", e + "px")
    },
    hideParamsMenu: function() {
        if (!this._wDom.find(".window_title_params").is(":visible")) return this.showParamsMenu(), !1;
        var e = this._wDom.find(".window_title_params").height();
        this.changeHeight(-e), this._wDom.find(".window_title_params").addClass("is-hide"), this._wDom.find(".content_area").css("margin-top", "0px")
    },
    setMinButton: function(e) {
        e ? this._wDom.find(".window_min").show() : this._wDom.find(".window_min").hide()
    },
    setMaxButton: function(e) {
        e ? this._wDom.find(".window_max").show() : this._wDom.find(".window_max").hide()
    },
    setIcon: function(e, t) {
        var i = this;
        try {
            i._wDom.find(".window_icon").error(function() {
                $(this).attr("src", t), i._taskItem && i._taskItem.find("img").attr("src", t)
            }).attr("src", e).imgpreload(function() {
                i._taskItem && i._taskItem.find("img").attr("src", e)
            })
        } catch (n) {}
    },
    setBodyHeight: function(e, t) {
        var i = this;
        return "true" == i._wDom.attr("max") ? !1 : (t ? (i._wDom.animate({
            height: e + 50 + "px"
        }, t), $(".window_bodyOuter", i._wDom).animate({
            height: e + "px"
        }, t)) : (i._wDom.css("height", e + 50 + "px"), $(".window_bodyOuter", i._wDom).css("height", e + "px")), i.onResize(i._wContentDom.width(), e), !1)
    },
    setBodyWidth: function(e) {
        var t = this;
        return "true" == t._wDom.attr("max") ? !1 : (t._wDom.css("width", e + 22 + "px"), $(".window_bodyOuter", t._wDom).css("width", "100%"), t.onResize(e, t._wContentDom.height()), !1)
    },
    setBodySize: function(e, t) {
        var i = this;
        return "true" == i._wDom.attr("max") ? !1 : (i._wDom.css("width", e + 22 + "px"), i._wDom.css("height", t + 50 + "px"), $(".window_bodyOuter", i._wDom).css("width", "100%").css("height", t + "px"), i.onResize(e, t), !1)
    },
    setService: function() {
        var e = this;
        $(".window_close", this._wDom).unbind("click").click(function(t) {
            e.setInvisible(), e.util.cancelEventBubble(t)
        })
    },
    setHideTaskbar: function() {
        Airdroid.TaskbarManage.deleteTask(this)
    },
    setVisible: function() {
        this._wDom.show()
    },
    setInvisible: function() {
        this._wDom.hide()
    },
    getWindowRect: function() {
        return {
            xPos: this._wDom.position().left - 10,
            yPos: this._wDom.position().top - 40,
            width: this._wDom.width() - 20,
            height: this._wDom.height() - 50
        }
    },
    hookChan: function(chan) {
        var self = this;
        this._isIframeApp && (this._chan = chan, chan.bind("window.setBodyHeight", function(e, t) {
            self.setBodyHeight(t.height)
        }).bind("window.close", function() {
            return self._wDom.find(".window_close").trigger("click"), !0
        }).bind("window.max", function() {
            self._wDom.find(".window_max").trigger("click")
        }).bind("window.min", function() {
            self._wDom.find(".window_min").trigger("click")
        }).bind("window.restore", function() {
            "true" == self._wDom.attr("max") && self._wDom.is(":visible") ? self._wDom.find(".window_max").trigger("click") : !self._wDom.is("visible") && self._taskItem.is(":visible") && self._taskItem.trigger("click")
        }).bind("window.setTitle", function(e, t) {
            return self.updateTitle(t.title), !0
        }).bind("window.setBodySize", function(e, t) {
            if ("true" == self._wDom.attr("max")) return !1;
            self._wDom.css("width", t.width + 22 + "px"), self._wDom.css("height", t.height + 50 + "px"), $(".window_bodyOuter", self._wDom).css("height", t.height + "px");
            try {
                self.fireEvent(self.EventTypes.on_resize, {
                    width: t.width,
                    height: t.height
                })
            } catch (i) {}
            return !0
        }).bind("widget.close", function() {
            return self._wDom.find(".window_close").trigger("click"), !0
        }).bind("window.setCloseConfirm", function(e, t) {
            _.isEmpty(t.msg) ? self.setCloseConfirm() : self.setCloseConfirm(t.msg)
        }).bind("window.removeCloseConfirm", function() {
            self.removeCloseConfirm()
        }).bind("window.setButton", function(e, t) {
            _.isUndefined(t.minButton) || self.setMinButton(t.minButton), _.isUndefined(t.maxButton) || self.setMaxButton(t.maxButton)
        }).bind("window.setIcon", function(e, t) {
            void 0 != t.iconUrl && self.setIcon(t.iconUrl)
        }).bind("window.setDPosition", function(e, t) {
            var i = {
                left: self._wDom.position().left + t.dx + "px",
                top: self._wDom.position().top + t.dy + "px"
            };
            self._wDom.css("z-index") != self._desktop._zIndex && (i["z-index"] = self._desktop.getTopperZIndex()), self._wDom.css(i)
        }).bind("window.getParamByKey", function(e, t) {
            var i = null;
            return self._wDom.find(".params_item").each(function() {
                var e = decodeURIComponent($(this).attr("key"));
                return e == t ? (i = $(this).find(".params_item_input").val(), !1) : void 0
            }), i
        }).bind("window.getParamsByKeys", function(m, p) {
            var ret = {};
            return _.each(p, function(it) {
                eval("ret." + it + "=null;")
            }), self._wDom.find(".params_item").each(function() {
                var fieldKey = decodeURIComponent($(this).attr("key")); - 1 != p.indexOf(fieldKey) && eval("ret." + fieldKey + '="' + ("" + $(this).find(".params_item_input").val()).replace(/"/g, '\\"') + '";')
            }), ret
        }))
    },
    onResize: function(e, t) {
        var i = this;
        if (i._app && i._app.onResize({
                data: {
                    width: e,
                    height: t
                }
            }), i._isIframeApp && i._chan) try {
            i._chan.call({
                method: "window.resize",
                params: {
                    width: e,
                    height: t
                },
                success: function() {
                    return !0
                },
                error: function() {
                    return !1
                }
            })
        } catch (n) {}
    }
}), Airdroid.AppBase = Core.extend(Airdroid.Base, {
    _appWin: null,
    _service: null,
    $abstract: {
        onCreate: function() {},
        onResize: function() {},
        onClose: function() {}
    },
    _construct: function() {
        this._service = Airdroid.Service, this._currDevice = Airdroid.DeviceManage.getCurrentDeviceObj() || {}, this._dataCenter = this._currDevice._dataCenter, this.initialize && "function" == typeof this.initialize && this.initialize.apply(this)
    },
    createAppView: function() {
        var e = this;
        if (this.onCreate(), _.isFunction(this.onCreated) && this.onCreated(), this._appWin._isIframeApp || this.removeAppLoadMask(), this.events)
            for (var t in this.events) {
                var i = this[this.events[t]];
                if (!i) throw Error('Event "' + this.events[t] + '" does not exist');
                var n = t.match(/^(\S+)\s*(.*)$/),
                    o = n[1],
                    r = n[2];
                i = _.bind(i, this), "" === r ? this._appWin._wContentDom.bind(o, i) : this._appWin._wContentDom.delegate(r, o, i)
            }
        if (this.fullscreenEvents)
            for (var t in this.fullscreenEvents) {
                if (i = this[this.fullscreenEvents[t]], !i) throw Error('Event "' + this.fullscreenEvents[t] + '" does not exist');
                this[this.fullscreenEvents[t]] = i = _.bind(i, this), n = t.match(/^(\S+)\s*(.*)$/), o = n[1], r = n[2], "" === r ? $("body").bind(o, i) : $("body").delegate(r, o, i)
            }
        this.onClose && (this.onClose = _.wrap(this.onClose, function(t) {
            t.apply(e);
            for (var a in this.fullscreenEvents) {
                if (i = this[this.fullscreenEvents[a]], !i) throw Error('Event "' + this.fullscreenEvents[a] + '" does not exist');
                n = a.match(/^(\S+)\s*(.*)$/), o = n[1], r = n[2], "" === r ? $("body").unbind(o, i) : $("body").undelegate(r, o, i)
            }
        }))
    },
    runApp: function(e, t) {
        Airdroid.AppManage.createAppByAppId(e, t)
    },
    updateExistParams: function(e, t) {
        this._appWin._uniqueId = e, _.isFunction(t) && (this._appWin._checkExist = t)
    },
    triggerResize: function() {
        this._appWin.onResize(this._appWin._wContentDom.width(), this._appWin._wContentDom.height())
    },
    setDragStartFunction: function(e) {
        _.isFunction(e) && (this._appWin.proxyFunc_DragStart = e)
    },
    setAfterDataChangedFunc: function(e) {
        _.isFunction(e) && (this._appWin.proxyFunc_AfterDataChanged = e)
    },
    setSetting: function(e) {
        this._appWin._wDom.find(".window_setting").show().unbind("click").click(e)
    },
    updateTaskTitle: function(e) {
        this._appWin._taskItem.attr("title", e).find("span").html(e.escapeHTML())
    },
    updateTitle: function(e) {
        this._appWin.updateTitle(e)
    },
    setTaskItemAttribute: function(e, t) {
        this._appWin._taskItem.attr(e, t)
    },
    setContent: function(e) {
        this._appWin._wContentDom.append(e)
    },
    getContent: function() {
        return this._appWin._wContentDom
    },
    find: function(e) {
        return this._appWin._wContentDom.find(e)
    },
    triggerTaskItemClick: function() {
        this._appWin._taskItem.trigger("click")
    },
    bringToFront: function(e) {
        this._appWin.bringToFront(e)
    },
    isFocused: function() {
        return null != this._appWin._taskItem ? this._appWin._taskItem.hasClass("active") : !1
    },
    setInitPosition: function() {
        this._appWin.setInitPosition()
    },
    bringToCurrentDesktop: function() {
        this._appWin.bringToCurrentDesktop()
    },
    destroy: function() {
        this._appWin.destroy()
    },
    showLoadingMask: function(e, t, i) {
        t = t || "blue";
        var n = void 0 == e ? this._appWin._wContentDom : e;
        n.is(":visible") && this.util.showLoadingMask(n, t, i)
    },
    removeLoadingMask: function(e) {
        var t = void 0 == e ? this._appWin._wContentDom : e;
        this.util.removeLoadingMask(t)
    },
    removeAppLoadMask: function() {
        this._appWin._wContentDom.find(".app-load").remove()
    },
    showDelayMsg: function(e, t, i, n) {
        var o = this._appWin._wContentDom;
        n && (o = n), this.util.showDelayMsg(o, e, i, t)
    },
    noData: function(e, t) {
        var i = void 0 == e ? this._appWin._wContentDom : e;
        this.util.noData(i, t)
    },
    removeNoData: function(e) {
        var t = void 0 == e ? this._appWin._wContentDom : e;
        this.util.removeNoData(t)
    },
    addUploadTip: function(e) {
        var t = void 0 == e ? this._appWin._wContentDom : e;
        this.util.addUploadTip(t)
    },
    removeUploadTip: function(e) {
        var t = void 0 == e ? this._appWin._wContentDom : e;
        this.util.removeUploadTip(t)
    },
    getAppData: function() {
        return void 0 == this._appWin._appConfig.data ? "" : this._appWin._appConfig.data
    },
    setIcon: function(e, t) {
        this._appWin.setIcon(e, t)
    },
    getBodyWidth: function() {
        return this._appWin._wContentDom.width()
    },
    getBodyHeight: function() {
        return this._appWin._wContentDom.height()
    },
    setBodyHeight: function(e, t) {
        this._appWin.setBodyHeight(e, t)
    },
    setBodyWidth: function(e) {
        this._appWin.setBodyWidth(e)
    },
    setBodySize: function(e, t) {
        this._appWin.setBodySize(e, t)
    },
    hookChan: function(e) {
        this._appWin.hookChan(e)
    }
});
var hexcase = 0,
    keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode64 = function(e) {
        if (void 0 == e) return "";
        e = encodeURI(e);
        var t, i, n, o, r, a = "",
            s = "",
            d = "",
            c = 0;
        do t = e.charCodeAt(c++), i = e.charCodeAt(c++), s = e.charCodeAt(c++), n = t >> 2, o = (3 & t) << 4 | i >> 4, r = (15 & i) << 2 | s >> 6, d = 63 & s, isNaN(i) ? r = d = 64 : isNaN(s) && (d = 64), a = a + keyStr.charAt(n) + keyStr.charAt(o) + keyStr.charAt(r) + keyStr.charAt(d), t = i = s = "", n = o = r = d = ""; while (e.length > c);
        return a.replace(/\+/g, "%2B").replace(/=/g, "%3D").replace(/\//g, "%2F")
    },
    decode64 = function(e) {
        if (void 0 == e) return "";
        var t, i, n, o, r, a = "",
            s = "",
            d = "",
            c = 0;
        if (0 != e.length % 4) return "";
        var l = /[^A-Za-z0-9\+\/\=]/g;
        if (l.exec(e)) return "";
        do n = keyStr.indexOf(e.charAt(c++)), o = keyStr.indexOf(e.charAt(c++)), r = keyStr.indexOf(e.charAt(c++)), d = keyStr.indexOf(e.charAt(c++)), t = n << 2 | o >> 4, i = (15 & o) << 4 | r >> 2, s = (3 & r) << 6 | d, a += String.fromCharCode(t), 64 != r && (a += String.fromCharCode(i)), 64 != d && (a += String.fromCharCode(s)), t = i = s = "", n = o = r = d = ""; while (e.length > c);
        return a
    };
Airdroid.Module.Default = Core.extend(Airdroid.AppBase, {
    initialize: function() {},
    onCreate: function() {
        var e = this;
        console.info("oncreate===>"), e._refDOM = $(e.util.getTemplate("sys", "load_error", {
            errorImg: Airdroid.Service.getImgAssets("loadapperror.png"),
            type: "module",
            lang: e.util.getLang("Common")
        })), e.setContent(e._refDOM);
        var t = e.getBodyWidth();
        500 > t && (e.setBodyWidth(350), e.find(".mod-default-errorImg").width(140));
        var i = e.getBodyHeight();
        400 > i && (e.setBodyHeight(300), e.find(".mod-default-errorImg").width(140))
    },
    onCreated: function() {
        var e = this,
            t = e.find(".mod-default-errorImg"),
            i = t.width() + t.position().left - 100;
        e.find(".mod-default-tip").css("marginLeft", i + "px"), e.find(".mod-default-reload a").click(function(t) {
            t.preventDefault();
            var i = $(this).data("param") ? $(this).data("param") : {};
            return Airdroid.Util.refreshModuleJsUrl(e._appWin._appConfig), e.destroy(), Airdroid.AppManage.createAppByAppId(e._appWin._appConfig.appId, i), !1
        })
    },
    onDataChange: function(e) {
        var t = this;
        t.find(".mod-default-reload a").data("param", e.data)
    },
    onResize: function() {},
    onClose: function() {}
}), Airdroid.Widget.Default = Core.extend(Airdroid.AppBase, {
    initialize: function() {
        console.info("testModule class===initialize")
    },
    onCreate: function() {
        var e = this;
        console.info("oncreate===>"), e._refDOM = $(e.util.getTemplate("sys", "load_error", {
            errorImg: Airdroid.Service.getImgAssets("loadapperror.png"),
            type: "widget",
            lang: e.util.getLang("Common")
        })), e.setContent(e._refDOM);
        var t = e.getBodyWidth();
        500 > t && (e.setBodyWidth(350), e.find(".mod-default-errorImg").width(140), e._appWin._wContentDom.width(350));
        var i = e.getBodyHeight();
        400 > i && (e.setBodyHeight(300), e.find(".mod-default-errorImg").width(140), e._appWin._wContentDom.height(300))
    },
    onCreated: function() {
        var e = this,
            t = e.find(".mod-default-errorImg"),
            i = t.width() + t.position().left - 100;
        e.find(".mod-default-tip").css("marginLeft", i + "px"), e.find(".mod-default-reload a").click(function(t) {
            t.preventDefault();
            var i = $(this).data("param") ? $(this).data("param") : {};
            return Airdroid.Util.refreshModuleJsUrl(e._appWin._appConfig), e.destroy(), Airdroid.AppManage.createAppByAppId(e._appWin._appConfig.appId, i), !1
        })
    },
    onDataChange: function(e) {
        var t = this;
        t.find(".mod-default-reload a").data("param", e.data)
    },
    onResize: function() {},
    onClose: function() {}
}), Airdroid.Widget.Share = Core.extend(Airdroid.Base, {
    _shareDom: null,
    _documentClickHander: null,
    _data: {},
    create: function(e) {
        var t = this;
        t._lang = this.util.getLang("Common"), t._type = {
            facebook: {
                name: "facebook",
                type: ["intl"],
                bindUrl: t.config.userApiUrl + "user/tpbind.html?service=facebook",
                updateUrl: t.config.userApiUrl + "user/tpupdate.html?service=facebook",
                getTokenFunc: "getFaceBookToken",
                shareFunc: "shareToFaceBook",
                showTip: t._lang.Shared_Via_Airdroid_Facebook,
                limit: "",
                titleTip: "facebook",
                setParamFunc: function(e, t) {
                    return e.access_token = t.access_token, e
                }
            },
            twitter: {
                name: "twitter",
                type: ["intl"],
                bindUrl: t.config.userApiUrl + "user/tpbind.html?service=twitter",
                updateUrl: t.config.userApiUrl + "user/tpupdate.html?service=twitter",
                getTokenFunc: "getTwitterToken",
                shareFunc: "shareToTwitter",
                showTip: t._lang.Shared_Via_Airdroid_Twitter,
                limit: 100,
                titleTip: "twitter",
                setParamFunc: function(e, t) {
                    return e.oauth_consumer_key = t.oauth_consumer_key, e.oauth_consumer_key_secret = t.oauth_consumer_key_secret, e.oauth_token = t.oauth_token, e.oauth_token_secret = t.oauth_token_secret, e
                }
            }
        }, t._shareDom = $(t.util.getTemplate("widget/share", "index", {
            uploading: t.util.getLang("Applications", "Message_Uploading"),
            type: Airdroid.Config.product,
            data: t._type
        })), _.isUndefined(e) ? t._shareDom.appendTo("body") : t._shareDom.appendTo(e), $(document).click(function() {
            $(".widget-share").hide()
        }), t._shareDom.find(".share-type").click(function(e) {
            var i = $(e.currentTarget).attr("cmd");
            t._shareDom.find(".loading-blue-mask").show(), t._shareDom.find(".share-btns").hide().end().find(".loading-wraper").show(), t.startShare(i), t.util.cancelEventBubble(e)
        })
    },
    initView: function(e) {
        var t = this;
        t._data = e, t._data.position.direction || (t._data.position.direction = "down");
        var i = 45 * t._shareDom.find(".share-type").length,
            n = e.position.xPos - i / 2 + 5,
            o = e.position.yPos - t._shareDom.height();
        "right" == t._data.position.direction && (n = e.position.xPos, o = e.position.yPos), t._shareDom.find(".widget-share-arrow").attr("class", "widget-share-arrow arrow-" + t._data.position.direction), t._shareDom.css({
            width: i + "px",
            left: n + "px",
            top: o + "px"
        }).show(), t._shareDom.find(".share-btns").show().end().find(".loading-wraper").hide(), e.parent && (this.util._shareWidget = null)
    },
    startShare: function(e) {
        var t = this,
            i = 50,
            n = 50,
            o = {};
        o.type = t._data.param.type, "1" == o.type ? o.id = t._data.param.id : "2" == o.type && (o.path = t._data.param.path), "4" != o.type && (o.rotate = t._data.param.rotate ? t._data.param.rotate : "");
        var r = 0,
            a = t._type[e];
        if (_.isObject(a)) {
            var s = function(t) {
                    var o = "-1" == t ? a.updateUrl : a.bindUrl;
                    if (1 > r) {
                        var s = "height=500,width=700,top=" + parseInt(i) + ",left=" + parseInt(n) + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no";
                        try {
                            var c = window.open(o, e + "-share", s);
                            c.focus();
                            var l = setInterval(function() {
                                c.closed && (clearInterval(l), r += 1, Airdroid.UserManage.updateSnsToken(function() {
                                    d()
                                }))
                            }, 200)
                        } catch (u) {
                            Airdroid.Util.showPopupWindowForbiddenTip()
                        }
                    } else r = 0, $(".widget-share").find(".share-btns").show().end().find(".loading-wraper").hide(), $(".widget-share").hide(), console.log("share faile form " + e)
                },
                d = function() {
                    var i = Airdroid.UserManage.getAccount(),
                        n = i.sns[e];
                    console.dir(n), "1" == n.auth ? (_.isFunction(a.setParamFunc) && (o = a.setParamFunc(o, n)), t.showShareModal(o, e)) : "-1" != n.auth && "0" != n.auth && n.auth || s(n.auth)
                };
            Airdroid.UserManage.setInfoChange(), d()
        }
    },
    showShareModal: function(e, t) {
        var i = this;
        if (Airdroid.Util.hasCurrentBlock()) return !1;
        var n = "",
            o = t,
            r = i._type[t];
        if (_.isObject(r)) {
            $(".widget-share").hide();
            var a = Airdroid.Service.getImgAssets("feature/default_image_loading.gif");
            if ("1" == e.type) {
                var s = Airdroid.DeviceManage.getCurrentDeviceObj(),
                    d = s.getImageDataCenter();
                e.id = d.modelIdToTableId(e.id);
                var c = Airdroid.Service.getImageThumbRaw(e.id, {
                    max: 142
                });
                n = "Photo"
            } else if ("2" == e.type) {
                var c = Airdroid.Service.getFileTypeIconRaw({
                    file: e.path,
                    type: 2,
                    max: 142
                });
                n = "File"
            } else if ("3" == e.type) {
                var c = Airdroid.Service.screenshotToPc({
                    q: 50,
                    m: 0
                });
                n = "ScreenShot"
            } else if ("4" == e.type) {
                var c = Airdroid.Service.takeCameraPicToPc({});
                n = "Camera"
            }
            $(".full-screen-close").length > 0 && (Airdroid.Util.browser.firefox || $(".full-screen-close").trigger("click"));
            var l = i.util.getTemplate("widget/share", "input", {
                phoneImg: a,
                cmd: t,
                limit: r.limit ? !0 : !1,
                lang: i._lang
            });
            Airdroid.Util.customAlertBoxHasBottom({
                description: l,
                bottomBar: {
                    hasOkBtn: {
                        msg: i._lang.ToolTip_Share,
                        clickHandle: function() {
                            return !1
                        }
                    },
                    hasCancelBtn: {
                        msg: i._lang.Button_Close,
                        clickHandle: function() {
                            i._shareDom.find(".share-btns").show().end().find(".loading-wraper").hide()
                        }
                    }
                },
                showHandle: function(t) {
                    $("#alert_box_msg").css("marginBottom", "10px");
                    var a = $("#alert_box_yes_btn", $(t.data));
                    if ($(t.data).find(".widget-share-imgCon img").attr("imgsrc", c).attr("type", e.type), "3" == e.type) {
                        $(t.data).find(".widget-share-imgCon img").attr("rotate", e.rotate), a.attr("disabled", "disabled");
                        var s = {};
                        s.type = "1", i.saveImg(s, function() {
                            a.removeAttr("disabled")
                        }), i.preloadImage($(t.data).find(".widget-share-imgCon img"))
                    } else if ("4" == e.type) {
                        a.attr("disabled", "disabled");
                        var s = {};
                        s.type = "2", i.saveImg(s, function(e) {
                            a.removeAttr("disabled");
                            var n = Airdroid.Service.getFileRaw({
                                pathfile: e.msg,
                                saveas: 0,
                                dd: Date.parse(new Date)
                            });
                            $(t.data).find(".widget-share-imgCon img").attr("imgsrc", n), i.preloadImage($(t.data).find(".widget-share-imgCon img"))
                        }, function() {
                            i.preloadImage($(t.data).find(".widget-share-imgCon img"))
                        })
                    } else i.preloadImage($(t.data).find(".widget-share-imgCon img").attr("rotate", e.rotate));
                    $(".widget-share-tip", $(t.data)).html(i._lang.Share_To.format(r.titleTip));
                    var d = r.showTip;
                    $(".widget-share-content", $(t.data)).val(d), $(".widget-share-content", $(t.data)).keyup(function() {
                        if (r.limit) {
                            var e = $(this).val().length,
                                i = !1;
                            if (e > r.limit) {
                                var n = $(this).val().substr(0, r.limit);
                                e = n.length, i = !0
                            }
                            var o = r.limit - parseInt(e);
                            o >= 0 ? $(".widget-share-count", $(t.data)).html(o) : $(".widget-share-count", $(t.data)).html("0"), i && $(this).val(n)
                        }
                        0 == $(this).val().trim().length ? (a.attr("disabled", "disabled"), a.addClass("disabled")) : (a.removeAttr("disabled"), a.removeClass("disabled"))
                    }), $(".widget-share-content", $(t.data)).trigger("keyup"), a.click(function() {
                        if (!$(this).hasClass("disabled")) {
                            i.ShareGa(n, o, "click"), $(t.data).find(".widget-share-innerBody").hide(), $(t.data).find(".loading-wraper").show(), $(t.data).find(".loading-blue-mask").show(), e.share_msg = $(".widget-share-content", $(t.data)).val();
                            var a = function(e) {
                                    i._shareDom.find(".share-btns").show().end().find(".loading-wraper").hide(), $(".widget-share").hide(), e ? Airdroid.Util.closeCurrentBlock() : ($(t.data).find(".loading-wraper").hide(), $(t.data).find(".widget-share-innerBody").show())
                                },
                                s = function() {
                                    $(t.data).find(".loading-blue-mask").hide(), Airdroid.Util.showDelayMsg($(t.data), i._lang.Share_Success, function() {
                                        a(!0)
                                    }, !1), i.ShareGa(n, o, "share", "success")
                                },
                                d = function() {
                                    $(t.data).find(".loading-blue-mask").hide(), Airdroid.Util.showDelayMsg($(t.data), i._lang.Share_Faile, function() {
                                        a(!1)
                                    }, !1), i.ShareGa(n, o, "share", "fail")
                                };
                            Airdroid.Service[r.shareFunc](e, function(e) {
                                "1" == e.result ? s() : d()
                            }, function() {
                                d()
                            })
                        }
                    })
                }
            })
        }
    },
    ShareGa: function(e, t, i, n) {
        var o = "";
        "click" == i ? o = t + "-" + i : "share" == i && (o = t + "-" + n), Airdroid.Util.trackEvent("W-Share", e, o)
    },
    saveImg: function(e, t, i) {
        Airdroid.Service.saveShareImg(e, function(e) {
            "1" == e.result ? _.isFunction(t) && t(e) : _.isFunction(i) && i()
        }, function() {
            _.isFunction(i) && i()
        })
    },
    preloadImage: function(e) {
        var t = this,
            i = e,
            n = i.attr("imgsrc"),
            o = i.attr("src"),
            r = e.attr("type");
        try {
            e.imgpreload(function() {
                $(this).show(), $(this).attr("load_status", "1").removeAttr("imgsrc"), "4" != r && ($(this).addClass($(this).attr("rotate")), t.resizeImg($(this)))
            }).error(function() {
                $(this).attr("src", o)
            }).attr("src", n)
        } catch (a) {}
    },
    resizeImg: function(e) {
        var t = e.position().left,
            i = e.parents("td").width() + "px";
        0 > t && e.css({
            width: "auto",
            height: i
        })
    },
    clear: function() {
        this._shareDom.remove(), this.util._shareWidget = null, this._data = null
    }
}),
    function(e) {
        var t = {
            PinYin: "%7B%22a%22%3A%22%E5%95%8A%E9%98%BF%E9%94%95%22%2C%22ai%22%3A%22%E5%9F%83%E6%8C%A8%E5%93%8E%E5%94%89%E5%93%80%E7%9A%91%E7%99%8C%E8%94%BC%E7%9F%AE%E8%89%BE%E7%A2%8D%E7%88%B1%E9%9A%98%E8%AF%B6%E6%8D%B1%E5%97%B3%E5%97%8C%E5%AB%92%E7%91%B7%E6%9A%A7%E7%A0%B9%E9%94%BF%E9%9C%AD%22%2C%22an%22%3A%22%E9%9E%8D%E6%B0%A8%E5%AE%89%E4%BF%BA%E6%8C%89%E6%9A%97%E5%B2%B8%E8%83%BA%E6%A1%88%E8%B0%99%E5%9F%AF%E6%8F%9E%E7%8A%B4%E5%BA%B5%E6%A1%89%E9%93%B5%E9%B9%8C%E9%A1%B8%E9%BB%AF%22%2C%22ang%22%3A%22%E8%82%AE%E6%98%82%E7%9B%8E%22%2C%22ao%22%3A%22%E5%87%B9%E6%95%96%E7%86%AC%E7%BF%B1%E8%A2%84%E5%82%B2%E5%A5%A5%E6%87%8A%E6%BE%B3%E5%9D%B3%E6%8B%97%E5%97%B7%E5%99%A2%E5%B2%99%E5%BB%92%E9%81%A8%E5%AA%AA%E9%AA%9C%E8%81%B1%E8%9E%AF%E9%8F%8A%E9%B3%8C%E9%8F%96%22%2C%22ba%22%3A%22%E8%8A%AD%E6%8D%8C%E6%89%92%E5%8F%AD%E5%90%A7%E7%AC%86%E5%85%AB%E7%96%A4%E5%B7%B4%E6%8B%94%E8%B7%8B%E9%9D%B6%E6%8A%8A%E8%80%99%E5%9D%9D%E9%9C%B8%E7%BD%A2%E7%88%B8%E8%8C%87%E8%8F%9D%E8%90%86%E6%8D%AD%E5%B2%9C%E7%81%9E%E6%9D%B7%E9%92%AF%E7%B2%91%E9%B2%85%E9%AD%83%22%2C%22bai%22%3A%22%E7%99%BD%E6%9F%8F%E7%99%BE%E6%91%86%E4%BD%B0%E8%B4%A5%E6%8B%9C%E7%A8%97%E8%96%9C%E6%8E%B0%E9%9E%B4%22%2C%22ban%22%3A%22%E6%96%91%E7%8F%AD%E6%90%AC%E6%89%B3%E8%88%AC%E9%A2%81%E6%9D%BF%E7%89%88%E6%89%AE%E6%8B%8C%E4%BC%B4%E7%93%A3%E5%8D%8A%E5%8A%9E%E7%BB%8A%E9%98%AA%E5%9D%82%E8%B1%B3%E9%92%A3%E7%98%A2%E7%99%8D%E8%88%A8%22%2C%22bang%22%3A%22%E9%82%A6%E5%B8%AE%E6%A2%86%E6%A6%9C%E8%86%80%E7%BB%91%E6%A3%92%E7%A3%85%E8%9A%8C%E9%95%91%E5%82%8D%E8%B0%A4%E8%92%A1%E8%9E%83%22%2C%22bao%22%3A%22%E8%8B%9E%E8%83%9E%E5%8C%85%E8%A4%92%E9%9B%B9%E4%BF%9D%E5%A0%A1%E9%A5%B1%E5%AE%9D%E6%8A%B1%E6%8A%A5%E6%9A%B4%E8%B1%B9%E9%B2%8D%E7%88%86%E5%8B%B9%E8%91%86%E5%AE%80%E5%AD%A2%E7%85%B2%E9%B8%A8%E8%A4%93%E8%B6%B5%E9%BE%85%22%2C%22bo%22%3A%22%E5%89%A5%E8%96%84%E7%8E%BB%E8%8F%A0%E6%92%AD%E6%8B%A8%E9%92%B5%E6%B3%A2%E5%8D%9A%E5%8B%83%E6%90%8F%E9%93%82%E7%AE%94%E4%BC%AF%E5%B8%9B%E8%88%B6%E8%84%96%E8%86%8A%E6%B8%A4%E6%B3%8A%E9%A9%B3%E4%BA%B3%E8%95%83%E5%95%B5%E9%A5%BD%E6%AA%97%E6%93%98%E7%A4%B4%E9%92%B9%E9%B9%81%E7%B0%B8%E8%B7%9B%22%2C%22bei%22%3A%22%E6%9D%AF%E7%A2%91%E6%82%B2%E5%8D%91%E5%8C%97%E8%BE%88%E8%83%8C%E8%B4%9D%E9%92%A1%E5%80%8D%E7%8B%88%E5%A4%87%E6%83%AB%E7%84%99%E8%A2%AB%E5%AD%9B%E9%99%82%E9%82%B6%E5%9F%A4%E8%93%93%E5%91%97%E6%80%AB%E6%82%96%E7%A2%9A%E9%B9%8E%E8%A4%99%E9%90%BE%22%2C%22ben%22%3A%22%E5%A5%94%E8%8B%AF%E6%9C%AC%E7%AC%A8%E7%95%9A%E5%9D%8C%E9%94%9B%22%2C%22beng%22%3A%22%E5%B4%A9%E7%BB%B7%E7%94%AD%E6%B3%B5%E8%B9%A6%E8%BF%B8%E5%94%AA%E5%98%A3%E7%94%8F%22%2C%22bi%22%3A%22%E9%80%BC%E9%BC%BB%E6%AF%94%E9%84%99%E7%AC%94%E5%BD%BC%E7%A2%A7%E8%93%96%E8%94%BD%E6%AF%95%E6%AF%99%E6%AF%96%E5%B8%81%E5%BA%87%E7%97%B9%E9%97%AD%E6%95%9D%E5%BC%8A%E5%BF%85%E8%BE%9F%E5%A3%81%E8%87%82%E9%81%BF%E9%99%9B%E5%8C%95%E4%BB%B3%E4%BF%BE%E8%8A%98%E8%8D%9C%E8%8D%B8%E5%90%A1%E5%93%94%E7%8B%B4%E5%BA%B3%E6%84%8E%E6%BB%97%E6%BF%9E%E5%BC%BC%E5%A6%A3%E5%A9%A2%E5%AC%96%E7%92%A7%E8%B4%B2%E7%95%80%E9%93%8B%E7%A7%95%E8%A3%A8%E7%AD%9A%E7%AE%85%E7%AF%A6%E8%88%AD%E8%A5%9E%E8%B7%B8%E9%AB%80%22%2C%22bian%22%3A%22%E9%9E%AD%E8%BE%B9%E7%BC%96%E8%B4%AC%E6%89%81%E4%BE%BF%E5%8F%98%E5%8D%9E%E8%BE%A8%E8%BE%A9%E8%BE%AB%E9%81%8D%E5%8C%BE%E5%BC%81%E8%8B%84%E5%BF%AD%E6%B1%B4%E7%BC%8F%E7%85%B8%E7%A0%AD%E7%A2%A5%E7%A8%B9%E7%AA%86%E8%9D%99%E7%AC%BE%E9%B3%8A%22%2C%22biao%22%3A%22%E6%A0%87%E5%BD%AA%E8%86%98%E8%A1%A8%E5%A9%8A%E9%AA%A0%E9%A3%91%E9%A3%99%E9%A3%9A%E7%81%AC%E9%95%96%E9%95%B3%E7%98%AD%E8%A3%B1%E9%B3%94%22%2C%22bie%22%3A%22%E9%B3%96%E6%86%8B%E5%88%AB%E7%98%AA%E8%B9%A9%E9%B3%98%22%2C%22bin%22%3A%22%E5%BD%AC%E6%96%8C%E6%BF%92%E6%BB%A8%E5%AE%BE%E6%91%88%E5%82%A7%E6%B5%9C%E7%BC%A4%E7%8E%A2%E6%AE%A1%E8%86%91%E9%95%94%E9%AB%8C%E9%AC%93%22%2C%22bing%22%3A%22%E5%85%B5%E5%86%B0%E6%9F%84%E4%B8%99%E7%A7%89%E9%A5%BC%E7%82%B3%E7%97%85%E5%B9%B6%E7%A6%80%E9%82%B4%E6%91%92%E7%BB%A0%E6%9E%8B%E6%A7%9F%E7%87%B9%22%2C%22bu%22%3A%22%E6%8D%95%E5%8D%9C%E5%93%BA%E8%A1%A5%E5%9F%A0%E4%B8%8D%E5%B8%83%E6%AD%A5%E7%B0%BF%E9%83%A8%E6%80%96%E6%8B%8A%E5%8D%9F%E9%80%8B%E7%93%BF%E6%99%A1%E9%92%9A%E9%86%AD%22%2C%22ca%22%3A%22%E6%93%A6%E5%9A%93%E7%A4%A4%22%2C%22cai%22%3A%22%E7%8C%9C%E8%A3%81%E6%9D%90%E6%89%8D%E8%B4%A2%E7%9D%AC%E8%B8%A9%E9%87%87%E5%BD%A9%E8%8F%9C%E8%94%A1%22%2C%22can%22%3A%22%E9%A4%90%E5%8F%82%E8%9A%95%E6%AE%8B%E6%83%AD%E6%83%A8%E7%81%BF%E9%AA%96%E7%92%A8%E7%B2%B2%E9%BB%AA%22%2C%22cang%22%3A%22%E8%8B%8D%E8%88%B1%E4%BB%93%E6%B2%A7%E8%97%8F%E4%BC%A7%22%2C%22cao%22%3A%22%E6%93%8D%E7%B3%99%E6%A7%BD%E6%9B%B9%E8%8D%89%E8%89%B9%E5%98%88%E6%BC%95%E8%9E%AC%E8%89%9A%22%2C%22ce%22%3A%22%E5%8E%95%E7%AD%96%E4%BE%A7%E5%86%8C%E6%B5%8B%E5%88%82%E5%B8%BB%E6%81%BB%22%2C%22ceng%22%3A%22%E5%B1%82%E8%B9%AD%E5%99%8C%22%2C%22cha%22%3A%22%E6%8F%92%E5%8F%89%E8%8C%AC%E8%8C%B6%E6%9F%A5%E7%A2%B4%E6%90%BD%E5%AF%9F%E5%B2%94%E5%B7%AE%E8%AF%A7%E7%8C%B9%E9%A6%87%E6%B1%8A%E5%A7%B9%E6%9D%88%E6%A5%82%E6%A7%8E%E6%AA%AB%E9%92%97%E9%94%B8%E9%95%B2%E8%A1%A9%22%2C%22chai%22%3A%22%E6%8B%86%E6%9F%B4%E8%B1%BA%E4%BE%AA%E8%8C%88%E7%98%A5%E8%99%BF%E9%BE%87%22%2C%22chan%22%3A%22%E6%90%80%E6%8E%BA%E8%9D%89%E9%A6%8B%E8%B0%97%E7%BC%A0%E9%93%B2%E4%BA%A7%E9%98%90%E9%A2%A4%E5%86%81%E8%B0%84%E8%B0%B6%E8%92%87%E5%BB%9B%E5%BF%8F%E6%BD%BA%E6%BE%B6%E5%AD%B1%E7%BE%BC%E5%A9%B5%E5%AC%97%E9%AA%A3%E8%A7%87%E7%A6%85%E9%95%A1%E8%A3%A3%E8%9F%BE%E8%BA%94%22%2C%22chang%22%3A%22%E6%98%8C%E7%8C%96%E5%9C%BA%E5%B0%9D%E5%B8%B8%E9%95%BF%E5%81%BF%E8%82%A0%E5%8E%82%E6%95%9E%E7%95%85%E5%94%B1%E5%80%A1%E4%BC%A5%E9%AC%AF%E8%8B%8C%E8%8F%96%E5%BE%9C%E6%80%85%E6%83%9D%E9%98%8A%E5%A8%BC%E5%AB%A6%E6%98%B6%E6%B0%85%E9%B2%B3%22%2C%22chao%22%3A%22%E8%B6%85%E6%8A%84%E9%92%9E%E6%9C%9D%E5%98%B2%E6%BD%AE%E5%B7%A2%E5%90%B5%E7%82%92%E6%80%8A%E7%BB%89%E6%99%81%E8%80%96%22%2C%22che%22%3A%22%E8%BD%A6%E6%89%AF%E6%92%A4%E6%8E%A3%E5%BD%BB%E6%BE%88%E5%9D%BC%E5%B1%AE%E7%A0%97%22%2C%22chen%22%3A%22%E9%83%B4%E8%87%A3%E8%BE%B0%E5%B0%98%E6%99%A8%E5%BF%B1%E6%B2%89%E9%99%88%E8%B6%81%E8%A1%AC%E7%A7%B0%E8%B0%8C%E6%8A%BB%E5%97%94%E5%AE%B8%E7%90%9B%E6%A6%87%E8%82%9C%E8%83%82%E7%A2%9C%E9%BE%80%22%2C%22cheng%22%3A%22%E6%92%91%E5%9F%8E%E6%A9%99%E6%88%90%E5%91%88%E4%B9%98%E7%A8%8B%E6%83%A9%E6%BE%84%E8%AF%9A%E6%89%BF%E9%80%9E%E9%AA%8B%E7%A7%A4%E5%9F%95%E5%B5%8A%E5%BE%B5%E6%B5%88%E6%9E%A8%E6%9F%BD%E6%A8%98%E6%99%9F%E5%A1%8D%E7%9E%A0%E9%93%96%E8%A3%8E%E8%9B%8F%E9%85%B2%22%2C%22chi%22%3A%22%E5%90%83%E7%97%B4%E6%8C%81%E5%8C%99%E6%B1%A0%E8%BF%9F%E5%BC%9B%E9%A9%B0%E8%80%BB%E9%BD%BF%E4%BE%88%E5%B0%BA%E8%B5%A4%E7%BF%85%E6%96%A5%E7%82%BD%E5%82%BA%E5%A2%80%E8%8A%AA%E8%8C%8C%E6%90%8B%E5%8F%B1%E5%93%A7%E5%95%BB%E5%97%A4%E5%BD%B3%E9%A5%AC%E6%B2%B2%E5%AA%B8%E6%95%95%E8%83%9D%E7%9C%99%E7%9C%B5%E9%B8%B1%E7%98%9B%E8%A4%AB%E8%9A%A9%E8%9E%AD%E7%AC%9E%E7%AF%AA%E8%B1%89%E8%B8%85%E8%B8%9F%E9%AD%91%22%2C%22chong%22%3A%22%E5%85%85%E5%86%B2%E8%99%AB%E5%B4%87%E5%AE%A0%E8%8C%BA%E5%BF%A1%E6%86%A7%E9%93%B3%E8%89%9F%22%2C%22chou%22%3A%22%E6%8A%BD%E9%85%AC%E7%95%B4%E8%B8%8C%E7%A8%A0%E6%84%81%E7%AD%B9%E4%BB%87%E7%BB%B8%E7%9E%85%E4%B8%91%E4%BF%A6%E5%9C%B3%E5%B8%B1%E6%83%86%E6%BA%B4%E5%A6%AF%E7%98%B3%E9%9B%A0%E9%B2%8B%22%2C%22chu%22%3A%22%E8%87%AD%E5%88%9D%E5%87%BA%E6%A9%B1%E5%8E%A8%E8%BA%87%E9%94%84%E9%9B%8F%E6%BB%81%E9%99%A4%E6%A5%9A%E7%A1%80%E5%82%A8%E7%9F%97%E6%90%90%E8%A7%A6%E5%A4%84%E4%BA%8D%E5%88%8D%E6%86%B7%E7%BB%8C%E6%9D%B5%E6%A5%AE%E6%A8%97%E8%9C%8D%E8%B9%B0%E9%BB%9C%22%2C%22chuan%22%3A%22%E6%8F%A3%E5%B7%9D%E7%A9%BF%E6%A4%BD%E4%BC%A0%E8%88%B9%E5%96%98%E4%B8%B2%E6%8E%BE%E8%88%9B%E6%83%B4%E9%81%84%E5%B7%9B%E6%B0%9A%E9%92%8F%E9%95%A9%E8%88%A1%22%2C%22chuang%22%3A%22%E7%96%AE%E7%AA%97%E5%B9%A2%E5%BA%8A%E9%97%AF%E5%88%9B%E6%80%86%22%2C%22chui%22%3A%22%E5%90%B9%E7%82%8A%E6%8D%B6%E9%94%A4%E5%9E%82%E9%99%B2%E6%A3%B0%E6%A7%8C%22%2C%22chun%22%3A%22%E6%98%A5%E6%A4%BF%E9%86%87%E5%94%87%E6%B7%B3%E7%BA%AF%E8%A0%A2%E4%BF%83%E8%8E%BC%E6%B2%8C%E8%82%AB%E6%9C%90%E9%B9%91%E8%9D%BD%22%2C%22chuo%22%3A%22%E6%88%B3%E7%BB%B0%E8%94%9F%E8%BE%B6%E8%BE%8D%E9%95%9E%E8%B8%94%E9%BE%8A%22%2C%22ci%22%3A%22%E7%96%B5%E8%8C%A8%E7%A3%81%E9%9B%8C%E8%BE%9E%E6%85%88%E7%93%B7%E8%AF%8D%E6%AD%A4%E5%88%BA%E8%B5%90%E6%AC%A1%E8%8D%A0%E5%91%B2%E5%B5%AF%E9%B9%9A%E8%9E%85%E7%B3%8D%E8%B6%91%22%2C%22cong%22%3A%22%E8%81%AA%E8%91%B1%E5%9B%B1%E5%8C%86%E4%BB%8E%E4%B8%9B%E5%81%AC%E8%8B%81%E6%B7%99%E9%AA%A2%E7%90%AE%E7%92%81%E6%9E%9E%22%2C%22cu%22%3A%22%E5%87%91%E7%B2%97%E9%86%8B%E7%B0%87%E7%8C%9D%E6%AE%82%E8%B9%99%22%2C%22cuan%22%3A%22%E8%B9%BF%E7%AF%A1%E7%AA%9C%E6%B1%86%E6%92%BA%E6%98%95%E7%88%A8%22%2C%22cui%22%3A%22%E6%91%A7%E5%B4%94%E5%82%AC%E8%84%86%E7%98%81%E7%B2%B9%E6%B7%AC%E7%BF%A0%E8%90%83%E6%82%B4%E7%92%80%E6%A6%B1%E9%9A%B9%22%2C%22cun%22%3A%22%E6%9D%91%E5%AD%98%E5%AF%B8%E7%A3%8B%E5%BF%96%E7%9A%B4%22%2C%22cuo%22%3A%22%E6%92%AE%E6%90%93%E6%8E%AA%E6%8C%AB%E9%94%99%E5%8E%9D%E8%84%9E%E9%94%89%E7%9F%AC%E7%97%A4%E9%B9%BE%E8%B9%89%E8%BA%9C%22%2C%22da%22%3A%22%E6%90%AD%E8%BE%BE%E7%AD%94%E7%98%A9%E6%89%93%E5%A4%A7%E8%80%B7%E5%93%92%E5%97%92%E6%80%9B%E5%A6%B2%E7%96%B8%E8%A4%A1%E7%AC%AA%E9%9D%BC%E9%9E%91%22%2C%22dai%22%3A%22%E5%91%86%E6%AD%B9%E5%82%A3%E6%88%B4%E5%B8%A6%E6%AE%86%E4%BB%A3%E8%B4%B7%E8%A2%8B%E5%BE%85%E9%80%AE%E6%80%A0%E5%9F%AD%E7%94%99%E5%91%94%E5%B2%B1%E8%BF%A8%E9%80%AF%E9%AA%80%E7%BB%90%E7%8E%B3%E9%BB%9B%22%2C%22dan%22%3A%22%E8%80%BD%E6%8B%85%E4%B8%B9%E5%8D%95%E9%83%B8%E6%8E%B8%E8%83%86%E6%97%A6%E6%B0%AE%E4%BD%86%E6%83%AE%E6%B7%A1%E8%AF%9E%E5%BC%B9%E8%9B%8B%E4%BA%BB%E5%84%8B%E5%8D%A9%E8%90%8F%E5%95%96%E6%BE%B9%E6%AA%90%E6%AE%9A%E8%B5%95%E7%9C%88%E7%98%85%E8%81%83%E7%AE%AA%22%2C%22dang%22%3A%22%E5%BD%93%E6%8C%A1%E5%85%9A%E8%8D%A1%E6%A1%A3%E8%B0%A0%E5%87%BC%E8%8F%AA%E5%AE%95%E7%A0%80%E9%93%9B%E8%A3%86%22%2C%22dao%22%3A%22%E5%88%80%E6%8D%A3%E8%B9%88%E5%80%92%E5%B2%9B%E7%A5%B7%E5%AF%BC%E5%88%B0%E7%A8%BB%E6%82%BC%E9%81%93%E7%9B%97%E5%8F%A8%E5%95%81%E5%BF%89%E6%B4%AE%E6%B0%98%E7%84%98%E5%BF%91%E7%BA%9B%22%2C%22de%22%3A%22%E5%BE%B7%E5%BE%97%E7%9A%84%E9%94%9D%22%2C%22deng%22%3A%22%E8%B9%AC%E7%81%AF%E7%99%BB%E7%AD%89%E7%9E%AA%E5%87%B3%E9%82%93%E5%99%94%E5%B6%9D%E6%88%A5%E7%A3%B4%E9%95%AB%E7%B0%A6%22%2C%22di%22%3A%22%E5%A0%A4%E4%BD%8E%E6%BB%B4%E8%BF%AA%E6%95%8C%E7%AC%9B%E7%8B%84%E6%B6%A4%E7%BF%9F%E5%AB%A1%E6%8A%B5%E5%BA%95%E5%9C%B0%E8%92%82%E7%AC%AC%E5%B8%9D%E5%BC%9F%E9%80%92%E7%BC%94%E6%B0%90%E7%B1%B4%E8%AF%8B%E8%B0%9B%E9%82%B8%E5%9D%BB%E8%8E%9C%E8%8D%BB%E5%98%80%E5%A8%A3%E6%9F%A2%E6%A3%A3%E8%A7%8C%E7%A0%A5%E7%A2%B2%E7%9D%87%E9%95%9D%E7%BE%9D%E9%AA%B6%22%2C%22dian%22%3A%22%E9%A2%A0%E6%8E%82%E6%BB%87%E7%A2%98%E7%82%B9%E5%85%B8%E9%9D%9B%E5%9E%AB%E7%94%B5%E4%BD%83%E7%94%B8%E5%BA%97%E6%83%A6%E5%A5%A0%E6%B7%80%E6%AE%BF%E4%B8%B6%E9%98%BD%E5%9D%AB%E5%9F%9D%E5%B7%85%E7%8E%B7%E7%99%9C%E7%99%AB%E7%B0%9F%E8%B8%AE%22%2C%22diao%22%3A%22%E7%A2%89%E5%8F%BC%E9%9B%95%E5%87%8B%E5%88%81%E6%8E%89%E5%90%8A%E9%92%93%E8%B0%83%E8%BD%BA%E9%93%9E%E8%9C%A9%E7%B2%9C%E8%B2%82%22%2C%22die%22%3A%22%E8%B7%8C%E7%88%B9%E7%A2%9F%E8%9D%B6%E8%BF%AD%E8%B0%8D%E5%8F%A0%E4%BD%9A%E5%9E%A4%E5%A0%9E%E6%8F%B2%E5%96%8B%E6%B8%AB%E8%BD%B6%E7%89%92%E7%93%9E%E8%A4%B6%E8%80%8B%E8%B9%80%E9%B2%BD%E9%B3%8E%22%2C%22ding%22%3A%22%E4%B8%81%E7%9B%AF%E5%8F%AE%E9%92%89%E9%A1%B6%E9%BC%8E%E9%94%AD%E5%AE%9A%E8%AE%A2%E4%B8%A2%E4%BB%83%E5%95%B6%E7%8E%8E%E8%85%9A%E7%A2%87%E7%94%BA%E9%93%A4%E7%96%94%E8%80%B5%E9%85%8A%22%2C%22dong%22%3A%22%E4%B8%9C%E5%86%AC%E8%91%A3%E6%87%82%E5%8A%A8%E6%A0%8B%E4%BE%97%E6%81%AB%E5%86%BB%E6%B4%9E%E5%9E%8C%E5%92%9A%E5%B2%BD%E5%B3%92%E5%A4%82%E6%B0%A1%E8%83%A8%E8%83%B4%E7%A1%90%E9%B8%AB%22%2C%22dou%22%3A%22%E5%85%9C%E6%8A%96%E6%96%97%E9%99%A1%E8%B1%86%E9%80%97%E7%97%98%E8%94%B8%E9%92%AD%E7%AA%A6%E7%AA%AC%E8%9A%AA%E7%AF%BC%E9%85%A1%22%2C%22du%22%3A%22%E9%83%BD%E7%9D%A3%E6%AF%92%E7%8A%8A%E7%8B%AC%E8%AF%BB%E5%A0%B5%E7%9D%B9%E8%B5%8C%E6%9D%9C%E9%95%80%E8%82%9A%E5%BA%A6%E6%B8%A1%E5%A6%92%E8%8A%8F%E5%98%9F%E6%B8%8E%E6%A4%9F%E6%A9%90%E7%89%8D%E8%A0%B9%E7%AC%83%E9%AB%91%E9%BB%A9%22%2C%22duan%22%3A%22%E7%AB%AF%E7%9F%AD%E9%94%BB%E6%AE%B5%E6%96%AD%E7%BC%8E%E5%BD%96%E6%A4%B4%E7%85%85%E7%B0%96%22%2C%22dui%22%3A%22%E5%A0%86%E5%85%91%E9%98%9F%E5%AF%B9%E6%80%BC%E6%86%9D%E7%A2%93%22%2C%22dun%22%3A%22%E5%A2%A9%E5%90%A8%E8%B9%B2%E6%95%A6%E9%A1%BF%E5%9B%A4%E9%92%9D%E7%9B%BE%E9%81%81%E7%82%96%E7%A0%98%E7%A4%85%E7%9B%B9%E9%95%A6%E8%B6%B8%22%2C%22duo%22%3A%22%E6%8E%87%E5%93%86%E5%A4%9A%E5%A4%BA%E5%9E%9B%E8%BA%B2%E6%9C%B5%E8%B7%BA%E8%88%B5%E5%89%81%E6%83%B0%E5%A0%95%E5%92%84%E5%93%9A%E7%BC%8D%E6%9F%81%E9%93%8E%E8%A3%B0%E8%B8%B1%22%2C%22e%22%3A%22%E8%9B%BE%E5%B3%A8%E9%B9%85%E4%BF%84%E9%A2%9D%E8%AE%B9%E5%A8%A5%E6%81%B6%E5%8E%84%E6%89%BC%E9%81%8F%E9%84%82%E9%A5%BF%E5%99%A9%E8%B0%94%E5%9E%A9%E5%9E%AD%E8%8B%8A%E8%8E%AA%E8%90%BC%E5%91%83%E6%84%95%E5%B1%99%E5%A9%80%E8%BD%AD%E6%9B%B7%E8%85%AD%E7%A1%AA%E9%94%87%E9%94%B7%E9%B9%97%E9%A2%9A%E9%B3%84%22%2C%22en%22%3A%22%E6%81%A9%E8%92%BD%E6%91%81%E5%94%94%E5%97%AF%22%2C%22er%22%3A%22%E8%80%8C%E5%84%BF%E8%80%B3%E5%B0%94%E9%A5%B5%E6%B4%B1%E4%BA%8C%E8%B4%B0%E8%BF%A9%E7%8F%A5%E9%93%92%E9%B8%B8%E9%B2%95%22%2C%22fa%22%3A%22%E5%8F%91%E7%BD%9A%E7%AD%8F%E4%BC%90%E4%B9%8F%E9%98%80%E6%B3%95%E7%8F%90%E5%9E%A1%E7%A0%9D%22%2C%22fan%22%3A%22%E8%97%A9%E5%B8%86%E7%95%AA%E7%BF%BB%E6%A8%8A%E7%9F%BE%E9%92%92%E7%B9%81%E5%87%A1%E7%83%A6%E5%8F%8D%E8%BF%94%E8%8C%83%E8%B4%A9%E7%8A%AF%E9%A5%AD%E6%B3%9B%E8%98%A9%E5%B9%A1%E7%8A%AD%E6%A2%B5%E6%94%B5%E7%87%94%E7%95%88%E8%B9%AF%22%2C%22fang%22%3A%22%E5%9D%8A%E8%8A%B3%E6%96%B9%E8%82%AA%E6%88%BF%E9%98%B2%E5%A6%A8%E4%BB%BF%E8%AE%BF%E7%BA%BA%E6%94%BE%E5%8C%9A%E9%82%A1%E5%BD%B7%E9%92%AB%E8%88%AB%E9%B2%82%22%2C%22fei%22%3A%22%E8%8F%B2%E9%9D%9E%E5%95%A1%E9%A3%9E%E8%82%A5%E5%8C%AA%E8%AF%BD%E5%90%A0%E8%82%BA%E5%BA%9F%E6%B2%B8%E8%B4%B9%E8%8A%BE%E7%8B%92%E6%82%B1%E6%B7%9D%E5%A6%83%E7%BB%8B%E7%BB%AF%E6%A6%A7%E8%85%93%E6%96%90%E6%89%89%E7%A5%93%E7%A0%A9%E9%95%84%E7%97%B1%E8%9C%9A%E7%AF%9A%E7%BF%A1%E9%9C%8F%E9%B2%B1%22%2C%22fen%22%3A%22%E8%8A%AC%E9%85%9A%E5%90%A9%E6%B0%9B%E5%88%86%E7%BA%B7%E5%9D%9F%E7%84%9A%E6%B1%BE%E7%B2%89%E5%A5%8B%E4%BB%BD%E5%BF%BF%E6%84%A4%E7%B2%AA%E5%81%BE%E7%80%B5%E6%A3%BC%E6%84%8D%E9%B2%BC%E9%BC%A2%22%2C%22feng%22%3A%22%E4%B8%B0%E5%B0%81%E6%9E%AB%E8%9C%82%E5%B3%B0%E9%94%8B%E9%A3%8E%E7%96%AF%E7%83%BD%E9%80%A2%E5%86%AF%E7%BC%9D%E8%AE%BD%E5%A5%89%E5%87%A4%E4%BF%B8%E9%85%86%E8%91%91%E6%B2%A3%E7%A0%9C%22%2C%22fu%22%3A%22%E4%BD%9B%E5%90%A6%E5%A4%AB%E6%95%B7%E8%82%A4%E5%AD%B5%E6%89%B6%E6%8B%82%E8%BE%90%E5%B9%85%E6%B0%9F%E7%AC%A6%E4%BC%8F%E4%BF%98%E6%9C%8D%E6%B5%AE%E6%B6%AA%E7%A6%8F%E8%A2%B1%E5%BC%97%E7%94%AB%E6%8A%9A%E8%BE%85%E4%BF%AF%E9%87%9C%E6%96%A7%E8%84%AF%E8%85%91%E5%BA%9C%E8%85%90%E8%B5%B4%E5%89%AF%E8%A6%86%E8%B5%8B%E5%A4%8D%E5%82%85%E4%BB%98%E9%98%9C%E7%88%B6%E8%85%B9%E8%B4%9F%E5%AF%8C%E8%AE%A3%E9%99%84%E5%A6%87%E7%BC%9A%E5%92%90%E5%8C%90%E5%87%AB%E9%83%9B%E8%8A%99%E8%8B%BB%E8%8C%AF%E8%8E%A9%E8%8F%94%E5%91%8B%E5%B9%9E%E6%BB%8F%E8%89%B4%E5%AD%9A%E9%A9%B8%E7%BB%82%E6%A1%B4%E8%B5%99%E9%BB%BB%E9%BB%BC%E7%BD%98%E7%A8%83%E9%A6%A5%E8%99%8D%E8%9A%A8%E8%9C%89%E8%9D%A0%E8%9D%AE%E9%BA%B8%E8%B6%BA%E8%B7%97%E9%B3%86%22%2C%22ga%22%3A%22%E5%99%B6%E5%98%8E%E8%9B%A4%E5%B0%AC%E5%91%B7%E5%B0%95%E5%B0%9C%E6%97%AE%E9%92%86%22%2C%22gai%22%3A%22%E8%AF%A5%E6%94%B9%E6%A6%82%E9%92%99%E7%9B%96%E6%BA%89%E4%B8%90%E9%99%94%E5%9E%93%E6%88%A4%E8%B5%85%E8%83%B2%22%2C%22gan%22%3A%22%E5%B9%B2%E7%94%98%E6%9D%86%E6%9F%91%E7%AB%BF%E8%82%9D%E8%B5%B6%E6%84%9F%E7%A7%86%E6%95%A2%E8%B5%A3%E5%9D%A9%E8%8B%B7%E5%B0%B4%E6%93%80%E6%B3%94%E6%B7%A6%E6%BE%89%E7%BB%80%E6%A9%84%E6%97%B0%E7%9F%B8%E7%96%B3%E9%85%90%22%2C%22gang%22%3A%22%E5%86%88%E5%88%9A%E9%92%A2%E7%BC%B8%E8%82%9B%E7%BA%B2%E5%B2%97%E6%B8%AF%E6%88%86%E7%BD%A1%E9%A2%83%E7%AD%BB%22%2C%22gong%22%3A%22%E6%9D%A0%E5%B7%A5%E6%94%BB%E5%8A%9F%E6%81%AD%E9%BE%9A%E4%BE%9B%E8%BA%AC%E5%85%AC%E5%AE%AB%E5%BC%93%E5%B7%A9%E6%B1%9E%E6%8B%B1%E8%B4%A1%E5%85%B1%E8%95%BB%E5%BB%BE%E5%92%A3%E7%8F%99%E8%82%B1%E8%9A%A3%E8%9B%A9%E8%A7%A5%22%2C%22gao%22%3A%22%E7%AF%99%E7%9A%8B%E9%AB%98%E8%86%8F%E7%BE%94%E7%B3%95%E6%90%9E%E9%95%90%E7%A8%BF%E5%91%8A%E7%9D%BE%E8%AF%B0%E9%83%9C%E8%92%BF%E8%97%81%E7%BC%9F%E6%A7%94%E6%A7%81%E6%9D%B2%E9%94%86%22%2C%22ge%22%3A%22%E5%93%A5%E6%AD%8C%E6%90%81%E6%88%88%E9%B8%BD%E8%83%B3%E7%96%99%E5%89%B2%E9%9D%A9%E8%91%9B%E6%A0%BC%E9%98%81%E9%9A%94%E9%93%AC%E4%B8%AA%E5%90%84%E9%AC%B2%E4%BB%A1%E5%93%BF%E5%A1%A5%E5%97%9D%E7%BA%A5%E6%90%BF%E8%86%88%E7%A1%8C%E9%93%AA%E9%95%89%E8%A2%BC%E9%A2%8C%E8%99%BC%E8%88%B8%E9%AA%BC%E9%AB%82%22%2C%22gei%22%3A%22%E7%BB%99%22%2C%22gen%22%3A%22%E6%A0%B9%E8%B7%9F%E4%BA%98%E8%8C%9B%E5%93%8F%E8%89%AE%22%2C%22geng%22%3A%22%E8%80%95%E6%9B%B4%E5%BA%9A%E7%BE%B9%E5%9F%82%E8%80%BF%E6%A2%97%E5%93%BD%E8%B5%93%E9%B2%A0%22%2C%22gou%22%3A%22%E9%92%A9%E5%8B%BE%E6%B2%9F%E8%8B%9F%E7%8B%97%E5%9E%A2%E6%9E%84%E8%B4%AD%E5%A4%9F%E4%BD%9D%E8%AF%9F%E5%B2%A3%E9%81%98%E5%AA%BE%E7%BC%91%E8%A7%8F%E5%BD%80%E9%B8%B2%E7%AC%B1%E7%AF%9D%E9%9E%B2%22%2C%22gu%22%3A%22%E8%BE%9C%E8%8F%87%E5%92%95%E7%AE%8D%E4%BC%B0%E6%B2%BD%E5%AD%A4%E5%A7%91%E9%BC%93%E5%8F%A4%E8%9B%8A%E9%AA%A8%E8%B0%B7%E8%82%A1%E6%95%85%E9%A1%BE%E5%9B%BA%E9%9B%87%E5%98%8F%E8%AF%82%E8%8F%B0%E5%93%8C%E5%B4%AE%E6%B1%A9%E6%A2%8F%E8%BD%B1%E7%89%AF%E7%89%BF%E8%83%8D%E8%87%8C%E6%AF%82%E7%9E%BD%E7%BD%9F%E9%92%B4%E9%94%A2%E7%93%A0%E9%B8%AA%E9%B9%84%E7%97%BC%E8%9B%84%E9%85%A4%E8%A7%9A%E9%B2%B4%E9%AA%B0%E9%B9%98%22%2C%22gua%22%3A%22%E5%88%AE%E7%93%9C%E5%89%90%E5%AF%A1%E6%8C%82%E8%A4%82%E5%8D%A6%E8%AF%96%E5%91%B1%E6%A0%9D%E9%B8%B9%22%2C%22guai%22%3A%22%E4%B9%96%E6%8B%90%E6%80%AA%E5%93%99%22%2C%22guan%22%3A%22%E6%A3%BA%E5%85%B3%E5%AE%98%E5%86%A0%E8%A7%82%E7%AE%A1%E9%A6%86%E7%BD%90%E6%83%AF%E7%81%8C%E8%B4%AF%E5%80%8C%E8%8E%9E%E6%8E%BC%E6%B6%AB%E7%9B%A5%E9%B9%B3%E9%B3%8F%22%2C%22guang%22%3A%22%E5%85%89%E5%B9%BF%E9%80%9B%E7%8A%B7%E6%A1%84%E8%83%B1%E7%96%92%22%2C%22gui%22%3A%22%E7%91%B0%E8%A7%84%E5%9C%AD%E7%A1%85%E5%BD%92%E9%BE%9F%E9%97%BA%E8%BD%A8%E9%AC%BC%E8%AF%A1%E7%99%B8%E6%A1%82%E6%9F%9C%E8%B7%AA%E8%B4%B5%E5%88%BD%E5%8C%A6%E5%88%BF%E5%BA%8B%E5%AE%84%E5%A6%AB%E6%A1%A7%E7%82%85%E6%99%B7%E7%9A%88%E7%B0%8B%E9%B2%91%E9%B3%9C%22%2C%22gun%22%3A%22%E8%BE%8A%E6%BB%9A%E6%A3%8D%E4%B8%A8%E8%A1%AE%E7%BB%B2%E7%A3%99%E9%B2%A7%22%2C%22guo%22%3A%22%E9%94%85%E9%83%AD%E5%9B%BD%E6%9E%9C%E8%A3%B9%E8%BF%87%E9%A6%98%E8%A0%83%E5%9F%9A%E6%8E%B4%E5%91%99%E5%9B%97%E5%B8%BC%E5%B4%9E%E7%8C%93%E6%A4%81%E8%99%A2%E9%94%9E%E8%81%92%E8%9C%AE%E8%9C%BE%E8%9D%88%22%2C%22ha%22%3A%22%E5%93%88%22%2C%22hai%22%3A%22%E9%AA%B8%E5%AD%A9%E6%B5%B7%E6%B0%A6%E4%BA%A5%E5%AE%B3%E9%AA%87%E5%92%B4%E5%97%A8%E9%A2%8F%E9%86%A2%22%2C%22han%22%3A%22%E9%85%A3%E6%86%A8%E9%82%AF%E9%9F%A9%E5%90%AB%E6%B6%B5%E5%AF%92%E5%87%BD%E5%96%8A%E7%BD%95%E7%BF%B0%E6%92%BC%E6%8D%8D%E6%97%B1%E6%86%BE%E6%82%8D%E7%84%8A%E6%B1%97%E6%B1%89%E9%82%97%E8%8F%A1%E6%92%96%E9%98%9A%E7%80%9A%E6%99%97%E7%84%93%E9%A2%94%E8%9A%B6%E9%BC%BE%22%2C%22hen%22%3A%22%E5%A4%AF%E7%97%95%E5%BE%88%E7%8B%A0%E6%81%A8%22%2C%22hang%22%3A%22%E6%9D%AD%E8%88%AA%E6%B2%86%E7%BB%97%E7%8F%A9%E6%A1%81%22%2C%22hao%22%3A%22%E5%A3%95%E5%9A%8E%E8%B1%AA%E6%AF%AB%E9%83%9D%E5%A5%BD%E8%80%97%E5%8F%B7%E6%B5%A9%E8%96%85%E5%97%A5%E5%9A%86%E6%BF%A0%E7%81%8F%E6%98%8A%E7%9A%93%E9%A2%A2%E8%9A%9D%22%2C%22he%22%3A%22%E5%91%B5%E5%96%9D%E8%8D%B7%E8%8F%8F%E6%A0%B8%E7%A6%BE%E5%92%8C%E4%BD%95%E5%90%88%E7%9B%92%E8%B2%89%E9%98%82%E6%B2%B3%E6%B6%B8%E8%B5%AB%E8%A4%90%E9%B9%A4%E8%B4%BA%E8%AF%83%E5%8A%BE%E5%A3%91%E8%97%BF%E5%97%91%E5%97%AC%E9%98%96%E7%9B%8D%E8%9A%B5%E7%BF%AE%22%2C%22hei%22%3A%22%E5%98%BF%E9%BB%91%22%2C%22heng%22%3A%22%E5%93%BC%E4%BA%A8%E6%A8%AA%E8%A1%A1%E6%81%92%E8%A8%87%E8%98%85%22%2C%22hong%22%3A%22%E8%BD%B0%E5%93%84%E7%83%98%E8%99%B9%E9%B8%BF%E6%B4%AA%E5%AE%8F%E5%BC%98%E7%BA%A2%E9%BB%89%E8%AE%A7%E8%8D%AD%E8%96%A8%E9%97%B3%E6%B3%93%22%2C%22hou%22%3A%22%E5%96%89%E4%BE%AF%E7%8C%B4%E5%90%BC%E5%8E%9A%E5%80%99%E5%90%8E%E5%A0%A0%E5%BE%8C%E9%80%85%E7%98%8A%E7%AF%8C%E7%B3%87%E9%B2%8E%E9%AA%BA%22%2C%22hu%22%3A%22%E5%91%BC%E4%B9%8E%E5%BF%BD%E7%91%9A%E5%A3%B6%E8%91%AB%E8%83%A1%E8%9D%B4%E7%8B%90%E7%B3%8A%E6%B9%96%E5%BC%A7%E8%99%8E%E5%94%AC%E6%8A%A4%E4%BA%92%E6%B2%AA%E6%88%B7%E5%86%B1%E5%94%BF%E5%9B%AB%E5%B2%B5%E7%8C%A2%E6%80%99%E6%83%9A%E6%B5%92%E6%BB%B9%E7%90%A5%E6%A7%B2%E8%BD%B7%E8%A7%B3%E7%83%80%E7%85%B3%E6%88%BD%E6%89%88%E7%A5%9C%E9%B9%95%E9%B9%B1%E7%AC%8F%E9%86%90%E6%96%9B%22%2C%22hua%22%3A%22%E8%8A%B1%E5%93%97%E5%8D%8E%E7%8C%BE%E6%BB%91%E7%94%BB%E5%88%92%E5%8C%96%E8%AF%9D%E5%8A%90%E6%B5%8D%E9%AA%85%E6%A1%A6%E9%93%A7%E7%A8%9E%22%2C%22huai%22%3A%22%E6%A7%90%E5%BE%8A%E6%80%80%E6%B7%AE%E5%9D%8F%E8%BF%98%E8%B8%9D%22%2C%22huan%22%3A%22%E6%AC%A2%E7%8E%AF%E6%A1%93%E7%BC%93%E6%8D%A2%E6%82%A3%E5%94%A4%E7%97%AA%E8%B1%A2%E7%84%95%E6%B6%A3%E5%AE%A6%E5%B9%BB%E9%83%87%E5%A5%82%E5%9E%B8%E6%93%90%E5%9C%9C%E6%B4%B9%E6%B5%A3%E6%BC%B6%E5%AF%B0%E9%80%AD%E7%BC%B3%E9%94%BE%E9%B2%A9%E9%AC%9F%22%2C%22huang%22%3A%22%E8%8D%92%E6%85%8C%E9%BB%84%E7%A3%BA%E8%9D%97%E7%B0%A7%E7%9A%87%E5%87%B0%E6%83%B6%E7%85%8C%E6%99%83%E5%B9%8C%E6%81%8D%E8%B0%8E%E9%9A%8D%E5%BE%A8%E6%B9%9F%E6%BD%A2%E9%81%91%E7%92%9C%E8%82%93%E7%99%80%E8%9F%A5%E7%AF%81%E9%B3%87%22%2C%22hui%22%3A%22%E7%81%B0%E6%8C%A5%E8%BE%89%E5%BE%BD%E6%81%A2%E8%9B%94%E5%9B%9E%E6%AF%81%E6%82%94%E6%85%A7%E5%8D%89%E6%83%A0%E6%99%A6%E8%B4%BF%E7%A7%BD%E4%BC%9A%E7%83%A9%E6%B1%87%E8%AE%B3%E8%AF%B2%E7%BB%98%E8%AF%99%E8%8C%B4%E8%8D%9F%E8%95%99%E5%93%95%E5%96%99%E9%9A%B3%E6%B4%84%E5%BD%97%E7%BC%8B%E7%8F%B2%E6%99%96%E6%81%9A%E8%99%BA%E8%9F%AA%E9%BA%BE%22%2C%22hun%22%3A%22%E8%8D%A4%E6%98%8F%E5%A9%9A%E9%AD%82%E6%B5%91%E6%B7%B7%E8%AF%A8%E9%A6%84%E9%98%8D%E6%BA%B7%E7%BC%97%22%2C%22huo%22%3A%22%E8%B1%81%E6%B4%BB%E4%BC%99%E7%81%AB%E8%8E%B7%E6%88%96%E6%83%91%E9%9C%8D%E8%B4%A7%E7%A5%B8%E6%94%89%E5%9A%AF%E5%A4%A5%E9%92%AC%E9%94%AA%E9%95%AC%E8%80%A0%E8%A0%96%22%2C%22ji%22%3A%22%E5%87%BB%E5%9C%BE%E5%9F%BA%E6%9C%BA%E7%95%B8%E7%A8%BD%E7%A7%AF%E7%AE%95%E8%82%8C%E9%A5%A5%E8%BF%B9%E6%BF%80%E8%AE%A5%E9%B8%A1%E5%A7%AC%E7%BB%A9%E7%BC%89%E5%90%89%E6%9E%81%E6%A3%98%E8%BE%91%E7%B1%8D%E9%9B%86%E5%8F%8A%E6%80%A5%E7%96%BE%E6%B1%B2%E5%8D%B3%E5%AB%89%E7%BA%A7%E6%8C%A4%E5%87%A0%E8%84%8A%E5%B7%B1%E8%93%9F%E6%8A%80%E5%86%80%E5%AD%A3%E4%BC%8E%E7%A5%AD%E5%89%82%E6%82%B8%E6%B5%8E%E5%AF%84%E5%AF%82%E8%AE%A1%E8%AE%B0%E6%97%A2%E5%BF%8C%E9%99%85%E5%A6%93%E7%BB%A7%E7%BA%AA%E5%B1%85%E4%B8%8C%E4%B9%A9%E5%89%9E%E4%BD%B6%E4%BD%B4%E8%84%94%E5%A2%BC%E8%8A%A8%E8%8A%B0%E8%90%81%E8%92%BA%E8%95%BA%E6%8E%8E%E5%8F%BD%E5%92%AD%E5%93%9C%E5%94%A7%E5%B2%8C%E5%B5%B4%E6%B4%8E%E5%BD%90%E5%B1%90%E9%AA%A5%E7%95%BF%E7%8E%91%E6%A5%AB%E6%AE%9B%E6%88%9F%E6%88%A2%E8%B5%8D%E8%A7%8A%E7%8A%84%E9%BD%91%E7%9F%B6%E7%BE%81%E5%B5%87%E7%A8%B7%E7%98%A0%E7%98%B5%E8%99%AE%E7%AC%88%E7%AC%84%E6%9A%A8%E8%B7%BB%E8%B7%BD%E9%9C%81%E9%B2%9A%E9%B2%AB%E9%AB%BB%E9%BA%82%22%2C%22jia%22%3A%22%E5%98%89%E6%9E%B7%E5%A4%B9%E4%BD%B3%E5%AE%B6%E5%8A%A0%E8%8D%9A%E9%A2%8A%E8%B4%BE%E7%94%B2%E9%92%BE%E5%81%87%E7%A8%BC%E4%BB%B7%E6%9E%B6%E9%A9%BE%E5%AB%81%E4%BC%BD%E9%83%8F%E6%8B%AE%E5%B2%AC%E6%B5%83%E8%BF%A6%E7%8F%88%E6%88%9B%E8%83%9B%E6%81%9D%E9%93%97%E9%95%93%E7%97%82%E8%9B%B1%E7%AC%B3%E8%A2%88%E8%B7%8F%22%2C%22jian%22%3A%22%E6%AD%BC%E7%9B%91%E5%9D%9A%E5%B0%96%E7%AC%BA%E9%97%B4%E7%85%8E%E5%85%BC%E8%82%A9%E8%89%B0%E5%A5%B8%E7%BC%84%E8%8C%A7%E6%A3%80%E6%9F%AC%E7%A2%B1%E7%A1%B7%E6%8B%A3%E6%8D%A1%E7%AE%80%E4%BF%AD%E5%89%AA%E5%87%8F%E8%8D%90%E6%A7%9B%E9%89%B4%E8%B7%B5%E8%B4%B1%E8%A7%81%E9%94%AE%E7%AE%AD%E4%BB%B6%E5%81%A5%E8%88%B0%E5%89%91%E9%A5%AF%E6%B8%90%E6%BA%85%E6%B6%A7%E5%BB%BA%E5%83%AD%E8%B0%8F%E8%B0%AB%E8%8F%85%E8%92%B9%E6%90%9B%E5%9B%9D%E6%B9%94%E8%B9%87%E8%AC%87%E7%BC%A3%E6%9E%A7%E6%9F%99%E6%A5%97%E6%88%8B%E6%88%AC%E7%89%AE%E7%8A%8D%E6%AF%BD%E8%85%B1%E7%9D%91%E9%94%8F%E9%B9%A3%E8%A3%A5%E7%AC%95%E7%AE%B4%E7%BF%A6%E8%B6%BC%E8%B8%BA%E9%B2%A3%E9%9E%AF%22%2C%22jiang%22%3A%22%E5%83%B5%E5%A7%9C%E5%B0%86%E6%B5%86%E6%B1%9F%E7%96%86%E8%92%8B%E6%A1%A8%E5%A5%96%E8%AE%B2%E5%8C%A0%E9%85%B1%E9%99%8D%E8%8C%B3%E6%B4%9A%E7%BB%9B%E7%BC%B0%E7%8A%9F%E7%A4%93%E8%80%A9%E7%B3%A8%E8%B1%87%22%2C%22jiao%22%3A%22%E8%95%89%E6%A4%92%E7%A4%81%E7%84%A6%E8%83%B6%E4%BA%A4%E9%83%8A%E6%B5%87%E9%AA%84%E5%A8%87%E5%9A%BC%E6%90%85%E9%93%B0%E7%9F%AB%E4%BE%A5%E8%84%9A%E7%8B%A1%E8%A7%92%E9%A5%BA%E7%BC%B4%E7%BB%9E%E5%89%BF%E6%95%99%E9%85%B5%E8%BD%BF%E8%BE%83%E5%8F%AB%E4%BD%BC%E5%83%AC%E8%8C%AD%E6%8C%A2%E5%99%8D%E5%B3%A4%E5%BE%BC%E5%A7%A3%E7%BA%9F%E6%95%AB%E7%9A%8E%E9%B9%AA%E8%9B%9F%E9%86%AE%E8%B7%A4%E9%B2%9B%22%2C%22jie%22%3A%22%E7%AA%96%E6%8F%AD%E6%8E%A5%E7%9A%86%E7%A7%B8%E8%A1%97%E9%98%B6%E6%88%AA%E5%8A%AB%E8%8A%82%E6%A1%94%E6%9D%B0%E6%8D%B7%E7%9D%AB%E7%AB%AD%E6%B4%81%E7%BB%93%E8%A7%A3%E5%A7%90%E6%88%92%E8%97%89%E8%8A%A5%E7%95%8C%E5%80%9F%E4%BB%8B%E7%96%A5%E8%AF%AB%E5%B1%8A%E5%81%88%E8%AE%A6%E8%AF%98%E5%96%88%E5%97%9F%E7%8D%AC%E5%A9%95%E5%AD%91%E6%A1%80%E7%8D%92%E7%A2%A3%E9%94%B4%E7%96%96%E8%A2%B7%E9%A2%89%E8%9A%A7%E7%BE%AF%E9%B2%92%E9%AA%B1%E9%AB%AB%22%2C%22jin%22%3A%22%E5%B7%BE%E7%AD%8B%E6%96%A4%E9%87%91%E4%BB%8A%E6%B4%A5%E8%A5%9F%E7%B4%A7%E9%94%A6%E4%BB%85%E8%B0%A8%E8%BF%9B%E9%9D%B3%E6%99%8B%E7%A6%81%E8%BF%91%E7%83%AC%E6%B5%B8%E5%B0%BD%E5%8D%BA%E8%8D%A9%E5%A0%87%E5%99%A4%E9%A6%91%E5%BB%91%E5%A6%97%E7%BC%99%E7%91%BE%E6%A7%BF%E8%B5%86%E8%A7%90%E9%92%85%E9%94%93%E8%A1%BF%E7%9F%9C%22%2C%22jing%22%3A%22%E5%8A%B2%E8%8D%86%E5%85%A2%E8%8C%8E%E7%9D%9B%E6%99%B6%E9%B2%B8%E4%BA%AC%E6%83%8A%E7%B2%BE%E7%B2%B3%E7%BB%8F%E4%BA%95%E8%AD%A6%E6%99%AF%E9%A2%88%E9%9D%99%E5%A2%83%E6%95%AC%E9%95%9C%E5%BE%84%E7%97%89%E9%9D%96%E7%AB%9F%E7%AB%9E%E5%87%80%E5%88%AD%E5%84%86%E9%98%B1%E8%8F%81%E7%8D%8D%E6%86%AC%E6%B3%BE%E8%BF%B3%E5%BC%AA%E5%A9%A7%E8%82%BC%E8%83%AB%E8%85%88%E6%97%8C%22%2C%22jiong%22%3A%22%E7%82%AF%E7%AA%98%E5%86%82%E8%BF%A5%E6%89%83%22%2C%22jiu%22%3A%22%E6%8F%AA%E7%A9%B6%E7%BA%A0%E7%8E%96%E9%9F%AD%E4%B9%85%E7%81%B8%E4%B9%9D%E9%85%92%E5%8E%A9%E6%95%91%E6%97%A7%E8%87%BC%E8%88%85%E5%92%8E%E5%B0%B1%E7%96%9A%E5%83%A6%E5%95%BE%E9%98%84%E6%9F%A9%E6%A1%95%E9%B9%AB%E8%B5%B3%E9%AC%8F%22%2C%22ju%22%3A%22%E9%9E%A0%E6%8B%98%E7%8B%99%E7%96%BD%E9%A9%B9%E8%8F%8A%E5%B1%80%E5%92%80%E7%9F%A9%E4%B8%BE%E6%B2%AE%E8%81%9A%E6%8B%92%E6%8D%AE%E5%B7%A8%E5%85%B7%E8%B7%9D%E8%B8%9E%E9%94%AF%E4%BF%B1%E5%8F%A5%E6%83%A7%E7%82%AC%E5%89%A7%E5%80%A8%E8%AE%B5%E8%8B%A3%E8%8B%B4%E8%8E%92%E6%8E%AC%E9%81%BD%E5%B1%A6%E7%90%9A%E6%9E%B8%E6%A4%90%E6%A6%98%E6%A6%89%E6%A9%98%E7%8A%8B%E9%A3%93%E9%92%9C%E9%94%94%E7%AA%AD%E8%A3%BE%E8%B6%84%E9%86%B5%E8%B8%BD%E9%BE%83%E9%9B%8E%E9%9E%AB%22%2C%22juan%22%3A%22%E6%8D%90%E9%B9%83%E5%A8%9F%E5%80%A6%E7%9C%B7%E5%8D%B7%E7%BB%A2%E9%84%84%E7%8B%B7%E6%B6%93%E6%A1%8A%E8%A0%B2%E9%94%A9%E9%95%8C%E9%9A%BD%22%2C%22jue%22%3A%22%E6%92%85%E6%94%AB%E6%8A%89%E6%8E%98%E5%80%94%E7%88%B5%E8%A7%89%E5%86%B3%E8%AF%80%E7%BB%9D%E5%8E%A5%E5%8A%82%E8%B0%B2%E7%9F%8D%E8%95%A8%E5%99%98%E5%B4%9B%E7%8D%97%E5%AD%93%E7%8F%8F%E6%A1%B7%E6%A9%9B%E7%88%9D%E9%95%A2%E8%B9%B6%E8%A7%96%22%2C%22jun%22%3A%22%E5%9D%87%E8%8F%8C%E9%92%A7%E5%86%9B%E5%90%9B%E5%B3%BB%E4%BF%8A%E7%AB%A3%E6%B5%9A%E9%83%A1%E9%AA%8F%E6%8D%83%E7%8B%BB%E7%9A%B2%E7%AD%A0%E9%BA%87%22%2C%22ka%22%3A%22%E5%96%80%E5%92%96%E5%8D%A1%E4%BD%A7%E5%92%94%E8%83%A9%22%2C%22ke%22%3A%22%E5%92%AF%E5%9D%B7%E8%8B%9B%E6%9F%AF%E6%A3%B5%E7%A3%95%E9%A2%97%E7%A7%91%E5%A3%B3%E5%92%B3%E5%8F%AF%E6%B8%B4%E5%85%8B%E5%88%BB%E5%AE%A2%E8%AF%BE%E5%B2%A2%E6%81%AA%E6%BA%98%E9%AA%92%E7%BC%82%E7%8F%82%E8%BD%B2%E6%B0%AA%E7%9E%8C%E9%92%B6%E7%96%B4%E7%AA%A0%E8%9D%8C%E9%AB%81%22%2C%22kai%22%3A%22%E5%BC%80%E6%8F%A9%E6%A5%B7%E5%87%AF%E6%85%A8%E5%89%80%E5%9E%B2%E8%92%88%E5%BF%BE%E6%81%BA%E9%93%A0%E9%94%8E%22%2C%22kan%22%3A%22%E5%88%8A%E5%A0%AA%E5%8B%98%E5%9D%8E%E7%A0%8D%E7%9C%8B%E4%BE%83%E5%87%B5%E8%8E%B0%E8%8E%B6%E6%88%A1%E9%BE%9B%E7%9E%B0%22%2C%22kang%22%3A%22%E5%BA%B7%E6%85%B7%E7%B3%A0%E6%89%9B%E6%8A%97%E4%BA%A2%E7%82%95%E5%9D%91%E4%BC%89%E9%97%B6%E9%92%AA%22%2C%22kao%22%3A%22%E8%80%83%E6%8B%B7%E7%83%A4%E9%9D%A0%E5%B0%BB%E6%A0%B2%E7%8A%92%E9%93%90%22%2C%22ken%22%3A%22%E8%82%AF%E5%95%83%E5%9E%A6%E6%81%B3%E5%9E%A0%E8%A3%89%E9%A2%80%22%2C%22keng%22%3A%22%E5%90%AD%E5%BF%90%E9%93%BF%22%2C%22kong%22%3A%22%E7%A9%BA%E6%81%90%E5%AD%94%E6%8E%A7%E5%80%A5%E5%B4%86%E7%AE%9C%22%2C%22kou%22%3A%22%E6%8A%A0%E5%8F%A3%E6%89%A3%E5%AF%87%E8%8A%A4%E8%94%BB%E5%8F%A9%E7%9C%8D%E7%AD%98%22%2C%22ku%22%3A%22%E6%9E%AF%E5%93%AD%E7%AA%9F%E8%8B%A6%E9%85%B7%E5%BA%93%E8%A3%A4%E5%88%B3%E5%A0%80%E5%96%BE%E7%BB%94%E9%AA%B7%22%2C%22kua%22%3A%22%E5%A4%B8%E5%9E%AE%E6%8C%8E%E8%B7%A8%E8%83%AF%E4%BE%89%22%2C%22kuai%22%3A%22%E5%9D%97%E7%AD%B7%E4%BE%A9%E5%BF%AB%E8%92%AF%E9%83%90%E8%92%89%E7%8B%AF%E8%84%8D%22%2C%22kuan%22%3A%22%E5%AE%BD%E6%AC%BE%E9%AB%8B%22%2C%22kuang%22%3A%22%E5%8C%A1%E7%AD%90%E7%8B%82%E6%A1%86%E7%9F%BF%E7%9C%B6%E6%97%B7%E5%86%B5%E8%AF%93%E8%AF%B3%E9%82%9D%E5%9C%B9%E5%A4%BC%E5%93%90%E7%BA%A9%E8%B4%B6%22%2C%22kui%22%3A%22%E4%BA%8F%E7%9B%94%E5%B2%BF%E7%AA%A5%E8%91%B5%E5%A5%8E%E9%AD%81%E5%82%80%E9%A6%88%E6%84%A7%E6%BA%83%E9%A6%97%E5%8C%AE%E5%A4%94%E9%9A%97%E6%8F%86%E5%96%B9%E5%96%9F%E6%82%9D%E6%84%A6%E9%98%95%E9%80%B5%E6%9A%8C%E7%9D%BD%E8%81%A9%E8%9D%B0%E7%AF%91%E8%87%BE%E8%B7%AC%22%2C%22kun%22%3A%22%E5%9D%A4%E6%98%86%E6%8D%86%E5%9B%B0%E6%82%83%E9%98%83%E7%90%A8%E9%94%9F%E9%86%8C%E9%B2%B2%E9%AB%A1%22%2C%22kuo%22%3A%22%E6%8B%AC%E6%89%A9%E5%BB%93%E9%98%94%E8%9B%9E%22%2C%22la%22%3A%22%E5%9E%83%E6%8B%89%E5%96%87%E8%9C%A1%E8%85%8A%E8%BE%A3%E5%95%A6%E5%89%8C%E6%91%BA%E9%82%8B%E6%97%AF%E7%A0%AC%E7%98%8C%22%2C%22lai%22%3A%22%E8%8E%B1%E6%9D%A5%E8%B5%96%E5%B4%83%E5%BE%95%E6%B6%9E%E6%BF%91%E8%B5%89%E7%9D%90%E9%93%BC%E7%99%9E%E7%B1%81%22%2C%22lan%22%3A%22%E8%93%9D%E5%A9%AA%E6%A0%8F%E6%8B%A6%E7%AF%AE%E9%98%91%E5%85%B0%E6%BE%9C%E8%B0%B0%E6%8F%BD%E8%A7%88%E6%87%92%E7%BC%86%E7%83%82%E6%BB%A5%E5%95%89%E5%B2%9A%E6%87%94%E6%BC%A4%E6%A6%84%E6%96%93%E7%BD%B1%E9%95%A7%E8%A4%B4%22%2C%22lang%22%3A%22%E7%90%85%E6%A6%94%E7%8B%BC%E5%BB%8A%E9%83%8E%E6%9C%97%E6%B5%AA%E8%8E%A8%E8%92%97%E5%95%B7%E9%98%86%E9%94%92%E7%A8%82%E8%9E%82%22%2C%22lao%22%3A%22%E6%8D%9E%E5%8A%B3%E7%89%A2%E8%80%81%E4%BD%AC%E5%A7%A5%E9%85%AA%E7%83%99%E6%B6%9D%E5%94%A0%E5%B4%82%E6%A0%B3%E9%93%91%E9%93%B9%E7%97%A8%E9%86%AA%22%2C%22le%22%3A%22%E5%8B%92%E4%B9%90%E8%82%8B%E4%BB%82%E5%8F%BB%E5%98%9E%E6%B3%90%E9%B3%93%22%2C%22lei%22%3A%22%E9%9B%B7%E9%95%AD%E8%95%BE%E7%A3%8A%E7%B4%AF%E5%84%A1%E5%9E%92%E6%93%82%E7%B1%BB%E6%B3%AA%E7%BE%B8%E8%AF%94%E8%8D%BD%E5%92%A7%E6%BC%AF%E5%AB%98%E7%BC%A7%E6%AA%91%E8%80%92%E9%85%B9%22%2C%22ling%22%3A%22%E6%A3%B1%E5%86%B7%E6%8B%8E%E7%8E%B2%E8%8F%B1%E9%9B%B6%E9%BE%84%E9%93%83%E4%BC%B6%E7%BE%9A%E5%87%8C%E7%81%B5%E9%99%B5%E5%B2%AD%E9%A2%86%E5%8F%A6%E4%BB%A4%E9%85%83%E5%A1%84%E8%8B%93%E5%91%A4%E5%9B%B9%E6%B3%A0%E7%BB%AB%E6%9F%83%E6%A3%82%E7%93%B4%E8%81%86%E8%9B%89%E7%BF%8E%E9%B2%AE%22%2C%22leng%22%3A%22%E6%A5%9E%E6%84%A3%22%2C%22li%22%3A%22%E5%8E%98%E6%A2%A8%E7%8A%81%E9%BB%8E%E7%AF%B1%E7%8B%B8%E7%A6%BB%E6%BC%93%E7%90%86%E6%9D%8E%E9%87%8C%E9%B2%A4%E7%A4%BC%E8%8E%89%E8%8D%94%E5%90%8F%E6%A0%97%E4%B8%BD%E5%8E%89%E5%8A%B1%E7%A0%BE%E5%8E%86%E5%88%A9%E5%82%88%E4%BE%8B%E4%BF%90%E7%97%A2%E7%AB%8B%E7%B2%92%E6%B2%A5%E9%9A%B6%E5%8A%9B%E7%92%83%E5%93%A9%E4%BF%AA%E4%BF%9A%E9%83%A6%E5%9D%9C%E8%8B%88%E8%8E%85%E8%93%A0%E8%97%9C%E6%8D%A9%E5%91%96%E5%94%B3%E5%96%B1%E7%8C%81%E6%BA%A7%E6%BE%A7%E9%80%A6%E5%A8%8C%E5%AB%A0%E9%AA%8A%E7%BC%A1%E7%8F%9E%E6%9E%A5%E6%A0%8E%E8%BD%B9%E6%88%BE%E7%A0%BA%E8%A9%88%E7%BD%B9%E9%94%82%E9%B9%82%E7%96%A0%E7%96%AC%E8%9B%8E%E8%9C%8A%E8%A0%A1%E7%AC%A0%E7%AF%A5%E7%B2%9D%E9%86%B4%E8%B7%9E%E9%9B%B3%E9%B2%A1%E9%B3%A2%E9%BB%A7%22%2C%22lian%22%3A%22%E4%BF%A9%E8%81%94%E8%8E%B2%E8%BF%9E%E9%95%B0%E5%BB%89%E6%80%9C%E6%B6%9F%E5%B8%98%E6%95%9B%E8%84%B8%E9%93%BE%E6%81%8B%E7%82%BC%E7%BB%83%E6%8C%9B%E8%94%B9%E5%A5%81%E6%BD%8B%E6%BF%82%E5%A8%88%E7%90%8F%E6%A5%9D%E6%AE%93%E8%87%81%E8%86%A6%E8%A3%A2%E8%A0%8A%E9%B2%A2%22%2C%22liang%22%3A%22%E7%B2%AE%E5%87%89%E6%A2%81%E7%B2%B1%E8%89%AF%E4%B8%A4%E8%BE%86%E9%87%8F%E6%99%BE%E4%BA%AE%E8%B0%85%E5%A2%9A%E6%A4%8B%E8%B8%89%E9%9D%93%E9%AD%89%22%2C%22liao%22%3A%22%E6%92%A9%E8%81%8A%E5%83%9A%E7%96%97%E7%87%8E%E5%AF%A5%E8%BE%BD%E6%BD%A6%E4%BA%86%E6%92%82%E9%95%A3%E5%BB%96%E6%96%99%E8%93%BC%E5%B0%A5%E5%98%B9%E7%8D%A0%E5%AF%AE%E7%BC%AD%E9%92%8C%E9%B9%A9%E8%80%A2%22%2C%22lie%22%3A%22%E5%88%97%E8%A3%82%E7%83%88%E5%8A%A3%E7%8C%8E%E5%86%BD%E5%9F%92%E6%B4%8C%E8%B6%94%E8%BA%90%E9%AC%A3%22%2C%22lin%22%3A%22%E7%90%B3%E6%9E%97%E7%A3%B7%E9%9C%96%E4%B8%B4%E9%82%BB%E9%B3%9E%E6%B7%8B%E5%87%9B%E8%B5%81%E5%90%9D%E8%94%BA%E5%B6%99%E5%BB%AA%E9%81%B4%E6%AA%A9%E8%BE%9A%E7%9E%B5%E7%B2%BC%E8%BA%8F%E9%BA%9F%22%2C%22liu%22%3A%22%E6%BA%9C%E7%90%89%E6%A6%B4%E7%A1%AB%E9%A6%8F%E7%95%99%E5%88%98%E7%98%A4%E6%B5%81%E6%9F%B3%E5%85%AD%E6%8A%A1%E5%81%BB%E8%92%8C%E6%B3%96%E6%B5%8F%E9%81%9B%E9%AA%9D%E7%BB%BA%E6%97%92%E7%86%98%E9%94%8D%E9%95%8F%E9%B9%A8%E9%8E%8F%22%2C%22long%22%3A%22%E9%BE%99%E8%81%8B%E5%92%99%E7%AC%BC%E7%AA%BF%E9%9A%86%E5%9E%84%E6%8B%A2%E9%99%87%E5%BC%84%E5%9E%85%E8%8C%8F%E6%B3%B7%E7%8F%91%E6%A0%8A%E8%83%A7%E7%A0%BB%E7%99%83%22%2C%22lou%22%3A%22%E6%A5%BC%E5%A8%84%E6%90%82%E7%AF%93%E6%BC%8F%E9%99%8B%E5%96%BD%E5%B5%9D%E9%95%82%E7%98%98%E8%80%A7%E8%9D%BC%E9%AB%85%22%2C%22lu%22%3A%22%E8%8A%A6%E5%8D%A2%E9%A2%85%E5%BA%90%E7%82%89%E6%8E%B3%E5%8D%A4%E8%99%8F%E9%B2%81%E9%BA%93%E7%A2%8C%E9%9C%B2%E8%B7%AF%E8%B5%82%E9%B9%BF%E6%BD%9E%E7%A6%84%E5%BD%95%E9%99%86%E6%88%AE%E5%9E%86%E6%91%85%E6%92%B8%E5%99%9C%E6%B3%B8%E6%B8%8C%E6%BC%89%E7%92%90%E6%A0%8C%E6%A9%B9%E8%BD%B3%E8%BE%82%E8%BE%98%E6%B0%87%E8%83%AA%E9%95%A5%E9%B8%AC%E9%B9%AD%E7%B0%8F%E8%88%BB%E9%B2%88%22%2C%22lv%22%3A%22%E9%A9%B4%E5%90%95%E9%93%9D%E4%BE%A3%E6%97%85%E5%B1%A5%E5%B1%A1%E7%BC%95%E8%99%91%E6%B0%AF%E5%BE%8B%E7%8E%87%E6%BB%A4%E7%BB%BF%E6%8D%8B%E9%97%BE%E6%A6%88%E8%86%82%E7%A8%86%E8%A4%9B%22%2C%22luan%22%3A%22%E5%B3%A6%E5%AD%AA%E6%BB%A6%E5%8D%B5%E4%B9%B1%E6%A0%BE%E9%B8%BE%E9%8A%AE%22%2C%22lue%22%3A%22%E6%8E%A0%E7%95%A5%E9%94%8A%22%2C%22lun%22%3A%22%E8%BD%AE%E4%BC%A6%E4%BB%91%E6%B2%A6%E7%BA%B6%E8%AE%BA%E5%9B%B5%22%2C%22luo%22%3A%22%E8%90%9D%E8%9E%BA%E7%BD%97%E9%80%BB%E9%94%A3%E7%AE%A9%E9%AA%A1%E8%A3%B8%E8%90%BD%E6%B4%9B%E9%AA%86%E7%BB%9C%E5%80%AE%E8%8D%A6%E6%91%9E%E7%8C%A1%E6%B3%BA%E6%A4%A4%E8%84%B6%E9%95%99%E7%98%B0%E9%9B%92%22%2C%22ma%22%3A%22%E5%A6%88%E9%BA%BB%E7%8E%9B%E7%A0%81%E8%9A%82%E9%A9%AC%E9%AA%82%E5%98%9B%E5%90%97%E5%94%9B%E7%8A%B8%E5%AC%B7%E6%9D%A9%E9%BA%BD%22%2C%22mai%22%3A%22%E5%9F%8B%E4%B9%B0%E9%BA%A6%E5%8D%96%E8%BF%88%E8%84%89%E5%8A%A2%E8%8D%AC%E5%92%AA%E9%9C%BE%22%2C%22man%22%3A%22%E7%9E%92%E9%A6%92%E8%9B%AE%E6%BB%A1%E8%94%93%E6%9B%BC%E6%85%A2%E6%BC%AB%E8%B0%A9%E5%A2%81%E5%B9%94%E7%BC%A6%E7%86%B3%E9%95%98%E9%A2%9F%E8%9E%A8%E9%B3%97%E9%9E%94%22%2C%22mang%22%3A%22%E8%8A%92%E8%8C%AB%E7%9B%B2%E5%BF%99%E8%8E%BD%E9%82%99%E6%BC%AD%E6%9C%A6%E7%A1%AD%E8%9F%92%22%2C%22meng%22%3A%22%E6%B0%93%E8%90%8C%E8%92%99%E6%AA%AC%E7%9B%9F%E9%94%B0%E7%8C%9B%E6%A2%A6%E5%AD%9F%E5%8B%90%E7%94%8D%E7%9E%A2%E6%87%B5%E7%A4%9E%E8%99%BB%E8%9C%A2%E8%A0%93%E8%89%8B%E8%89%A8%E9%BB%BE%22%2C%22miao%22%3A%22%E7%8C%AB%E8%8B%97%E6%8F%8F%E7%9E%84%E8%97%90%E7%A7%92%E6%B8%BA%E5%BA%99%E5%A6%99%E5%96%B5%E9%82%88%E7%BC%88%E7%BC%AA%E6%9D%AA%E6%B7%BC%E7%9C%87%E9%B9%8B%E8%9C%B1%22%2C%22mao%22%3A%22%E8%8C%85%E9%94%9A%E6%AF%9B%E7%9F%9B%E9%93%86%E5%8D%AF%E8%8C%82%E5%86%92%E5%B8%BD%E8%B2%8C%E8%B4%B8%E4%BE%94%E8%A2%A4%E5%8B%96%E8%8C%86%E5%B3%81%E7%91%81%E6%98%B4%E7%89%A6%E8%80%84%E6%97%84%E6%87%8B%E7%9E%80%E8%9B%91%E8%9D%A5%E8%9F%8A%E9%AB%A6%22%2C%22me%22%3A%22%E4%B9%88%22%2C%22mei%22%3A%22%E7%8E%AB%E6%9E%9A%E6%A2%85%E9%85%B6%E9%9C%89%E7%85%A4%E6%B2%A1%E7%9C%89%E5%AA%92%E9%95%81%E6%AF%8F%E7%BE%8E%E6%98%A7%E5%AF%90%E5%A6%B9%E5%AA%9A%E5%9D%B6%E8%8E%93%E5%B5%8B%E7%8C%B8%E6%B5%BC%E6%B9%84%E6%A5%A3%E9%95%85%E9%B9%9B%E8%A2%82%E9%AD%85%22%2C%22men%22%3A%22%E9%97%A8%E9%97%B7%E4%BB%AC%E6%89%AA%E7%8E%9F%E7%84%96%E6%87%91%E9%92%94%22%2C%22mi%22%3A%22%E7%9C%AF%E9%86%9A%E9%9D%A1%E7%B3%9C%E8%BF%B7%E8%B0%9C%E5%BC%A5%E7%B1%B3%E7%A7%98%E8%A7%85%E6%B3%8C%E8%9C%9C%E5%AF%86%E5%B9%82%E8%8A%88%E5%86%96%E8%B0%A7%E8%98%BC%E5%98%A7%E7%8C%95%E7%8D%AF%E6%B1%A8%E5%AE%93%E5%BC%AD%E8%84%92%E6%95%89%E7%B3%B8%E7%B8%BB%E9%BA%8B%22%2C%22mian%22%3A%22%E6%A3%89%E7%9C%A0%E7%BB%B5%E5%86%95%E5%85%8D%E5%8B%89%E5%A8%A9%E7%BC%85%E9%9D%A2%E6%B2%94%E6%B9%8E%E8%85%BC%E7%9C%84%22%2C%22mie%22%3A%22%E8%94%91%E7%81%AD%E5%92%A9%E8%A0%9B%E7%AF%BE%22%2C%22min%22%3A%22%E6%B0%91%E6%8A%BF%E7%9A%BF%E6%95%8F%E6%82%AF%E9%97%BD%E8%8B%A0%E5%B2%B7%E9%97%B5%E6%B3%AF%E7%8F%89%22%2C%22ming%22%3A%22%E6%98%8E%E8%9E%9F%E9%B8%A3%E9%93%AD%E5%90%8D%E5%91%BD%E5%86%A5%E8%8C%97%E6%BA%9F%E6%9A%9D%E7%9E%91%E9%85%A9%22%2C%22miu%22%3A%22%E8%B0%AC%22%2C%22mo%22%3A%22%E6%91%B8%E6%91%B9%E8%98%91%E6%A8%A1%E8%86%9C%E7%A3%A8%E6%91%A9%E9%AD%94%E6%8A%B9%E6%9C%AB%E8%8E%AB%E5%A2%A8%E9%BB%98%E6%B2%AB%E6%BC%A0%E5%AF%9E%E9%99%8C%E8%B0%9F%E8%8C%89%E8%93%A6%E9%A6%8D%E5%AB%AB%E9%95%86%E7%A7%A3%E7%98%BC%E8%80%B1%E8%9F%86%E8%B2%8A%E8%B2%98%22%2C%22mou%22%3A%22%E8%B0%8B%E7%89%9F%E6%9F%90%E5%8E%B6%E5%93%9E%E5%A9%BA%E7%9C%B8%E9%8D%AA%22%2C%22mu%22%3A%22%E6%8B%87%E7%89%A1%E4%BA%A9%E5%A7%86%E6%AF%8D%E5%A2%93%E6%9A%AE%E5%B9%95%E5%8B%9F%E6%85%95%E6%9C%A8%E7%9B%AE%E7%9D%A6%E7%89%A7%E7%A9%86%E4%BB%AB%E8%8B%9C%E5%91%92%E6%B2%90%E6%AF%AA%E9%92%BC%22%2C%22na%22%3A%22%E6%8B%BF%E5%93%AA%E5%91%90%E9%92%A0%E9%82%A3%E5%A8%9C%E7%BA%B3%E5%86%85%E6%8D%BA%E8%82%AD%E9%95%8E%E8%A1%B2%E7%AE%AC%22%2C%22nai%22%3A%22%E6%B0%96%E4%B9%83%E5%A5%B6%E8%80%90%E5%A5%88%E9%BC%90%E8%89%BF%E8%90%98%E6%9F%B0%22%2C%22nan%22%3A%22%E5%8D%97%E7%94%B7%E9%9A%BE%E5%9B%8A%E5%96%83%E5%9B%A1%E6%A5%A0%E8%85%A9%E8%9D%BB%E8%B5%A7%22%2C%22nao%22%3A%22%E6%8C%A0%E8%84%91%E6%81%BC%E9%97%B9%E5%AD%AC%E5%9E%B4%E7%8C%B1%E7%91%99%E7%A1%87%E9%93%99%E8%9B%B2%22%2C%22ne%22%3A%22%E6%B7%96%E5%91%A2%E8%AE%B7%22%2C%22nei%22%3A%22%E9%A6%81%22%2C%22nen%22%3A%22%E5%AB%A9%E8%83%BD%E6%9E%98%E6%81%81%22%2C%22ni%22%3A%22%E5%A6%AE%E9%9C%93%E5%80%AA%E6%B3%A5%E5%B0%BC%E6%8B%9F%E4%BD%A0%E5%8C%BF%E8%85%BB%E9%80%86%E6%BA%BA%E4%BC%B2%E5%9D%AD%E7%8C%8A%E6%80%A9%E6%BB%A0%E6%98%B5%E6%97%8E%E7%A5%A2%E6%85%9D%E7%9D%A8%E9%93%8C%E9%B2%B5%22%2C%22nian%22%3A%22%E8%94%AB%E6%8B%88%E5%B9%B4%E7%A2%BE%E6%92%B5%E6%8D%BB%E5%BF%B5%E5%BB%BF%E8%BE%87%E9%BB%8F%E9%B2%87%E9%B2%B6%22%2C%22niang%22%3A%22%E5%A8%98%E9%85%BF%22%2C%22niao%22%3A%22%E9%B8%9F%E5%B0%BF%E8%8C%91%E5%AC%B2%E8%84%B2%E8%A2%85%22%2C%22nie%22%3A%22%E6%8D%8F%E8%81%82%E5%AD%BD%E5%95%AE%E9%95%8A%E9%95%8D%E6%B6%85%E4%B9%9C%E9%99%A7%E8%98%96%E5%97%AB%E8%82%80%E9%A2%9E%E8%87%AC%E8%B9%91%22%2C%22nin%22%3A%22%E6%82%A8%E6%9F%A0%22%2C%22ning%22%3A%22%E7%8B%9E%E5%87%9D%E5%AE%81%E6%8B%A7%E6%B3%9E%E4%BD%9E%E8%93%A5%E5%92%9B%E7%94%AF%E8%81%8D%22%2C%22niu%22%3A%22%E7%89%9B%E6%89%AD%E9%92%AE%E7%BA%BD%E7%8B%83%E5%BF%B8%E5%A6%9E%E8%9A%B4%22%2C%22nong%22%3A%22%E8%84%93%E6%B5%93%E5%86%9C%E4%BE%AC%22%2C%22nu%22%3A%22%E5%A5%B4%E5%8A%AA%E6%80%92%E5%91%B6%E5%B8%91%E5%BC%A9%E8%83%AC%E5%AD%A5%E9%A9%BD%22%2C%22nv%22%3A%22%E5%A5%B3%E6%81%A7%E9%92%95%E8%A1%84%22%2C%22nuan%22%3A%22%E6%9A%96%22%2C%22nuenue%22%3A%22%E8%99%90%22%2C%22nue%22%3A%22%E7%96%9F%E8%B0%91%22%2C%22nuo%22%3A%22%E6%8C%AA%E6%87%A6%E7%B3%AF%E8%AF%BA%E5%82%A9%E6%90%A6%E5%96%8F%E9%94%98%22%2C%22ou%22%3A%22%E5%93%A6%E6%AC%A7%E9%B8%A5%E6%AE%B4%E8%97%95%E5%91%95%E5%81%B6%E6%B2%A4%E6%80%84%E7%93%AF%E8%80%A6%22%2C%22pa%22%3A%22%E5%95%AA%E8%B6%B4%E7%88%AC%E5%B8%95%E6%80%95%E7%90%B6%E8%91%A9%E7%AD%A2%22%2C%22pai%22%3A%22%E6%8B%8D%E6%8E%92%E7%89%8C%E5%BE%98%E6%B9%83%E6%B4%BE%E4%BF%B3%E8%92%8E%22%2C%22pan%22%3A%22%E6%94%80%E6%BD%98%E7%9B%98%E7%A3%90%E7%9B%BC%E7%95%94%E5%88%A4%E5%8F%9B%E7%88%BF%E6%B3%AE%E8%A2%A2%E8%A5%BB%E8%9F%A0%E8%B9%92%22%2C%22pang%22%3A%22%E4%B9%93%E5%BA%9E%E6%97%81%E8%80%AA%E8%83%96%E6%BB%82%E9%80%84%22%2C%22pao%22%3A%22%E6%8A%9B%E5%92%86%E5%88%A8%E7%82%AE%E8%A2%8D%E8%B7%91%E6%B3%A1%E5%8C%8F%E7%8B%8D%E5%BA%96%E8%84%AC%E7%96%B1%22%2C%22pei%22%3A%22%E5%91%B8%E8%83%9A%E5%9F%B9%E8%A3%B4%E8%B5%94%E9%99%AA%E9%85%8D%E4%BD%A9%E6%B2%9B%E6%8E%8A%E8%BE%94%E5%B8%94%E6%B7%A0%E6%97%86%E9%94%AB%E9%86%85%E9%9C%88%22%2C%22pen%22%3A%22%E5%96%B7%E7%9B%86%E6%B9%93%22%2C%22peng%22%3A%22%E7%A0%B0%E6%8A%A8%E7%83%B9%E6%BE%8E%E5%BD%AD%E8%93%AC%E6%A3%9A%E7%A1%BC%E7%AF%B7%E8%86%A8%E6%9C%8B%E9%B9%8F%E6%8D%A7%E7%A2%B0%E5%9D%AF%E5%A0%8B%E5%98%AD%E6%80%A6%E8%9F%9B%22%2C%22pi%22%3A%22%E7%A0%92%E9%9C%B9%E6%89%B9%E6%8A%AB%E5%8A%88%E7%90%B5%E6%AF%97%E5%95%A4%E8%84%BE%E7%96%B2%E7%9A%AE%E5%8C%B9%E7%97%9E%E5%83%BB%E5%B1%81%E8%AD%AC%E4%B8%95%E9%99%B4%E9%82%B3%E9%83%AB%E5%9C%AE%E9%BC%99%E6%93%97%E5%99%BC%E5%BA%80%E5%AA%B2%E7%BA%B0%E6%9E%87%E7%94%93%E7%9D%A5%E7%BD%B4%E9%93%8D%E7%97%A6%E7%99%96%E7%96%8B%E8%9A%8D%E8%B2%94%22%2C%22pian%22%3A%22%E7%AF%87%E5%81%8F%E7%89%87%E9%AA%97%E8%B0%9D%E9%AA%88%E7%8A%8F%E8%83%BC%E8%A4%8A%E7%BF%A9%E8%B9%81%22%2C%22piao%22%3A%22%E9%A3%98%E6%BC%82%E7%93%A2%E7%A5%A8%E5%89%BD%E5%98%8C%E5%AB%96%E7%BC%A5%E6%AE%8D%E7%9E%9F%E8%9E%B5%22%2C%22pie%22%3A%22%E6%92%87%E7%9E%A5%E4%B8%BF%E8%8B%A4%E6%B0%95%22%2C%22pin%22%3A%22%E6%8B%BC%E9%A2%91%E8%B4%AB%E5%93%81%E8%81%98%E6%8B%9A%E5%A7%98%E5%AB%94%E6%A6%80%E7%89%9D%E9%A2%A6%22%2C%22ping%22%3A%22%E4%B9%92%E5%9D%AA%E8%8B%B9%E8%90%8D%E5%B9%B3%E5%87%AD%E7%93%B6%E8%AF%84%E5%B1%8F%E4%BF%9C%E5%A8%89%E6%9E%B0%E9%B2%86%22%2C%22po%22%3A%22%E5%9D%A1%E6%B3%BC%E9%A2%87%E5%A9%86%E7%A0%B4%E9%AD%84%E8%BF%AB%E7%B2%95%E5%8F%B5%E9%84%B1%E6%BA%A5%E7%8F%80%E9%92%8B%E9%92%B7%E7%9A%A4%E7%AC%B8%22%2C%22pou%22%3A%22%E5%89%96%E8%A3%92%E8%B8%A3%22%2C%22pu%22%3A%22%E6%89%91%E9%93%BA%E4%BB%86%E8%8E%86%E8%91%A1%E8%8F%A9%E8%92%B2%E5%9F%94%E6%9C%B4%E5%9C%83%E6%99%AE%E6%B5%A6%E8%B0%B1%E6%9B%9D%E7%80%91%E5%8C%8D%E5%99%97%E6%BF%AE%E7%92%9E%E6%B0%86%E9%95%A4%E9%95%A8%E8%B9%BC%22%2C%22qi%22%3A%22%E6%9C%9F%E6%AC%BA%E6%A0%96%E6%88%9A%E5%A6%BB%E4%B8%83%E5%87%84%E6%BC%86%E6%9F%92%E6%B2%8F%E5%85%B6%E6%A3%8B%E5%A5%87%E6%AD%A7%E7%95%A6%E5%B4%8E%E8%84%90%E9%BD%90%E6%97%97%E7%A5%88%E7%A5%81%E9%AA%91%E8%B5%B7%E5%B2%82%E4%B9%9E%E4%BC%81%E5%90%AF%E5%A5%91%E7%A0%8C%E5%99%A8%E6%B0%94%E8%BF%84%E5%BC%83%E6%B1%BD%E6%B3%A3%E8%AE%AB%E4%BA%9F%E4%BA%93%E5%9C%BB%E8%8A%91%E8%90%8B%E8%91%BA%E5%98%81%E5%B1%BA%E5%B2%90%E6%B1%94%E6%B7%87%E9%AA%90%E7%BB%AE%E7%90%AA%E7%90%A6%E6%9D%9E%E6%A1%A4%E6%A7%AD%E6%AC%B9%E7%A5%BA%E6%86%A9%E7%A2%9B%E8%9B%B4%E8%9C%9E%E7%B6%A6%E7%B6%AE%E8%B6%BF%E8%B9%8A%E9%B3%8D%E9%BA%92%22%2C%22qia%22%3A%22%E6%8E%90%E6%81%B0%E6%B4%BD%E8%91%9C%22%2C%22qian%22%3A%22%E7%89%B5%E6%89%A6%E9%92%8E%E9%93%85%E5%8D%83%E8%BF%81%E7%AD%BE%E4%BB%9F%E8%B0%A6%E4%B9%BE%E9%BB%94%E9%92%B1%E9%92%B3%E5%89%8D%E6%BD%9C%E9%81%A3%E6%B5%85%E8%B0%B4%E5%A0%91%E5%B5%8C%E6%AC%A0%E6%AD%89%E4%BD%A5%E9%98%A1%E8%8A%8A%E8%8A%A1%E8%8D%A8%E6%8E%AE%E5%B2%8D%E6%82%AD%E6%85%8A%E9%AA%9E%E6%90%B4%E8%A4%B0%E7%BC%B1%E6%A4%A0%E8%82%B7%E6%84%86%E9%92%A4%E8%99%94%E7%AE%9D%22%2C%22qiang%22%3A%22%E6%9E%AA%E5%91%9B%E8%85%94%E7%BE%8C%E5%A2%99%E8%94%B7%E5%BC%BA%E6%8A%A2%E5%AB%B1%E6%A8%AF%E6%88%97%E7%82%9D%E9%94%96%E9%94%B5%E9%95%AA%E8%A5%81%E8%9C%A3%E7%BE%9F%E8%B7%AB%E8%B7%84%22%2C%22qiao%22%3A%22%E6%A9%87%E9%94%B9%E6%95%B2%E6%82%84%E6%A1%A5%E7%9E%A7%E4%B9%94%E4%BE%A8%E5%B7%A7%E9%9E%98%E6%92%AC%E7%BF%98%E5%B3%AD%E4%BF%8F%E7%AA%8D%E5%8A%81%E8%AF%AE%E8%B0%AF%E8%8D%9E%E6%84%80%E6%86%94%E7%BC%B2%E6%A8%B5%E6%AF%B3%E7%A1%97%E8%B7%B7%E9%9E%92%22%2C%22qie%22%3A%22%E5%88%87%E8%8C%84%E4%B8%94%E6%80%AF%E7%AA%83%E9%83%84%E5%94%BC%E6%83%AC%E5%A6%BE%E6%8C%88%E9%94%B2%E7%AE%A7%22%2C%22qin%22%3A%22%E9%92%A6%E4%BE%B5%E4%BA%B2%E7%A7%A6%E7%90%B4%E5%8B%A4%E8%8A%B9%E6%93%92%E7%A6%BD%E5%AF%9D%E6%B2%81%E8%8A%A9%E8%93%81%E8%95%B2%E6%8F%BF%E5%90%A3%E5%97%AA%E5%99%99%E6%BA%B1%E6%AA%8E%E8%9E%93%E8%A1%BE%22%2C%22qing%22%3A%22%E9%9D%92%E8%BD%BB%E6%B0%A2%E5%80%BE%E5%8D%BF%E6%B8%85%E6%93%8E%E6%99%B4%E6%B0%B0%E6%83%85%E9%A1%B7%E8%AF%B7%E5%BA%86%E5%80%A9%E8%8B%98%E5%9C%8A%E6%AA%A0%E7%A3%AC%E8%9C%BB%E7%BD%84%E7%AE%90%E8%AC%A6%E9%B2%AD%E9%BB%A5%22%2C%22qiong%22%3A%22%E7%90%BC%E7%A9%B7%E9%82%9B%E8%8C%95%E7%A9%B9%E7%AD%87%E9%8A%8E%22%2C%22qiu%22%3A%22%E7%A7%8B%E4%B8%98%E9%82%B1%E7%90%83%E6%B1%82%E5%9B%9A%E9%85%8B%E6%B3%85%E4%BF%85%E6%B0%BD%E5%B7%AF%E8%89%BD%E7%8A%B0%E6%B9%AB%E9%80%91%E9%81%92%E6%A5%B8%E8%B5%87%E9%B8%A0%E8%99%AC%E8%9A%AF%E8%9D%A4%E8%A3%98%E7%B3%97%E9%B3%85%E9%BC%BD%22%2C%22qu%22%3A%22%E8%B6%8B%E5%8C%BA%E8%9B%86%E6%9B%B2%E8%BA%AF%E5%B1%88%E9%A9%B1%E6%B8%A0%E5%8F%96%E5%A8%B6%E9%BE%8B%E8%B6%A3%E5%8E%BB%E8%AF%8E%E5%8A%AC%E8%95%96%E8%98%A7%E5%B2%96%E8%A1%A2%E9%98%92%E7%92%A9%E8%A7%91%E6%B0%8D%E7%A5%9B%E7%A3%B2%E7%99%AF%E8%9B%90%E8%A0%BC%E9%BA%B4%E7%9E%BF%E9%BB%A2%22%2C%22quan%22%3A%22%E5%9C%88%E9%A2%A7%E6%9D%83%E9%86%9B%E6%B3%89%E5%85%A8%E7%97%8A%E6%8B%B3%E7%8A%AC%E5%88%B8%E5%8A%9D%E8%AF%A0%E8%8D%83%E7%8D%BE%E6%82%9B%E7%BB%BB%E8%BE%81%E7%95%8E%E9%93%A8%E8%9C%B7%E7%AD%8C%E9%AC%88%22%2C%22que%22%3A%22%E7%BC%BA%E7%82%94%E7%98%B8%E5%8D%B4%E9%B9%8A%E6%A6%B7%E7%A1%AE%E9%9B%80%E9%98%99%E6%82%AB%22%2C%22qun%22%3A%22%E8%A3%99%E7%BE%A4%E9%80%A1%22%2C%22ran%22%3A%22%E7%84%B6%E7%87%83%E5%86%89%E6%9F%93%E8%8B%92%E9%AB%AF%22%2C%22rang%22%3A%22%E7%93%A4%E5%A3%A4%E6%94%98%E5%9A%B7%E8%AE%A9%E7%A6%B3%E7%A9%B0%22%2C%22rao%22%3A%22%E9%A5%B6%E6%89%B0%E7%BB%95%E8%8D%9B%E5%A8%86%E6%A1%A1%22%2C%22ruo%22%3A%22%E6%83%B9%E8%8B%A5%E5%BC%B1%22%2C%22re%22%3A%22%E7%83%AD%E5%81%8C%22%2C%22ren%22%3A%22%E5%A3%AC%E4%BB%81%E4%BA%BA%E5%BF%8D%E9%9F%A7%E4%BB%BB%E8%AE%A4%E5%88%83%E5%A6%8A%E7%BA%AB%E4%BB%9E%E8%8D%8F%E8%91%9A%E9%A5%AA%E8%BD%AB%E7%A8%94%E8%A1%BD%22%2C%22reng%22%3A%22%E6%89%94%E4%BB%8D%22%2C%22ri%22%3A%22%E6%97%A5%22%2C%22rong%22%3A%22%E6%88%8E%E8%8C%B8%E8%93%89%E8%8D%A3%E8%9E%8D%E7%86%94%E6%BA%B6%E5%AE%B9%E7%BB%92%E5%86%97%E5%B5%98%E7%8B%A8%E7%BC%9B%E6%A6%95%E8%9D%BE%22%2C%22rou%22%3A%22%E6%8F%89%E6%9F%94%E8%82%89%E7%B3%85%E8%B9%82%E9%9E%A3%22%2C%22ru%22%3A%22%E8%8C%B9%E8%A0%95%E5%84%92%E5%AD%BA%E5%A6%82%E8%BE%B1%E4%B9%B3%E6%B1%9D%E5%85%A5%E8%A4%A5%E8%93%90%E8%96%B7%E5%9A%85%E6%B4%B3%E6%BA%BD%E6%BF%A1%E9%93%B7%E8%A5%A6%E9%A2%A5%22%2C%22ruan%22%3A%22%E8%BD%AF%E9%98%AE%E6%9C%8A%22%2C%22rui%22%3A%22%E8%95%8A%E7%91%9E%E9%94%90%E8%8A%AE%E8%95%A4%E7%9D%BF%E8%9A%8B%22%2C%22run%22%3A%22%E9%97%B0%E6%B6%A6%22%2C%22sa%22%3A%22%E6%92%92%E6%B4%92%E8%90%A8%E5%8D%85%E4%BB%A8%E6%8C%B2%E9%A3%92%22%2C%22sai%22%3A%22%E8%85%AE%E9%B3%83%E5%A1%9E%E8%B5%9B%E5%99%BB%22%2C%22san%22%3A%22%E4%B8%89%E5%8F%81%E4%BC%9E%E6%95%A3%E5%BD%A1%E9%A6%93%E6%B0%B5%E6%AF%B5%E7%B3%81%E9%9C%B0%22%2C%22sang%22%3A%22%E6%A1%91%E5%97%93%E4%B8%A7%E6%90%A1%E7%A3%89%E9%A2%A1%22%2C%22sao%22%3A%22%E6%90%94%E9%AA%9A%E6%89%AB%E5%AB%82%E5%9F%BD%E8%87%8A%E7%98%99%E9%B3%8B%22%2C%22se%22%3A%22%E7%91%9F%E8%89%B2%E6%B6%A9%E5%95%AC%E9%93%A9%E9%93%AF%E7%A9%91%22%2C%22sen%22%3A%22%E6%A3%AE%22%2C%22seng%22%3A%22%E5%83%A7%22%2C%22sha%22%3A%22%E8%8E%8E%E7%A0%82%E6%9D%80%E5%88%B9%E6%B2%99%E7%BA%B1%E5%82%BB%E5%95%A5%E7%85%9E%E8%84%8E%E6%AD%83%E7%97%A7%E8%A3%9F%E9%9C%8E%E9%B2%A8%22%2C%22shai%22%3A%22%E7%AD%9B%E6%99%92%E9%85%BE%22%2C%22shan%22%3A%22%E7%8F%8A%E8%8B%AB%E6%9D%89%E5%B1%B1%E5%88%A0%E7%85%BD%E8%A1%AB%E9%97%AA%E9%99%95%E6%93%85%E8%B5%A1%E8%86%B3%E5%96%84%E6%B1%95%E6%89%87%E7%BC%AE%E5%89%A1%E8%AE%AA%E9%84%AF%E5%9F%8F%E8%8A%9F%E6%BD%B8%E5%A7%97%E9%AA%9F%E8%86%BB%E9%92%90%E7%96%9D%E8%9F%AE%E8%88%A2%E8%B7%9A%E9%B3%9D%22%2C%22shang%22%3A%22%E5%A2%92%E4%BC%A4%E5%95%86%E8%B5%8F%E6%99%8C%E4%B8%8A%E5%B0%9A%E8%A3%B3%E5%9E%A7%E7%BB%B1%E6%AE%87%E7%86%B5%E8%A7%9E%22%2C%22shao%22%3A%22%E6%A2%A2%E6%8D%8E%E7%A8%8D%E7%83%A7%E8%8A%8D%E5%8B%BA%E9%9F%B6%E5%B0%91%E5%93%A8%E9%82%B5%E7%BB%8D%E5%8A%AD%E8%8B%95%E6%BD%B2%E8%9B%B8%E7%AC%A4%E7%AD%B2%E8%89%84%22%2C%22she%22%3A%22%E5%A5%A2%E8%B5%8A%E8%9B%87%E8%88%8C%E8%88%8D%E8%B5%A6%E6%91%84%E5%B0%84%E6%85%91%E6%B6%89%E7%A4%BE%E8%AE%BE%E5%8E%8D%E4%BD%98%E7%8C%9E%E7%95%B2%E9%BA%9D%22%2C%22shen%22%3A%22%E7%A0%B7%E7%94%B3%E5%91%BB%E4%BC%B8%E8%BA%AB%E6%B7%B1%E5%A8%A0%E7%BB%85%E7%A5%9E%E6%B2%88%E5%AE%A1%E5%A9%B6%E7%94%9A%E8%82%BE%E6%85%8E%E6%B8%97%E8%AF%9C%E8%B0%82%E5%90%B2%E5%93%82%E6%B8%96%E6%A4%B9%E7%9F%A7%E8%9C%83%22%2C%22sheng%22%3A%22%E5%A3%B0%E7%94%9F%E7%94%A5%E7%89%B2%E5%8D%87%E7%BB%B3%E7%9C%81%E7%9B%9B%E5%89%A9%E8%83%9C%E5%9C%A3%E4%B8%9E%E6%B8%91%E5%AA%B5%E7%9C%9A%E7%AC%99%22%2C%22shi%22%3A%22%E5%B8%88%E5%A4%B1%E7%8B%AE%E6%96%BD%E6%B9%BF%E8%AF%97%E5%B0%B8%E8%99%B1%E5%8D%81%E7%9F%B3%E6%8B%BE%E6%97%B6%E4%BB%80%E9%A3%9F%E8%9A%80%E5%AE%9E%E8%AF%86%E5%8F%B2%E7%9F%A2%E4%BD%BF%E5%B1%8E%E9%A9%B6%E5%A7%8B%E5%BC%8F%E7%A4%BA%E5%A3%AB%E4%B8%96%E6%9F%BF%E4%BA%8B%E6%8B%AD%E8%AA%93%E9%80%9D%E5%8A%BF%E6%98%AF%E5%97%9C%E5%99%AC%E9%80%82%E4%BB%95%E4%BE%8D%E9%87%8A%E9%A5%B0%E6%B0%8F%E5%B8%82%E6%81%83%E5%AE%A4%E8%A7%86%E8%AF%95%E8%B0%A5%E5%9F%98%E8%8E%B3%E8%93%8D%E5%BC%91%E5%94%91%E9%A5%A3%E8%BD%BC%E8%80%86%E8%B4%B3%E7%82%BB%E7%A4%BB%E9%93%88%E9%93%8A%E8%9E%AB%E8%88%90%E7%AD%AE%E8%B1%95%E9%B2%A5%E9%B2%BA%22%2C%22shou%22%3A%22%E6%94%B6%E6%89%8B%E9%A6%96%E5%AE%88%E5%AF%BF%E6%8E%88%E5%94%AE%E5%8F%97%E7%98%A6%E5%85%BD%E6%89%8C%E7%8B%A9%E7%BB%B6%E8%89%8F%22%2C%22shu%22%3A%22%E8%94%AC%E6%9E%A2%E6%A2%B3%E6%AE%8A%E6%8A%92%E8%BE%93%E5%8F%94%E8%88%92%E6%B7%91%E7%96%8F%E4%B9%A6%E8%B5%8E%E5%AD%B0%E7%86%9F%E8%96%AF%E6%9A%91%E6%9B%99%E7%BD%B2%E8%9C%80%E9%BB%8D%E9%BC%A0%E5%B1%9E%E6%9C%AF%E8%BF%B0%E6%A0%91%E6%9D%9F%E6%88%8D%E7%AB%96%E5%A2%85%E5%BA%B6%E6%95%B0%E6%BC%B1%E6%81%95%E5%80%8F%E5%A1%BE%E8%8F%BD%E5%BF%84%E6%B2%AD%E6%B6%91%E6%BE%8D%E5%A7%9D%E7%BA%BE%E6%AF%B9%E8%85%A7%E6%AE%B3%E9%95%AF%E7%A7%AB%E9%B9%AC%22%2C%22shua%22%3A%22%E5%88%B7%E8%80%8D%E5%94%B0%E6%B6%AE%22%2C%22shuai%22%3A%22%E6%91%94%E8%A1%B0%E7%94%A9%E5%B8%85%E8%9F%80%22%2C%22shuan%22%3A%22%E6%A0%93%E6%8B%B4%E9%97%A9%22%2C%22shuang%22%3A%22%E9%9C%9C%E5%8F%8C%E7%88%BD%E5%AD%80%22%2C%22shui%22%3A%22%E8%B0%81%E6%B0%B4%E7%9D%A1%E7%A8%8E%22%2C%22shun%22%3A%22%E5%90%AE%E7%9E%AC%E9%A1%BA%E8%88%9C%E6%81%82%22%2C%22shuo%22%3A%22%E8%AF%B4%E7%A1%95%E6%9C%94%E7%83%81%E8%92%B4%E6%90%A0%E5%97%8D%E6%BF%AF%E5%A6%81%E6%A7%8A%E9%93%84%22%2C%22si%22%3A%22%E6%96%AF%E6%92%95%E5%98%B6%E6%80%9D%E7%A7%81%E5%8F%B8%E4%B8%9D%E6%AD%BB%E8%82%86%E5%AF%BA%E5%97%A3%E5%9B%9B%E4%BC%BA%E4%BC%BC%E9%A5%B2%E5%B7%B3%E5%8E%AE%E4%BF%9F%E5%85%95%E8%8F%A5%E5%92%9D%E6%B1%9C%E6%B3%97%E6%BE%8C%E5%A7%92%E9%A9%B7%E7%BC%8C%E7%A5%80%E7%A5%A0%E9%94%B6%E9%B8%B6%E8%80%9C%E8%9B%B3%E7%AC%A5%22%2C%22song%22%3A%22%E6%9D%BE%E8%80%B8%E6%80%82%E9%A2%82%E9%80%81%E5%AE%8B%E8%AE%BC%E8%AF%B5%E5%87%87%E8%8F%98%E5%B4%A7%E5%B5%A9%E5%BF%AA%E6%82%9A%E6%B7%9E%E7%AB%A6%22%2C%22sou%22%3A%22%E6%90%9C%E8%89%98%E6%93%9E%E5%97%BD%E5%8F%9F%E5%97%96%E5%97%BE%E9%A6%8A%E6%BA%B2%E9%A3%95%E7%9E%8D%E9%94%BC%E8%9E%8B%22%2C%22su%22%3A%22%E8%8B%8F%E9%85%A5%E4%BF%97%E7%B4%A0%E9%80%9F%E7%B2%9F%E5%83%B3%E5%A1%91%E6%BA%AF%E5%AE%BF%E8%AF%89%E8%82%83%E5%A4%99%E8%B0%A1%E8%94%8C%E5%97%89%E6%84%AB%E7%B0%8C%E8%A7%AB%E7%A8%A3%22%2C%22suan%22%3A%22%E9%85%B8%E8%92%9C%E7%AE%97%22%2C%22sui%22%3A%22%E8%99%BD%E9%9A%8B%E9%9A%8F%E7%BB%A5%E9%AB%93%E7%A2%8E%E5%B2%81%E7%A9%97%E9%81%82%E9%9A%A7%E7%A5%9F%E8%93%91%E5%86%AB%E8%B0%87%E6%BF%89%E9%82%83%E7%87%A7%E7%9C%AD%E7%9D%A2%22%2C%22sun%22%3A%22%E5%AD%99%E6%8D%9F%E7%AC%8B%E8%8D%AA%E7%8B%B2%E9%A3%A7%E6%A6%AB%E8%B7%A3%E9%9A%BC%22%2C%22suo%22%3A%22%E6%A2%AD%E5%94%86%E7%BC%A9%E7%90%90%E7%B4%A2%E9%94%81%E6%89%80%E5%94%A2%E5%97%A6%E5%A8%91%E6%A1%AB%E7%9D%83%E7%BE%A7%22%2C%22ta%22%3A%22%E5%A1%8C%E4%BB%96%E5%AE%83%E5%A5%B9%E5%A1%94%E7%8D%AD%E6%8C%9E%E8%B9%8B%E8%B8%8F%E9%97%BC%E6%BA%BB%E9%81%A2%E6%A6%BB%E6%B2%93%22%2C%22tai%22%3A%22%E8%83%8E%E8%8B%94%E6%8A%AC%E5%8F%B0%E6%B3%B0%E9%85%9E%E5%A4%AA%E6%80%81%E6%B1%B0%E9%82%B0%E8%96%B9%E8%82%BD%E7%82%B1%E9%92%9B%E8%B7%86%E9%B2%90%22%2C%22tan%22%3A%22%E5%9D%8D%E6%91%8A%E8%B4%AA%E7%98%AB%E6%BB%A9%E5%9D%9B%E6%AA%80%E7%97%B0%E6%BD%AD%E8%B0%AD%E8%B0%88%E5%9D%A6%E6%AF%AF%E8%A2%92%E7%A2%B3%E6%8E%A2%E5%8F%B9%E7%82%AD%E9%83%AF%E8%95%88%E6%98%99%E9%92%BD%E9%94%AC%E8%A6%83%22%2C%22tang%22%3A%22%E6%B1%A4%E5%A1%98%E6%90%AA%E5%A0%82%E6%A3%A0%E8%86%9B%E5%94%90%E7%B3%96%E5%82%A5%E9%A5%A7%E6%BA%8F%E7%91%AD%E9%93%B4%E9%95%97%E8%80%A5%E8%9E%97%E8%9E%B3%E7%BE%B0%E9%86%A3%22%2C%22thang%22%3A%22%E5%80%98%E8%BA%BA%E6%B7%8C%22%2C%22theng%22%3A%22%E8%B6%9F%E7%83%AB%22%2C%22tao%22%3A%22%E6%8E%8F%E6%B6%9B%E6%BB%94%E7%BB%A6%E8%90%84%E6%A1%83%E9%80%83%E6%B7%98%E9%99%B6%E8%AE%A8%E5%A5%97%E6%8C%91%E9%BC%97%E5%95%95%E9%9F%AC%E9%A5%95%22%2C%22te%22%3A%22%E7%89%B9%22%2C%22teng%22%3A%22%E8%97%A4%E8%85%BE%E7%96%BC%E8%AA%8A%E6%BB%95%22%2C%22ti%22%3A%22%E6%A2%AF%E5%89%94%E8%B8%A2%E9%94%91%E6%8F%90%E9%A2%98%E8%B9%84%E5%95%BC%E4%BD%93%E6%9B%BF%E5%9A%8F%E6%83%95%E6%B6%95%E5%89%83%E5%B1%89%E8%8D%91%E6%82%8C%E9%80%96%E7%BB%A8%E7%BC%87%E9%B9%88%E8%A3%BC%E9%86%8D%22%2C%22tian%22%3A%22%E5%A4%A9%E6%B7%BB%E5%A1%AB%E7%94%B0%E7%94%9C%E6%81%AC%E8%88%94%E8%85%86%E6%8E%AD%E5%BF%9D%E9%98%97%E6%AE%84%E7%95%8B%E9%92%BF%E8%9A%BA%22%2C%22tiao%22%3A%22%E6%9D%A1%E8%BF%A2%E7%9C%BA%E8%B7%B3%E4%BD%BB%E7%A5%A7%E9%93%AB%E7%AA%95%E9%BE%86%E9%B2%A6%22%2C%22tie%22%3A%22%E8%B4%B4%E9%93%81%E5%B8%96%E8%90%9C%E9%A4%AE%22%2C%22ting%22%3A%22%E5%8E%85%E5%90%AC%E7%83%83%E6%B1%80%E5%BB%B7%E5%81%9C%E4%BA%AD%E5%BA%AD%E6%8C%BA%E8%89%87%E8%8E%9B%E8%91%B6%E5%A9%B7%E6%A2%83%E8%9C%93%E9%9C%86%22%2C%22tong%22%3A%22%E9%80%9A%E6%A1%90%E9%85%AE%E7%9E%B3%E5%90%8C%E9%93%9C%E5%BD%A4%E7%AB%A5%E6%A1%B6%E6%8D%85%E7%AD%92%E7%BB%9F%E7%97%9B%E4%BD%9F%E5%83%AE%E4%BB%9D%E8%8C%BC%E5%97%B5%E6%81%B8%E6%BD%BC%E7%A0%BC%22%2C%22tou%22%3A%22%E5%81%B7%E6%8A%95%E5%A4%B4%E9%80%8F%E4%BA%A0%22%2C%22tu%22%3A%22%E5%87%B8%E7%A7%83%E7%AA%81%E5%9B%BE%E5%BE%92%E9%80%94%E6%B6%82%E5%B1%A0%E5%9C%9F%E5%90%90%E5%85%94%E5%A0%8D%E8%8D%BC%E8%8F%9F%E9%92%8D%E9%85%B4%22%2C%22tuan%22%3A%22%E6%B9%8D%E5%9B%A2%E7%96%83%22%2C%22tui%22%3A%22%E6%8E%A8%E9%A2%93%E8%85%BF%E8%9C%95%E8%A4%AA%E9%80%80%E5%BF%92%E7%85%BA%22%2C%22tun%22%3A%22%E5%90%9E%E5%B1%AF%E8%87%80%E9%A5%A8%E6%9A%BE%E8%B1%9A%E7%AA%80%22%2C%22tuo%22%3A%22%E6%8B%96%E6%89%98%E8%84%B1%E9%B8%B5%E9%99%80%E9%A9%AE%E9%A9%BC%E6%A4%AD%E5%A6%A5%E6%8B%93%E5%94%BE%E4%B9%87%E4%BD%97%E5%9D%A8%E5%BA%B9%E6%B2%B1%E6%9F%9D%E7%A0%A3%E7%AE%A8%E8%88%84%E8%B7%8E%E9%BC%8D%22%2C%22wa%22%3A%22%E6%8C%96%E5%93%87%E8%9B%99%E6%B4%BC%E5%A8%83%E7%93%A6%E8%A2%9C%E4%BD%A4%E5%A8%B2%E8%85%BD%22%2C%22wai%22%3A%22%E6%AD%AA%E5%A4%96%22%2C%22wan%22%3A%22%E8%B1%8C%E5%BC%AF%E6%B9%BE%E7%8E%A9%E9%A1%BD%E4%B8%B8%E7%83%B7%E5%AE%8C%E7%A2%97%E6%8C%BD%E6%99%9A%E7%9A%96%E6%83%8B%E5%AE%9B%E5%A9%89%E4%B8%87%E8%85%95%E5%89%9C%E8%8A%84%E8%8B%8B%E8%8F%80%E7%BA%A8%E7%BB%BE%E7%90%AC%E8%84%98%E7%95%B9%E8%9C%BF%E7%AE%A2%22%2C%22wang%22%3A%22%E6%B1%AA%E7%8E%8B%E4%BA%A1%E6%9E%89%E7%BD%91%E5%BE%80%E6%97%BA%E6%9C%9B%E5%BF%98%E5%A6%84%E7%BD%94%E5%B0%A2%E6%83%98%E8%BE%8B%E9%AD%8D%22%2C%22wei%22%3A%22%E5%A8%81%E5%B7%8D%E5%BE%AE%E5%8D%B1%E9%9F%A6%E8%BF%9D%E6%A1%85%E5%9B%B4%E5%94%AF%E6%83%9F%E4%B8%BA%E6%BD%8D%E7%BB%B4%E8%8B%87%E8%90%8E%E5%A7%94%E4%BC%9F%E4%BC%AA%E5%B0%BE%E7%BA%AC%E6%9C%AA%E8%94%9A%E5%91%B3%E7%95%8F%E8%83%83%E5%96%82%E9%AD%8F%E4%BD%8D%E6%B8%AD%E8%B0%93%E5%B0%89%E6%85%B0%E5%8D%AB%E5%80%AD%E5%81%8E%E8%AF%BF%E9%9A%88%E8%91%B3%E8%96%87%E5%B8%8F%E5%B8%B7%E5%B4%B4%E5%B5%AC%E7%8C%A5%E7%8C%AC%E9%97%B1%E6%B2%A9%E6%B4%A7%E6%B6%A0%E9%80%B6%E5%A8%93%E7%8E%AE%E9%9F%AA%E8%BB%8E%E7%82%9C%E7%85%A8%E7%86%A8%E7%97%BF%E8%89%89%E9%B2%94%22%2C%22wen%22%3A%22%E7%98%9F%E6%B8%A9%E8%9A%8A%E6%96%87%E9%97%BB%E7%BA%B9%E5%90%BB%E7%A8%B3%E7%B4%8A%E9%97%AE%E5%88%8E%E6%84%A0%E9%98%8C%E6%B1%B6%E7%92%BA%E9%9F%AB%E6%AE%81%E9%9B%AF%22%2C%22weng%22%3A%22%E5%97%A1%E7%BF%81%E7%93%AE%E8%93%8A%E8%95%B9%22%2C%22wo%22%3A%22%E6%8C%9D%E8%9C%97%E6%B6%A1%E7%AA%9D%E6%88%91%E6%96%A1%E5%8D%A7%E6%8F%A1%E6%B2%83%E8%8E%B4%E5%B9%84%E6%B8%A5%E6%9D%8C%E8%82%9F%E9%BE%8C%22%2C%22wu%22%3A%22%E5%B7%AB%E5%91%9C%E9%92%A8%E4%B9%8C%E6%B1%A1%E8%AF%AC%E5%B1%8B%E6%97%A0%E8%8A%9C%E6%A2%A7%E5%90%BE%E5%90%B4%E6%AF%8B%E6%AD%A6%E4%BA%94%E6%8D%82%E5%8D%88%E8%88%9E%E4%BC%8D%E4%BE%AE%E5%9D%9E%E6%88%8A%E9%9B%BE%E6%99%A4%E7%89%A9%E5%8B%BF%E5%8A%A1%E6%82%9F%E8%AF%AF%E5%85%80%E4%BB%B5%E9%98%A2%E9%82%AC%E5%9C%AC%E8%8A%B4%E5%BA%91%E6%80%83%E5%BF%A4%E6%B5%AF%E5%AF%A4%E8%BF%95%E5%A6%A9%E9%AA%9B%E7%89%BE%E7%84%90%E9%B9%89%E9%B9%9C%E8%9C%88%E9%8B%88%E9%BC%AF%22%2C%22xi%22%3A%22%E6%98%94%E7%86%99%E6%9E%90%E8%A5%BF%E7%A1%92%E7%9F%BD%E6%99%B0%E5%98%BB%E5%90%B8%E9%94%A1%E7%89%BA%E7%A8%80%E6%81%AF%E5%B8%8C%E6%82%89%E8%86%9D%E5%A4%95%E6%83%9C%E7%86%84%E7%83%AF%E6%BA%AA%E6%B1%90%E7%8A%80%E6%AA%84%E8%A2%AD%E5%B8%AD%E4%B9%A0%E5%AA%B3%E5%96%9C%E9%93%A3%E6%B4%97%E7%B3%BB%E9%9A%99%E6%88%8F%E7%BB%86%E5%83%96%E5%85%AE%E9%9A%B0%E9%83%97%E8%8C%9C%E8%91%B8%E8%93%B0%E5%A5%9A%E5%94%8F%E5%BE%99%E9%A5%A9%E9%98%8B%E6%B5%A0%E6%B7%85%E5%B1%A3%E5%AC%89%E7%8E%BA%E6%A8%A8%E6%9B%A6%E8%A7%8B%E6%AC%B7%E7%86%B9%E7%A6%8A%E7%A6%A7%E9%92%B8%E7%9A%99%E7%A9%B8%E8%9C%A5%E8%9F%8B%E8%88%BE%E7%BE%B2%E7%B2%9E%E7%BF%95%E9%86%AF%E9%BC%B7%22%2C%22xia%22%3A%22%E7%9E%8E%E8%99%BE%E5%8C%A3%E9%9C%9E%E8%BE%96%E6%9A%87%E5%B3%A1%E4%BE%A0%E7%8B%AD%E4%B8%8B%E5%8E%A6%E5%A4%8F%E5%90%93%E6%8E%80%E8%91%AD%E5%97%84%E7%8B%8E%E9%81%90%E7%91%95%E7%A1%96%E7%98%95%E7%BD%85%E9%BB%A0%22%2C%22xian%22%3A%22%E9%94%A8%E5%85%88%E4%BB%99%E9%B2%9C%E7%BA%A4%E5%92%B8%E8%B4%A4%E8%A1%94%E8%88%B7%E9%97%B2%E6%B6%8E%E5%BC%A6%E5%AB%8C%E6%98%BE%E9%99%A9%E7%8E%B0%E7%8C%AE%E5%8E%BF%E8%85%BA%E9%A6%85%E7%BE%A1%E5%AE%AA%E9%99%B7%E9%99%90%E7%BA%BF%E5%86%BC%E8%97%93%E5%B2%98%E7%8C%83%E6%9A%B9%E5%A8%B4%E6%B0%99%E7%A5%86%E9%B9%87%E7%97%AB%E8%9A%AC%E7%AD%85%E7%B1%BC%E9%85%B0%E8%B7%B9%22%2C%22xiang%22%3A%22%E7%9B%B8%E5%8E%A2%E9%95%B6%E9%A6%99%E7%AE%B1%E8%A5%84%E6%B9%98%E4%B9%A1%E7%BF%94%E7%A5%A5%E8%AF%A6%E6%83%B3%E5%93%8D%E4%BA%AB%E9%A1%B9%E5%B7%B7%E6%A9%A1%E5%83%8F%E5%90%91%E8%B1%A1%E8%8A%97%E8%91%99%E9%A5%B7%E5%BA%A0%E9%AA%A7%E7%BC%83%E8%9F%93%E9%B2%9E%E9%A3%A8%22%2C%22xiao%22%3A%22%E8%90%A7%E7%A1%9D%E9%9C%84%E5%89%8A%E5%93%AE%E5%9A%A3%E9%94%80%E6%B6%88%E5%AE%B5%E6%B7%86%E6%99%93%E5%B0%8F%E5%AD%9D%E6%A0%A1%E8%82%96%E5%95%B8%E7%AC%91%E6%95%88%E5%93%93%E5%92%BB%E5%B4%A4%E6%BD%87%E9%80%8D%E9%AA%81%E7%BB%A1%E6%9E%AD%E6%9E%B5%E7%AD%B1%E7%AE%AB%E9%AD%88%22%2C%22xie%22%3A%22%E6%A5%94%E4%BA%9B%E6%AD%87%E8%9D%8E%E9%9E%8B%E5%8D%8F%E6%8C%9F%E6%90%BA%E9%82%AA%E6%96%9C%E8%83%81%E8%B0%90%E5%86%99%E6%A2%B0%E5%8D%B8%E8%9F%B9%E6%87%88%E6%B3%84%E6%B3%BB%E8%B0%A2%E5%B1%91%E5%81%95%E4%BA%B5%E5%8B%B0%E7%87%AE%E8%96%A4%E6%92%B7%E5%BB%A8%E7%80%A3%E9%82%82%E7%BB%81%E7%BC%AC%E6%A6%AD%E6%A6%8D%E6%AD%99%E8%BA%9E%22%2C%22xin%22%3A%22%E8%96%AA%E8%8A%AF%E9%94%8C%E6%AC%A3%E8%BE%9B%E6%96%B0%E5%BF%BB%E5%BF%83%E4%BF%A1%E8%A1%85%E5%9B%9F%E9%A6%A8%E8%8E%98%E6%AD%86%E9%93%BD%E9%91%AB%22%2C%22xing%22%3A%22%E6%98%9F%E8%85%A5%E7%8C%A9%E6%83%BA%E5%85%B4%E5%88%91%E5%9E%8B%E5%BD%A2%E9%82%A2%E8%A1%8C%E9%86%92%E5%B9%B8%E6%9D%8F%E6%80%A7%E5%A7%93%E9%99%89%E8%8D%87%E8%8D%A5%E6%93%A4%E6%82%BB%E7%A1%8E%22%2C%22xiong%22%3A%22%E5%85%84%E5%87%B6%E8%83%B8%E5%8C%88%E6%B1%B9%E9%9B%84%E7%86%8A%E8%8A%8E%22%2C%22xiu%22%3A%22%E4%BC%91%E4%BF%AE%E7%BE%9E%E6%9C%BD%E5%97%85%E9%94%88%E7%A7%80%E8%A2%96%E7%BB%A3%E8%8E%A0%E5%B2%AB%E9%A6%90%E5%BA%A5%E9%B8%BA%E8%B2%85%E9%AB%B9%22%2C%22xu%22%3A%22%E5%A2%9F%E6%88%8C%E9%9C%80%E8%99%9A%E5%98%98%E9%A1%BB%E5%BE%90%E8%AE%B8%E8%93%84%E9%85%97%E5%8F%99%E6%97%AD%E5%BA%8F%E7%95%9C%E6%81%A4%E7%B5%AE%E5%A9%BF%E7%BB%AA%E7%BB%AD%E8%AE%B4%E8%AF%A9%E5%9C%A9%E8%93%BF%E6%80%B5%E6%B4%AB%E6%BA%86%E9%A1%BC%E6%A0%A9%E7%85%A6%E7%A0%89%E7%9B%B1%E8%83%A5%E7%B3%88%E9%86%91%22%2C%22xuan%22%3A%22%E8%BD%A9%E5%96%A7%E5%AE%A3%E6%82%AC%E6%97%8B%E7%8E%84%E9%80%89%E7%99%A3%E7%9C%A9%E7%BB%9A%E5%84%87%E8%B0%96%E8%90%B1%E6%8F%8E%E9%A6%94%E6%B3%AB%E6%B4%B5%E6%B8%B2%E6%BC%A9%E7%92%87%E6%A5%A6%E6%9A%84%E7%82%AB%E7%85%8A%E7%A2%B9%E9%93%89%E9%95%9F%E7%97%83%22%2C%22xue%22%3A%22%E9%9D%B4%E8%96%9B%E5%AD%A6%E7%A9%B4%E9%9B%AA%E8%A1%80%E5%99%B1%E6%B3%B6%E9%B3%95%22%2C%22xun%22%3A%22%E5%8B%8B%E7%86%8F%E5%BE%AA%E6%97%AC%E8%AF%A2%E5%AF%BB%E9%A9%AF%E5%B7%A1%E6%AE%89%E6%B1%9B%E8%AE%AD%E8%AE%AF%E9%80%8A%E8%BF%85%E5%B7%BD%E5%9F%99%E8%8D%80%E8%96%B0%E5%B3%8B%E5%BE%87%E6%B5%94%E6%9B%9B%E7%AA%A8%E9%86%BA%E9%B2%9F%22%2C%22ya%22%3A%22%E5%8E%8B%E6%8A%BC%E9%B8%A6%E9%B8%AD%E5%91%80%E4%B8%AB%E8%8A%BD%E7%89%99%E8%9A%9C%E5%B4%96%E8%A1%99%E6%B6%AF%E9%9B%85%E5%93%91%E4%BA%9A%E8%AE%B6%E4%BC%A2%E6%8F%A0%E5%90%96%E5%B2%88%E8%BF%93%E5%A8%85%E7%90%8A%E6%A1%A0%E6%B0%A9%E7%A0%91%E7%9D%9A%E7%97%96%22%2C%22yan%22%3A%22%E7%84%89%E5%92%BD%E9%98%89%E7%83%9F%E6%B7%B9%E7%9B%90%E4%B8%A5%E7%A0%94%E8%9C%92%E5%B2%A9%E5%BB%B6%E8%A8%80%E9%A2%9C%E9%98%8E%E7%82%8E%E6%B2%BF%E5%A5%84%E6%8E%A9%E7%9C%BC%E8%A1%8D%E6%BC%94%E8%89%B3%E5%A0%B0%E7%87%95%E5%8E%8C%E7%A0%9A%E9%9B%81%E5%94%81%E5%BD%A6%E7%84%B0%E5%AE%B4%E8%B0%9A%E9%AA%8C%E5%8E%A3%E9%9D%A5%E8%B5%9D%E4%BF%A8%E5%81%83%E5%85%96%E8%AE%A0%E8%B0%B3%E9%83%BE%E9%84%A2%E8%8A%AB%E8%8F%B8%E5%B4%A6%E6%81%B9%E9%97%AB%E9%98%8F%E6%B4%87%E6%B9%AE%E6%BB%9F%E5%A6%8D%E5%AB%A3%E7%90%B0%E6%99%8F%E8%83%AD%E8%85%8C%E7%84%B1%E7%BD%A8%E7%AD%B5%E9%85%BD%E9%AD%87%E9%A4%8D%E9%BC%B9%22%2C%22yang%22%3A%22%E6%AE%83%E5%A4%AE%E9%B8%AF%E7%A7%A7%E6%9D%A8%E6%89%AC%E4%BD%AF%E7%96%A1%E7%BE%8A%E6%B4%8B%E9%98%B3%E6%B0%A7%E4%BB%B0%E7%97%92%E5%85%BB%E6%A0%B7%E6%BC%BE%E5%BE%89%E6%80%8F%E6%B3%B1%E7%82%80%E7%83%8A%E6%81%99%E8%9B%98%E9%9E%85%22%2C%22yao%22%3A%22%E9%82%80%E8%85%B0%E5%A6%96%E7%91%B6%E6%91%87%E5%B0%A7%E9%81%A5%E7%AA%91%E8%B0%A3%E5%A7%9A%E5%92%AC%E8%88%80%E8%8D%AF%E8%A6%81%E8%80%80%E5%A4%AD%E7%88%BB%E5%90%86%E5%B4%BE%E5%BE%AD%E7%80%B9%E5%B9%BA%E7%8F%A7%E6%9D%B3%E6%9B%9C%E8%82%B4%E9%B9%9E%E7%AA%88%E7%B9%87%E9%B3%90%22%2C%22ye%22%3A%22%E6%A4%B0%E5%99%8E%E8%80%B6%E7%88%B7%E9%87%8E%E5%86%B6%E4%B9%9F%E9%A1%B5%E6%8E%96%E4%B8%9A%E5%8F%B6%E6%9B%B3%E8%85%8B%E5%A4%9C%E6%B6%B2%E8%B0%92%E9%82%BA%E6%8F%B6%E9%A6%80%E6%99%94%E7%83%A8%E9%93%98%22%2C%22yi%22%3A%22%E4%B8%80%E5%A3%B9%E5%8C%BB%E6%8F%96%E9%93%B1%E4%BE%9D%E4%BC%8A%E8%A1%A3%E9%A2%90%E5%A4%B7%E9%81%97%E7%A7%BB%E4%BB%AA%E8%83%B0%E7%96%91%E6%B2%82%E5%AE%9C%E5%A7%A8%E5%BD%9D%E6%A4%85%E8%9A%81%E5%80%9A%E5%B7%B2%E4%B9%99%E7%9F%A3%E4%BB%A5%E8%89%BA%E6%8A%91%E6%98%93%E9%82%91%E5%B1%B9%E4%BA%BF%E5%BD%B9%E8%87%86%E9%80%B8%E8%82%84%E7%96%AB%E4%BA%A6%E8%A3%94%E6%84%8F%E6%AF%85%E5%BF%86%E4%B9%89%E7%9B%8A%E6%BA%A2%E8%AF%A3%E8%AE%AE%E8%B0%8A%E8%AF%91%E5%BC%82%E7%BF%BC%E7%BF%8C%E7%BB%8E%E5%88%88%E5%8A%93%E4%BD%BE%E8%AF%92%E5%9C%AA%E5%9C%AF%E5%9F%B8%E6%87%BF%E8%8B%A1%E8%96%8F%E5%BC%88%E5%A5%95%E6%8C%B9%E5%BC%8B%E5%91%93%E5%92%A6%E5%92%BF%E5%99%AB%E5%B3%84%E5%B6%B7%E7%8C%97%E9%A5%B4%E6%80%BF%E6%80%A1%E6%82%92%E6%BC%AA%E8%BF%A4%E9%A9%BF%E7%BC%A2%E6%AE%AA%E8%B4%BB%E6%97%96%E7%86%A0%E9%92%87%E9%95%92%E9%95%B1%E7%97%8D%E7%98%97%E7%99%94%E7%BF%8A%E8%A1%A4%E8%9C%B4%E8%88%A3%E7%BE%BF%E7%BF%B3%E9%85%8F%E9%BB%9F%22%2C%22yin%22%3A%22%E8%8C%B5%E8%8D%AB%E5%9B%A0%E6%AE%B7%E9%9F%B3%E9%98%B4%E5%A7%BB%E5%90%9F%E9%93%B6%E6%B7%AB%E5%AF%85%E9%A5%AE%E5%B0%B9%E5%BC%95%E9%9A%90%E5%8D%B0%E8%83%A4%E9%84%9E%E5%A0%99%E8%8C%9A%E5%96%91%E7%8B%BA%E5%A4%A4%E6%B0%A4%E9%93%9F%E7%98%BE%E8%9A%93%E9%9C%AA%E9%BE%88%22%2C%22ying%22%3A%22%E8%8B%B1%E6%A8%B1%E5%A9%B4%E9%B9%B0%E5%BA%94%E7%BC%A8%E8%8E%B9%E8%90%A4%E8%90%A5%E8%8D%A7%E8%9D%87%E8%BF%8E%E8%B5%A2%E7%9B%88%E5%BD%B1%E9%A2%96%E7%A1%AC%E6%98%A0%E5%AC%B4%E9%83%A2%E8%8C%94%E8%8E%BA%E8%90%A6%E6%92%84%E5%98%A4%E8%86%BA%E6%BB%A2%E6%BD%86%E7%80%9B%E7%91%9B%E7%92%8E%E6%A5%B9%E9%B9%A6%E7%98%BF%E9%A2%8D%E7%BD%82%22%2C%22yo%22%3A%22%E5%93%9F%E5%94%B7%22%2C%22yong%22%3A%22%E6%8B%A5%E4%BD%A3%E8%87%83%E7%97%88%E5%BA%B8%E9%9B%8D%E8%B8%8A%E8%9B%B9%E5%92%8F%E6%B3%B3%E6%B6%8C%E6%B0%B8%E6%81%BF%E5%8B%87%E7%94%A8%E4%BF%91%E5%A3%85%E5%A2%89%E6%85%B5%E9%82%95%E9%95%9B%E7%94%AC%E9%B3%99%E9%A5%94%22%2C%22you%22%3A%22%E5%B9%BD%E4%BC%98%E6%82%A0%E5%BF%A7%E5%B0%A4%E7%94%B1%E9%82%AE%E9%93%80%E7%8A%B9%E6%B2%B9%E6%B8%B8%E9%85%89%E6%9C%89%E5%8F%8B%E5%8F%B3%E4%BD%91%E9%87%89%E8%AF%B1%E5%8F%88%E5%B9%BC%E5%8D%A3%E6%94%B8%E4%BE%91%E8%8E%B8%E5%91%A6%E5%9B%BF%E5%AE%A5%E6%9F%9A%E7%8C%B7%E7%89%96%E9%93%95%E7%96%A3%E8%9D%A3%E9%B1%BF%E9%BB%9D%E9%BC%AC%22%2C%22yu%22%3A%22%E8%BF%82%E6%B7%A4%E4%BA%8E%E7%9B%82%E6%A6%86%E8%99%9E%E6%84%9A%E8%88%86%E4%BD%99%E4%BF%9E%E9%80%BE%E9%B1%BC%E6%84%89%E6%B8%9D%E6%B8%94%E9%9A%85%E4%BA%88%E5%A8%B1%E9%9B%A8%E4%B8%8E%E5%B1%BF%E7%A6%B9%E5%AE%87%E8%AF%AD%E7%BE%BD%E7%8E%89%E5%9F%9F%E8%8A%8B%E9%83%81%E5%90%81%E9%81%87%E5%96%BB%E5%B3%AA%E5%BE%A1%E6%84%88%E6%AC%B2%E7%8B%B1%E8%82%B2%E8%AA%89%E6%B5%B4%E5%AF%93%E8%A3%95%E9%A2%84%E8%B1%AB%E9%A9%AD%E7%A6%BA%E6%AF%93%E4%BC%9B%E4%BF%A3%E8%B0%80%E8%B0%95%E8%90%B8%E8%93%A3%E6%8F%84%E5%96%81%E5%9C%84%E5%9C%89%E5%B5%9B%E7%8B%B3%E9%A5%AB%E5%BA%BE%E9%98%88%E5%A6%AA%E5%A6%A4%E7%BA%A1%E7%91%9C%E6%98%B1%E8%A7%8E%E8%85%B4%E6%AC%A4%E6%96%BC%E7%85%9C%E7%87%A0%E8%81%BF%E9%92%B0%E9%B9%86%E7%98%90%E7%98%80%E7%AA%B3%E8%9D%93%E7%AB%BD%E8%88%81%E9%9B%A9%E9%BE%89%22%2C%22yuan%22%3A%22%E9%B8%B3%E6%B8%8A%E5%86%A4%E5%85%83%E5%9E%A3%E8%A2%81%E5%8E%9F%E6%8F%B4%E8%BE%95%E5%9B%AD%E5%91%98%E5%9C%86%E7%8C%BF%E6%BA%90%E7%BC%98%E8%BF%9C%E8%8B%91%E6%84%BF%E6%80%A8%E9%99%A2%E5%A1%AC%E6%B2%85%E5%AA%9B%E7%91%97%E6%A9%BC%E7%88%B0%E7%9C%A2%E9%B8%A2%E8%9E%88%E9%BC%8B%22%2C%22yue%22%3A%22%E6%9B%B0%E7%BA%A6%E8%B6%8A%E8%B7%83%E9%92%A5%E5%B2%B3%E7%B2%A4%E6%9C%88%E6%82%A6%E9%98%85%E9%BE%A0%E6%A8%BE%E5%88%96%E9%92%BA%22%2C%22yun%22%3A%22%E8%80%98%E4%BA%91%E9%83%A7%E5%8C%80%E9%99%A8%E5%85%81%E8%BF%90%E8%95%B4%E9%85%9D%E6%99%95%E9%9F%B5%E5%AD%95%E9%83%93%E8%8A%B8%E7%8B%81%E6%81%BD%E7%BA%AD%E6%AE%92%E6%98%80%E6%B0%B2%22%2C%22za%22%3A%22%E5%8C%9D%E7%A0%B8%E6%9D%82%E6%8B%B6%E5%92%82%22%2C%22zai%22%3A%22%E6%A0%BD%E5%93%89%E7%81%BE%E5%AE%B0%E8%BD%BD%E5%86%8D%E5%9C%A8%E5%92%B1%E5%B4%BD%E7%94%BE%22%2C%22zan%22%3A%22%E6%94%92%E6%9A%82%E8%B5%9E%E7%93%92%E6%98%9D%E7%B0%AA%E7%B3%8C%E8%B6%B1%E9%8C%BE%22%2C%22zang%22%3A%22%E8%B5%83%E8%84%8F%E8%91%AC%E5%A5%98%E6%88%95%E8%87%A7%22%2C%22zao%22%3A%22%E9%81%AD%E7%B3%9F%E5%87%BF%E8%97%BB%E6%9E%A3%E6%97%A9%E6%BE%A1%E8%9A%A4%E8%BA%81%E5%99%AA%E9%80%A0%E7%9A%82%E7%81%B6%E7%87%A5%E5%94%A3%E7%BC%AB%22%2C%22ze%22%3A%22%E8%B4%A3%E6%8B%A9%E5%88%99%E6%B3%BD%E4%BB%84%E8%B5%9C%E5%95%A7%E8%BF%AE%E6%98%83%E7%AC%AE%E7%AE%A6%E8%88%B4%22%2C%22zei%22%3A%22%E8%B4%BC%22%2C%22zen%22%3A%22%E6%80%8E%E8%B0%AE%22%2C%22zeng%22%3A%22%E5%A2%9E%E6%86%8E%E6%9B%BE%E8%B5%A0%E7%BC%AF%E7%94%91%E7%BD%BE%E9%94%83%22%2C%22zha%22%3A%22%E6%89%8E%E5%96%B3%E6%B8%A3%E6%9C%AD%E8%BD%A7%E9%93%A1%E9%97%B8%E7%9C%A8%E6%A0%85%E6%A6%A8%E5%92%8B%E4%B9%8D%E7%82%B8%E8%AF%88%E6%8F%B8%E5%90%92%E5%92%A4%E5%93%B3%E6%80%8D%E7%A0%9F%E7%97%84%E8%9A%B1%E9%BD%84%22%2C%22zhai%22%3A%22%E6%91%98%E6%96%8B%E5%AE%85%E7%AA%84%E5%80%BA%E5%AF%A8%E7%A0%A6%22%2C%22zhan%22%3A%22%E7%9E%BB%E6%AF%A1%E8%A9%B9%E7%B2%98%E6%B2%BE%E7%9B%8F%E6%96%A9%E8%BE%97%E5%B4%AD%E5%B1%95%E8%98%B8%E6%A0%88%E5%8D%A0%E6%88%98%E7%AB%99%E6%B9%9B%E7%BB%BD%E8%B0%B5%E6%90%8C%E6%97%83%22%2C%22zhang%22%3A%22%E6%A8%9F%E7%AB%A0%E5%BD%B0%E6%BC%B3%E5%BC%A0%E6%8E%8C%E6%B6%A8%E6%9D%96%E4%B8%88%E5%B8%90%E8%B4%A6%E4%BB%97%E8%83%80%E7%98%B4%E9%9A%9C%E4%BB%89%E9%84%A3%E5%B9%9B%E5%B6%82%E7%8D%90%E5%AB%9C%E7%92%8B%E8%9F%91%22%2C%22zhao%22%3A%22%E6%8B%9B%E6%98%AD%E6%89%BE%E6%B2%BC%E8%B5%B5%E7%85%A7%E7%BD%A9%E5%85%86%E8%82%87%E5%8F%AC%E7%88%AA%E8%AF%8F%E6%A3%B9%E9%92%8A%E7%AC%8A%22%2C%22zhe%22%3A%22%E9%81%AE%E6%8A%98%E5%93%B2%E8%9B%B0%E8%BE%99%E8%80%85%E9%94%97%E8%94%97%E8%BF%99%E6%B5%99%E8%B0%AA%E9%99%AC%E6%9F%98%E8%BE%84%E7%A3%94%E9%B9%A7%E8%A4%9A%E8%9C%87%E8%B5%AD%22%2C%22zhen%22%3A%22%E7%8F%8D%E6%96%9F%E7%9C%9F%E7%94%84%E7%A0%A7%E8%87%BB%E8%B4%9E%E9%92%88%E4%BE%A6%E6%9E%95%E7%96%B9%E8%AF%8A%E9%9C%87%E6%8C%AF%E9%95%87%E9%98%B5%E7%BC%9C%E6%A1%A2%E6%A6%9B%E8%BD%B8%E8%B5%88%E8%83%97%E6%9C%95%E7%A5%AF%E7%95%9B%E9%B8%A9%22%2C%22zheng%22%3A%22%E8%92%B8%E6%8C%A3%E7%9D%81%E5%BE%81%E7%8B%B0%E4%BA%89%E6%80%94%E6%95%B4%E6%8B%AF%E6%AD%A3%E6%94%BF%E5%B8%A7%E7%97%87%E9%83%91%E8%AF%81%E8%AF%A4%E5%B3%A5%E9%92%B2%E9%93%AE%E7%AD%9D%22%2C%22zhi%22%3A%22%E8%8A%9D%E6%9E%9D%E6%94%AF%E5%90%B1%E8%9C%98%E7%9F%A5%E8%82%A2%E8%84%82%E6%B1%81%E4%B9%8B%E7%BB%87%E8%81%8C%E7%9B%B4%E6%A4%8D%E6%AE%96%E6%89%A7%E5%80%BC%E4%BE%84%E5%9D%80%E6%8C%87%E6%AD%A2%E8%B6%BE%E5%8F%AA%E6%97%A8%E7%BA%B8%E5%BF%97%E6%8C%9A%E6%8E%B7%E8%87%B3%E8%87%B4%E7%BD%AE%E5%B8%9C%E5%B3%99%E5%88%B6%E6%99%BA%E7%A7%A9%E7%A8%9A%E8%B4%A8%E7%82%99%E7%97%94%E6%BB%9E%E6%B2%BB%E7%AA%92%E5%8D%AE%E9%99%9F%E9%83%85%E5%9F%B4%E8%8A%B7%E6%91%AD%E5%B8%99%E5%BF%AE%E5%BD%98%E5%92%AB%E9%AA%98%E6%A0%89%E6%9E%B3%E6%A0%80%E6%A1%8E%E8%BD%B5%E8%BD%BE%E6%94%B4%E8%B4%BD%E8%86%A3%E7%A5%89%E7%A5%97%E9%BB%B9%E9%9B%89%E9%B8%B7%E7%97%A3%E8%9B%AD%E7%B5%B7%E9%85%AF%E8%B7%96%E8%B8%AC%E8%B8%AF%E8%B1%B8%E8%A7%AF%22%2C%22zhong%22%3A%22%E4%B8%AD%E7%9B%85%E5%BF%A0%E9%92%9F%E8%A1%B7%E7%BB%88%E7%A7%8D%E8%82%BF%E9%87%8D%E4%BB%B2%E4%BC%97%E5%86%A2%E9%94%BA%E8%9E%BD%E8%88%82%E8%88%AF%E8%B8%B5%22%2C%22zhou%22%3A%22%E8%88%9F%E5%91%A8%E5%B7%9E%E6%B4%B2%E8%AF%8C%E7%B2%A5%E8%BD%B4%E8%82%98%E5%B8%9A%E5%92%92%E7%9A%B1%E5%AE%99%E6%98%BC%E9%AA%A4%E5%95%84%E7%9D%80%E5%80%9C%E8%AF%B9%E8%8D%AE%E9%AC%BB%E7%BA%A3%E8%83%84%E7%A2%A1%E7%B1%80%E8%88%B3%E9%85%8E%E9%B2%B7%22%2C%22zhu%22%3A%22%E7%8F%A0%E6%A0%AA%E8%9B%9B%E6%9C%B1%E7%8C%AA%E8%AF%B8%E8%AF%9B%E9%80%90%E7%AB%B9%E7%83%9B%E7%85%AE%E6%8B%84%E7%9E%A9%E5%98%B1%E4%B8%BB%E8%91%97%E6%9F%B1%E5%8A%A9%E8%9B%80%E8%B4%AE%E9%93%B8%E7%AD%91%E4%BD%8F%E6%B3%A8%E7%A5%9D%E9%A9%BB%E4%BC%AB%E4%BE%8F%E9%82%BE%E8%8B%8E%E8%8C%B1%E6%B4%99%E6%B8%9A%E6%BD%B4%E9%A9%BA%E6%9D%BC%E6%A7%A0%E6%A9%A5%E7%82%B7%E9%93%A2%E7%96%B0%E7%98%83%E8%9A%B0%E7%AB%BA%E7%AE%B8%E7%BF%A5%E8%BA%85%E9%BA%88%22%2C%22zhua%22%3A%22%E6%8A%93%22%2C%22zhuai%22%3A%22%E6%8B%BD%22%2C%22zhuan%22%3A%22%E4%B8%93%E7%A0%96%E8%BD%AC%E6%92%B0%E8%B5%9A%E7%AF%86%E6%8A%9F%E5%95%AD%E9%A2%9B%22%2C%22zhuang%22%3A%22%E6%A1%A9%E5%BA%84%E8%A3%85%E5%A6%86%E6%92%9E%E5%A3%AE%E7%8A%B6%E4%B8%AC%22%2C%22zhui%22%3A%22%E6%A4%8E%E9%94%A5%E8%BF%BD%E8%B5%98%E5%9D%A0%E7%BC%80%E8%90%91%E9%AA%93%E7%BC%92%22%2C%22zhun%22%3A%22%E8%B0%86%E5%87%86%22%2C%22zhuo%22%3A%22%E6%8D%89%E6%8B%99%E5%8D%93%E6%A1%8C%E7%90%A2%E8%8C%81%E9%85%8C%E7%81%BC%E6%B5%8A%E5%80%AC%E8%AF%BC%E5%BB%B4%E8%95%9E%E6%93%A2%E5%95%9C%E6%B5%9E%E6%B6%BF%E6%9D%93%E7%84%AF%E7%A6%9A%E6%96%AB%22%2C%22zi%22%3A%22%E5%85%B9%E5%92%A8%E8%B5%84%E5%A7%BF%E6%BB%8B%E6%B7%84%E5%AD%9C%E7%B4%AB%E4%BB%94%E7%B1%BD%E6%BB%93%E5%AD%90%E8%87%AA%E6%B8%8D%E5%AD%97%E8%B0%98%E5%B5%AB%E5%A7%8A%E5%AD%B3%E7%BC%81%E6%A2%93%E8%BE%8E%E8%B5%80%E6%81%A3%E7%9C%A6%E9%94%B1%E7%A7%AD%E8%80%94%E7%AC%AB%E7%B2%A2%E8%A7%9C%E8%A8%BE%E9%B2%BB%E9%AB%AD%22%2C%22zong%22%3A%22%E9%AC%83%E6%A3%95%E8%B8%AA%E5%AE%97%E7%BB%BC%E6%80%BB%E7%BA%B5%E8%85%99%E7%B2%BD%22%2C%22zou%22%3A%22%E9%82%B9%E8%B5%B0%E5%A5%8F%E6%8F%8D%E9%84%B9%E9%B2%B0%22%2C%22zu%22%3A%22%E7%A7%9F%E8%B6%B3%E5%8D%92%E6%97%8F%E7%A5%96%E8%AF%85%E9%98%BB%E7%BB%84%E4%BF%8E%E8%8F%B9%E5%95%90%E5%BE%82%E9%A9%B5%E8%B9%B4%22%2C%22zuan%22%3A%22%E9%92%BB%E7%BA%82%E6%94%A5%E7%BC%B5%22%2C%22zui%22%3A%22%E5%98%B4%E9%86%89%E6%9C%80%E7%BD%AA%22%2C%22zun%22%3A%22%E5%B0%8A%E9%81%B5%E6%92%99%E6%A8%BD%E9%B3%9F%22%2C%22zuo%22%3A%22%E6%98%A8%E5%B7%A6%E4%BD%90%E6%9F%9E%E5%81%9A%E4%BD%9C%E5%9D%90%E5%BA%A7%E9%98%9D%E9%98%BC%E8%83%99%E7%A5%9A%E9%85%A2%22%2C%22cou%22%3A%22%E8%96%AE%E6%A5%B1%E8%BE%8F%E8%85%A0%22%2C%22nang%22%3A%22%E6%94%AE%E5%93%9D%E5%9B%94%E9%A6%95%E6%9B%A9%22%2C%22o%22%3A%22%E5%96%94%22%2C%22dia%22%3A%22%E5%97%B2%22%2C%22chuai%22%3A%22%E5%98%AC%E8%86%AA%E8%B8%B9%22%2C%22cen%22%3A%22%E5%B2%91%E6%B6%94%22%2C%22diu%22%3A%22%E9%93%A5%22%2C%22nou%22%3A%22%E8%80%A8%22%2C%22fou%22%3A%22%E7%BC%B6%22%2C%22bia%22%3A%22%E9%AB%9F%22%7D",
            init: function() {
                this.PinYin = JSON.parse(decodeURIComponent(this.PinYin))
            },
            CC2PY: function(e, t) {
                for (var i = e.length, n = ["", ""], o = RegExp("[a-zA-Z0-9]"), r = 0; i > r; r++) {
                    var a = e.substr(r, 1),
                        s = this.arraySearch(a);
                    s ? (n[0] += s, n[1] += s.substring(0, 1)) : t ? o.test(a) && (n[0] += a, n[1] += a) : (n[0] += a, n[1] += a)
                }
                return n[0] = n[0].replace(/\s/g, ""), n[1] = n[1].replace(/\s/g, ""), n
            },
            CC2PYS: function(e) {
                for (var t = e.length, i = "", n = RegExp("[a-zA-Z0-9]"), o = 0; t > o; o++) {
                    var r = e.substr(o, 1),
                        a = this.arraySearch(r);
                    n.test(r) ? i += r : a !== !1 && (i += a.substring(0, 1))
                }
                return i = i.replace(/ /g, "")
            },
            arraySearch: function(e) {
                for (var t in this.PinYin)
                    if (-1 != this.PinYin[t].indexOf(e)) return t;
                return !1
            },
            ucfirst: function(e) {
                if (e.length > 0) {
                    var t = e.substr(0, 1).toUpperCase(),
                        i = e.substr(1, e.length);
                    return t + i
                }
            }
        };
        t.init(), void 0 !== e.Airdroid ? e.Airdroid.Util.SortKey = t : e.SortKey = t
    }(this);