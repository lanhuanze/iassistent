/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/widget/airtransport/upload_item.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-airTransport-uploadItem">\r\n    <div class="widget-airTransport-fileError"></div>\r\n    <div class="widget-airTransport-fileName over-ellipsis"></div>\r\n    <div class="widget-airTransport-cancelIcon widget-airTransport-fileDel" title="' + (null == (__t = common.Button_Cancel) ? "" : __t) + '"></div>\r\n</div>\r\n';
    return __p
};
this.ajst["views/widget/airtransport/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-airTransport">\r\n    <div class="widget-airTransport-top"></div>\r\n    <div class="widget-airTransport-tabSelector">\r\n        <div class="widget-airTransport-tab widget-airTransport-tab-file active J_drag" m="file" title="' + (null == (__t = lang.File) ? "" : __t) + '">\r\n            <div class="widget-airTransport-tab-icon"></div>\r\n            <div class="widget-airTransport-tab-name over-ellipsis">' + (null == (__t = lang.File) ? "" : __t) + '</div>\r\n            <div class="widget-airTransport-tab-count">0</div>\r\n        </div>\r\n        <div class="widget-airTransport-tab widget-airTransport-tab-url" m="url" title="' + (null == (__t = lang.Url) ? "" : __t) + '">\r\n            <div class="widget-airTransport-tab-icon"></div>\r\n            <div class="widget-airTransport-tab-name over-ellipsis">' + (null == (__t = lang.Url) ? "" : __t) + '</div>\r\n            <div class="widget-airTransport-tab-count">0</div>\r\n        </div>\r\n        <div class="widget-airTransport-tab widget-airTransport-tab-clipboard" m="clipboard" title="' + (null == (__t = lang.Clipboard) ? "" : __t) + '">\r\n            <div class="widget-airTransport-tab-icon"></div>\r\n            <div class="widget-airTransport-tab-name over-ellipsis">' + (null == (__t = lang.Clipboard) ? "" : __t) + '</div>\r\n            <div class="widget-airTransport-tab-count">0</div>\r\n        </div>\r\n        <div class="widget-airTransport-tab widget-airTransport-tab-app J_drag" m="app" title="' + (null == (__t = lang.App) ? "" : __t) + '">\r\n            <div class="widget-airTransport-tab-icon"></div>\r\n            <div class="widget-airTransport-tab-name over-ellipsis">' + (null == (__t = lang.App) ? "" : __t) + '</div>\r\n            <div class="widget-airTransport-tab-count">0</div>\r\n        </div>\r\n    </div>\r\n    <div class="widget-airTransport-up widget-airTransport-up-file"></div>\r\n    <div class="widget-airTransport-item" m=\'file\'>\r\n        <div class="widget-airTransport-file-path">\r\n            <span class="upload-to i-float-left">' + (null == (__t = lang.Update_To) ? "" : __t) + ' : </span><a class="change i-float-right">...</a><a class="value i-float-right over-ellipsis" title="' + (null == (__t = upload_path) ? "" : __t) + '">' + (null == (__t = upload_path) ? "" : __t) + '</a>\r\n        </div>\r\n        <div class="widget-airTransport-Drag-input widget-airTransport-file-input">\r\n            <div class="widget-airTransport-Drag-tip">\r\n                ' + (null == (__t = lang.Drag_Files) ? "" : __t) + '\r\n            </div>\r\n            <div class="widget-airTransport-Drag-item">\r\n\r\n            </div>\r\n        </div>\r\n        <div class="btn widget-airTransport-btn widget-airTransport-folder-upload disabled"><div></div></div>\r\n        <div class="btn btn-primary widget-airTransport-blueBtn widget-airTransport-file-upload">\r\n            <div class="widget-airTransport-file-icon"></div>\r\n            <div class="widget-airTransport-file-upload-area">\r\n                <div id="widget-airTransport-file-upload"></div>\r\n            </div>\r\n        </div>\r\n        <div class="widget-airTransport-result"></div>\r\n        <div class="widget-airTransport-file-con">\r\n            <div class="widget-airTransport-file-list">\r\n\r\n            </div>\r\n        </div>\r\n        <div class="widget-airTransport-clearError">\r\n            <div class="widget-airTransport-cancelIcon widget-airTransport-clearIcon"></div>\r\n            <div class="widget-airTransport-clearTip">' + (null == (__t = lang.clear) ? "" : __t) + '</div>\r\n        </div>\r\n    </div>\r\n    <div class="widget-airTransport-item is-hide" m=\'url\'>\r\n        <input class="widget-airTransport-url-input" type="text" placeholder="' + (null == (__t = lang.Url) ? "" : __t) + '" spellcheck="false">\r\n        <a class="icon-search only-clear have-content is-hide"></a>\r\n        <div class="btn btn-primary widget-airTransport-blueBtn widget-airTransport-url-open"><div></div></div>\r\n    </div>\r\n    <div class="widget-airTransport-item is-hide" m=\'clipboard\'>\r\n        <textarea class="widget-airTransport-clip-input" placeholder="' + (null == (__t = lang.Clipboard) ? "" : __t) + '"></textarea>\r\n        <div class="btn widget-airTransport-btn widget-airTransport-clip-read"><div></div></div>\r\n        <div class="btn btn-primary widget-airTransport-blueBtn widget-airTransport-clip-push"><div></div></div>\r\n    </div>\r\n    <div class="widget-airTransport-item is-hide" m=\'app\'>\r\n        <div class="widget-airTransport-Drag-input widget-airTransport-app-input">\r\n            <div class="widget-airTransport-Drag-tip">\r\n                ' + (null == (__t = common.Drag_APK) ? "" : __t) + '\r\n            </div>\r\n            <div class="widget-airTransport-Drag-item">\r\n\r\n            </div>\r\n            <div class="widget-airTransport-proceed">\r\n                <div class="widget-airTransport-proTip">' + (null == (__t = lang.Proceed_Device) ? "" : __t) + '</div>\r\n                <div class="widget-airTransport-reinstall"></div>\r\n                <div class="widget-airTransport-cancelIcon widget-airTransport-proIcon"></div>\r\n            </div>\r\n        </div>\r\n        <div class="btn btn-primary widget-airTransport-blueBtn widget-airTransport-app-upload">\r\n            <div class="widget-airTransport-app-icon"></div>\r\n            <div class="widget-airTransport-app-upload-area">\r\n                <div id="widget-airTransport-app-upload"></div>\r\n            </div>\r\n        </div>\r\n        <div class="widget-airTransport-result"></div>\r\n        <div class="widget-airTransport-app-con">\r\n            <div class="widget-airTransport-app-list">\r\n\r\n            </div>\r\n        </div>\r\n        <div class="widget-airTransport-clearError">\r\n            <div class="widget-airTransport-cancelIcon widget-airTransport-clearIcon"></div>\r\n            <div class="widget-airTransport-clearTip">' + (null == (__t = lang.clear) ? "" : __t) + "</div>\r\n        </div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/widget/airtransport/uploading_item.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="widget-airTransport-uploadingItem">\r\n    <div class="widget-airTransport-uploadingName over-ellipsis">' + (null == (__t = filename) ? "" : __t) + '</div>\r\n    <div class="widget-airTransport-uploadingStatus is-hide">\r\n        <div class="widget-airTransport-uploadingProgress" ></div>\r\n    </div>\r\n    <div class="widget-airTransport-uploadingSpeed">0%</div>\r\n    <div class="widget-airTransport-cancelIcon widget-airTransport-uploadingCancel" title="' + (null == (__t = common.Button_Cancel) ? "" : __t) + '"></div>\r\n</div>';
    return __p
};
Airdroid.Widget.AirTransport = Core.extend(Airdroid.AppBase, {
    _refDOM: null,
    _lang: null,
    _common: null,
    _isFileUploading: !1,
    _isAppUploading: !1,
    _fileObj: [],
    _default_upload_path: "/sdcard/airdroid/upload",
    initialize: function() {
        this._lang = this.util.getLang("AirTransport"), this._common = this.util.getLang("Common"), this._supportDragDrop = !1, this._jsUploader = null, this._appJsUploader = null, this.isApp = !1, this.uploadItemTemplate = Airdroid.Util.getTemplate("widget/airtransport", "upload_item", {
            common: this.util.getLang("Common")
        }), this._isFileUploading = !1, this._fileTotal = 0, this._fileNum = 0, this._isAppUploading = !1, this._appTotal = 0, this._appNum = 0, this._displayListItem = 3, this._lastAppPath = ""
    },
    onCreate: function() {
        var e = this;
        this.file_dir = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.airTransportUploadPath.name)[Airdroid.DeviceManage.getCurrentDeviceId()] || e._default_upload_path, this._refDOM = $(Airdroid.Util.getTemplate("widget/airtransport", "index", {
            lang: e._lang,
            common: e._common,
            upload_path: this.file_dir
        })), this.setContent(this._refDOM), this.url_input = this._refDOM.find(".widget-airTransport-url-input"), this.url_btn = this._refDOM.find(".widget-airTransport-url-open"), this.url_clear = this._refDOM.find(".widget-airTransport-item .icon-search"), this.clip_input = this._refDOM.find(".widget-airTransport-clip-input"), this.clip_read = this._refDOM.find(".widget-airTransport-clip-read"), this.clip_push = this._refDOM.find(".widget-airTransport-clip-push"), this.clip_con = this._refDOM.find(".widget-airTransport-item[m='clipboard']"), this.file_input = this._refDOM.find(".widget-airTransport-file-input"), this.file_list = this._refDOM.find(".widget-airTransport-file-list"), this.file_item = this._refDOM.find(".widget-airTransport-item[m='file']"), this.file_tab = this._refDOM.find(".widget-airTransport-tab[m='file']"), this.file_listCon = this._refDOM.find(".widget-airTransport-file-con"), this.fileScrollApi = this.file_listCon.jScrollPane({
            animateScroll: !0,
            mouseWheelSpeed: 150,
            verticalDragMinHeight: 18
        }).data("jsp"), this.app_input = this._refDOM.find(".widget-airTransport-app-input"), this.app_list = this._refDOM.find(".widget-airTransport-app-list"), this.app_item = this._refDOM.find(".widget-airTransport-item[m='app']"), this.app_tab = this._refDOM.find(".widget-airTransport-tab[m='app']"), this.app_listCon = this._refDOM.find(".widget-airTransport-app-con"), this.appScrollApi = e.app_listCon.jScrollPane({
            animateScroll: !0,
            mouseWheelSpeed: 150,
            verticalDragMinHeight: 18
        }).data("jsp"), this._up = this._refDOM.find(".widget-airTransport-up"), this._currentTab = "file", e.file_listCon.css("height", "0px"), e.fileScrollApi.reinitialise(), e.app_listCon.css("height", "0px"), e.appScrollApi.reinitialise(), e.util.isSupportXHR() || e._appWin._wDom.draggable("disable"), this.util.keepWidgetInScreen(this._refDOM.parents(".widget"))
    },
    onCreated: function() {
        this.startRunning()
    },
    onResize: function() {},
    onClose: function() {},
    invokeRemoteSearch: function(e) {
        var t = this;
        console.info("Invoke Remote Interface:" + e), this._service.invokeRemoteBrowser(e, function(e) {
            t.util.isReturnDataError(e) || (1 == e.result ? t.showDelayMsg(t._lang.OpacityTip_OpenURLSuccess) : t.showDelayMsg(t._lang.OpacityTip_OpenURLFail))
        }, function() {
            t.showDelayMsg(t._lang.OpacityTip_OpenURLFail)
        })
    },
    isUrl: function(e) {
        var t = /((^(https|http|ftps|ftp|rtsp|mms|rtmp):\/\/)|(^([_a-z0-9]*)))([_a-z0-9]+.)+(com|cn|mobi|co|net|com.cn|net.cn|so|gov|org|gov.cn|org.cn|tel|tv|biz|cc|hk|name|info|asia|me)/i,
            i = /((^(https|http|ftps|ftp|rtsp|mms|rtmp):\/\/(\d))|(^(\d))).(\d).(\d).(\d)/;
        return t.test(e) || i.test(e)
    },
    DoSearch: function(e) {
        var t = $.trim(e);
        0 != t.length && (0 == /^(http|https|ftp|rtsp|mms)?:\/\//i.test(t) && (t = this.isUrl("http://" + t) ? "http://" + t : "http://www.google.com/m?q=" + t), this.invokeRemoteSearch(t))
    },
    ReadClipboardFromPhone: function() {
        var e = this;
        e.showLoadingMask(e.clip_con), Airdroid.Service.readPhoneClipBoard(function(t) {
            t = e.util.unescape(t), _.isUndefined(t) || !_.isUndefined(t.err) ? e.ReadClipboardFromPhoneFail() : e.ReadClipboardFromPhoneSuc(t), e.removeLoadingMask(e.clip_con)
        }, function() {
            e.removeLoadingMask(e.clip_con)
        })
    },
    PushContentToPhoneMemory: function(e) {
        var t = this;
        return e.length > 2048 ? (t.util.showDelayMsg(t.clip_con, t._lang.Message_ContentTooLong.format("<br>", e.length - 2048)), !1) : (t.showLoadingMask(t.clip_con), t._service.pPushContentToClipboard(e, function(e) {
            t.removeLoadingMask(t.clip_con), void 0 == e.err && 0 == e.result ? t.PushContentToPhoneMemorySuc() : t.PushContentToPhoneMemoryFail()
        }, function() {
            t.util.alert(t._common.Message_NetWorkError), t.removeLoadingMask(t.clip_con)
        }), void 0)
    },
    ReadClipboardFromPhoneSuc: function(e) {
        this.clip_input.val(e.result)
    },
    ReadClipboardFromPhoneFail: function() {
        var e = this;
        this.util.alert(e._lang.Message_ReadClipFromDeviceFailure)
    },
    PushContentToPhoneMemorySuc: function() {
        var e = this;
        this.util.showDelayMsg(e.clip_con, e._lang.Message_SendToDeviceClipBoardSucceed)
    },
    PushContentToPhoneMemoryFail: function() {
        var e = this;
        this.util.alert(e._lang.Message_SendClipToDeviceFailure)
    },
    onStartUpload: function(e, t) {
        var i = this,
            n = i.isApp ? i.app_list : i.file_list,
            o = i.isApp ? "app" : "file",
            a = $(i.uploadItemTemplate).attr("fileId", e).attr("m", o).attr("status", "0").find(".widget-airTransport-fileName").html(t).attr("title", t).end().find(".widget-airTransport-fileDel").click(function() {
                i.cancelUpload(e, $(this).parents(".widget-airTransport-uploadItem").attr("status"))
            }).end();
        n.append(a), console.log("a file append"), i.resizeCon(o);
        var r = "app" == o ? i._isAppUploading : i._isFileUploading;
        if ("app" == o ? (i._appTotal = i._appTotal + 1, i._appNum = i._appNum + 1) : "file" == o && (i._fileTotal = i._fileTotal + 1, i._fileNum = i._fileNum + 1), !r) {
            "app" == o ? (i._isAppUploading = !0, i.app_item.find(".widget-airTransport-clearError").trigger("click")) : "file" == o && (i._isFileUploading = !0, i.file_item.find(".widget-airTransport-clearError").trigger("click"));
            var a = $(i.uploadItemTemplate).attr("fileId", e).attr("m", o).attr("status", "0").find(".widget-airTransport-fileName").html(t).attr("title", t).end().find(".widget-airTransport-fileDel").click(function() {
                i.cancelUpload(e, $(this).parents(".widget-airTransport-uploadItem").attr("status"))
            }).end();
            n.append(a), i.showCurrentUploadItem(e, t)
        }
        i.refreshCount(o)
    },
    resizeCon: function(e) {
        var t = this;
        "file" == e ? t.file_list.find(".widget-airTransport-uploadItem:visible").length <= t._displayListItem ? (t.file_listCon.css("height", t.file_list.height() + "px"), t.file_listCon.find(".jspVerticalBar").hide(), t.fileScrollApi.reinitialise()) : (t.file_listCon.css("height", "100px"), t.file_listCon.find(".jspVerticalBar").show(), t.fileScrollApi.reinitialise()) : "app" == e && (t.app_list.find(".widget-airTransport-uploadItem:visible").length <= t._displayListItem ? (t.app_listCon.css("height", t.app_list.height() + "px"), t.app_listCon.find(".jspVerticalBar").hide(), t.appScrollApi.reinitialise()) : (t.app_listCon.css("height", "100px"), t.app_listCon.find(".jspVerticalBar").show(), t.appScrollApi.reinitialise())), t.resizeList(e, !1), t.resizeWidget()
    },
    onProgress: function(e, t) {
        0 != t && this.showCurrentUploadProgress(e, t)
    },
    onError: function(e, t) {
        var i = this,
            n = i.getUploadItemByFileId(e);
        n.attr("status", "4").find(".widget-airTransport-fileError").show().end().find(".widget-airTransport-fileDel").hide().end().show(), null != t && (Airdroid.Util.isSupportXHR() ? i.util.alert(t) : i.util.alert(i.util.getLang("Upload", "Label_UploadFailure")));
        var o = n.attr("m");
        "file" == o && 0 == i.file_list.find('.widget-airTransport-uploadItem[status!="4"]').length ? i.finishAll(o) : "app" == o && 0 == i.app_list.find('.widget-airTransport-uploadItem[status!="4"]').length && i.finishAll(o), i.resizeCon(o), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Error"), console.info("upload fail===>" + e)
    },
    onFinish: function(e, t) {
        var i = this,
            n = i.getUploadItemByFileId(e);
        t && n.find(".widget-airTransport-fileName").html(t).attr("title", t);
        var o = n.parents(".widget-airTransport-item").attr("m");
        "app" == o ? (i.appScrollApi, i._appNum = i._appNum - 1) : "file" == o && (i.fileScrollApi, i._fileNum = i._fileNum - 1), i.clearCurrentUploadItem(e), n.remove(), i.refreshCount(o), i.resizeCon(o), i.showNextUploadItem(o), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Finish")
    },
    cancelUpload: function(e, t) {
        var i = this,
            n = i.getUploadItemByFileId(e),
            o = n.attr("m");
        "app" == o ? (i._appJsUploader && (Airdroid.Util.isSupportXHR() ? i._appJsUploader.cancelUpload(e, t) : i._appJsUploader.cancelUpload(e, !1)), i._appTotal = i._appTotal - 1, i._appNum = i._appNum - 1) : "file" == o && (i._jsUploader && (Airdroid.Util.isSupportXHR() ? i._jsUploader.cancelUpload(e, t) : i._jsUploader.cancelUpload(e, !1)), i._fileTotal = i._fileTotal - 1, i._fileNum = i._fileNum - 1), n.remove(), i.refreshCount(o), i.resizeCon(o), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Cancel")
    },
    getUploadItemByFileId: function(e) {
        var t = this._refDOM.find("[fileId='" + e + "']");
        return t.length > 1 && (t = $(t[t.length - 1])), t
    },
    refreshCount: function(e) {
        var t = this;
        if ("file" == e) {
            var i = t.file_tab.find(".widget-airTransport-tab-count");
            i.hasClass("error") && (i.removeClass("error"), t.file_list.html("")), i.html(t._fileNum).show(), 0 == t._fileNum && i.html("0").hide()
        } else if ("app" == e) {
            var i = t.app_tab.find(".widget-airTransport-tab-count");
            i.hasClass("error") && (i.removeClass("error"), t.app_list.html("")), i.html(t._appNum).show(), 0 == t._appNum && i.html("0").hide()
        }
    },
    finishAll: function(e) {
        var t = this;
        if ("file" == e && 0 == t.file_list.find('.widget-airTransport-uploadItem[status="2"]').length) {
            t._isFileUploading = !1;
            var i = parseInt(t.file_tab.find(".widget-airTransport-tab-count").html());
            if (i > 0) {
                t.file_tab.find(".widget-airTransport-tab-count").addClass("error").show(), t.file_item.find(".widget-airTransport-result").addClass("error"), t.file_item.find(".widget-airTransport-clearError").css("display", "inline-block");
                var n = t._fileTotal - i;
                0 > n && (n = 0);
                var o = t._lang.Upload_Faile.format(i, n);
                t.resizeList(e, !0)
            } else {
                t.file_item.find(".widget-airTransport-result").removeClass("error");
                var o = t._lang.Upload_Success.format(t._fileTotal)
            }
            t.file_item.find(".widget-airTransport-result").html(o).show(), t._fileTotal = 0, t._fileNum = 0, t.resetDragCon(e)
        } else if ("app" == e && 0 == t.app_list.find('.widget-airTransport-uploadItem[status="2"]').length) {
            t._isAppUploading = !1;
            var i = parseInt(t.app_tab.find(".widget-airTransport-tab-count").html());
            if (i > 0) {
                t.app_tab.find(".widget-airTransport-tab-count").addClass("error").show(), t.app_item.find(".widget-airTransport-result").addClass("error"), t.app_item.find(".widget-airTransport-clearError").css("display", "inline-block");
                var n = t._appTotal - i;
                0 > n && (n = 0);
                var o = t._lang.Upload_Faile.format(i, n);
                t.resizeList(e, !0)
            } else {
                t.app_item.find(".widget-airTransport-result").removeClass("error");
                var o = t._lang.Upload_Success.format(t._appTotal)
            }
            if (t.app_item.find(".widget-airTransport-result").html(o).show(), t.resetDragCon(e), t._appTotal > i) {
                t.app_input.find(".widget-airTransport-Drag-tip").hide();
                var a = 1 == t._appTotal - i ? "visible" : "hidden";
                t.app_input.find(".widget-airTransport-reinstall").css("visibility", a), t.app_input.find(".widget-airTransport-proceed").show()
            }
            t._appTotal = 0, t._appNum = 0
        }
        Airdroid.Util.trackEvent("W-AirTransport", "Upload", "FinishAll")
    },
    getUploader: function() {
        var e = this;
        (Airdroid.Util.browser.ie10 || !Airdroid.Util.isSupportXHR()) && e._refDOM.find(".widget-airTransport-Drag-tip").hide();
        var t = Airdroid.Util.browser.chrome ? e._refDOM.find(".widget-airTransport-folder-upload") : null,
            i = {
                fn: "",
                d: e.file_dir,
                after: 0,
                rtype: 0
            },
            n = {
                d: e._default_upload_path,
                after: 1,
                rtype: 1
            },
            o = {
                params: i,
                fileUploadBtnParentElement: e._refDOM.find(".widget-airTransport-file-upload"),
                fileUploadBtnId: "widget-airTransport-file-upload",
                folderUploadBtnParentElement: t,
                dropArea: e.file_input.add(e.file_tab),
                fileUploadWidth: 36,
                fileUploadHeight: 30,
                fileType: "*.*",
                model: "file"
            },
            a = {
                params: n,
                fileUploadBtnParentElement: e._refDOM.find(".widget-airTransport-app-upload"),
                fileUploadBtnId: "widget-airTransport-app-upload",
                folderUploadBtnParentElement: null,
                dropArea: e.app_input.add(e.app_tab),
                fileUploadWidth: 40,
                fileUploadHeight: 70,
                supportTypes: ["apk"],
                fileType: "*.apk",
                model: "app"
            },
            r = function(t) {
                e._supportDragDrop = Airdroid.Util.isSupportXHR();
                var i = new Airdroid.Uploader({
                    common: {
                        fpath: e.file_dir,
                        afterAction: t.params.after,
                        rtype: t.params.rtype,
                        uploadStarted: function(t) {
                            e.onStartUpload(t.id, t.name, t.size, t)
                        },
                        progressUpdated: function(t, i) {
                            e.onProgress(t.id, i)
                        },
                        uploadFinished: function(i, n, o) {
                            if (e.onProgress(i.id, 100), "app" == t.model) e.onFinish(i.id, i.name), e._lastAppPath = n.savepath || "", 0 == e._appNum && "flash" == o && e.finishAll(t.model), Airdroid.Service.reinstallApp(e._lastAppPath);
                            else if ("file" == t.model) {
                                var a = i.name.substr(0, i.name.lastIndexOf("."));
                                e.onFinish(i.id, a), 0 == e._fileNum && "flash" == o && e.finishAll(t.model)
                            }
                        },
                        error: function(t, i) {
                            e.uploadError(t.id, t, i)
                        }
                    },
                    xhr: {
                        url: e._service.getFileUploadPath(),
                        maxfiles: 1,
                        maxfilesize: -1,
                        params: t.params,
                        fileUploadBtnParentElement: t.fileUploadBtnParentElement,
                        folderUploadBtnParentElement: t.folderUploadBtnParentElement,
                        supportFolderUpload: !1,
                        isFitDir: !0,
                        dropArea: t.dropArea,
                        model: t.model,
                        beforeEach: function(i) {
                            return e.beforeCheck(t, i)
                        },
                        afterAll: function() {
                            e.finishAll(this.model)
                        },
                        drop: function(t) {
                            var i = $(t.currentTarget);
                            i.hasClass("J_drag") && i.attr("m") != e._currentTab && i.trigger("click"), i.removeClass("upload-drag-file-over"), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Drop")
                        },
                        dragEnter: function(e) {
                            $(e.currentTarget).addClass("upload-drag-file-over"), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Drag-Enter")
                        },
                        dragOver: function(e) {
                            $(e.currentTarget).addClass("upload-drag-file-over"), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Drag-Over")
                        },
                        dragLeave: function(e) {
                            $(e.currentTarget).removeClass("upload-drag-file-over"), Airdroid.Util.trackEvent("W-AirTransport", "Upload", "Drag-Leave")
                        },
                        beforeLoad: function() {
                            e.showLoadingMask()
                        },
                        afterLoad: function() {
                            e.removeLoadingMask()
                        }
                    },
                    flash: {
                        param: {},
                        buttonWidth: t.fileUploadWidth,
                        buttonHeight: t.fileUploadHeight,
                        file_types: t.fileType,
                        file_types_description: "files",
                        button_placeholder_id: t.fileUploadBtnId,
                        beforeInit: function() {}
                    }
                });
                return i
            };
        e._jsUploader = r(o), e.util.browser.chrome && "file" == o.model && (e._jsUploader.supportFolderUpload = !0, e._jsUploader.folderUploadBtnParentElement = e._refDOM.find(".widget-airTransport-folder-upload").removeClass("disabled").removeAttr("title")), e._appJsUploader = r(a)
    },
    uploadError: function(e, t, i) {
        var n = this;
        t ? n.onError(e, i) : n.onError("", i)
    },
    beforeCheck: function(e, t) {
        var i = this;
        if (_.isArray(e.supportTypes)) {
            var n = i.util.getFileExt(t.name);
            if (-1 == _.indexOf(e.supportTypes, n)) return !1
        }
        return console.log("start load next file"), !0
    },
    getUploadingCon: function(e) {
        var t = this,
            i = t.getUploadItemByFileId(e).parents(".widget-airTransport-item");
        return i.find(".widget-airTransport-Drag-item")
    },
    showCurrentUploadItem: function(e, t) {
        var i = this,
            n = i.getUploadingCon(e),
            o = i.getUploadItemByFileId(e);
        if (o.length > 0) {
            o.attr("status", "1").hide();
            var a = o.parents(".widget-airTransport-item").attr("m");
            i.resizeCon(a), n.siblings(".widget-airTransport-Drag-tip").hide();
            var r = $(Airdroid.Util.getTemplate("widget/airtransport", "uploading_item", {
                filename: t,
                common: i.util.getLang("Common")
            })).attr("fileId", e).find(".widget-airTransport-uploadingCancel").click(function() {
                i.cancelUpload(e, $(this).parents(".widget-airTransport-uploadingItem").attr("status")), i.showNextUploadItem(a), ("file" == a && 0 == i.file_list.find('.widget-airTransport-uploadItem[status!="4"]').length || "app" == a && 0 == i.app_list.find('.widget-airTransport-uploadItem[status!="4"]').length) && i.finishAll(a)
            }).end();
            n.html(r)
        }
    },
    resetDragCon: function(e) {
        var t = this;
        "file" == e ? (Airdroid.Util.isSupportXHR() && !Airdroid.Util.browser.ie10 && t.file_input.find(".widget-airTransport-Drag-tip").show(), t.file_input.find(".widget-airTransport-Drag-item").html("")) : "app" == e && (Airdroid.Util.isSupportXHR() && !Airdroid.Util.browser.ie10 && t.app_input.find(".widget-airTransport-Drag-tip").show(), t.app_input.find(".widget-airTransport-Drag-item").html(""), t.app_input.find(".widget-airTransport-proceed").hide())
    },
    clearCurrentUploadItem: function(e) {
        var t = this,
            i = t.getUploadingCon(e);
        i.html("")
    },
    showNextUploadItem: function(e) {
        var t = this;
        if ("file" == e) var i = t.file_list;
        else {
            if ("app" != e) return !1;
            var i = t.app_list
        }
        var n = i.find(".widget-airTransport-uploadItem[status='0']:first");
        n.length > 0 && t.showCurrentUploadItem(n.attr("fileId"), n.find(".widget-airTransport-fileName").html())
    },
    showCurrentUploadProgress: function(e, t) {
        var i = this,
            n = i.getUploadItemByFileId(e),
            o = n.parents(".widget-airTransport-item").find(".widget-airTransport-uploadingItem");
        if (o.attr("fileId") == e) {
            var a = o.parents(".widget-airTransport-Drag-input").width(),
                r = Math.round(t / 100 * a);
            o.attr("status", 1).find(".widget-airTransport-uploadingProgress").animate({
                width: r + "px"
            }, {
                queue: !1,
                duration: 300
            }).end().find(".widget-airTransport-uploadingSpeed").html(t + "%").end().find(".widget-airTransport-uploadingStatus").show()
        } else "4" != n.attr("status") && i.showCurrentUploadItem(e, n.find(".widget-airTransport-fileName").html())
    },
    resizeList: function(e, t) {
        var i = this;
        "file" == e ? (i.file_list.find(".widget-airTransport-uploadItem:visible").length > 0 ? i.file_input.css("margin-bottom", "6px") : i.file_input.css("margin-bottom", "0px"), t && i.file_input.css("margin-bottom", "0px")) : "app" == e && (i.app_list.find(".widget-airTransport-uploadItem:visible").length > 0 ? i.app_input.css("margin-bottom", "6px") : i.app_input.css("margin-bottom", "0px"), t && i.app_input.css("margin-bottom", "0px"))
    },
    resizeWidget: function() {
        var e = this,
            t = e._refDOM.height();
        e.setBodyHeight(t), e._refDOM.parents(".widget-content").css("height", t)
    },
    startRunning: function() {
        var e = this,
            t = 225 - $(".widget-airTransport-file-path .upload-to").width();
        $(".widget-airTransport-file-path .value", e._refDOM).width(t).css("max-width", t + "px"), e._refDOM.find(".widget-airTransport-tab").click(function() {
            var t = $(this).attr("m");
            $(this).hasClass("active") ? ($(this).removeClass("active"), e._refDOM.find(".widget-airTransport-item[m='" + t + "']").addClass("is-hide"), "" != e._currentTab && e._up.removeClass("widget-airTransport-up-" + e._currentTab), e._up.hide(), e._currentTab = "") : ("" != e._currentTab ? e._up.removeClass("widget-airTransport-up-" + e._currentTab) : e._up.show(), e._up.addClass("widget-airTransport-up-" + t), e._refDOM.find(".widget-airTransport-tab").removeClass("active"), $(this).addClass("active"), e._refDOM.find(".widget-airTransport-item").addClass("is-hide"), e._refDOM.find(".widget-airTransport-item[m='" + t + "']").removeClass("is-hide"), e.isApp = "app" == t ? !0 : !1, e._currentTab = t, "file" != t || e._isFileUploading ? "app" != t || e._isAppUploading || e.app_tab.find(".widget-airTransport-tab-count").hasClass("error") || e.app_item.find(".widget-airTransport-result").hide() : e.file_tab.find(".widget-airTransport-tab-count").hasClass("error") || e.file_item.find(".widget-airTransport-result").hide(), ("file" == t || "app" == t) && e.resizeCon(t)), e.resizeWidget(), "file" == t ? Airdroid.Util.trackEvent("W-AirTransport", "file") : (t = "url") ? Airdroid.Util.trackEvent("W-AirTransport", "url") : (t = "clipboard") ? Airdroid.Util.trackEvent("W-AirTransport", "clipboard") : (t = "app") && Airdroid.Util.trackEvent("W-AirTransport", "app")
        }), e._refDOM.find(".widget-airTransport-clearError").click(function() {
            var t = $(this).parents(".widget-airTransport-item").attr("m");
            "file" == t ? (e.file_list.html(""), e.file_tab.find(".widget-airTransport-tab-count").removeClass("error").hide(), e.file_item.find(".widget-airTransport-result").hide()) : "app" == t && (e.app_list.html(""), e.app_tab.find(".widget-airTransport-tab-count").removeClass("error").hide(), Airdroid.Util.isSupportXHR() && !Airdroid.Util.browser.ie10 && e.app_input.find(".widget-airTransport-Drag-tip").show(), e.app_item.find(".widget-airTransport-result").hide(), e.app_item.find(".widget-airTransport-proceed").hide()), e.resizeCon(t), $(this).hide()
        }), e._refDOM.find(".widget-airTransport-proIcon").click(function() {
            e.resetDragCon("app")
        }), e._refDOM.find(".widget-airTransport-reinstall").click(function() {
            e._lastAppPath && Airdroid.Service.reinstallApp(e._lastAppPath, function(t) {
                t && t.result && 1 == t.result && Airdroid.Util.showDelayMsg(e._refDOM.find(".widget-airTransport-proceed"), Airdroid.Util.getLang("Applications", "Message_ReinstallStartSuc"))
            }, function() {})
        }), this.url_clear.click(function() {
            e.url_input.val(""), $(this).hide()
        }), this.url_input.keyup(function(t) {
            "" != $(this).val() ? e.url_clear.show() : e.url_clear.hide(), t.shiftKey || 13 != t.keyCode || e.DoSearch($(this).val())
        }), this.url_btn.click(function() {
            e.DoSearch(e.url_input.val()), Airdroid.Util.trackEvent("W-AirTransport", "UrlOpen")
        }), this.clip_read.click(function() {
            e.ReadClipboardFromPhone(), Airdroid.Util.trackEvent("W-AirTransport", "Clipboard", "Refresh")
        }), this.clip_push.click(function() {
            e.PushContentToPhoneMemory(e.clip_input.val()), Airdroid.Util.trackEvent("W-AirTransport", "Clipboard", "Save")
        }), this.ReadClipboardFromPhone(), e.getUploader(), this._refDOM.find(".widget-airTransport-file-path .value").click(function() {
            var t = Airdroid.AppManage.getAppConfigById(Airdroid.Config.dependApps.Files, "appId"),
                i = jQuery.extend(!0, {}, t),
                n = $.extend(i.opts, {
                    multi: "1"
                });
            return i = $.extend(i, {
                id: "999",
                appId: "999",
                data: {
                    linkpath: e.file_dir
                },
                opts: n
            }), Airdroid.DesktopManage._currentDesktop._windowManage.createApp(i, {}), !1
        }), this._refDOM.find(".widget-airTransport-file-path .change").click(function() {
            return e.util.chooseFilePathDialog({
                root: "/sdcard",
                root_name: Airdroid.UsedLang.Filemanage.SDCard_Directory,
                cat: "sd",
                callback: function(t) {
                    var i = $(".widget-airTransport-file-path .value");
                    if (i.length && i.text(t) && i.attr("title", t), -1 != Airdroid.DeviceManage.getCurrentDeviceId()) {
                        var n = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.airTransportUploadPath.name);
                        _.isObject(n) || (n = {}), e.file_dir = t, n[Airdroid.DeviceManage.getCurrentDeviceId()] = t, Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.airTransportUploadPath.name, n), e._jsUploader.setFilePath(t)
                    }
                    i = null
                },
                title: e._common.change_path,
                type: "path",
                def: e.file_dir,
                plholder: e._common.click_to_choose_path
            }), !1
        })
    }
});