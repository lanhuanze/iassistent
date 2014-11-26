/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/widget/iframe/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<a class="widget-iframe-close">-</a>\r\n<iframe name="' + (null == (__t = iframewidget_id) ? "" : __t) + '" class="iframe-app"  frameborder="no" allowtransparency="true" scrolling="auto" hidefocus="" src="' + (null == (__t = widget_url) ? "" : __t) + '"></iframe>';
    return __p
};
Airdroid.Widget.IframeWidget = Core.extend(Airdroid.AppBase, {
    _iframeWidgetDom: null,
    _refChan: null,
    _load_timeOut: !0,
    initialize: function() {},
    onCreate: function() {
        var e = this;
        _.isUndefined(e._appWin._appConfig.url) && (e._appWin._appConfig.url = "http://www.airdroid.com"), e.showLoadingMask()
    },
    onCreated: function() {
        var e = this;
        e._iframeWidgetDom = $(Airdroid.Util.getTemplate("widget/iframe", "index", {
            iframewidget_id: e._appWinId,
            widget_url: e.util.addParameterToURL(e._appWin._appConfig.url, {
                airlang: Airdroid.Runtime.locale,
                source: "web",
                deviceId: Airdroid.DeviceManage.getCurrentDeviceDid(),
                ver: Airdroid.Config.appVer || ""
            })
        })), e.setContent(this._iframeWidgetDom), e.find(".widget-iframe-close").click(function() {
            var t = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.dashboardWidget.name),
                i = e._appWin._appConfig.appId;
            t = _.without(t, i), Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.dashboardWidget.name, t), e.destroy()
        }), $(window).resize(function() {
            e.setInitPosition()
        }), e._iframeWidgetDom.load(function() {
            e.removeAppLoadMask(), e._load_timeOut = !1;
            var t = _.uniqueId("i_app_widget_");
            $(this).attr("id", t).css("visibility", "visible");
            var i = new ApiProvider(t, e);
            e._refChan = i.getChannelObj()
        }), setTimeout(function() {
            e._load_timeOut && e.destroy()
        }, 6e4)
    },
    onDataChange: function(e) {
        var t = this;
        if (e.data.options) {
            var i = setInterval(function() {
                t._refChan && (t._refChan.call({
                    method: "system.startupOptions",
                    params: e.data.options,
                    success: function() {
                        return !0
                    }
                }), clearInterval(i))
            }, 500);
            t._runOptions = e.data.options
        }
    },
    onResize: function(e) {
        this.find("iframe").css("height", e.data.height + "px")
    },
    onClose: function() {}
});