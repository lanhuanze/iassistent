/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/mod/filetree/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += '<ul cat="' + (null == (__t = cat) ? "" : __t) + '">\r\n    <li>\r\n        <div class="tree-root leaf" depth="0" absrc="' + (null == (__t = root_path) ? "" : __t) + '" fm="' + (null == (__t = fm) ? "" : __t) + '">\r\n            <img class="collapse-off" src="' + (null == (__t = bg_blank_img) ? "" : __t) + '" />\r\n            <img class="dir" src="' + (null == (__t = bg_blank_img) ? "" : __t) + '" />\r\n            <span>' + __e(tree_root_name) + "</span>\r\n        </div>\r\n    </li>\r\n</ul>";
    return __p
};
this.ajst["views/mod/filetree/leaf.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<li>\r\n    <div class="leaf" absrc="' + (null == (__t = absrc) ? "" : __t) + '" extname="dir" depth="' + (null == (__t = treeDepth) ? "" : __t) + '" fm="' + (null == (__t = fm) ? "" : __t) + '">\r\n        <img src="' + (null == (__t = blankImg) ? "" : __t) + '" class="' + (null == (__t = hasChild ? "collapse-off" : "expand-empty") ? "" : __t) + '" style="margin-left:' + (null == (__t = 10 * treeDepth) ? "" : __t) + 'px;"/>\r\n        <img src="' + (null == (__t = blankImg) ? "" : __t) + '" class="dir"/>\r\n        <span>' + (null == (__t = name) ? "" : __t) + "</span>\r\n    </div>\r\n</li>";
    return __p
};
Airdroid.Module.FileTree = Core.extend(Airdroid.Base, {
    _treeDom: null,
    _slideSpeed: 150,
    _treeRootLeafDom: null,
    _contextmenuOpts: null,
    _dragOpts: null,
    _dropOpts: null,
    _curCat: "sd",
    EventTypes: {
        on_leaf_click: "on_leaf_click",
        on_leaf_collapse: "on_leaf_collapse",
        on_leaf_expand: "on_leaf_expand"
    },
    _construct: function() {
        this._lang = this.util.getLang("Filemanage"), this._common = this.util.getLang("Common")
    },
    createTreeView: function(e) {
        var t, i, n, o = this;
        return o._tmp_treeDom = $(this.util.getTemplate("mod/filetree", "index", e)), o._treeRootLeafDom = o._tmp_treeDom.find(".tree-root"), o._dragOpts = e.dragOpts, o._dropOpts = e.dropOpts, o._contextmenuOpts = e.contextmenuOpts, i = e.cat, t = e.expended, n = e.notSupportCallBack, o._contextmenuOpts && (o._contextmenuOpts.onContextClick = function() {
            console.log("，tree"), Airdroid.Util.trackEvent("M-File", "ContextMenu", "Tree")
        }, o._contextmenuOpts.getEventData = function(e, t) {
            return [{
                absrc: t.attr("absrc"),
                extname: "dir",
                name: t.find("span").html()
            }]
        }), o.openTreeNode(o._treeRootLeafDom, t, i, n), o._tmp_treeDom
    },
    refreshNode: function(e, t) {
        var i, n, o, a = this;
        i = this._treeDom.find("div[absrc='" + e + "']"), 0 != i.length && i.each(function() {
            o = $(this), o.siblings("ul").remove(), n = o.parents("ul").attr("cat"), a.openTreeNode(o, a._curCat == n || t, n)
        })
    },
    openTreeNode: function(e, t, i, n) {
        var o, a = this;
        if (t = t !== !1, o = e.next("ul:first"), o.length > 0) this.toggleExpendNode(o, e);
        else {
            if (this.isNodeLoading(e)) return;
            this.setNodeLoading(e), Airdroid.Service.listFolderTree({
                cur_path: e.attr("absrc")
            }, function(o) {
                o.err ? a.showDelayMsg(a._lang.Msg_LoadFileTreeError, !0) : o.cur_path && a.showNode(e, o.cur_path, o.list, t, i, o.fm), 0 == o.fm && n && n()
            }, $.noop)
        }
    },
    showNode: function(e, t, i, n, o) {
        i = i || [];
        var a, r, s, l, d, c, u = Airdroid.Service.getImgAssets("feature/bg_blank.gif"),
            p = this;
        return s = e.children("img:first"), s.removeClass(), e.attr("expandSta", "expand"), 1 > i.length ? (s.addClass("expand-empty").unbind(), e.children("img:eq(1)").removeClass().addClass("dir-empty"), e.unbind("dblclick"), p.changeTreeNode(e, !1), void 0) : (e.children("img:eq(1)").removeClass().addClass("dir"), p.changeLoadingFlag(s), p.changeTreeNode(e, !0), r = parseInt(e.attr("depth")) + 1, a = e.next("ul"), 1 > a.length && (a = $('<ul cat="' + o + '">'), a.insertAfter(e)), _.each(i, function(e) {
            l = $(p.util.getTemplate("mod/filetree", "leaf", {
                name: e.name,
                absrc: t + e.name,
                hasChild: e.subdir > 0,
                fm: e.fm,
                blankImg: u,
                treeDepth: r
            })), d = l.find(".leaf"), c = l.find("img:first"), e.subdir ? (p.changeLoadingFlag(c), p.changeTreeNode(d, !0)) : p.changeTreeNode(d, !1), l.appendTo(a)
        }), n ? (a.hide().slideDown(p._slideSpeed, function() {
            p.fireEvent(p.EventTypes.on_leaf_expand, {})
        }), s.addClass("expand-off")) : (a.hide(), s.addClass("collapse-off"), s.parent().attr("expandsta", "collapse")), void 0)
    },
    toggleExpendNode: function(e, t) {
        "none" == e.css("display") ? this.expendNode(e, t) : this.collapseNode(e, t)
    },
    expendNode: function(e, t) {
        var i = this;
        e.slideDown(i._slideSpeed, function() {
            i.fireEvent(i.EventTypes.on_leaf_expand, {})
        }), t.find("img:first").removeClass().addClass("expand-off"), t.attr("expandSta", "expand")
    },
    collapseNode: function(e, t) {
        var i = this;
        e.slideUp(i._slideSpeed, function() {
            i.fireEvent(i.EventTypes.on_leaf_collapse, {})
        }), t.find("img:first").removeClass().addClass("collapse-off"), t.attr("expandSta", "collapse")
    },
    isNodeLoading: function(e) {
        return e.children("img:first").hasClass("tree-loading")
    },
    setNodeLoading: function(e) {
        e.children("img:first").removeClass().addClass("tree-loading")
    },
    getChildDom: function(e) {
        return this._treeDom.find("ul[cat='" + this._curCat + "']").find("div[absrc='" + e + "']")
    },
    setSelectedNode: function(e) {
        this._treeDom.find(".ui-selected").removeClass("ui-selected"), this.getChildDom(e).addClass("ui-selected")
    },
    changeLoadingFlag: function(e) {
        var t = this;
        e.unbind("mouseover").bind("mouseover", function() {
            var e = $(this).parent("div").attr("expandSta") || "collapse";
            $(this).removeClass().addClass(e + "-on")
        }), e.unbind("mouseout").bind("mouseout", function() {
            var e = $(this).parent("div").attr("expandSta") || "collapse";
            $(this).removeClass().addClass(e + "-off")
        }), e.unbind("click").bind("click", function(e) {
            var i = $(this).parent("div");
            t.openTreeNode(i, !0, i.parents("ul").attr("cat")), t.util.cancelEventBubble(e), t.util.clearContextMenu()
        })
    },
    changeTreeNode: function(e, t) {
        var i = this;
        null == i._dragOpts || e.hasClass("tree-root") || e.draggable(i._dragOpts), null != i._dropOpts && (e.droppable(i._dropOpts), e.each(function() {
            var e = $(this);
            e.data("file_details", {
                absrc: e.attr("absrc"),
                extname: "dir",
                fileType: "Folder",
                fm: e.attr("fm"),
                name: e.find("span").html()
            })
        })), e.attr("absrc") != i._treeRootLeafDom.attr("absrc") && null != i._contextmenuOpts && e.context_Menu(i._contextmenuOpts), e.unbind("click").bind("click", function() {
            var t = e.parents("ul").attr("cat");
            i.fireEvent(i.EventTypes.on_leaf_click, {
                openTreeNode: !0,
                extname: "dir",
                absrc: $(this).attr("absrc"),
                cur_path: $(this).attr("absrc"),
                fm: $(this).attr("fm"),
                name: $(this).find("span").html(),
                type: 1,
                imgsrc: Airdroid.Service.getImgAssets("file/grid_dir.png"),
                isTosys: i.isToSys(t),
                isToExt: i.isToExt(t)
            }), i._curCat = t, i.util.clearContextMenu()
        }), t && e.unbind("dblclick").bind("dblclick", function() {
            var e = $(this),
                t = e.parents("ul").attr("cat");
            i.openTreeNode(e, !0, i._curCat), i.fireEvent(i.EventTypes.on_leaf_click, {
                openTreeNode: !0,
                extname: "dir",
                absrc: e.attr("absrc"),
                cur_path: e.attr("absrc"),
                fm: e.attr("fm"),
                name: e.find("span").html(),
                type: 1,
                imgsrc: Airdroid.Service.getImgAssets("file/grid_dir.png"),
                isTosys: i.isToSys(t),
                isToExt: i.isToExt(t)
            }), i._curCat = t, i.util.clearContextMenu()
        })
    },
    isToSys: function(e) {
        return "system" == e && "system" != this._curCat
    },
    isToExt: function(e) {
        return "user-exsd" == e && "user-exsd" != self._curCat || "exsd" == e && "exsd" != self._curCat
    },
    setTreeDom: function(e) {
        this._treeDom = e
    },
    getCurrentTreeCat: function() {
        return this._curCat
    },
    setCurCat: function(e) {
        var t = this;
        t._curCat = e
    }
});
