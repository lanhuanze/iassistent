/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/sys/pop_alert_box.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += "<div id='alert_box' class=\"", animate && (__p += " animate "), __p += '" >\r\n    ', iconType && (__p += '\r\n    <div id="alert_box_top">\r\n        <div id="alert_box_img">\r\n            <div class="icon-' + (null == (__t = iconType) ? "" : __t) + "\"></div>\r\n        </div>\r\n        <p id='alert_box_tip'>" + (null == (__t = title) ? "" : __t) + "</p>\r\n    </div>\r\n    "), __p += "\r\n    ", description && (__p += '\r\n    <div id="alert_box_msg">\r\n        ' + (null == (__t = description) ? "" : __t) + "\r\n    </div>\r\n    "), __p += "\r\n    ", isPrompt && (__p += '\r\n    <div id="alert_box_inputCon">\r\n        ', isPrompt.type && (__p += '\r\n        <div id="alert_box_input_icon">\r\n            <div class="icon-' + (null == (__t = isPrompt.type) ? "" : __t) + '"></div>\r\n        </div>\r\n        '), __p += '\r\n        <div id="alert_box_inputBody" class="', isPrompt.type || (__p += "noIcon"), __p += '">\r\n            <div id="alert_box_inputTitle">' + (null == (__t = isPrompt.title) ? "" : __t) + '</div>\r\n            <input type="text" id="alert_box_input_input" placeholder="' + (null == (__t = isPrompt.fieldName) ? "" : __t) + '" />\r\n            <div id="alert_box_input_tipCon">\r\n                <div class="icon-input-tip"></div>\r\n                <div id="alert_box_input_tip"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    '), __p += "\r\n    ", bottomBar && (__p += '\r\n    <div id="alert_box_bottom" class="ui-actions is-border-boxing">\r\n        ', bottomBar.hasCheckBox && (__p += '\r\n        <div id="alert_box_remind">\r\n            ', __p += bottomBar.hasCheckBox.checked ? '\r\n            <div class="checkbox checked" check="1"></div>\r\n            ' : '\r\n            <div class="checkbox" check="0"></div>\r\n            ', __p += '\r\n            <div class="i-float-left ml10">' + (null == (__t = bottomBar.hasCheckBox.checkTip) ? "" : __t) + "</div>\r\n        </div>\r\n        "), __p += "\r\n        ", bottomBar.hasOkBtn && (__p += "\r\n        <div class='btn " + (null == (__t = bottomBar.hasOkBtn.cssClass) ? "" : __t) + "' id='alert_box_yes_btn' tabindex=\"-1\">" + (null == (__t = bottomBar.hasOkBtn.msg) ? "" : __t) + "</div>\r\n        "), __p += "\r\n        ", bottomBar.hasCancelBtn && (__p += "\r\n        <div class='btn " + (null == (__t = bottomBar.hasCancelBtn.cssClass) ? "" : __t) + "' id='alert_box_no_btn' tabindex=\"-1\">" + (null == (__t = bottomBar.hasCancelBtn.msg) ? "" : __t) + "</div>\r\n        "), __p += "\r\n    </div>\r\n    "), __p += "\r\n</div>\r\n";
    return __p
};
this.ajst["views/sys/pop_window_disabled_tip.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="pop-window-disabled">\r\n    <div>' + (null == (__t = lang.pop_window_disabled_des) ? "" : __t) + "</div>\r\n    <i></i>\r\n</div>";
    return __p
};
this.ajst["views/mod/file/select_sdcard_dialog.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="i-float-left img-' + (null == (__t = type) ? "" : __t) + '-l"></div>\r\n<div class="select-sdcard-tip">' + (null == (__t = title) ? "" : __t) + '</div>\r\n<input class="input-dropdown-tree" type="text" value="' + (null == (__t = def) ? "" : __t) + '" placeholder="' + (null == (__t = placeholder) ? "" : __t) + '"/><span class="dropdown-caret"></span>\r\n<div class="clearfix"></div>';
    return __p
};
this.ajst["views/mod/usercenter/notice_tip.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="uc_notice_tip">\r\n    <p>' + (null == (__t = lang.cancel_desktop_notification) ? "" : __t) + '</p>\r\n    <p>\r\n        <a href="http://help.airdroid.com/customer/portal/articles/1487791" target="_blank"> ' + (null == (__t = lang.How_to_set_notication) ? "" : __t) + ' >></a>\r\n    </p>\r\n    <div class="col">\r\n        <img src="' + (null == (__t = Airdroid.Service.getImgAssets("usercenter/notice_set_step1.png")) ? "" : __t) + '" />\r\n        <p>1. ' + (null == (__t = lang.notification_set_setp1) ? "" : __t) + '</p>\r\n    </div>\r\n    <div class="col right">\r\n        <img src="' + (null == (__t = Airdroid.Service.getImgAssets("usercenter/notice_set_step2.png")) ? "" : __t) + '" />\r\n        <p>2. ' + (null == (__t = lang.notification_set_setp2) ? "" : __t) + "</p>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/server_error_tip.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="server-network-error-tip">\r\n    <div></div>\r\n    <p>' + (null == (__t = lang.server_network_error_tip.format("<a>", "</a>")) ? "" : __t) + "</p>\r\n</div>";
    return __p
};
this.ajst["views/mod/set_save_type.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="quick-settingPanel">\r\n    <div class="quick-settingItem popup-menu-using-item" data-save-to="0">\r\n        <span class="icon-pc"></span>\r\n        ' + (null == (__t = common.save_to_pc) ? "" : __t) + '\r\n        <span class="quick-settingItem-check"></span>\r\n    </div>\r\n    <a class="popup-menu-seprate"></a>\r\n\r\n    <div class="quick-settingItem popup-menu-using-item" data-save-to="1">\r\n        <span class="icon-phone"></span>\r\n        ' + (null == (__t = common.save_to_phone) ? "" : __t) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <span class="quick-settingItem-check"></span>\r\n    </div>\r\n</div>';
    return __p
};
(function(e, t) {
    function n(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var o = "data-" + n.replace($, "-$1").toLowerCase();
            if (i = e.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : I.isNaN(i) ? R.test(i) ? I.parseJSON(i) : i : parseFloat(i)
                } catch (r) {}
                I.data(e, n, i)
            } else i = t
        }
        return i
    }

    function i(e) {
        for (var t in e)
            if ("toJSON" !== t) return !1;
        return !0
    }

    function o(e, n, i) {
        var o = n + "defer",
            r = n + "queue",
            a = n + "mark",
            s = I.data(e, o, t, !0);
        !s || "queue" !== i && I.data(e, r, t, !0) || "mark" !== i && I.data(e, a, t, !0) || setTimeout(function() {
            I.data(e, r, t, !0) || I.data(e, a, t, !0) || (I.removeData(e, o, !0), s.resolve())
        }, 0)
    }

    function r() {
        return !1
    }

    function a() {
        return !0
    }

    function s(e, n, i) {
        var o = I.extend({}, i[0]);
        o.type = e, o.originalEvent = {}, o.liveFired = t, I.event.handle.call(n, o), o.isDefaultPrevented() && i[0].preventDefault()
    }

    function l(e) {
        var t, n, i, o, r, a, s, l, c, d, u, p, f = [],
            h = [],
            m = I._data(this, "events");
        if (e.liveFired !== this && m && m.live && !e.target.disabled && (!e.button || "click" !== e.type)) {
            e.namespace && (u = RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), e.liveFired = this;
            var g = m.live.slice(0);
            for (s = 0; g.length > s; s++) r = g[s], r.origType.replace(X, "") === e.type ? h.push(r.selector) : g.splice(s--, 1);
            for (o = I(e.target).closest(h, e.currentTarget), l = 0, c = o.length; c > l; l++)
                for (d = o[l], s = 0; g.length > s; s++) r = g[s], d.selector !== r.selector || u && !u.test(r.namespace) || d.elem.disabled || (a = d.elem, i = null, ("mouseenter" === r.preType || "mouseleave" === r.preType) && (e.type = r.preType, i = I(e.relatedTarget).closest(r.selector)[0], i && I.contains(a, i) && (i = a)), i && i === a || f.push({
                    elem: a,
                    handleObj: r,
                    level: d.level
                }));
            for (l = 0, c = f.length; c > l && (o = f[l], !(n && o.level > n)) && (e.currentTarget = o.elem, e.data = o.handleObj.data, e.handleObj = o.handleObj, p = o.handleObj.origHandler.apply(o.elem, arguments), p !== !1 && !e.isPropagationStopped() || (n = o.level, p === !1 && (t = !1), !e.isImmediatePropagationStopped())); l++);
            return t
        }
    }

    function c(e, t) {
        return (e && "*" !== e ? e + "." : "") + t.replace(J, "`").replace(Z, "&")
    }

    function d(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function u(e, t, n) {
        if (t = t || 0, I.isFunction(t)) return I.grep(e, function(e, i) {
            var o = !!t.call(e, i, e);
            return o === n
        });
        if (t.nodeType) return I.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = I.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return I.filter(t, i, !n);
            t = I.filter(t, i)
        }
        return I.grep(e, function(e) {
            return I.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        return I.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e, t) {
        if (1 === t.nodeType && I.hasData(e)) {
            var n = I.expando,
                i = I.data(e),
                o = I.data(t, i);
            if (i = i[n]) {
                var r = i.events;
                if (o = o[n] = I.extend({}, i), r) {
                    delete o.handle, o.events = {};
                    for (var a in r)
                        for (var s = 0, l = r[a].length; l > s; s++) I.event.add(t, a + (r[a][s].namespace ? "." : "") + r[a][s].namespace, r[a][s], r[a][s].data)
                }
            }
        }
    }

    function h(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(I.expando))
    }

    function m(e) {
        return "getElementsByTagName" in e ? e.getElementsByTagName("*") : "querySelectorAll" in e ? e.querySelectorAll("*") : []
    }

    function g(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }

    function _(e) {
        I.nodeName(e, "input") ? g(e) : "getElementsByTagName" in e && I.grep(e.getElementsByTagName("input"), g)
    }

    function v(e, t) {
        t.src ? I.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : I.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function y(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = "width" === t ? It : Ot;
        return i > 0 ? ("border" !== n && I.each(o, function() {
            n || (i -= parseFloat(I.css(e, "padding" + this)) || 0), "margin" === n ? i += parseFloat(I.css(e, n + this)) || 0 : i -= parseFloat(I.css(e, "border" + this + "Width")) || 0
        }), i + "px") : (i = kt(e, t, t), (0 > i || null == i) && (i = e.style[t] || 0), i = parseFloat(i) || 0, n && I.each(o, function() {
            i += parseFloat(I.css(e, "padding" + this)) || 0, "padding" !== n && (i += parseFloat(I.css(e, "border" + this + "Width")) || 0), "margin" === n && (i += parseFloat(I.css(e, n + this)) || 0)
        }), i + "px")
    }

    function b(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), I.isFunction(n))
                for (var i, o, r, a = t.toLowerCase().split(Jt), s = 0, l = a.length; l > s; s++) i = a[s], r = /^\+/.test(i), r && (i = i.substr(1) || "*"), o = e[i] = e[i] || [], o[r ? "unshift" : "push"](n)
        }
    }

    function w(e, n, i, o, r, a) {
        r = r || n.dataTypes[0], a = a || {}, a[r] = !0;
        for (var s, l = e[r], c = 0, d = l ? l.length : 0, u = e === nn; d > c && (u || !s); c++) s = l[c](n, i, o), "string" == typeof s && (!u || a[s] ? s = t : (n.dataTypes.unshift(s), s = w(e, n, i, o, s, a)));
        return !u && s || a["*"] || (s = w(e, n, i, o, "*", a)), s
    }

    function A(e, n) {
        var i, o, r = I.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((r[i] ? e : o || (o = {}))[i] = n[i]);
        o && I.extend(!0, e, o)
    }

    function C(e, t, n, i) {
        if (I.isArray(t)) I.each(t, function(t, o) {
            n || Ht.test(e) ? i(e, o) : C(e + "[" + ("object" == typeof o || I.isArray(o) ? t : "") + "]", o, n, i)
        });
        else if (n || null == t || "object" != typeof t) i(e, t);
        else
            for (var o in t) C(e + "[" + o + "]", t[o], n, i)
    }

    function T(e, n, i) {
        var o, r, a, s, l = e.contents,
            c = e.dataTypes,
            d = e.responseFields;
        for (r in d) r in i && (n[d[r]] = i[r]);
        for (;
            "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("content-type"));
        if (o)
            for (r in l)
                if (l[r] && l[r].test(o)) {
                    c.unshift(r);
                    break
                }
        if (c[0] in i) a = c[0];
        else {
            for (r in i) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    a = r;
                    break
                }
                s || (s = r)
            }
            a = a || s
        }
        return a ? (a !== c[0] && c.unshift(a), i[a]) : t
    }

    function S(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i, o, r, a, s, l, c, d, u = e.dataTypes,
            p = {},
            f = u.length,
            h = u[0];
        for (i = 1; f > i; i++) {
            if (1 === i)
                for (o in e.converters) "string" == typeof o && (p[o.toLowerCase()] = e.converters[o]);
            if (a = h, h = u[i], "*" === h) h = a;
            else if ("*" !== a && a !== h) {
                if (s = a + " " + h, l = p[s] || p["* " + h], !l) {
                    d = t;
                    for (c in p)
                        if (r = c.split(" "), (r[0] === a || "*" === r[0]) && (d = p[r[1] + " " + h])) {
                            c = p[c], c === !0 ? l = d : d === !0 && (l = c);
                            break
                        }
                }
                l || d || I.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : d(c(n)))
            }
        }
        return n
    }

    function k() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function x() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function N() {
        return setTimeout(M, 0), mn = I.now()
    }

    function M() {
        mn = t
    }

    function D(e, t) {
        var n = {};
        return I.each(yn.concat.apply([], yn.slice(0, t)), function() {
            n[this] = e
        }), n
    }

    function L(e) {
        if (!gn[e]) {
            var t = P.body,
                n = I("<" + e + ">").appendTo(t),
                i = n.css("display");
            n.remove(), ("none" === i || "" === i) && (pn || (pn = P.createElement("iframe"), pn.frameBorder = pn.width = pn.height = 0), t.appendChild(pn), fn && pn.createElement || (fn = (pn.contentWindow || pn.contentDocument).document, fn.write(("CSS1Compat" === P.compatMode ? "<!doctype html>" : "") + "<html><body>"), fn.close()), n = fn.createElement(e), fn.body.appendChild(n), i = I.css(n, "display"), t.removeChild(pn)), gn[e] = i
        }
        return gn[e]
    }

    function F(e) {
        return I.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var P = e.document,
        E = e.navigator,
        U = e.location,
        I = function() {
            function n() {
                if (!s.isReady) {
                    try {
                        P.documentElement.doScroll("left")
                    } catch (e) {
                        return setTimeout(n, 1), t
                    }
                    s.ready()
                }
            }
            var i, o, r, a, s = function(e, t) {
                    return new s.fn.init(e, t, i)
                },
                l = e.jQuery,
                c = e.$,
                d = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                u = /\S/,
                p = /^\s+/,
                f = /\s+$/,
                h = /\d/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                g = /^[\],:{}\s]*$/,
                _ = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                y = /(?:^|:|,)(?:\s*\[)+/g,
                b = /(webkit)[ \/]([\w.]+)/,
                w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                A = /(msie) ([\w.]+)/,
                C = /(mozilla)(?:.*? rv:([\w.]+))?/,
                T = /-([a-z]|[0-9])/gi,
                S = /^-ms-/,
                k = function(e, t) {
                    return (t + "").toUpperCase()
                },
                x = E.userAgent,
                N = Object.prototype.toString,
                M = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                L = Array.prototype.slice,
                F = String.prototype.trim,
                U = Array.prototype.indexOf,
                I = {};
            return s.fn = s.prototype = {
                constructor: s,
                init: function(e, n, i) {
                    var o, r, a, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && P.body) return this.context = P, this[0] = P.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : d.exec(e), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (o[1]) return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : P, a = m.exec(e), a ? s.isPlainObject(n) ? (e = [P.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([o[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes), s.merge(this, e);
                        if (r = P.getElementById(o[2]), r && r.parentNode) {
                            if (r.id !== o[2]) return i.find(e);
                            this.length = 1, this[0] = r
                        }
                        return this.context = P, this.selector = e, this
                    }
                    return s.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                },
                selector: "",
                jquery: "1.6.4",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return L.call(this, 0)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var i = this.constructor();
                    return s.isArray(e) ? D.apply(i, e) : s.merge(i, e), i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function(e, t) {
                    return s.each(this, e, t)
                },
                ready: function(e) {
                    return s.bindReady(), r.done(e), this
                },
                eq: function(e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(L.apply(this, arguments), "slice", L.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(s.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
                var e, n, i, o, r, a, l = arguments[0] || {},
                    c = 1,
                    d = arguments.length,
                    u = !1;
                for ("boolean" == typeof l && (u = l, l = arguments[1] || {}, c = 2), "object" == typeof l || s.isFunction(l) || (l = {}), d === c && (l = this, --c); d > c; c++)
                    if (null != (e = arguments[c]))
                        for (n in e) i = l[n], o = e[n], l !== o && (u && o && (s.isPlainObject(o) || (r = s.isArray(o))) ? (r ? (r = !1, a = i && s.isArray(i) ? i : []) : a = i && s.isPlainObject(i) ? i : {}, l[n] = s.extend(u, a, o)) : o !== t && (l[n] = o));
                return l
            }, s.extend({
                noConflict: function(t) {
                    return e.$ === s && (e.$ = c), t && e.jQuery === s && (e.jQuery = l), s
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? s.readyWait++ : s.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                        if (!P.body) return setTimeout(s.ready, 1);
                        if (s.isReady = !0, e !== !0 && --s.readyWait > 0) return;
                        r.resolveWith(P, [s]), s.fn.trigger && s(P).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function() {
                    if (!r) {
                        if (r = s._Deferred(), "complete" === P.readyState) return setTimeout(s.ready, 1);
                        if (P.addEventListener) P.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1);
                        else if (P.attachEvent) {
                            P.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (i) {}
                            P.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function(e) {
                    return "function" === s.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === s.type(e)
                },
                isWindow: function(e) {
                    return e && "object" == typeof e && "setInterval" in e
                },
                isNaN: function(e) {
                    return null == e || !h.test(e) || isNaN(e)
                },
                type: function(e) {
                    return null == e ? e + "" : I[N.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !M.call(e, "constructor") && !M.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || M.call(e, i)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw e
                },
                parseJSON: function(n) {
                    return "string" == typeof n && n ? (n = s.trim(n), e.JSON && e.JSON.parse ? e.JSON.parse(n) : g.test(n.replace(_, "@").replace(v, "]").replace(y, "")) ? Function("return " + n)() : (s.error("Invalid JSON: " + n), t)) : null
                },
                parseXML: function(n) {
                    var i, o;
                    try {
                        e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (r) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && u.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(S, "ms-").replace(T, k)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, i) {
                    var o, r = 0,
                        a = e.length,
                        l = a === t || s.isFunction(e);
                    if (i)
                        if (l) {
                            for (o in e)
                                if (n.apply(e[o], i) === !1) break
                        } else
                            for (; a > r && n.apply(e[r++], i) !== !1;);
                    else if (l) {
                        for (o in e)
                            if (n.call(e[o], o, e[o]) === !1) break
                    } else
                        for (; a > r && n.call(e[r], r, e[r++]) !== !1;);
                    return e
                },
                trim: F ? function(e) {
                    return null == e ? "" : F.call(e)
                } : function(e) {
                    return null == e ? "" : ("" + e).replace(p, "").replace(f, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (null != e) {
                        var i = s.type(e);
                        null == e.length || "string" === i || "function" === i || "regexp" === i || s.isWindow(e) ? D.call(n, e) : s.merge(n, e)
                    }
                    return n
                },
                inArray: function(e, t) {
                    if (!t) return -1;
                    if (U) return U.call(t, e);
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                merge: function(e, n) {
                    var i = e.length,
                        o = 0;
                    if ("number" == typeof n.length)
                        for (var r = n.length; r > o; o++) e[i++] = n[o];
                    else
                        for (; n[o] !== t;) e[i++] = n[o++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var i, o = [];
                    n = !!n;
                    for (var r = 0, a = e.length; a > r; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
                    return o
                },
                map: function(e, n, i) {
                    var o, r, a = [],
                        l = 0,
                        c = e.length,
                        d = e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e));
                    if (d)
                        for (; c > l; l++) o = n(e[l], l, i), null != o && (a[a.length] = o);
                    else
                        for (r in e) o = n(e[r], r, i), null != o && (a[a.length] = o);
                    return a.concat.apply([], a)
                },
                guid: 1,
                proxy: function(e, n) {
                    if ("string" == typeof n) {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!s.isFunction(e)) return t;
                    var o = L.call(arguments, 2),
                        r = function() {
                            return e.apply(n, o.concat(L.call(arguments)))
                        };
                    return r.guid = e.guid = e.guid || r.guid || s.guid++, r
                },
                access: function(e, n, i, o, r, a) {
                    var l = e.length;
                    if ("object" == typeof n) {
                        for (var c in n) s.access(e, c, n[c], o, r, i);
                        return e
                    }
                    if (i !== t) {
                        o = !a && o && s.isFunction(i);
                        for (var d = 0; l > d; d++) r(e[d], n, o ? i.call(e[d], d, r(e[d], n)) : i, a);
                        return e
                    }
                    return l ? r(e[0], n) : t
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var t = b.exec(e) || w.exec(e) || A.exec(e) || 0 > e.indexOf("compatible") && C.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                        return i && i instanceof s && !(i instanceof e) && (i = e(i)), s.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(P);
                    return e
                },
                browser: {}
            }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                I["[object " + t + "]"] = t.toLowerCase()
            }), o = s.uaMatch(x), o.browser && (s.browser[o.browser] = !0, s.browser.version = o.version), s.browser.webkit && (s.browser.safari = !0), u.test(" ") && (p = /^[\s\xA0]+/, f = /[\s\xA0]+$/), i = s(P), P.addEventListener ? a = function() {
                P.removeEventListener("DOMContentLoaded", a, !1), s.ready()
            } : P.attachEvent && (a = function() {
                "complete" === P.readyState && (P.detachEvent("onreadystatechange", a), s.ready())
            }), s
        }(),
        O = "done fail isResolved isRejected promise then always pipe".split(" "),
        B = [].slice;
    I.extend({
        _Deferred: function() {
            var e, t, n, i = [],
                o = {
                    done: function() {
                        if (!n) {
                            var t, r, a, s, l, c = arguments;
                            for (e && (l = e, e = 0), t = 0, r = c.length; r > t; t++) a = c[t], s = I.type(a), "array" === s ? o.done.apply(o, a) : "function" === s && i.push(a);
                            l && o.resolveWith(l[0], l[1])
                        }
                        return this
                    },
                    resolveWith: function(o, r) {
                        if (!n && !e && !t) {
                            r = r || [], t = 1;
                            try {
                                for (; i[0];) i.shift().apply(o, r)
                            } finally {
                                e = [o, r], t = 0
                            }
                        }
                        return this
                    },
                    resolve: function() {
                        return o.resolveWith(this, arguments), this
                    },
                    isResolved: function() {
                        return !(!t && !e)
                    },
                    cancel: function() {
                        return n = 1, i = [], this
                    }
                };
            return o
        },
        Deferred: function(e) {
            var t, n = I._Deferred(),
                i = I._Deferred();
            return I.extend(n, {
                then: function(e, t) {
                    return n.done(e).fail(t), this
                },
                always: function() {
                    return n.done.apply(n, arguments).fail.apply(this, arguments)
                },
                fail: i.done,
                rejectWith: i.resolveWith,
                reject: i.resolve,
                isRejected: i.isResolved,
                pipe: function(e, t) {
                    return I.Deferred(function(i) {
                        I.each({
                            done: [e, "resolve"],
                            fail: [t, "reject"]
                        }, function(e, t) {
                            var o, r = t[0],
                                a = t[1];
                            I.isFunction(r) ? n[e](function() {
                                o = r.apply(this, arguments), o && I.isFunction(o.promise) ? o.promise().then(i.resolve, i.reject) : i[a + "With"](this === n ? i : this, [o])
                            }) : n[e](i[a])
                        })
                    }).promise()
                },
                promise: function(e) {
                    if (null == e) {
                        if (t) return t;
                        t = e = {}
                    }
                    for (var i = O.length; i--;) e[O[i]] = n[O[i]];
                    return e
                }
            }), n.done(i.cancel).fail(n.cancel), delete n.cancel, e && e.call(n, n), n
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    n[e] = arguments.length > 1 ? B.call(arguments, 0) : t, --r || a.resolveWith(a, B.call(n, 0))
                }
            }
            var n = arguments,
                i = 0,
                o = n.length,
                r = o,
                a = 1 >= o && e && I.isFunction(e.promise) ? e : I.Deferred();
            if (o > 1) {
                for (; o > i; i++) n[i] && I.isFunction(n[i].promise) ? n[i].promise().then(t(i), a.reject) : --r;
                r || a.resolveWith(a, n)
            } else a !== e && a.resolveWith(a, o ? [e] : []);
            return a.promise()
        }
    }), I.support = function() {
        var e, t, n, i, o, r, a, s, l, c, d, u, p, f, h, m, g = P.createElement("div"),
            _ = P.documentElement;
        if (g.setAttribute("className", "t"), g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", e = g.getElementsByTagName("*"), t = g.getElementsByTagName("a")[0], !e || !e.length || !t) return {};
        n = P.createElement("select"), i = n.appendChild(P.createElement("option")), o = g.getElementsByTagName("input")[0], a = {
            leadingWhitespace: 3 === g.firstChild.nodeType,
            tbody: !g.getElementsByTagName("tbody").length,
            htmlSerialize: !!g.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: "/a" === t.getAttribute("href"),
            opacity: /^0.55$/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: "on" === o.value,
            optSelected: i.selected,
            getSetAttribute: "t" !== g.className,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, o.checked = !0, a.noCloneChecked = o.cloneNode(!0).checked, n.disabled = !0, a.optDisabled = !i.disabled;
        try {
            delete g.test
        } catch (v) {
            a.deleteExpando = !1
        }!g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", function() {
            a.noCloneEvent = !1
        }), g.cloneNode(!0).fireEvent("onclick")), o = P.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), a.radioValue = "t" === o.value, o.setAttribute("checked", "checked"), g.appendChild(o), s = P.createDocumentFragment(), s.appendChild(g.firstChild), a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, g.innerHTML = "", g.style.width = g.style.paddingLeft = "1px", l = P.getElementsByTagName("body")[0], d = P.createElement(l ? "div" : "body"), u = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, l && I.extend(u, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (h in u) d.style[h] = u[h];
        if (d.appendChild(g), c = l || _, c.insertBefore(d, c.firstChild), a.appendChecked = o.checked, a.boxModel = 2 === g.offsetWidth, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== g.offsetWidth), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", p = g.getElementsByTagName("td"), m = 0 === p[0].offsetHeight, p[0].style.display = "", p[1].style.display = "none", a.reliableHiddenOffsets = m && 0 === p[0].offsetHeight, g.innerHTML = "", P.defaultView && P.defaultView.getComputedStyle && (r = P.createElement("div"), r.style.width = "0", r.style.marginRight = "0", g.appendChild(r), a.reliableMarginRight = 0 === (parseInt((P.defaultView.getComputedStyle(r, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), d.innerHTML = "", c.removeChild(d), g.attachEvent)
            for (h in {
                submit: 1,
                change: 1,
                focusin: 1
            }) f = "on" + h, m = f in g, m || (g.setAttribute(f, "return;"), m = "function" == typeof g[f]), a[h + "Bubbles"] = m;
        return d = s = n = i = l = r = g = o = null, a
    }(), I.boxModel = I.support.boxModel;
    var R = /^(?:\{.*\}|\[.*\])$/,
        $ = /([A-Z])/g;
    I.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (I.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? I.cache[e[I.expando]] : e[I.expando], !!e && !i(e)
        },
        data: function(e, n, i, o) {
            if (I.acceptData(e)) {
                var r, a, s = I.expando,
                    l = "string" == typeof n,
                    c = e.nodeType,
                    d = c ? I.cache : e,
                    u = c ? e[I.expando] : e[I.expando] && I.expando;
                if (!(!u || o && u && d[u] && !d[u][s]) || !l || i !== t) return u || (c ? e[I.expando] = u = ++I.uuid : u = I.expando), d[u] || (d[u] = {}, c || (d[u].toJSON = I.noop)), ("object" == typeof n || "function" == typeof n) && (o ? d[u][s] = I.extend(d[u][s], n) : d[u] = I.extend(d[u], n)), r = d[u], o && (r[s] || (r[s] = {}), r = r[s]), i !== t && (r[I.camelCase(n)] = i), "events" !== n || r[n] ? (l ? (a = r[n], null == a && (a = r[I.camelCase(n)])) : a = r, a) : r[s] && r[s].events
            }
        },
        removeData: function(e, t, n) {
            if (I.acceptData(e)) {
                var o, r = I.expando,
                    a = e.nodeType,
                    s = a ? I.cache : e,
                    l = a ? e[I.expando] : I.expando;
                if (s[l] && !(t && (o = n ? s[l][r] : s[l], o && (o[t] || (t = I.camelCase(t)), delete o[t], !i(o))) || n && (delete s[l][r], !i(s[l])))) {
                    var c = s[l][r];
                    I.support.deleteExpando || !s.setInterval ? delete s[l] : s[l] = null, c ? (s[l] = {}, a || (s[l].toJSON = I.noop), s[l][r] = c) : a && (I.support.deleteExpando ? delete e[I.expando] : e.removeAttribute ? e.removeAttribute(I.expando) : e[I.expando] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return I.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = I.noData[e.nodeName.toLowerCase()];
                if (t) return !(t === !0 || e.getAttribute("classid") !== t)
            }
            return !0
        }
    }), I.fn.extend({
        data: function(e, i) {
            var o = null;
            if (e === t) {
                if (this.length && (o = I.data(this[0]), 1 === this[0].nodeType))
                    for (var r, a = this[0].attributes, s = 0, l = a.length; l > s; s++) r = a[s].name, 0 === r.indexOf("data-") && (r = I.camelCase(r.substring(5)), n(this[0], r, o[r]));
                return o
            }
            if ("object" == typeof e) return this.each(function() {
                I.data(this, e)
            });
            var c = e.split(".");
            return c[1] = c[1] ? "." + c[1] : "", i === t ? (o = this.triggerHandler("getData" + c[1] + "!", [c[0]]), o === t && this.length && (o = I.data(this[0], e), o = n(this[0], e, o)), o === t && c[1] ? this.data(c[0]) : o) : this.each(function() {
                var t = I(this),
                    n = [c[0], i];
                t.triggerHandler("setData" + c[1] + "!", n), I.data(this, e, i), t.triggerHandler("changeData" + c[1] + "!", n)
            })
        },
        removeData: function(e) {
            return this.each(function() {
                I.removeData(this, e)
            })
        }
    }), I.extend({
        _mark: function(e, n) {
            e && (n = (n || "fx") + "mark", I.data(e, n, (I.data(e, n, t, !0) || 0) + 1, !0))
        },
        _unmark: function(e, n, i) {
            if (e !== !0 && (i = n, n = e, e = !1), n) {
                i = i || "fx";
                var r = i + "mark",
                    a = e ? 0 : (I.data(n, r, t, !0) || 1) - 1;
                a ? I.data(n, r, a, !0) : (I.removeData(n, r, !0), o(n, i, "mark"))
            }
        },
        queue: function(e, n, i) {
            if (e) {
                n = (n || "fx") + "queue";
                var o = I.data(e, n, t, !0);
                return i && (!o || I.isArray(i) ? o = I.data(e, n, I.makeArray(i), !0) : o.push(i)), o || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = I.queue(e, t),
                i = n.shift();
            "inprogress" === i && (i = n.shift()), i && ("fx" === t && n.unshift("inprogress"), i.call(e, function() {
                I.dequeue(e, t)
            })), n.length || (I.removeData(e, t + "queue", !0), o(e, t, "queue"))
        }
    }), I.fn.extend({
        queue: function(e, n) {
            return "string" != typeof e && (n = e, e = "fx"), n === t ? I.queue(this[0], e) : this.each(function() {
                var t = I.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && I.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                I.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = I.fx ? I.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function() {
                var n = this;
                setTimeout(function() {
                    I.dequeue(n, t)
                }, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function i() {
                --l || r.resolveWith(a, [a])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var o, r = I.Deferred(), a = this, s = a.length, l = 1, c = e + "defer", d = e + "queue", u = e + "mark"; s--;)(o = I.data(a[s], c, t, !0) || (I.data(a[s], d, t, !0) || I.data(a[s], u, t, !0)) && I.data(a[s], c, I._Deferred(), !0)) && (l++, o.done(i));
            return i(), r.promise()
        }
    });
    var H, j, W = /[\n\t\r]/g,
        q = /\s+/,
        V = /\r/g,
        Y = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        G = /^a(?:rea)?$/i,
        Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    I.fn.extend({
        attr: function(e, t) {
            return I.access(this, e, t, !0, I.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                I.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return I.access(this, e, t, !0, I.prop)
        },
        removeProp: function(e) {
            return e = I.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, o, r, a, s;
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(q), n = 0, i = this.length; i > n; n++)
                    if (o = this[n], 1 === o.nodeType)
                        if (o.className || 1 !== t.length) {
                            for (r = " " + o.className + " ", a = 0, s = t.length; s > a; a++) ~r.indexOf(" " + t[a] + " ") || (r += t[a] + " ");
                            o.className = I.trim(r)
                        } else o.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, o, r, a, s, l;
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(q), i = 0, o = this.length; o > i; i++)
                    if (r = this[i], 1 === r.nodeType && r.className)
                        if (e) {
                            for (a = (" " + r.className + " ").replace(W, " "), s = 0, l = n.length; l > s; s++) a = a.replace(" " + n[s] + " ", " ");
                            r.className = I.trim(a)
                        } else r.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return I.isFunction(e) ? this.each(function(n) {
                I(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var o, r = 0, a = I(this), s = t, l = e.split(q); o = l[r++];) s = i ? s : !a.hasClass(o), a[s ? "addClass" : "removeClass"](o);
                else("undefined" === n || "boolean" === n) && (this.className && I._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : I._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, i, o = this[0];
            if (!arguments.length) return o ? (n = I.valHooks[o.nodeName.toLowerCase()] || I.valHooks[o.type], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(V, "") : null == i ? "" : i)) : t;
            var r = I.isFunction(e);
            return this.each(function(i) {
                var o, a = I(this);
                1 === this.nodeType && (o = r ? e.call(this, i, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : I.isArray(o) && (o = I.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), n = I.valHooks[this.nodeName.toLowerCase()] || I.valHooks[this.type], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
            })
        }
    }), I.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n = e.selectedIndex,
                        i = [],
                        o = e.options,
                        r = "select-one" === e.type;
                    if (0 > n) return null;
                    for (var a = r ? n : 0, s = r ? n + 1 : o.length; s > a; a++) {
                        var l = o[a];
                        if (!(!l.selected || (I.support.optDisabled ? l.disabled : null !== l.getAttribute("disabled")) || l.parentNode.disabled && I.nodeName(l.parentNode, "optgroup"))) {
                            if (t = I(l).val(), r) return t;
                            i.push(t)
                        }
                    }
                    return r && !i.length && o.length ? I(o[n]).val() : i
                },
                set: function(e, t) {
                    var n = I.makeArray(t);
                    return I(e).find("option").each(function() {
                        this.selected = I.inArray(I(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function(e, n, i, o) {
            var r = e.nodeType;
            if (!e || 3 === r || 8 === r || 2 === r) return t;
            if (o && n in I.attrFn) return I(e)[n](i);
            if (!("getAttribute" in e)) return I.prop(e, n, i);
            var a, s, l = 1 !== r || !I.isXMLDoc(e);
            return l && (n = I.attrFix[n] || n, s = I.attrHooks[n], s || (Q.test(n) ? s = j : H && (s = H))), i !== t ? null === i ? (I.removeAttr(e, n), t) : s && "set" in s && l && (a = s.set(e, i, n)) !== t ? a : (e.setAttribute(n, "" + i), i) : s && "get" in s && l && null !== (a = s.get(e, n)) ? a : (a = e.getAttribute(n), null === a ? t : a)
        },
        removeAttr: function(e, t) {
            var n;
            1 === e.nodeType && (t = I.attrFix[t] || t, I.attr(e, t, ""), e.removeAttribute(t), Q.test(t) && (n = I.propFix[t] || t) in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Y.test(e.nodeName) && e.parentNode) I.error("type property can't be changed");
                    else if (!I.support.radioValue && "radio" === t && I.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return H && I.nodeName(e, "button") ? H.get(e, t) : t in e ? e.value : null
                },
                set: function(e, n, i) {
                    return H && I.nodeName(e, "button") ? H.set(e, n, i) : (e.value = n, t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var o = e.nodeType;
            if (!e || 3 === o || 8 === o || 2 === o) return t;
            var r, a, s = 1 !== o || !I.isXMLDoc(e);
            return s && (n = I.propFix[n] || n, a = I.propHooks[n]), i !== t ? a && "set" in a && (r = a.set(e, i, n)) !== t ? r : e[n] = i : a && "get" in a && null !== (r = a.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || G.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), I.attrHooks.tabIndex = I.propHooks.tabIndex, j = {
        get: function(e, n) {
            var i;
            return I.prop(e, n) === !0 || (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? I.removeAttr(e, n) : (i = I.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, I.support.getSetAttribute || (H = I.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && "" !== i.nodeValue ? i.nodeValue : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = P.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, I.each(["width", "height"], function(e, n) {
        I.attrHooks[n] = I.extend(I.attrHooks[n], {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(n, "auto"), i) : t
            }
        })
    })), I.support.hrefNormalized || I.each(["href", "src", "width", "height"], function(e, n) {
        I.attrHooks[n] = I.extend(I.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), I.support.style || (I.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), I.support.optSelected || (I.propHooks.selected = I.extend(I.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), I.support.checkOn || I.each(["radio", "checkbox"], function() {
        I.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), I.each(["radio", "checkbox"], function() {
        I.valHooks[this] = I.extend(I.valHooks[this], {
            set: function(e, n) {
                return I.isArray(n) ? e.checked = I.inArray(I(e).val(), n) >= 0 : t
            }
        })
    });
    var X = /\.(.*)$/,
        K = /^(?:textarea|input|select)$/i,
        J = /\./g,
        Z = / /g,
        et = /[^\w\s.|`]/g,
        tt = function(e) {
            return e.replace(et, "\\$&")
        };
    I.event = {
        add: function(e, n, i, o) {
            if (3 !== e.nodeType && 8 !== e.nodeType) {
                if (i === !1) i = r;
                else if (!i) return;
                var a, s;
                i.handler && (a = i, i = a.handler), i.guid || (i.guid = I.guid++);
                var l = I._data(e);
                if (l) {
                    var c = l.events,
                        d = l.handle;
                    c || (l.events = c = {}), d || (l.handle = d = function(e) {
                        return I === t || e && I.event.triggered === e.type ? t : I.event.handle.apply(d.elem, arguments)
                    }), d.elem = e, n = n.split(" ");
                    for (var u, p, f = 0; u = n[f++];) {
                        s = a ? I.extend({}, a) : {
                            handler: i,
                            data: o
                        }, u.indexOf(".") > -1 ? (p = u.split("."), u = p.shift(), s.namespace = p.slice(0).sort().join(".")) : (p = [], s.namespace = ""), s.type = u, s.guid || (s.guid = i.guid);
                        var h = c[u],
                            m = I.event.special[u] || {};
                        h || (h = c[u] = [], m.setup && m.setup.call(e, o, p, d) !== !1 || (e.addEventListener ? e.addEventListener(u, d, !1) : e.attachEvent && e.attachEvent("on" + u, d))), m.add && (m.add.call(e, s), s.handler.guid || (s.handler.guid = i.guid)), h.push(s), I.event.global[u] = !0
                    }
                    e = null
                }
            }
        },
        global: {},
        remove: function(e, n, i, o) {
            if (3 !== e.nodeType && 8 !== e.nodeType) {
                i === !1 && (i = r);
                var a, s, l, c, d, u, p, f, h, m, g = 0,
                    _ = I.hasData(e) && I._data(e),
                    v = _ && _.events;
                if (_ && v)
                    if (n && n.type && (i = n.handler, n = n.type), !n || "string" == typeof n && "." === n.charAt(0)) {
                        n = n || "";
                        for (s in v) I.event.remove(e, s + n)
                    } else {
                        for (n = n.split(" "); s = n[g++];)
                            if (m = s, h = null, c = 0 > s.indexOf("."), d = [], c || (d = s.split("."), s = d.shift(), u = RegExp("(^|\\.)" + I.map(d.slice(0).sort(), tt).join("\\.(?:.*\\.)?") + "(\\.|$)")), f = v[s])
                                if (i) {
                                    for (p = I.event.special[s] || {}, l = o || 0; f.length > l && (h = f[l], i.guid !== h.guid || ((c || u.test(h.namespace)) && (null == o && f.splice(l--, 1), p.remove && p.remove.call(e, h)), null == o)); l++);
                                    (0 === f.length || null != o && 1 === f.length) && (p.teardown && p.teardown.call(e, d) !== !1 || I.removeEvent(e, s, _.handle), a = null, delete v[s])
                                } else
                                    for (l = 0; f.length > l; l++) h = f[l], (c || u.test(h.namespace)) && (I.event.remove(e, m, h.handler, l), f.splice(l--, 1));
                        if (I.isEmptyObject(v)) {
                            var y = _.handle;
                            y && (y.elem = null), delete _.events, delete _.handle, I.isEmptyObject(_) && I.removeData(e, t, !0)
                        }
                    }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, o, r) {
            var a, s = n.type || n,
                l = [];
            if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), a = !0), s.indexOf(".") >= 0 && (l = s.split("."), s = l.shift(), l.sort()), o && !I.event.customEvent[s] || I.event.global[s]) {
                if (n = "object" == typeof n ? n[I.expando] ? n : new I.Event(s, n) : new I.Event(s), n.type = s, n.exclusive = a, n.namespace = l.join("."), n.namespace_re = RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)"), (r || !o) && (n.preventDefault(), n.stopPropagation()), !o) return I.each(I.cache, function() {
                    var e = I.expando,
                        t = this[e];
                    t && t.events && t.events[s] && I.event.trigger(n, i, t.handle.elem)
                }), t;
                if (3 !== o.nodeType && 8 !== o.nodeType) {
                    n.result = t, n.target = o, i = null != i ? I.makeArray(i) : [], i.unshift(n);
                    var c = o,
                        d = 0 > s.indexOf(":") ? "on" + s : "";
                    do {
                        var u = I._data(c, "handle");
                        n.currentTarget = c, u && u.apply(c, i), d && I.acceptData(c) && c[d] && c[d].apply(c, i) === !1 && (n.result = !1, n.preventDefault()), c = c.parentNode || c.ownerDocument || c === n.target.ownerDocument && e
                    } while (c && !n.isPropagationStopped());
                    if (!n.isDefaultPrevented()) {
                        var p, f = I.event.special[s] || {};
                        if (!(f._default && f._default.call(o.ownerDocument, n) !== !1 || "click" === s && I.nodeName(o, "a") || !I.acceptData(o))) {
                            try {
                                d && o[s] && (p = o[d], p && (o[d] = null), I.event.triggered = s, o[s]())
                            } catch (h) {}
                            p && (o[d] = p), I.event.triggered = t
                        }
                    }
                    return n.result
                }
            }
        },
        handle: function(n) {
            n = I.event.fix(n || e.event);
            var i = ((I._data(this, "events") || {})[n.type] || []).slice(0),
                o = !n.exclusive && !n.namespace,
                r = Array.prototype.slice.call(arguments, 0);
            r[0] = n, n.currentTarget = this;
            for (var a = 0, s = i.length; s > a; a++) {
                var l = i[a];
                if (o || n.namespace_re.test(l.namespace)) {
                    n.handler = l.handler, n.data = l.data, n.handleObj = l;
                    var c = l.handler.apply(this, r);
                    if (c !== t && (n.result = c, c === !1 && (n.preventDefault(), n.stopPropagation())), n.isImmediatePropagationStopped()) break
                }
            }
            return n.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(e) {
            if (e[I.expando]) return e;
            var n = e;
            e = I.Event(n);
            for (var i, o = this.props.length; o;) i = this.props[--o], e[i] = n[i];
            if (e.target || (e.target = e.srcElement || P), 3 === e.target.nodeType && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), null == e.pageX && null != e.clientX) {
                var r = e.target.ownerDocument || P,
                    a = r.documentElement,
                    s = r.body;
                e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
            }
            return null != e.which || null == e.charCode && null == e.keyCode || (e.which = null != e.charCode ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), e.which || e.button === t || (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), e
        },
        guid: 1e8,
        proxy: I.proxy,
        special: {
            ready: {
                setup: I.bindReady,
                teardown: I.noop
            },
            live: {
                add: function(e) {
                    I.event.add(this, c(e.origType, e.selector), I.extend({}, e, {
                        handler: l,
                        guid: e.handler.guid
                    }))
                },
                remove: function(e) {
                    I.event.remove(this, c(e.origType, e.selector), e)
                }
            },
            beforeunload: {
                setup: function(e, t, n) {
                    I.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        }
    }, I.removeEvent = P.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, I.Event = function(e, n) {
        return this.preventDefault ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : r) : this.type = e, n && I.extend(this, n), this.timeStamp = I.now(), this[I.expando] = !0, t) : new I.Event(e, n)
    }, I.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a, this.stopPropagation()
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
    };
    var nt = function(e) {
            var t = e.relatedTarget,
                n = !1,
                i = e.type;
            e.type = e.data, t !== this && (t && (n = I.contains(this, t)), n || (I.event.handle.apply(this, arguments), e.type = i))
        },
        it = function(e) {
            e.type = e.data, I.event.handle.apply(this, arguments)
        };
    if (I.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            I.event.special[e] = {
                setup: function(n) {
                    I.event.add(this, t, n && n.selector ? it : nt, e)
                },
                teardown: function(e) {
                    I.event.remove(this, t, e && e.selector ? it : nt)
                }
            }
        }), I.support.submitBubbles || (I.event.special.submit = {
            setup: function() {
                return I.nodeName(this, "form") ? !1 : (I.event.add(this, "click.specialSubmit", function(e) {
                    var t = e.target,
                        n = I.nodeName(t, "input") || I.nodeName(t, "button") ? t.type : "";
                    "submit" !== n && "image" !== n || !I(t).closest("form").length || s("submit", this, arguments)
                }), I.event.add(this, "keypress.specialSubmit", function(e) {
                    var t = e.target,
                        n = I.nodeName(t, "input") || I.nodeName(t, "button") ? t.type : "";
                    "text" !== n && "password" !== n || !I(t).closest("form").length || 13 !== e.keyCode || s("submit", this, arguments)
                }), t)
            },
            teardown: function() {
                I.event.remove(this, ".specialSubmit")
            }
        }), !I.support.changeBubbles) {
        var ot, rt = function(e) {
                var t = I.nodeName(e, "input") ? e.type : "",
                    n = e.value;
                return "radio" === t || "checkbox" === t ? n = e.checked : "select-multiple" === t ? n = e.selectedIndex > -1 ? I.map(e.options, function(e) {
                    return e.selected
                }).join("-") : "" : I.nodeName(e, "select") && (n = e.selectedIndex), n
            },
            at = function at(e) {
                var n, i, o = e.target;
                K.test(o.nodeName) && !o.readOnly && (n = I._data(o, "_change_data"), i = rt(o), ("focusout" !== e.type || "radio" !== o.type) && I._data(o, "_change_data", i), n !== t && i !== n && (null != n || i) && (e.type = "change", e.liveFired = t, I.event.trigger(e, arguments[1], o)))
            };
        I.event.special.change = {
            filters: {
                focusout: at,
                beforedeactivate: at,
                click: function(e) {
                    var t = e.target,
                        n = I.nodeName(t, "input") ? t.type : "";
                    ("radio" === n || "checkbox" === n || I.nodeName(t, "select")) && at.call(this, e)
                },
                keydown: function(e) {
                    var t = e.target,
                        n = I.nodeName(t, "input") ? t.type : "";
                    (13 === e.keyCode && !I.nodeName(t, "textarea") || 32 === e.keyCode && ("checkbox" === n || "radio" === n) || "select-multiple" === n) && at.call(this, e)
                },
                beforeactivate: function(e) {
                    var t = e.target;
                    I._data(t, "_change_data", rt(t))
                }
            },
            setup: function() {
                if ("file" === this.type) return !1;
                for (var e in ot) I.event.add(this, e + ".specialChange", ot[e]);
                return K.test(this.nodeName)
            },
            teardown: function() {
                return I.event.remove(this, ".specialChange"), K.test(this.nodeName)
            }
        }, ot = I.event.special.change.filters, ot.focus = ot.beforeactivate
    }
    I.support.focusinBubbles || I.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            var n = I.event.fix(e);
            n.type = t, n.originalEvent = {}, I.event.trigger(n, null, n.target), n.isDefaultPrevented() && e.preventDefault()
        }
        var i = 0;
        I.event.special[t] = {
            setup: function() {
                0 === i++ && P.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 === --i && P.removeEventListener(e, n, !0)
            }
        }
    }), I.each(["bind", "one"], function(e, n) {
        I.fn[n] = function(e, i, o) {
            var r;
            if ("object" == typeof e) {
                for (var a in e) this[n](a, i, e[a], o);
                return this
            }
            if ((2 === arguments.length || i === !1) && (o = i, i = t), "one" === n ? (r = function(e) {
                    return I(this).unbind(e, r), o.apply(this, arguments)
                }, r.guid = o.guid || I.guid++) : r = o, "unload" === e && "one" !== n) this.one(e, i, o);
            else
                for (var s = 0, l = this.length; l > s; s++) I.event.add(this[s], e, r, i);
            return this
        }
    }), I.fn.extend({
        unbind: function(e, t) {
            if ("object" != typeof e || e.preventDefault)
                for (var n = 0, i = this.length; i > n; n++) I.event.remove(this[n], e, t);
            else
                for (var o in e) this.unbind(o, e[o]);
            return this
        },
        delegate: function(e, t, n, i) {
            return this.live(t, n, i, e)
        },
        undelegate: function(e, t, n) {
            return 0 === arguments.length ? this.unbind("live") : this.die(t, null, n, e)
        },
        trigger: function(e, t) {
            return this.each(function() {
                I.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            return this[0] ? I.event.trigger(e, n, this[0], !0) : t
        },
        toggle: function(e) {
            var t = arguments,
                n = e.guid || I.guid++,
                i = 0,
                o = function(n) {
                    var o = (I.data(this, "lastToggle" + e.guid) || 0) % i;
                    return I.data(this, "lastToggle" + e.guid, o + 1), n.preventDefault(), t[o].apply(this, arguments) || !1
                };
            for (o.guid = n; t.length > i;) t[i++].guid = n;
            return this.click(o)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var st = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    I.each(["live", "die"], function(e, n) {
        I.fn[n] = function(e, i, o, a) {
            var s, l, d, u, p = 0,
                f = a || this.selector,
                h = a ? this : I(this.context);
            if ("object" == typeof e && !e.preventDefault) {
                for (var m in e) h[n](m, i, e[m], f);
                return this
            }
            if ("die" === n && !e && a && "." === a.charAt(0)) return h.unbind(a), this;
            for ((i === !1 || I.isFunction(i)) && (o = i || r, i = t), e = (e || "").split(" "); null != (s = e[p++]);)
                if (l = X.exec(s), d = "", l && (d = l[0], s = s.replace(X, "")), "hover" !== s)
                    if (u = s, st[s] ? (e.push(st[s] + d), s += d) : s = (st[s] || s) + d, "live" === n)
                        for (var g = 0, _ = h.length; _ > g; g++) I.event.add(h[g], "live." + c(s, f), {
                            data: i,
                            selector: f,
                            handler: o,
                            origType: s,
                            origHandler: o,
                            preType: u
                        });
                    else h.unbind("live." + c(s, f), o);
                else e.push("mouseenter" + d, "mouseleave" + d);
            return this
        }
    }), I.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(e, t) {
        I.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
        }, I.attrFn && (I.attrFn[t] = !0)
    }),
        function() {
            function e(e, t, n, i, o, r) {
                for (var a = 0, s = i.length; s > a; a++) {
                    var l = i[a];
                    if (l) {
                        var c = !1;
                        for (l = l[e]; l;) {
                            if (l.sizcache === n) {
                                c = i[l.sizset];
                                break
                            }
                            if (1 !== l.nodeType || r || (l.sizcache = n, l.sizset = a), l.nodeName.toLowerCase() === t) {
                                c = l;
                                break
                            }
                            l = l[e]
                        }
                        i[a] = c
                    }
                }
            }

            function n(e, t, n, i, o, r) {
                for (var a = 0, s = i.length; s > a; a++) {
                    var l = i[a];
                    if (l) {
                        var c = !1;
                        for (l = l[e]; l;) {
                            if (l.sizcache === n) {
                                c = i[l.sizset];
                                break
                            }
                            if (1 === l.nodeType)
                                if (r || (l.sizcache = n, l.sizset = a), "string" != typeof t) {
                                    if (l === t) {
                                        c = !0;
                                        break
                                    }
                                } else if (d.filter(t, [l]).length > 0) {
                                    c = l;
                                    break
                                }
                            l = l[e]
                        }
                        i[a] = c
                    }
                }
            }
            var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                o = 0,
                r = Object.prototype.toString,
                a = !1,
                s = !0,
                l = /\\/g,
                c = /\W/;
            [0, 0].sort(function() {
                return s = !1, 0
            });
            var d = function(e, t, n, o) {
                n = n || [], t = t || P;
                var a = t;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var s, l, c, f, h, g, _, v, b = !0,
                    w = d.isXML(t),
                    A = [],
                    C = e;
                do
                    if (i.exec(""), s = i.exec(C), s && (C = s[3], A.push(s[1]), s[2])) {
                        f = s[3];
                        break
                    }
                while (s);
                if (A.length > 1 && p.exec(e))
                    if (2 === A.length && u.relative[A[0]]) l = y(A[0] + A[1], t);
                    else
                        for (l = u.relative[A[0]] ? [t] : d(A.shift(), t); A.length;) e = A.shift(), u.relative[e] && (e += A.shift()), l = y(e, l);
                else if (!o && A.length > 1 && 9 === t.nodeType && !w && u.match.ID.test(A[0]) && !u.match.ID.test(A[A.length - 1]) && (h = d.find(A.shift(), t, w), t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0]), t)
                    for (h = o ? {
                        expr: A.pop(),
                        set: m(o)
                    } : d.find(A.pop(), 1 !== A.length || "~" !== A[0] && "+" !== A[0] || !t.parentNode ? t : t.parentNode, w), l = h.expr ? d.filter(h.expr, h.set) : h.set, A.length > 0 ? c = m(l) : b = !1; A.length;) g = A.pop(), _ = g, u.relative[g] ? _ = A.pop() : g = "", null == _ && (_ = t), u.relative[g](c, _, w);
                else c = A = [];
                if (c || (c = l), c || d.error(g || e), "[object Array]" === r.call(c))
                    if (b)
                        if (t && 1 === t.nodeType)
                            for (v = 0; null != c[v]; v++) c[v] && (c[v] === !0 || 1 === c[v].nodeType && d.contains(t, c[v])) && n.push(l[v]);
                        else
                            for (v = 0; null != c[v]; v++) c[v] && 1 === c[v].nodeType && n.push(l[v]);
                    else n.push.apply(n, c);
                else m(c, n);
                return f && (d(f, a, n, o), d.uniqueSort(n)), n
            };
            d.uniqueSort = function(e) {
                if (_ && (a = s, e.sort(_), a))
                    for (var t = 1; e.length > t; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function(e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function(e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function(e, n, i) {
                var o;
                if (!e) return [];
                for (var r = 0, a = u.order.length; a > r; r++) {
                    var s, c = u.order[r];
                    if (s = u.leftMatch[c].exec(e)) {
                        var d = s[1];
                        if (s.splice(1, 1), "\\" !== d.substr(d.length - 1) && (s[1] = (s[1] || "").replace(l, ""), o = u.find[c](s, n, i), null != o)) {
                            e = e.replace(u.match[c], "");
                            break
                        }
                    }
                }
                return o || (o = n.getElementsByTagName !== t ? n.getElementsByTagName("*") : []), {
                    set: o,
                    expr: e
                }
            }, d.filter = function(e, n, i, o) {
                for (var r, a, s = e, l = [], c = n, p = n && n[0] && d.isXML(n[0]); e && n.length;) {
                    for (var f in u.filter)
                        if (null != (r = u.leftMatch[f].exec(e)) && r[2]) {
                            var h, m, g = u.filter[f],
                                _ = r[1];
                            if (a = !1, r.splice(1, 1), "\\" === _.substr(_.length - 1)) continue;
                            if (c === l && (l = []), u.preFilter[f])
                                if (r = u.preFilter[f](r, c, i, l, o, p)) {
                                    if (r === !0) continue
                                } else a = h = !0;
                            if (r)
                                for (var v = 0; null != (m = c[v]); v++)
                                    if (m) {
                                        h = g(m, r, v, c);
                                        var y = o ^ !!h;
                                        i && null != h ? y ? a = !0 : c[v] = !1 : y && (l.push(m), a = !0)
                                    }
                            if (h !== t) {
                                if (i || (c = l), e = e.replace(u.match[f], ""), !a) return [];
                                break
                            }
                        }
                    if (e === s) {
                        if (null != a) break;
                        d.error(e)
                    }
                    s = e
                }
                return c
            }, d.error = function(e) {
                throw "Syntax error, unrecognized expression: " + e
            };
            var u = d.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href")
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(e, t) {
                            var n = "string" == typeof t,
                                i = n && !c.test(t),
                                o = n && !i;
                            i && (t = t.toLowerCase());
                            for (var r, a = 0, s = e.length; s > a; a++)
                                if (r = e[a]) {
                                    for (;
                                        (r = r.previousSibling) && 1 !== r.nodeType;);
                                    e[a] = o || r && r.nodeName.toLowerCase() === t ? r || !1 : r === t
                                }
                            o && d.filter(t, e, !0)
                        },
                        ">": function(e, t) {
                            var n, i = "string" == typeof t,
                                o = 0,
                                r = e.length;
                            if (i && !c.test(t)) {
                                for (t = t.toLowerCase(); r > o; o++)
                                    if (n = e[o]) {
                                        var a = n.parentNode;
                                        e[o] = a.nodeName.toLowerCase() === t ? a : !1
                                    }
                            } else {
                                for (; r > o; o++) n = e[o], n && (e[o] = i ? n.parentNode : n.parentNode === t);
                                i && d.filter(t, e, !0)
                            }
                        },
                        "": function(t, i, r) {
                            var a, s = o++,
                                l = n;
                            "string" != typeof i || c.test(i) || (i = i.toLowerCase(), a = i, l = e), l("parentNode", i, s, t, a, r)
                        },
                        "~": function(t, i, r) {
                            var a, s = o++,
                                l = n;
                            "string" != typeof i || c.test(i) || (i = i.toLowerCase(), a = i, l = e), l("previousSibling", i, s, t, a, r)
                        }
                    },
                    find: {
                        ID: function(e, n, i) {
                            if (n.getElementById !== t && !i) {
                                var o = n.getElementById(e[1]);
                                return o && o.parentNode ? [o] : []
                            }
                        },
                        NAME: function(e, n) {
                            if (n.getElementsByName !== t) {
                                for (var i = [], o = n.getElementsByName(e[1]), r = 0, a = o.length; a > r; r++) o[r].getAttribute("name") === e[1] && i.push(o[r]);
                                return 0 === i.length ? null : i
                            }
                        },
                        TAG: function(e, n) {
                            return n.getElementsByTagName !== t ? n.getElementsByTagName(e[1]) : t
                        }
                    },
                    preFilter: {
                        CLASS: function(e, t, n, i, o, r) {
                            if (e = " " + e[1].replace(l, "") + " ", r) return e;
                            for (var a, s = 0; null != (a = t[s]); s++) a && (o ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(a) : n && (t[s] = !1));
                            return !1
                        },
                        ID: function(e) {
                            return e[1].replace(l, "")
                        },
                        TAG: function(e) {
                            return e[1].replace(l, "").toLowerCase()
                        },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && d.error(e[0]);
                            return e[0] = o++, e
                        },
                        ATTR: function(e, t, n, i, o, r) {
                            var a = e[1] = e[1].replace(l, "");
                            return !r && u.attrMap[a] && (e[1] = u.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(l, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                        },
                        PSEUDO: function(e, t, n, o, r) {
                            if ("not" === e[1]) {
                                if (!((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var a = d.filter(e[3], t, n, !0 ^ r);
                                    return n || o.push.apply(o, a), !1
                                }
                                e[3] = d(e[3], null, null, t)
                            } else if (u.match.POS.test(e[0]) || u.match.CHILD.test(e[0])) return !0;
                            return e
                        },
                        POS: function(e) {
                            return e.unshift(!0), e
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return e.disabled === !1 && "hidden" !== e.type
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            return e.checked === !0
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !!e.firstChild
                        },
                        empty: function(e) {
                            return !e.firstChild
                        },
                        has: function(e, t, n) {
                            return !!d(n[3], e).length
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName)
                        },
                        text: function(e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                        },
                        radio: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                        },
                        checkbox: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                        },
                        file: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "file" === e.type
                        },
                        password: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "password" === e.type
                        },
                        submit: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "submit" === e.type
                        },
                        image: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "image" === e.type
                        },
                        reset: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "reset" === e.type
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName)
                        },
                        focus: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t) {
                            return 0 === t
                        },
                        last: function(e, t, n, i) {
                            return t === i.length - 1
                        },
                        even: function(e, t) {
                            return 0 === t % 2
                        },
                        odd: function(e, t) {
                            return 1 === t % 2
                        },
                        lt: function(e, t, n) {
                            return n[3] - 0 > t
                        },
                        gt: function(e, t, n) {
                            return t > n[3] - 0
                        },
                        nth: function(e, t, n) {
                            return n[3] - 0 === t
                        },
                        eq: function(e, t, n) {
                            return n[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function(e, t, n, i) {
                            var o = t[1],
                                r = u.filters[o];
                            if (r) return r(e, n, t, i);
                            if ("contains" === o) return (e.textContent || e.innerText || d.getText([e]) || "").indexOf(t[3]) >= 0;
                            if ("not" === o) {
                                for (var a = t[3], s = 0, l = a.length; l > s; s++)
                                    if (a[s] === e) return !1;
                                return !0
                            }
                            d.error(o)
                        },
                        CHILD: function(e, t) {
                            var n = t[1],
                                i = e;
                            switch (n) {
                                case "only":
                                case "first":
                                    for (; i = i.previousSibling;)
                                        if (1 === i.nodeType) return !1;
                                    if ("first" === n) return !0;
                                    i = e;
                                case "last":
                                    for (; i = i.nextSibling;)
                                        if (1 === i.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    var o = t[2],
                                        r = t[3];
                                    if (1 === o && 0 === r) return !0;
                                    var a = t[0],
                                        s = e.parentNode;
                                    if (s && (s.sizcache !== a || !e.nodeIndex)) {
                                        var l = 0;
                                        for (i = s.firstChild; i; i = i.nextSibling) 1 === i.nodeType && (i.nodeIndex = ++l);
                                        s.sizcache = a
                                    }
                                    var c = e.nodeIndex - r;
                                    return 0 === o ? 0 === c : 0 === c % o && c / o >= 0
                            }
                        },
                        ID: function(e, t) {
                            return 1 === e.nodeType && e.getAttribute("id") === t
                        },
                        TAG: function(e, t) {
                            return "*" === t && 1 === e.nodeType || e.nodeName.toLowerCase() === t
                        },
                        CLASS: function(e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function(e, t) {
                            var n = t[1],
                                i = u.attrHandle[n] ? u.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                o = i + "",
                                r = t[2],
                                a = t[4];
                            return null == i ? "!=" === r : "=" === r ? o === a : "*=" === r ? o.indexOf(a) >= 0 : "~=" === r ? (" " + o + " ").indexOf(a) >= 0 : a ? "!=" === r ? o !== a : "^=" === r ? 0 === o.indexOf(a) : "$=" === r ? o.substr(o.length - a.length) === a : "|=" === r ? o === a || o.substr(0, a.length + 1) === a + "-" : !1 : o && i !== !1
                        },
                        POS: function(e, n, i, o) {
                            var r = n[2],
                                a = u.setFilters[r];
                            return a ? a(e, i, n, o) : t
                        }
                    }
                },
                p = u.match.POS,
                f = function(e, t) {
                    return "\\" + (t - 0 + 1)
                };
            for (var h in u.match) u.match[h] = RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, f));
            var m = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(P.documentElement.childNodes, 0)[0].nodeType
            } catch (g) {
                m = function(e, t) {
                    var n = 0,
                        i = t || [];
                    if ("[object Array]" === r.call(e)) Array.prototype.push.apply(i, e);
                    else if ("number" == typeof e.length)
                        for (var o = e.length; o > n; n++) i.push(e[n]);
                    else
                        for (; e[n]; n++) i.push(e[n]);
                    return i
                }
            }
            var _, v;
            P.documentElement.compareDocumentPosition ? _ = function(e, t) {
                return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : (_ = function(e, t) {
                if (e === t) return a = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, i, o = [],
                    r = [],
                    s = e.parentNode,
                    l = t.parentNode,
                    c = s;
                if (s === l) return v(e, t);
                if (!s) return -1;
                if (!l) return 1;
                for (; c;) o.unshift(c), c = c.parentNode;
                for (c = l; c;) r.unshift(c), c = c.parentNode;
                n = o.length, i = r.length;
                for (var d = 0; n > d && i > d; d++)
                    if (o[d] !== r[d]) return v(o[d], r[d]);
                return d === n ? v(e, r[d], -1) : v(o[d], t, 1)
            }, v = function(e, t, n) {
                if (e === t) return n;
                for (var i = e.nextSibling; i;) {
                    if (i === t) return -1;
                    i = i.nextSibling
                }
                return 1
            }), d.getText = function(e) {
                for (var t, n = "", i = 0; e[i]; i++) t = e[i], 3 === t.nodeType || 4 === t.nodeType ? n += t.nodeValue : 8 !== t.nodeType && (n += d.getText(t.childNodes));
                return n
            },
                function() {
                    var e = P.createElement("div"),
                        n = "script" + (new Date).getTime(),
                        i = P.documentElement;
                    e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), P.getElementById(n) && (u.find.ID = function(e, n, i) {
                        if (n.getElementById !== t && !i) {
                            var o = n.getElementById(e[1]);
                            return o ? o.id === e[1] || o.getAttributeNode !== t && o.getAttributeNode("id").nodeValue === e[1] ? [o] : t : []
                        }
                    }, u.filter.ID = function(e, n) {
                        var i = e.getAttributeNode !== t && e.getAttributeNode("id");
                        return 1 === e.nodeType && i && i.nodeValue === n
                    }), i.removeChild(e), i = e = null
                }(),
                function() {
                    var e = P.createElement("div");
                    e.appendChild(P.createComment("")), e.getElementsByTagName("*").length > 0 && (u.find.TAG = function(e, t) {
                        var n = t.getElementsByTagName(e[1]);
                        if ("*" === e[1]) {
                            for (var i = [], o = 0; n[o]; o++) 1 === n[o].nodeType && i.push(n[o]);
                            n = i
                        }
                        return n
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && e.firstChild.getAttribute !== t && "#" !== e.firstChild.getAttribute("href") && (u.attrHandle.href = function(e) {
                        return e.getAttribute("href", 2)
                    }), e = null
                }(), P.querySelectorAll && function() {
                var e = d,
                    t = P.createElement("div"),
                    n = "__sizzle__";
                if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                    d = function(t, i, o, r) {
                        if (i = i || P, !r && !d.isXML(i)) {
                            var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                            if (a && (1 === i.nodeType || 9 === i.nodeType)) {
                                if (a[1]) return m(i.getElementsByTagName(t), o);
                                if (a[2] && u.find.CLASS && i.getElementsByClassName) return m(i.getElementsByClassName(a[2]), o)
                            }
                            if (9 === i.nodeType) {
                                if ("body" === t && i.body) return m([i.body], o);
                                if (a && a[3]) {
                                    var s = i.getElementById(a[3]);
                                    if (!s || !s.parentNode) return m([], o);
                                    if (s.id === a[3]) return m([s], o)
                                }
                                try {
                                    return m(i.querySelectorAll(t), o)
                                } catch (l) {}
                            } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                                var c = i,
                                    p = i.getAttribute("id"),
                                    f = p || n,
                                    h = i.parentNode,
                                    g = /^\s*[+~]/.test(t);
                                p ? f = f.replace(/'/g, "\\$&") : i.setAttribute("id", f), g && h && (i = i.parentNode);
                                try {
                                    if (!g || h) return m(i.querySelectorAll("[id='" + f + "'] " + t), o)
                                } catch (_) {} finally {
                                    p || c.removeAttribute("id")
                                }
                            }
                        }
                        return e(t, i, o, r)
                    };
                    for (var i in e) d[i] = e[i];
                    t = null
                }
            }(),
                function() {
                    var e = P.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call(P.createElement("div"), "div"),
                            i = !1;
                        try {
                            t.call(P.documentElement, "[test!='']:sizzle")
                        } catch (o) {
                            i = !0
                        }
                        d.matchesSelector = function(e, o) {
                            if (o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                                if (i || !u.match.PSEUDO.test(o) && !/!=/.test(o)) {
                                    var r = t.call(e, o);
                                    if (r || !n || e.document && 11 !== e.document.nodeType) return r
                                }
                            } catch (a) {}
                            return d(o, null, null, [e]).length > 0
                        }
                    }
                }(),
                function() {
                    var e = P.createElement("div");
                    e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (u.order.splice(1, 0, "CLASS"), u.find.CLASS = function(e, n, i) {
                        return n.getElementsByClassName === t || i ? t : n.getElementsByClassName(e[1])
                    }, e = null))
                }(), d.contains = P.documentElement.contains ? function(e, t) {
                return e !== t && (e.contains ? e.contains(t) : !0)
            } : P.documentElement.compareDocumentPosition ? function(e, t) {
                return !!(16 & e.compareDocumentPosition(t))
            } : function() {
                return !1
            }, d.isXML = function(e) {
                var t = (e ? e.ownerDocument || e : 0).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            var y = function(e, t) {
                for (var n, i = [], o = "", r = t.nodeType ? [t] : t; n = u.match.PSEUDO.exec(e);) o += n[0], e = e.replace(u.match.PSEUDO, "");
                e = u.relative[e] ? e + "*" : e;
                for (var a = 0, s = r.length; s > a; a++) d(e, r[a], i);
                return d.filter(o, i)
            };
            I.find = d, I.expr = d.selectors, I.expr[":"] = I.expr.filters, I.unique = d.uniqueSort, I.text = d.getText, I.isXMLDoc = d.isXML, I.contains = d.contains
        }();
    var lt = /Until$/,
        ct = /^(?:parents|prevUntil|prevAll)/,
        dt = /,/,
        ut = /^.[^:#\[\.,]*$/,
        pt = Array.prototype.slice,
        ft = I.expr.match.POS,
        ht = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    I.fn.extend({
        find: function(e) {
            var t, n, i = this;
            if ("string" != typeof e) return I(e).filter(function() {
                for (t = 0, n = i.length; n > t; t++)
                    if (I.contains(i[t], this)) return !0
            });
            var o, r, a, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (o = s.length, I.find(e, this[t], s), t > 0)
                    for (r = o; s.length > r; r++)
                        for (a = 0; o > a; a++)
                            if (s[a] === s[r]) {
                                s.splice(r--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t = I(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (I.contains(this, t[e])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? I.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, i, o = [],
                r = this[0];
            if (I.isArray(e)) {
                var a, s, l = {},
                    c = 1;
                if (r && e.length) {
                    for (n = 0, i = e.length; i > n; n++) s = e[n], l[s] || (l[s] = ft.test(s) ? I(s, t || this.context) : s);
                    for (; r && r.ownerDocument && r !== t;) {
                        for (s in l) a = l[s], (a.jquery ? a.index(r) > -1 : I(r).is(a)) && o.push({
                            selector: s,
                            elem: r,
                            level: c
                        });
                        r = r.parentNode, c++
                    }
                }
                return o
            }
            var d = ft.test(e) || "string" != typeof e ? I(e, t || this.context) : 0;
            for (n = 0, i = this.length; i > n; n++)
                for (r = this[n]; r;) {
                    if (d ? d.index(r) > -1 : I.find.matchesSelector(r, e)) {
                        o.push(r);
                        break
                    }
                    if (r = r.parentNode, !r || !r.ownerDocument || r === t || 11 === r.nodeType) break
                }
            return o = o.length > 1 ? I.unique(o) : o, this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? I.inArray(this[0], I(e)) : I.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? I(e, t) : I.makeArray(e && e.nodeType ? [e] : e),
                i = I.merge(this.get(), n);
            return this.pushStack(d(n[0]) || d(i[0]) ? i : I.unique(i))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), I.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return I.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return I.dir(e, "parentNode", n)
        },
        next: function(e) {
            return I.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return I.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return I.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return I.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return I.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return I.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return I.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return I.sibling(e.firstChild)
        },
        contents: function(e) {
            return I.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : I.makeArray(e.childNodes)
        }
    }, function(e, t) {
        I.fn[e] = function(n, i) {
            var o = I.map(this, t, n),
                r = pt.call(arguments);
            return lt.test(e) || (i = n), i && "string" == typeof i && (o = I.filter(i, o)), o = this.length > 1 && !ht[e] ? I.unique(o) : o, (this.length > 1 || dt.test(i)) && ct.test(e) && (o = o.reverse()), this.pushStack(o, e, r.join(","))
        }
    }), I.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? I.find.matchesSelector(t[0], e) ? [t[0]] : [] : I.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !I(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        nth: function(e, t, n) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var mt = / jQuery\d+="(?:\d+|null)"/g,
        gt = /^\s+/,
        _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        yt = /<tbody/i,
        bt = /<|&#?\w+;/,
        wt = /<(?:script|object|embed|option|style)/i,
        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        St = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    St.optgroup = St.option, St.tbody = St.tfoot = St.colgroup = St.caption = St.thead, St.th = St.td, I.support.htmlSerialize || (St._default = [1, "div<div>", "</div>"]), I.fn.extend({
        text: function(e) {
            return I.isFunction(e) ? this.each(function(t) {
                var n = I(this);
                n.text(e.call(this, t, n.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(e)) : I.text(this)
        },
        wrapAll: function(e) {
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = I(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return I.isFunction(e) ? this.each(function(t) {
                I(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = I(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            return this.each(function() {
                I(this).wrapAll(e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                I.nodeName(this, "body") || I(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = I(arguments[0]);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, I(arguments[0]).toArray()), e
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || I.filter(e, [n]).length) && (t || 1 !== n.nodeType || (I.cleanData(n.getElementsByTagName("*")), I.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && I.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return I.clone(this, e, t)
            })
        },
        html: function(e) {
            if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(mt, "") : null;
            if ("string" != typeof e || wt.test(e) || !I.support.leadingWhitespace && gt.test(e) || St[(vt.exec(e) || ["", ""])[1].toLowerCase()]) I.isFunction(e) ? this.each(function(t) {
                var n = I(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            else {
                e = e.replace(_t, "<$1></$2>");
                try {
                    for (var n = 0, i = this.length; i > n; n++) 1 === this[n].nodeType && (I.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (o) {
                    this.empty().append(e)
                }
            }
            return this
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? I.isFunction(e) ? this.each(function(t) {
                var n = I(this),
                    i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = I(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                I(this).remove(), t ? I(t).before(e) : I(n).append(e)
            })) : this.length ? this.pushStack(I(I.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            var o, r, a, s, l = e[0],
                c = [];
            if (!I.support.checkClone && 3 === arguments.length && "string" == typeof l && At.test(l)) return this.each(function() {
                I(this).domManip(e, n, i, !0)
            });
            if (I.isFunction(l)) return this.each(function(o) {
                var r = I(this);
                e[0] = l.call(this, o, n ? r.html() : t), r.domManip(e, n, i)
            });
            if (this[0]) {
                if (s = l && l.parentNode, o = I.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                        fragment: s
                    } : I.buildFragment(e, this, c), a = o.fragment, r = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild) {
                    n = n && I.nodeName(r, "tr");
                    for (var d = 0, u = this.length, f = u - 1; u > d; d++) i.call(n ? p(this[d], r) : this[d], o.cacheable || u > 1 && f > d ? I.clone(a, !0, !0) : a)
                }
                c.length && I.each(c, v)
            }
            return this
        }
    }), I.buildFragment = function(e, t, n) {
        var i, o, r, a;
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = P), 1 === e.length && "string" == typeof e[0] && 512 > e[0].length && a === P && "<" === e[0].charAt(0) && !wt.test(e[0]) && (I.support.checkClone || !At.test(e[0])) && (o = !0, r = I.fragments[e[0]], r && 1 !== r && (i = r)), i || (i = a.createDocumentFragment(), I.clean(e, a, i, n)), o && (I.fragments[e[0]] = r ? i : 1), {
            fragment: i,
            cacheable: o
        }
    }, I.fragments = {}, I.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        I.fn[e] = function(n) {
            var i = [],
                o = I(n),
                r = 1 === this.length && this[0].parentNode;
            if (r && 11 === r.nodeType && 1 === r.childNodes.length && 1 === o.length) return o[t](this[0]), this;
            for (var a = 0, s = o.length; s > a; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                I(o[a])[t](l), i = i.concat(l)
            }
            return this.pushStack(i, e, o.selector)
        }
    }), I.extend({
        clone: function(e, t, n) {
            var i, o, r, a = e.cloneNode(!0);
            if (!(I.support.noCloneEvent && I.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || I.isXMLDoc(e)))
                for (h(e, a), i = m(e), o = m(a), r = 0; i[r]; ++r) o[r] && h(i[r], o[r]);
            if (t && (f(e, a), n))
                for (i = m(e), o = m(a), r = 0; i[r]; ++r) f(i[r], o[r]);
            return i = o = null, a
        },
        clean: function(e, n, i, o) {
            var r;
            n = n || P, n.createElement === t && (n = n.ownerDocument || n[0] && n[0].ownerDocument || P);
            for (var a, s, l = [], c = 0; null != (s = e[c]); c++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" == typeof s)
                        if (bt.test(s)) {
                            s = s.replace(_t, "<$1></$2>");
                            var d = (vt.exec(s) || ["", ""])[1].toLowerCase(),
                                u = St[d] || St._default,
                                p = u[0],
                                f = n.createElement("div");
                            for (f.innerHTML = u[1] + s + u[2]; p--;) f = f.lastChild;
                            if (!I.support.tbody) {
                                var h = yt.test(s),
                                    m = "table" !== d || h ? "<table>" !== u[1] || h ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes;
                                for (a = m.length - 1; a >= 0; --a) I.nodeName(m[a], "tbody") && !m[a].childNodes.length && m[a].parentNode.removeChild(m[a])
                            }!I.support.leadingWhitespace && gt.test(s) && f.insertBefore(n.createTextNode(gt.exec(s)[0]), f.firstChild), s = f.childNodes
                        } else s = n.createTextNode(s);
                    var g;
                    if (!I.support.appendChecked)
                        if (s[0] && "number" == typeof(g = s.length))
                            for (a = 0; g > a; a++) _(s[a]);
                        else _(s);
                    s.nodeType ? l.push(s) : l = I.merge(l, s)
                }
            if (i)
                for (r = function(e) {
                    return !e.type || Ct.test(e.type)
                }, c = 0; l[c]; c++)
                    if (!o || !I.nodeName(l[c], "script") || l[c].type && "text/javascript" !== l[c].type.toLowerCase()) {
                        if (1 === l[c].nodeType) {
                            var v = I.grep(l[c].getElementsByTagName("script"), r);
                            l.splice.apply(l, [c + 1, 0].concat(v))
                        }
                        i.appendChild(l[c])
                    } else o.push(l[c].parentNode ? l[c].parentNode.removeChild(l[c]) : l[c]);
            return l
        },
        cleanData: function(e) {
            for (var t, n, i, o = I.cache, r = I.expando, a = I.event.special, s = I.support.deleteExpando, l = 0; null != (i = e[l]); l++)
                if ((!i.nodeName || !I.noData[i.nodeName.toLowerCase()]) && (n = i[I.expando])) {
                    if (t = o[n] && o[n][r], t && t.events) {
                        for (var c in t.events) a[c] ? I.event.remove(i, c) : I.removeEvent(i, c, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete i[I.expando] : i.removeAttribute && i.removeAttribute(I.expando), delete o[n]
                }
        }
    });
    var kt, xt, Nt, Mt = /alpha\([^)]*\)/i,
        Dt = /opacity=([^)]*)/,
        Lt = /([A-Z]|^ms)/g,
        Ft = /^-?\d+(?:px)?$/i,
        Pt = /^-?\d/,
        Et = /^([\-+])=([\-+.\de]+)/,
        Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        It = ["Left", "Right"],
        Ot = ["Top", "Bottom"];
    I.fn.css = function(e, n) {
        return 2 === arguments.length && n === t ? this : I.access(this, e, n, !0, function(e, n, i) {
            return i !== t ? I.style(e, n, i) : I.css(e, n)
        })
    }, I.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = kt(e, "opacity", "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": I.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s = I.camelCase(n),
                    l = e.style,
                    c = I.cssHooks[s];
                if (n = I.cssProps[s] || s, i === t) return c && "get" in c && (r = c.get(e, !1, o)) !== t ? r : l[n];
                if (a = typeof i, "string" === a && (r = Et.exec(i)) && (i = +(r[1] + 1) * +r[2] + parseFloat(I.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || I.cssNumber[s] || (i += "px"), c && "set" in c && (i = c.set(e, i)) === t))) try {
                    l[n] = i
                } catch (d) {}
            }
        },
        css: function(e, n, i) {
            var o, r;
            return n = I.camelCase(n), r = I.cssHooks[n], n = I.cssProps[n] || n, "cssFloat" === n && (n = "float"), r && "get" in r && (o = r.get(e, !0, i)) !== t ? o : kt ? kt(e, n) : t
        },
        swap: function(e, t, n) {
            var i = {};
            for (var o in t) i[o] = e.style[o], e.style[o] = t[o];
            n.call(e);
            for (o in t) e.style[o] = i[o]
        }
    }), I.curCSS = I.css, I.each(["height", "width"], function(e, n) {
        I.cssHooks[n] = {
            get: function(e, i, o) {
                var r;
                return i ? 0 !== e.offsetWidth ? y(e, n, o) : (I.swap(e, Ut, function() {
                    r = y(e, n, o)
                }), r) : t
            },
            set: function(e, n) {
                return Ft.test(n) ? (n = parseFloat(n), n >= 0 ? n + "px" : t) : n
            }
        }
    }), I.support.opacity || (I.cssHooks.opacity = {
        get: function(e, t) {
            return Dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = I.isNaN(t) ? "" : "alpha(opacity=" + 100 * t + ")",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === I.trim(r.replace(Mt, "")) && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = Mt.test(r) ? r.replace(Mt, o) : r + " " + o)
        }
    }), I(function() {
        I.support.reliableMarginRight || (I.cssHooks.marginRight = {
            get: function(e, t) {
                var n;
                return I.swap(e, {
                    display: "inline-block"
                }, function() {
                    n = t ? kt(e, "margin-right", "marginRight") : e.style.marginRight
                }), n
            }
        })
    }), P.defaultView && P.defaultView.getComputedStyle && (xt = function(e, n) {
        var i, o, r;
        return n = n.replace(Lt, "-$1").toLowerCase(), (o = e.ownerDocument.defaultView) ? ((r = o.getComputedStyle(e, null)) && (i = r.getPropertyValue(n), "" !== i || I.contains(e.ownerDocument.documentElement, e) || (i = I.style(e, n))), i) : t
    }), P.documentElement.currentStyle && (Nt = function(e, t) {
        var n, i = e.currentStyle && e.currentStyle[t],
            o = e.runtimeStyle && e.runtimeStyle[t],
            r = e.style;
        return !Ft.test(i) && Pt.test(i) && (n = r.left, o && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = n, o && (e.runtimeStyle.left = o)), "" === i ? "auto" : i
    }), kt = xt || Nt, I.expr && I.expr.filters && (I.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return 0 === t && 0 === n || !I.support.reliableHiddenOffsets && "none" === (e.style.display || I.css(e, "display"))
    }, I.expr.filters.visible = function(e) {
        return !I.expr.filters.hidden(e)
    });
    var Bt, Rt, $t = /%20/g,
        Ht = /\[\]$/,
        jt = /\r?\n/g,
        Wt = /#.*$/,
        qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Yt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Qt = /\?/,
        Xt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Kt = /^(?:select|textarea)/i,
        Jt = /\s+/,
        Zt = /([?&])_=[^&]*/,
        en = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        tn = I.fn.load,
        nn = {},
        on = {},
        rn = ["*/"] + ["*"];
    try {
        Bt = U.href
    } catch (an) {
        Bt = P.createElement("a"), Bt.href = "", Bt = Bt.href
    }
    Rt = en.exec(Bt.toLowerCase()) || [], I.fn.extend({
        load: function(e, n, i) {
            if ("string" != typeof e && tn) return tn.apply(this, arguments);
            if (!this.length) return this;
            var o = e.indexOf(" ");
            if (o >= 0) {
                var r = e.slice(o, e.length);
                e = e.slice(0, o)
            }
            var a = "GET";
            n && (I.isFunction(n) ? (i = n, n = t) : "object" == typeof n && (n = I.param(n, I.ajaxSettings.traditional), a = "POST"));
            var s = this;
            return I.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), s.html(r ? I("<div>").append(n.replace(Xt, "")).find(r) : n)), i && s.each(i, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return I.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? I.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Kt.test(this.nodeName) || Vt.test(this.type))
            }).map(function(e, t) {
                var n = I(this).val();
                return null == n ? null : I.isArray(n) ? I.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    }), I.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        I.fn[t] = function(e) {
            return this.bind(t, e)
        }
    }), I.each(["get", "post"], function(e, n) {
        I[n] = function(e, i, o, r) {
            return I.isFunction(i) && (r = r || o, o = i, i = t), I.ajax({
                type: n,
                url: e,
                data: i,
                success: o,
                dataType: r
            })
        }
    }), I.extend({
        getScript: function(e, n) {
            return I.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return I.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? A(e, I.ajaxSettings) : (t = e, e = I.ajaxSettings), A(e, t), e
        },
        ajaxSettings: {
            url: Bt,
            isLocal: Yt.test(Rt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": rn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": I.parseJSON,
                "text xml": I.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: b(nn),
        ajaxTransport: b(on),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                if (2 !== b) {
                    b = 2, l && clearTimeout(l), s = t, r = a || "", A.readyState = e > 0 ? 4 : 0;
                    var c, u, v, y, w, C = n,
                        k = i ? T(p, A, i) : t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (p.ifModified && ((y = A.getResponseHeader("Last-Modified")) && (I.lastModified[o] = y), (w = A.getResponseHeader("Etag")) && (I.etag[o] = w)), 304 === e) C = "notmodified", c = !0;
                        else try {
                            u = S(p, k), C = "success", c = !0
                        } catch (x) {
                            C = "parsererror", v = x
                        } else v = C, (!C || e) && (C = "error", 0 > e && (e = 0));
                    A.status = e, A.statusText = "" + (n || C), c ? m.resolveWith(f, [u, C, A]) : m.rejectWith(f, [A, C, v]), A.statusCode(_), _ = t, d && h.trigger("ajax" + (c ? "Success" : "Error"), [A, p, c ? u : v]), g.resolveWith(f, [A, C]), d && (h.trigger("ajaxComplete", [A, p]), --I.active || I.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var o, r, a, s, l, c, d, u, p = I.ajaxSetup({}, n),
                f = p.context || p,
                h = f !== p && (f.nodeType || f instanceof I) ? I(f) : I.event,
                m = I.Deferred(),
                g = I._Deferred(),
                _ = p.statusCode || {},
                v = {},
                y = {},
                b = 0,
                A = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!b) {
                            var n = e.toLowerCase();
                            e = y[n] = y[n] || e, v[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; n = qt.exec(r);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", s && s.abort(e), i(0, e), this
                    }
                };
            if (m.promise(A), A.success = A.done, A.error = A.fail, A.complete = g.done, A.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > b)
                            for (t in e) _[t] = [_[t], e[t]];
                        else t = e[A.status], A.then(t, t)
                    }
                    return this
                }, p.url = ((e || p.url) + "").replace(Wt, "").replace(Gt, Rt[1] + "//"), p.dataTypes = I.trim(p.dataType || "*").toLowerCase().split(Jt), null == p.crossDomain && (c = en.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] == Rt[1] && c[2] == Rt[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Rt[3] || ("http:" === Rt[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = I.param(p.data, p.traditional)), w(nn, p, n, A), 2 === b) return !1;
            if (d = p.global, p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), d && 0 === I.active++ && I.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Qt.test(p.url) ? "&" : "?") + p.data, delete p.data), o = p.url, p.cache === !1)) {
                var C = I.now(),
                    k = p.url.replace(Zt, "$1_=" + C);
                p.url = k + (k === p.url ? (Qt.test(p.url) ? "&" : "?") + "_=" + C : "")
            }(p.data && p.hasContent && p.contentType !== !1 || n.contentType) && A.setRequestHeader("Content-Type", p.contentType), p.ifModified && (o = o || p.url, I.lastModified[o] && A.setRequestHeader("If-Modified-Since", I.lastModified[o]), I.etag[o] && A.setRequestHeader("If-None-Match", I.etag[o])), A.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) A.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(f, A, p) === !1 || 2 === b)) return A.abort(), !1;
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) A[u](p[u]);
            if (s = w(on, p, n, A)) {
                A.readyState = 1, d && h.trigger("ajaxSend", [A, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    A.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, s.send(v, i)
                } catch (x) {
                    2 > b ? i(-1, x) : I.error(x)
                }
            } else i(-1, "No Transport");
            return A
        },
        param: function(e, n) {
            var i = [],
                o = function(e, t) {
                    t = I.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = I.ajaxSettings.traditional), I.isArray(e) || e.jquery && !I.isPlainObject(e)) I.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (var r in e) C(r, e[r], n, o);
            return i.join("&").replace($t, "+")
        }
    }), I.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var sn = I.now(),
        ln = /(\=)\?(&|$)|\?\?/i;
    I.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return I.expando + "_" + sn++
        }
    }), I.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ln.test(t.url) || o && ln.test(t.data))) {
            var r, a = t.jsonpCallback = I.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s = e[a],
                l = t.url,
                c = t.data,
                d = "$1" + a + "$2";
            return t.jsonp !== !1 && (l = l.replace(ln, d), t.url === l && (o && (c = c.replace(ln, d)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = c, e[a] = function(e) {
                r = [e]
            }, i.always(function() {
                e[a] = s, r && I.isFunction(s) && e[a](r[0])
            }), t.converters["script json"] = function() {
                return r || I.error(a + " was not called"), r[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), I.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return I.globalEval(e), e
            }
        }
    }), I.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), I.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function(o, r) {
                    n = P.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, o) {
                        (o || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, o || r(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var cn, dn = e.ActiveXObject ? function() {
            for (var e in cn) cn[e](0, 1)
        } : !1,
        un = 0;
    I.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && k() || x()
    } : k,
        function(e) {
            I.extend(I.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(I.ajaxSettings.xhr()), I.support.ajax && I.ajaxTransport(function(n) {
        if (!n.crossDomain || I.support.cors) {
            var i;
            return {
                send: function(o, r) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null), i = function(e, o) {
                        var s, c, d, u, p;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = t, a && (l.onreadystatechange = I.noop, dn && delete cn[a]), o) 4 !== l.readyState && l.abort();
                                else {
                                    s = l.status, d = l.getAllResponseHeaders(), u = {}, p = l.responseXML, p && p.documentElement && (u.xml = p), u.text = l.responseText;
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                        } catch (h) {
                            o || r(-1, h)
                        }
                        u && r(s, c, u, d)
                    }, n.async && 4 !== l.readyState ? (a = ++un, dn && (cn || (cn = {}, I(e).unload(dn)), cn[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    });
    var pn, fn, hn, mn, gn = {},
        _n = /^(?:toggle|show|hide)$/,
        vn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        yn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    I.fn.extend({
        show: function(e, t, n) {
            var i, o;
            if (e || 0 === e) return this.animate(D("show", 3), e, t, n);
            for (var r = 0, a = this.length; a > r; r++) i = this[r], i.style && (o = i.style.display, I._data(i, "olddisplay") || "none" !== o || (o = i.style.display = ""), "" === o && "none" === I.css(i, "display") && I._data(i, "olddisplay", L(i.nodeName)));
            for (r = 0; a > r; r++) i = this[r], i.style && (o = i.style.display, ("" === o || "none" === o) && (i.style.display = I._data(i, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(D("hide", 3), e, t, n);
            for (var i = 0, o = this.length; o > i; i++)
                if (this[i].style) {
                    var r = I.css(this[i], "display");
                    "none" === r || I._data(this[i], "olddisplay") || I._data(this[i], "olddisplay", r)
                }
            for (i = 0; o > i; i++) this[i].style && (this[i].style.display = "none");
            return this
        },
        _toggle: I.fn.toggle,
        toggle: function(e, t, n) {
            var i = "boolean" == typeof e;
            return I.isFunction(e) && I.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || i ? this.each(function() {
                var t = i ? e : I(this).is(":hidden");
                I(this)[t ? "show" : "hide"]()
            }) : this.animate(D("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = I.speed(t, n, i);
            return I.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = I.extend({}, e), this[o.queue === !1 ? "each" : "queue"](function() {
                o.queue === !1 && I._mark(this);
                var t, n, i, r, a, s, l, c, d, u = I.extend({}, o),
                    p = 1 === this.nodeType,
                    f = p && I(this).is(":hidden");
                u.animatedProperties = {};
                for (i in e) {
                    if (t = I.camelCase(i), i !== t && (e[t] = e[i], delete e[i]), n = e[t], I.isArray(n) ? (u.animatedProperties[t] = n[1], n = e[t] = n[0]) : u.animatedProperties[t] = u.specialEasing && u.specialEasing[t] || u.easing || "swing", "hide" === n && f || "show" === n && !f) return u.complete.call(this);
                    !p || "height" !== t && "width" !== t || (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === I.css(this, "display") && "none" === I.css(this, "float") && (I.support.inlineBlockNeedsLayout ? (r = L(this.nodeName), "inline" === r ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                null != u.overflow && (this.style.overflow = "hidden");
                for (i in e) a = new I.fx(this, u, i), n = e[i], _n.test(n) ? a["toggle" === n ? f ? "show" : "hide" : n]() : (s = vn.exec(n), l = a.cur(), s ? (c = parseFloat(s[2]), d = s[3] || (I.cssNumber[i] ? "" : "px"), "px" !== d && (I.style(this, i, (c || 1) + d), l = (c || 1) / a.cur() * l, I.style(this, i, l + d)), s[1] && (c = ("-=" === s[1] ? -1 : 1) * c + l), a.custom(l, c, d)) : a.custom(l, n, ""));
                return !0
            }))
        },
        stop: function(e, t) {
            return e && this.queue([]), this.each(function() {
                var e = I.timers,
                    n = e.length;
                for (t || I._unmark(!0, this); n--;) e[n].elem === this && (t && e[n](!0), e.splice(n, 1))
            }), t || this.dequeue(), this
        }
    }), I.each({
        slideDown: D("show", 1),
        slideUp: D("hide", 1),
        slideToggle: D("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        I.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), I.extend({
        speed: function(e, t, n) {
            var i = e && "object" == typeof e ? I.extend({}, e) : {
                complete: n || !n && t || I.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !I.isFunction(t) && t
            };
            return i.duration = I.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in I.fx.speeds ? I.fx.speeds[i.duration] : I.fx.speeds._default, i.old = i.complete, i.complete = function(e) {
                I.isFunction(i.old) && i.old.call(this), i.queue !== !1 ? I.dequeue(this) : e !== !1 && I._unmark(this)
            }, i
        },
        easing: {
            linear: function(e, t, n, i) {
                return n + i * e
            },
            swing: function(e, t, n, i) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), I.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (I.fx.step[this.prop] || I.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = I.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, t, n) {
            function i(e) {
                return o.step(e)
            }
            var o = this,
                r = I.fx;
            this.startTime = mn || N(), this.start = e, this.end = t, this.unit = n || this.unit || (I.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, i.elem = this.elem, i() && I.timers.push(i) && !hn && (hn = setInterval(r.tick, r.interval))
        },
        show: function() {
            this.options.orig[this.prop] = I.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), I(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = I.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, i = mn || N(),
                o = !0,
                r = this.elem,
                a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null == a.overflow || I.support.shrinkWrapBlocks || I.each(["", "X", "Y"], function(e, t) {
                            r.style["overflow" + t] = a.overflow[e]
                        }), a.hide && I(r).hide(), a.hide || a.show)
                        for (var s in a.animatedProperties) I.style(r, s, a.orig[s]);
                    a.complete.call(r)
                }
                return !1
            }
            return 1 / 0 == a.duration ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = I.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, I.extend(I.fx, {
        tick: function() {
            for (var e = I.timers, t = 0; e.length > t; ++t) e[t]() || e.splice(t--, 1);
            e.length || I.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(hn), hn = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                I.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = ("width" === e.prop || "height" === e.prop ? Math.max(0, e.now) : e.now) + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), I.expr && I.expr.filters && (I.expr.filters.animated = function(e) {
        return I.grep(I.timers, function(t) {
            return e === t.elem
        }).length
    });
    var bn = /^t(?:able|d|h)$/i,
        wn = /^(?:body|html)$/i;
    I.fn.offset = "getBoundingClientRect" in P.documentElement ? function(e) {
        var t, n = this[0];
        if (e) return this.each(function(t) {
            I.offset.setOffset(this, e, t)
        });
        if (!n || !n.ownerDocument) return null;
        if (n === n.ownerDocument.body) return I.offset.bodyOffset(n);
        try {
            t = n.getBoundingClientRect()
        } catch (i) {}
        var o = n.ownerDocument,
            r = o.documentElement;
        if (!t || !I.contains(r, n)) return t ? {
            top: t.top,
            left: t.left
        } : {
            top: 0,
            left: 0
        };
        var a = o.body,
            s = F(o),
            l = r.clientTop || a.clientTop || 0,
            c = r.clientLeft || a.clientLeft || 0,
            d = s.pageYOffset || I.support.boxModel && r.scrollTop || a.scrollTop,
            u = s.pageXOffset || I.support.boxModel && r.scrollLeft || a.scrollLeft,
            p = t.top + d - l,
            f = t.left + u - c;
        return {
            top: p,
            left: f
        }
    } : function(e) {
        var t = this[0];
        if (e) return this.each(function(t) {
            I.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return I.offset.bodyOffset(t);
        I.offset.initialize();
        for (var n, i = t.offsetParent, o = t, r = t.ownerDocument, a = r.documentElement, s = r.body, l = r.defaultView, c = l ? l.getComputedStyle(t, null) : t.currentStyle, d = t.offsetTop, u = t.offsetLeft;
             (t = t.parentNode) && t !== s && t !== a && (!I.offset.supportsFixedPosition || "fixed" !== c.position);) n = l ? l.getComputedStyle(t, null) : t.currentStyle, d -= t.scrollTop, u -= t.scrollLeft, t === i && (d += t.offsetTop, u += t.offsetLeft, !I.offset.doesNotAddBorder || I.offset.doesAddBorderForTableAndCells && bn.test(t.nodeName) || (d += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), o = i, i = t.offsetParent), I.offset.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (d += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), c = n;
        return ("relative" === c.position || "static" === c.position) && (d += s.offsetTop, u += s.offsetLeft), I.offset.supportsFixedPosition && "fixed" === c.position && (d += Math.max(a.scrollTop, s.scrollTop), u += Math.max(a.scrollLeft, s.scrollLeft)), {
            top: d,
            left: u
        }
    }, I.offset = {
        initialize: function() {
            var e, t, n, i = P.body,
                o = P.createElement("div"),
                r = parseFloat(I.css(i, "marginTop")) || 0,
                a = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            I.extend(o.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), o.innerHTML = a, i.insertBefore(o, i.firstChild), e = o.firstChild, t = e.firstChild, n = e.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== t.offsetTop, this.doesAddBorderForTableAndCells = 5 === n.offsetTop, t.style.position = "fixed", t.style.top = "20px", this.supportsFixedPosition = 20 === t.offsetTop || 15 === t.offsetTop, t.style.position = t.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop, this.doesNotIncludeMarginInBodyOffset = i.offsetTop !== r, i.removeChild(o), I.offset.initialize = I.noop
        },
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return I.offset.initialize(), I.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(I.css(e, "marginTop")) || 0, n += parseFloat(I.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = I.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var o, r, a = I(e),
                s = a.offset(),
                l = I.css(e, "top"),
                c = I.css(e, "left"),
                d = ("absolute" === i || "fixed" === i) && I.inArray("auto", [l, c]) > -1,
                u = {},
                p = {};
            d ? (p = a.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), I.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + o), null != t.left && (u.left = t.left - s.left + r), "using" in t ? t.using.call(e, u) : a.css(u)
        }
    }, I.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                i = wn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(I.css(e, "marginTop")) || 0, n.left -= parseFloat(I.css(e, "marginLeft")) || 0, i.top += parseFloat(I.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(I.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - i.top,
                left: n.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || P.body; e && !wn.test(e.nodeName) && "static" === I.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), I.each(["Left", "Top"], function(e, n) {
        var i = "scroll" + n;
        I.fn[i] = function(n) {
            var o, r;
            return n === t ? (o = this[0]) ? (r = F(o), r ? "pageXOffset" in r ? r[e ? "pageYOffset" : "pageXOffset"] : I.support.boxModel && r.document.documentElement[i] || r.document.body[i] : o[i]) : null : this.each(function() {
                r = F(this), r ? r.scrollTo(e ? I(r).scrollLeft() : n, e ? n : I(r).scrollTop()) : this[i] = n
            })
        }
    }), I.each(["Height", "Width"], function(e, n) {
        var i = n.toLowerCase();
        I.fn["inner" + n] = function() {
            var e = this[0];
            return e && e.style ? parseFloat(I.css(e, i, "padding")) : null
        }, I.fn["outer" + n] = function(e) {
            var t = this[0];
            return t && t.style ? parseFloat(I.css(t, i, e ? "margin" : "border")) : null
        }, I.fn[i] = function(e) {
            var o = this[0];
            if (!o) return null == e ? null : this;
            if (I.isFunction(e)) return this.each(function(t) {
                var n = I(this);
                n[i](e.call(this, t, n[i]()))
            });
            if (I.isWindow(o)) {
                var r = o.document.documentElement["client" + n],
                    a = o.document.body;
                return "CSS1Compat" === o.document.compatMode && r || a && a["client" + n] || r
            }
            if (9 === o.nodeType) return Math.max(o.documentElement["client" + n], o.body["scroll" + n], o.documentElement["scroll" + n], o.body["offset" + n], o.documentElement["offset" + n]);
            if (e === t) {
                var s = I.css(o, i),
                    l = parseFloat(s);
                return I.isNaN(l) ? s : l
            }
            return this.css(i, "string" == typeof e ? e : e + "px")
        }
    }), e.jQuery = e.$ = I
})(window), String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^s+|s+$/g, "")
}), String.prototype.escapeHTML = function() {
    var e = document.createElement("div"),
        t = document.createTextNode(this);
    return e.appendChild(t), e.innerHTML
}, String.prototype.unescapeHTML = function() {
    var e = document.createElement("div");
    return e.innerHTML = this.stripTags(), e.childNodes[0].nodeValue
}, Date.now || (Date.now = function() {
    return (new Date).getTime()
}), Array.prototype.indexOf = function(e) {
    for (var t = 0; this.length > t; t++)
        if (this[t] == e) return t;
    return -1
}, String.prototype.format = function() {
    if (0 == arguments.length) return this;
    for (var e = this, t = 0; arguments.length > t; t++) e = e.replace(RegExp("\\{" + t + "\\}", "g"), arguments[t]);
    return e
};
var dateFormat = function() {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        n = /[^-+\dA-Z]/g,
        i = function(e, t) {
            for (e += "", t = t || 2; t > e.length;) e = "0" + e;
            return e
        };
    return function(o, r, a) {
        var s = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(o) || /\d/.test(o) || (r = o, o = void 0), o = o ? new Date(o) : new Date, isNaN(o)) throw SyntaxError("invalid date");
        r = (s.masks[r] || r || s.masks["default"]) + "", "UTC:" == r.slice(0, 4) && (r = r.slice(4), a = !0);
        var l = a ? "getUTC" : "get",
            c = o[l + "Date"](),
            d = o[l + "Day"](),
            u = o[l + "Month"](),
            p = o[l + "FullYear"](),
            f = o[l + "Hours"](),
            h = o[l + "Minutes"](),
            m = o[l + "Seconds"](),
            g = o[l + "Milliseconds"](),
            _ = a ? 0 : o.getTimezoneOffset(),
            v = {
                d: c,
                dd: i(c),
                ddd: s.i18n.dayNames[d],
                dddd: s.i18n.dayNames[d + 7],
                m: u + 1,
                mm: i(u + 1),
                mmm: s.i18n.monthNames[u],
                mmmm: s.i18n.monthNames[u + 12],
                yy: (p + "").slice(2),
                yyyy: p,
                h: f % 12 || 12,
                hh: i(f % 12 || 12),
                H: f,
                HH: i(f),
                M: h,
                MM: i(h),
                s: m,
                ss: i(m),
                l: i(g, 3),
                L: i(g > 99 ? Math.round(g / 10) : g),
                t: 12 > f ? "a" : "p",
                tt: 12 > f ? "am" : "pm",
                T: 12 > f ? "A" : "P",
                TT: 12 > f ? "AM" : "PM",
                Z: a ? "UTC" : ((o + "").match(t) || [""]).pop().replace(n, ""),
                o: (_ > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(_) / 60) + Math.abs(_) % 60, 4),
                S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (10 != c % 100 - c % 10) * c % 10]
            };
        return r.replace(e, function(e) {
            return e in v ? v[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "mm/dd/yyyy HH:MM",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    middleDate: "mm/dd/yyyy"
}, dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Date.prototype.format = function(e, t) {
    return dateFormat(this, e, t)
};
var $log = function() {
    function e(e) {
        return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
    }

    function t(t) {
        var n = window.console || {},
            i = n[t] || n.log || function() {};
        return i.apply ? function() {
            var t = [];
            for (var o in arguments) t.push(e(arguments[o]));
            return i.apply(n, t)
        } : function(e, t) {
            i(e, t)
        }
    }
    return {
        log: t("log"),
        warn: t("warn"),
        info: t("info"),
        error: t("error"),
        debug: t("debug")
    }
}();
(function() {
    $.each(["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd", "group", "groupCollapsed", "groupEnd", "clear"], function(e, t) {
        console[t] = console[t] || console.log
    })
})(),
    function(e) {
        e.fn.clickAndDblClick = function(t) {
            return this.each(function() {
                var n = e.extend({}, e.fn.clickAndDblClick.Default, t || {}),
                    i = this;
                do_click = function(e) {
                    clearTimeout(n.timer), n.timer = setTimeout(function() {
                        n.oneclick.call(i, e)
                    }, 300)
                }, do_dblclick = function(e) {
                    clearTimeout(n.timer), n.dblclick.call(i, e)
                }, e(this).click(do_click).dblclick(do_dblclick)
            })
        }, e.fn.clickAndDblClick.Default = {
            timer: null,
            oneclick: e.noop,
            dblclick: e.noop
        }
    }(jQuery), Airdroid.Util = {
    smallWindow: !1,
    cacheTpls: [],
    init: function() {
        $.support.cors = !0, this._checkUinUploadId = 1
    },
    UUID: {
        uuid4: function() {
            return this._uuid(this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), 4)
        },
        _uuid: function(e, t, n, i, o) {
            for (var r = Array(36), a = [4294967295 & e, 4294905855 & t | (o || 4) << 12, 2147483648 | 1073741823 & n, 4294967295 & i], s = 0, l = 0; 4 > s; s++)
                for (var c = a[s], d = 0; 8 > d; d++) {
                    (8 == l || 13 == l || 18 == l || 23 == l) && (r[l++] = "-");
                    var u = 15 & c >>> 28;
                    c = (268435455 & c) << 4, r[l++] = this.hex.charAt(u)
                }
            return r.join("")
        },
        hex: "0123456789abcdef",
        randomInt: function() {
            return Math.floor(4294967296 * Math.random())
        }
    },
    findUrlStrAndSetAsUrl: function(e) {
        var t = this,
            n = /((https?:\/\/)?(www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))/gi;
        return e = e.replace(n, function(e) {
            return t.isValidMail(e) ? e : -1 !== e.indexOf("http") ? '<a href="' + e + '" target="_blank">' + e + "</a>" : '<a href="http://' + e + '" target="_blank">' + e + "</a>"
        })
    },
    hasContextMenu: function() {
        var e = !0;
        return Airdroid.Config.isLiteVersion || this.checkUserLogin() || Airdroid.Runtime.QRNoAccount || (e = !1), e
    },
    getLang: function(e, t) {
        return _.isUndefined(Airdroid.UsedLang) ? !1 : _.isUndefined(e) ? Airdroid.UsedLang : _.isUndefined(t) || _.isNull(t) || "" == t ? Airdroid.UsedLang[$.trim(e)] : Airdroid.UsedLang[$.trim(e)][$.trim(t)]
    },
    createCssStyle: function(e) {
        if (document.all) window.cssFix = e, document.createStyleSheet("javascript:cssFix");
        else {
            var t = document.createElement("style");
            t.type = "text/css", t.innerHTML = e, document.getElementsByTagName("HEAD").item(0).appendChild(t)
        }
    },
    popupWindow: function(e) {
        e = $.extend({
            url: "./",
            width: 800,
            height: 600
        }, e);
        var t = e.url;
        e.top = e.top || (window.screen.availHeight - 30 - e.height) / 2, e.left = e.left || (window.screen.availWidth - 10 - e.width) / 2, delete e.url;
        var n = [];
        $.each(e, function(e, t) {
            n.push(e + "=" + t)
        }), window.open(t, "_blank", n.join(","))
    },
    addParameterToURL: function(e, t) {
        return e ? e + (e.split("?")[1] ? "&" : "?") + $.param(t) + "&v=" + Airdroid.Config.version : ""
    },
    getTemplate: function(e, t, n) {
        var i = "",
            o = Airdroid.Config.baseUri + "views/" + e + "/" + t + ".js";
        if (Airdroid.Config.isPublish) i = window.ajst["views/" + e + "/" + t + ".htm"](n);
        else {
            if (n || (n = {}), this.cacheTpls[o]) var r = this.cacheTpls[o];
            else var r = this.cacheTpls[o] = $.ajax({
                url: "./views/" + e + "/" + t + ".htm",
                async: !1,
                cache: !0
            }).responseText;
            i = _.template(r, n)
        }
        return i
    },
    reload: function() {
        window.location.reload()
    },
    IEPost: function(e, t, n, i, o) {
        var r = new XDomainRequest;
        r.open("post", e), r.onload = function() {
            if (1 == (o || !1)) var e = r.responseText;
            else var e = $.parseJSON(r.responseText);
            _.isFunction(n) && n(e)
        };
        var a = function() {
            _.isFunction(i) && i(), console.log("IE post error")
        };
        r.onerror = a, r.ontimeout = a, r.onprogress = function() {}, r.timeout = 1e4, r.send(t)
    },
    isValidMail: function(e) {
        var t = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
        return t.test(e)
    },
    getUrlParam: function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = "[\\?&]" + e + "=([^&#]*)",
            n = RegExp(t),
            i = n.exec(window.location.href);
        return null == i ? "" : i[1]
    },
    isQTInstalled: function() {
        var e = !1;
        if (navigator.plugins && navigator.plugins.length)
            for (var t = 0; navigator.plugins.length > t; t++) {
                var n = navigator.plugins[t];
                n.name.indexOf("QuickTime") > -1 && (e = !0)
            } else "undefined" != typeof execScript && (qtObj = !1, execScript('on error resume next: qtObj = IsObject(CreateObject("QuickTimeCheckObject.QuickTimeCheck.1"))', "VBScript"), e = qtObj);
        return e
    },
    detectCapsLock: function(e, t, n) {
        var e = e || window.event;
        e.target || e.srcElement;
        var i = e.keyCode || e.which,
            o = e.shiftKey || 16 == i || !1;
        i >= 65 && 90 >= i && !o || i >= 97 && 122 >= i && o ? _.isFunction(t) && t() : _.isFunction(n) && n()
    },
    HTMLDecode: function(e) {
        return 0 == e.length ? "" : (e = e.replace(/&lt;/g, "<"), e = e.replace(/&gt;/g, ">"), e = e.replace(/&nbsp;/g, " "), e = e.replace(/&#39;/g, "'"), e = e.replace(/&#34;/g, '"'), e = e.replace(/&quot;/g, '"'), e = e.replace(/&amp;/g, "&"))
    },
    getFileExt: function(e) {
        return -1 !== e.indexOf(".") ? e.replace(/.*[.]/, "").toLowerCase() : ""
    },
    RGB2Hex: function(e) {
        for (var t = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), n = "#", i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], o = 0; 3 > o; o++) {
            for (var r = null, a = t[o], s = []; a > 16;) r = a % 16, a = a / 16 >> 0, s.push(i[r]);
            s.push(i[a]), n += s.reverse().join("")
        }
        return n
    },
    bytesToSize: function(e) {
        var t = ["Bytes", "KB", "MB", "GB", "TB"];
        if (0 >= e) return "0 KB";
        var n = parseInt(Math.floor(Math.log(e) / Math.log(1024))),
            i = 1;
        n > 2 && (i = 2);
        var o = (e / Math.pow(1024, n)).toFixed(i);
        return (o + "").indexOf(".0") > -1 && (o = new Number(o).toFixed(0)), o + " " + t[n]
    },
    trim: function(e) {
        return $.trim(e)
    },
    isReturnDataError: function(e) {
        return void 0 == e || null == e || !_.isEmpty(e.err)
    },
    filterOnlyNumber: function(e) {
        return e.replace(/[^0-9]/g, "")
    },
    checkPhoneNumberMatch: function(e) {
        return !/[^-+#\*\d]/g.test(e)
    },
    cloneObj: function(e) {
        return JSON.parse(JSON.stringify(e))
    },
    easyEncode: function(e) {
        return encode64(e)
    },
    easyDecode: function(e) {
        return decode64(decodeURIComponent(e))
    },
    generateLikePercent: function(e, t) {
        for (var n = 0, i = 0, o = 0; e.length > o; o++)
            for (var r = i; t.length > r; r++)
                if (e[o] == t[r]) {
                    i = o + 1, n++;
                    break
                }
        i = 0;
        for (var o = 0; t.length > o; o++)
            for (var r = i; e.length > r; r++)
                if (t[o] == e[r]) {
                    i = o + 1, n++;
                    break
                }
        return e == t && (n = 1e3), console.info(" [" + e + "]  [" + t + "] :" + n), n
    },
    unescape: function(e) {
        if (void 0 == e.content) return e;
        var t = $.parseJSON(decodeURIComponent(decode64(e.content)));
        return null == t ? {
            err: "err"
        } : t
    },
    urlParamsFix: function(e) {
        return e
    },
    isSupportXHR: function() {
        return Airdroid.Util.browser.ie10 || Airdroid.Util.browser.ie11 || !Airdroid.Util.browser.ie
    },
    checkAndroidLevel4P4: function() {
        return parseInt(Airdroid.DeviceManage.getCurrentSdkLevel()) >= 19
    },
    getPartnerConfigByName: function(e) {
        return Airdroid.PartnerConfig[e] || {}
    },
    isHttps: function() {
        return "https:" == window.location.protocol
    },
    getPhoneSocketUrl: function(e) {
        var t = "ws://" + e.ip + ":" + e.socket_port + "/";
        return this.isHttps() && !this.browser.safari && parseInt(e.wss_port) > 0 && (t = "wss://" + e.ip + ":" + e.wss_port + "/"), t
    },
    checkSupportHttps: function() {
        return Airdroid.Config.isLiteVersion ? this.browser.chrome || this.browser.safari : this.browser.chrome || this.browser.safari
    },
    getHttpsUpload: function(e) {
        var t = this,
            n = function() {
                $.isFunction(e) && e()
            };
        $.ajax({
            url: Airdroid.DeviceManage.getCurrentDeviceObj().getHostAddress() + "/sdctl/comm/octet_upload/?d=%2Fsdcard%2Fairdroid%2Fupload&resumableChunkNumber=" + t._checkUinUploadId + "&resumableChunkSize=1048576&resumableCurrentChunkSize=1048576&resumableTotalSize=2714115&resumableType=&resumableIdentifier=2714115-camera_plusrar&fn=camera_plus.rar&resumableRelativePath=camera_plus.rar",
            type: "get",
            crossDomain: !0,
            xhrFields: {
                withCredentials: !1
            },
            success: n,
            error: n
        }), t._checkUinUploadId += 1
    },
    checkChina: function() {
        return "zh-CN" === Airdroid.Runtime.locale || "CN" === Airdroid.UserManage.getAccountCounty()
    },
    getMapType: function() {
        return this.getUrlParam("mapType") ? this.getUrlParam("mapType") : this.checkChina() ? "baidu" : "google"
    },
    getGaCount: function(e) {
        var t = ("" + e).length;
        if (1 == t) return "" + e;
        if (t > 1) {
            var n = Math.pow(10, t - 1);
            return "" + Math.floor(e / n) * n
        }
    }
}, Airdroid.Util.enterKeyPressHander = null, Airdroid.Util._blockModal = null, Airdroid.Util.defaultAlertOption = null, Airdroid.Util._blockModalQueue = [], Airdroid.Util.DIALOGLEVEL = {
    LEVEL1: 1,
    LEVEL2: 2,
    LEVEL3: 3,
    LEVEL4: 4,
    LEVEL5: 5
}, Airdroid.Util.currentDialogLevel = Airdroid.Util.DIALOGLEVEL.LEVEL1, Airdroid.Util.nextDialogLevel = Airdroid.Util.DIALOGLEVEL.LEVEL1, Airdroid.Util.addBlockSingle = function(e) {
    var t = this;
    t.hasCurrentBlock() ? t._blockModalQueue.push(e) : e()
}, Airdroid.Util.setNextDialogLevel = function(e) {
    var t = this;
    e = parseInt(e), _.filter(Airdroid.Util.DIALOGLEVEL, function(t) {
        return t === e
    }).length > 0 && (t.nextDialogLevel = e)
}, Airdroid.Util.setCurrentDialogLevel = function(e) {
    var t = this;
    e = parseInt(e), _.filter(Airdroid.Util.DIALOGLEVEL, function(t) {
        return t === e
    }).length > 0 && (t.currentDialogLevel = e)
}, Airdroid.Util.baseAlertBox = function(e) {
    var t = this;
    t.defaultAlertOption || (t.defaultAlertOption = {
        iconType: "",
        title: "",
        description: "",
        bottomBar: {
            hasCheckBox: !1,
            hasOkBtn: {
                msg: t.getLang("Common", "Button_Ok"),
                cssClass: "btn-primary",
                clickHandle: ""
            },
            hasCancelBtn: {
                msg: t.getLang("Common", "Button_Cancel"),
                cssClass: "",
                clickHandle: ""
            }
        },
        isPrompt: !1,
        custom: !1,
        width: "458px",
        animate: !0
    });
    var n = $.extend(!0, {}, t.defaultAlertOption, e);
    return null != this._blockModal ? t.nextDialogLevel > t.currentDialogLevel ? (t.closeCurrentBlock(), setTimeout(function() {
        Airdroid.Util.baseAlertBox(e)
    }, 100), void 0) : (t.nextDialogLevel = t.DIALOGLEVEL.LEVEL1, void 0) : (t.currentDialogLevel = t.nextDialogLevel, t.nextDialogLevel = t.DIALOGLEVEL.LEVEL1, $(this.getTemplate("sys", "pop_alert_box", n)).draggable().modal({
        overlayId: "confirm-overlay",
        containerId: "confirm-container",
        zIndex: 1500,
        onShow: function(e) {
            $(e.wrap).css("overflow", "visible"), t._blockModal = this;
            var i = $(window).height() - $("#confirm-container").height();
            i > 0 && $("#confirm-container").css("top", i / 2 + "px");
            var o = n.isPrompt,
                r = !0;
            if (o && o.options.maxlength && !isNaN(o.options.maxlength) && $("#alert_box_input_input").attr("maxlenght", o.options.maxlength), n.bottomBar) {
                var a = n.bottomBar;
                a.hasCheckBox && $("#alert_box_remind .checkbox", $(e.data)).click(function() {
                    var t = $(this);
                    Airdroid.Util.toggleChecked(t, function() {
                        a.hasCheckBox.checkHandle && $.isFunction(a.hasCheckBox.checkHandle) && a.hasCheckBox.checkHandle(t, e)
                    }, function() {
                        a.hasCheckBox.uncheckHandle && $.isFunction(a.hasCheckBox.uncheckHandle) && a.hasCheckBox.uncheckHandle(t, e)
                    })
                }), a.hasOkBtn && ($("#alert_box_yes_btn", $(e.data)).click(function(n) {
                    if ("disabled" != $(this).attr("disabled") && !$(this).hasClass("disabled")) {
                        if (o) {
                            var i = $("#alert_box_input_input").val(),
                                s = function() {
                                    $.isFunction(a.hasOkBtn.clickHandle) && a.hasOkBtn.clickHandle(i), t.enterKeyPressHander = null, t.closeCurrentBlock()
                                };
                            return $.isFunction(o.validateFun) ? o.validateFun(i, function(e) {
                                return e ? ($("#alert_box_input_tipCon").css("visibility", "visible"), $("#alert_box_input_tip").html(e), $("#alert_box_input_input").focus(), !1) : (s(), !0)
                            }) : s(), void 0
                        }
                        $.isFunction(a.hasOkBtn.clickHandle) && (r = a.hasOkBtn.clickHandle(e, n)), r !== !1 && (t.enterKeyPressHander = null, t.closeCurrentBlock())
                    }
                }), $("#alert_box").delegate("input", "keyup", function(e) {
                    13 == e.keyCode && $("#alert_box_yes_btn").trigger("click")
                })), a.hasCancelBtn && $("#alert_box_no_btn", $(e.data)).click(function() {
                    $.isFunction(a.hasCancelBtn.clickHandle) && a.hasCancelBtn.clickHandle(e), t.closeCurrentBlock(), t.enterKeyPressHander = null
                })
            }
            n.width && ($(e.container).css("width", n.width), $(e.container).css("left", ($(window).width() - parseInt(n.width)) / 2 + "px")), n.title && $("#alert_box_tip").height() > 30 && $("#alert_box_tip").css("paddingTop", "0"), n.custom && $.isFunction(n.custom.showHandle) && n.custom.showHandle(e), o ? $("#alert_box_input_input").blur().focus().val(o.defaultValue) : n.bottomBar && (t.enterKeyPressHander = function() {
                $.isFunction(n.bottomBar.hasOkBtn.clickHandle) && (r = n.bottomBar.hasOkBtn.clickHandle(e)), r !== !1 && (t.enterKeyPressHander = null, t.closeCurrentBlock())
            })
        },
        onClose: function(e) {
            n.custom && $.isFunction(n.custom.closeHandle) && n.custom.closeHandle(e), t.closeCurrentBlock(), t.enterKeyPressHander = null, setTimeout(function() {
                if (t._blockModalQueue.length > 0) {
                    var e = t._blockModalQueue.shift();
                    e()
                }
            }, 500)
        }
    }), void 0)
}, Airdroid.Util.confirm = function(e, t, n, i) {
    i = i || {};
    var o = {
        iconType: i.iconType || "confirm",
        title: e,
        description: i.description || "",
        bottomBar: {
            hasOkBtn: {
                msg: i.okBtnMsg,
                cssClass: i.okBtnCss,
                clickHandle: t
            },
            hasCancelBtn: {
                msg: i.cancelBtnMsg,
                cssClass: i.cancelBtnCss,
                clickHandle: n
            }
        }
    };
    this.baseAlertBox(o)
}, Airdroid.Util.alert = function(e, t, n) {
    n = n || {};
    var i = {
        iconType: n.iconType || "alert",
        title: e,
        description: n.description || "",
        bottomBar: {
            hasCheckBox: n.hasCheckBox || !1,
            hasOkBtn: {
                msg: n.okBtnMsg,
                cssClass: n.okBtnCss,
                clickHandle: t
            },
            hasCancelBtn: !1
        }
    };
    this.baseAlertBox(i)
}, Airdroid.Util.prompt = function(e, t, n, i, o, r, a, s) {
    var l = {
        isPrompt: {
            title: t,
            type: e,
            fieldName: n,
            defaultValue: i || "",
            validateFun: a,
            options: {
                maxlength: s || ""
            }
        },
        bottomBar: {
            hasOkBtn: {
                clickHandle: o
            },
            hasCancelBtn: {
                clickHandle: r
            }
        }
    };
    this.baseAlertBox(l)
}, Airdroid.Util.gotItMsgTip = function(e, t, n) {
    var i = {
        iconType: "",
        description: e,
        bottomBar: {
            hasOkBtn: {
                clickHandle: t,
                msg: n || Airdroid.Util.getLang("Common", "Btn_Gotit")
            },
            hasCancelBtn: !1
        }
    };
    this.baseAlertBox(i)
}, Airdroid.Util.kickOutMsg = function() {
    var e = this;
    if (Airdroid.UserManage.isUserOtherLogin()) return !1;
    Airdroid.UserManage.setUserOtherLogin(!0), Airdroid.Message.hideReconnectNotice(), Airdroid.Util.closeCurrentBlock();
    var t = {
        iconType: "alert",
        title: e.getLang("Login", "Msg_KickOut").format("<br>"),
        description: e.getLang("Login", "Tip_KickOut"),
        bottomBar: {
            hasOkBtn: {
                clickHandle: function() {
                    Airdroid.CenterManage.showReLogin()
                },
                msg: e.getLang("Login", "Btn_LogInAgain")
            },
            hasCancelBtn: {
                clickHandle: function() {},
                msg: e.getLang("Common", "Button_Ok")
            }
        }
    };
    this.baseAlertBox(t)
}, Airdroid.Util.customAlertBoxHasBottom = function(e) {
    e.bottomBar.hasOkBtn = e.bottomBar.hasOkBtn || !1, e.bottomBar.hasCancelBtn = e.bottomBar.hasCancelBtn || !1, e.bottomBar.hasCheckBox = e.bottomBar.hasCheckBox || !1, this.customAlertBox(e)
}, Airdroid.Util.customAlertBoxNoBottom = function(e) {
    e.bottomBar = !1, this.customAlertBox(e)
}, Airdroid.Util.customAlertBox = function(e) {
    var t = {
        iconType: "",
        description: e.description || "",
        bottomBar: !1,
        width: e.width,
        animate: e.animate,
        custom: {
            showHandle: e.showHandle,
            closeHandle: e.closeHandle
        }
    };
    this.baseAlertBox($.extend(!0, {}, t, e))
}, Airdroid.Util.closeCurrentBlock = function() {
    this._blockModal && (this._blockModal.close(), this._blockModal = null), this.currentDialogLevel = this.DIALOGLEVEL.LEVEL1
}, Airdroid.Util.hasCurrentBlock = function() {
    return this._blockModal ? !0 : !1
}, Airdroid.Util.showPopupWindowForbiddenTip = function(e) {
    this.customAlertBoxHasBottom({
        description: Airdroid.Util.getTemplate("sys", "pop_window_disabled_tip", {
            lang: Airdroid.Util.getLang("Common")
        }),
        width: "620px",
        bottomBar: {
            hasOkBtn: {
                msg: Airdroid.Util.getLang("Common").Button_Ok,
                clickHandle: function() {
                    $.isFunction(e) && e()
                }
            }
        }
    })
}, Airdroid.Util.chooseFilePathDialog = function(e) {
    var t, n = Airdroid.Util.getLang("Common");
    Airdroid.Util.customAlertBoxHasBottom({
        description: Airdroid.Util.getTemplate("mod/file", "select_sdcard_dialog", {
            lang: n,
            title: e.title,
            type: e.type,
            def: e.def,
            placeholder: e.plholder || ""
        }),
        bottomBar: {
            hasOkBtn: {
                clickHandle: function() {
                    var n = t.val();
                    e.callback(n)
                }
            },
            hasCancelBtn: {}
        },
        showHandle: function(i) {
            var o, r, a, s = $(i.data);
            n = Airdroid.Util.getLang("Common"), t = $(".input-dropdown-tree", s), r = $("#alert_box_yes_btn", s), r.attr("disabled", "disabled", s), t.bind("input", function() {
                $(this).val(o && o.absrc || "")
            });
            var l = null;
            $(".input-dropdown-tree,.dropdown-caret", s).click(function() {
                var i, c, d;
                if (c = t.outerWidth() - 13, l) l.show(), a.reinitialise();
                else {
                    l = $('<div class="dropdown-filetree-panel">', s).css({
                        position: "absolute",
                        left: 103,
                        width: c,
                        height: 300,
                        zIndex: 9999
                    }).insertAfter("#alert_box_msg .input-dropdown-tree", s), d = $('<div class="dropdown-filetree"></div>', s).appendTo(l), a = d.jScrollPane({
                        animateScroll: !0,
                        mouseWheelSpeed: 108,
                        verticalDragMinHeight: 18
                    }).data("jsp"), i = new Airdroid.Module.FileTree, i.addListener(i.EventTypes.on_leaf_collapse, function() {
                        a.reinitialise()
                    }), i.addListener(i.EventTypes.on_leaf_expand, function() {
                        a.reinitialise()
                    }), i.addListener(i.EventTypes.on_leaf_click, function(e) {
                        d.find("div.checked").removeClass("checked"), d.find("ul[cat='" + i.getCurrentTreeCat() + "'] div[absrc='" + e.data.absrc + "']").addClass("checked"), o = e.data, t.val(o.absrc), 0 >= t.val().length ? r.attr("disabled", "disabled") : r.removeAttr("disabled"), console.log(o)
                    }), i.createTreeView({
                        root_path: e.root,
                        bg_blank_img: Airdroid.Service.getImgAssets("feature/bg_blank.gif"),
                        tree_root_name: e.root_name,
                        cat: e.cat,
                        fm: 1,
                        expended: !0
                    }).appendTo(d.find(".jspPane"));
                    var u = $(['<div class="dropdown-bottom">', '    <div class="btn btn-primary btn-file-tree-ok">', n.Button_Ok, "    </div>", "</div>"].join(""));
                    u.find(".btn-file-tree-ok").click(function() {
                        l.hide()
                    }), u.insertAfter(d)
                }
                $(document).unbind("mousedown").bind("mousedown", function(e) {
                    0 === $(e.target).closest(l).length && 0 === $(e.target).closest(t).length && l.hide()
                })
            })
        }
    })
}, Airdroid.Util.browser = {
    version: (navigator.userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/i) || [0, "0"])[1],
    chrome: /chrome/i.test(navigator.userAgent) && /webkit/i.test(navigator.userAgent) && /mozilla/i.test(navigator.userAgent.toLowerCase()),
    safari: /webkit/i.test(navigator.userAgent) && !this.chrome,
    opera: /opera/i.test(navigator.userAgent),
    firefox: /firefox/i.test(navigator.userAgent),
    mozilla: /mozilla/i.test(navigator.userAgent) && !/(compatible|webkit)/i.test(navigator.userAgent) && !this.chrome,
    ie11: /trident\/7.0/i.test(navigator.userAgent),
    ie: /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) || /trident\/7.0/i.test(navigator.userAgent),
    ie10: $.browser.msie && /msie 10\.0/i.test(navigator.userAgent),
    ie9: $.browser.msie && /msie 9\.0/i.test(navigator.userAgent),
    ie8: $.browser.msie && /msie 8\.0/i.test(navigator.userAgent),
    ie7: $.browser.msie && /msie 7\.0/i.test(navigator.userAgent),
    ie6: $.browser.msie && /msie 6\.0/i.test(navigator.userAgent),
    checkIEVersion: function(e) {
        var t;
        return t = navigator.appVersion.split(";"), t = t[1].replace(/[ ]/g, ""), this.ie && t === "MSIE" + e + ".0"
    },
    getBrowserName: function() {
        return this.chrome ? "chrome" : this.safari ? "safari" : this.opera ? "opera" : this.firefox ? "firefox" : this.ie ? "ie" : this.mozilla ? "mozilla" : "unknown browser"
    }
}, Airdroid.Util.OS = {
    Windows: /win/i.test(navigator.appVersion.toLowerCase()),
    MacOS: /mac/i.test(navigator.appVersion.toLowerCase()),
    Unix: /x11/i.test(navigator.appVersion.toLowerCase()),
    Linux: /linux/i.test(navigator.appVersion.toLowerCase()),
    ChromeOs: /cros/i.test(navigator.appVersion.toLowerCase()),
    getOSName: function() {
        return this.Windows ? "Windows" : this.MacOS ? "MacOS" : this.ChromeOs ? "ChromeOs" : this.Unix ? "UNIX" : this.Linux ? "Linux" : "Unknown OS"
    }
}, Airdroid.Util.getCookie = function(e) {
    var t = document.cookie.indexOf(e),
        n = document.cookie.indexOf(";", t);
    return -1 == t ? "" : unescape(document.cookie.substring(t + e.length + 1, n > t ? n : document.cookie.length))
}, Airdroid.Util.hasCookie = function(e) {
    return -1 != document.cookie.indexOf(e)
}, Airdroid.Util.setCookie = function(e, t, n, i, o, r) {
    var a = new Date;
    a.setTime(a.getTime() + 1e3 * n), document.cookie = escape(e) + "=" + escape(t) + (a ? "; expires=" + a.toGMTString() : "") + (i ? "; path=" + i : "/") + (o ? "; domain=" + o : "") + (r ? "; secure" : "")
}, Airdroid.Util.deleteCookie = function(e, t, n) {
    Airdroid.Util.setCookie(e, "", -1e3, t, n)
}, Airdroid.Util.isCookieEnabled = function() {
    return navigator.cookieEnabled || "cookie" in document && (document.cookie.length > 0 || (document.cookie = "isCookieEnabled").indexOf.call(document.cookie, "isCookieEnabled") > -1)
}, Airdroid.Util.dateFormateYMD = function(e) {
    return moment.lang(Airdroid.Runtime.locale), moment(e).format("L")
}, Airdroid.Util.dateFormate = function(e, t, n, i) {
    t = t || "MM/DD/YYYY HH:mm", moment.lang(Airdroid.Runtime.locale);
    var o = "";
    if (n) {
        var r = (new Date).getTime() / 1e3,
            a = new Date(e).getTime() / 1e3,
            s = r - a;
        o = s > 86400 ? moment(e).format(t) : i ? moment(e).fromNow() : moment(e).calendar()
    } else o = moment(e).format(t);
    return o
}, Airdroid.Util.dateFormateFromNow = function(e, t) {
    return this.dateFormate(1e3 * e, t, !0, !0)
}, Airdroid.Util.hmsFormat = function(e) {
    var t = Math.floor(e / 3600),
        n = Math.floor(e % 3600 / 60),
        e = Math.floor(e % 3600 % 60);
    return e = 10 > e ? "0" + e : "" + e, n = 10 > n ? "0" + n : "" + n, t = 10 > t ? "0" + t : "" + t, t + ":" + n + ":" + e
}, Airdroid.Util.secondsToTime = function(e) {
    var t, e = e / 1e3,
        n = Math.floor(e / 3600),
        i = Math.floor(e % 3600 / 60),
        e = Math.floor(e % 3600 % 60),
        o = i,
        r = e;
    return 10 > i && (o = "0" + i), 10 > e && (r = "0" + e), t = n > 0 ? n + ":" + o + ":" + r : i > 0 ? o + ":" + r : "00:" + r
},
    function(e) {
        var t = e.Notification,
            n = Airdroid.Util,
            i = Airdroid.Config.SystemSettingNames,
            o = n.Notifications = n.Notifications || {};
        $.extend(o, {
            PERMISSION_NOT_SUPPORT: "not support",
            PERMISSION_GRANTED: "granted",
            PERMISSION_DEFAULT: "default",
            PERMISSION_DENIED: "denied",
            PERMISSION_OPEN: "open",
            PERMISSION_CLOSE: "close",
            checkDesktopNotificationUserPermission: function() {
                if (n.checkUserLogin()) {
                    var e = n.Notifications.checkDesktopPermission();
                    if (e == this.PERMISSION_NOT_SUPPORT) return this.PERMISSION_NOT_SUPPORT;
                    var t = Airdroid.AppManage.getSystemSetting(i.smsNotice.name);
                    return t.desktop ? e == this.PERMISSION_DEFAULT ? (this.setDesktopNotification("close"), this.PERMISSION_CLOSE) : this.PERMISSION_OPEN : this.PERMISSION_CLOSE
                }
                return this.PERMISSION_NOT_SUPPORT
            },
            saveDesktopNotificationUserSetting: function(e, t, n) {
                var o = Airdroid.AppManage.getSystemSetting(i.smsNotice.name),
                    r = Airdroid.AppManage.getSystemSetting(i.callNotice.name);
                o.desktop = e, r.desktop = e, Airdroid.AppManage.setSystemSetting([i.smsNotice.name, i.callNotice.name], [o, r], t, n)
            },
            setDesktopNotification: function(e, i, o) {
                var r = this;
                if (n.checkUserLogin())
                    if ("open" == e) switch (this.checkDesktopPermission()) {
                        default:
                        case this.PERMISSION_DEFAULT:
                            t.requestPermission(function() {
                                r.setDesktopNotification("open", i, o)
                            });
                            break;
                        case this.PERMISSION_DENIED:
                            n.customAlertBoxHasBottom({
                                description: Airdroid.Util.getTemplate("mod/usercenter", "notice_tip", {
                                    lang: Airdroid.Util.getLang("Common")
                                }),
                                bottomBar: {
                                    hasOkBtn: {
                                        msg: Airdroid.Util.getLang("Common").Button_Ok
                                    }
                                },
                                width: "710px"
                            }),
                            $.isFunction(i) && i(!0);
                            break;
                        case this.PERMISSION_GRANTED:
                            r.saveDesktopNotificationUserSetting(!0, i, o)
                    } else r.saveDesktopNotificationUserSetting(!1, i, o)
            },
            checkDesktopPermission: function() {
                return t ? t.permission : this.PERMISSION_NOT_SUPPORT
            }
        })
    }(window), Airdroid.Util.breakConnectType = {
    PHONE_OFFLINE: "1",
    BATTERY_OFFLINE: "2",
    LOGOUT: "3",
    FORBIDDEN: "4",
    UNBIND: "5",
    OTHER_LOGIN: "6",
    DISCONNECTION: "7"
}, Airdroid.Util.showLoadingMask = function(e, t, n) {
    new Airdroid.UI.Loading({
        dom: e,
        color: t,
        bg: n
    })
}, Airdroid.Util.removeLoadingMask = function(e) {
    e.data("ui_mask") && e.data("ui_mask").removeMask()
}, Airdroid.Util.cancelEventBubble = function(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
}, Airdroid.Util.clearContextMenu = function() {
    $("div.context_menu").remove(), $("div.popup-menu").hide()
}, Airdroid.Util.showDelayMsg = function(e, t, n, i, o) {
    var r, a, s;
    if (i) return this.alert(t, n), !1;
    if (!e.is(":visible")) return !1;
    o = o || 2e3, i ? (s = "#F3D169", a = "red", r = 1) : (s = "#000", a = "#fff", r = .7), e.block({
        message: t,
        css: {
            border: "none",
            background: s,
            opacity: r,
            color: a,
            padding: "8px 16px",
            "border-radius": "5px"
        },
        overlayCSS: {
            backgroundColor: "none",
            cursor: "default"
        }
    });
    var l = e.find(".blockMsg");
    l.css({
        width: l.width() + 16,
        height: l.height(),
        margin: "auto",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }), setTimeout(function() {
        e.unblock(), _.isFunction(n) && n()
    }, o)
}, Airdroid.Util.showLoadTip = function(e) {
    new Airdroid.UI.Mask({
        dom: $("#block-desktop"),
        content: {
            message: decodeURIComponent(e) + '<br/><img src="' + Airdroid.Service.getImgAssets("connecting.gif") + '" style="margin:5px auto;border-radius: 7px;"></div>',
            css: {
                border: "none",
                width: "300px",
                height: "50px",
                backgroundColor: "none",
                padding: "0px",
                color: "white",
                "font-size": "14px"
            }
        }
    }).setMask()
}, Airdroid.Util.removeLoadTip = function() {
    this.removeLoadingMask($("#block-desktop"))
}, Airdroid.Util.readonly = function(e) {
    e.attr("readonly", "readonly")
}, Airdroid.Util.writable = function(e) {
    e.removeAttr("readonly")
}, Airdroid.Util.enableDom = function(e) {
    e && (e.removeAttr("disabled"), e.removeClass("disabled"))
}, Airdroid.Util.disableDom = function(e) {
    e && (e.attr("disabled", "disabled"), e.addClass("disabled"))
}, Airdroid.Util.disableButton = function(e) {
    this.disableDom(e), e.addClass("btn-state-disabled");
    try {
        var t = -1 != e.attr("class").indexOf("blue");
        t && e.css("color", "#5CA1E8")
    } catch (n) {}
}, Airdroid.Util.enableButton = function(e) {
    if (this.enableDom(e), e.removeClass("btn-state-disabled"), e.attr("class")) {
        var t = -1 != e.attr("class").indexOf("blue");
        t && e.css("color", "white")
    }
}, Airdroid.Util.showLoadingButton = function(e, t) {
    if (e.hasClass("btn-state-loading")) return !1;
    e.addClass("btn-state-loading");
    var n, i = e.val() || e.text();
    "BUTTON" === e.get(0).tagName ? (n = e.height() + parseInt(e.css("paddingTop")) + parseInt(e.css("paddingBottom")) + 2, e.data("data-style", e.attr("style")), e.height(n), e.width(e.width())) : (e.height(e.height()), e.width(e.width())), e.val(""), e.text(""), e.data("data-text", i), t && this.showLoadingMask(t, "no_loading")
}, Airdroid.Util.removeLoadingButton = function(e, t) {
    return e.hasClass("btn-state-loading") ? (e.removeClass("btn-state-loading"), "BUTTON" === e.get(0).tagName && (e.removeAttr("style"), e.data("data-style") && e.attr("style", e.data("data-style"))), e.val(e.data("data-text")), e.text(e.data("data-text")), t && this.removeLoadingMask(t), void 0) : !1
}, Airdroid.Util.download = function(e) {
    $("#downloadFrame").attr("src", e)
}, Airdroid.Util.noData = function(e, t) {
    switch (this.removeNoData(e), this.removeUploadTip(e), t) {
        case "thread":
            e.addClass("i-bg-norecord-thread");
            break;
        default:
            e.addClass("i-bg-norecord")
    }
}, Airdroid.Util.removeNoData = function(e) {
    e.removeClass("i-bg-norecord").removeClass("i-bg-norecord-thread")
}, Airdroid.Util.addUploadTip = function(e) {
    this.removeUploadTip(e), this.removeNoData(e), e.prepend('<div class="drag-tip-wraper" ><div class="drag-tip">' + this.getLang("Common", "drag_drop_or_click_to_upload") + "</div>" + "</div>")
}, Airdroid.Util.removeUploadTip = function(e) {
    e.find(".drag-tip-wraper").remove()
}, Airdroid.Util.showServerNetWorkErrorTip = function(e, t, n) {
    var i = this,
        o = e.find(".server-network-error-tip");
    o.length > 0 && o.show(), o = $(i.getTemplate("sys", "server_error_tip", {
        lang: i.getLang("Common")
    })), e.append(o), o.find("a").click(function() {
        $.isFunction(t) && t()
    }), _.isObject(n) && o.css(n)
}, Airdroid.Util.hideServerNetWorkErrorTip = function(e) {
    var t = e.find(".server-network-error-tip");
    t.length > 0 && t.hide()
}, Airdroid.Util.toggleChecked = function(e, t, n) {
    "1" == e.attr("check") ? (e.attr("check", "0").removeClass("checked"), _.isFunction(n) && n()) : (e.attr("check", "1").addClass("checked"), _.isFunction(t) && t())
}, Airdroid.Util.setChecked = function(e) {
    e.attr("check", "1").addClass("checked")
}, Airdroid.Util.setUnchecked = function(e) {
    e.attr("check", "0").removeClass("checked")
}, Airdroid.Util.checkAll = function(e, t, n, i) {
    "1" == e.attr("check") ? (e.attr("check", "0").removeClass("checked"), t.attr("check", "0").removeClass("checked"), _.isFunction(i) && i()) : (e.attr("check", "1").addClass("checked"), t.attr("check", "1").addClass("checked"), _.isFunction(n) && n())
}, Airdroid.Util.radioSelected = function(e, t) {
    e.find(".radio").attr("check", "0").removeClass("checked"), t.attr("check", "1").addClass("checked")
}, Airdroid.Util.refreshModuleJsUrl = function(e) {
    var t = e.js.split(",");
    _.each(t, function(e, n) {
        t[n] = e + (e.split("?")[1] ? "&" : "?") + $.param({
            ddddd: (new Date).getTime()
        })
    }), e.js = t.join(",")
}, Airdroid.Util.runPlayer = function(e) {
    var t, n, i, o, r, a, s, l, c;
    t = !this.OS.MacOS, n = this.OS.ChromeOs, i = e.format, o = /(mov|mkv|mp4|m4v|3gp|webmv)/i.test(i), s = /(flv)/i.test(i), l = /(mkv)/i.test(i), c = /(webmv)/i.test(i), a = Airdroid.Config.dependApps, r = o && t || s || l || c || n ? a.videoPlayerH5 : a.videoPlayer, Airdroid.AppManage.createAppByAppId(r, {
        id: e.id,
        name: e.name,
        thumb: e.thumb,
        url: e.url,
        format: e.format,
        download: e.fileUrl || e.download,
        oriSize: e.oriSize,
        duration: e.durationMs
    })
}, Airdroid.Util.checkChromeOSPresent = function(e) {
    var t = Airdroid.Runtime.fromOffer || !1;
    return delete Airdroid.Runtime.fromOffer, this.OS.ChromeOs && e.appId == Airdroid.Config.dependApps.loginWidget && Airdroid.DesktopManage.isDefaultDesktops() && (!this.hasCookie("show_pLogin") && !Airdroid.Runtime.canShowLoginForm || t)
}, Airdroid.Util.getOldVersionUrl = function(e) {
    var t = Airdroid.Service.addServerParam({
        app_ver: e
    });
    return Airdroid.Util.addParameterToURL(Airdroid.Config.serverCenterUrl + Airdroid.Config.historyRedirectUrl, t)
}, Airdroid.Util.showCameraSettingPanel = function(e) {
    Airdroid.Util.showSettingPanel("camera", e)
}, Airdroid.Util.showScreenshotSettingPanel = function(e) {
    Airdroid.Util.showSettingPanel("screenshot", e)
}, Airdroid.Util.getCameraSaveToType = function() {
    return Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.cameraSaveType.name)
}, Airdroid.Util.getScreenshotSaveToType = function() {
    return Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.screenshotSaveType.name)
}, Airdroid.Util.showSettingPanel = function(e, t) {
    var n, i, o, r, a, s = 45,
        l = 36;
    if (this._settingDom = this._settingDom || {}, n = this._settingDom[e] || $(this.getTemplate("mod", "set_save_type", {
            common: this.getLang("Common")
        })), n.appendTo("body"), t.top + n.height() > $("body").height() - s && (t.top -= l + n.height()), n.css(t), this._settingDom[e]) return n.show(), void 0;
    i = n.find(".quick-settingItem");
    var c = function() {
        return "camera" === e ? $(".mod-camera-opCamera span") : $(".mod-screenshot a.shot span")
    };
    i.click(function() {
        o = $(this), i.removeClass("checked"), o.addClass("checked"), r = o.attr("data-save-to"), "camera" === e ? (Airdroid.Util.trackEvent("M-Camera", "Setting saveType " + r), Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.cameraSaveType.name, r)) : "screenshot" === e && Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.screenshotSaveType.name, r), 0 == r ? c().attr("class", "icon-save-to-pc") : 1 == r && c().attr("class", "icon-save-to-phone"), setTimeout(function() {
            n.hide()
        }, 150)
    }), i.mouseover(function() {
        i.removeClass("popup-menu-using-item-hover"), $(this).addClass("popup-menu-using-item-hover")
    }), $(document).mousedown(function(e) {
        0 === $(e.target).closest(n).length && n.hide()
    }), a = this.getCameraSaveToType(), "camera" === e ? a = this.getCameraSaveToType() : "screenshot" === e && (a = this.getScreenshotSaveToType()), i.eq(a).addClass("checked"), this._settingDom[e] = n
}, Airdroid.Util.showModuleLoadingMask = function(e) {
    e.children().hide(), e.append('<div class="app-load app-loading-mask"></div>')
}, Airdroid.Util.removeModuleLoadingMask = function(e) {
    e.find(".app-loading-mask").remove(), e.children().show()
}, Airdroid.Util.addVerticalFadeOutEdge = function(e, t) {
    var n = "box-edgeTop",
        i = "box-edgeBottom",
        o = {
            position: "absolute",
            left: 0,
            right: 0,
            height: 0,
            boxShadow: "0 0 5px 5px " + t,
            zIndex: 1
        };
    e.find("." + n).remove(), e.find("." + i).remove();
    var r = $("<div>").addClass(n),
        a = $("<div>").addClass(i);
    r.css($.extend({
        top: 0
    }, o)), a.css($.extend({
        bottom: 0
    }, o)), e.prepend(r).prepend(a)
}, Airdroid.Util.preventDefaultFileDrop = function(e, t) {
    var n;
    return Airdroid.Util.browser.ie9 || Airdroid.Util.browser.ie8 ? !1 : (e instanceof jQuery ? n = e[0] : e instanceof Element || e instanceof Document ? n = e : console.error("Target must be a HTMLDocument|HTMLElement|jQuery."), n.ondragover = function() {
        return !1
    }, n.ondrop = function(e) {
        e.preventDefault(), t && t()
    }, void 0)
}, Airdroid.Util.showBodyMask = function() {
    Airdroid.Util.customAlertBoxNoBottom({
        description: "",
        showHandle: function() {
            $("#alert_box").css({
                padding: "0",
                border: "none"
            })
        }
    })
}, Airdroid.Util.removeBodyMask = function() {
    this.closeCurrentBlock()
}, Airdroid.Util.checkSupportGoPush = function() {
    return Airdroid.Config.goPush
}, Airdroid.Util.keepWidgetInScreen = function(e) {
    $(window).resize(function() {
        var t = Airdroid.DesktopManage.getDashboard();
        t && t.isVisible() || "auto" === e.css("left") && e.css("left") || e.css("left", Math.min(e.offset().left, document.documentElement.clientWidth - e.width()))
    })
}, Airdroid.Util.checkSupportMultiDesktop = function() {
    return Airdroid.Config.multiDesktop
}, Airdroid.Util.trackPageLoadTime = function(e) {
    if (Airdroid.Runtime.resourceStartTime) {
        var t = parseInt(((new Date).getTime() - Airdroid.Runtime.resourceStartTime) / 1e3);
        console.log(e + "===============" + t), this.trackEvent("pageLoadTime", e, t)
    }
}, $.extend(Airdroid.Util, {
    slideOutToLeft: function(e, t) {
        return this.slide(e, {
            type: "out",
            direction: "left",
            duration: t
        })
    },
    slideInFromRight: function(e, t) {
        return this.slide(e, {
            type: "in",
            direction: "right",
            duration: t
        })
    },
    slideInFromLeft: function(e, t) {
        return this.slide(e, {
            type: "in",
            direction: "left",
            duration: t
        })
    },
    slideOutToRight: function(e, t) {
        return this.slide(e, {
            type: "out",
            direction: "right",
            duration: t
        })
    },
    slide: function(e, t) {
        var n, i, o, r, a, s, l, c;
        return t = _.defaults(t, {
            direction: "left",
            type: "out",
            duration: 200
        }), n = $.Deferred(), i = e.parent().width(), o = e.css("margin") || 0, s = t.type, r = t.direction, a = {}, c = "left" == r || "right" == r ? "marginLeft" : "marginTop", "in" === s ? (e.show(), "left" === r || "top" === r ? (e.css(c, "-=" + i + "px"), a[c] = "+=" + i + "px") : (e.css(c, "+=" + i + "px"), a[c] = "-=" + i + "px")) : a[c] = "left" === r || "top" === r ? "-=" + i + "px" : "+=" + i + "px", l = function() {
            "out" === s && e.hide(), e.css("margin", o), n.resolve()
        }, e.animate(a, t.duration, l), n.promise()
    }
}), Airdroid.Util._analyticsData = {
    origin: Airdroid.Config.isLiteVersion ? "airdroid_lite" : "airdroid_web",
    browser: Airdroid.Util.browser.getBrowserName(),
    os: Airdroid.Util.OS.getOSName(),
    webVer: Airdroid.Config.webVer,
    appVer: "",
    accountId: "",
    deviceId: "",
    operate: []
}, Airdroid.Util._analyticsTimer = null, Airdroid.Util._analyticsMaxTime = 3e4, Airdroid.Util._analyticsMinTime = 3e3, Airdroid.Util.postAnalyticsData = function() {
    var e = this,
        t = Airdroid.DeviceManage ? Airdroid.DeviceManage.getCurrentDeviceObj() : "";
    e._analyticsData = $.extend(e._analyticsData, {
        appVer: t ? t.getVersion() : "",
        accountId: Airdroid.UserManage ? Airdroid.UserManage.getAccountId() : "",
        deviceId: t ? t.getLongId() : ""
    }), console.log("==>:" + JSON.stringify(e._analyticsData)), $.ajax({
        type: "POST",
        url: "http://tdshidai.airdroid.com/webstat",
        data: JSON.stringify(e._analyticsData),
        crossDomain: !0,
        xhrFields: {
            withCredentials: !0
        },
        dataType: "text",
        success: function() {},
        error: function() {}
    }), e._analyticsData.operate = []
}, Airdroid.Util.trackAnalytics = function(e) {
    var t = this,
        n = t._analyticsData.operate;
    n.push(e), t._analyticsTimer && clearTimeout(t._analyticsTimer), t._analyticsTimer = setTimeout(function() {
        t.postAnalyticsData()
    }, n.length > 30 ? t._analyticsMinTime : t._analyticsMaxTime)
}, Airdroid.Util.trackEvent = function(e, t, n) {
    if (this.trackAnalytics({
            sourceModel: e,
            model: t,
            action: n,
            time: (new Date).getTime()
        }), Airdroid.Config.userApiUrl.indexOf("test") > 0 || !window.ga) return !1;
    for (var i = ["send", "event"], o = 0; arguments.length > o; o++) arguments[o] !== void 0 && (4 == o ? i.push({
        nonInteraction: 1
    }) : i.push(arguments[o]));
    var r = window.ga;
    r && r.apply(null, i)
}, Airdroid.Util._goPremiumType = {
    remote_free_upload_more_10: 101,
    remote_free_upload_overage: 102,
    usercenter_free_to_premium: 103,
    usercenter_premium_renew: 104,
    remote_feature_need_premium: 105,
    feature_need_premium: 106,
    remote_free_overage: 107,
    placard: 108,
    desktop_icon: 109,
    multi_upgrade: 110
}, Airdroid.Util.checkUserLogin = function() {
    return Airdroid.UserManage.checkUserLogin()
}, Airdroid.Util.checkPremium = function() {
    return Airdroid.UserManage.checkPremium()
}, Airdroid.Util.showPremiumTip = function(e) {
    e = e || this._goPremiumType.desktop_icon, Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.Premium, {
        fromType: e
    })
}, Airdroid.Util.checkDataOverage = function(e) {
    var t = !1,
        n = Airdroid.UserManage.getMonthDataCache();
    return n && parseInt(n.used) + parseInt(e) > parseInt(n.total) && (t = !0), t
}, Airdroid.Util.checkShowReconnectTip = function() {
    return Airdroid.Config.isLiteVersion || Airdroid.UserManage.isUserOtherLogin() ? !1 : !(Airdroid.Util.checkUserLogin() && !Airdroid.DeviceManage.getDeviceOptById(Airdroid.DeviceManage.getCurrentDeviceId()))
}, Airdroid.Util.validateLoginInput = function(e, t) {
    var n = {};
    return this.trackEvent("W-Login", "Login", "Account"), "" == e ? (n.fail = !0, n.msg = this.getLang("Common", "Enter_Email")) : "" == t ? (n.fail = !0, n.msg = this.getLang("Common", "Enter_User_Password")) : n.fail = !1, n
}, Airdroid.Util.doLogin = function(e, t, n) {
    var i = this;
    n = n || {};
    var o = n.type || "account";
    e ? i.setCookie("email", e, 1209600) : "" == e && (Airdroid.Runtime.isAutoLogin = !0), Airdroid.Runtime.onLogining = !0;
    var r = n.isKeepLogin || "0",
        a = 0,
        s = 2,
        l = [{
            mail: e,
            pwd: t,
            keep: r
        }, function(e) {
            "1" == e.code ? (Airdroid.DesktopManage.changeNavUser(), Airdroid.UserManage.setAccount(e.result), Airdroid.DeviceManage.initAllDevicesObj(), Airdroid.UserManage.getUserInfo(), $.isFunction(n.successCb) && n.successCb(o), Airdroid.Util.trackEvent("SignIn", "Success")) : "-3" == e.code || "-2" == e.code ? ($.isFunction(n.failCb) && n.failCb(i.getLang("Common", "PasswordIncorrect")), Airdroid.Util.trackEvent("SignIn", "Fail", "PasswordIncorrect")) : (Airdroid.Util.trackEvent("SignIn", "Fail", "AuthFailed"), $.isFunction(n.failCb) && n.failCb(""))
        }, function() {
            s > a ? (a += 1, console.log("，"), Airdroid.Service.checkInternetLogin.apply(Airdroid.Service, l)) : $.isFunction(n.timeoutCb) && n.timeoutCb(i.getLang("Common", "Failed_To_Signin")), Airdroid.Util.trackEvent("SignIn", "Fail", "Network")
        }];
    Airdroid.Service.checkInternetLogin.apply(Airdroid.Service, l)
}, Airdroid.Util.authWindowClose = function(e, t) {
    var n = this;
    t = t || {};
    var i = {
        type: e,
        successCb: function() {
            $.isFunction(t.successCb) && t.successCb()
        },
        failCb: function(e) {
            Airdroid.UserManage.account = null, n.removeLoadingMask($("body")), Airdroid.UserManage.setInfoChange(), $.isFunction(t.failCb) && t.failCb(e)
        },
        timeoutCb: function(e) {
            n.alert(n.getLang("Common", "Failed_To_Signin")), n.removeLoadingMask($("body")), $.isFunction(t.timeoutCb) && t.timeoutCb(e)
        }
    };
    n.doLogin("", "", i)
}, Airdroid.Util.setAutoLoginAndConnect = function(e, t) {
    Airdroid.Util.checkUserLogin() && (Airdroid.Util.setCookie("airdroid_history", e, 180, "/", ".airdroid.com"), t && Airdroid.DeviceManage.checkNeedSelectDevicePanel() && Airdroid.Util.setCookie("airdroid_history_id", t, 180, "/", ".airdroid.com"))
}, Airdroid.Util.backToHistoryVersion = function(e, t, n) {
    t = t || Airdroid.DeviceManage.getCurrentDeviceId(), n = n || Airdroid.Util.getOldVersionUrl(e), Airdroid.Util.setAutoLoginAndConnect(e, t), window.location.href = n
},
function() {
    var e = Airdroid.Util,
        t = e.Notifications = e.Notifications || {},
        n = e.Notification = e.Notification || {},
        i = [],
        o = [],
        r = null,
        a = !1,
        s = !0;
    $(window).blur(function() {
        s = !1
    }), $(window).focus(function() {
        s = !0
    }), $.extend(n, {
        getCleanText: function(e) {
            return $("<div>").html(e).text()
        },
        createDesktopNotification: function(e, t, n, i) {
            return t = this.getCleanText(t), n = this.getCleanText(n), new Notification(t, {
                tag: i,
                icon: e.url || e,
                body: n
            })
        },
        createAirNotification: function(e, t, n) {
            var i, o, r;
            return i = new Airdroid.Notification(t, {
                icon: e,
                body: n
            }), o = $(".airtip:visible"), r = o.height(), Airdroid.Notifications.css("bottom", 50 + r), i
        },
        showNotification: function(n) {
            n = n || {};
            var a, l, c, d, u, p, f, h, m;
            if (c = d = n.replaceId, u = n.icon, p = n.title, f = n.content, m = n.autoClose, h = l = n.type, p || (p = f, f = null), "desktop" === l) {
                if (s) return;
                if (t.checkDesktopNotificationUserPermission() !== t.PERMISSION_OPEN) return console.debug("User desktop notification no open."), void 0;
                a = this.createDesktopNotification(u, p, f, d)
            } else "auto" !== l || s || t.checkDesktopNotificationUserPermission() !== t.PERMISSION_OPEN ? (h = "air", a = this.createAirNotification(u, p, f)) : (h = "desktop", a = this.createDesktopNotification(u, p, f, d));
            if (a.type = h, a.ondisplay = n.ondisplay, a.onclick = function() {
                    Airdroid.Message.clearLEDTitle("all"), _.isFunction(n.onclick) && n.onclick.call(this), "desktop" === h && this.close()
                }, a.onclose = function() {
                    var e = i.indexOf(a);
                    i.splice(e, 1), e = o.indexOf(a), o.splice(e, 1), _.isFunction(n.onclose) && n.onclose.call(this), setTimeout(function() {
                        var e = $(".notifications");
                        e.find(".notification-body").length > 3 ? (e.height(216), r.reinitialise()) : (e.css("height", "auto"), r && (e.find(".notification-close").prependTo(r.getContentPane()), r && r.destroy(), r = null))
                    }, 251)
                }, a.replaceId = c, a.show && a.show(), i.push(a), "air" === h) {
                var g = $(".notifications");
                g.find(".notification-body").length > 3 ? (g.height(216), r && a.$el.appendTo(g.find(".jspPane")), setTimeout(function() {
                    r ? r.reinitialise() : (r = g.jScrollPane({
                        showArrows: !0,
                        horizontalGutter: 60,
                        verticalGutter: 60
                    }).data("jsp"), g.find(".notification-close").prependTo(g)), e.addVerticalFadeOutEdge(g, "#1C1C1C"), r.scrollToBottom()
                }, 251)) : g.css("height", "auto")
            }
            return m && setTimeout(function() {
                a.isRemoved || a.close()
            }, m), a
        },
        showMsgReceivedNotice: function(t) {
            t = t || {};
            var n, i, r, a;
            return n = t.from, i = t.unreadCount, r = e.getLang("SMS"), a = this.showNotification(_.defaults(t, {
                content: r.Message_ReveivedMessage.format(n, i),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/msg_icon.png"),
                    width: 43,
                    height: 38,
                    className: "icon-sms"
                }
            })), o.push(a), a
        },
        showMissedCallNotice: function(t) {
            t = t || {};
            var n, i;
            return n = t.missedCallCount, i = e.getLang("DialPad"), this.showNotification(_.defaults(t, {
                content: i.Call_Notice.format(n),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/call_icon.png"),
                    width: 38,
                    height: 37,
                    className: "icon-noticeCall"
                }
            }))
        },
        showDeviceNotificationNotice: function(e) {
            return e = e || {}, this.showNotification(_.defaults(e, {
                replaceId: _.uniqueId("device_notification_"),
                type: "auto",
                icon: {
                    url: Airdroid.Service.getImgAssets("logo-medium.png")
                },
                autoClose: 7e3
            }))
        },
        removeIncomingCallNotice: function() {
            t.removeNoticeByReplaceId("call")
        },
        showIncomingCallNotice: function(t) {
            t = t || {};
            var n, i, o;
            return o = e.getLang("Common"), n = t.name, i = t.number, this.showNotification(_.defaults(t, {
                replaceId: "call",
                title: o.notification_call_title,
                content: o.incoming_call.format(n || i),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/call_icon.png"),
                    width: 38,
                    height: 37,
                    className: "icon-noticeCall"
                },
                onclick: function() {
                    $(window).focus()
                }
            }))
        },
        showBatteryNotice: function(t) {
            t = t || {};
            var n, i, o;
            if (i = t.power, o = e.getLang("Battery"), _.isUndefined(i)) throw "Power option is required.";
            return n = i >= 10 ? "#F68005" : "#f60005", this.showNotification(_.defaults(t, {
                replaceId: "battery",
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/system_warning_icon.png"),
                    className: "icon-alert"
                },
                content: [o.Message_GettingLow, ' <span style="color:' + n + '; font-size: 19px;">', i, "%</span> ", o.Message_Reminding, "<br>", o.Message_ConnectCharge].join("")
            }))
        },
        showBalloonTip: function(e) {
            e = e || {};
            var t = e.targetSelector;
            return $(t).airBalloonTip(_.defaults({
                onshow: function() {
                    $.isFunction(e.onshow) && e.onshow(), Airdroid.Notifications.css("bottom", 50 + $("#airtip_" + e.replaceId).height())
                },
                onhide: function() {
                    $.isFunction(e.onhide) && e.onhide(), Airdroid.Notifications.css("bottom", 45)
                }
            }, e))
        }
    }), $.extend(t, {
        removeNoticeByReplaceId: function(e) {
            var t = _.filter(i, function(t) {
                return t.replaceId === e
            });
            i = _.without(i, t), _.invoke(t, "close")
        },
        removeNoticeByThreadId: function(e) {
            this.removeNoticeByReplaceId(e)
        },
        closeAllNotice: function(e) {
            var t = this,
                n = e.length;
            if (0 === n) return a = !1, void 0;
            var i = e[n - 1];
            i && ("air" === i.type ? i.close(function() {
                setTimeout(function() {
                    t.closeAllNotice(e)
                }, 100)
            }) : (i.close(), setTimeout(function() {
                t.closeAllNotice(e)
            }, 100)))
        },
        removeAllNotice: function() {
            a || (a = !0, this.closeAllNotice(i))
        },
        removeAllMessageNotice: function() {
            a || (a = !0, this.closeAllNotice(o))
        }
    })
}(window), Airdroid.Util.checkSupportLocalStorage = function() {
    return window.localStorage ? !0 : !1
}, Airdroid.Util.getLocalStorageItem = function(e) {
    if (!this.checkSupportLocalStorage()) return !1;
    try {
        return window.localStorage.getItem(e)
    } catch (t) {
        return !1
    }
}, Airdroid.Util.setLocalStorageItem = function(e, t) {
    if (this.checkSupportLocalStorage()) try {
        window.localStorage.setItem(e, t)
    } catch (n) {}
}, Airdroid.Util.removeLocalStorageItem = function(e) {
    this.checkSupportLocalStorage() && window.localStorage.removeItem(e)
}, Airdroid.Util.clearLocalStorage = function() {
    this.checkSupportLocalStorage() && window.localStorage.clear()
}, Airdroid.Util._placardWidget = null, Airdroid.Util.openTabInPlacard = function(e) {
    "http://airdroid.com/pay/premium/" == e ? Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.placard) : window.open(e, "_blank")
}, Airdroid.Util.showPlacard = function() {
    var e = this;
    e._placardWidget = e._placardWidget || null;
    var t = {
        device_id: Airdroid.DeviceManage.getCurrentDeviceDid()
    };
    Airdroid.Service.getAllNotices(t, function(t) {
        if ("1" == t.code) {
            e.removePlacard(), Airdroid.Runtime.placardData = t.data, Airdroid.Runtime.unreadPlacard = [];
            var n = [];
            if (_.each(t.data, function(e) {
                    "0" == e.is_read && (n.push(e), Airdroid.Runtime.unreadPlacard.push(e.id))
                }), n.length > 0) var i = setInterval(function() {
                _.isFunction(Airdroid.Widget.Placard) ? (e._placardWidget = new Airdroid.Widget.Placard, e._placardWidget.create(n), clearInterval(i)) : console.log("===no load js===")
            }, 10)
        }
    })
}, Airdroid.Util.removePlacard = function() {
    var e = this;
    e._placardWidget && e._placardWidget.clear()
}, Airdroid.Util.viewNotice = function(e, t) {
    var n = {
        aid: Airdroid.UserManage.getAccountId(),
        noticeId: e,
        msType: t || 0
    };
    Airdroid.Service.viewNotice(n, function(e) {
        "1" == e.code ? console.log("") : console.log("")
    })
}, Airdroid.Util.initFullScreenApi = function() {
    var e = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return !1
            },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            prefix: ""
        },
        t = "webkit moz o ms khtml".split(" ");
    if (document.cancelFullScreen !== void 0) e.supportsFullScreen = !0;
    else
        for (var n = 0, i = t.length; i > n; n++)
            if (e.prefix = t[n], document[e.prefix + "CancelFullScreen"] !== void 0) {
                e.supportsFullScreen = !0;
                break
            }
    e.supportsFullScreen && (e.fullScreenEventName = e.prefix + "fullscreenchange", e.isFullScreen = function() {
        switch (this.prefix) {
            case "":
                return document.fullScreen;
            case "webkit":
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + "FullScreen"]
        }
    }, e.requestFullScreen = function(e) {
        return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
    }, e.cancelFullScreen = function() {
        return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
    }), Airdroid.Util.fullScreenApi = e
}, Airdroid.Util.fullScreen = function(e, t) {
    var n, i = this;
    t = t || $.noop, n = i.fullScreenApi.fullScreenEventName;
    var o = this.browser.firefox ? document : e;
    $(o).unbind(n).bind(n, function() {
        i.fullScreenApi.isFullScreen() || t()
    }), i.fullScreenApi.requestFullScreen(e)
}, Airdroid.Util.cancelFullScreen = function() {
    this.fullScreenApi.cancelFullScreen()
}, Airdroid.Util.isFullScreen = function() {
    return this.fullScreenApi.isFullScreen()
},
function(e) {
    var t = "/sdcard",
        n = t + "/DCIM",
        i = {
            SDCARD_PATH: t,
            DCIM_PATH: n,
            CAMERA_PATH: n + "/Camera",
            WALLPAPER_PATH: t + "/wallpaper",
            RINGTONE_PATH: t + "/Ringtones",
            MUSIC_PATH: t + "/Music",
            ALARM_PATH: t + "/Alarms",
            getBaseName: function(e) {
                var t = this.clean(e);
                return t.substr(t.lastIndexOf("/") + 1)
            },
            getParentPath: function(e, t) {
                var n, i;
                return t = t || "/", n = this.clean(e), i = n.substring(0, n.lastIndexOf("/")), "" === i ? t : i
            },
            getParentPathName: function(e) {
                return this.getBaseName(this.getParentPath(e))
            },
            isParentOf: function(e, t) {
                return this.getParentPath(t) === this.clean(e)
            },
            isChildOf: function(e, t) {
                return this.isParentOf(t, e)
            },
            contains: function(e, t) {
                return 0 === this.clean(t).indexOf(this.clean(e) + "/")
            },
            clean: function(e) {
                return e.replace(/\\/g, "/").replace(/(\/$|\\$)/, "").replace(/(\/\/+)/g, "/")
            }
        };
    e.Airdroid.Util.Path = i
}(this), Core = {
    _copyFunction: function(e) {
        return function() {
            e.apply(this, arguments)
        }
    },
    _createFunction: function() {
        return function() {}
    },
    extend: function() {
        var e, t, n = 1 == arguments.length ? null : arguments[0],
            i = 1 == arguments.length ? arguments[0] : arguments[1];
        if (2 == arguments.length && "function" != typeof n) throw Error("Base class is not a function, cannot derive.");
        if (!i) throw Error("Object definition not provided.");
        var o;
        if (i.$construct ? (o = i.$construct, delete i.$construct) : o = n ? Core._copyFunction(n) : Core._createFunction(), o.$virtual = {}, o.$super = n, n) {
            var r = Core._createFunction();
            r.prototype = n.prototype, o.prototype = new r
        }
        if (o.prototype.constructor = o, i.$abstract) {
            if (o.$abstract = {}, n && n.$abstract)
                for (e in n.$abstract) o.$abstract[e] = n.$abstract[e];
            if (i.$abstract instanceof Object)
                for (e in i.$abstract) o.$abstract[e] = !0, o.$virtual[e] = !0;
            delete i.$abstract
        }
        if (n)
            for (t in n.$virtual) o.$virtual[t] = n.$virtual[t];
        if (i.$virtual) {
            Core._inherit(o.prototype, i.$virtual, o.$virtual);
            for (t in i.$virtual) o.$virtual[t] = !0;
            delete i.$virtual
        }
        if (i.hasOwnProperty("toString") && (o.prototype.toString = i.toString), i.hasOwnProperty("valueOf") && (o.prototype.valueOf = i.valueOf), delete i.toString, delete i.valueOf, i.$include) {
            var a = i.$include.reverse();
            Core._processMixins(o, a), delete i.$include
        }
        var s = null;
        return i.$load && (s = i.$load, delete i.$load), i.$static && (Core._inherit(o, i.$static), delete i.$static), Core._inherit(o.prototype, i, o.$virtual), o.$abstract || this._verifyAbstractImpl(o), s && s.call(o), o
    },
    get: function(e, t) {
        for (var n = 0; t.length > n; ++n)
            if (e = e[t[n]], !e) return null;
        return e
    },
    _isVirtual: function(e, t) {
        switch (t) {
            case "toString":
            case "valueOf":
                return !0
        }
        return e[t]
    },
    _inherit: function(e, t, n) {
        for (var i in t) {
            if (n && void 0 !== e[i] && !this._isVirtual(n, i)) throw Error('Cannot override non-virtual property "' + i + '".');
            e[i] = t[i]
        }
    },
    method: function(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    _processMixins: function(e, t) {
        for (var n = 0; t.length > n; ++n)
            for (var i in t[n]) e.prototype[i] || (e.prototype[i] = t[n][i])
    },
    set: function(e, t, n) {
        for (var i = null, o = 0; t.length - 1 > o; ++o) i = e, e = e[t[o]], e || (e = {}, i[t[o]] = e);
        e[t[t.length - 1]] = n
    },
    _verifyAbstractImpl: function(e) {
        var t = e.$super;
        if (t && t.$abstract && t.$abstract !== !0)
            for (var n in t.$abstract)
                if (null == e.prototype[n]) throw Error('Concrete class does not provide implementation of abstract method "' + n + '".')
    }
}, Core.Debug = {
    consoleElement: null,
    useAlertDialog: !1,
    consoleWrite: function(e) {
        if (Core.Debug.consoleElement) {
            var t = document.createElement("div");
            t.appendChild(document.createTextNode(e)), 0 === Core.Debug.consoleElement.childNodes.length ? Core.Debug.consoleElement.appendChild(t) : Core.Debug.consoleElement.insertBefore(t, Core.Debug.consoleElement.firstChild)
        } else Core.Debug.useAlertDialog && alert("DEBUG:" + e)
    },
    toString: function(e) {
        var t = "";
        for (var n in e) "function" != typeof e[n] && (t += n + ":" + e[n] + "\n");
        return t
    }
}, Core.Arrays = {
    containsAll: function(e, t, n) {
        if (n && e.length < t.length) return !1;
        if (0 === t.length) return !0;
        for (var i, o, r = 0; t.length > r; ++r) {
            i = !1, o = t[r];
            for (var a = 0; e.length > a; ++a)
                if (o == e[a]) {
                    i = !0;
                    break
                }
            if (!i) return !1
        }
        return !0
    },
    indexOf: function(e, t) {
        for (var n = 0; e.length > n; ++n)
            if (t == e[n]) return n;
        return -1
    },
    remove: function(e, t) {
        for (var n = 0; e.length > n; ++n)
            if (t == e[n]) return e.splice(n, 1), void 0
    },
    removeDuplicates: function(e) {
        e.sort();
        for (var t = 0, n = e.length - 1; n > 0; --n) e[n] == e[n - 1] && (e[n] = e[e.length - 1 - t], ++t);
        t > 0 && (e.length = e.length - t)
    }
}, Core.Arrays.LargeMap = Core.extend({
    $static: {
        garbageCollectEnabled: !1
    },
    _removeCount: 0,
    garbageCollectionInterval: 250,
    map: null,
    $construct: function() {
        this.map = {}
    },
    _garbageCollect: function() {
        this._removeCount = 0;
        var e = {};
        for (var t in this.map) e[t] = this.map[t];
        this.map = e
    },
    remove: function(e) {
        delete this.map[e], Core.Arrays.LargeMap.garbageCollectEnabled && (++this._removeCount, this._removeCount >= this.garbageCollectionInterval && this._garbageCollect())
    },
    toString: function() {
        return Core.Debug.toString(this.map)
    }
}), Core.ListenerList = Core.extend({
    _data: null,
    _hdata: null,
    $construct: function() {
        this._data = [], this._hdata = []
    },
    addListener: function(e, t, n) {
        this._data.push(e, t), n = n || "NOUSED", this._hdata.push(e, n)
    },
    fireEvent: function(e) {
        if (null == e.type) throw Error("Cannot fire event, type property not set.");
        var t, n = !0,
            i = [];
        for (t = 0; this._data.length > t; t += 2) this._data[t] == e.type && i.push(this._data[t + 1]);
        for (t = 0; i.length > t; ++t) n = i[t](e) && n;
        return n
    },
    getListenerTypes: function() {
        for (var e = [], t = 0; this._data.length > t; t += 2) e.push(this._data[t]);
        return Core.Arrays.removeDuplicates(e), e
    },
    getListeners: function(e) {
        for (var t = [], n = 0; this._data.length > n; n += 2) this._data[n] == e && t.push(this._data[n + 1]);
        return t
    },
    getListenerCount: function(e) {
        for (var t = 0, n = 0; this._data.length > n; n += 2) this._data[n] == e && ++t;
        return t
    },
    hasListeners: function(e, t) {
        for (var n = 0; this._data.length > n; n += 2)
            if (t) {
                if (this._hdata[n] == e && this._hdata[n + 1] == t) return !0
            } else if (this._data[n] == e) return !0;
        return !1
    },
    isEmpty: function() {
        return 0 === this._data.length
    },
    removeListener: function(e, t, n) {
        for (var i = 0; this._data.length > i; i += 2)
            if (this._data[i] == e && t == this._data[i + 1] || this._hdata[i] == e && this._hdata[i + 1] == n) return this._data.splice(i, 2), this._hdata.splice(i, 2), void 0
    },
    toString: function() {
        for (var e = "", t = 0; this._data.length > t; t += 2) t > 0 && (e += ", "), e += this._data[t] + ":" + this._data[t + 1];
        return e
    }
}), Core.ResourceBundle = Core.extend({
    $static: {
        getParentLanguageCode: function(e) {
            return -1 == e.indexOf("-") ? null : e.substring(0, e.indexOf("-"))
        }
    },
    _sourceMaps: null,
    _generatedMaps: null,
    _defaultMap: null,
    $construct: function(e) {
        this._sourceMaps = {}, this._generatedMaps = {}, this._defaultMap = e
    },
    get: function(e) {
        var t = e ? this._generatedMaps[e] : this._defaultMap;
        if (t) return t;
        t = {};
        var n, i = this._sourceMaps[e];
        if (i)
            for (n in i) t[n] = i[n];
        var o = Core.ResourceBundle.getParentLanguageCode(e);
        if (o && (i = this._sourceMaps[o]))
            for (n in i) void 0 === t[n] && (t[n] = i[n]);
        for (n in this._defaultMap) void 0 === t[n] && (t[n] = this._defaultMap[n]);
        return this._generatedMaps[e] = t, t
    },
    set: function(e, t) {
        this._generatedMaps = {}, this._sourceMaps[e] = t
    },
    toString: function() {
        var e = "ResourceBundle: ";
        for (var t in this._sourceMaps) e += " " + t;
        return e
    }
}),
function() {
    Airdroid.Interface = Core.extend({
        $static: {
            checkImplement: function(e, t) {
                if (!t) return !0;
                var n = (new t).getMethods(),
                    i = _.reject(n, function(t) {
                        return _.isFunction(e[t])
                    });
                if (i.length > 0) throw Error('Method {"' + i.join('", "') + '"} must be implemented.');
                return !0
            }
        }
    }), Airdroid.Interface.Base = Core.extend({
        $abstract: {},
        getMethods: function() {
            return this.$methods
        }
    })
}(), Airdroid.Base = Core.extend({
    _listeners: null,
    config: null,
    util: null,
    $virtual: {
        $implement: null
    },
    $construct: function() {
        this._listeners = new Core.ListenerList, this.util = Airdroid.Util, this.config = Airdroid.Config, this._construct && "function" == typeof this._construct && this._construct.apply(this, Array.prototype.slice.call(arguments, 0)), this.on = this.addListener, this.off = this.removeListener, this.trigger = this.fireEvent, Airdroid.Interface.checkImplement(this, this.$implement)
    },
    addListener: function(e, t, n, i) {
        i && this._listeners.hasListeners(e, n) || this._listeners.addListener(e, t, n)
    },
    fireEvent: function(e, t) {
        var n = {};
        n.type = e, n.data = t, this._listeners.fireEvent(n)
    },
    removeListener: function(e, t, n) {
        var i = this;
        i._listeners.removeListener(e, t, n)
    }
}), Airdroid.UsedLang = {}, Airdroid.Lang.Version = "1.1.0", Airdroid.Lang.Footer = {
    forum: "Forum",
    choose_title: "Choose language",
    nohas_lng: "Not your language?",
    set_lng: "Change",
    language: "Languages",
    Join_translate: "Translate AirDroid to your own language!",
    local_lng: "Installed",
    online_lng: "Available",
    donate: "Donate",
    help: "Help",
    contact: "Contact",
    verficate_code: "passcode",
    about_us: "About us",
    security: "Security",
    privacy_policy: "Privacy policy"
}, Airdroid.Lang.Login = {
    Option_SSL: "Use secured connection (https)",
    Label_Version: "Version: ",
    Message_RetryAfter: "AirDroid passcode is disabled for {0}.",
    Message_NetworkError: "Failed to connect. Please check your network.",
    Message_AutoLoginInProgress: "Auto sign in in progress...",
    Not_LanNetwork: "Failed to connect. Make sure your device is connected to a same WiFi network.",
    Cookies_Required: "Cookies are not enabled on your browser. Please adjust this in your security preferences before continuing.",
    btn_OK: "OK",
    Msg_KickOut: "Your account is signed in elsewhere.{0}You will now be signed out.",
    Tip_KickOut: "If this is not your operation, we recommend that you change password to protect your privacy.",
    Btn_LogInAgain: "Sign in again",
    Button_Login: "Sign in",
    Msg_Srv_Unavailable: "Connection Failed. Troubleshooting guide:",
    Msg_Srv_Unavailable_1: "Check the network of your device",
    Msg_Srv_Unavailable_2: "Unlock or wake up your Android device",
    Message_Connecting: "Connecting to Device...",
    Message_InputPassword: "Please input passcode.",
    Message_Locked: "Locked. Unlock me with your passcode.",
    Message_AlreadyLogin: "Your account is already signed in somewhere else."
}, Airdroid.Lang.Common = {
    Btn_Gotit: "Got it",
    Connecting: "Device not responding.",
    Clear: "Clear",
    ToolTip_Next: "Next[Right Arrow]",
    notify_me_when_find: "Notify me when found",
    present_guest_error: "3. You haven't signed in to this Chromebook using a Google account. Please sign in and try again later.",
    Setting: "Settings",
    Reinstall: "Reinstall",
    Message_Forbidden: "Connection timed out. Please try again.",
    NavBar_ShowDesktop: "Show desktop",
    NavBar_SpeedUpload: "Speed upload",
    NavBar_NewMessage: "New message",
    NavBar_MultipleDesktops: "Multiple desktops",
    ToolTip_SetAsWallpaper: "Set as wallpaper",
    ToolTip_Prev: "Prev[Left Arrow]",
    ToolTip_RotateLeft: "Rotate Left[Up Arrow]",
    ToolTip_RotateRight: "Rotate Right[Down Arrow]",
    Open: "Open",
    NewFolder: "New folder",
    Refresh: "Refresh",
    Paste: "Paste",
    Copy: "Copy",
    Delete: "Delete",
    Export: "Download",
    Install: "Install",
    ZipedAndExport: "Download as ZIP",
    LoadingMore: "Older Threads",
    Server_Stop: "Service stopped by device.",
    Label_SizeColumn: "Size",
    Label_TypeColumn: "Type",
    Label_FormatColumn: "Format",
    Label_ModifyDateColumn: "Date Modified",
    ToolTip_Name: "Name:",
    ToolTip_Time: "Time:",
    ToolTip_Size: "Size:",
    ToolTip_FileLocation: "Location:",
    Tip_ListView: "List view",
    Button_Cancel: "Cancel",
    msg_SameFileName: "Name not changed",
    msg_FileNameIsNull: "A unique name is required.",
    msg_FileNameExist: "Same name exists. Please choose a new one.",
    Msg_AppConfigNotFound: "Failed to locate the configuration file.",
    InputDefaultText_Search: "Search",
    TipText_Call: "Call",
    TipText_Forward: "Forward",
    ToolTip_Share: "Share",
    Continue: "Continue",
    Msg_NotWifiNetWork: "AirDroid is currently using your device's mobile network. To conserve data, please try to connect your device to a WiFi network.",
    Back: "Back",
    Search: "Search",
    Search_For: "Searching For",
    Share_Success: "Succeeded",
    Share_To: "Share to {0}",
    Emoticon: "Emoticon",
    Emoji: "Emoji",
    Add: "Add",
    Folder_Contact: "Folder shortcut",
    Shortcut_Contact: "Contact shortcut",
    Desktop_folder: "Folder",
    File_System: "Android file system",
    Devices: "Devices",
    Languages: "Languages",
    Contact_us: "Contact us",
    Move_To: "Move to",
    Workspace: "Workspace",
    Folder_Del_Alert_1: "Please empty the folder before deleting it.",
    Folder_Del_Alert_2: "This will delete all the content in the folder.",
    UserName: "User name",
    KeepLogin: "Stay signed in for 2 weeks",
    Already_have_account: "Sign in to continue",
    Authenticating: "Authenticating",
    PasswordIncorrect: "The email and password combination is incorrect. ",
    UserNameIncorrect: "The username is incorrect.",
    Connecting_To_Device: "Connecting to device...",
    Failed_To_Conn_Device: "Failed to connect to device.",
    Connect_Twiiter_reg: "Connect with Twitter to Register this username",
    Change_Diff_UserName: "Use a different username",
    SignUp: "Sign Up",
    Yes: "Yes",
    No: "No",
    UserNameValidateMsg: 'Only use letters, numbers and "_"',
    PasswordValidateMsg: "Password must contain at least 8 characters, including a number and a letter.",
    ConfirmPwdValidateMsg: "Passwords do not match.",
    EmailValidateMsg: "Please enter a valid email address.",
    EmailExist: "The email address is already registered.",
    Enter_Nickname: "Please enter nickname",
    Enter_NewPassword: "Please enter a new password.",
    ModifyProfileSuccess: "Modify settings succeeded",
    NavBar_SpeedInstall: "Speed install",
    NavBar_Setting: "Settings",
    SelectAll: "Select all",
    Import: "Upload",
    Cut: "Cut",
    Play: "Play",
    Rename: "Rename",
    Download: "Download",
    NewSms: "New Message",
    Message_NetWorkError: "Network Failure.",
    Label_NameColumn: "Name",
    Label_TimeColumn: "Time",
    ToolTip_FolderName: "Folder: ",
    ToolTip_PhotosCount: "Photos: ",
    ToolTip_Duration: "Duration:",
    ToolTip_CreateDate: "Date:",
    Tip_GridView: "Grid view",
    Button_Close: "Close",
    Button_Ok: "OK",
    Alert_Title: "Alert",
    msg_FileHasIllegalCharacter: 'The following characters are not supported:  / : * ? " < > ,| &',
    Message_LoadAppsConfigError: "Failed to load configuration file. Please click OK to sign in again.",
    Msg_AppsConfigNotLoaded: "Failed to load configuration file.",
    InputDynamicText_Search: "Search for apps",
    CategoryCountSuffix_Items: "item(s)",
    TipText_Edit: "Edit",
    Loading: "Loading...",
    No_Search_For: "No results",
    Shared_Via_Airdroid_Facebook: "shared from AirDroid",
    Shared_Via_Airdroid_Twitter: "shared from AirDroid",
    Share_Faile: "Failed",
    Logout: "Sign out",
    Account: "Account",
    About: "About",
    Password: "Password",
    Or_You_May_QR: "Scan QR code",
    Register: "Create an account",
    Enter_User_Password: "Please enter password.",
    isCheck: "Checking",
    Failed_To_Signin: "Failed to sign in.",
    Signin: "Sign In",
    AreYou: "Are you",
    ModifyProfileFail: "Modify settings failed",
    Call_Out: "Call",
    UnbindFailed: "Unbind Failed",
    NickName: "Nick name",
    Connect: "Connect",
    Disconnect: "Disconnect",
    OldPasswordIncorrect: "Current password incorrect.",
    NewPwdEqualOldPwd: "Password not changed, please try again.",
    RegFailded: "Failed to register.",
    UnbindSuccess: "Unbind Success",
    NewPassword: "New password",
    Email: "Email",
    OldPassword: "Current password",
    ConfirmPassword: "Confirm password",
    Save: "Save",
    Connected: "Connected as {0}",
    Bind: "Bind",
    NotBound: "No connected device.",
    FileLinkExisted: "There's already a shortcut for this folder.",
    Power_Saving_Tip: "Power saving mode activated and service stopped due to long time of inactivity.",
    UnboundS1: "Install AirDroid to the device you want to manage.",
    UnboundS2: "Open AirDroid and press the Account button.",
    QrNotSameWifiNoAccount: "To sign in via QR code, it's required to sign in to an account on the device, unless the device and computer are on the same WiFi network.",
    UseAccountLogin: "Sign in to an account.",
    TwitterAuthNameError: "Your twitter account name doesn't match {0}. Please try again.",
    EditContact_Success: "Edit contact icon success.",
    RequireLogin: "You need to create an account to use this feature.",
    RequestToAuth: "Please accept the connection on your device.",
    Send_Message: "Send message",
    Find_Phone: "Find Phone",
    SureToExitAndCloseTab: "Do you really want to quit and close this page?",
    UserCenterTabTip3: "Connect with SNS accounts to share photos with your friends. The SNS account you signed in with can not be disconnected.",
    ConnectWith: "Connect with {0}",
    Change: "Change",
    NotBoundDevice: "No connected device.",
    UserNameExist: "The user name is occupied.",
    UnboundS3: "Sign in to your account and refresh this page.",
    ProgramProcess: "Loading app resources...",
    Checking: "Verifying",
    SureToExit: "Do you really want to sign out?",
    UserCenterTabTip1: "The email address will be used to recover your password.",
    UserCenterTabTip2: "It's highly recommended to use a high-strength password to better protect your account security.",
    Thief_Tip1: "Never lose your phone again!",
    desktop_sound: "Notification sound",
    ChangeLangTip: "Restart AirDroid to take effect",
    Flow: "Data usage",
    FlowRemain: "Remaining: {0}",
    Contact_Tip: "AirDroid Internet is still under early beta test. To control our cost, there's a free monthly data usage quota of {0} for you. If you need more, please contact us. We may add options of increasing it later.",
    Forgot_Password: "Forgot password?",
    Login_With: "Sign in via",
    LostMode: "Lost mode",
    Thief: "Intruder",
    FindPhone_Num_Tip: "Enter a phone number that can reach you. It will be displayed on the lost device.",
    Button_Next: "Next",
    Thief_Tip3: "This feature is coming soon.",
    Drag_APK: "Drag & Drop APKs here",
    fill_require: "All fields are required.",
    rotate: "Rotate",
    placard: "Alerts",
    see_all_placard: "View all notifications",
    no_placard_tip: "No new alert",
    Searching_for_Device: "Searching for device",
    closing_camera: "Closing camera",
    forgot_password: "Forgot password?",
    login_with: "Sign in via",
    NoDeviceTip1: "No device found with this account",
    start_camera_error: "Failed to launch camera. Please exit camera on the device or {0} try again {1}.",
    Need_Premium: "This feature is only for Premium User. Do you want to upgrade to Premium User?",
    account_type: "User type",
    mem_since: "Membership",
    usage_month: "Data usage",
    upgrade_title: "Upgrade to Premium User",
    upgrade_des: "Get the ultimate AirDroid experience.",
    free: "Free User",
    premium: "Premium User",
    first_camera_tip: "Camera on the device will be temporarily disabled while you're using it in AirDroid.",
    DataFlowNotAbleToUpload_P: "Remote Connection Mode data quota not enough. You can use AirDroid in same network environment for free, or upgrade to AirDroid Premium to get more.",
    RemoteMode_FileTooLarge_F: "Size for single file cannot exceed {0} MB in Remote Connection Mode. To transfer larger files, please use AirDroid in same network environment, or upgrade to AirDroid Premium (up to {1} MB for a single file).",
    How_To_Sign_Up_Title: "How to register for an AirDroid account?",
    How_To_Sign_Up_S1: "Scan the QR code or <a href='{0}' target='_blank'>click here</a> to install AirDroid 2.",
    How_To_Sign_Up_S2: "Register for an account from AirDroid on your device and sign in.",
    Change_Email_Address: "Change email address",
    Confirm_Email: "Confirm email",
    Change_Email: "Change email",
    phone_location_close: "Location access not enabled on your device and Find Phone may not be able to locate your device.",
    ZoomIn: "Zoom in",
    ScanQRCodeToInstall: "Scan QR Code to Install",
    search_key_title: "Full text search",
    incoming_call: "Incoming call from {0}",
    notification_call_title: "Incoming call",
    message_to: "To:",
    add_contact: "Add to contacts",
    check_contact: "View contact",
    new_message: "New message",
    new_message_to: "New message",
    close_desktop_notification: "Disable desktop notifications",
    QCC_Confirm_payment: "Confirm payment",
    QCC_Tip_2: "Item: Remote Connection Extra: 1GB.",
    QCC_Tip_3: "Please don’t close this page before the payment is completed.",
    QCC_BTN_2: "Start over",
    QCC_Fail_1: "Bank account was charged but failed to activate the item?",
    QCC_Fail_2: "It may be a result of network delay. Please don’t worry. We’ll restore it as soon as possible.",
    QCC_Fail_3: "Bank account was not charged?",
    upgrade_title1: "Remote Connection Mode quota used up?",
    QCC_Tip_7: "The pack will be added to the current month of your Premium membership.",
    total: "Total",
    Price: "Price: ",
    QCC_Fail_4: "You can try to make the payment again. If still no luck, please contact PayPal or your bank",
    Increase_Quota: "Increase Quota",
    Button_Previous: "Previous",
    uninstall_app_tip: "Confirm uninstallation on your phone",
    check_find_phone: "Checking if Find Phone is activated...",
    connect_1: "Searching for device...",
    connect_3: "Checking network...",
    connect_4: "Using LAN Connection Mode...",
    connect_5: "Using Remote Connection Mode...",
    connect_6: "Found your device",
    connect_7: "Woke up successfully",
    connect_8: "Failed to wake up",
    connect_12: "Connected to device",
    connect_13: "Failed to connect to device",
    operate_fail: "Sorry, your device is not supported yet.",
    connect_14: "Network checking completed",
    LiteConnectMode_tip: "You may need to wait for a few seconds for the alert to appear on your device.",
    ConnFAQ: "Still cannot connect? Try more detailed guide",
    delete_account: "Delete account ",
    delete_account_msg: "You can contact us directly if you need any help: {0} support@airdroid.com{1}.",
    tell_why: "Reason for leaving",
    opt_select_a_option: "Choose an option",
    opt_change_email: "I want to change email",
    opt_unbind_sns: "I want to disconnect SNS account",
    delete_failure_try_later: "Failed to delete your account. Please retry later.",
    tip_reason_null: "Please choose your reason for leaving.",
    tip_reason_change_email: "You can {0} change your account email {1} in AirDroid.",
    item_1: "Item: AirDroid Premium 1 Month",
    item_3: "Item: AirDroid Premium 2 Years",
    usepaypal: "*Pay with PayPal",
    Pay_w: "Item",
    Pay_o: "Order",
    Pay_p: "Payment type",
    Pay_t1: "Only displays purchase history from the last 24 months",
    Pay_t3: "All prices include tax",
    select_group: "Select group",
    create_success: "Create success",
    edit_success: "Saved successfully",
    edit_failed: "Failed to save",
    sure_delete_group: "Are you sure you want to delete group {0}?",
    group_name_null: "Please input group name",
    new_group_label: "New group",
    click_detail_contact: "Click contact to show details",
    label_blog: "Blog",
    label_ftp: "FTP",
    label_website: "Website",
    add_group: "Add group",
    contact_need_tip: "Phone and Name are required.",
    confirm_save_contact: "Save modification?",
    Pay_total: "Total",
    group_repeat: "The group name is already in use.",
    premium_renewals: "Renew",
    premium_expire_tip: "Your Premium membership will expire on: {0}.",
    premium_extend: "Renew",
    payment_account_success: "Your payment for AirDroid Premium has been successfully received.",
    no_thieves_found: "No intruders detected:",
    cancel_autopay: "Cancel subscription",
    success_cancel_autopay: "You've successfully canceled your Premium subscription.",
    find_my_phone_instruction: "Help",
    no_thief_tip1: "You need to turn on screen lock in your device's settings or via AirDroid Lost mode in Find Phone.",
    no_thief_tip2: "AirDroid will use the front camera to take a photo of the intruder who attempted but failed to unlock your device. Location data will also be included when available.",
    get_device_location_failure: "Failed to retrieve location data",
    add_to_desktop: "Add to desktop",
    delete_from_desktop: "Delete from desktop",
    load_again: "Click {0}here{1} to reload",
    normal: "General",
    desktop_notification: "Desktop notification",
    email_subscription: "Emails",
    "default": "Set default",
    email_tip1: "AirDroid news",
    email_tip2: "Promotion messages",
    add_desktop_success: "Added successfully",
    remove_from_desktop_success: "Deleted successfully",
    connect_stop_tip: "Connection interrupted. Please check the network and retry.",
    connect_device_error: "Failed to connect Android device. Please check the network.",
    reconnect_expired: "Please sign in again for account security.",
    email_success_tip1: "An email was sent to your email address: {0}. Please click the verification link to verify your address.",
    click_new_contact: 'Click "New contact" to create a new contact',
    send_email_timer: "Resend in {0}s",
    need_connect_device: "Error. Your Android device is disconnected. Please connect again to continue.",
    item_4: "Item: AirDroid Premium 1 Month - Starter plan",
    select_pay_mode: "Select your AirDroid Premium plan",
    select_pay_mode_tip: "Upgrade to AirDroid Premium to enjoy all the Premium features.",
    premium_cancel_autopay: 'Auto renew (can be canceled later in "Account")',
    premium_feature_list_title: "Premium Exclusives",
    label_month: "Month",
    label_year: "Year",
    label_years: "{0} Years",
    premium_year_des: "Buy 2 years and get 1 year for free",
    premium_icon_hot: "Popular",
    premium_icon_value: "Best value",
    connect_device_name_tip: "Connecting to {0}, please wait...",
    select_default_device_tip: "Connect this device by default next time",
    select_your_device: "Choose a device",
    select_a_device: "Choose a device",
    select_a_device_tip: "Sorry, there're {0} devices under your account. Multiple device support is a Premium exclusive feature. You can choose to upgrade to Premium account or select 1 device and delete others.",
    unbind_device_success_tip: "Device deleted.",
    unbind_device_fail_tip: "Failed to delete device. Please retry.",
    add_devices: "Add device",
    add_more_devices: "Add more devices",
    unbind_device_tip: "You are trying to delete {0}. To ensure the security of your device, please enter your AirDroid password.",
    bind_more_tip: "To add a new device, please go to that device and sign in to the current AirDroid account.",
    unlock: "Unlock",
    unlock_tip: "Please note that this feature will remove the screen lock password of the device. Continue?",
    wipe_premium_tip: "This will reset your device to factory default. All personal data will be wiped.",
    present_t1_content: "Samsung Chromebook 2 Only. Sponsored by Samsung and AirDroid.",
    present_t2_check_eligibility: "Checking eligibility, please wait...",
    present_t3_success_content: "Congratulations, you're now an AirDroid Premium user.",
    present_t4_fail_content: "Redemption failed. Possible causes:",
    present_t4_fail_tip1: "1. The offer has already been redeemed on your device.",
    present_t5_about: "What is AirDroid?",
    present_t5_intro_title1: "One less cable",
    present_t5_intro_content1: "Move things on and off your Android device without a USB cable.",
    present_t5_intro_title2: "One less screen",
    present_t5_intro_title3: "One less worry",
    present_t5_intro_content3: "Lost your phone? No worry, use AirDroid to locate or lock it remotely.",
    present_t6_retry: "Retry",
    present_server_error: 'Connection failed. Please check your network and click "Retry" later.',
    present_login_signUp: "Sign up",
    present_login_signWith: "or sign in with",
    present_loginBefore_btn: "Sign in to Redeem",
    present_loginAfter_btn: "Redeem",
    email_verify: "Email not verified. Verify now",
    email_verify_tip: "Email not verified",
    set_external_sdcard_tip: "If the external SD card is not detected, please set it manually.",
    set_external_sdcard: "Add external SD card",
    delete_external_sdcard_tip: "Delete the external SD card?",
    switch_device_label: "Switch device",
    delete_file: "Delete file",
    android_version_no_support_tip: "Android 2.1 and lower is not supported by AirDroid 2.0.7 and later. You can continue with the existing version.",
    default_replace_user_des: "If default user configuration file is loaded, some settings like desktop icons and shortcuts will not be saved. Other features will not be impacted.",
    use_default_appconfig: "Load default",
    add_device_title: "Add a device",
    save_to_pc: "Save to computer",
    click_to_choose_external_sdcard: "Choose external SD card path",
    camera_save_to_phone_success: "Photo saved to device",
    server_network_error_tip: "Failed to access server, please {0}retry{1}.",
    keep_device_tip: "Choose 2 devices to keep:",
    premium_expire_title: "Renew Your Premium Subscription",
    lights_on: "Flashlight on",
    lights_off: "Flashlight off",
    device_nickname: "Device name",
    pay_success: "Succeeded",
    pay_fail: "Failed",
    pay_type_code: "Activation Code - {0}",
    save_percent: "Save {0}",
    lable_or: "or",
    scan_qr_tip: "Scan the QR code",
    free_user_add_device_tip: "Free account can only connect 2 devices. Upgrade to Premium account to connect up to 6.",
    reserve_attach_confirm: "The file is available for download within 7 days and then will be permanently deleted.",
    fail_to_upload: "Failed to upload the file",
    attach_amount_limit: "Only one attachment per message please.",
    cancel_all: "Cancel all",
    cut_file_success: "Files cut",
    drag_drop_or_click_to_upload: "Drag & Drop files or folders here to upload",
    label_forgot: "Forgot",
    device_set_default: "Connected by default on signing in:",
    mark_all_read: "Mark all as read",
    delete_account_msg2: "We’re sorry to see you go.",
    no_default_device: "choose a device",
    video_fluency_tip: "Loading time and video smoothness will depend on network quality.",
    release_to_beta_tip: "It seems that you're using a beta version of AirDroid. You'll be redirected to the corresponding web app for it.",
    Msg_Srv_Unavailable_3: "Try Lite mode if your Android device and computer are on the same WiFi network.",
    cancel_desktop_notification: "You can re-enable AirDroid desktop notifications in Chrome if you've disabled them before.",
    Lite2Web_title1: "Get the most out of AirDroid",
    Lite2Web_desc1: "You're using Lite mode. Visit the full version at {0}.",
    SNS: "SNS",
    chromebook_question: "Any question, please send your device model# to {0}support@airdroid.com{1} for assistance.",
    contact_no_name: " (No name) ",
    Enter_User_Name: "Please enter user name.",
    Enter_Email: "Please enter email",
    Enter_OldPassword: "Please enter the current password.",
    ChangePwdFail: "Failed to change password.",
    UsernameUsedOnTwitter: "The user name exists on Twitter",
    ContactLinkExisted: "There's already a shortcut for this contact.",
    Account_Logout_Tip: "The account is signed out on the mobile app and service has stopped!",
    RequestRefused: "Connection rejected by device.{0} You can refresh this page to try again.",
    MonthDataFlowOverage: "Your monthly data quota for Remote Connection Mode is used up and you'll no longer be able to use some features under Remote Connection Mode.",
    FlowTip: "Data usage for this month",
    FlowRecover: "Quota reset in {0} day(s)",
    How_To_Sign_Up: "How to sign up?",
    Input_Optional: "Optional",
    Tip_Number: "Phone number",
    Thief_Tip2: "AirDroid can take a photo of the face of the intruder who tried and failed to unlock your device.",
    adjusted_registration_tip: "We've adjusted the registration process for better experience. Username is removed from AirDroid 2 and you can only use Email and password to sign in.",
    continue_use_oldversion: "Update next time",
    two_passwords_dont_match: "Email addresses don't match.",
    not_change: "New email is same as the current one.",
    change: "Switch",
    no_support_camera: "The feature is not supported for your current Android version (2.2 or lower).",
    placard_read: "Mark as read",
    placard_detail: "Details",
    NoDeviceTip2: "Please connect a device to your account to continue",
    Remote_Need_Premium: "This feature (under Remote Connection Mode) is only for Premium User. There is no restriction under same network environment. Do you want to upgrade to Premium User?",
    Free_User_Overage_Tip: "The free Remote Connection Mode data quota is exhausted. You can use AirDroid in same network environment for free, or upgrade to AirDroid Premium to get more. ",
    Upgrade_to_Premium_User: "Upgrade to Premium User",
    Premium_User_Overage_Tip: "The Remote Connection Mode data quota in your AirDroid Premium plan is exhausted. ",
    How_To_Sign_Up_S3: "Sign in on the web side with the same credential.",
    New_Email: "New email",
    google_server_unable: "Some services are not available or for other unknown reasons, Find Phone may not be able to locate your device.",
    ZoomOut: "Zoom out",
    login_with2: "Sign in via {0}",
    Update_Beta_Title: "AirDroid Updated",
    or: "or",
    Update_Beta_Title2: "AirDroid was just updated. Please update your AirDroid to the latest version for better experience. {0} Update now {1}",
    search_name_title: "Contact name search",
    notification_message_title: "New message",
    open_desktop_notification: "Enable desktop notifications",
    account_setting: "Settings",
    QCC_Tip_1: "Please finish the payment in the new page.",
    QCC_Tip_4: 'After you make the payment successfully, click "I\'ve made the payment" or close this window to finish the purchase process.',
    QCC_FailTitle: "The payment was not successful. Please check if your bank account has been charged.",
    QCC_Fail_5: "You can also email us for further assistance: pay@airdroid.com",
    "1gbExtra_add_success": "The 1GB Remote Connection Extra has been added to your account.",
    QCC_BTN_1: "I've made the payment",
    upgrade_des1: "Add 1 GB Remote Connection Extra to your Premium account for only $1.99.",
    QCC_Tip_5: "Remote Connection Extra: 1 GB",
    QCC_Tip_6: "Get another 1 GB remote connection quota for only $1.99.",
    QCC_Tip_8: "The pack expires on {0} ({1} day(s) remaining).",
    phone_auth_failed: "Failed to connect device. [Error: 10001] Please retry.",
    Update_1x_Title2: "AirDroid was just updated. Please update your AirDroid to the latest version for better experience. {0} Update now {1}",
    install_app_tip: "Confirm installation on your phone.",
    connect_2: "Waking up device...",
    connect_9: "Connection Mode: LAN Connection Mode",
    connect_10: "Connection Mode: Remote Connection Mode",
    connect_11: "Connection established",
    ReConnect: "Reconnect",
    tell_detail: "Help us improve AirDroid by sharing some detailed feedback (Optional)",
    opt_dont_want_to_use: "I don't want to use AirDroid any more",
    opt_have_other_account: "I have another AirDroid account",
    other: "Other",
    delete_success: "Account successfully deleted.",
    item_2: "Item: AirDroid Premium 1 Year",
    Pay_t: "Payments",
    Pay_d: "Date",
    Pay_t2: "Refund records are not displayed",
    operate_success: "Success ",
    edit_group_label: "Edit group",
    sure_delete_contacts: "Delete these contacts?",
    label_homepage: "Homepage",
    add_field: "Add field",
    label_profile: "Account",
    label_address: "Address",
    group_name_label: "Group name",
    no_purchase: "No payments",
    upgrade_premium: "Upgrade to Premium",
    go_premium: "Go Premium",
    cancel_autopay_tip: "You'll be downgraded to free account when your current subscription expires. You can always subscribe again. ",
    sure_to_cancel: "Are you sure you want to cancel your subscription? ",
    Thief_Tip4: "The feature is exclusive to Premium users. Upgrade now?",
    geocode_device_location_failure: "Failed to parse the location data",
    Message_LoadUserConfigError: "Failed to load user configuration file. Please click OK to sign in again.",
    lab_tip1: "AirDroid Lab is a playground for new features. We'll regularly release new features when they're ready for public test.",
    lab_tip2: "All the lab features are experimental, and they may break or disappear at any time.",
    label_reconnect: "Reconnect",
    connect_device_tip: "Connecting to Android device...",
    loadErrorTip: "Failed to load. Please check the network and retry.",
    labT1: "Features",
    labT2: "Requirements",
    email_verify_fail: "Failed to send email. Please retry later.",
    sending_email: "Sending email...",
    premium_month_des: "Starter plan, 1 GB Remote Connection Mode data quota.",
    sms_cannot_delete_tip: "Sorry, AirDroid does not support deleting SMS  on Android 4.4.",
    cancel_default_device: "Remove default",
    connect_other_device: "Connect another device",
    label_choose: "Choose",
    switch_device: "Switch",
    default_connect_device: "Default device",
    unlock_success_tip: "Screen lock password is removed.",
    switch_update_tip: 'The AirDroid app on your device is not the latest one. Please update the app. Or, if you want to keep it, please click "Update next time".',
    unlock_failed_tip: "Failed to remove screen lock password.",
    present_t1_about: "What's AirDroid",
    present_t1_theme: "AirDroid Premium 1 Year Gift",
    present_t3_success_expire: "Your Premium term: {0}",
    present_t4_fail_tip2: "2. Currently only selected Samsung Chromebooks are eligible for this offer.",
    present_t5_about_description: "AirDroid is a free and fast Android app that helps you manage your Android phone/tablet from a web browser, all over the air.",
    present_t5_about_learnMore: "Learn more",
    present_t5_intro_content2: "Send & receive SMS on computer, without looking at phone screen.",
    present_login_skip: "Skip",
    present_start_airdroid: "Start AirDroid",
    default_replace_user_tip: "Failed to load your user configuration file. You can choose to load the default one or try again (Reload).",
    label_reload: "Reload",
    save_to_phone: "Save to phone/tablet",
    screenshot_save_to_phone_success: "Screenshot saved to device",
    premium_down_des: "Your Premium membership has expired. You'll need to renew your subscription to keep all the devices with your account. Or, you can only keep up to 2 devices.",
    apk_decode_error: "There was problem parsing the package.",
    pay_status: "Status",
    lights_on_fail: "Failed to turn on flashlight.",
    UnboundTitle: "No device found with your account. Please add a device to continue:",
    UnboundS4: "{0}Install AirDroid{1} to the device you want to manage.",
    input_site_name_and_url_please: " Please enter website name and URL",
    share_services: "Sharing services",
    attach_size_limit: "Maximum size: 10 MB",
    copy_file_success: "Files copied",
    attach_past_due: "File expired.",
    label_verify: "Verified",
    device_number_tip: "Number of devices connected: {0} ",
    camera_fluency_tip: "The actual frame rate can be affected by several factors including network quality, camera resolution and other specs of the Android device.",
    beta_to_release_tip: "It seems that you're using a production version of AirDroid. You'll be redirected to the corresponding web app for it. You can {0}join our test community{1} to become a beta tester.",
    notification_set_setp1: "Click the 'View site information' button.",
    notification_set_setp2: 'Choose the "Always allow on this site" option in "Notifications"',
    Lite2Web_title3: "Find phone and protect data",
    Lite2Web_desc3: "Locate your phone, and wipe all data if you cannot get it back.",
    Lite2Web_title4: "Connect all your Android devices",
    Lite2Web_desc4: "Connect all your Android devices to the same account.",
    Lite2Web_desc2: " Access your Android device remotely through any network.",
    Lite2Web_title2: "Local or remote network",
    How_to_set_notication: "How to set desktop notifications in other browsers",
    upload_Permission_Denied: "Failed to upload. No write permission to SD card.",
    upload_network_error: "Failed to upload. Network error.",
    pop_window_disabled_des: "The pop-up was blocked. Please enable the pop-up from www.airdroid.com and click OK to continue.",
    change_path: "Set file saving path on Android",
    delete_thief_confrim: "Are you sure you want to delete this record?",
    url_link_exist: "The URL name already exists. ",
    flash_player_update: "Your Flash Player version is not supported. Please upgrade it to the latest version.",
    browser_nosupport_title: "Your web browser is not supported. Please upgrade to the latest version or try one of the following browsers.",
    PlaySound: "Ring",
    mem_tip: "{0} day(s) remaining",
    attach_load_fail: "Failed to load file.",
    delete_thief_fail: "Failed to delete",
    click_to_choose_path: "Select",
    MainAccount: "Registration account ",
    external_sd_might_be_limited: "External SD card access may be restricted",
    external_sd_might_be_limited_detail: "Due to system restrictions of Android 4.4+, some operations like uploading, deleting and creating new files on the external SD card may not be supported.",
    open_desktop_sound: "Enable notification sound",
    NavBar_Dashboard: "Widgets",
    find_phone_connect_fail: "Failed to connect. Your device is probably not connected to networks.",
    present_need_login: "Tip: Make sure you have signed in to this Chromebook using your Google account."
}, Airdroid.Lang.SSLTip = {
    Btn_Donotremind: "Don't display this next time.",
    Tip_SSLCommon: "Hypertext Transfer Protocol Secure (HTTPS) provides encrypted communication and secure identification. Your browser may display a warning and you can safely ignore it. This message appears because the certificate used by AirDroid is self-signed. Example:",
    Tip_Chrome: 'Google Chrome will display a warning titled "The site\'s security certificate is not trusted!" the first time your try to sign in via secured connection option. Click “Proceed anyway” to continue.',
    Tip_FFStep1: 'Firefox will display a warning titled “"This Connection is Untrusted" the first time your try to sign in via secured connection option. Click "I Understand the Risks", then "Add Exception".',
    Tip_FFStep2: 'Click "Confirm Security Exception" to continue. ',
    Tip_Safari: 'Safari will display a warning titled "Safari can\'t verify the identity of the website xxxx" the first time your try to sign in via secured connection option. Click "Continue" to login.',
    Btn_Gotit: "Got it."
}, Airdroid.Lang.SMS = {
    ToolTip_Call: "Call out",
    Chat_MoreMessage: "More messages",
    ContactSelectorDefault: "Select a custom group...",
    MIUI_SMS_Line1: 'Click Send again, then tap "Allow" on your Android device to grant AirDroid the permissions needed.',
    MIUI_SMS_Line2: "If your Android device is not notifying you, please go to your permission management app (like Superuser) to manually grant AirDroid SMS permissions.",
    Message_MultiChatTaskItem: "Chat ({0})",
    TimestampTip: 'Wrong timestamp on message? Click "Settings" to correct it.',
    Message_ContactInfoSaveSucceed: "Contact info saved.",
    Message_ContactInfoSaveFailure: "Failed to modify contact.",
    Message_CreateContactInfoSucceed: "Contact created.",
    Message_CreateContactInfoFailed: "Failed to create contact.",
    Message_ReadContactInfoFailed: "Error while loading contact info.",
    Message_SureToDeleteCallLog: "Are you sure you want to delete this call log?",
    Message_Loading: "Loading...",
    Message_SmsSendSucceed: "Message sent.",
    Message_SureToDeleteSelectedThread: "Are you sure to delete the selected threads?",
    Message_LoadGroupsFailure: "Failed to load groups.",
    Message_LoadCallLogsFailure: "Failed to load call logs.",
    Message_DeleteCallLogFailure: "Failed to delete this call log.",
    CallLog_Lable_TypeColumn: "Call",
    CallLog_Lable_TimeOfCalls: "Time",
    CallLog_Lable_DurationColumn: "Duration",
    Chat_TabName_Chat: "Chat",
    Chat_Button_Send: "Send",
    Chat_ToolTip_EnterToSend: "[Enter] to Send",
    Sms_ToolTip_Delete: "Delete",
    Contact_Label_Name: "Name",
    Contact_Label_Group: "Group",
    Contact_Label_Search: "Search",
    Contact_Label_WorkPhone: "Work",
    Contact_Label_WorkFax: "Work Fax",
    Contact_Label_OtherPhone: "Other",
    Contact_Label_Note: "Note",
    Contact_Button_Save: "Save",
    Message_PhoneSelected: "selected",
    ToolTip_ClickToChat: "Start SMS chat",
    Message_DeleteCurrentChatFailure: "Failed to delete selected thread(s).",
    Message_CreateContactInfo: "There is no phone number with this contact. Edit?",
    Message_DeleteMessageFailure: "Failed to delete this message.",
    Message_NotAllLoaded: "Failed to load all contacts in this group.",
    Message_SureToDeleteCallLogs: "Are you sure you want to delete the selected call logs?",
    Message_NotAllCallLogDeleted: "Error. Only some of the selected call logs were deleted.",
    ToolTip_DeleteCallLog: "Delete this call log",
    ToolTip_CreateContactInfo: "Create new contact with this number",
    Message_LoadingThreadListFailure: "Failed to load SMS threads.",
    Message_NotAllThreadDeleted: "Error. Only part of the selected threads deleted.",
    Message_LoadingGroupContactsFailure: "Failed to load group contacts",
    Contact_Lable_NumberColumn: "Number",
    Message_SendFailBecauseOfARConn: "Error while communicating with device.",
    Confirm_ReSendThisSMS: "Are you sure to resend this message?",
    Message_SendFailBecauseOfRErrId: "Failed to send message. Please check on your device if it's successfully sent.",
    Message_CreateChatWindowError: "Error while loading.",
    Message_SendFailBecauseOfDataErr: "Error. Failed to send message.",
    ToolTip_PleaseWait: "Please wait...",
    Count_Contacts: "{0} Contacts",
    Cut_Fail: "Cut failed",
    CallogTab_All: "All",
    CallogTab_Incoming: "Incoming",
    CallogTab_Outgoing: "Outgoing",
    CallogTab_Missed: "Missed",
    Message_CanNotDeleteContact: "Can't  edit contact while loading.",
    Message_ReadSmsError: "Failed to load new message.",
    CallLog_Lable_NameColumn: "Name",
    CallLog_Lable_NumberColumn: "Number",
    Chat_TabName_ContactInfo: "Contact info",
    Chat_TabName_CallLog: "Call Logs",
    Chat_ToolTip_EnterCtrlToSend: "[Ctrl+Enter] to Send",
    Contact_Label_Phone: "Number",
    Contact_Label_MobilePhone: "Mobile",
    Contact_Label_HomePhone: "Home",
    Contact_Label_HomeFax: "Home Fax",
    Contact_Button_Create: "Create",
    Sms_Button_SelectContact: "Contacts",
    Lable_SmsTo: "To",
    Message_SureToDeleteMessage: "Are you sure you want to delete this message?",
    Message_ReveivedMessage: "Received {1} message(s) from {0}",
    Message_LoadingSMSFailure: "Error while loading SMS threads.",
    Contact_Lable_NameColumn: "Name",
    Message_InputContactSenseFailure: "No matches.",
    Message_NumberAndContentNeeded: "Number and Content are required.",
    Message_ContactFormatErrorOrPositionErrorFromPasted: "Invalid format or location error.",
    Button_NewContact: "New contact",
    Contact_all_numbers: "All phone numbers",
    ToolTip_NamesNumbersSeparateComma: "Input names or numbers and separate them with comma.",
    Message_ConfirmToDeleteContact: "Are you sure you want to delete contact {0}?",
    Message_SureToDeleteThisThread: "Are you sure to delete this thread?",
    Message_StarFieldIsNeeded: "Fields marked with an asterisk (*) are required.",
    ToolTip_RequirePermission: "Permissions are required on your device to send SMS via AirDroid.",
    Contact_all: "All contacts"
}, Airdroid.Lang.Upload = {
    Button_SelectFolder: "Select folder",
    Message_SuportFileTypes: "Supporting {0}",
    Msg_not_avail: "Failed to upload. Not enough free space on SD card. ",
    Message_SureToStopUploadFiles: "Will stop uploading. Are you sure to close the window?",
    Label_FileTypesDesc: "Select files",
    Lable_InstallApps: "Install apps",
    Label_PhotoTypesDesc: "Select photos",
    Label_MusicTypesDesc: "Select music",
    Label_RingtoneTypesDesc: "Select ringtones",
    WindowTitle_ImportRingtones: "Upload ringtones",
    WindowTitle_ImportMusic: "Upload music",
    WindowTitle_ImportPhotos: "Upload photos",
    WindowTitle_ImportFiles: "Upload files",
    Label_UPloadSucceed: "Success",
    Label_UploadFailure: "Failed",
    notsupportdragfolders: "Drag & Drop for folders is not supported under current browser.",
    OnlySupportChrome: "Folders upload is only supported by Chrome.",
    FileDropTip: "Drag & Drop files or folders here to upload",
    ApkDropTip: "Drag & Drop apps here to install",
    Tip_UploadTo: "Target folder: {0}",
    Msg_File_TooLarge: "File size exceeds the limit of your web browser.",
    DataFlowNotAbleToUpload: "Your remaining monthly data quota for Remote Connection Mode is not enough for transferring this file.",
    Label_ProgressColumn: "Progress",
    Button_SelectFiles: "Select files",
    Button_ClearSucceed: "Clear uploaded",
    ToolTip_ClearSucceed: "Clear uploaded files",
    Label_ApkSucceedTip: "Success. Proceed on device.",
    Label_UPloadCanced: "Canceled",
    Label_UploadWaiting: "Waiting",
    NameExistSureRename: "Folder {0} already exist. Rename as {1}?",
    RemoteMode_FileTooLarge: "Size for single file cannot exceed {0} MB in Remote Connection Mode. To transfer larger files, please use AirDroid in same network environment."
}, Airdroid.Lang.Applications = {
    Message_Uninstalling: "Uninstalling...",
    Message_UninstallError: "App not installed or is already uninstalled.",
    Message_InstallingApp: "Installing [{0}]...",
    Message_UninstallApp: "Uninstalling [{0}]...",
    Message_SureToUninstallSelectedApp: "Uninstall the selected {0} apps?",
    Message_Uploading: "Uploading...",
    TabName_UserApp: "User",
    Button_InstallApp: "Install app",
    Message_TapOnDevice: "Tap on device",
    Button_InstallUnknownSourceAppGuide: "User guide",
    ToolTip_InstallUnknownSourceApp: 'To allow installation of non-Market apps, please enable "Unknown sources" on your Android.',
    Message_LoadAppListError: "Failed to load apps list.",
    Message_ConfirmToUninstallApp: "Are you sure to uninstall {0}?",
    Message_UploadingError: "Error while uploading {0}.",
    Message_InstallingAppError: "An error occurred during installation.{0}Operation aborted.",
    Message_ActionDone: "OK",
    Message_NOfAppsProhibited: "Copying of below {0} app(s) is prohibited.",
    Message_AppProhibitedTip: "Copy Protection is a publishing option by developers to prevent copying of their apps from the device.",
    Label_InstallTip: "Proceed on your Android to complete the installation.",
    Message_ReinstallStartSuc: "Re-installation triggered. ",
    Suffix_InstallInQueue: "queuing",
    ZipName_AppDefaultExportName: "Apps_downloaded_by_AirDroid",
    Message_SelectApp: ".apk",
    Message_UninstallSucceed: "Uninstall success.",
    TabName_SystemApp: "System",
    TabName_Recommends: "Recommends",
    Button_UninstallApp: "Uninstall",
    Label_InstalledDateColumn: "Date installed"
}, Airdroid.Lang.BrowserTip = {
    BrowserTip1: "{0}We keep improving AirDroid's performance on various browsers.{1}{2}For best performance we highly recommend that you choose one of the{3}{4}recommended browsers(listed below).{5}",
    BrowserTip2: "Support for other browsers is experimental.",
    BrowserGo: "Continue with the current browser. >>"
}, Airdroid.Lang.Filemanage = {
    Message_FileItemMore: "More than 250 files are selected. It may take a while to load. Continue?",
    Msg_NOSdCard: "SD Card not found",
    Msg_LoadFileTreeError: "Failed to load folder tree.",
    ZipName_FileDefaultExportName: "Files_downloaded_by_AirDroid",
    Message_FileExist: "A folder named {0} already exists. Please use another name.",
    Message_SureToDeleteFile: "Are you sure you want to delete this file?",
    Message_SureToDeleteSelectedFiles: "Are you sure you want to delete these {0} files?",
    Message_ListFolderFailure: "Failed to load folder {0}.",
    Message_RenameFailure: "Failed to rename {0}.",
    Message_SelectNoFiles: "No files selected.",
    Label_NewFolderName: "Folder name",
    Message_FileHasIllegalCharacter: "A file name can't contain any of the following characters:  / : * ? \" < > ,| &",
    Message_CreateFolderFailure: "Failed to create folder {0}.",
    FileName_tooLong: "File name must be within {0} characters.",
    Message_FileNameExist: "A file with the same name already exists.",
    MenuItem_Move: "Move",
    Message_FolderSummary: "{0} items",
    ExternalSD_Directory: "External SD",
    SDCard_Directory: "SD Card",
    SystemDirectoryWarn1: "Warnings",
    CreateShortcut: "Create desktop shortcut",
    Message_CopyOrCutSucceed: "{0} files success.",
    Label_NewName: "New name",
    Message_SameFileName: "File name remains the same.",
    Message_FileNameIsNull: "You need to type a file name.",
    ToolTip_SelectedFiles: "{0} items selected",
    Message_CopySelfError: "The destination folder is a subfolder of the source folder.",
    System_Directory: "System",
    SystemDirectoryWarn2: "Modifying or deleting system files may cause system error, please be cautious.",
    SystemDirectoryWarn3: "Operations on some system files may fail due to unpredictable file permissions.",
    Action_Permission_Denied: "Operation failed. No write permission to SD card."
}, Airdroid.Lang.Hotkeys = {
    Lbl_ctrl_v: "Paste",
    Lbl_ctrl_c: "Copy",
    Lbl_ctrl_a: "Select all",
    Lbl_f2: "Rename",
    Btn_Hotkeys: "Hotkeys:",
    Lbl_HotkeysList: "Hotkeys:",
    Lbl_ctrl_x: "Cut",
    Lbl_delete: "Delete"
}, Airdroid.Lang.Summary = {
    Coming_soon: "Coming soon",
    Label_Music: "Music",
    Label_Videos: "Videos",
    Label_Photos: "Photos",
    Label_Contacts: "Contacts",
    Label_Messages: "Messages",
    Label_InternalStorage: "Internal Storage (Available: {0})",
    Label_SDStorage: "SD Card (Available: {0})",
    Message_ReadAndroidSummaryError: "Error.",
    Button_SummaryDetail: "Detail",
    Label_Other: "Other",
    Label_Apps: "Apps",
    Label_eBooks: "Books",
    Title_InternalStorage: "Internal storage",
    Title_SDStorage: "SD Card",
    Title_exSDStorage: "External SD Card",
    Label_exSDStorage: "External SD Card (Available: {0})"
}, Airdroid.Lang.Modules = {
    SummaryDetail: "Summary",
    Messages: "Messages",
    Apps: "Apps",
    Files: "Files",
    Music: "Music",
    Contacts: "Contacts",
    CallLog: "Call Logs",
    NewContact: "New contact",
    upload: "Upload files",
    WebBrowser: "Web Browser",
    EditContact: "Edit contact",
    Chat: "Chat",
    NewMessage: "New message",
    SelectContacts: "Select contacts",
    Video: "Videos",
    Recommends: "Recommends",
    MessageSettings: "Message settings",
    Installapps: "Install apps",
    quickupload: "Upload files",
    Screenshot: "Screenshot",
    Camera: "Camera",
    Photos: "Photos",
    Ringtones: "Ringtones",
    VideoPlayer: "Video Player",
    AudioPlayer: "Audio Player",
    FrequentContacts: "Frequent",
    Quixey: "Quixey",
    Settings: "Settings",
    FindPhone: "Find Phone",
    Language: "Language",
    UserCenter: "Account",
    Increase_Quota: "Increase Quota",
    Premium: "Premium",
    ContactCut: "Crop picture",
    Lab: "Lab",
    Gift: "Gift",
    FeedBack: "Feedback",
    Help: "Help",
    Add: "Add",
    DesktopContact: "Contact shortcut",
    DesktopFileList: "Folder shortcut"
}, Airdroid.Lang.Video = {
    VideoCategory_Camera: "Camera",
    VideoCategory_Others: "Others",
    Btn_PlayAnyway: "Play anyway",
    Tip_FormatNotSupported: "Video format not supported. You can try download and play it using your desktop video player.",
    Message_ReadVideoListError: "Error while loading videos list.",
    Message_DeleteFail: "Error while deleting videos.",
    Message_DeleteSuc: "Delete success.",
    Confirm_DeleteSingleVideo: "Are you sure you want to delete this video?",
    Confirm_DeleteMultiVideos: "Are you sure you want to delete the selected videos?",
    Confirm_DeleteAllVideos: "Are you sure you want to delete all videos?",
    Message_StreamNotFound: "Stream not found.",
    Message_NoSupportThisType: "Video format not supported. ",
    Tip_VideoTooLarge: "This video is larger than 100MB. We suggest that you download it before play.",
    Tip_CannnotPlay: "Failed to play video. You can try download and play it using your desktop video player.",
    Message_VideoPlayerError: "Player error.",
    Message_ReadVideoSummaryError: "Error while loading videos summary.",
    CategoryCountSuffix_Items: "item(s)",
    Tip_QuickTime_Installation_1: "Please follow the browser's instructions or <a target='_blank' href='{0}'>download QuickTime here</a> to view the video.",
    Tip_QuickTime_Installation_2: "Restart your browser after the installation."
}, Airdroid.Lang.Screenshot = {
    Tip_GrantRootPerm: "If your Android device is not notifying you, please go to your root permission management app (like {0}) to manually grant AirDroid root permissions.",
    RootTip_Root_Q_1: "What are root permissions, rooting, root access?",
    RootTip_Root_Q_2: "How to grant AirDroid the root permissions required?",
    RootTip_Root_A_2_2: "After your Android device is rooted, open AirDroid and try the Screenshot feature again. It’s awesome, especially the experimental ability to view everything on your android’s screen in real-time.",
    RootTip_Root_Q_3: "Why root permissions are required by AirDroid to capture screenshots?",
    Tip_AllowRootPerm: "If your device is already rooted, please press Allow on your Android device to grant AirDroid the permissions needed:",
    Tip_NotPerm: "Seems like your device is not rooted. AirDroid requires root permissions to view and capture screenshots.",
    Tip_GettingRootPerm: "AirDroid is attempting to gain root permissions to view and capture screenshots.",
    Tip_screenshot: "Capture a screenshot",
    Tip_play: "Realtime",
    Tip_stop: "Stop realtime",
    Tip_fullscreen: "Enter full screen",
    RootTip_Root_A_3: "To capture a screenshot, AirDroid needs to access your Android's system-level interface.",
    RootTip_Root_Q_4: "Will the screenshot feature affect my Android system?",
    RootTip_Root_A_4: "No. AirDroid only performs read operations to capture screenshots.",
    tip: "Press [F11] to enter full screen mode. Press [ESC] to exit.",
    Msg_NotPerm: "Root permission required",
    Tip_networkspeed: "Seems like you are encountering a slow network connection.",
    RootTip_Root_A_1: 'Rooting is a process allowing users of mobile phones, tablet PCs, and other devices running the Android operating system to attain privileged control (known as "root access") within Android\'s subsystem. {0}Learn More{1}'
}, Airdroid.Lang.Desktop = {
    MenuItem_CloseAll: "Close all",
    MenuItem_Restore: "Restore",
    MenuItem_ShowDesktop: "Show desktop",
    MenuItem_Close: "Close",
    MenuItem_Min: "Minimize",
    MenuItem_Max: "Maximize",
    No_Frequent_Contacts: "Empty",
    LanConnectMode: "LAN Connection Mode",
    RemoteConnectMode: "Remote Connection Mode",
    LiteConnectMode: "You are now using Lite Mode. To enjoy the full AirDroid experience, please visit {0}web.airdroid.com{1}.",
    MenuItem_Lock: "Lock",
    Failed_To_Save: "Failed to save"
}, Airdroid.Lang.AudioPlayer = {
    Btn_Prev: "Previous",
    Btn_Next: "Next",
    Btn_Play: "Play",
    Btn_Pause: "Pause",
    Btn_Unmute: "Unmute",
    MI_RepeatOne: "Repeat current",
    MI_LoopOn: "Repeat all",
    NotSupportError: "Error",
    TypeNotSupport: "File type not supported.",
    Btn_Mute: "Mute",
    MI_LoopOff: "Repeat off",
    SupportDesc: "Failed to load the player. Please try to install Flash plugin."
}, Airdroid.Lang.Workspace = {
    LeftBar_More_MenuItem_Lock: "Lock",
    Message_ClearAllNotice: "Clear all notifications."
}, Airdroid.Lang.Photo = {
    ZipName_PhotoDefaultExportName: "Photos_downloaded_by_AirDroid",
    Message_SureToSetAsWallpaper: "Are you sure to set this picture as wallpaper?",
    Message_SetWallpaperSucceed: "Set as wallpaper success.",
    Message_SureToDeleteThisPhoto: "Are you sure to delete this photo?",
    Message_DeleteThisPhotoFailure: "Failed to delete this photo.",
    Label_CameraFolder: "Camera Roll",
    Label_WallpaperFolder: "Wallpaper",
    Message_SureToDeleteSelectedPhoto: "Are you sure you want to delete the selected photos?",
    Message_DeleteSelectedPhotoFailure: "Failed to delete the selected photos.",
    Last_Tip: "It's the last photo. Will go to first one if you continue."
}, Airdroid.Lang.Music = {
    ZipName_MusicDefaultExportName: "Music_downloaded_by_AirDroid",
    Label_Artist: "Artist",
    ToolTip_AlbumName: "Album:",
    ToolTip_AlbumArtist: "Artist:",
    ToolTip_SortBySongs: "List view ",
    ToolTip_SortByAlbums: "Grid view",
    MenuItem_SetAsPhoneRingtone: "phone ringtone",
    MenuItem_SetAsNotification: "notification ringtone",
    MenuItem_SetAsAlarm: "alarm ringtone",
    Message_SureToDeleteThisSong: "Are you sure you want to delete this song?",
    Message_DeleteSongFailure: "Fail to delete.",
    Message_SureToDeleteSelectedSongs: "Are you sure you want to delete the selected songs?",
    Message_DeleteSongsFailure: "Failed to delete the selected songs.",
    Message_AlreadyPhoneRongtone: "This song was already set as phone ringtone.",
    Message_AlreadyNotification: "This song was already set as notification ringtone.",
    Message_AlreadyAlarm: "This song was already set as alarm ringtone.",
    Message_SetPhoneRongtineFailure: "Failed to set new phone ringtone.",
    Message_SetNotificationFailure: "Failed to set new notification ringtone.",
    Label_Album: "Album",
    ToolTip_AlbumTracks: "Tracks:",
    MenuItem_SetAs: "Set as",
    Message_SetPhoneRongtineSucceed: "New phone ringtone set.",
    Message_SetNotificationSucceed: "New notification ringtone set.",
    Message_SetAlarmSucceed: "New alarm ringtone set.",
    Message_SetAlarmFailure: "Failed to set as alarm ringtone."
}, Airdroid.Lang.Ringtone = {
    TabName_Notification: "Notification",
    TabName_Alarm: "Alarm",
    ZipName_RingtoneDefaultExportName: "Ringtone_downloaded_by_AirDroid",
    Message_RingtoneInUse: "This ringtone is in use.",
    Message_SureToDeleteRingtone: "Are you sure you want to delete this ringtone?",
    Message_SureToDeleteSelectedRingtones: "Are you sure to delete the selected ringtones?",
    Message_DeleteRingtoneFailure: "Failed to delete this ringtone.",
    TabName_Ringtone: "Phone",
    Button_Set: "Set",
    Message_CanNotDelete: "Can't delete system ringtones."
}, Airdroid.Lang.Clipboard = {
    Message_ReadClipFromDeviceFailure: "Failed to read clipboard content from device.",
    Message_SendClipToDeviceFailure: "Failed to send clipboard content to device.",
    Message_SendToDeviceClipBoardSucceed: "Saved to device clipboard.",
    Button_ToDevice: "Refresh",
    Button_FromDevice: "Save",
    Message_ContentTooLong: "Error. Content too long.{0}{1} exceeded characters.",
    Input_PlaceHolder: "Clipboard"
}, Airdroid.Lang.TitleWidget = {
    Message_ReceivedMessages: "Receive {0} new message(s)"
}, Airdroid.Lang.About = {
    Label_Website: "<a target='_blank' tabname='AirDroid' href='http://www.airdroid.com'>http://www.airdroid.com</a>",
    Label_Help: "<a target='_blank' tabname='User Guide' href='http://www.airdroid.com/userguide.html'>http://www.airdroid.com/userguide.html</a>",
    Url_Facebook: "http://www.facebook.com/AirDroid",
    Url_Twitter: "http://twitter.com/AirDroidTeam",
    Url_Youtube: "http://www.youtube.com/user/AirDroidTeam",
    Url_Tumblr: "http://airdroid.tumblr.com/",
    Url_Googleplus: "http://gplus.to/AirDroid",
    Label_Copyright: "© 2014 Sand Studio",
    VScrollText_Main: "AirDroid is a fast, free app that lets you wirelessly manage & control your Android device from a web browser without cables.<br/><br/>Thanks to suggestions and assistance from:<br>Ramona Shelburne (US)<br>John Phillips (UK)<br>Turkdale (Turkey)<br>Peter Yang (China)<br>Anna Ringstrom (France)<br>Amy Norton (Germany)<br>Salynn Boyles (US)"
}, Airdroid.Lang.Battery = {
    Message_GettingLow: "The battery is getting low:",
    Message_Reminding: "or less remaining.",
    Message_ConnectCharge: "Please connect charger"
}, Airdroid.Lang.SMSTimeOffsetSetting = {
    Label_QuestionTitle: "Adjust the timestamp of incoming messages",
    Label_Explain: "Offset = correct timestamp - wrong timestamp",
    Select_MinSuffix: "minute(s)",
    Select_HourSuffix: "hour(s)",
    ButtonText_Save: "Save",
    MsgBox_SaveFailed: "Failed to save. Please retry.",
    MsgBox_Saved: "Saved. Refreshing now...",
    Label_Value: "Offset"
}, Airdroid.Lang.Transport = {
    Main_Button_OpenInDevice: "Open on device",
    OpacityTip_OpenURLSuccess: "Opened successfully. Please check on device.",
    OpacityTip_OpenURLFail: "Failed to open on device. Please retry."
}, Airdroid.Lang.Browser = {
    ToolTip_Back: "Back",
    ToolTip_AddTab: "New Tab",
    TabName_UserGuide: "User Guide",
    TabName_Facebook: "Facebook",
    TabName_Twitter: "Twitter",
    TabName_TeamBlog: "Blog",
    TabURL_AppUserGuide: "http://www.airdroid.com/userguide.html?name=apps",
    TabURL_SMSUserGuide: "http://www.airdroid.com/sms.html",
    TabName_NewTab: "New Tab",
    ToolTip_Forward: "Forward",
    ToolTip_ListAllTabs: "All Tabs"
}, Airdroid.Lang.Camera = {
    underDevTip: "The feature is currently under development. Please check back again later.",
    tip: "Press [F11] to enter full screen. Press [ESC] to exit.",
    Tip_stop: "Stop realtime",
    Tip_Photo: "Take a shot",
    Tip_networkspeed: "Your network is too slow currently",
    Tip_StopError: "Failed to close camera",
    Tip_fullscreen: "Enter full screen",
    Tip_reStart: "It seems that your camera is closed. {0} Try Restart{1}",
    Tip_StartError: "Failed to start camera",
    Tip_play: "Realtime"
}, Airdroid.Lang.FindMyPhone = {
    Custom_Phone: "{0}'s phone",
    Location_Time: "Location {0} minute(s) ago",
    Location_Date: "location {0} ",
    location_load: "Locating device...",
    Send_Pre: "The device is lost. Please call me.",
    Send_Tip: "Enter a message that will display with your phone number.",
    Send_Default: "Alert",
    Button_Cancel: "Cancel",
    Button_Confirm: "Confirm",
    Enter_Pwd_Error: "Passcode doesn't match.",
    Wipe_Title: "Wipe device",
    Wipe_Tip_Warning: "Warning: Your device will be reset to factory default! All personal data will be permanently deleted and can not be recovered!",
    Button_Continue: "Continue",
    Wipe_Sure_Tip: "Wipe device",
    Wipe_Pre: "Enter AirDroid password",
    Wipe_Data: "Wiping device data...",
    Confirm_Content: "Enter AirDroid password",
    Confirm_Required: "Enter AirDroid password",
    Confirm_Error: "Password is not correct",
    Error_Code_Offline: "Your Android device is not accessible at this moment.",
    Error_Code_Send_Fail: "Failed to send the message.",
    Error_Code_Wipe_Fail: "Failed to wipe data on the device.",
    Mask_Tip2: "Please enable this feature in AirDroid settings on your device and then {0}refresh{1}.",
    Login_Title: "Sign in again required",
    Phone_Tip: "Click to show operations",
    CAPS_Lock: "Caps Lock is on",
    Device_Offline: "Your Android device is not accessible at this moment.",
    My_Device: "My device",
    Send_loading: "Setting Lost mode...",
    Button_Send: "Send",
    Enter_Pwd: "Enter a passcode",
    ReEnter_Pwd: "Enter passcode again",
    Wipe_Tip: "Your device will be reset to factory default!  All personal data will be permanently deleted and can not be recovered. Are you sure you want to wipe all data?",
    Button_Wipe: "Wipe",
    Confirm_Title: "Alert",
    Error_Code_Lock_Fail: "Failed to lock the device.",
    Mask_Tip1: "Find Phone feature is not enabled on your device.",
    Login: "Sign in",
    Not_Find: "Failed to locate the device.",
    Airdroid_Password: "AirDroid password",
    Standard: "Standard",
    Satellite: "Satellite",
    Load_Wrong_Tip1: "Oops...something went wrong.",
    Load_Wrong_Tip2: "Click {0}here{1} to try again.",
    Low_Version_Tip: "Android version 2.1 and lower is not supported by Find Phone.",
    Hybrid: "Hybrid"
}, Airdroid.Lang.DialPad = {
    Call_Out_Tip: "Please proceed on device.",
    Button_Call: "Call",
    Button_Message: "Message",
    Add_Contact: "Add to contacts",
    Call_Ring_Title: "Incoming call",
    Call_Reject: "Reject",
    Call_Reject_Send: "Reject with message",
    Call_Out: "Calling",
    Call_Out_End: "End call",
    Call_Notice: "{0} missed call(s)",
    Call_Answer: "Connected"
}, Airdroid.Lang.AirTransport = {
    OpacityTip_OpenURLFail: "Failed to open on device. Please retry.",
    Message_ContentTooLong: "Error. Content too long.{0}{1} exceeded characters.",
    Input_PlaceHolder: "Clipboard",
    Url: "URL",
    Main_Button_OpenInDevice: "Open on device",
    OpacityTip_OpenURLSuccess: "Opened successfully. Please check on device.",
    Message_ReadClipFromDeviceFailure: "Failed to read clipboard content from device.",
    Message_SendClipToDeviceFailure: "Failed to send clipboard content to device.",
    Button_ToDevice: "Refresh",
    Button_FromDevice: "Save",
    File: "File",
    Clipboard: "Clipboard",
    Drag_Files: "Drag & Drop files or folders here",
    clear: "Clear",
    Proceed_Device: "Please proceed on device.",
    Upload_Success: "{0} succeeded",
    Upload_Faile: "{0} failed, {1} succeeded",
    Message_SendToDeviceClipBoardSucceed: "Saved to device clipboard.",
    Select_File: "Select file",
    App: "App",
    Update_To: "Upload to"
}, Airdroid.Lang.Welcome = {
    t1: "One less cable",
    t2: "Move things on and off your Android device without a USB cable. Even when the device is not nearby.",
    t3: "One less screen",
    t5: "One less worry",
    t6: "Locate and lock your Android when it’s lost. Cannot get it back? Simply wipe all data remotely.",
    t9: "Share the news",
    t10: "You’ve upgraded to AirDroid 2 Premium",
    t11: "Your free 2-month AirDroid 2 Premium membership is activated. Enjoy the full AirDroid 2 experience :-)",
    share_on: "Share on {0}",
    share_cnt: "Discover AirDroid 2, the best free app that lets you manage Android in web browser: {0}",
    t14: "Fly higher & longer",
    t19: "See through the lens of your Android device's camera remotely.",
    t20: "Dial remotely",
    t21: "Dial phone numbers remotely from the web and talk on the phone.",
    t22: "Remove promotions",
    t23: "As a premium user, you can remove promotion messages.",
    t25: "Connect up to 6 devices to 1 AirDroid account.",
    t28: "Go Premium",
    t4: "Send and receive SMS from your big-screen computer, without being distracted by the small-screen thing.",
    t7: "Get AirDroid 2 Premium for free!",
    t8: "Share AirDroid 2 on Facebook or Twitter and get 2-month premium membership for free. Limited time offer.",
    t12: "Start AirDroid 2 Premium",
    t13: "Failed, please try again.",
    t16: "Larger files",
    t17: "Transfer larger files (up to 100MB per file) in Remote Connection Mode.",
    t18: "Remote Camera",
    t24: "Multiple device support",
    t26: "Priority support",
    t27: "You’ll be sent to the front of the queue for faster support response.",
    t29: "Catch intruders",
    t30: "Take photos of people trying to unlock your device. Find Phone mobile: f.airdroid.com.",
    t15: "Up to 1GB data quota per month for Remote Connection Mode."
}, Airdroid.UsedLang = Airdroid.Lang;
