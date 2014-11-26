/**
 * Created by cwr.Yingsheng.Feng on 2014.11.23 0023.
 */
this.ajst["views/sys/desktop/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="layout-desktop-container" index="' + (null == (__t = desktop_index) ? "" : __t) + '">\r\n    <div class="desktop-switch-mask" index="' + (null == (__t = desktop_index) ? "" : __t) + '" nindex="' + (null == (__t = index) ? "" : __t) + '">\r\n        <div class="desktop-switch-indextext">' + (null == (__t = index) ? "" : __t) + "</div>\r\n    </div>\r\n </div>";
    return __p
};
this.ajst["views/sys/desktop/icon.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += '<div class="desktopicon" title="' + __e(desktop_icon_title) + '">\r\n    <img src="' + (null == (__t = desktop_icon_src) ? "" : __t) + '"/>\r\n    <div class="desktopicon_title">\r\n        <div class="l">' + __e(desktop_icon_title) + '</div><div class="r"></div>\r\n    </div>\r\n    <div class="desktopicon_count is-hide">0</div>\r\n    <div class="desktopicon_tinyicon is-hide"></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/desktop/addicon_item.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="desktopAddIcon">\r\n    <img src="' + (null == (__t = desktop_addIcon_src) ? "" : __t) + '"/>\r\n    <span>' + (null == (__t = desktop_addIcon_title) ? "" : __t) + "</span>\r\n</div>";
    return __p
};
this.ajst["views/sys/desktop/add_url_dialog.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="add-url-dialog-content">\r\n    <div id="alert_box_input_icon">\r\n        <div class="img-add-url"></div>\r\n        <div class="target-url-favicon"></div>\r\n    </div>\r\n    <div id="alert_box_inputBody">\r\n        <div id="alert_box_inputTitle">' + (null == (__t = lang.input_site_name_and_url_please) ? "" : __t) + '</div>\r\n        <input class="input-name" type="text" placeholder="' + (null == (__t = lang.Label_NameColumn) ? "" : __t) + '"/>\r\n        <input class="input-url" type="text" placeholder="' + (null == (__t = airTransportLang.Url) ? "" : __t) + '"/>\r\n        <div id="alert_box_input_tipCon">\r\n            <div class="icon-input-tip"></div>\r\n            <div id="alert_box_input_tip"></div>\r\n        </div>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/desktop/contact_hover.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="desktop-contact-actionCon">\r\n    <div class="over-ellipsis desktop-contact-actionName">\r\n        ' + (null == (__t = name) ? "" : __t) + '\r\n    </div>\r\n    <div class="over-ellipsis desktop-contact-actionNumber">\r\n        ' + (null == (__t = number) ? "" : __t) + '\r\n    </div>\r\n    <div class="desktop-contact-actionAction">\r\n        <i class="icon-calllog" title="' + (null == (__t = common.Call_Out) ? "" : __t) + '"></i>\r\n        <i class="icon-chat" title="' + (null == (__t = common.Send_Message) ? "" : __t) + '"></i>\r\n    </div>\r\n</div>';
    return __p
};
this.ajst["views/sys/sys_call_multicontact.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<ul class="tpl-call-multiContact" delay="0">\r\n    ', _.each(list, function(e) {
        __p += '\r\n    <li class="tpl-call-multiItem">\r\n        <a>' + (null == (__t = e) ? "" : __t) + "</a>\r\n    </li>\r\n    "
    }), __p += "\r\n</ul>";
    return __p
};
this.ajst["views/sys/dashboard/add_btn.htm"] = function(obj) {
    obj || (obj = {});
    var __p = "";
    with(_.escape, obj) __p += '<a class="sys-dashboard-addBtn">+</a>';
    return __p
};
this.ajst["views/sys/dashboard/widget_panel.htm"] = function(obj) {
    obj || (obj = {});
    var __p = "";
    with(_.escape, obj) __p += '<div class="sys-dashboard-widgetPanel"></div>';
    return __p
};
this.ajst["views/sys/dashboard/widget_icon.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += '<div class="widget-icon" title="' + __e(desktop_icon_title) + '">\r\n    <img src="' + (null == (__t = desktop_icon_src) ? "" : __t) + '"/>\r\n    <div class="desktopicon_title">\r\n        <div class="l">' + __e(desktop_icon_title) + '</div><div class="r"></div>\r\n    </div>\r\n    <div class="desktopicon_count is-hide">0</div>\r\n    <div class="desktopicon_tinyicon is-hide"></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/taskbar/index.htm"] = function(obj) {
    obj || (obj = {});
    var __p = "";
    with(_.escape, obj) __p += '<div  class="block-taskbar">\r\n    <div class="layout-taskbar-container"></div>\r\n    <div class="layout-notify-container">\r\n        <div class="device-status layout-taskbar-connect-model"><div class="connect-status"></div></div>\r\n        <div class="device-status layout-taskbar-wifi wifi layout-taskbar-hidden"></div>\r\n        <div  class="device-status layout-taskbar-signal signal0 layout-taskbar-hidden"><div class="layout-taskbar-signal-3G hide"></div></div>\r\n        <div  class="device-status layout-taskbar-battery i-taskbar-battery layout-taskbar-hidden">\r\n            <div class="layout-taskbar-battery-v i-taskbar-battery-v">0%</div>\r\n            <div  class="layout-taskbar-battery-vbg i-taskbar-battery-vbg"></div>\r\n        </div>\r\n    </div>\r\n</div>';
    return __p
};
this.ajst["views/sys/lite2web_tip.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div id="controlLooper" class="looper slide lite2web_tip">\r\n    <div class="looper-inner">\r\n        <div class="item active">\r\n            <img src="' + (null == (__t = items[0].img) ? "" : __t) + '">\r\n            <h2>' + (null == (__t = items[0].title) ? "" : __t) + "</h2>\r\n            <p>" + (null == (__t = items[0].desc) ? "" : __t) + '</p>\r\n            <a class="btn btn-primary" href="http://web.airdroid.com" target="_blank">Start Web AirDroid</a>\r\n        </div>\r\n        <div class="item">\r\n            <img src="' + (null == (__t = items[1].img) ? "" : __t) + '">\r\n            <h2>' + (null == (__t = items[1].title) ? "" : __t) + "</h2>\r\n\r\n\r\n            <p>" + (null == (__t = items[1].desc) ? "" : __t) + '</p>\r\n            <a class="btn btn-primary" href="http://web.airdroid.com" target="_blank">Start Web AirDroid</a>\r\n        </div>\r\n        <div class="item">\r\n            <img src="' + (null == (__t = items[2].img) ? "" : __t) + '">\r\n            <h2>' + (null == (__t = items[2].title) ? "" : __t) + "</h2>\r\n            <p>" + (null == (__t = items[2].desc) ? "" : __t) + '</p>\r\n            <a class="btn btn-primary" href="http://web.airdroid.com" target="_blank">Start Web AirDroid</a>\r\n        </div>\r\n        <div class="item">\r\n            <img src="' + (null == (__t = items[3].img) ? "" : __t) + '">\r\n            <h2>' + (null == (__t = items[3].title) ? "" : __t) + "</h2>\r\n            <p>" + (null == (__t = items[3].desc) ? "" : __t) + '</p>\r\n            <a class="btn btn-primary" href="http://web.airdroid.com" target="_blank">Start Web AirDroid</a>\r\n        </div>\r\n    </div>\r\n    <nav>\r\n        <ul class="looper-nav">\r\n            <li><a class="cur" href="#controlLooper" data-looper="to" data-args="1">&bull;</a></li>\r\n            <li><a href="#controlLooper" data-looper="to" data-args="2">&bull;</a></li>\r\n            <li><a href="#controlLooper" data-looper="to" data-args="3">&bull;</a></li>\r\n            <li><a href="#controlLooper" data-looper="to" data-args="4">&bull;</a></li>\r\n        </ul>\r\n    </nav>\r\n</div>';
    return __p
};
this.ajst["views/sys/taskbar/taskbar_item.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="task-item"  title="' + (null == (__t = task_title) ? "" : __t) + '">\r\n    <img src="' + (null == (__t = task_icon) ? "" : __t) + ' ">\r\n    <span>' + (null == (__t = task_name) ? "" : __t) + "</span>\r\n</div>";
    return __p
};
this.ajst["views/sys/taskbar/notify_icon.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="notify-icon notify-icon-app ' + (null == (__t = className) ? "" : __t) + '"  title="' + (null == (__t = title) ? "" : __t) + '">\r\n    <img src="' + (null == (__t = iconUrl) ? "" : __t) + ' ">\r\n</div>';
    return __p
};
this.ajst["views/sys/navbar.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="block-topNav">\r\n    <div class="nav">\r\n        <div class="about"><div class="robote"></div></div>\r\n        <div class="nav-search">\r\n            <input type="text" class="NV_Input_Search" placeholder="' + (null == (__t = Common.InputDefaultText_Search) ? "" : __t) + '">\r\n            <div class="NV_Icon_Input_Search icon-search"></div>\r\n            <div class="NV_Icon_Switch_Search">\r\n                <div class="NV_Icon_Preview googleplay" name="Google Play" format="https://play.google.com/store/search?q={0}"></div>\r\n                <div class="NV_Icon_Preview_Suffix"></div>\r\n            </div>\r\n            <div class="clearfix"></div>\r\n        </div>\r\n        <div class="nav-oprate">\r\n            <div class="dashboard" menu="dashboard" title="' + (null == (__t = Common.NavBar_Dashboard) ? "" : __t) + '"></div>\r\n            <div class="switch" menu="switch" title="' + (null == (__t = Common.NavBar_MultipleDesktops) ? "" : __t) + '"></div>\r\n            <div class="theme" menu="theme" title="' + (null == (__t = Common.NavBar_MultipleDesktops) ? "" : __t) + '"></div>\r\n            <div class="msg" menu="msg" title="' + (null == (__t = Common.NavBar_NewMessage) ? "" : __t) + '"></div>\r\n            <div class="call" menu="call" title="' + (null == (__t = Common.TipText_Call) ? "" : __t) + '"></div>\r\n            <div class="placard" menu="placard" title="' + (null == (__t = Common.placard) ? "" : __t) + '"><div class="placard-count"></div></div>\r\n            <div class="multidevice" menu="multidevice" title="' + (null == (__t = Common.switch_device_label) ? "" : __t) + '"></div>\r\n            <div class="usercenter" menu="usercenter" title="' + (null == (__t = Common.NavBar_Setting) ? "" : __t) + '"></div>\r\n            <div class="language" menu="language" title="' + (null == (__t = Common.Languages) ? "" : __t) + '"></div>\r\n            <div class="splite"></div>\r\n            <div class="logout" title="' + (null == (__t = Common.Logout) ? "" : __t) + '"><span></span></div>\r\n        </div>\r\n    </div>\r\n    <div class="NV_Search_Menu is-hide">\r\n        <a menu="googleplay" class="NV_Search_Menu_Item" format=""><span class="googleplay"></span>Google Play</a>\r\n        <a menu="quixey" class="NV_Search_Menu_Item" format=""><span class="quixey"></span>Quixey</a>\r\n    </div>\r\n</div>';
    return __p
};
this.ajst["views/sys/sys_about_us.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="about-us">\r\n    <div class="meta">\r\n        <div class="about-us-logo"></div>\r\n        <div class="au_version">' + (null == (__t = Version) ? "" : __t) + '</div>\r\n        <div class="link">\r\n            <p><a target="_blank" href="http://www.airdroid.com">www.airdroid.com</a>&nbsp;&nbsp;&nbsp;</p>\r\n            <!--<p>' + (null == (__t = UsedLang.Label_Help) ? "" : __t) + '</p>-->\r\n        </div>\r\n    </div>\r\n    <marquee direction="up" loop="true" scrollamount="2" onmouseover="this.stop()" onmouseout="this.start()">' + (null == (__t = UsedLang.VScrollText_Main) ? "" : __t) + '</marquee>\r\n    <div class="social">\r\n        <a class="icon-facebook" target="_blank" tabname="Facebook" href="' + (null == (__t = UsedLang.Url_Facebook) ? "" : __t) + '"></a>\r\n        <a class="icon-twitter" target="_blank" tabname="Twitter" href="' + (null == (__t = UsedLang.Url_Twitter) ? "" : __t) + '"></a>\r\n        <a class="icon-youtube" target="_blank" tabname="Youtube" href="' + (null == (__t = UsedLang.Url_Youtube) ? "" : __t) + '"></a>\r\n        <a class="icon-tumblr" target="_blank" tabname="Tumblr" href="' + (null == (__t = UsedLang.Url_Tumblr) ? "" : __t) + '"></a>\r\n        <a class="icon-googleplus" target="_blank" tabname="Google+" href="' + (null == (__t = UsedLang.Url_Googleplus) ? "" : __t) + '"></a>\r\n    </div>\r\n    <div class="copyright">' + (null == (__t = UsedLang.Label_Copyright) ? "" : __t) + '</div>\r\n    <div class="icon-close closeBTN"></div>\r\n</div>';
    return __p
};
this.ajst["views/widget/overage.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<div class="overage">\r\n    <div class="overage-img"></div>\r\n    ', __p += isPremiun ? '\r\n    <div class="tip">' + (null == (__t = lang.Premium_User_Overage_Tip) ? "" : __t) + "</div>\r\n    " : '\r\n    <div class="tip">' + (null == (__t = lang.Free_User_Overage_Tip) ? "" : __t) + "</div>\r\n    ", __p += "\r\n</div>";
    return __p
};
this.ajst["views/sys/select_device/select.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<div class="select-device">\r\n    <div class="select-device-page active" data-page="1">\r\n        <div class="select-device-main">\r\n            <div class="select-device-title">' + (null == (__t = common.select_your_device) ? "" : __t) + '</div>\r\n            <div class="select-device-list">\r\n                <div class="select-device-move select-device-movePre hide">\r\n                    <div></div>\r\n                </div>\r\n                <div class="i-height100p select-device-listCon" data-length="' + (null == (__t = devicelist.length) ? "" : __t) + '">\r\n                    <div class="i-float-left select-device-listBody">\r\n                        ', _.each(devicelist, function(e, t) {
        __p += '\r\n                        <div style="display:inline-block;width:' + (null == (__t = itemWidth) ? "" : __t) + 'px">\r\n                            <div class="select-device-item ', 0 === t && (__p += "active"), __p += '" data-index="' + (null == (__t = t) ? "" : __t) + '" data-did ="' + (null == (__t = e.id) ? "" : __t) + '">\r\n                                <div class="select-device-img">\r\n                                    <img src="' + (null == (__t = e.model_pic) ? "" : __t) + '-s.png" onerror="javascript:this.src=\'' + (null == (__t = Airdroid.DeviceManage.getDefaultPhoneImage()) ? "" : __t) + '\';this.onerror = null;"/>\r\n                                </div>\r\n                                <div class="select-device-manu over-ellipsis">' + (null == (__t = Airdroid.DeviceManage.getDeviceName(e)) ? "" : __t) + "</div>\r\n                            </div>\r\n                        </div>\r\n                        "
    }), __p += "\r\n                        ", showAddIcon && (__p += '\r\n                        <div style="display:inline-block;width:' + (null == (__t = itemWidth) ? "" : __t) + 'px">\r\n                            <div class="select-device-premium-addEmptyCon">\r\n                                <div>\r\n                                    <img src="' + (null == (__t = deviceAddSrc) ? "" : __t) + '" />\r\n                                </div>\r\n                                <p class="over-ellipsis" >' + (null == (__t = common.add_more_devices) ? "" : __t) + "</p>\r\n                            </div>\r\n                        </div>\r\n                        "), __p += '\r\n                    </div>\r\n                </div>\r\n                <div class="select-device-move select-device-moveNext hide">\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="select-device-bottomCon" class="ui-actions is-border-boxing">\r\n            ', showAddIcon && 1 === devicelist.length || (__p += '\r\n            <div class="select-device-bottomLeft">\r\n                <div class="i-float-left i-cursor-hand select-device-defaultCon">\r\n                    <div class="checkbox" check="0"></div>\r\n                    <div class="over-ellipsis i-float-left ml10" title="' + (null == (__t = common.select_default_device_tip) ? "" : __t) + '">' + (null == (__t = common.select_default_device_tip) ? "" : __t) + "</div>\r\n                </div>\r\n            </div>\r\n            <div class='btn btn-primary select-device-ok' tabindex=\"-1\">" + (null == (__t = common.Button_Ok) ? "" : __t) + "</div>\r\n            "), __p += "\r\n            <div class='btn select-device-cancel' tabindex=\"-1\">" + (null == (__t = common.Button_Cancel) ? "" : __t) + "</div>\r\n        </div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/select_device/connect.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="select-device-page" data-page="2">\r\n    <div class="select-device-main">\r\n        <div class="select-device-conCon">\r\n            <div class="select-device-conTip"></div>\r\n            <div class="select-device-conLoading"></div>\r\n        </div>\r\n    </div>\r\n    <div class="select-device-bottomCon" class="ui-actions is-border-boxing">\r\n        <div class="select-device-bottomLeft">\r\n            <div class="btn select-device-back">< ' + (null == (__t = common.switch_device_label) ? "" : __t) + "</div>\r\n        </div>\r\n        <div class='btn select-device-cancel' tabindex=\"-1\">" + (null == (__t = common.Button_Cancel) ? "" : __t) + "</div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/select_device/fail.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="select-device-page" data-page="3">\r\n    <div class="select-device-main">\r\n        <div class="select-device-failCon">\r\n            <div class="select-device-failImgCon">\r\n                <div class="select-device-img">\r\n                    <img src="' + (null == (__t = deviceObj.getDeiveImg(!1)) ? "" : __t) + '" onerror="javascript:this.src=\'' + (null == (__t = Airdroid.DeviceManage.getDefaultPhoneImage()) ? "" : __t) + '\';this.onerror = null;"/>\r\n                </div>\r\n                <div class="over-ellipsis select-device-manu">' + (null == (__t = deviceObj.getName()) ? "" : __t) + '</div>\r\n            </div>\r\n            <div class="select-device-failDesCon">\r\n                <div>' + (null == (__t = LoginLang.Msg_Srv_Unavailable) ? "" : __t) + "</div>\r\n                <ul>\r\n                    <li>" + (null == (__t = LoginLang.Msg_Srv_Unavailable_1) ? "" : __t) + "</li>\r\n                    <li>" + (null == (__t = LoginLang.Msg_Srv_Unavailable_2) ? "" : __t) + "</li>\r\n                    <li>" + (null == (__t = common.Msg_Srv_Unavailable_3) ? "" : __t) + '</li>\r\n                </ul>\r\n                <p><a target="_blank" href="http://help.airdroid.com/customer/portal/articles/1369133-failed-to-connect-to-device">' + (null == (__t = common.ConnFAQ) ? "" : __t) + '</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="select-device-bottomCon" class="ui-actions is-border-boxing">\r\n        <div class="select-device-bottomLeft">\r\n            <div class="btn select-device-back">< ' + (null == (__t = common.switch_device_label) ? "" : __t) + "</div>\r\n        </div>\r\n        <div class='btn btn-primary select-device-reConnect' tabindex=\"-1\">" + (null == (__t = common.ReConnect) ? "" : __t) + "</div>\r\n        <div class='btn select-device-cancel' tabindex=\"-1\">" + (null == (__t = common.Button_Cancel) ? "" : __t) + "</div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/select_device/down.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, Array.prototype.join, obj) __p += '<div class="select-device">\r\n    <div class="select-device-page active" data-page="4">\r\n        <div class="select-device-main select-device-down-main">\r\n            <div class="select-device-title">' + (null == (__t = common.premium_expire_title) ? "" : __t) + '</div>\r\n            <div class="select-device-titleTip">' + (null == (__t = common.premium_down_des) ? "" : __t) + '</div>\r\n            <div class="select-device-downCon">\r\n                <table>\r\n                    <tr>\r\n                        <td width="47%" class="select-device-down-premiumCon">\r\n                            <div class="select-device-down-img"></div>\r\n                            <div class="btn btn-success">' + (null == (__t = welcome.t28) ? "" : __t) + '</div>\r\n                        </td>\r\n                        <td width="6%" class="select-device-down-sepCon">\r\n                            <div></div>\r\n                            <i></i>\r\n                        </td>\r\n                        <td width="47%" class="select-device-down-listCon">\r\n                            <p>' + (null == (__t = common.keep_device_tip) ? "" : __t) + '</p>\r\n                            <div class="select-device-down-list">\r\n                                ', _.each(devicelist, function(e) {
        __p += '\r\n                                <div class="select-device-down-item" data-did ="' + (null == (__t = e.id) ? "" : __t) + '">\r\n                                    <div class="checkbox" check="0"></div>\r\n                                    <div class="select-device-down-icon"></div>\r\n                                    <div class="select-device-down-manu over-ellipsis">' + (null == (__t = Airdroid.DeviceManage.getDeviceName(e)) ? "" : __t) + "</div>\r\n                                </div>\r\n                                "
    }), __p += '\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class="select-device-bottomCon" class="ui-actions is-border-boxing">\r\n            <div class=\'btn btn-primary select-device-down-ok\' tabindex="-1">' + (null == (__t = common.Button_Ok) ? "" : __t) + "</div>\r\n            <div class='btn select-device-cancel' tabindex=\"-1\">" + (null == (__t = common.Button_Cancel) ? "" : __t) + "</div>\r\n        </div>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/select_device/no_premium_add_tip.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="select-device-free-add-tip">\r\n<div>' + (null == (__t = common.add_devices) ? "" : __t) + "</div>\r\n<p>" + (null == (__t = common.free_user_add_device_tip) ? "" : __t) + "</p>\r\n</div>";
    return __p
};
this.ajst["views/sys/quick_view/index.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="quick-view" >\r\n    <div id="left_arrow" class="float-layer-arrow" style="top: 25px; "></div>\r\n   <div class="quick-view-control">\r\n       <div class="open" menu="open"><span>' + (null == (__t = lang.Open) ? "" : __t) + '</span></div>\r\n   </div>\r\n    <div class="quick-view-container"></div>\r\n</div>\r\n';
    return __p
};
this.ajst["views/sys/quick_view/icon.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "";
    with(_.escape, obj) __p += '<div class="quick-view-icon ui-draggable">\r\n    <img src="' + (null == (__t = icon_src) ? "" : __t) + '" width="60px"/>\r\n    <span style="display: block; margin-top: -8px;">' + (null == (__t = icon_title) ? "" : __t) + '</span>\r\n    <span class="quick-view-tinyicon is-hide"></span>\r\n</div>';
    return __p
};
this.ajst["views/sys/sp_frequent_contacts.htm"] = function(obj) {
    obj || (obj = {});
    var __p = "";
    with(_.escape, obj) __p += '<div class="frequent-contacts mod-frequentContacts">\r\n    <div id="left_arrow" class="float-layer-arrow"></div>\r\n    <div class="frequent-contacts-title">\r\n    </div>\r\n    <div class="frequent-contacts-container"></div>\r\n</div>';
    return __p
};
this.ajst["views/sys/sp_frequent_contacts_icon.htm"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += ' <div class="frequent-contacts-icon">\r\n    <img src="' + (null == (__t = default_icon) ? "" : __t) + '" imgsrc="' + (null == (__t = icon_src) ? "" : __t) + '"  width="60px">\r\n    <div class="frequent-contact-name over-ellipsis">' + __e(icon_title) + "</div>\r\n</div>";
    return __p
};
Airdroid.Desktop = Core.extend(Airdroid.Base, {
    _desktopDropOpts: null,
    _desktopIconType: {
        user: "1",
        add: "2",
        ad: "3"
    },
    _adIcons: [],
    ICON_WIDTH: 80,
    ICON_HEIGHT: 90,
    ICON_MARGIN: 20,
    DESKTOP_PADDING: 30,
    NOT_DRAG_ICON: "[m=Add],[m=Ad]",
    _construct: function() {
        this._autoRunApps = [], this._desktopIndex = null, this._zIndex = 2, this._desktopDom = null, this._icons = {}, this._folders = {}, this._desktopContextOpts = null, this._iconFolderDropOpts = null, this._folderContextOpts = null, this._desktopRestore = null, this._windowManage = new Airdroid.AppWindowManage, this._windowManage._desktop = this
    },
    initDesktop: function(e) {
        var t = this;
        t._desktopDom = $(t.util.getTemplate("sys/desktop", "index", {
            desktop_index: e,
            index: e.split("_")[1]
        })).hide(), t.initOptions(), t._desktopDom.click(function() {
            t._windowManage.removeFloatLayer(), t.util.clearContextMenu(), Airdroid.Runtime.SwitchDesktop.AtSwitch && Airdroid.DesktopManage.setCurrentDesktop(t)
        }).appendTo(Airdroid.CenterManage._desktopContainerDom.find(".layout-desktops-container")), t._desktopDom.droppable(t._desktopDropOpts);
        var i = function() {
            _.each(t._autoRunApps, function(e) {
                t._windowManage.createApp(e, {})
            }), t._autoRunApps = []
        };
        Airdroid.Runtime.bgListLoaded ? i() : Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.bgfiles_loaded, i), Airdroid.Util.preventDefaultFileDrop(document)
    },
    addDesktopContextMenu: function() {
        this.util.hasContextMenu() && this._desktopContextOpts && this._desktopDom.context_Menu(this._desktopContextOpts)
    },
    setNewDesktopIconStyle: function(e) {
        var t = this,
            i = t._desktopDom.find(".desktopicon[data-type='2']");
        if (0 == t._adIcons.length) e.attr("style", i.attr("style"));
        else {
            var n = t._adIcons.length;
            e.attr("style", t._adIcons[0].attr("style")), _.each(t._adIcons, function(e, o) {
                o == n - 1 ? e.attr("style", i.attr("style")) : e.attr("style", t._adIcons[o + 1].attr("style"))
            })
        }
    },
    createNewAppDesktopIcon: function(e) {
        var t = this,
            i = t.createAppDesktopIcon(e);
        i && t.reSortDesktopIcon()
    },
    createAppDesktopIcon: function(e) {
        var t = this;
        if (e.appId != Airdroid.Config.dependApps.userCenter || Airdroid.UserManage.checkUserLogin()) {
            if (e.appId == Airdroid.Config.dependApps.Premium) {
                if (!Airdroid.UserManage.checkUserLogin() || Airdroid.Util.checkPremium()) return
            } else if (e.appId == Airdroid.Config.dependApps.Present) {
                var i = Airdroid.Util.OS.ChromeOs;
                if (!i || i && Airdroid.Util.hasCookie("show_pIcon") || Airdroid.Runtime.QRNoAccount) return
            }
            var n = t.util.getLang("Modules", e.nameLngKey || e.appName);
            (_.isUndefined(n) || "" == n) && (n = e.appName), e.appName = n, e.icon = e.icon || "";
            var o = -1 == e.icon.toLowerCase().indexOf("http") ? Airdroid.Service.getImgDesktopIconURL("desktopicon/" + e.icon) : e.icon,
                r = o;
            if (e.appId == t.config.dependApps.ContactLink && (r = Airdroid.Service.getContactIconRaw(e.data.number.split(",")[0]), o = Airdroid.Service.getImgAssets("feature/contact.png")), 0 > e.icon.indexOf("desktopicon") && (e.icon = r, e.defaultIcon = o), 1 == e.dicon) {
                var a = "icon_" + t._desktopIndex + "_" + e.appType + "_" + e.id;
                if (_.isUndefined(t._icons[a])) {
                    var s = 1,
                        c = null,
                        d = null,
                        l = $(Airdroid.Util.getTemplate("sys/desktop", "icon", {
                            desktop_icon_src: e.icon,
                            desktop_icon_title: e.appName,
                            desktop_icon_type: e.iconWrapper
                        }));
                    if (e.appId == t.config.dependApps.UrlLink) {
                        var u = Airdroid.Service.getFavicon(e.data.url),
                            p = l.find(".desktopicon_tinyicon");
                        p.css("background", "url(" + u + ")"), p.removeClass("is-hide")
                    }
                    if (l.attr({
                            id: a,
                            m: e.className,
                            grid: s,
                            "data-type": "1"
                        }).click(function(i) {
                            if ($(this).hasClass("noclick")) $(this).removeClass("noclick");
                            else {
                                if (Airdroid.Runtime.SwitchDesktop.AtSwitch) return !1;
                                if (e.appId == t.config.dependApps.frequentContacts) return Airdroid.AppManage.checkLoginLevel(e.loginLevel) ? t._windowManage.showFrequentContacts(e, l) : Airdroid.AppManage.doWhenLoginLevelNotEnough(function() {
                                    var i = t,
                                        n = Airdroid.AppManage.getAppConfigById(e.appId, "appId");
                                    n.dindex != t._desktopIndex && (i = Airdroid.DesktopManage.getDesktop(n.dindex), Airdroid.DesktopManage.setCurrentDesktop(i));
                                    var o = "icon_" + i._desktopIndex + "_" + n.appType + "_" + n.id;
                                    i._windowManage.showFrequentContacts(n, i._desktopDom.find('.desktopicon[id="' + o + '"]'))
                                }), Airdroid.Util.trackEvent("Sys-Desktop", "Frequent"), !1;
                                if (e.appType == Airdroid.AppManage.AppTypes.folder) {
                                    Airdroid.Util.trackEvent("Sys-Desktop", "Folder");
                                    var n = "folder_" + t._desktopIndex + "_" + e.id,
                                        o = null;
                                    o = t._windowManage.showQuickView(e, t._folders[n], l), o.find("div[menu='open']").click(function() {
                                        t._windowManage.createApp(e, {
                                            folderAppConfigAr: t._folders[n],
                                            uniqueId: "desktop_folder_" + e.id
                                        })
                                    }), t.util.cancelEventBubble(i)
                                } else e.appType == Airdroid.AppManage.AppTypes.link && e.appId != t.config.dependApps.UrlLink ? e.appId == t.config.dependApps.ContactLink ? (clearTimeout(d), d = setTimeout(function() {
                                    e.data && t.contactLinkClick(e.data)
                                }, 400), Airdroid.Util.trackEvent("Sys-Desktop", "ContactLinkClick")) : e.appId == t.config.dependApps.linkFolder && t._windowManage.createApp(e, {
                                    uniqueId: "path_" + e.data.linkpath
                                }) : (t._windowManage.createApp(e), Airdroid.Util.trackEvent("Sys-Desktop", "Icon", e.appName))
                            }
                            Airdroid.Util.cancelEventBubble(i)
                        }).dblclick(function() {
                            e.appType == Airdroid.AppManage.AppTypes.link && e.appId == t.config.dependApps.ContactLink && (clearTimeout(d), e.data && t.contactLinkDblclick(e.data), Airdroid.Util.trackEvent("Sys-Desktop", "ContactLinkDbClick"))
                        }).mouseenter(function() {
                            if (e.appId == t.config.dependApps.ContactLink) {
                                var i = $(this),
                                    n = e.data,
                                    o = n.name,
                                    r = n.number.split(",");
                                t.contactLinkMouseEnter(i, r, o)
                            }
                        }).mouseleave(function() {
                            if (e.appId == t.config.dependApps.ContactLink) {
                                var i = $(this);
                                "1" == i.find(".tpl-call-multiContact").attr("delay") ? i.find(".tpl-call-multiContact").attr("delay", "0") : (i.removeClass("desktop-contactCon"), i.find(".desktop-contact-actionCon").length > 0 && i.find(".desktop-contact-actionCon").hide())
                            }
                        }), e.appId == t.config.dependApps.ContactLink && l.find("span").addClass("over-ellipsis").css({
                            maxWidth: "200px"
                        }), e.appType == Airdroid.AppManage.AppTypes.folder) {
                        var h = "folder_" + t._desktopIndex + "_" + e.id,
                            f = 1;
                        e.opts.menu && (f = e.opts.menu), l.attr("folderid", h).attr("context_menu", f).droppable(t._iconFolderDropOpts), c = e.appId == t.config.dependApps.frequentContacts ? t.getIconContextMenu(e) : t._folderContextOpts, l.dblclick(function() {
                            var i = "folder_" + t._desktopIndex + "_" + e.id;
                            t._windowManage.createApp(e, {
                                folderAppConfigAr: t._folders[i],
                                uniqueId: "desktop_folder_" + e.id
                            })
                        })
                    } else c = t.getIconContextMenu(e);
                    l.find("img").error(function() {
                        $(this).attr("src", e.defaultIcon)
                    }), e.appId == t.config.dependApps.ContactLink && (l.attr("number", e.data.number.split(",")[0]), l.attr("contactId", e.data.contactId)), e.appId == t.config.dependApps.linkFolder && l.attr("absrc", e.data.linkpath), c && t.util.hasContextMenu() && l.context_Menu(c);
                    var g = t._desktopDom.find(".desktopicon").not(this.NOT_DRAG_ICON),
                        m = g.eq(e.dorder);
                    return m.length > 0 ? m.before(l) : t.insertBeforeLastDesktopIcon(l, t._desktopDom), t._icons[a] = e, l
                }
            } else if (0 == e.dicon) {
                var h = "folder_" + t._desktopIndex + "_" + e.folderId;
                _.isUndefined(t._folders[h]) && (t._folders[h] = []), t._folders[h].push(e)
            }
        }
    },
    getTopperZIndex: function() {
        return this._zIndex++, this._zIndex
    },
    initOptions: function() {
        var e = this;
        e._iconFolderDropOpts = {
            greedy: !0,
            scope: "desktopicon",
            tolerance: "pointer",
            hoverClass: "release-to-drop",
            accept: function(e, t) {
                var i = t || $(this),
                    n = e.attr("id");
                return i.siblings("#" + n).length > 0 && _.isUndefined(e.attr("folderid")) || e.hasClass("quick-view-icon")
            },
            over: function(e, t) {
                t.helper.addClass("grid-drag-helper")
            },
            out: function(e, t) {
                t.helper.removeClass("grid-drag-helper")
            },
            drop: function(t, i) {
                var n = $(this),
                    o = n.attr("folderid"),
                    r = e._icons[$(this).attr("id")],
                    a = i.draggable.attr("id"),
                    s = e._icons[a];
                if (s.appId != Airdroid.Config.dependApps.frequentContacts && !_.isUndefined(s) && !_.isUndefined(o)) {
                    _.isUndefined(e._folders[o]) && (e._folders[o] = []);
                    var c = {
                        id: s.id,
                        todindex: e._desktopIndex,
                        todorder: e._folders[o].length + 1,
                        tofolder: r.id
                    };
                    s.dorder = c.todorder;
                    for (var d = 0; e._folders[o].length > d; d++)
                        if (e._folders[o][d].appName == s.appName && e._folders[o][d].appId == s.appId) return s.appId == Airdroid.Config.dependApps.ContactLink ? Airdroid.Util.alert(Airdroid.Util.alert(Airdroid.Util.getLang("Common").ContactLinkExisted)) : Airdroid.Util.alert(Airdroid.Util.getLang("Common", "FileLinkExisted")), void 0;
                    e._folders[o].push(s);
                    var l = e._windowManage.getMultiAppWin(r, "desktop_folder_" + r.id);
                    null == l || _.isUndefined(l) || l._app.createFolderIcon(s), e.updateDesktopFolderIcon(r.id), delete e._icons[a], i.draggable.remove(), e.reSortDesktopIcon(), Airdroid.AppManage.moveUserApp(c)
                }
            }
        }, e._desktopDropOpts = {
            greedy: !0,
            scope: "folder",
            tolerance: "pointer",
            accept: function(e) {
                return e.hasClass("filelist-item") || e.hasClass("leaf") || e.hasClass("quick-view-icon") || e.hasClass("mod-contact-listItem") ? !0 : !1
            },
            over: function(e, t) {
                t.helper.addClass("grid-drag-helper")
            },
            out: function(e, t) {
                t.helper.removeClass("grid-drag-helper")
            },
            drop: function(t, i) {
                if ($(this), $(".focus-border").remove(), e.util.checkUserLogin()) {
                    var n = i.helper.data("dragData");
                    if ("filelist" === n.from) _.each(n.items, function(t) {
                        if ("dir" === t.extname) {
                            var i = {
                                    pos: "center"
                                },
                                n = {
                                    linkpath: t.absrc
                                },
                                o = {
                                    appId: e.config.dependApps.linkFolder,
                                    appName: t.name,
                                    dicon: 1,
                                    dindex: e._desktopIndex,
                                    dorder: e._desktopDom.find(".desktopicon").length + 1,
                                    position: JSON.stringify(i),
                                    data: JSON.stringify(n)
                                };
                            if (Airdroid.AppManage.checkDesktopAppExist({
                                    type: Airdroid.AppManage.DesktopAppSearch.LinkPath,
                                    linkPath: n.linkpath
                                })) Airdroid.Util.alert(Airdroid.Util.getLang("Common", "FileLinkExisted"));
                            else {
                                if (Airdroid.Runtime.addingLinkFolder == n.linkpath) return e.util.alert(Airdroid.Util.getLang("Common", "FileLinkExisted")), void 0;
                                Airdroid.Runtime.addingLinkFolder = n.linkpath, Airdroid.AppManage.addUserApp(o, !0, function(e) {
                                    Airdroid.DesktopManage._currentDesktop.createNewAppDesktopIcon(Airdroid.AppManage.toJSON(e.app))
                                }, function() {
                                    Airdroid.Runtime.addingLinkFolder = null
                                }), console.log("=====drag success")
                            }
                        }
                    });
                    else if ("desktopFolder-item" === n.from) {
                        var o = i.draggable.offset();
                        if (!(o.left > n.rect.xPos && o.left < n.rect.xPos + n.rect.width && o.top > n.rect.yPos && o.top < n.rect.yPos + n.rect.height)) {
                            var r = {
                                id: n.appconfig.id,
                                todindex: e._desktopIndex,
                                todorder: e._desktopDom.find(".desktopicon").length + 1,
                                tofolder: -1
                            };
                            Airdroid.AppManage.moveUserApp(r), n.appconfig.dicon = 1;
                            var a = i.draggable.offset();
                            n.appconfig.dorder = e.getPositionIndex(a.top, a.left), e.createNewAppDesktopIcon(n.appconfig), _.isFunction(n.callback) && n.callback(), e.updateDesktopFolderIcon(n.fromFolder.id)
                        }
                    } else if ("contects" === n.from) {
                        var s = {
                                pos: "center"
                            },
                            c = {
                                contactId: n.contactId,
                                number: n.number,
                                name: n.name
                            },
                            r = {
                                appId: e.config.dependApps.ContactLink,
                                appName: n.name,
                                dicon: 1,
                                dindex: e._desktopIndex,
                                dorder: e._desktopDom.find(".desktopicon").length + 1,
                                position: JSON.stringify(s),
                                data: JSON.stringify(c)
                            };
                        if (Airdroid.AppManage.checkDesktopAppExist({
                                type: Airdroid.AppManage.DesktopAppSearch.ContactId,
                                contactId: n.contactId
                            })) Airdroid.Util.alert(Airdroid.Util.getLang("Common", "ContactLinkExisted"));
                        else {
                            if (Airdroid.Runtime.addingLinkContact == n.contactId) return e.util.alert(Airdroid.Util.getLang("Common", "ContactLinkExisted")), void 0;
                            Airdroid.Runtime.addingLinkContact = n.contactId, Airdroid.AppManage.addUserApp(r, !0, function(t) {
                                e.createNewAppDesktopIcon(Airdroid.AppManage.toJSON(t.app)), Airdroid.Runtime.addingLinkContact = null
                            }, function() {
                                Airdroid.Runtime.addingLinkContact = null
                            })
                        }
                        console.log("=====drag success")
                    }
                    e.reSortDesktopIcon()
                }
            }
        }, e._desktopContextOpts = {
            onContextClick: function() {
                e._windowManage.removeFloatLayer()
            },
            getEventData: function(e) {
                return [{
                    xPos: e.clientX,
                    yPos: e.clientY
                }]
            },
            groups: [{
                option: {
                    name: e.util.getLang("Desktop", "MenuItem_ShowDesktop"),
                    handler: function() {
                        e.toggleShowDesktop(), Airdroid.Util.trackEvent("Sys-Desktop", "ContextMenu", "ShowDesktop")
                    }
                }
            }, {
                option: {
                    accept: function(e, t) {
                        return Airdroid.Util.checkUserLogin() || t.hide(), !0
                    },
                    type: "seprate"
                }
            }, {
                option: {
                    name: e.util.getLang("Common", "NewFolder"),
                    accept: function(e, t) {
                        return Airdroid.Util.checkUserLogin() || t.hide(), !0
                    },
                    handler: function(t) {
                        e.createNewFlolder(t), Airdroid.Util.trackEvent("Sys-Desktop", "ContextMenu", "NewFolder")
                    }
                }
            }]
        }
    },
    updateDesktopFolderIcon: function(e) {
        var t, i, n, o;
        t = "folder_" + this._desktopIndex + "_" + e, i = this._desktopDom.find(".desktopicon[folderid=" + t + "]"), 0 >= i.length || (n = _.isEmpty(this._folders[t]) ? "image_folder_empty.png" : "image_folder.png", o = Airdroid.Service.getImgAssets("desktopicon/" + n), i.find("img").attr("src", o))
    },
    initDesktopIconContextMenu: function() {
        var e = this;
        e._folderContextOpts = {
            onContextClick: function() {},
            getEventData: function(t, i) {
                var n = i.attr("id"),
                    o = i.attr("folderid");
                return [{
                    app_config: e._icons[n],
                    app_config_ar: e._folders[o]
                }]
            },
            groups: [{
                option: {
                    name: e.util.getLang("Common", "Open"),
                    handler: function(t) {
                        var i = t.data.eventData;
                        i && i.length > 0 && e._windowManage.createApp(i[0].app_config, {
                            folderAppConfigAr: i[0].app_config_ar,
                            uniqueId: "desktop_folder_" + i[0].app_config.id
                        }), Airdroid.Util.trackEvent("Sys-Desktop", "IconContextMenu", "Open")
                    }
                }
            }]
        }, Airdroid.DeviceManage.isCurrentDeviceConnected() && !e.util.checkUserLogin() || (e._folderContextOpts.groups.push({
            option: {
                name: e.util.getLang("Common", "Delete"),
                handler: function(t) {
                    var i = t.data.eventData;
                    if (i && i.length > 0) {
                        var n = i[0].app_config,
                            o = {
                                id: n.id
                            };
                        if (_.isArray(i[0].app_config_ar) && i[0].app_config_ar.length > 0) {
                            for (var r = 0, a = 0, s = 0; i[0].app_config_ar.length > s; s++) i[0].app_config_ar[s].appType == Airdroid.AppManage.AppTypes.system_app ? r++ : a++;
                            r > 0 ? Airdroid.Util.alert(Airdroid.Util.getLang("Common", "Folder_Del_Alert_1")) : a > 0 && Airdroid.Util.confirm(Airdroid.Util.getLang("Common", "Folder_Del_Alert_2"), function() {
                                Airdroid.AppManage.removeUserApp(o, function() {
                                    var t = "icon_" + e._desktopIndex + "_" + n.appType + "_" + n.id;
                                    delete e._icons[t], e._desktopDom.find(".desktopicon[id='" + t + "']").remove(), e._desktopDom.find(".quick-view").remove(), e.reSortDesktopIcon();
                                    var i = e._windowManage.getMultiAppWin(n, "desktop_folder_" + n.id);
                                    null == i || _.isUndefined(i) || i.destroy()
                                })
                            })
                        } else Airdroid.AppManage.removeUserApp(o, function() {
                            var t = "icon_" + e._desktopIndex + "_" + n.appType + "_" + n.id;
                            delete e._icons[t], e._desktopDom.find(".desktopicon[id='" + t + "']").remove(), e._desktopDom.find(".quick-view").remove(), e.reSortDesktopIcon();
                            var i = e._windowManage.getMultiAppWin(n, "desktop_folder_" + n.id);
                            null == i || _.isUndefined(i) || i.destroy()
                        })
                    }
                    Airdroid.Util.trackEvent("Sys-Desktop", "IconContextMenu", "Delete")
                }
            }
        }), e._folderContextOpts.groups.push({
            option: {
                name: e.util.getLang("Common", "Rename"),
                handler: function(t) {
                    var i, n = t.data.eventData;
                    n && n.length > 0 && (i = n[0].app_config), e.util.prompt("file", e.util.getLang("Common", "Rename"), e.util.getLang("Common", "Label_NameColumn"), i.appName, function(t) {
                        var n = {
                            id: i.id,
                            appName: t
                        };
                        Airdroid.AppManage.modifyUserApp(n, function() {
                            i.appName = t;
                            var n = "icon_" + e._desktopIndex + "_" + i.appType + "_" + i.id;
                            e._windowManage.updateAppWin(e._windowManage.WindowTypes.IconFolder, i), e._desktopDom.find("#" + n + " .l").html(t), e._desktopDom.find("#" + n).attr("title", t)
                        })
                    }, null, function(t, n) {
                        var o = null;
                        _.isUndefined(t) || "" == t ? o = e.util.getLang("Common", "msg_FileNameIsNull") : t == i.appName ? o = e.util.getLang("Common", "msg_SameFileName") : e.config.nameReg.test(t) ? o = e.util.getLang("Common", "msg_FileHasIllegalCharacter") : Airdroid.AppManage.checkDesktopAppExist({
                            type: Airdroid.AppManage.DesktopAppSearch.Name,
                            name: t,
                            appId: Airdroid.Config.dependApps.desktopFolder
                        }) && (o = e.util.getLang("Common", "msg_FileNameExist")), n(o)
                    }), Airdroid.Util.trackEvent("Sys-Desktop", "FolderContextOpts", "Rename")
                }
            }
        }))
    },
    getIconContextMenu: function(e) {
        var t = this,
            i = {
                onContextClick: function() {},
                getEventData: function(e, i) {
                    var n = i.attr("id");
                    return [{
                        app_config: t._icons[n],
                        desktopIcon: i
                    }]
                },
                groups: [{
                    option: {
                        name: t.util.getLang("Common", "Open"),
                        handler: function(e) {
                            var i = e.data.eventData;
                            i && i.length > 0 && (i[0].app_config.id == t.config.dependApps.frequentContacts || i[0].app_config.appId == t.config.dependApps.ContactLink ? i[0].desktopIcon.trigger("click") : t._windowManage.createApp(i[0].app_config)), Airdroid.Util.trackEvent("Sys-Desktop", "IconContextMenu", "Open")
                        }
                    }
                }]
            };
        if (e.appType != Airdroid.AppManage.AppTypes.system_app) {
            var n = {
                option: {
                    name: t.util.getLang("Common", "Delete"),
                    handler: function(e) {
                        var i = e.data.eventData;
                        if (i && i.length > 0) {
                            var n = i[0].app_config,
                                o = {
                                    id: n.id,
                                    folder: !1
                                };
                            Airdroid.AppManage.removeUserApp(o);
                            var r = "icon_" + t._desktopIndex + "_" + n.appType + "_" + n.id;
                            delete t._icons[r], t._desktopDom.find(".desktopicon[id='" + r + "']").remove(), t.reSortDesktopIcon()
                        }
                        Airdroid.Util.trackEvent("Sys-Desktop", "IconContextMenu", "Delete")
                    }
                }
            };
            Airdroid.DeviceManage.isCurrentDeviceConnected() && !t.util.checkUserLogin() || i.groups.push(n)
        }
        var o = Airdroid.DesktopManage._desktops;
        if (null != o && Airdroid.Util.checkUserLogin()) {
            var r = {
                option: {
                    name: Airdroid.Util.getLang("Common", "Move_To"),
                    children: []
                }
            };
            for (var a in o) {
                var s = {
                    name: Airdroid.Util.getLang("Common", "Workspace") + " " + o[a]._desktopIndex,
                    enable: !0,
                    data: o[a],
                    handler: function(e) {
                        if (!t.util.checkUserLogin()) return Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.loginWidget, {
                            appName: "",
                            callBack: function() {}
                        }), !1;
                        var i = e.app_config,
                            n = e.desktop,
                            o = {
                                id: i.id,
                                todindex: n._desktopIndex,
                                todorder: n._desktopDom.find(".desktopicon").length + 1,
                                tofolder: -1
                            };
                        Airdroid.AppManage.moveUserApp(o, function() {
                            var e = "icon_" + t._desktopIndex + "_" + i.appType + "_" + i.id;
                            delete t._icons[e], t._desktopDom.find(".desktopicon[id='" + e + "']").remove(), t.saveOrderIndex(), i.dindex = n._desktopIndex, n.createNewAppDesktopIcon(Airdroid.AppManage.toJSON(i))
                        }), Airdroid.Util.trackEvent("Sys-Desktop", "IconContextMenu", "MoveTo")
                    }
                };
                o[a]._desktopIndex == t._desktopIndex && (s.enable = !1), r.option.children.push(s)
            }
            r.option.children.length > 1 && i.groups.push(r)
        }
        return i
    },
    toggleShowDesktop: function() {
        this._desktopDom.find(".window:visible").length > 0 ? this.showDesktop() : this.restoreDesktop()
    },
    showDesktop: function() {
        var e = this;
        e._desktopRestore = [], e._desktopDom.find(".window:visible").each(function() {
            e._desktopRestore.push($(this).hide())
        }), Airdroid.TaskbarManage.normalAllTasks()
    },
    restoreDesktop: function() {
        _.isArray(this._desktopRestore) && (_.each(this._desktopRestore, function(e) {
            e.show()
        }), this._desktopRestore = null, this.setTopVisiableAppTaskItemHightlight())
    },
    switchSliderEffect: function(e, t, i, n) {
        var o = this,
            r = o._desktopDom.width(),
            a = 0,
            s = "easeInQuad";
        "left" == t && ("hide" == e ? (a = -r, s = "easeOutQuad") : (o._desktopDom.css("left", r + "px").show(), a = 0)), "right" == t && ("hide" == e ? (a = r, s = "easeOutQuad") : (o._desktopDom.css("left", -r + "px").show(), a = 0));
        var c = function() {
            "hide" == e && o._desktopDom.hide().css("left", "0px"), _.isFunction(n) && n.apply(null)
        };
        o._desktopDom.animate({
            left: a + "px"
        }, i, s, c)
    },
    setTopVisiableAppTaskItemHightlight: function() {
        var e = null,
            t = 2;
        return this._desktopDom.find(".window:visible").each(function() {
            var i = $(this),
                n = parseInt(i.css("z-index"));
            n > t && (t = n, e = i.attr("app"))
        }), $(".about-us:visible").size() > 0 ? !1 : (null != e && Airdroid.DesktopManage._appSingleWindows[e] && Airdroid.DesktopManage._appSingleWindows[e]._taskItem ? Airdroid.DesktopManage._appSingleWindows[e]._taskItem.hasClass("active") || Airdroid.DesktopManage._appSingleWindows[e]._taskItem.trigger("click") : Airdroid.TaskbarManage.normalAllTasks(), void 0)
    },
    getIconsPerColumn: function() {
        return Math.floor(this._desktopDom.height() / (this.ICON_HEIGHT + this.ICON_MARGIN))
    },
    reSortDesktopIcon: function() {
        var e = this,
            t = this._desktopDom,
            i = this.DESKTOP_PADDING,
            n = this.ICON_MARGIN,
            o = this.ICON_WIDTH + n,
            r = this.ICON_HEIGHT + n,
            a = this.getIconsPerColumn(),
            s = t.find(".desktopicon");
        s.stop(), _.each(s, function(t, n) {
            var s = $(t),
                c = {
                    left: Math.floor(n / a) * o + i,
                    top: n % a * r + i
                };
            s.transit($.extend({
                opacity: 1,
                transform: "scale(1)"
            }, c));
            var d = s.attr("folderid");
            if (d) {
                var l = e._icons[s.attr("id")];
                e._windowManage.updateQuickViewPosition(c, l, e._folders[d], s)
            }
        });
        var c = this.NOT_DRAG_ICON;
        return s.not(c).draggable({
            zIndex: 100,
            revert: !1,
            distance: 3,
            scope: "desktopicon",
            start: function(t, i) {
                i.helper.addClass("noclick"), e._windowManage.removeFloatLayer(), e.util.clearContextMenu()
            },
            stop: function(i, n) {
                var o = t.find(".desktopicon").not(c),
                    r = n.helper.offset().top,
                    a = n.helper.offset().left,
                    s = e.getPositionIndex(r, a),
                    d = _.indexOf(o, this);
                console.log(d, s), d - 1 === s ? o.eq(s).before($(this)) : d !== s && o.eq(s).after($(this)), e.reSortDesktopIcon(), e.saveOrderIndex()
            }
        }), s
    },
    getPositionIndex: function(e, t) {
        var i = this._desktopDom.find(".desktopicon").not(this.NOT_DRAG_ICON),
            n = this.ICON_MARGIN,
            o = this.ICON_WIDTH + n,
            r = this.ICON_HEIGHT + n,
            a = Math.round(e / r - .5),
            s = Math.round(t / o - .5);
        a = Math.max(a, 0), s = Math.max(s, 0);
        var c = this.getIconsPerColumn();
        a = Math.min(a, c), s = Math.min(s, c);
        var d = a + s * c;
        return d = Math.min(d, i.length - 1)
    },
    saveOrderIndex: function() {
        var e = this,
            t = e.reSortDesktopIcon(),
            i = [],
            n = 1;
        _.each(t, function(t) {
            var o = e._icons[$(t).attr("id")];
            o && (console.info(o.appName + "=====" + n), i.push(o.id + "-" + n), n += 1)
        });
        var o = {
            uapps: JSON.stringify(i)
        };
        console.info(o), Airdroid.AppManage.orderUserApp(o, function() {
            console.info("sort succeed!")
        })
    },
    getDesktopMaxVertical: function() {
        var e = $(window).height() - this.config.desktopIcon.viewGapV;
        return Math.floor(e / this.config.desktopIcon.iconHeight) - 1
    },
    createNewFlolder: function() {
        var e = this;
        return e.util.checkUserLogin() ? (Airdroid.Util.prompt("file", e.util.getLang("Common", "NewFolder"), e.util.getLang("Filemanage", "Label_NewFolderName"), "", function(t) {
            var i = {
                    pos: "center"
                },
                n = {
                    appId: e.config.dependApps.desktopFolder,
                    dicon: 1,
                    dindex: e._desktopIndex,
                    dorder: e._desktopDom.find(".desktopicon").length + 1,
                    position: JSON.stringify(i),
                    appName: t
                };
            Airdroid.AppManage.addUserApp(n, !1, function(t) {
                e.createNewAppDesktopIcon(Airdroid.AppManage.toJSON(t.app)), e.updateDesktopFolderIcon(t.app.id)
            })
        }, null, function(t, i) {
            var n = null;
            _.isUndefined(t.trim()) || "" == t.trim() ? n = e.util.getLang("Common", "msg_FileNameIsNull") : e.config.nameReg.test(t) ? n = e.util.getLang("Common", "msg_FileHasIllegalCharacter") : Airdroid.AppManage.checkDesktopAppExist({
                type: Airdroid.AppManage.DesktopAppSearch.Name,
                name: t,
                appId: Airdroid.Config.dependApps.desktopFolder
            }) && (n = e.util.getLang("Common", "msg_FileNameExist")), i(n)
        }), void 0) : (Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.loginWidget, {
            appName: "",
            callBack: function() {
                e.createNewFlolder()
            }
        }), void 0)
    },
    clearDesktop: function() {
        this._zIndex = 2;
        var e = this._desktopDom.find(".desktop-switch-mask");
        this._desktopDom.empty().html(e), this._icons = {}, this._folders = {}, this._desktopRestore = null, this._windowManage.clearWindowManage()
    },
    createAddAppDesktopIcon: function() {
        var e = this;
        if (e.util.checkUserLogin()) {
            var t = {
                    icon: Airdroid.Service.getImgDesktopIconURL("desktopicon/add_80.png"),
                    appName: Airdroid.Util.getLang("Modules", "Add"),
                    iconWrapper: "",
                    className: "Add"
                },
                i = parseFloat(e._desktopDom.find(".desktopicon:last").attr("grid")) + .1,
                n = $(Airdroid.Util.getTemplate("sys/desktop", "icon", {
                    desktop_icon_src: t.icon,
                    desktop_icon_title: t.appName,
                    desktop_icon_type: t.iconWrapper
                })).attr({
                    id: "-100",
                    m: t.className,
                    grid: i
                }).attr("data-type", "2").context_Menu({
                    onContextClick: function() {
                        return Airdroid.Util.clearContextMenu(), !1
                    },
                    getEventData: function(e) {
                        return [{
                            xPos: e.clientX,
                            yPos: e.clientY,
                            hide: !0
                        }]
                    },
                    groups: [{
                        option: {
                            name: Airdroid.Util.getTemplate("sys/desktop", "addicon_item", {
                                desktop_addIcon_src: Airdroid.Service.getImgDesktopIconURL("desktopicon/file_80.png"),
                                desktop_addIcon_title: Airdroid.Util.getLang("Common").Folder_Contact
                            }),
                            handler: function() {
                                Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.DesktopFileList), Airdroid.Util.trackEvent("Sys-desktop", "AddIconContextMenu", "AddFile")
                            }
                        }
                    }, {
                        option: {
                            name: Airdroid.Util.getTemplate("sys/desktop", "addicon_item", {
                                desktop_addIcon_src: Airdroid.Service.getImgDesktopIconURL("desktopicon/contacts_80.png"),
                                desktop_addIcon_title: Airdroid.Util.getLang("Common").Shortcut_Contact
                            }),
                            handler: function() {
                                Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.DesktopContact), Airdroid.Util.trackEvent("Sys-desktop", "AddIconContextMenu", "AddContact")
                            }
                        }
                    }, {
                        option: {
                            name: Airdroid.Util.getTemplate("sys/desktop", "addicon_item", {
                                desktop_addIcon_src: Airdroid.Service.getImgDesktopIconURL("desktopicon/url_80.png"),
                                desktop_addIcon_title: Airdroid.Util.getLang("AirTransport").Url
                            }),
                            handler: function() {
                                e.showAddUrlDialog(), Airdroid.Util.trackEvent("Sys-desktop", "AddIconContextMenu", "AddUrl")
                            }
                        }
                    }, {
                        option: {
                            type: "seprate"
                        }
                    }, {
                        option: {
                            name: Airdroid.Util.getTemplate("sys/desktop", "addicon_item", {
                                desktop_addIcon_src: Airdroid.Service.getImgDesktopIconURL("desktopicon/image_folder.png"),
                                desktop_addIcon_title: Airdroid.Util.getLang("Common").Desktop_folder
                            }),
                            handler: function() {
                                e.createNewFlolder(), Airdroid.Util.trackEvent("Sys-desktop", "AddIconContextMenu", "AddFolder")
                            }
                        }
                    }]
                }).click(function(e) {
                    return $(this).trigger("contextmenu", [
                        [{
                            xPos: e.clientX,
                            yPos: e.clientY
                        }]
                    ]), Airdroid.Util.trackEvent("Sys-desktop", "AddIcon"), !1
                });
            e._desktopDom.append(n)
        }
    },
    getAdDesktopIconId: function(e) {
        return "ad_" + e.id + "_" + e.appName
    },
    createDesktopAdIcon: function(e) {
        var t = this;
        (function(e) {
            "desktop_1" == e.attr("index") && (t._adIcons = [], Airdroid.UserManage.getDesktopIconAdData(function(i) {
                _.each(i, function(i) {
                    i = Airdroid.AppManage.toJSON(i);
                    var n = i.data,
                        o = {
                            icon: n.icon,
                            appName: i.appName,
                            iconWrapper: "",
                            className: "Ad"
                        },
                        r = t.getAdDesktopIconId(i),
                        a = {};
                    1 == n.user_del && (a.groups = [{
                        option: {
                            name: t.util.getLang("Common", "Delete"),
                            handler: function(e) {
                                var i = e.data.eventData,
                                    n = i[0].appconfig,
                                    o = t.getAdDesktopIconId(n);
                                t._desktopDom.find(".desktopicon[id='" + o + "']").remove(), t.reSortDesktopIcon(), Airdroid.UserManage.editUserAdSetting(n.id, "del")
                            }
                        }
                    }]);
                    var s = parseFloat(e.find(".desktopicon:last").attr("grid")) + .1,
                        c = $(Airdroid.Util.getTemplate("sys/desktop", "icon", {
                            desktop_icon_src: o.icon,
                            desktop_icon_title: o.appName,
                            desktop_icon_type: o.iconWrapper
                        })).attr({
                            id: r,
                            m: o.className,
                            grid: s
                        }).attr("data-type", "3").context_Menu($.extend({
                            onContextClick: function() {
                                return Airdroid.Util.clearContextMenu(), !1
                            },
                            getEventData: function() {
                                return [{
                                    appconfig: i
                                }]
                            }
                        }, a)).click(function() {
                            if (1 === parseInt(n.open_type)) Airdroid.Util.trackEvent("Sys-desktop-AD", o.appName, "out"), window.open(n.url, "_blank");
                            else if (2 === parseInt(n.open_type)) {
                                Airdroid.Util.trackEvent("Sys-desktop-AD", o.appName, "inner");
                                var e = function() {
                                    Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.browser, {
                                        appconfig: i
                                    })
                                };
                                if (i.uniqueId) {
                                    var t = Airdroid.AppManage.getAppConfigById(Airdroid.Config.dependApps.browser, "appId"),
                                        r = Airdroid.DesktopManage._currentDesktop._windowManage.getMultiAppWin(t, i.uniqueId);
                                    r ? r.show() : e()
                                } else e()
                            }
                            Airdroid.UserManage.editUserAdSetting(i.id, "click")
                        });
                    t._adIcons.push(c), t.insertBeforeLastDesktopIcon(c, e), t.setNewDesktopIconStyle(c), Airdroid.Util.trackEvent("Sys-desktop-AD", o.appName, "show")
                }), console.log("，"), t.reSortDesktopIcon()
            }))
        })(e)
    },
    insertBeforeLastDesktopIcon: function(e, t) {
        var i = t.find(".desktopicon"),
            n = i.filter("[m=Ad]:first"),
            o = i.filter("[m=Add]"),
            r = i.filter(":last");
        n.length > 0 ? n.before(e) : o.length > 0 ? o.before(e) : o.length > 0 ? r.after(e) : t.append(e)
    },
    showAddUrlDialog: function() {
        var e = this;
        Airdroid.Util.customAlertBoxHasBottom({
            description: this.util.getTemplate("sys/desktop", "add_url_dialog", {
                airTransportLang: Airdroid.Util.getLang("AirTransport"),
                lang: Airdroid.Util.getLang("Common")
            }),
            bottomBar: {
                hasOkBtn: {
                    clickHandle: function(t) {
                        var i, n, o = t.container;
                        return i = o.find(".input-name").val(), n = o.find(".input-url").val(), /^\w{2,20}:\/\//.test(n) || (n = "http://" + n), Airdroid.AppManage.checkDesktopAppExist({
                            type: Airdroid.AppManage.DesktopAppSearch.Name,
                            name: i,
                            appId: Airdroid.Config.dependApps.UrlLink
                        }) ? ($("#alert_box_input_tipCon").css("visibility", "visible"), $("#alert_box_input_tip").text(e.util.getLang("Common", "url_link_exist")), o.find(".input-name").focus(), !1) : (e.addUrlToDesktop(i, n), Airdroid.Util.trackEvent("Sys-Desktop", "UrlLink", "Add"), void 0)
                    }
                },
                hasCancelBtn: {}
            },
            showHandle: function(e) {
                var t = e.container,
                    i = t.find(".input-name"),
                    n = t.find(".input-url"),
                    o = t.find("#alert_box_yes_btn");
                Airdroid.Util.disableButton(o), i.add(n).bind("input", function() {
                    i.val() && n.val() ? Airdroid.Util.enableButton(o) : Airdroid.Util.disableButton(o)
                }), n.bind("input", function() {
                    t.find(".target-url-favicon").css({
                        background: "url(" + Airdroid.Service.getFavicon($(this).val()) + ")"
                    })
                })
            }
        })
    },
    addUrlToDesktop: function(e, t) {
        var i = this,
            n = {
                appId: i.config.dependApps.UrlLink,
                appName: e,
                dicon: 1,
                dindex: i._desktopIndex,
                dorder: i._desktopDom.find(".desktopicon").length + 1,
                data: JSON.stringify({
                    url: t
                })
            };
        Airdroid.AppManage.addUserApp(n, !1, function(e) {
            i.createNewAppDesktopIcon(Airdroid.AppManage.toJSON(e.app))
        })
    },
    bindLinkDataChange: function() {
        var e = this;
        Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.link_contact_change, function(t) {
            var t = t.data,
                i = t.numberArr,
                n = t.name.escapeHTML(),
                o = t.contactId,
                r = "",
                a = $('.desktopicon[number="' + i[0] + '"]');
            if (a.length > 0 ? r = a : (a = $('.desktopicon[contactId="' + o + '"]'), a.length > 0 && (r = a)), r) {
                r.unbind("mouseenter").bind("mouseenter", function() {
                    e.contactLinkMouseEnter($(this), i, n, !0)
                }), r.find(".desktopicon_title .l").html(n), r.attr("number", i[0]);
                var s = e._icons[r.attr("id")],
                    c = s.data;
                c.number = "" + i.join(","), c.name = n, c.contactId = o;
                var d = null;
                r.unbind("click").bind("click", function() {
                    clearTimeout(d), d = setTimeout(function() {
                        e.contactLinkClick(c)
                    }, 400)
                }).unbind("dblclick").bind("dblclick", function() {
                    clearTimeout(d), e.contactLinkDblclick(c)
                }), s.appName = n, s.data = JSON.stringify(c), e._icons[r.attr("id")] = s;
                var l = {
                    id: s.id,
                    appName: n,
                    data: JSON.stringify(c)
                };
                Airdroid.AppManage.modifyUserApp(l, function() {
                    console.log("save link success")
                })
            }
        }), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.link_contact_delete, function(t) {
            var i = t.data.number.split(","),
                n = $(".desktopicon[number='" + i[0] + "']");
            if (0 >= n.length);
            else {
                var o = n.attr("id"),
                    r = {
                        id: o.split("_")[3],
                        folder: !1
                    };
                Airdroid.AppManage.removeUserApp(r, function() {
                    delete e._icons[o], $(".desktopicon[id='" + o + "']").remove(), e.reSortDesktopIcon()
                })
            }
        }), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.msg_contact_imgChange, function(e) {
            if (e.data.contactId) {
                var t = $(".desktopicon[contactid='" + e.data.contactId + "']");
                if (t.length > 0) {
                    var i = t.find("img").attr("src");
                    t.find("img").attr("src", Airdroid.Service.getContactIconRawById(e.data.contactId)).error(function() {
                        t.attr("src", i)
                    })
                }
            }
        })
    },
    contactLinkClick: function(e) {
        var t = e,
            i = {
                type: "name",
                data: {
                    name: t.name,
                    number: t.number,
                    cid: t.contactId
                }
            };
        Airdroid.DesktopManage._currentDesktop._windowManage.mergerChatWindow(i)
    },
    contactLinkDblclick: function(e) {
        var t = this;
        Airdroid.AppManage.createAppByAppId(t.config.dependApps.Contact, {
            type: "id",
            data: e.contactId
        })
    },
    contactLinkMouseEnter: function(e, t, i, n) {
        var o = this,
            r = e;
        if (r.addClass("desktop-contactCon"), n && r.find(".desktop-contact-actionCon").length > 0 && r.find(".desktop-contact-actionCon").remove(), 0 == r.find(".desktop-contact-actionCon").length) {
            var a = t[0],
                s = $(o.util.getTemplate("sys/desktop", "contact_hover", {
                    name: i,
                    number: a,
                    common: Airdroid.Util.getLang("Common")
                }));
            r.append(s), r.find(".icon-chat").click(function() {
                return r.trigger("click"), Airdroid.Util.trackEvent("Sys-Desktop", "ContactLink", "Chat"), !1
            }), t.length > 1 ? (r.css({
                overflow: "visible"
            }), r.find(".icon-calllog").mouseenter(function() {
                if (0 == r.find(".tpl-call-multiContact").length) {
                    var e = $(o.util.getTemplate("sys", "sys_call_multicontact", {
                        list: t
                    }));
                    r.find(".icon-calllog").append(e), r.find(".tpl-call-multiItem").click(function() {
                        var e = $(this).find("a").html();
                        return Airdroid.Service.callout(e, function() {
                            Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.CallOut, {
                                number: e
                            })
                        }, function() {
                            console.log("call out error")
                        }), Airdroid.Util.trackEvent("Sys-Desktop", "ContactLink", "Call"), !1
                    }), r.find(".tpl-call-multiContact").mouseenter(function() {
                        $(this).attr("delay", "1")
                    }).mouseleave(function() {
                        $(this).attr("delay", "0")
                    })
                } else setTimeout(function() {
                    r.find(".tpl-call-multiContact").show()
                }, 50)
            }).mouseleave(function() {
                setTimeout(function() {
                    "1" == r.find(".tpl-call-multiContact").attr("delay") ? r.find(".tpl-call-multiContact").attr("delay", "0") : r.find(".tpl-call-multiContact").hide()
                }, 50)
            }), r.find(".icon-calllog").click(function() {
                return !1
            })) : r.find(".icon-calllog").click(function() {
                return Airdroid.Service.callout(a, function() {
                    Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.CallOut, {
                        number: a
                    })
                }, function() {
                    console.log("call out error")
                }), !1
            })
        } else r.find(".desktop-contact-actionCon").show(), r.find(".tpl-call-multiContact").hide()
    },
    hideGiftIcon: function(e) {
        var t = this,
            i = "appId";
        if (1 == e.code) {
            var n = Airdroid.AppManage.getAppConfigById(e.data.id, i),
                o = "icon_" + t._desktopIndex + "_" + n.appType + "_" + n.id;
            delete t._icons[o], t._desktopDom.find(".desktopicon[id='" + o + "']").remove(), t._desktopDom.find(".quick-view").remove(), t.reSortDesktopIcon()
        }
    },
    getWrapper: function() {
        return this._desktopDom
    }
}), Airdroid.Dashboard = function() {
    var e = null,
        t = !1,
        i = null,
        n = null,
        o = 0,
        r = !1,
        a = 5,
        s = !1,
        c = function() {
            t = !0, Airdroid.DesktopManage.createDesktop(a), i = Airdroid.DesktopManage.getDesktop(a), e = i.getWrapper(), e.addClass("sys-dashboard").hide(), e.height($(document).height), $(document).click(function(t) {
                $(t.target).parent(".sys-dashboard").length || "none" !== e.css("display") && f()
            })
        },
        d = function() {
            var t = $(".layout-desktops-container");
            o = t.height(), s || (s = !0, $(".block-topNav").css("margin-top", "-35px"), $(".block-taskbar").css("margin-bottom", "-45px"), Airdroid.DesktopManage.getCurrentDesktop().getWrapper().fadeOut(500, function() {
                t.css({
                    top: "0",
                    height: "100%",
                    width: "100%"
                }), e.fadeIn(500, function() {
                    s = !1
                })
            }))
        },
        l = function() {
            s || (s = !0, $(".block-topNav").css("margin-top", "0"), $(".block-taskbar").css("margin-bottom", "0"), e.fadeOut(500, function() {
                $(".layout-desktops-container").css({
                    top: "40px"
                }), Airdroid.DesktopManage.getCurrentDesktop().getWrapper().fadeIn(500, function() {
                    s = !1, $(window).trigger("resize")
                })
            }))
        },
        u = function() {
            $(Airdroid.Util.getTemplate("sys/dashboard", "add_btn", {})).appendTo(e)
        },
        p = function() {
            var t = new Airdroid.Dashboard.WidgetPanel(i);
            n = t.getWrapper().appendTo(e)
        },
        h = function() {
            _.each(Airdroid.AppManage._allApps, function(e) {
                e.dindex == a && e.opts.autoRun && 1 == e.opts.autoRun && Airdroid.AppManage.checkLoginLevel(e.loginLevel) && i._windowManage.createApp(e, {})
            })
        },
        f = function() {
            r ? (r = !r, l()) : (r = !r, d())
        };
    return c(), u(), h(), p(), {
        toggleShow: function(e) {
            return t ? (f(e), void 0) : void 0
        },
        isVisible: function() {
            return r
        }
    }
}, Airdroid.Dashboard.WidgetPanel = function(e) {
    var t = $(Airdroid.Util.getTemplate("sys/dashboard", "widget_panel", {})),
        i = 0;
    return _.each(Airdroid.AppManage._allApps, function(n) {
        5 == n.dindex && ($(Airdroid.Util.getTemplate("sys/dashboard", "widget_icon", {
            desktop_icon_src: n.icon,
            desktop_icon_title: n.appName,
            desktop_icon_type: n.iconWrapper
        })).appendTo(t).click(function(t) {
            var i = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.dashboardWidget.name),
                o = i.indexOf(n.appId); - 1 === o && i.push(n.appId), Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.dashboardWidget.name, i), e._windowManage.createApp(n, {}), t.stopPropagation()
        }), i++)
    }), {
        getWrapper: function() {
            return t
        }
    }
}, Airdroid.Message = new(Core.extend(Airdroid.Base, {
    _construct: function() {
        this.util = Airdroid.Util, this._service = Airdroid.Service, this.DEFAULT_TITLE = "AirDroid", this.DEFAULT_TITLES = {
            def: this.DEFAULT_TITLE
        }, this.titles = this.DEFAULT_TITLES, this.counts = {}, this.isFocus = !0, this.sms_music = Airdroid.Service.getImgAssets("music_alert.mp3"), this._blockModal = null
    },
    initMessage: function() {
        var e = this;
        $(window).bind("blur", function() {
            setTimeout(function() {
                e.isFocus = !1
            }, 200)
        }).bind("focus", function() {
            setTimeout(function() {
                e.isFocus = !0
            }, 100)
        }), this.buildMusicAlertComponent()
    },
    hideReconnectNotice: function() {
        Airdroid.TaskbarManage.removeReconnectTip()
    },
    showReconnectNotice: function(e) {
        var t = this;
        return 0 == $(".layout-taskbar-connect-model:visible").length ? !1 : (Airdroid.TaskbarManage.setDeviceConnectStatus(!1), Airdroid.TaskbarManage.showReconnectTip(function() {
            console.log("===="), $.isFunction(e) ? e() : Airdroid.CenterManage.reconnectPhone(), t.hideReconnectNotice()
        }), void 0)
    },
    createLEDTitle: function(e, t, i) {
        this.titles[e] = t.trim(), this.counts[e] = i, this.showActionTitle(this.titles)
    },
    clearLEDTitle: function(e) {
        return "all" === e ? (this.clearActionTitle(), void 0) : (delete this.titles[e], this.titles.length > 0 ? this.showActionTitle(this.titles) : this.clearActionTitle(), void 0)
    },
    showActionTitle: function(e) {
        var t = _.sortBy(e, function(e, t) {
                return ["sms", "call", "def"].indexOf(t)
            }),
            i = _.reduce(this.counts, function(e, t) {
                return e + t
            }, 0);
        $.ActionTitle.show({
            text: t.join(" - "),
            prefix: "(" + i + ") "
        });
        var n = Airdroid.Service.getImgAssets("favicon_m.ico");
        $.Favicon.setUrl(n)
    },
    clearActionTitle: function() {
        $.ActionTitle.clear();
        var e = Airdroid.Service.getImgAssets("favicon.ico");
        $.Favicon.setUrl(e), this.titles = this.DEFAULT_TITLES
    },
    buildMusicAlertComponent: function() {
        var e = this,
            t = '<audio id="Airdroid_sound" preload="auto" src="" ><p>Your browser does not support the audio element</p></audio>';
        $("body").append(t), this.playAlertSound = function(t) {
            var i = {
                    type: "sms",
                    url: e.sms_music
                },
                n = $.extend(i, t),
                o = $("#Airdroid_sound");
            switch (n.type) {
                case "sms":
                    o.attr("src", n.url);
                    break;
                default:
                    o.attr("src", n.url)
            }
            document.getElementById("Airdroid_sound").play()
        }
    },
    showDesktopIconNotice: function(e, t) {
        $('.desktopicon[m="' + e + '"] .desktopicon_count').html(t).show()
    },
    hideDesktopIconNotice: function(e) {
        $('.desktopicon[m="' + e + '"] .desktopicon_count').hide()
    }
})), Airdroid.TaskbarManage = new(Core.extend(Airdroid.Base, {
    _tasks: {},
    _taskBarDom: null,
    _currentHighLightApp: null,
    BATTER_LOW_VALUE: .2,
    createView: function() {
        var e = this.util;
        this._taskBarDom = $(e.getTemplate("sys/taskbar", "index")), Airdroid.CenterManage._desktopContainerDom.append(this._taskBarDom), this._desktopLang = e.getLang("Desktop"), this._commonLang = e.getLang("Common"), this._titleWidgetLang = e.getLang("TitleWidget"), this._dialPadLang = e.getLang("DialPad")
    },
    _status_position: {
        connect: "160px",
        wifi: "126px",
        signal: "90px",
        reconnect_3g: "128px",
        reconnect_normal: "96px"
    },
    getTaskItemContextMenu: function(e) {
        var t = this,
            i = {
                onContextClick: function() {
                    Airdroid.DesktopManage._currentDesktop._windowManage.removeFloatLayer()
                },
                getEventData: function(e) {
                    var t = e.clientY;
                    return 1 == i.groups.length ? t -= 26 : i.groups.length > 1 && (t -= 26 * (i.groups.length - 1)), [{
                        xPos: e.clientX,
                        yPos: t
                    }]
                },
                groups: []
            };
        return i.groups.push({
            option: {
                name: t._desktopLang.MenuItem_CloseAll,
                handler: function() {
                    for (var e in t._tasks) t._tasks[e] && t._tasks[e].destroy()
                }
            }
        }), i.groups.length > 0 && i.groups.push({
            option: {
                type: "seprate"
            }
        }), i.groups.push({
            option: {
                name: t._desktopLang.MenuItem_Restore,
                handler: function() {
                    e._taskItem.trigger("click")
                }
            }
        }), i.groups.push({
            option: {
                name: t._desktopLang.MenuItem_Close,
                handler: function() {
                    e.destroy()
                }
            }
        }), i
    },
    addTask: function(e) {
        e._taskItem && _.isUndefined(this._tasks[e._appWinId]) && (this.find(".layout-taskbar-container").append(e._taskItem.context_Menu(this.getTaskItemContextMenu(e))), this._tasks[e._appWinId] = e), $(window).trigger("resize")
    },
    deleteTask: function(e) {
        e._taskItem && (e._taskItem.remove(), delete this._tasks[e._appWinId]), $(window).trigger("resize")
    },
    highlightTask: function(e) {
        _.isNull(e._taskItem) || (this.normalAllTasks(), e._taskItem.addClass("active"), this._currentHighLightApp = e)
    },
    normalAllTasks: function() {
        this._currentHighLightApp = null, this.find(".layout-taskbar-container .task-item").removeClass("active")
    },
    updateDeviceStatus: function() {
        var e, t, i, n, o, r = this,
            a = Airdroid.DeviceManage.getCurrentDeviceObj();
        if (o = a.getDeviceStatusObj(), n = Airdroid.Message, this.showTaskbar(), r._taskBarDom.find(".device-status").removeClass("layout-taskbar-hidden"), o.battery > -1 && (e = o.battery / 100, t = this.find(".layout-taskbar-battery-v").width(), i = (t * e).toFixed(0), o.batterycharging ? (this.addBetteryChargingIcon(), Airdroid.Util.Notifications.removeNoticeByReplaceId("battery")) : this.removeBatteryChargingIcon(), this.BATTER_LOW_VALUE >= e ? this.setBatterIconRed() : this.setBatteryIconWhite(), this.updateBatteryIconAvailble(i), this.updateBatteryIconPercent(o), !o.batterycharging && this.BATTER_LOW_VALUE >= e && Airdroid.Util.Notification.showBatteryNotice({
                replaceId: "battery",
                power: Math.round(100 * e)
            })), this.find(".layout-taskbar-wifi").attr("class", "layout-taskbar-wifi wifi" + (_.isUndefined(o.wifi_signal) ? "" : o.wifi_signal)).attr("title", o.wifi_name), this.find(".layout-taskbar-signal").attr("class", "layout-taskbar-signal signal" + (_.isUndefined(o.gsm_signal) || 0 > parseInt(o.gsm_signal) ? "0" : o.gsm_signal)), o.sms_unread > 0) {
            var s = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.smsNotice.name);
            Airdroid.Util.checkAndroidLevel4P4() || (s.icon && n.showDesktopIconNotice("MessageList", o.sms_unread), s.led && n.createLEDTitle("sms", r.util.getLang("TitleWidget", "Message_ReceivedMessages").format(o.sms_unread), o.sms_unread), a.setHasUnreadSMS(!0))
        } else 0 >= o.sms_unread && a.isHasUnreadSMS() && (n.hideDesktopIconNotice("MessageList"), n.clearLEDTitle("sms"), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.msg_sms_refreshList), a.setHasUnreadSMS(!1), Airdroid.Util.Notifications.removeAllMessageNotice());
        o.call_unread > 0 ? (Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.callNotice.name).icon && n.showDesktopIconNotice("CallLog", o.call_unread), Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.callNotice.name).led && n.createLEDTitle("call", r._dialPadLang.Call_Notice.format(o.call_unread), o.call_unread), a.setHasUnreadCall(!0)) : 0 >= o.call_unread && a.isHasUnreadCall() && (n.hideDesktopIconNotice("CallLog"), n.clearLEDTitle("call"), a.setHasUnreadCall(!1))
    },
    setDeviceConnectStatus: function(e) {
        var t = this.find(".connect-status");
        e ? t.removeClass("disconnect") : t.addClass("disconnect")
    },
    isDisconnect: function() {
        return this.find(".connect-status").hasClass("disconnect")
    },
    setConnectModel: function() {
        var e = this,
            t = this.find(".layout-taskbar-connect-model"),
            i = Airdroid.DeviceManage.getCurrentDeviceObj();
        e.find(".device-status").show();
        var n = "local";
        Airdroid.Config.isLiteVersion ? n = "lite" : i.isRemote() && (n = "remote"), t.addClass("connect-" + n), t.unbind().click(function(t, i) {
            switch (!0) {
                case Airdroid.UserManage.isUserOtherLogin():
                    Airdroid.CenterManage.showReLogin();
                    break;
                case e.isDisconnect() && Airdroid.Util.checkShowReconnectTip():
                    e.showReconnectTip(i);
                    break;
                case "local" == n:
                    e.showLocalConnectTip();
                    break;
                case "remote" == n:
                    e.showRemoteConnectTip();
                    break;
                case "lite" == n:
                    e.showLiteConnectTip();
                    break;
                default:
            }
        }), e.renderConnectModel(n), t.trigger("click", !0)
    },
    showLocalConnectTip: function() {
        Airdroid.Util.Notification.showBalloonTip({
            replaceId: "connectStatus",
            targetSelector: ".connect-local",
            content: this._desktopLang.LanConnectMode
        })
    },
    showLiteConnectTip: function() {
        var e = Airdroid.Util.getLang("Common"),
            t = Airdroid.Util.getTemplate("sys", "lite2web_tip", {
                items: [{
                    title: e.Lite2Web_title1,
                    desc: e.Lite2Web_desc1.format("web.airdroid.com"),
                    img: Airdroid.Service.getImgAssets("lite2web_tip1.png")
                }, {
                    title: e.Lite2Web_title2,
                    desc: e.Lite2Web_desc2,
                    img: Airdroid.Service.getImgAssets("lite2web_tip2.png")
                }, {
                    title: e.Lite2Web_title3,
                    desc: e.Lite2Web_desc3,
                    img: Airdroid.Service.getImgAssets("lite2web_tip3.png")
                }, {
                    title: e.Lite2Web_title4,
                    desc: e.Lite2Web_desc4,
                    img: Airdroid.Service.getImgAssets("lite2web_tip4.png")
                }],
                bt_text: e.start_web_airdroid
            });
        Airdroid.Util.Notification.showBalloonTip({
            replaceId: "connectStatus",
            className: ".balloon-lite",
            targetSelector: ".connect-lite",
            content: t
        }), $("#airtip_connectStatus .slide").looper({
            interval: 3e3
        }), $("#airtip_connectStatus .btn").click(function() {
            Airdroid.Util.trackEvent("Lite to web")
        })
    },
    showRemoteConnectTip: function() {
        if (!this.isLoadingDatafolw) {
            this.isLoadingDatafolw = !0;
            var e = this,
                t = "connectRemote",
                i = this.util.bytesToSize;
            Airdroid.UserManage.getMonthDataFlow(function(n) {
                e.isLoadingDatafolw = !1;
                var o, r = n,
                    a = r.used,
                    s = r.total;
                a = Math.min(a, s), o = 202 * (a / s), a = i(Math.round(a)), s = i(Math.round(s)), e.showRemoteConnectBalloon(t, a, s, o)
            }, function() {})
        }
    },
    showRemoteConnectBalloon: function(e, t, i, n) {
        var o = this,
            r = this._desktopLang.RemoteConnectMode + ['<div class="month-dataflow-track" style="display: block;">', '   <div class="month-dataflow-used" style="width: ' + n + 'px;"></div>', '   <div class="month-dataflow-info">' + t + "/" + i + "</div>", "</div>"].join(""),
            a = function() {
                var e = $(this);
                e.css("cursor", "pointer"), e.click(function() {
                    Airdroid.AppManage.createAppByAppId(o.config.dependApps.userCenter, {
                        tab: "account"
                    })
                })
            };
        Airdroid.Util.Notification.showBalloonTip({
            replaceId: "connectStatus",
            targetSelector: ".connect-remote",
            content: r,
            onclick: a
        })
    },
    showReconnectTip: function(e) {
        var t, i = this._commonLang;
        t = "<p>" + i.connect_stop_tip, t += '<span class="btn btn-primary connect-model-reconnect">', t += i.label_reconnect, t += "</div>", t += '</p><div class="clearfix"></div>';
        var n = $(t);
        n.find(".btn.connect-model-reconnect").click(function() {
            _.isFunction(e) ? e() : Airdroid.CenterManage.reconnectPhone()
        }), Airdroid.Util.Notification.showBalloonTip({
            replaceId: "connectStatus",
            className: "balloon-reconnect",
            targetSelector: ".layout-taskbar-connect-model",
            content: n,
            delay: 3e4,
            hideOnOutsideClick: !1
        })
    },
    removeReconnectTip: function() {
        $("#airtip_connectStatus").hide()
    },
    renderConnectModel: function(e) {
        var t = this,
            i = t.find(".layout-taskbar-wifi"),
            n = t.find(".layout-taskbar-connect-model"),
            o = t.find(".layout-taskbar-signal-3G");
        o.hide(), "local" == e ? (n.removeClass("connect-remote").addClass("connect-local"), i.show()) : "remote" == e && (n.removeClass("connect-local").addClass("connect-remoete"), Airdroid.DeviceManage.checkCurrentDeviceIs3G() ? (i.hide(), o.show()) : i.show())
    },
    createTaskItem: function(e) {
        var t = $(this.util.getTemplate("sys/taskbar", "taskbar_item", e));
        return t.find("img").error(function() {
            $(this).attr("src", Airdroid.Service.getImgAssets("feature/contact.png"))
        }).attr("src", e.task_icon), t
    },
    createNotifyIconItem: function(e) {
        return $(this.util.getTemplate("sys/taskbar", "notify_icon", e))
    },
    find: function(e) {
        return this._taskBarDom.find(e)
    },
    hideTaskBar: function() {
        this._taskBarDom.hide()
    },
    showTaskBar: function() {
        this._taskBarDom.show()
    },
    clearTaskBar: function() {
        this.find(".layout-taskbar-container").empty(), this.find(".layout-notify-container").find(".notify-icon-app").remove(), _.each(this._tasks, function(e) {
            e.destroy()
        }), this._tasks = {}
    },
    addNotifyIcon: function(e) {
        this.find(".layout-notify-container").prepend(e)
    },
    setBatterIconRed: function() {
        this.find(".layout-taskbar-battery-vbg").addClass("i-taskbar-battery-vbg-red")
    },
    setBatteryIconWhite: function() {
        this.find(".layout-taskbar-battery-vbg").removeClass("i-taskbar-battery-vbg-red")
    },
    addBetteryChargingIcon: function() {
        this.find(".layout-taskbar-battery-v").addClass("i-taskbar-battery-v-charging")
    },
    removeBatteryChargingIcon: function() {
        this.find(".layout-taskbar-battery-v").removeClass("i-taskbar-battery-v-charging")
    },
    updateBatteryIconAvailble: function(e) {
        this.find(".layout-taskbar-battery-vbg").css("width", isNaN(e) ? 0 : e + "px")
    },
    updateBatteryIconPercent: function(e) {
        this.find(".layout-taskbar-battery-v").html(_.isUndefined(e.battery) ? "Error" : e.battery + "%")
    },
    showTaskbar: function() {
        this.find(".device-status").removeClass("layout-taskbar-hidden")
    }
})), Airdroid.DesktopManage = new(Core.extend(Airdroid.Base, {
    _appSingleWindows: {},
    _desktops: {},
    _currentDesktop: null,
    _navBarDom: null,
    _navBarDomWidth: "514px",
    _defaultDesktopIndex: "1",
    _isAtSwitch: !1,
    _animateDone: !0,
    _searchInputWidth: {
        normal: 200,
        focus: 353,
        searchIconLeft: 377
    },
    _isDefaultDesktops: !0,
    _oDashboard: null,
    _construct: function() {
        this.PRE_DESKTOP_INDEX = 1
    },
    switchMode: function() {
        var e = this;
        e._aboutUsDom && e._aboutUsDom.remove(), $(document).trigger("click");
        var t = parseInt($(".layout-desktops-container").width() / 4),
            i = parseInt($(".layout-desktops-container").height() / 4),
            n = parseInt(.28 * ($(".layout-desktops-container").width() - $(".layout-desktops-container").height()) / 4);
        n > 0 ? t -= n : i += n;
        var o = [{
                x: -t,
                y: -i
            }, {
                x: t,
                y: -i
            }, {
                x: -t,
                y: i
            }, {
                x: t,
                y: i
            }],
            r = parseInt(1.72 * $(".layout-desktops-container").width() / 4),
            a = parseInt(1.72 * $(".layout-desktops-container").height() / 4),
            s = [{
                x: -r,
                y: -a
            }, {
                x: r,
                y: -a
            }, {
                x: -r,
                y: a
            }, {
                x: r,
                y: a
            }];
        e._currentDesktop._desktopDom.hide();
        for (var c = 0; 4 > c; c++) e._desktops["desktop_" + (c + 1)]._desktopDom.css("left", s[c].x + "px").css("top", s[c].y + "px").css("opacity", "0").css("overflow", "hidden").addClass("desktop-scaled").find(".desktop-switch-indextext").css("font-size", parseInt($(".layout-desktops-container").height() / 3) + "px").end();
        for (var d = _.debounce(function() {
            if (Airdroid.Runtime.SwitchDesktop.Desktops = [], $.browser.mozilla && 12 > parseInt($.browser.version.substr(0, 2)))
                for (var t = 0; 4 > t; t++) {
                    var i = e._desktops["desktop_" + (t + 1)]._desktopDom;
                    Airdroid.Runtime.SwitchDesktop.Desktops.push({
                        x1: i.offset().left + .64 * i.width() / 2,
                        x2: i.offset().left + .36 * i.width() + .64 * i.width() / 2,
                        y1: i.offset().top + .64 * i.height() / 2,
                        y2: i.offset().top + .36 * i.height() + .64 * i.height() / 2,
                        dom: i
                    })
                } else
                for (var t = 0; 4 > t; t++) {
                    var i = e._desktops["desktop_" + (t + 1)]._desktopDom;
                    Airdroid.Runtime.SwitchDesktop.Desktops.push({
                        x1: i.offset().left,
                        x2: i.offset().left + .36 * i.width(),
                        y1: i.offset().top,
                        y2: i.offset().top + .36 * i.height(),
                        dom: i
                    })
                }
            e._isAtSwitch && ($(".window .window_switch_mask").show(), $(".widget .widget_switch_mask").show(), $(".window").draggable("option", "handle", ".window_switch_mask"), $(".desktopicon").draggable("option", "disabled", !0))
        }, 300), c = 0; 4 > c; c++) e._animateDone = !1, e._desktops["desktop_" + (c + 1)]._desktopDom.show().animate({
            left: o[c].x + "px",
            top: o[c].y + "px",
            opacity: 1
        }, 300, function() {
            d(), e.PRE_DESKTOP_INDEX = e._currentDesktop._desktopIndex, e._animateDone = !0
        })
    },
    doSearch: function(e) {
        window.open("https://market.android.com/search?q=" + e + "&so=1&c=apps")
    },
    resizeNavBarWithMultiDesktop: function() {
        Airdroid.Config.isLiteVersion || (Airdroid.Util.checkSupportMultiDesktop() ? (this._navBarDomWidth = this._navBarDomWidth - 30, this._searchInputWidth.normal = this._searchInputWidth.normal - 30, Airdroid.Util.checkUserLogin() && (this._searchInputWidth.focus = this._searchInputWidth.focus - 30, this._searchInputWidth.searchIconLeft = this._searchInputWidth.searchIconLeft - 30)) : Airdroid.Util.checkUserLogin() && (this._searchInputWidth.normal = this._searchInputWidth.normal + 30))
    },
    initNavBar: function() {
        var e = this;
        Airdroid.Config.isLiteVersion ? this._searchInputWidth = {
            normal: 215,
            focus: 353,
            searchIconLeft: 377
        } : Airdroid.Runtime.QRNoAccount ? this._searchInputWidth = {
            normal: 200,
            focus: 353,
            searchIconLeft: 377
        } : Airdroid.UserManage.checkUserLogin() ? (this._navBarDomWidth = 544, Airdroid.UserManage.checkUserHasMultiDevices() ? (this._searchInputWidth = {
            normal: 160,
            focus: 413,
            searchIconLeft: 437
        }, this._navBarDomWidth = 574) : this._searchInputWidth = {
            normal: 160,
            focus: 383,
            searchIconLeft: 407
        }) : this._searchInputWidth = {
            normal: 200,
            focus: 353,
            searchIconLeft: 377
        }, e.resizeNavBarWithMultiDesktop(), e._navBarDom = $(".block-topNav"), 0 == e._navBarDom.length && (e._navBarDom = $(e.util.getTemplate("sys", "navbar", {
            Common: e.util.getLang("Common")
        })).appendTo(Airdroid.CenterManage._desktopContainerDom)), e._navBarDom.find(".nav").width(e._navBarDomWidth);
        var t = e._navBarDom.find(".nav-oprate");
        Airdroid.Config.isLiteVersion ? t.find(".multidevice,.usercenter,.placard,.switch,.theme, .dashboard").hide() : t.find(".multidevice,.usercenter,.splite,.logout,.theme").hide(), Airdroid.Util.checkSupportMultiDesktop() || t.find(".switch").hide(), e._navBarDom.find(".about").unbind().click(function(t) {
            return Airdroid.Runtime.SwitchDesktop.AtSwitch || $(".about-us").size() > 0 ? !1 : Airdroid.Util.checkUserLogin() ? (Airdroid.AppManage.createAppByAppId(e.config.dependApps.userCenter, {
                tab: "about"
            }), Airdroid.Util.cancelEventBubble(t), void 0) : (e._aboutUsDom = $(e.util.getTemplate("sys", "sys_about_us", {
                UsedLang: e.util.getLang("About"),
                CommonLang: e.util.getLang("Common"),
                Version: Airdroid.Config.version
            })).find(".closeBTN").click(function() {
                return e._aboutUsDom.remove(), !1
            }).end().appendTo(Airdroid.CenterManage._desktopContainerDom), e._aboutUsDom.click(function() {
                $(this).css("z-index", e._currentDesktop.getTopperZIndex())
            }), e._aboutUsDom.css("z-index", e._currentDesktop.getTopperZIndex()), !1)
        }), e._navBarDom.find(".about").bind({
            mouseenter: function() {
                $(this).find(".robote").css("background", 'url("' + Airdroid.Service.getImgAssets("") + 'robote_h.gif")')
            },
            mouseleave: function() {
                $(this).find(".robote").css("background", 'url("' + Airdroid.Service.getImgAssets("") + 'robote.gif")')
            }
        }), e._navBarDom.find(".nav-oprate .language").unbind().click(function() {
            Airdroid.AppManage.createAppByAppId(e.config.dependApps.Language)
        }), e._navBarDom.find(".logout").unbind().click(function() {
            var t = e.util.getLang("Common", "SureToExit");
            Airdroid.Config.isLiteVersion && (t = e.util.getLang("Common", "SureToExitAndCloseTab")), e.util.confirm(t, function() {
                if (Airdroid.Config.isLiteVersion) {
                    var e = window.open("about:blank", "_self");
                    e.opener = null, e.close()
                } else Airdroid.Util.deleteCookie("account_info", "/", ".airdroid.com"), Airdroid.Util.deleteCookie("account_kp", "/", ".airdroid.com"), Airdroid.DeviceManage.isCurrentDeviceConnected() ? Airdroid.Service.sendLogoutCommand(function() {
                    Airdroid.Util.reload()
                }) : Airdroid.Util.reload()
            }), Airdroid.Util.trackEvent("Sys-DesktopManage", "Logout")
        });
        var i = e._navBarDom.find(".NV_Icon_Switch_Search"),
            n = e._navBarDom.find(".NV_Search_Menu"),
            o = e._navBarDom.find(".NV_Search_Menu_Item"),
            r = e._navBarDom.find(".NV_Icon_Preview"),
            a = '<a menu="{2}" class="NV_Search_Menu_Item" format="{1}"><div class="NV_Search_Menu_Icon {2}"></div>{0}</a>';
        n.html("");
        var s = _.pluck(Airdroid.Config.quickSearch, "css").join(" "),
            c = e.util.getCookie("desktop-search-icon"),
            d = null;
        c && "Quixey" == c ? (d = Airdroid.Config.quickSearch[1], r.removeClass(s).addClass(d.css).attr("format", d.search).attr("name", d.name)) : c && "Google Play" == c && (d = Airdroid.Config.quickSearch[0], r.removeClass(s).addClass(d.css).attr("format", d.search).attr("name", d.name)), "en" == Airdroid.Runtime.locale ? (d = Airdroid.Config.quickSearch[1], r.removeClass(s).addClass(d.css).attr("format", d.search).attr("name", d.name), i.find(".NV_Icon_Preview_Suffix").hide()) : _.each(Airdroid.Config.quickSearch, function(t) {
            $(a.format(t.name, t.search, t.css)).click(function() {
                r.removeClass(s).addClass(t.css).attr("format", t.search).attr("name", t.name), e.util.setCookie("desktop-search-icon", t.name)
            }).appendTo(n)
        }), i.unbind().click(function() {
            if ("en" == Airdroid.Runtime.locale) return !1;
            $(document).trigger("click");
            var e = $(this).offset();
            return n.css("left", e.left + "px").css("top", e.top + 36 + "px").toggle(), !1
        }), o.unbind().click(function() {
            return n.hide(), !1
        });
        var l = e._navBarDom.find(".NV_Input_Search").css("width", e._searchInputWidth.normal + "px"),
            u = e._navBarDom.find(".NV_Icon_Input_Search").css("left", e._searchInputWidth.searchIconLeft + "px");
        l.unbind().focus(function() {
            l.attr("placeholder", e.util.getLang("Common").InputDynamicText_Search), l.animate({
                width: e._searchInputWidth.focus
            }, function() {
                l.is(":focus") && u.show()
            }), t.animate({
                opacity: 0
            })
        }).blur(function() {
            l.attr("placeholder", e.util.getLang("Common").InputDefaultText_Search), l.animate({
                width: e._searchInputWidth.normal
            }), t.animate({
                opacity: 1
            }), setTimeout(function() {
                u.hide()
            }, 300)
        }).keyup(function(e) {
            var t = $.trim($(this).val());
            e.shiftKey || 13 != e.keyCode || (t.length > 0 && ("Quixey" === r.attr("name") ? Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.quixey, t) : (window.open(r.attr("format").format(t)), $(this).trigger("blur")), u.hide()), Airdroid.Util.trackEvent("Sys-DesktopManage", "Search"))
        }), u.unbind().click(function() {
            var e = $.trim(l.val());
            e.length > 0 && ("Quixey" === r.attr("name") ? Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.quixey, e) : window.open(r.attr("format").format(e))), $(this).hide(), Airdroid.Util.trackEvent("Sys-DesktopManage", "Search")
        }), e._navBarDom.find(".nav-oprate>div").not(".logout,.language").unbind().click(function() {
            if (Airdroid.Runtime.SwitchDesktop.AtSwitch) return !1;
            var t = $(this).attr("menu");
            if ("msg" == t) {
                var i = {
                    type: "newsms"
                };
                Airdroid.DesktopManage._currentDesktop._windowManage.mergerChatWindow(i)
            } else if ("home" == t) Airdroid.DesktopManage._currentDesktop.toggleShowDesktop();
            else {
                if ("switch" == t) {
                    if (Airdroid.Util.checkSupportMultiDesktop()) {
                        if (e._isAtSwitch) return !1;
                        if ($.browser.msie) return !1;
                        e._isAtSwitch = !0, Airdroid.Runtime.SwitchDesktop.AtSwitch = !0, $(".block-taskbar").hide(), $(".sys-dashboard").hide(), e.switchMode(), Airdroid.Util.trackEvent("DesktopSwitch", "Click")
                    } else console.log("not support multi desktop");
                    return !1
                }
                if ("call" == t) Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.DialPad);
                else {
                    if ("placard" == t) return $(document).trigger("click"), Airdroid.Util._placardWidget ? Airdroid.Util._placardWidget.show() : Airdroid.Util.checkUserLogin() && Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.userCenter, {
                        tab: "placard"
                    }), !1;
                    "usercenter" == t ? Airdroid.AppManage.createAppByAppId(e.config.dependApps.userCenter, {
                        tab: "account"
                    }) : "multidevice" == t ? Airdroid.DeviceManage.selectTargetDevice({
                        isSwitch: !0
                    }) : "theme" === t ? Airdroid.AppManage.createAppByAppId(e.config.dependApps.Theme) : "dashboard" === t && e.showDashBoard()
                }
            }
            Airdroid.Util.trackEvent("Sys-DesktopManage", t)
        });
        var p = function(t) {
            for (var i = 0; 4 > i; i++) e._desktops["desktop_" + (i + 1)]._desktopDom.hide().css("left", "0px").css("top", "0px").css("opacity", "").removeClass("desktop-scaled");
            e._isAtSwitch = !1, Airdroid.Runtime.SwitchDesktop.AtSwitch = !1, e._currentDesktop._desktopIndex == parseInt($(t).attr("nindex")) ? e._desktops[$(t).attr("index")]._desktopDom.css("overflow", "visible").css("width", "100%").css("height", "100%").show() : e.setCurrentDesktop(e._desktops[$(t).attr("index")]), $(".block-taskbar").show(), $(".window .window_switch_mask").hide(), $(".widget .widget_switch_mask").hide(), $(".window").draggable("option", "handle", ".window_title"), $(".desktopicon").draggable("option", "disabled", !1), e.PRE_DESKTOP_INDEX != e._currentDesktop._desktopIndex && Airdroid.TaskbarManage.normalAllTasks(), e.PRE_DESKTOP_INDEX = e._currentDesktop._desktopIndex, _.each(Airdroid.DesktopManage._appSingleWindows, function(t) {
                e._currentDesktop._desktopIndex == t._desktop._desktopIndex && t.triggerDesktopSwitchEvent()
            });
            for (var n in Airdroid.DesktopManage._currentDesktop._windowManage._appMultiWindows) _.each(Airdroid.DesktopManage._currentDesktop._windowManage._appMultiWindows[n], function(t) {
                e._currentDesktop._desktopIndex == t._desktop._desktopIndex && t.triggerDesktopSwitchEvent()
            })
        };
        $(".desktop-switch-mask").live("click", function() {
            return e._animateDone ? (p(this), !1) : void 0
        }), $("#block-desktop").click(function() {
            e._isAtSwitch && e._animateDone && p($('.desktop-switch-mask[nindex="' + e._currentDesktop._desktopIndex + '"]'))
        })
    },
    showDashBoard: function() {
        var e = this;
        e._oDashboard || (e._oDashboard = new Airdroid.Dashboard), e._oDashboard.toggleShow()
    },
    changeNavUser: function() {
        if (this.initNavBar(), this.util.checkUserLogin()) {
            $(".block-topNav .usercenter").addClass("logined"), this._navBarDom.find(".usercenter,.splite,.logout").show();
            var e = this._navBarDom.find(".nav");
            Airdroid.UserManage.checkUserHasMultiDevices() ? (this._navBarDom.find(".multidevice").show(), e.width(this._navBarDomWidth)) : (this._navBarDom.find(".multidevice").hide(), e.width(this._navBarDomWidth))
        } else this._navBarDom.find(".NV_Input_Search").css("width", this._searchInputWidth.normal + "px")
    },
    setDefaultDesktops: function() {
        this._isDefaultDesktops = !0
    },
    isDefaultDesktops: function() {
        return this._isDefaultDesktops
    },
    initDesktops: function(e) {
        var t = this;
        if (e) t.createDefaultDesktops(), t.initDesktopsIconContextMenu(), t._isDefaultDesktops = !0;
        else {
            t._isDefaultDesktops = !1;
            for (var i in t._desktops) t.checkIsDashboard(i) || t._desktops[i].clearDesktop();
            Airdroid.TaskbarManage.clearTaskBar(), Airdroid.DesktopManage._appSingleWindows = {}
        }
        Airdroid.AppManage.initApps(), $(window).trigger("resize"), e || Airdroid.DeviceManage.getCurrentDeviceStatusObj() && Airdroid.TaskbarManage.updateDeviceStatus()
    },
    createDefaultDesktops: function() {
        if (Airdroid.Config.isLiteVersion || !Airdroid.Util.checkSupportMultiDesktop()) this.createDesktop(1), Airdroid.Config.isLiteVersion || (this._oDashboard = new Airdroid.Dashboard);
        else
            for (var e = 1; 4 >= e; e++) this.createDesktop(e);
        Airdroid.DesktopManage._currentDesktop.bindLinkDataChange()
    },
    initAppDeskTop: function(e) {
        var t = this,
            i = t.getDesktop(e.dindex);
        _.isUndefined(i) || (i.createAppDesktopIcon(e), e.opts.autoRun && 1 == e.opts.autoRun && Airdroid.AppManage.checkLoginLevel(e.loginLevel) && (Airdroid.Runtime.bgListLoaded ? i._windowManage.createApp(e, {}) : i._autoRunApps.push(e)))
    },
    getDesktop: function(e) {
        var t = this,
            i = "desktop_" + e;
        return t._desktops[i]
    },
    createDesktop: function(e) {
        var t = this,
            i = "desktop_" + e,
            n = new Airdroid.Desktop;
        n._desktopIndex = e, n.initDesktop(i), t._desktops[i] = n, e == t._defaultDesktopIndex && t.setCurrentDesktop(n)
    },
    initDesktopsIconContextMenu: function() {
        for (var e in this._desktops) this._desktops[e].initDesktopIconContextMenu()
    },
    setCurrentDesktop: function(e) {
        var t = "left",
            i = this;
        if (i._currentDesktop != e) {
            null != i._currentDesktop ? (i._currentDesktop._desktopIndex > e._desktopIndex && (t = "right"), i.desktopSwitchEffect(i._currentDesktop._desktopDom, e._desktopDom, t), i._currentDesktop = e) : (i._currentDesktop = e, i._currentDesktop._desktopDom.show()), _.each(Airdroid.DesktopManage._appSingleWindows, function(e) {
                i._currentDesktop._desktopIndex == e._desktop._desktopIndex && e.triggerDesktopSwitchEvent()
            });
            for (var n in Airdroid.DesktopManage._currentDesktop._windowManage._appMultiWindows) _.each(Airdroid.DesktopManage._currentDesktop._windowManage._appMultiWindows[n], function(e) {
                i._currentDesktop._desktopIndex == e._desktop._desktopIndex && e.triggerDesktopSwitchEvent()
            });
            e._desktopDom.css("overflow", "visible"), $(".block-taskbar").show(), $(".widget .widget_switch_mask").hide(), $(".window").draggable("option", "handle", ".window_title"), $(".desktopicon").draggable("option", "disabled", !1)
        }
    },
    desktopSwitchEffect: function(e, t) {
        $.browser.msie ? (e.css("left", "0").css("top", "0").hide(), t.css("left", "0").css("top", "0").css("overflow", "visible").css("width", "100%").css("height", "100%").show(), $(window).trigger("resize")) : (e.css("left", "0").css("top", "0").hide(), t.show().animate({
            transform: "scale(1)",
            left: 0,
            top: 0
        }, function() {
            t.css("transform", ""), $(window).trigger("resize")
        }))
    },
    onWindowResize: function() {
        var e = this;
        if (!e._oDashboard || !e._oDashboard.isVisible()) {
            e._isAtSwitch && e.switchMode();
            var t = $(window).width(),
                i = $(window).height();
            Airdroid.CenterManage._desktopContainerDom.find(".layout-desktops-container").css({
                width: t + "px",
                height: i - 85 + "px"
            }), _.each(e._desktops, function(e) {
                e.reSortDesktopIcon(), _.each(Airdroid.AppManage._userAllDeviceApps, function(t) {
                    t.appId == Airdroid.Config.dependApps.desktopFolder && e.updateDesktopFolderIcon(t.id)
                })
            }), $.rule(".noticeWidget .notice-body", "style").length > 0 ? $.rule(".noticeWidget .notice-body", "style").css("max-width", parseInt(.36 * $(window).width()) + "px") : $.rule(".noticeWidget .notice-body{max-width:" + parseInt(.36 * $(window).width()) + "px}").appendTo("style");
            var n = $(".task-item").size();
            if (0 != n) {
                var o = $(".layout-taskbar-connect-model").offset().left - 5 - 5 * n,
                    r = o / n;
                r > 150 || 0 > o ? $(".task-item").each(function() {
                    $(this).css("width", "150px")
                }) : 40 > r ? $(".task-item").each(function() {
                    $(this).css("width", "40px")
                }) : $(".task-item").each(function() {
                    $(this).css("width", parseInt(r) + "px")
                })
            }
        }
    },
    getCurrentDesktop: function() {
        return this._currentDesktop
    },
    checkIsDashboard: function(e) {
        return "desktop_5" === e
    },
    setWallpaper: function() {
        $("body").append('<div id="block-wallpaper" origin="' + Airdroid.Service.getImgAssets("wallpaper/default.jpg") + '" class="type-scale"><img class="stock" src="' + Airdroid.Service.getImgAssets("wallpaper/default.jpg") + '" /><div class="bg" style=""></div></div>')
    },
    getDashboard: function() {
        return this._oDashboard
    }
})), Airdroid.UserManage = new(Core.extend(Airdroid.Base, {
    account: null,
    hasInfoChange: !0,
    userConfigLoad: !1,
    defaultConfigLoad: !1,
    sendEmailOpt: {
        timer: null,
        count: 0
    },
    _isMonthDataFlowOverage: !1,
    _dataflow: null,
    _isSupportAd: !1,
    _isOtherLogin: !1,
    _isSupportIconAd: !0,
    _goPushPubUrl: "",
    _goPushSubUrl: "",
    GOPUSH_KEY: {
        web: "300",
        phone: "100"
    },
    init: function() {
        this._isSupportAd && head.js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {})
    },
    checkSupportIconAd: function() {
        return this._isSupportIconAd
    },
    editUserAdSetting: function(e, t) {
        var i = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.recommend.name);
        i[e] = i[e] || {};
        var n = i[e];
        switch (t) {
            case "del":
                n.adDelete = !0;
                break;
            case "click":
                n.clickNum = n.clickNum ? parseInt(n.clickNum) + 1 : 1
        }
        Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.recommend.name, i)
    },
    checkShowDesktopAdIcon: function(e) {
        var t = [],
            i = Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.recommend.name),
            n = !1;
        return _.each(e, function(e) {
            var o = !0,
                r = e.id,
                a = JSON.parse(e.data);
            if (_.isObject(i) && !$.isEmptyObject(i) && i[r]) {
                var s = i[r];
                if (s.adDelete) o = !1;
                else {
                    var c = function() {
                        s.adDelete || (n = !0), s.adDelete = !0, o = !1
                    };
                    if (a.show_num && parseInt(a.show_num) > 0) {
                        var d = parseInt(a.show_num);
                        s.showNum = s.showNum || 0, s.showNum = parseInt(s.showNum) + 1, s.showNum > d && c()
                    }
                    if (o && a.click_num && parseInt(a.click_num) > 0) {
                        var l = parseInt(a.click_num);
                        s.clickNum = s.clickNum ? parseInt(s.clickNum) : 0, s.clickNum >= l && c()
                    }
                }
            }
            o && t.push(e)
        }), _.each(i, function(t, o) {
            var r = _.filter(e, function(e) {
                return e.id == o
            });
            0 == r.length && (delete i[o], n = !0)
        }), n && Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.recommend.name, i), t
    },
    getDesktopIconAdData: function(e, t) {
        var i = this;
        return i.checkSupportIconAd() ? Airdroid.DesktopManage.isDefaultDesktops() && !Airdroid.Config.isLiteVersion ? !1 : (head.js(Airdroid.Config.partnerConfigUrl, function() {
            if ($.isEmptyObject(Airdroid.PartnerConfig)) return !1;
            if (Airdroid.Config.openHelper) var n = Airdroid.Util.getPartnerConfigByName("Themer"),
                o = [{
                    id: "1",
                    appId: "1",
                    dindex: "1",
                    dorder: "1",
                    appName: "ApiDemo",
                    dicon: "1",
                    data: '{"open_type":2, "icon":"http://cdn1.airdroid.com/V2081401231936/theme/stock/images/desktopicon/help_80.png", "url":"' + Airdroid.Config.openUrl + '"}',
                    deviceId: "0",
                    folderId: "-1"
                }, {
                    id: "2",
                    appId: "2",
                    dindex: "1",
                    dorder: "1",
                    appName: "Themer",
                    dicon: "1",
                    data: '{"open_type":2, "icon":"http://cdn1.airdroid.com/V2081401231936/theme/stock/images/desktopicon/help_80.png", "url":"' + n.url + '"}',
                    deviceId: "0",
                    folderId: "-1"
                }];
            Airdroid.Config.openHelper ? setTimeout(function() {
                e(o)
            }, 1e3) : Airdroid.Service.getAdAppconfig({}, function(n) {
                1 == n.code ? _.isFunction(e) && e(i.checkShowDesktopAdIcon(n.data)) : _.isFunction(t) && t()
            }, function() {
                _.isFunction(t) && t()
            })
        }), void 0) : !1
    },
    checkNeedShowAd: function() {
        return this._isSupportAd && !Airdroid.Util.checkPremium()
    },
    addAdInModule: function(e, t) {
        if (this.checkNeedShowAd()) {
            var i = {
                    display: "inline-block",
                    width: "319px",
                    height: "64px",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px"
                },
                n = {},
                o = "";
            switch (t) {
                case "sms":
                    n = i, o = "7088549908";
                    break;
                case "file":
                    n = $.extend(i, {
                        width: "260px"
                    }), o = "7533398302"
            }
            var r = $('<ins class="adsbygoogle" data-ad-client="ca-pub-5113868824953234"></ins>');
            r.css(n), r.attr("data-ad-slot", o), e.prepend(r), (adsbygoogle = window.adsbygoogle || []).push({})
        }
    },
    isUserOtherLogin: function() {
        return this._isOtherLogin
    },
    setUserOtherLogin: function(e) {
        this._isOtherLogin = e
    },
    getSendEmailCount: function() {
        return this.sendEmailOpt.count
    },
    emailVerifyTimerStart: function() {
        var e = this;
        clearInterval(e.sendEmailOpt.timer), e.sendEmailOpt.count = 59, e.sendEmailOpt.timer = setInterval(function() {
            Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.email_vierfy, {
                count: e.sendEmailOpt.count
            }), 0 == e.sendEmailOpt.count ? clearInterval(e.sendEmailOpt.timer) : e.sendEmailOpt.count -= 1
        }, 1e3)
    },
    setDefaultConfigLoad: function(e) {
        this.defaultConfigLoad = !0, Airdroid.Config.isLiteVersion || (e.webVer = Airdroid.Config.webVer, console.log(""), Airdroid.Util.setLocalStorageItem("airdroid_dacc", encodeURIComponent(JSON.stringify(e))))
    },
    checkDefaultConfigLoad: function() {
        return this.defaultConfigLoad
    },
    setUserConfigLoad: function(e) {
        this.userConfigLoad = !0, Airdroid.AppManage.checkDefaultReplaceWithFail() || (e.webVer = Airdroid.Config.webVer, console.log(""), Airdroid.Util.setLocalStorageItem("airdroid_uacc", encodeURIComponent(JSON.stringify(e))))
    },
    checkUserConfigLoad: function() {
        return this.userConfigLoad
    },
    clearUserAppConfigCache: function() {
        console.log("，"), Airdroid.Util.removeLocalStorageItem("airdroid_uacc")
    },
    clearDefaultAppConfigCache: function() {
        console.log(""), Airdroid.Util.removeLocalStorageItem("airdroid_dacc")
    },
    checkUserHasMultiDevices: function() {
        return this.account && this.account.device && this.account.device.length > 1 ? !0 : !1
    },
    setAccount: function(e) {
        e ? (this.account && delete this.account.device, this.account = $.extend(!0, {}, this.account, e)) : this.account = null
    },
    getAccount: function() {
        return this.account
    },
    getAppConfigLastModify: function() {
        return this.account ? this.account.app_last_modify : 0
    },
    getAccountNickName: function() {
        return this.account ? this.account.nickname : ""
    },
    getAccountId: function() {
        return this.account ? this.account.id : ""
    },
    getAccountMail: function() {
        return this.account ? this.account.mail : ""
    },
    getAccountCounty: function() {
        return this.account && this.account.country ? this.account.country.en_key || "" : ""
    },
    checkUserByAccountId: function(e) {
        return e ? this.getAccountId() == e : !1
    },
    checkUserLogin: function() {
        return this.account ? !0 : !1
    },
    getAccountName: function() {
        return this.account ? this.account.name : ""
    },
    getAccountPremium: function() {
        return this.account ? this.account.isPremium : -1
    },
    setAccountPremium: function(e) {
        this.account.isPremium = e
    },
    isBindDevice: function() {
        return this.account && this.account.device ? "1" == this.account.has_device || this.account.device.length > 0 : !1
    },
    getDevices: function() {
        var e = this.account.device || [];
        return _.isArray(e) || (e = [], _.isObject(this.account.device) && e.push(this.account.device)), e
    },
    setDevices: function(e) {
        this.account.device = e
    },
    checkPremium: function() {
        return this.getAccountPremium() >= 0 ? !0 : !1
    },
    checkInfoChange: function() {
        return this.hasInfoChange
    },
    setInfoChange: function() {
        this.hasInfoChange = !0
    },
    changeUserInfo: function(e, t, i) {
        var n = this,
            o = {
                submit: "ajax"
            };
        o = $.extend(!0, {}, o, e), Airdroid.Service.changeUserInfo(o, function(e) {
            100 == e.code ? (_.isFunction(t) && t(), n.setInfoChange(), n.getUserInfo()) : 102 == e.code && _.isFunction(i) && i()
        }, function() {
            _.isFunction(i) && i()
        })
    },
    sendEmailVerify: function(e, t) {
        Airdroid.Service.sendEmailVerify(function(i) {
            1 == i.code ? _.isFunction(e) && e() : _.isFunction(t) && t()
        }, function() {
            _.isFunction(t) && t()
        })
    },
    changePassword: function(e, t, i) {
        var n = this,
            o = {
                submit: "ajax"
            };
        o = $.extend(!0, {}, o, e), Airdroid.Service.changePassword(o, function(e) {
            if (100 == e.code) _.isFunction(t) && t(), Airdroid.Util.deleteCookie("account_kp", "/", ".airdroid.com");
            else {
                var o = "";
                switch (e.code) {
                    case 101:
                        o = n.util.getLang("Common", "NewPwdEqualOldPwd");
                        break;
                    case 102:
                    case 302:
                        o = n.util.getLang("Common", "OldPasswordIncorrect");
                        break;
                    default:
                        o = n.util.getLang("Common", "ChangePwdFail")
                }
                _.isFunction(i) && i(o)
            }
        }, function() {
            _.isFunction(i) && i(n.util.getLang("Common", "ChangePwdFail"))
        })
    },
    changeEmail: function(e, t, i) {
        var n = this;
        Airdroid.Service.changeEmail({
            mail: n.account.mail,
            newmail: e.newmail,
            pwd: e.password
        }, function(o) {
            if (100 == o.code) n.account.mail = e.newmail, _.isFunction(t) && t();
            else {
                var r = "";
                switch (o.code) {
                    case 102:
                        r = Airdroid.Util.getLang("Common", "ConfirmPwdValidateMsg");
                        break;
                    case 103:
                        r = Airdroid.Util.getLang("Common", "not_change");
                        break;
                    case 202:
                        r = Airdroid.Util.getLang("Common", "EmailExist");
                        break;
                    case 203:
                        r = Airdroid.Util.getLang("Common", "EmailValidateMsg");
                        break;
                    default:
                        r = Airdroid.Util.getLang("Common", "ModifyProfileFail")
                }
                _.isFunction(i) && i(r)
            }
        }, function() {
            _.isFunction(i) && i(Airdroid.Util.getLang("Common", "ModifyProfileFail"))
        })
    },
    tpUnbind: function(e, t, i) {
        var n = this;
        Airdroid.Service.unbind({
            submit: "ajax",
            id: e.id
        }, function(o) {
            "success" == o.msg ? (_.each(n.account.tp_info, function(t) {
                t.id == e.id && Core.Arrays.remove(n.account.tp_info, t)
            }), Airdroid.UserManage.setInfoChange(), Airdroid.UserManage.getUserInfo(), _.isFunction(t) && t()) : _.isFunction(i) && i()
        }, function() {
            _.isFunction(i) && i()
        })
    },
    cancelAutoPay: function(e, t) {
        var i = this;
        Airdroid.Service.cancelRecurring(function(n) {
            "1" == n.code ? (i.account.isRecurring = !1, _.isFunction(e) && e()) : _.isFunction(t) && t()
        }, function() {
            _.isFunction(t) && t()
        })
    },
    getUserInfo: function(e, t, i) {
        var n = this;
        Airdroid.Util.checkSupportGoPush() && (n.getPushPubUrl(), n.getPushSubUrl()), n.checkInfoChange() ? ($.isFunction(i) && i(), Airdroid.Service.getUserInfo(function(t) {
            n.account.device = n.account.device || [], t.device = t.device || [];
            var i = n.account.device.length,
                o = t.device.length;
            if (n.setAccount(t), Airdroid.DeviceManage.initAllDevicesObj(), n.hasInfoChange = !1, n.isBindDevice() && Airdroid.DeviceManage.checkHasCurrentDevice()) {
                var r = Airdroid.DeviceManage.getCurrentDeviceId();
                _.each(n.account.device, function(e) {
                    e.id == r && Airdroid.DeviceManage.setCurrentDevice(e)
                })
            }
            _.isFunction(e) && e(n.account), i != o && Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.device_change, {
                device: t.device
            })
        }, function() {
            _.isFunction(t) && t(n.account)
        })) : _.isFunction(e) && e(n.account), this.updateSnsToken()
    },
    updateSnsToken: function(e) {
        var t = this,
            i = 0,
            n = function() {
                i++, 2 == i && e && e()
            };
        this.account.sns = {
            facebook: {},
            twitter: {}
        }, Airdroid.Service.getFaceBookToken(function(e) {
            t.account.sns.facebook = e, n()
        }), Airdroid.Service.getTwitterToken(function(e) {
            t.account.sns.twitter = e, n()
        })
    },
    checkMonthDataFlowOverage: function() {
        return this._isMonthDataFlowOverage
    },
    setMonthDataFlowOverage: function(e) {
        this._isMonthDataFlowOverage = e
    },
    clearMonthDataCache: function() {
        this._dataflow = null
    },
    getMonthDataCache: function() {
        return this._dataflow
    },
    getMonthDataFlow: function(e, t) {
        var i = this;
        return !Airdroid.DeviceManage.isCurrentDeviceRemote() && i._dataflow ? (e(i._dataflow), void 0) : (Airdroid.Service.monthDataFlow({}, function(n) {
            1 == n.code && n.data ? $.isFunction(e) && (n.data.used = parseInt(n.data.used), n.data.total = parseInt(n.data.total), i._dataflow = n.data, Airdroid.UserManage.updateDataFlow(i._dataflow), e(i._dataflow), Airdroid.Util.trackEvent("dataflow", "get")) : $.isFunction(t) && t()
        }, function() {
            $.isFunction(t) && t()
        }), Airdroid.Service.refreshflowdata(function(e) {
            if ("1" == e.result) {
                var t = Airdroid.DeviceManage.getCurrentDeviceObj();
                t.isConnect() || !t.isRemote() || t.isConnecting() || t.getRemoteSocket().closeSocket()
            }
        }), void 0)
    },
    updateDataFlow: function(e) {
        this._dataflow = $.extend(!0, {}, this._dataflow, e), parseInt(e.used) >= parseInt(e.total) ? this.monthDataFlowOverage() : this.setMonthDataFlowOverage(!1)
    },
    monthDataFlowOverageFromPhone: _.throttle(function() {
        Airdroid.Util.trackEvent("dataflow", "phone_over"), Airdroid.UserManage.getMonthDataFlow(function() {
            Airdroid.UserManage.checkMonthDataFlowOverage() ? Airdroid.Util.trackEvent("dataflow", "phone_over_right") : Airdroid.Util.trackEvent("dataflow", "phone_over_wrong")
        }, function() {
            Airdroid.UserManage.monthDataFlowOverage()
        })
    }, 1e4),
    monthDataFlowOverage: function() {
        Airdroid.UserManage.setMonthDataFlowOverage(!0), this.showMonthFlowAlert()
    },
    showMonthFlowAlert: _.throttle(function() {
        if (Airdroid.DeviceManage.isCurrentDeviceRemote()) {
            var e = Airdroid.Util.getLang("Common"),
                t = Airdroid.Util.checkPremium();
            Airdroid.Util.setNextDialogLevel(Airdroid.Util.DIALOGLEVEL.LEVEL3), Airdroid.Util.customAlertBoxHasBottom({
                description: Airdroid.Util.getTemplate("widget", "overage", {
                    isPremiun: t,
                    lang: e
                }),
                bottomBar: {
                    hasOkBtn: {
                        msg: t ? e.Increase_Quota : e.Upgrade_to_Premium_User,
                        clickHandle: function() {
                            t ? Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.IncreaseData, {}) : Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.remote_free_overage)
                        }
                    },
                    hasCancelBtn: {}
                },
                showHandle: function() {
                    Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.userUpdate, function() {
                        Airdroid.Util.closeCurrentBlock()
                    }), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.Increase_Quota, function() {
                        Airdroid.Util.closeCurrentBlock()
                    })
                }
            }), Airdroid.Util.trackEvent("dataflow", "over")
        }
    }, 5e3),
    getPushSubUrl: function(e) {
        var t = this;
        if (!t.checkUserLogin()) return !1;
        if (this._goPushSubUrl) _.isFunction(e) && e(this._goPushSubUrl);
        else {
            var i = 0,
                n = 2,
                o = function() {
                    n > i && (i += 1, $.ajax.apply($, r))
                },
                r = [{
                    url: Airdroid.Config.loadBalanceUrl,
                    dataType: "jsonp",
                    data: {
                        id: Airdroid.UserManage.getAccountId(),
                        st: "gopush",
                        side: "sub",
                        dt: "jsonp"
                    },
                    success: function(i) {
                        "1" == i.code ? (t._goPushSubUrl = i.push_ws_sub_url, t.getPushSubUrl(e)) : o()
                    },
                    error: function() {
                        o()
                    }
                }];
            $.ajax.apply($, r)
        }
    },
    getPushPubUrl: function(e) {
        var t = this;
        if (!t.checkUserLogin()) return !1;
        if (this._goPushPubUrl) _.isFunction(e) && e(this._goPushPubUrl);
        else {
            var i = 0,
                n = 2,
                o = function() {
                    n > i && (i += 1, $.ajax.apply($, r))
                },
                r = [{
                    url: Airdroid.Config.loadBalanceUrl,
                    dataType: "jsonp",
                    data: {
                        id: Airdroid.UserManage.getAccountId(),
                        st: "gopush",
                        side: "pub",
                        dt: "jsonp"
                    },
                    success: function(i) {
                        "1" == i.code ? (t._goPushPubUrl = i.push_pub_url, t.getPushPubUrl(e)) : o()
                    },
                    error: function() {
                        o()
                    }
                }];
            $.ajax.apply($, r)
        }
    }
})), Airdroid.Model.IContact = Core.extend(Airdroid.Interface.Base, {}), Airdroid.Model.IImage = Core.extend(Airdroid.Interface.Base, {
    $methods: ["getBucketImages", "getWallpaperImages", "getThumbUrl", "getRawUrl", "deleteById", "search", "setAsWallpaper", "getBuckets", "getBucketImages"],
    $static: {
        EVENT_PAGE_LOADED: "page_loaded"
    }
}),
    function() {
        var e = [],
            t = null;
        Airdroid.Model.Base = Core.extend(Airdroid.Base, {
            _deviceObj: null,
            isEncryption: !0,
            requestPathName: "/sdctl/request",
            requestManyPathName: "/sdctl/requestmany",
            initReady: !1,
            items: [],
            method: "GET",
            $abstract: {
                uri: "",
                projections: []
            },
            $virtual: {
                selection: "",
                sortIterator: function(e) {
                    return parseInt(e._id)
                }
            },
            $construct: function(e) {
                this._deviceObj = e, this.proxyUnderscoreFunctions(), this.proxyDeviceFunctions(), Airdroid.Model.Base.$super.apply(this, arguments)
            },
            proxyUnderscoreFunctions: function() {
                var e = this;
                _.each(["each", "map", "reduce", "reduceRight", "every", "all", "some", "any", "contains", "include", "invoke", "pluck", "max", "min", "sortBy", "groupBy", "countBy", "indexBy", "size", "filter", "reject", "union", "uniq", "find", "where", "findWhere", "first", "last", "rest", "without"], function(t) {
                    e[t] = function() {
                        var i = _.toArray(arguments);
                        return i.unshift(e.items), _[t].apply(_, i)
                    }
                })
            },
            proxyDeviceFunctions: function() {
                var e = this;
                _.each(["isRemote", "getHostAddress", "getToken"], function(t) {
                    e[t] = function() {
                        var i = e._deviceObj;
                        return i[t].apply(i, arguments)
                    }
                })
            },
            sendRequest: function(e, t) {
                var i = $.Deferred();
                t = $.extend({
                    "7bb": this.getToken()
                }, t), /\/$/.test(e) || (e += "/");
                var n = function(e, t) {
                        e = Airdroid.Util.unescape(e), "success" !== t && e.err ? (console.debug("Model.Base: request fail", arguments), i.reject.apply(i, arguments)) : (console.debug("Model.Base: request success", arguments), i.resolve.apply(i, arguments))
                    },
                    o = function() {
                        console.debug("Model.Base: request fail", arguments), i.reject.apply(i, arguments)
                    };
                if (this.isRemote()) {
                    var r = this._deviceObj.getRemoteSocket();
                    r.httpToSocketReuest(e, t, n, o)
                } else $.ajax({
                    url: this.getHostAddress() + e,
                    data: t,
                    type: this.method,
                    dataType: "jsonp"
                }).done(n).fail(o);
                return i
            },
            encryptionParams: function(e) {
                return e = JSON.stringify(e), {
                    params: '{"content":"' + encode64(encodeURIComponent(e)) + '"}'
                }
            },
            _sendModelRequest: function(i, n) {
                var o = this,
                    r = $.Deferred();
                return clearTimeout(t), t = setTimeout(function() {
                    var t = _.clone(e),
                        i = _.map(t, function(e) {
                            return _.omit(e, "defer")
                        });
                    n = o.encryptionParams(i), o.sendRequest(o.requestManyPathName, n).done(function(e) {
                        _.each(t, function(t, i) {
                            t.defer.resolve(e[i], "success")
                        })
                    }).fail(function(e) {
                        _.each(t, function(t, i) {
                            t.defer.reject(e[i], "fail")
                        })
                    }), e.length = 0
                }, 10), e.push({
                    path: i,
                    data: JSON.stringify($.extend({
                        uri: o.uri
                    }, n)),
                    isEncode: 0,
                    defer: r
                }), r
            },
            insert: function(e) {
                var t = $.Deferred(),
                    i = this,
                    n = _.extend({
                        id: _.uniqueId("model_")
                    }, e);
                return this.items.push(n), this.trigger(Airdroid.Model.Base.EVENT_ADD, n), this._sendModelRequest("/insert/", {
                    values: JSON.stringify(e)
                }).done(function(e) {
                    e ? (n._id = e, t.resolve.apply(t, arguments)) : t.reject.apply(t, arguments)
                }).fail(function() {
                    i.items = _.without(i.items, n), t.reject.apply(t, arguments), i.trigger(Airdroid.Model.Base.EVENT_REMOVE, n)
                }), t
            },
            update: function() {
                console.error("Function has not been implement.")
            },
            updateOne: function(e, t) {
                var i = $.Deferred(),
                    n = this,
                    o = _.findWhere(this.items, {
                        id: e
                    }),
                    r = _.clone(o);
                return _.extend(o, t), n.trigger(Airdroid.Model.Base.EVENT_CHANGE, o, r), this._sendModelRequest("/update/one/", {
                    id: o._id,
                    values: JSON.stringify(t)
                }).done(function(e) {
                    1 == e ? i.resolve.apply(i, arguments) : i.reject.apply(i, arguments)
                }).fail(function() {
                    _.extend(o, r), i.reject.apply(i, arguments), n.trigger(Airdroid.Model.Base.EVENT_CHANGE, o, r)
                }), i
            },
            remove: function(e) {
                var t = this,
                    i = $.Deferred(),
                    n = [],
                    o = _.isArray(e) ? e : [e];
                return this.items = _.reject(this.items, function(e) {
                    var t = _.some(o, function(t) {
                        return e.id == t
                    });
                    return t ? (n.push(e), !0) : !1
                }), this._sendModelRequest("/delete/ids/", {
                    ids: JSON.stringify(_.pluck(n, "_id"))
                }).done(function(e) {
                    e == n.length ? i.resolve.apply(i, arguments) : i.reject.apply(i, arguments)
                }).fail(function() {
                    _.each(n, function(e) {
                        t.items.push(e), t.trigger(Airdroid.Model.Base.EVENT_ADD, e)
                    }), i.reject.apply(i, arguments)
                }), i
            },
            query: function(e, t, i, n) {
                var o = this;
                return this._sendModelRequest("/query/", {
                    distinct: !1,
                    projections: JSON.stringify(this.getProjectionsNames(e)),
                    selection: t,
                    selectionArgs: i,
                    sortOrder: n
                }).done(function(e) {
                    var t = {},
                        i = "";
                    o.items = _.map(e, function(e) {
                        return t = {
                            id: _.uniqueId("model_")
                        }, _.each(o.projections, function(n) {
                            i = n.name || n, (e[i] || !_.isUndefined(n.defaultVal)) && (t[i] = e[i] || n.defaultVal)
                        }), t
                    })
                })
            },
            _queryAll: function() {
                return this.query(this.getProjectionsNames(), this.selection || void 0)
            },
            refresh: function() {
                return this._queryAll()
            },
            getProjectionsNames: function(e) {
                return _.map(e || this.projections, function(e) {
                    return e.name || e
                })
            },
            page: function(e, t) {
                t = t || this.items;
                var i, n, o, r;
                return i = e.pcount, n = e.page, o = (n - 1) * i, r = o + i, t.slice(o, r)
            },
            getItems: function() {
                return this.items
            },
            findById: function(e) {
                return this.findWhere({
                    id: e
                })
            },
            sort: function() {
                return this.sortBy(this.sortIterator)
            },
            modelIdToTableId: function(e) {
                return this.findById(e)._id
            },
            modelIdsToTableIds: function(e) {
                var t = this;
                return _.map(e, function(e) {
                    return t.modelIdToTableId(e)
                })
            },
            tableIdToModelId: function(e) {
                return this.findWhere({
                    _id: e
                }).id
            },
            tableIdsToModelIds: function(e) {
                var t = this;
                return _.map(e, function(e) {
                    return t.tableIdToModelId(e)
                })
            },
            isRemote: function() {
                return this._deviceObj.isRemote()
            },
            getHostAddress: function() {
                return this._deviceObj.getHostAddress()
            },
            getToken: function() {
                return this._deviceObj.getToken()
            },
            $static: {
                EVENT_LOADED: "loaded",
                EVENT_ADD: "add",
                EVENT_REMOVE: "remove",
                EVENT_CHANGE: "change"
            }
        })
    }(this), Airdroid.Model.Contact = Core.extend(Airdroid.Model.Base, {
    uri: "content://com.android.contacts/raw_contacts",
    projections: ["_id"],
    getAll: function() {
        return this.refresh()
    },
    addContact: function(e) {
        return this.insert(e)
    },
    deleteContact: function(e) {
        return this.remove(e)
    },
    getModelIds: function(e) {
        var t = this;
        return _.map(e, function(e) {
            return _.find(t.items, function(t) {
                return t._id == e
            }).id
        })
    }
}), Airdroid.Model.ContactData = Core.extend(Airdroid.Model.Base, {
    uri: "content://com.android.contacts/data",
    projections: ["_id", "raw_contact_id", "mimetype", "data1", "data2", "data3", "data4", "data5", "data6", "data7", "data8", "data9", "data10", "data11", "data12", "data13", "data14"],
    _contacts: null,
    _groupModel: null,
    _contactsByGroup: {},
    getAll: function() {
        return this.refresh()
    },
    setData: function(e, t) {
        return this.updateOne(e, t)
    },
    addData: function(e) {
        return this.insert(e)
    },
    deleteData: function(e) {
        return this.remove(e)
    },
    deleteDataByConatctId: function(e) {
        this.items = _.reject(this.items, function(t) {
            return _.some(e, function(e) {
                return t.raw_contact_id == e
            })
        })
    },
    initData: function(e, t) {
        var i = this,
            n = i.items,
            o = {};
        i._groupModel = e, _.each(n, function(n) {
            switch (_.isUndefined(o[n.raw_contact_id]) && (o[n.raw_contact_id] = {}, o[n.raw_contact_id].id = n.raw_contact_id, o[n.raw_contact_id].name = [], o[n.raw_contact_id].nickname = "", o[n.raw_contact_id].has_photo = !1, o[n.raw_contact_id].emails = [], o[n.raw_contact_id].phones = [], o[n.raw_contact_id].groups = [], o[n.raw_contact_id].websites = [], o[n.raw_contact_id].address = [], o[n.raw_contact_id].notes = [], o[n.raw_contact_id].org = []), n.mimetype) {
                case "vnd.android.cursor.item/name":
                    var r = "",
                        a = "";
                    if (t) {
                        var s = n.data1 && "" !== n.data1 ? Airdroid.Util.SortKey.CC2PY(n.data1, !1) : "";
                        r = s ? s[0].toUpperCase() : s, a = s ? s[1].toUpperCase() : s
                    }
                    o[n.raw_contact_id].name = {
                        id: n.id,
                        given_name: n.data2,
                        display_name: n.data1,
                        search_name: r,
                        abbreviation: a
                    };
                    break;
                case "vnd.android.cursor.item/email_v2":
                    o[n.raw_contact_id].emails.push({
                        id: n.id,
                        data: n.data1,
                        type: n.data2,
                        label: n.data3
                    });
                    break;
                case "vnd.android.cursor.item/phone_v2":
                    o[n.raw_contact_id].phones.push({
                        id: n.id,
                        data: n.data1 ? n.data1.replace(/\s/g, "") : "",
                        type: n.data2,
                        label: n.data3
                    });
                    break;
                case "vnd.android.cursor.item/group_membership":
                    e.getGroups()[n.data1] && _.isEmpty(_.find(o[n.raw_contact_id].groups, function(e) {
                        return e.group_name == i._groupModel.getGroups()[n.data1].name
                    })) && o[n.raw_contact_id].groups.push({
                        id: n.id,
                        group_id: n.data1,
                        group_name: i._groupModel.getGroups()[n.data1].name
                    });
                    break;
                case "vnd.android.cursor.item/website":
                    o[n.raw_contact_id].websites.push({
                        id: n.id,
                        data: n.data1,
                        type: n.data2
                    });
                    break;
                case "vnd.android.cursor.item/postal-address_v2":
                    o[n.raw_contact_id].address.push({
                        id: n.id,
                        data: n.data1,
                        type: n.data2
                    });
                    break;
                case "vnd.android.cursor.item/note":
                    _.isEmpty(n.data1) || o[n.raw_contact_id].notes.push({
                        id: n.id,
                        data: n.data1 ? n.data1 : "",
                        type: 1
                    });
                    break;
                case "vnd.android.cursor.item/organization":
                    o[n.raw_contact_id].org.push({
                        id: n.id,
                        data: n.data1,
                        type: n.data2
                    });
                    break;
                case "vnd.android.cursor.item/photo":
                    o[n.raw_contact_id].has_photo = !0, o[n.raw_contact_id].icon = Airdroid.Service.getContactIconRawById(n.raw_contact_id), o[n.raw_contact_id].photo = {
                        id: n.id
                    }
            }
        }), i._contacts = o, t && i.sortDataByGroup()
    },
    sortDataByGroup: function() {
        var e = this,
            t = e._groupModel.getGroups();
        e._contactsByGroup = {}, _.each(t, function(t) {
            e._contactsByGroup[t.name] = e._getMembersByGroupName(t.name)
        }), e._contactsByGroup.has_phone = e._getMembersByGroupName("has_phone"), e._contactsByGroup.all = e._getMembersByGroupName("all")
    },
    getContacts: function() {
        return this._contacts
    },
    setContacts: function(e) {
        this._contacts = e
    },
    getMembersByGroupId: function(e) {
        var t = this,
            i = [],
            n = function(e) {
                i.push({
                    id: e.id,
                    phone: e.phones.length ? e.phones[0].data : "",
                    name: e.name.display_name,
                    has_photo: e.has_photo ? e.has_photo : !1
                })
            };
        if (!_.isEmpty(t._contacts))
            for (var o in t._contacts)
                for (var r = t._contacts[o].groups, a = 0, s = t._contacts[o].groups.length; r && s > a; a++)
                    if (r[a].group_id == e) {
                        n(t._contacts[o]);
                        break
                    }
        return i
    },
    _getMembersByGroupName: function(e) {
        var t = this,
            i = [],
            n = function(e) {
                if (e) {
                    for (var t = "", n = e.name.display_name || e.phones.length && e.phones[0].data || e.emails.length && e.emails[0].data || "", o = e.name.search_name, r = 0, a = e.phones.length; a > r; r++) t += e.phones[r].data + ",";
                    t = t.substr(0, t.length - 1), i.push({
                        id: e.id,
                        phone: e.phones,
                        name: n || Airdroid.Util.getLang("Common").contact_no_name,
                        has_photo: e.has_photo ? e.has_photo : !1,
                        sort_key: o && "" !== o ? o.charAt(0).toUpperCase() : n && n.charAt(0).toUpperCase() || "",
                        search_name: o || n.toUpperCase(),
                        abbreviation: e.name.abbreviation
                    })
                }
            };
        if (t._contacts) switch (e) {
            case "all":
                for (var o in t._contacts) n(t._contacts[o]);
                break;
            case "has_phone":
                i = t.getHasPhone();
                break;
            default:
                for (var o in t._contacts)
                    for (var r = 0; t._contacts[o].groups && t._contacts[o].groups.length > r; r++)
                        if (t._contacts[o].groups[r].group_name == e) {
                            n(t._contacts[o]);
                            break
                        }
        }
        return i
    },
    getMembersByGroupName: function(e) {
        return this._contactsByGroup[e] || []
    },
    getHasPhone: function() {
        var e = this,
            t = [];
        if (!$.isEmptyObject(e._contacts)) {
            var i = e._contacts;
            _.each(i, function(e) {
                if (e.hasOwnProperty("phones") && e.phones.length) {
                    var i = e.name.search_name,
                        n = e.name.abbreviation;
                    t.push({
                        id: e.id,
                        phone: e.phones,
                        name: e.name.display_name ? e.name.display_name : e.phones[0].data,
                        has_photo: e.has_photo ? e.has_photo : !1,
                        sort_key: i && "" !== i ? i.charAt(0).toUpperCase() : "",
                        search_name: i,
                        abbreviation: n
                    })
                }
            })
        }
        return t
    },
    switch2TableData: function(e, t, i) {
        var n = null,
            o = this;
        switch (t) {
            case "name":
                return n = {}, n.id = i.id, n.mimetype = "vnd.android.cursor.item/name", n.raw_contact_id = e, n.data1 = i.display_name, i.display_name.match(/^[\w]+$/) && (n.data2 = i.display_name, n.data3 = "", n.data5 = ""), n;
            case "phones":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/phone_v2",
                    data1: i.data,
                    data2: i.type,
                    data3: i.label,
                    raw_contact_id: e
                }), n;
            case "emails":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/email_v2",
                    data1: i.data,
                    data2: i.type,
                    data3: i.label,
                    raw_contact_id: e
                }), n;
            case "groups":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/group_membership",
                    data1: o._groupModel.getTableId(_.find(o._groupModel.getGroups(), function(e) {
                        return e.name == i.data
                    }).id),
                    raw_contact_id: e
                }), n;
            case "websites":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/website",
                    data1: i.data,
                    data2: i.type,
                    raw_contact_id: e
                }), n;
            case "address":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/postal-address_v2",
                    data1: i.data,
                    data2: i.type,
                    raw_contact_id: e
                }), n;
            case "notes":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/note",
                    data1: i.data,
                    raw_contact_id: e
                }), n;
            case "org":
                return n = [], n.push({
                    id: i.id,
                    mimetype: "vnd.android.cursor.item/organization",
                    data1: i.data,
                    data2: i.type,
                    raw_contact_id: e
                }), n
        }
    }
}), Airdroid.Model.ContactGroup = Core.extend(Airdroid.Model.Base, {
    uri: "content://com.android.contacts/groups",
    projections: ["_id", "title", "account_type", "account_name"],
    selection: "deleted<>1",
    _groups: {},
    getAll: function() {
        return this.refresh()
    },
    setGroup: function(e, t) {
        return this.updateOne(e, t)
    },
    addGroup: function(e) {
        return this.insert(e)
    },
    deleteGroup: function(e) {
        return this.remove(e)
    },
    getTableId: function(e) {
        return e ? this.modelIdToTableId(e) : e
    },
    initData: function() {
        return this._sortGroupById()
    },
    getGroups: function() {
        return this._groups
    },
    getModelId: function(e) {
        return _.findWhere(this.items, {
            _id: e
        }).id
    },
    _sortGroupByName: function() {
        var e = this;
        e._groups = {};
        for (var t = 0; e.items.length > t; t++) _.isEmpty(_.find(e._groups, function(i) {
            return i.name === e.items[t].title
        })) && (e._groups[e.items[t]._id] = {
            id: e.items[t].id,
            name: e.items[t].title
        });
        return e._groups
    },
    _sortGroupById: function() {
        var e = this;
        e._groups = {};
        for (var t = 0; e.items.length > t; t++) e._groups[e.items[t]._id] = {
            _id: e.items[t]._id,
            id: e.items[t].id,
            name: e.items[t].title
        };
        return e._groups
    }
}),
    function() {
        var e = Airdroid.Util.Path,
            t = Airdroid.Service;
        Airdroid.Model.Image = Core.extend(Airdroid.Model.Base, {
            $implement: Airdroid.Model.IImage,
            uri: "content://media/external/images/media",
            projections: ["_id", {
                name: "_size",
                defaultVal: 0
            }, {
                name: "_display_name",
                defaultVal: ""
            }, {
                name: "title",
                defaultVal: ""
            }, "mime_type", "datetaken", {
                name: "_data",
                defaultVal: 0
            }, {
                name: "orientation",
                defaultVal: 0
            }, "bucket_id", {
                name: "bucket_display_name",
                defaultVal: ""
            }],
            mapIterator: function(e) {
                return {
                    id: e.id,
                    size: e._size,
                    orientation: e.orientation,
                    name: e.title,
                    datetaken: parseInt(e.datetaken),
                    ext: e._display_name.replace(e.title + ".", "")
                }
            },
            sortIterator: function(e) {
                return -moment(parseInt(e.datetaken))
            },
            getThumbUrl: function(e, i) {
                if (!e) return t.getImgAssets("feature/camera.png");
                var n = this.modelIdToTableId(e);
                return t.getImageThumbRaw(n, {
                    max: i
                })
            },
            getRawUrl: function(e) {
                var i = this.modelIdToTableId(e);
                return t.getImageRaw(i, {
                    type: 0
                })
            },
            getDownloadUrl: function(e) {
                var i = this.modelIdToTableId(e);
                return t.getImageRaw(i, {
                    type: 1
                })
            },
            deleteById: function(e) {
                var t = _.isArray(e) ? e : [e];
                return 0 >= t.length && console.error("Image not found."), this.remove(t)
            },
            search: function(e, t) {
                return e = e.toLowerCase(), this.getImagesBy(function(t) {
                    return t.title.toLowerCase().indexOf(e) >= 0
                }, t)
            },
            download: function(e) {
                Airdroid.Util.download(this.getDownloadUrl(e))
            },
            downloadMany: function(e, t) {
                var i = this.modelIdsToTableIds(t);
                Airdroid.Service.getZipDownload(e, 4, {
                    ids: i
                })
            },
            downloadBucket: function(e, t) {
                Airdroid.Service.getZipDownload(e, 7, t)
            },
            setAsWallpaper: function(e) {
                var t = $.Deferred(),
                    i = this.modelIdToTableId(e),
                    n = "/sdctl/media/image/setwallpaper/";
                return this.sendRequest(n, {
                    id: i
                }).done(function(e) {
                    1 == e.result ? t.resolve.apply(t, arguments) : t.reject.apply(t, arguments)
                }).fail(function() {
                    t.reject.apply(t, arguments)
                }), t
            },
            getBuckets: function() {
                var e = this,
                    t = _.map(this.groupBy("bucket_id"), function(t, i) {
                        return t = _.sortBy(t, e.sortIterator), {
                            id: i,
                            count: t.length,
                            name: t[0].bucket_display_name,
                            firstImage: t[0].id
                        }
                    }),
                    i = _.findWhere(t, {
                        name: "Camera"
                    });
                return i || t.push({
                    id: "dir_camera",
                    count: 0,
                    name: "Camera",
                    firstImage: null
                }), t = _.sortBy(t, function(e) {
                    return -["wallpaper", "Camera"].indexOf(e.name)
                })
            },
            getBucketName: function(e) {
                if ("dir_camera" === e) return "Camera";
                if ("dir_wallpaper" === e) return "wallpaper";
                var t = _.findWhere(this.getBuckets(), {
                    id: e
                });
                return t ? t.name : e
            },
            getRealBucketId: function(e) {
                var t;
                return t = "dir_camera" === e ? _.findWhere(this.getBuckets(), {
                    name: "Camera"
                }) : "dir_wallpaper" === e ? _.findWhere(this.getBuckets(), {
                    name: "wallpaper"
                }) : _.findWhere(this.getBuckets(), {
                    id: e
                }), t ? t.id : e
            },
            getCameraImages: function(e) {
                return this.getImagesBy(function(e) {
                    return "Camera" === e.bucket_display_name
                }, e)
            },
            getWallpaperImages: function(e) {
                return this.getImagesBy(function(e) {
                    return "wallpaper" === e.bucket_display_name
                }, e)
            },
            getImagesByBucketId: function(e, t) {
                return this.getImagesBy(function(t) {
                    return t.bucket_id === e
                }, t)
            },
            getBucketImages: function(t, i) {
                var n, o;
                switch (t) {
                    case "dir_camera":
                        o = this.getCameraImages(i);
                        break;
                    case "dir_wallpaper":
                        o = this.getWallpaperImages(i);
                        break;
                    default:
                        o = this.getImagesByBucketId(t, i)
                }
                return n = o.list.length > 0 ? this._getBucketPathByImageId(o.list[0].id) : e.CAMERA_PATH, $.extend(o, {
                    bucketId: this.getRealBucketId(t),
                    bucketName: this.getBucketName(t),
                    path: n
                })
            },
            getImagesBy: function(e, t) {
                var i, n;
                return i = this.filter(e), i = _.sortBy(i, this.sortIterator), n = _.map(this.page(t, i), this.mapIterator), {
                    list: n,
                    page: t.page,
                    pcount: t.pcount,
                    count: i.length,
                    hasNextPage: Math.ceil(i.length / t.pcount) > t.page
                }
            },
            _getBucketPathByImageId: function(e) {
                return this._getBucketPath(this.findById(e))
            },
            _getBucketPath: function(t) {
                return t = t || {}, e.getParentPath(t._data, e.DCIM_PATH)
            }
        })
    }(), Airdroid.DataCenter.Contact = Core.extend(Airdroid.Base, {
    _groups: {},
    _contacts: {},
    _dataModel: null,
    _groupModel: null,
    _has_inited: !1,
    _construct: function(e) {
        this._deviceObj = e, this._deviceId = this._deviceObj.getId(), this._lang = Airdroid.Util.getLang("Common"), this._dataModel = new Airdroid.Model.ContactData(e), this._groupModel = new Airdroid.Model.ContactGroup(e), this._contactModel = new Airdroid.Model.Contact(e)
    },
    init: function(e, t) {
        var i = this,
            n = this._deviceObj.isRemote() ? "Remote" : "Local";
        $.when(this._dataModel.getAll(), this._groupModel.getAll(), this._contactModel.getAll()).done(function() {
            i.refresh(e), i.util.trackEvent("M-Contact", n + "-load", i._deviceObj._dataCenter.contact.total + "-success")
        }).fail(function() {
            _.isFunction(t) && t(), i.util.trackEvent("M-Contact", n + "-load", i._deviceObj._dataCenter.contact.total + "-fail")
        })
    },
    refresh: function(e) {
        var t = this;
        t._groupModel.initData();
        try {
            t._dataModel.initData(this._groupModel, Airdroid.Util.browser.ie || !Worker)
        } catch (i) {
            var n = this._deviceObj.isRemote() ? "Remote" : "Local";
            t.util.trackEvent("M-Contact", n + "-load", "init-fail")
        }
        if (t._groups = t._groupModel.getGroups(), t._contacts = t._dataModel.getContacts(), !Airdroid.Util.browser.ie && Worker) {
            var o = function() {
                    var e = this;
                    e.addEventListener("message", function(t) {
                        var i = t.data.imports,
                            n = t.data.data;
                        importScripts(i.join(","));
                        for (var o in n) {
                            var r = n[o],
                                a = r.name.display_name && "" !== r.name.display_name ? e.SortKey.CC2PY(r.name.display_name, !1) : "",
                                s = a ? a[0].toUpperCase() : a,
                                c = a ? a[1].toUpperCase() : a;
                            r.name.search_name = s, r.name.abbreviation = c
                        }
                        e.postMessage(n)
                    }, !1)
                },
                r = "" + o;
            r = r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"));
            var a = window.URL || window.webkitURL,
                s = new Blob([r], {
                    type: "text/javascript"
                }),
                c = a.createObjectURL(s),
                d = new Worker(c);
            d.addEventListener("message", function(i) {
                t._dataModel.setContacts(i.data), t._dataModel.sortDataByGroup(), t._contacts = t._dataModel.getContacts(), _.isFunction(e) && e(), d.terminate()
            }, !1);
            var l = Airdroid.Config.baseUri;
            Airdroid.Config.isPublish ? Airdroid.Config.isLiteVersion && (l = location.origin + "/") : l = location.origin + location.pathname.replace("intl_web.htm", "").replace("intl_lite.htm", ""), d.postMessage({
                imports: [l + "js/worker/sortKey.js"],
                data: t._dataModel.getContacts()
            })
        } else _.isFunction(e) && e();
        t._has_inited = !0
    },
    getContactGroups: function(e, t, i) {
        var n = this,
            o = n.util.getLang("SMS"),
            r = function() {
                var e = {
                    list: []
                };
                _.each(n._groups, function(t) {
                    _.isEmpty(_.find(e.list, function(e) {
                        return e.group_name == t.name
                    })) && e.list.push({
                        _id: t._id,
                        id: t.id,
                        group_id: t.name,
                        group_name: t.name,
                        group_count: n._dataModel.getMembersByGroupName(t.name).length,
                        delable: "Starred in Android" == t.name ? 0 : 1
                    })
                }), e.list = _.sortBy(e.list, function(e) {
                    var t = Airdroid.Util.SortKey.CC2PY(e.group_id, !1);
                    return /[a-zA-Z0-9]/.test(t[0].substring(0, 1)) ? t[0] : "#"
                }), e.list.push({
                    _id: -1,
                    id: -1,
                    group_id: "all",
                    group_name: o.Contact_all,
                    delable: 0,
                    group_count: _.size(n._contacts)
                }), e.list.push({
                    _id: -1,
                    id: -1,
                    group_id: "has_phone",
                    group_name: o.Contact_all_numbers,
                    delable: 0,
                    group_count: n._dataModel.getMembersByGroupName("has_phone").length
                }), $.isFunction(t) && t(e)
            };
        !n._has_inited || e ? n.init(r, i) : n.refresh(r)
    },
    editGroup: function(e, t, i) {
        var n = this;
        switch (e) {
            case "add":
                this._groupModel.addGroup({
                    title: t
                }).done(function(e) {
                    _.isFunction(i) && i({
                        result: 1,
                        group_id: n._groupModel.getModelId(e)
                    })
                });
                break;
            case "delete":
                this._groupModel.deleteGroup([t]).done(function() {
                    _.isFunction(i) && i({
                        result: 1
                    })
                });
                break;
            case "update":
                this._groupModel.setGroup(t.id, {
                    title: t.title
                }).done(function() {
                    _.isFunction(i) && i({
                        result: 1
                    })
                })
        }
    },
    getGroupMembers: function(e, t, i, n, o) {
        var r, a, s, c = this,
            d = 0;
        a = _.sortBy(c._dataModel.getMembersByGroupName(e), function(e) {
            return "#" != e.sort_key && /[A-Za-z0-9]/.test(e.sort_key) ? e.search_name : "#"
        }), s = a.length, o && (a = _.filter(a, function(e) {
            for (var t = 0, i = e.phone.length; i > t; t++)
                if (-1 !== e.phone[t].data.indexOf(o)) return !0;
            return e.name && -1 !== e.name.indexOf(o) || e.search_name && -1 !== e.search_name.indexOf(o.toUpperCase()) || e.abbreviation && -1 !== e.abbreviation.indexOf(o.toUpperCase())
        }), s = a.length), i && n && (i--, d = i * n, r = d + n, a = a.slice(d, r));
        var l = {
            group_id: e,
            list: a,
            count: s
        };
        _.isFunction(t) && t(l)
    },
    getContactDetail: function(e, t, i, n) {
        var o = this,
            r = {};
        return r = 1 == e ? o._contacts[t] : _.filter(o._contacts, function(e) {
            for (var i = 0, n = e.phones.length; n > i; i++) {
                var o = e.phones[i].data,
                    r = -1 !== t.indexOf("+") ? t.slice(-o.length) : t;
                if (r === o) return !0
            }
        }), 1 === e && _.isEmpty(r) && _.isFunction(n) ? (n(), void 0) : ($.isFunction(i) && i(r), r)
    },
    updateContactImg: function(e) {
        this._contacts[e].has_photo = !0
    },
    editContact: function(e, t, i) {
        var n = this;
        switch (e.mode) {
            case 3:
                this._contactModel.deleteContact(this._contactModel.getModelIds(e.ids)).done(function() {
                    n._dataModel.deleteDataByConatctId(e.ids), _.isFunction(t) && t({
                        result: "ok"
                    })
                });
                break;
            case 1:
                this._contactModel.addContact({}).done(function(o) {
                    e.id = o, n._updateContact(e, function(e) {
                        n.refresh(), _.isFunction(t) && t(e)
                    }, i)
                }).fail(function() {
                    _.isFunction(i) && i()
                });
                break;
            case 2:
                n._updateContact(e, function(e) {
                    _.isFunction(t) && t(e)
                }, i)
        }
    },
    getDiapadContacts: function() {
        var e = this;
        _.isEmpty(e._contacts) && e.init(function() {
            e.refresh()
        })
    },
    groupContacts: function(e, t, i) {
        var n = this,
            o = _.size(e.adds) * _.size(e.ids);
        _.each(e.adds, function(r) {
            _.each(e.ids, function(e) {
                return _.isEmpty(n._contacts[e].groups) || _.isEmpty(_.findWhere(n._contacts[e].groups, {
                    group_id: n._groupModel.getTableId(r)
                })) ? (n._dataModel.addData({
                    mimetype: "vnd.android.cursor.item/group_membership",
                    data1: n._groupModel.getTableId(r),
                    raw_contact_id: e
                }).done(function() {
                    n.refresh(), o > 0 && o--, 0 == o && _.isFunction(t) && t({
                        result: 1
                    })
                }).fail(function() {
                    o >= 0 && _.isFunction(i) && (i(), o = -1)
                }), void 0) : (o--, 0 == o && _.isFunction(t) && t({
                    result: 0
                }), void 0)
            })
        })
    },
    _updateContact: function(e, t, i) {
        var n = this,
            o = e.id,
            r = 0,
            a = {},
            s = [],
            c = {},
            d = function(e, t, i) {
                3 == i.mode ? s.push(i.id) : 2 == i.mode ? a[t] = _.isArray(a[t]) ? a[t].concat(n._dataModel.switch2TableData(e, t, i)) : n._dataModel.switch2TableData(e, t, i, n._groups) : 1 == i.mode && (c[t] = _.isArray(c[t]) ? c[t].concat(n._dataModel.switch2TableData(e, t, i)) : n._dataModel.switch2TableData(e, t, i, n._groups))
            };
        if (e = _.omit(e, ["id", "mode", "ids"]), _.each(e, function(e, t) {
                e.length ? _.each(e, function(e) {
                    d(o, t, e)
                }) : _.isEmpty(e) || d(o, t, e)
            }), r = _.size(a) + _.size(c) + s.length, 0 == r) return t({
            result: 0
        }), void 0;
        if (s.length && this._dataModel.deleteData(s).done(function() {
                r > 0 && r--, 0 == r && _.isFunction(t) && t({
                    result: "ok",
                    id: o
                })
            }).fail(function() {
                r >= 0 && (_.isFunction(i) && i(), r = -1)
            }), !_.isEmpty(a))
            for (var l in a)
                if (a[l].length)
                    for (var u = 0; a[l].length > u; u++) this._dataModel.setData(a[l][u].id, _.omit(a[l][u], "id")).done(function() {
                        r > 0 && r--, 0 == r && _.isFunction(t) && t({
                            result: "ok",
                            id: o
                        })
                    }).fail(function() {
                        r >= 0 && (_.isFunction(i) && i(), r = -1)
                    });
                else this._dataModel.setData(a[l].id, _.omit(a[l], "id")).done(function() {
                    r > 0 && r--, 0 == r && _.isFunction(t) && t({
                        result: "ok",
                        id: o
                    })
                }).fail(function() {
                    r >= 0 && (_.isFunction(i) && i(), r = -1)
                });
        if (!_.isEmpty(c))
            for (var l in c)
                if (c[l].length)
                    for (var u = 0; c[l].length > u; u++) this._dataModel.addData(_.omit(c[l][u], "id")).done(function() {
                        r > 0 && r--, 0 == r && _.isFunction(t) && t({
                            result: "ok",
                            id: o
                        })
                    }).fail(function() {
                        r >= 0 && (_.isFunction(i) && i(), r = -1)
                    });
                else this._dataModel.addData(_.omit(c[l], "id")).done(function() {
                    r > 0 && r--, 0 == r && _.isFunction(t) && t({
                        result: "ok",
                        id: o
                    })
                }).fail(function() {
                    r = -1, -1 === r && _.isFunction(i) && i()
                })
    }
}), Airdroid.DeviceManage = new(Core.extend(Airdroid.Base, {
    devicesObj: {},
    currentDeviceObj: null,
    requestDeviceObj: null,
    init: function() {
        Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.device_change, function() {
            console.log(""), Airdroid.DesktopManage.changeNavUser()
        }), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.device_connected, function(e) {
            var t = e.data.deviceObj;
            t.isCurrentDevice() && Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.current_device_connected, {})
        }), Airdroid.MessageManage.addListener(Airdroid.MessageManage.EventTypes.device_disconnect, function(e) {
            var t = e.data.deviceObj;
            t.isCurrentDevice() && Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.current_device_disconnect, {})
        })
    },
    getDefaultPhoneImage: function(e) {
        return e ? Airdroid.Service.getImgAssets("findmyphone/default-l.jpg") : Airdroid.Service.getImgAssets("findmyphone/default.png")
    },
    setAllDeviceOffLine: function() {
        var e = this;
        e.currentDeviceObj = null, _.each(e.devicesObj, function(e) {
            e.offLine()
        })
    },
    isCurrentDeviceConnected: function() {
        return this.currentDeviceObj && this.currentDeviceObj.isConnect()
    },
    isCurrentDeviceConnecting: function() {
        return this.currentDeviceObj && this.currentDeviceObj.isConnecting()
    },
    isCurrentDeviceById: function(e) {
        return this.isCurrentDeviceObj(this.devicesObj[e])
    },
    checkHasCurrentDevice: function() {
        return this.currentDeviceObj ? !0 : !1
    },
    setCurrentDevice: function(e) {
        return this.currentDeviceObj = this.initDeviceObj(e), this.currentDeviceObj
    },
    isCurrentDeviceRemote: function() {
        return this.currentDeviceObj && this.currentDeviceObj.isRemote()
    },
    initDeviceConnect: function(e) {
        var t = this,
            i = t.getDeviceObjById(e);
        Airdroid.Service.setHostAddress(i.getHostAddress());
        var n = Airdroid.UserManage.getDevices();
        _.each(n, function(i) {
            i.id === e && t.setCurrentDevice(i)
        })
    },
    getAllDeviceObj: function() {
        return this.devicesObj
    },
    getDeviceOptById: function(e) {
        var t = "";
        return _.each(Airdroid.UserManage.getDevices(), function(i) {
            i.id == e && (t = i)
        }), t
    },
    switchPhoneSuccess: function() {
        Airdroid.AppManage.resetAppConfig(), Airdroid.DesktopManage.initDesktops(!1), Airdroid.DesktopManage.changeNavUser(), Airdroid.TaskbarManage.setConnectModel(), Airdroid.Util.Notifications.removeAllNotice(), Airdroid.Message.clearActionTitle()
    },
    closeUploadConn: function(e) {
        var t = this,
            i = [];
        e ? _.each(e, function(e) {
            i.push(t.getDeviceOptById(e))
        }) : i = Airdroid.UserManage.getDevices();
        var n = {},
            o = [],
            r = [];
        n.accountId = Airdroid.UserManage.getAccountId(), _.each(i, function(e) {
            o.push(e.deviceId), r.push(e.logicKey)
        }), n.deviceIdList = o.join(","), n.logicKeyList = r.join(",")
    },
    switchPhone: function(e, t, i) {
        var n = this,
            o = n.getCurrentDeviceObj();
        e.switchDevice(function() {
            $.isFunction(t) && t(), o && (o.isRemote() && n.closeUploadConn([o.getId()]), o.isConnect() || o.offLine()), n.switchPhoneSuccess()
        }, function() {
            $.isFunction(i) && i()
        })
    },
    getDefaultDevice: function() {
        var e = this,
            t = Airdroid.UserManage.getDevices(),
            i = !1;
        return t.length > 0 && _.each(t, function(t) {
            e.checkIsDefaultDeviceById(t.id) && (i = t)
        }), i
    },
    getDefaultDeviceId: function() {
        var e = this.getDefaultDevice();
        return e ? e.id : ""
    },
    checkIsDefaultDeviceById: function(e) {
        var t = this.getDeviceOptById(e);
        return "1" == t.is_default
    },
    setDefaultDeviceById: function(e, t, i) {
        var n = this,
            o = n.getDeviceOptById(e);
        Airdroid.Service.setDefaultDevice({
            device_id: o.deviceId
        }, function(n) {
            1 == n.code ? (_.each(Airdroid.UserManage.getDevices(), function(t) {
                t.is_default = t.id == e ? "1" : "0"
            }), $.isFunction(t) && t()) : $.isFunction(i) && i()
        }, function() {
            $.isFunction(i) && i()
        })
    },
    cancelDefaultDeviceById: function(e, t, i) {
        var n = this,
            o = n.getDeviceOptById(e);
        Airdroid.Service.cancelDefaultDevice({
            device_id: o.deviceId
        }, function(n) {
            1 == n.code ? (_.each(Airdroid.UserManage.getDevices(), function(t) {
                t.is_default = t.id == e ? "0" : "1"
            }), $.isFunction(t) && t()) : $.isFunction(i) && i()
        }, function() {
            $.isFunction(i) && i()
        })
    },
    unbindDeviceById: function(e, t, i) {
        var n = this,
            o = [],
            r = {};
        _.each(e, function(e) {
            r[e] = n.getDeviceObjById(e), o.push(r[e].getLongId())
        }), Airdroid.Service.unbindDevice({
            device_id: o.join(",")
        }, function(o) {
            1 == o.code ? (_.each(e, function(e) {
                n.logoutDevice(e)
            }), $.isFunction(t) && t(), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.device_change, {
                device: Airdroid.UserManage.getDevices()
            })) : $.isFunction(i) && i()
        }, function() {
            $.isFunction(i) && i()
        })
    },
    setDeviceNameById: function(e, t, i, n) {
        var o = this,
            r = o.getDeviceOptById(e);
        Airdroid.Service.setDeviceName({
            device_id: r.deviceId,
            name: t
        }, function(o) {
            1 == o.code ? (_.each(Airdroid.UserManage.getDevices(), function(i) {
                i.id == e && (i.name = t, Airdroid.DeviceManage.isCurrentDeviceById(i.id) && Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.current_device_setting_change, i), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.device_setting_change, i))
            }), $.isFunction(i) && i()) : $.isFunction(n) && n()
        }, function() {
            $.isFunction(n) && n()
        })
    },
    checkNeedSelectDevicePanel: function() {
        var e = this,
            t = !0,
            i = Airdroid.UserManage.getDevices();
        return 1 == i.length ? (e.setCurrentDevice(i[0]), t = !1) : Airdroid.Runtime.QRWithAccount && (delete Airdroid.Runtime.QRWithAccount, t = !1), t
    },
    selectTargetDevice: function(e) {
        var t = this;
        e = e || {};
        var i = e.isSwitch || !1,
            n = null,
            o = e.connectingDeviceObj || null,
            r = !1,
            a = !1;
        if (Airdroid.UserManage.isUserOtherLogin() && i) return Airdroid.CenterManage.showReLogin(), !1;
        var s = Airdroid.UserManage.getDevices(),
            c = !Airdroid.Util.checkPremium() && s.length > 2,
            d = 3,
            l = s.length > d ? d : s.length;
        i && (1 === l || 2 === l && !Airdroid.Util.checkPremium()) && (l += 1, r = !0);
        var u = 611,
            p = Airdroid.Util.getLang("Common");
        Airdroid.Util.customAlertBoxNoBottom({
            description: Airdroid.Util.getTemplate("sys/select_device", "select", {
                devicelist: s,
                common: p,
                itemWidth: parseFloat((484 / l).toFixed(4)),
                deviceAddSrc: Airdroid.Service.getImgAssets("feature/device_add.png"),
                showAddIcon: r
            }),
            width: u + "px",
            animate: e.animate,
            showHandle: function(r) {
                var l = $(r.data).find(".select-device"),
                    u = {
                        select: "1",
                        connect: "2",
                        fail: "3",
                        down: "4"
                    },
                    h = u.select;
                l.selectDom = {
                    items: $(".select-device-item", l),
                    firstItem: $(".select-device-item:first", l).parent(),
                    nextFlag: $(".select-device-moveNext", l),
                    preFlag: $(".select-device-movePre", l),
                    oKBtn: $(".select-device-ok", l),
                    checkboxCon: $(".select-device-bottomLeft .select-device-defaultCon", l),
                    checkbox: $(".checkbox", this.checkboxCon)
                };
                var f = function() {
                        $("#confirm-container").find(".select-device").length > 0 && Airdroid.Util.closeCurrentBlock()
                    },
                    g = function() {
                        if (a) return !1;
                        if (i) Airdroid.DeviceManage.switchPhone(n, function() {
                            f()
                        }, function() {
                            y(u.fail)
                        });
                        else {
                            t.checkHasCurrentDevice() && Airdroid.Util.checkUserLogin() && Airdroid.DeviceManage.closeUploadConn();
                            var o = t.getCurrentDeviceObj(),
                                r = {
                                    successCb: function() {
                                        f(), $.isFunction(e.successCb) && e.successCb()
                                    },
                                    failCb: function() {
                                        y(u.fail), $.isFunction(e.failCb) && e.failCb()
                                    },
                                    tp_type: e.tp_type || "account"
                                };
                            o.doConnect(r)
                        }
                    },
                    m = function(e) {
                        return l.find(".select-device-page[data-page='" + e + "']").length > 0
                    },
                    v = function() {
                        2 > Airdroid.UserManage.getDevices().length && l.find(".select-device-back").hide()
                    },
                    y = function(e) {
                        var o = i ? n : t.getCurrentDeviceObj();
                        l.find(".select-device-page").removeClass("active");
                        var r = function() {
                            l.find(".select-device-page[data-page='" + e + "']").addClass("active"), h = e
                        };
                        switch (e) {
                            case u.select:
                                r(), l.find(".select-device-page[data-page='" + e + "']").focus();
                                break;
                            case u.connect:
                                m(e) || l.append(Airdroid.Util.getTemplate("sys/select_device", "connect", {
                                    common: p
                                })), l.find(".select-device-conTip").text(p.connect_device_name_tip.format(o.getName())), r(), v(), g();
                                break;
                            case u.fail:
                                l.find(".select-device-page[data-page='" + e + "']").remove(), l.append(Airdroid.Util.getTemplate("sys/select_device", "fail", {
                                    deviceObj: o,
                                    common: p,
                                    LoginLang: Airdroid.Util.getLang("Login")
                                })), r(), v();
                                break;
                            case u.down:
                                m(e) || l.append(Airdroid.Util.getTemplate("sys/select_device", "down", {
                                    devicelist: s,
                                    common: p,
                                    welcome: Airdroid.Util.getLang("Welcome")
                                })), r()
                        }
                    },
                    b = t.getDefaultDevice(),
                    A = function() {
                        c ? y(u.down) : o ? y(u.connect) : b && !t.checkHasCurrentDevice() && (t.setCurrentDevice(b), y(u.connect))
                    };
                if (Airdroid.Util.hasCookie("airdroid_history_id")) {
                    var w = Airdroid.Util.getCookie("airdroid_history_id"),
                        k = Airdroid.DeviceManage.getDeviceOptById(w);
                    _.isObject(k) ? (t.setCurrentDevice(k), Airdroid.Util.deleteCookie("airdroid_history_id", "/", ".airdroid.com"), y(u.connect)) : A()
                } else A();
                var C = l.selectDom.firstItem.width() + 4,
                    S = 0,
                    D = l.selectDom.items.length;
                t.checkHasCurrentDevice() && (l.selectDom.items.removeClass("active"), $('.select-device-item[data-did="' + t.getCurrentDeviceId() + '"]', l).addClass("active")), D > d && l.selectDom.nextFlag.removeClass("hide");
                var T = function() {
                        l.selectDom.items.each(function() {
                            var e = parseInt($(this).attr("data-index"));
                            e >= S && S + d > e ? $(this).attr("data-show", "1") : $(this).attr("data-show", "0")
                        })
                    },
                    x = function(e) {
                        var t = "",
                            i = parseInt($('.select-device-item[data-show="1"]:first', l).attr("data-index"));
                        t = i > e ? e - i : e - (i + d - 1), t > 0 ? l.selectDom.nextFlag.trigger("click", [t]) : 0 > t && l.selectDom.preFlag.trigger("click", [-t])
                    };
                T(), l.selectDom.items.click(function() {
                    var e = $(this);
                    e.hasClass("active") ? l.selectDom.oKBtn.trigger("click") : (l.selectDom.items.removeClass("active"), e.addClass("active")), "0" === e.attr("data-show") && x(parseInt(e.attr("data-index")))
                }), l.selectDom.nextFlag.click(function(e, t) {
                    return l.selectDom.firstItem.is(":animated") || l.selectDom.nextFlag.hasClass("hide") ? !1 : (D - d > S && (t = t ? parseInt(t) : 1, l.selectDom.firstItem.animate({
                        marginLeft: "-=" + C * t
                    }, function() {
                        S += t, S >= D - d && l.selectDom.nextFlag.addClass("hide"), l.selectDom.preFlag.removeClass("hide"), T()
                    })), void 0)
                }), l.selectDom.preFlag.click(function(e, t) {
                    return l.selectDom.firstItem.is(":animated") || l.selectDom.preFlag.hasClass("hide") ? !1 : (S > 0 && (t = t ? parseInt(t) : 1, l.selectDom.firstItem.animate({
                        marginLeft: "+=" + C * t
                    }, function() {
                        S -= t, 0 == S && l.selectDom.preFlag.addClass("hide"), l.selectDom.nextFlag.removeClass("hide"), T()
                    })), void 0)
                }), l.delegate(".select-device-premium-addEmptyCon img", "click", function() {
                    Airdroid.Util.closeCurrentBlock();
                    var e = Airdroid.UserManage.getDevices().length;
                    1 === e ? Airdroid.CenterManage.showBindDeviceBox() : 2 === e && Airdroid.Util.customAlertBoxHasBottom({
                        description: Airdroid.Util.getTemplate("sys/select_device", "no_premium_add_tip", {
                            common: p
                        }),
                        bottomBar: {
                            hasOkBtn: {
                                clickHandle: function() {
                                    Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.multi_upgrade)
                                },
                                msg: p.upgrade_title
                            },
                            hasCancelBtn: {
                                msg: p.Button_Cancel
                            }
                        }
                    })
                }), l.delegate(".select-device-cancel", "click", function() {
                    h == u.connect && t.cancelCurrentDeviceConnect(), Airdroid.Util.closeCurrentBlock()
                }), l.selectDom.checkboxCon.click(function() {
                    Airdroid.Util.toggleChecked(l.selectDom.checkbox)
                });
                var M = function() {
                    var e = function() {
                        var e = $(".select-device-item.active", l).attr("data-did");
                        i ? n = t.getDeviceObjById(e) : t.setCurrentDevice(t.getDeviceOptById(e))
                    };
                    if (t.checkHasCurrentDevice()) {
                        var o = t.getCurrentDeviceObj();
                        $(".select-device-item.active", l).attr("data-did") == o.getId() && o.isConnect() && (a = !0, Airdroid.Util.closeCurrentBlock())
                    }
                    e()
                };
                if (l.selectDom.oKBtn.click(function() {
                        M(), "1" == l.selectDom.checkbox.attr("check") && t.setDefaultDeviceById($(".select-device-item.active", l).attr("data-did")), y(u.connect)
                    }), l.delegate(".select-device-reConnect", "click", function() {
                        l.selectDom.oKBtn.trigger("click")
                    }), l.delegate(".select-device-back", "click", function() {
                        h == u.connect && t.cancelCurrentDeviceConnect(), y(u.select)
                    }), c) {
                    l.downDom = {
                        checkboxDom: l.find(".select-device-down-item .checkbox"),
                        okBtnDom: l.find(".select-device-down-ok"),
                        itemListDom: l.find(".select-device-down-list")
                    }, l.downDom.itemListDom.jScrollPane({
                        animateScroll: !1,
                        mouseWheelSpeed: 108
                    }).data("jsp");
                    var I = function() {
                        var e = 0;
                        switch (l.downDom.checkboxDom.each(function() {
                            "1" === $(this).attr("check") && (e += 1)
                        }), e) {
                            case 0:
                                Airdroid.Util.disableButton(l.downDom.okBtnDom);
                                break;
                            case 1:
                                l.downDom.checkboxDom.each(function() {
                                    "1" != $(this).attr("check") && Airdroid.Util.enableDom($(this))
                                }), Airdroid.Util.enableButton(l.downDom.okBtnDom);
                                break;
                            case 2:
                                l.downDom.checkboxDom.each(function() {
                                    "1" != $(this).attr("check") && Airdroid.Util.disableDom($(this))
                                }), Airdroid.Util.enableButton(l.downDom.okBtnDom)
                        }
                    };
                    l.downDom.checkboxDom.click(function() {
                        $(this).hasClass("disabled") || (Airdroid.Util.toggleChecked($(this)), I())
                    }), l.downDom.okBtnDom.click(function() {
                        if (!$(this).hasClass("disabled")) {
                            var e = [],
                                i = [];
                            l.downDom.checkboxDom.each(function() {
                                var t = $(this).parent().attr("data-did");
                                "1" != $(this).attr("check") ? e.push(t) : i.push(t)
                            }), t.unbindDeviceById(e, function() {
                                Airdroid.Util.showDelayMsg(l, p.unbind_device_success_tip);
                                var n = t.getDefaultDevice() || (1 == i.length ? t.getDeviceOptById(i[0]) : "");
                                if (n) t.setCurrentDevice(n), y(u.connect);
                                else {
                                    var o = !1;
                                    l.selectDom.items.each(function() {
                                        e.indexOf($(this).attr("data-did")) > -1 ? $(this).parent().remove() : ($(this).parent().width(parseFloat(242..toFixed(4))), $(this).hasClass("active") ? o = !0 : $(this).addClass("new"))
                                    }), l.selectDom.nextFlag.addClass("hide"), l.selectDom.preFlag.addClass("hide"), y(u.select), o || l.selectDom.items.filter(".new:first").trigger("click")
                                }
                            }, function() {
                                Airdroid.Util.alert(p.unbind_device_fail_tip)
                            })
                        }
                    }), l.delegate(".select-device-down-premiumCon div", "click", function() {
                        Airdroid.Util.closeCurrentBlock(), Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.multi_upgrade)
                    }), I()
                }
                Airdroid.Util.enterKeyPressHander = function() {
                    h == u.select && l.selectDom.oKBtn.trigger("click")
                }, setTimeout(function() {
                    l.find(".select-device-page[data-page='1']").attr("tabindex", 0).focus().bind("keydown", "left", function() {
                        if (l.selectDom.firstItem.is(":animated")) return !1;
                        console.log("multi device move left");
                        var e = parseInt(l.find(".select-device-item.active").attr("data-index"));
                        0 == e ? l.find(".select-device-item[data-index='" + parseInt(D - 1) + "']").trigger("click") : l.find(".select-device-item[data-index='" + parseInt(e - 1) + "']").trigger("click")
                    }).bind("keydown", "right", function() {
                        if (l.selectDom.firstItem.is(":animated")) return !1;
                        console.log("multi device move right");
                        var e = parseInt(l.find(".select-device-item.active").attr("data-index"));
                        e == D - 1 ? l.find(".select-device-item[data-index='0']").trigger("click") : l.find(".select-device-item[data-index='" + parseInt(e + 1) + "']").trigger("click")
                    })
                }, 500), Airdroid.UserManage.setInfoChange(), Airdroid.UserManage.getUserInfo()
            }
        })
    },
    getDirUploadStates: function(e, t) {
        e = encodeURIComponent(e) || "/sdcard", Airdroid.Service.getDirUploadStates(e, function(e) {
            console.log(e), e && $.isFunction(t) && t(e)
        })
    },
    logoutDevice: function(e) {
        var t = this,
            i = t.getDeviceOptById(e),
            n = t.getDeviceObjById(e);
        n && n.offLine(!1, Airdroid.Util.breakConnectType.UNBIND), Core.Arrays.remove(Airdroid.UserManage.getDevices(), i), delete t.devicesObj[e]
    },
    getDeviceModel: function(e) {
        var t = e.manu,
            i = e.model;
        return i.indexOf(t) > -1 ? i : t + " " + i
    },
    getDeviceName: function(e) {
        return _.isObject(e) ? e.name || this.getDeviceModel(e) : ""
    },
    isCurrentDeviceObj: function(e) {
        var t = this,
            i = !1;
        return Airdroid.Util.checkUserLogin() ? t.currentDeviceObj && e.getId() === t.currentDeviceObj.getId() && (i = !0) : t.currentDeviceObj && (i = !0), i
    },
    getCurrentDeviceObj: function() {
        return this.currentDeviceObj
    },
    getRequestDeviceObj: function() {
        return this.requestDeviceObj || this.currentDeviceObj
    },
    checkRequestIsCurrentDevice: function() {
        return this.isCurrentDeviceObj(this.getRequestDeviceObj())
    },
    setRequestDeviceObj: function(e) {
        this.requestDeviceObj = e
    },
    initDeviceObj: function(e) {
        if (this.devicesObj[e.id]) {
            var t = this.devicesObj[e.id];
            t.setDeviceOpt(e)
        } else {
            var t = new Airdroid.Device(e);
            this.devicesObj[t.getId()] = t
        }
        return this.devicesObj[e.id]
    },
    initAllDevicesObj: function() {
        var e = this;
        _.each(Airdroid.UserManage.getDevices(), function(t) {
            e.initDeviceObj(t)
        })
    },
    getDeviceObjById: function(e) {
        return this.devicesObj[e] || null
    },
    getCurrentDeviceOpt: function() {
        return this.currentDeviceObj.getDeviceOpt()
    },
    getCurrentDeviceName: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getName()
    },
    getCurrentDeviceVersion: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getVersion()
    },
    getCurrentDeviceId: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getId()
    },
    getCurrentDeviceDid: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getLongId()
    },
    getCurrentDeviceSmallImg: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getDeiveImg(!1)
    },
    getDeviceSmallImgById: function(e) {
        return this.devicesObj[e] && this.devicesObj[e].getDeiveImg(!1)
    },
    getCurrentDeviceBigImg: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getDeiveImg(!0)
    },
    getCurrentDeviceContactDataCenter: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getContactDataCenter()
    },
    getCurrentDeviceStatusObj: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getDeviceStatusObj()
    },
    setCurrentDeviceStatusObj: function(e) {
        return this.currentDeviceObj && this.currentDeviceObj.setDeviceStatusObj(e)
    },
    getCurrentSdkLevel: function() {
        return this.currentDeviceObj && this.currentDeviceObj.getSdkLevel()
    },
    checkCurrentDeviceIs3G: function() {
        return this.currentDeviceObj && this.currentDeviceObj.isConnect3G()
    },
    cancelCurrentDeviceConnect: function() {
        return this.currentDeviceObj && this.currentDeviceObj.cancelConnect()
    },
    getDeviceApiInfo: function(e, t, i, n) {
        var o = this,
            r = o.getDeviceObjById(e);
        return n ? (o.setRequestDeviceObj(r), t()) : r.isConnect() ? (o.setRequestDeviceObj(r), t()) : (r.doConnect({
            needLog: Airdroid.DeviceManage.isCurrentDeviceObj(r) ? !0 : !1,
            successCb: function() {
                o.getDeviceApiInfo(r.getId(), t)
            },
            failCb: function() {
                return _.isFunction(i) && i()
            }
        }), void 0)
    }
})), Airdroid.AppManage = new(Core.extend(Airdroid.Base, {
    _isConfigLoaded: !1,
    _systemSetting: {},
    EventTypes: {
        get_config_succeed: "GET_CONFIG_SUCCEED"
    },
    AppTypes: {
        system_app: "0",
        user_app: "1",
        folder: "2",
        link: "3"
    },
    webAppConfigType: {
        web: "1",
        server: "0",
        shell: "2"
    },
    LoginLevel: {
        NotNeedLogin: "0",
        NotNeedLogin_NeedDeviceConnected: "1",
        NeedLogin_NotNeedDeviceConnected: "2",
        NeedLogin_NeedDeviceConnected: "3"
    },
    DesktopAppSearch: {
        Name: "1",
        ContactId: "2",
        LinkPath: "3"
    },
    _defaultApps: [],
    _allApps: [],
    _userAllDeviceApps: [],
    _labApps: null,
    _webApps: [],
    _defaultReplaceType: 0,
    getLabConfig: function() {},
    checkDefaultReplaceWithEmpty: function() {
        return 1 === this._defaultReplaceType
    },
    setDefaultReplaceWithEmpty: function() {
        this._defaultReplaceType = 1
    },
    checkDefaultReplaceWithFail: function() {
        return 2 === this._defaultReplaceType
    },
    setDefaultReplaceWithFail: function() {
        this._defaultReplaceType = 2
    },
    checkHasDefaultReplaceUserApp: function() {
        return 0 != this._defaultReplaceType
    },
    checkWhenSettingOnDefaultReplaceUser: function(e) {
        var t = this;
        return Airdroid.AppManage.checkDefaultReplaceWithFail() ? (_.isFunction(e) && e(), setTimeout(function() {
            t.util.alert(t.util.getLang("Desktop", "Failed_To_Save"))
        }, 500), !0) : !1
    },
    getConfig: function(e, t) {
        var i = this;
        if (Airdroid.Util.checkUserLogin()) {
            if (Airdroid.UserManage.checkUserConfigLoad()) return $.isFunction(e) && e(), !1
        } else if (Airdroid.UserManage.checkDefaultConfigLoad()) return $.isFunction(e) && e(), !1;
        t && Airdroid.Util.showLoadTip(i.util.getLang("Common", "Loading"));
        var n = {
            aid: null
        };
        Airdroid.Util.checkUserLogin() && (n.aid = Airdroid.UserManage.getAccountId());
        var o = function(n) {
            var o = "";
            return Airdroid.Util.checkUserLogin() ? (o = i.util.getLang("Common", "Message_LoadUserConfigError"), Airdroid.Util.trackEvent("error", "Message_LoadUserConfigError", n ? "NetworkError" : "No_Authority")) : (o = i.util.getLang("Common", "Message_LoadAppsConfigError"), Airdroid.Util.trackEvent("error", "Message_LoadDefaultConfigError", n ? "NetworkError" : "No_Authority")), Airdroid.Util.trackEvent("error", "Message_LoadAppsConfigError", n ? "NetworkError" : "No_Authority"), t && i.util.removeLoadTip(), Airdroid.Util.checkUserLogin() ? (i.util.addBlockSingle(function() {
                Airdroid.Util.confirm(i.util.getLang("Common", "default_replace_user_tip"), function() {
                    i.setDefaultReplaceWithFail(), i.getConfig(e, t)
                }, function() {
                    i.getConfig(e, !0)
                }, {
                    iconType: "alert",
                    description: i.util.getLang("Common", "default_replace_user_des"),
                    okBtnMsg: i.util.getLang("Common", "use_default_appconfig"),
                    cancelBtnMsg: i.util.getLang("Common", "label_reload")
                })
            }), !1) : (console.log("，"), i.util.alert(o, function() {
                i.util.reload()
            }), void 0)
        };
        Airdroid.Service.getConfig(n, function(n) {
            if (1 == n.code) {
                n.data && (n = n.data, n.code = 1), Airdroid.Util.checkUserLogin() ? (0 == n.apps.length ? (i.setDefaultReplaceWithEmpty(), n.has_app = "0", n.apps = i.replaceWithDefaultAppConfig(), i._userAllDeviceApps = n.apps) : i.checkDefaultReplaceWithFail() ? i._userAllDeviceApps = i.replaceWithDefaultAppConfig() : ("0" === n.has_app && i.setDefaultReplaceWithEmpty(), i.initMakeUpAppConfig(n.apps)), Airdroid.UserManage.setUserConfigLoad(n)) : (Airdroid.UserManage.setDefaultConfigLoad(n), i.initDefaultAppConfig($.extend(!0, {}, n.apps)), Airdroid.AppManage.getWebOwnerApp(), i._userAllDeviceApps = i.replaceWithDefaultAppConfig()), Airdroid.AppManage.resetAppConfig();
                var r = function() {
                    i.fireEvent(i.EventTypes.get_config_succeed, {}), i._isConfigLoaded = !0, e && e(), t && i.util.removeLoadTip(), Airdroid.Util.showPlacard()
                };
                if (Airdroid.Util.checkUserLogin()) n.sys_setting && (i._systemSetting = n.sys_setting);
                else {
                    var a = Airdroid.Util.getCookie("airdroid_syssetting");
                    if ("" != a) try {
                        i._systemSetting = $.parseJSON(a)
                    } catch (s) {
                        console.info("parse cookie saved system setting error!")
                    }
                }
                if (!_.isEmpty(i._systemSetting)) {
                    var c = i._systemSetting[Airdroid.Config.SystemSettingNames.locale.name],
                        d = i._systemSetting[Airdroid.Config.SystemSettingNames.theme.name];
                    if (!_.isUndefined(c) && Airdroid.Config.lang[c] && c != Airdroid.Runtime.locale) {
                        if (!Airdroid.Util.hasCookie("account_lang") || !Airdroid.Util.checkUserLogin()) {
                            Airdroid.Runtime.locale = c, Airdroid.Util.setCookie("language", c, 1209600);
                            var l = (new Date).getTime();
                            return head.js(Airdroid.Config.baseUri + "assets/lng/" + Airdroid.Config.product + "/" + Airdroid.Runtime.locale + ".js?dd=" + l, function() {
                                $("html").attr("lang", Airdroid.Runtime.locale), r()
                            }), "en" != Airdroid.Runtime.locale && Airdroid.Runtime.locale != c && head.js(Airdroid.Config.baseUri + "assets/momentLang/" + Airdroid.Runtime.locale + ".js?dd=" + l), void 0
                        }
                        var u = Airdroid.Util.getCookie("account_lang");
                        Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.locale.name, u, function() {
                            console.log(""), Airdroid.Util.deleteCookie("account_lang")
                        })
                    }
                    _.isEmpty(d) || (d = /http:\/\//.test(d) ? d : Airdroid.Service.getImgAssets("wallpaper/" + d), $("<img />").bind("load", function() {
                        $("#block-wallpaper img").attr("src", d)
                    }).attr("src", d))
                }
                r()
            } else o(!1)
        }, function() {
            o(!0)
        })
    },
    initDefaultAppConfig: function(e) {
        var t = this;
        t._defaultApps = [], _.each(e, function(e) {
            if (e.icon = e.icon || "", 0 > e.icon.indexOf("desktopicon") && e.appId != t.config.dependApps.ContactLink) {
                var i = -1 == e.icon.toLowerCase().indexOf("http") ? Airdroid.Service.getImgDesktopIconURL("desktopicon/" + e.icon) : e.icon;
                e.icon = i
            }
            t._defaultApps.push(e)
        })
    },
    replaceWithDefaultAppConfig: function() {
        var e = this,
            t = [];
        return _.each(e._defaultApps, function(i) {
            var n = "";
            i.existType != e.webAppConfigType.shell && (n = $.extend(!0, {}, i), t.push(n))
        }), t
    },
    initMakeUpAppConfig: function(e) {
        var t = this,
            i = [];
        _.each(e, function(e) {
            var n = "";
            _.each(t._defaultApps, function(i) {
                e.appId == i.appId && i.existType != t.webAppConfigType.web && (n = $.extend(!0, {}, i, e))
            }), n && i.push(n)
        }), t._userAllDeviceApps = i
    },
    syncCache: function(e) {
        var t = this;
        t.util.checkUserLogin() && (console.info("sync app config cache success!"), e && e(), Airdroid.UserManage.clearUserAppConfigCache())
    },
    checkLoginLevel: function(e) {
        if (Airdroid.Config.isLiteVersion) return !0;
        var t = !1;
        return e == this.LoginLevel.NotNeedLogin ? t = !0 : e == this.LoginLevel.NeedLogin_NeedDeviceConnected ? t = Airdroid.Util.checkUserLogin() && Airdroid.DeviceManage.isCurrentDeviceConnected() : e == this.LoginLevel.NeedLogin_NotNeedDeviceConnected ? t = Airdroid.Util.checkUserLogin() : e == this.LoginLevel.NotNeedLogin_NeedDeviceConnected && (t = Airdroid.DeviceManage.isCurrentDeviceConnected()), t
    },
    doWhenLoginLevelNotEnough: function(e, t) {
        var i = this,
            n = Airdroid.DeviceManage.getCurrentDeviceObj();
        if (n && n.isConnect()) {
            if (!i.util.checkUserLogin()) {
                var o = {
                    iconType: "alert",
                    okBtnMsg: i.util.getLang("Common", "SignUp"),
                    cancelBtnMsg: i.util.getLang("Common", "Button_Cancel")
                };
                i.util.confirm(i.util.getLang("Common", "RequireLogin"), function() {
                    i.util.popupWindow({
                        url: "http://airdroid.com/signup/",
                        width: 980,
                        height: 640
                    })
                }, null, o)
            }
        } else if (i.util.checkUserLogin())
            if (Airdroid.UserManage.isBindDevice())
                if (Airdroid.UserManage.isUserOtherLogin()) Airdroid.CenterManage.showReLogin(function() {
                    $.isFunction(t) ? t() : $.isFunction(e) && e()
                });
                else {
                    var r = function() {
                        Airdroid.DesktopManage.isDefaultDesktops() && Airdroid.DeviceManage.switchPhoneSuccess(), $.isFunction(e) && e()
                    };
                    Airdroid.DeviceManage.checkHasCurrentDevice() || !Airdroid.DeviceManage.checkNeedSelectDevicePanel() ? Airdroid.CenterManage.reconnectPhone(n, function() {
                        r()
                    }) : Airdroid.DeviceManage.selectTargetDevice({
                        successCb: function() {
                            r()
                        }
                    })
                } else Airdroid.UserManage.setInfoChange(), Airdroid.UserManage.getUserInfo(function() {
                if (Airdroid.Util.removeLoadTip(), Airdroid.UserManage.isBindDevice()) {
                    var t = function() {
                        Airdroid.DeviceManage.switchPhoneSuccess(), $.isFunction(e) && e()
                    };
                    Airdroid.DeviceManage.checkNeedSelectDevicePanel() ? Airdroid.DeviceManage.selectTargetDevice({
                        successCb: function() {
                            t()
                        }
                    }) : Airdroid.CenterManage.reconnectPhone(n, function() {
                        t()
                    })
                } else Airdroid.CenterManage.showBindDeviceBox()
            }, function() {
                Airdroid.Util.removeLoadTip(), Airdroid.CenterManage.showBindDeviceBox()
            }, function() {
                Airdroid.Util.showLoadTip(Airdroid.Util.getLang("Common", "connect_device_tip"))
            });
        else Airdroid.Runtime.QRNoAccount ? Airdroid.CenterManage.reconnectPhone(n, function() {
                $.isFunction(e) && e()
            }) : Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.loginWidget, {
                callBack: function() {
                    $.isFunction(t) ? t() : $.isFunction(e) && e()
                }
            })
    },
    toJSON: function(e) {
        return _.isString(e.opts) && (e.opts = $.parseJSON(e.opts)), _.isString(e.position) && (e.position = $.parseJSON(e.position)), _.isString(e.data) && e.data && (e.data = $.parseJSON(Airdroid.Util.HTMLDecode(e.data))), e
    },
    getAppConfigById: function(e, t) {
        var i = {},
            n = this;
        return _.each(this._allApps, function(o) {
            var r = "appId" == t ? o.appId : o.id;
            r == e && (i = n.toJSON(o))
        }), i
    },
    getAppConfigByClassName: function(e) {
        var t = this,
            i = null;
        return _.each(this._allApps, function(n) {
            n.className == e && (i = t.toJSON(n))
        }), i
    },
    initApps: function() {
        var e = this,
            t = 9999;
        _.each(e._allApps, function(e) {
            e.appVer && Airdroid.Config.appVer < e.appVer || ([2, 3, 4].indexOf(parseInt(e.dindex)) > -1 && !Airdroid.Util.checkSupportMultiDesktop() && (e.dindex = 1, e.dorder = t, t += 1), Airdroid.DesktopManage.initAppDeskTop(e))
        });
        for (var i in Airdroid.DesktopManage._desktops)
            if (!Airdroid.DesktopManage.checkIsDashboard(i)) {
                var n = Airdroid.DesktopManage._desktops[i];
                n.createDesktopAdIcon(n._desktopDom), n.createAddAppDesktopIcon(), n.addDesktopContextMenu()
            }
    },
    createAppByAppId: function(e, t) {
        var i = this;
        0 != (e || 0) && i._isConfigLoaded && Airdroid.DesktopManage._currentDesktop._windowManage.createApp(i.getAppConfigById(e, "appId"), t)
    },
    addUserApp: function(e, t, i, n) {
        var o = this;
        return o.util.checkUserLogin() ? (e.deviceId = t ? Airdroid.DeviceManage.getCurrentDeviceId() : 0, Airdroid.Service.addApp(e, function(e) {
            if (1 == e.code) {
                var t = e.data;
                t.dorder = _.max(o._allApps, function(e) {
                    return parseInt(e.dorder)
                }) + 1, t = _.defaults(t, _.findWhere(o._defaultApps, {
                    appId: "" + t.appId
                })), e.app = o.toJSON(t), Airdroid.AppManage._allApps.push(e.app), o._userAllDeviceApps.push(e.app), i(e), o.syncCache()
            } else o.util.alert(o.util.getLang("Desktop", "Failed_To_Save"))
        }, function() {
            o.util.alert(o.util.getLang("Desktop", "Failed_To_Save"))
        }, n), void 0) : (console.info("not login do not saved!"), void 0)
    },
    modifyUserApp: function(e, t) {
        var i = this;
        return this.util.checkUserLogin() ? (Airdroid.Service.modifyApp(e, function(e) {
            if (1 == e.code) {
                t(e), i.syncCache();
                var n = e.data;
                if (n) {
                    var o = n.id;
                    for (var r in i._userAllDeviceApps)
                        if (i._userAllDeviceApps[r].id == o) {
                            var a = i._userAllDeviceApps[r];
                            _.each(n, function(e, t) {
                                a[t] && (a[t] = e)
                            })
                        }
                }
            } else i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }, function() {
            i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }), void 0) : (console.info("not login do not saved!"), void 0)
    },
    removeUserApp: function(e, t) {
        var i = this;
        return i.util.checkUserLogin() ? (Airdroid.Service.removeApp(e, function(n) {
            if (1 == n.code) {
                for (var o in Airdroid.AppManage._allApps) Airdroid.AppManage._allApps[o].id == e.id && Airdroid.AppManage._allApps.splice(o, 1);
                for (var r in i._userAllDeviceApps) i._userAllDeviceApps[r].id == e.id && i._userAllDeviceApps.splice(r, 1);
                t && t(n), i.syncCache()
            } else i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }, function() {
            i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }), void 0) : (console.info("not login do not saved!"), void 0)
    },
    getCurrentAppConfig: function() {
        return this._allApps
    },
    resetAppConfig: function() {
        var e = this;
        if (e._allApps = [], _.each(e._userAllDeviceApps, function(t) {
                t = e.toJSON(t), parseInt(t.deviceId) > 0 && t.deviceId != Airdroid.DeviceManage.getCurrentDeviceId() || e._allApps.push(t)
            }), _.each(e._webApps, function(t) {
                var i = !1;
                if (_.each(e._allApps, function(e) {
                        e.appId === t.appId && (i = !0)
                    }), !i)
                    if (1 == t.dicon);
                    else {
                        var n = $.extend(!0, {}, e.toJSON(t));
                        e._allApps.push(n)
                    }
            }), !Airdroid.Config.isLiteVersion) {
            var t = e.getAppConfigById(Airdroid.Config.dependApps.loginWidget, "appId");
            t.opts.autoRun = Airdroid.Util.checkUserLogin() ? "0" : "1"
        }
    },
    getWebOwnerApp: function() {
        var e = this;
        e._webApps = [], _.each(e._defaultApps, function(t) {
            t.existType === e.webAppConfigType.web && e._webApps.push(t)
        })
    },
    moveUserApp: function(e, t) {
        var i = this;
        return i.util.checkUserLogin() ? (Airdroid.Service.moveApp(e, function(e) {
            1 == e.code ? (t && t(e), i.syncCache()) : i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }, function() {
            i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }), void 0) : (console.info("not login do not saved!"), void 0)
    },
    orderUserApp: function(e, t) {
        var i = this;
        return i.util.checkUserLogin() ? (Airdroid.Service.orderApp(e, function(e) {
            1 == e.code ? (t(e), i.syncCache()) : i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }, function() {
            i.util.alert(i.util.getLang("Desktop", "Failed_To_Save"))
        }), void 0) : (console.info("not login do not saved!"), void 0)
    },
    appStatistics: function(e, t, i) {
        var n = this;
        n.util.checkUserLogin() && "1" != i.opts.autoRun && Airdroid.Service.appStatistics({
            uappid: e,
            appid: t,
            aid: Airdroid.UserManage.getAccountId()
        })
    },
    getSystemSetting: function(e) {
        return this._systemSetting && !_.isUndefined(this._systemSetting[e]) ? this._systemSetting[e] : this.config.SystemSettingNames[e].def
    },
    setSystemSetting: function(e, t, i, n, o) {
        var r = this;
        if (_.isArray(e) && _.isArray(t) ? _.each(e, function(e, i) {
                r._systemSetting[e] = t[i]
            }) : r._systemSetting[e] = t, !r.util.checkUserLogin()) return r.util.setCookie("airdroid_syssetting", JSON.stringify(r._systemSetting), 1209600), void 0;
        var a = {
            sys_setting: JSON.stringify(r._systemSetting)
        };
        console.info("save system setting====>" + a.sys_setting), Airdroid.Service.saveSystemSetting(a, function(e) {
            1 == e.code ? (console.info("system setting save success!"), o ? i && r.syncCache(i) : (r.syncCache(), i && i())) : (console.info("system setting save failed!"), n && n())
        }, function() {
            console.info("system setting save failed!"), n && n()
        })
    },
    destroyModule: function(e) {
        if (!e) return console.log("appappId"), !1;
        var t = Airdroid.AppManage.getAppConfigById(e, "appId"),
            i = t.opts || {};
        "1" == i.window ? "1" == i.multi ? _.each(Airdroid.DesktopManage._desktops, function(t) {
            _.each(t._windowManage._appMultiWindows, function(t) {
                t._appConfig.appId == e && t._app.destroy()
            })
        }) : _.each(Airdroid.DesktopManage._appSingleWindows, function(t) {
            t._appConfig.appId === e && t._app.destroy()
        }) : _.each(Airdroid.DesktopManage._desktops, function(t) {
            _.each(t._windowManage._widgetWindows, function(t) {
                t._appConfig.appId == e && t._app.destroy()
            })
        })
    },
    checkAppInitByAppId: function(e) {
        if (!e) return console.log("appappId"), !1;
        var t = Airdroid.AppManage.getAppConfigById(e, "appId"),
            i = t.opts || {},
            n = !1;
        return "1" == i.window ? "0" == i.multi ? _.each(Airdroid.DesktopManage._appSingleWindows, function(t) {
            t._appConfig.appId === e && (n = !0)
        }) : console.log("") : _.each(Airdroid.DesktopManage._desktops, function(t) {
            _.each(t._windowManage._widgetWindows, function(t) {
                t._appConfig.appId == e && (n = !0)
            })
        }), n
    },
    checkDesktopAppExist: function(e) {
        var t = this,
            i = !1,
            n = e.type;
        return _.each(Airdroid.DesktopManage._desktops, function(o) {
            for (var r in o._icons) {
                var a = o._icons[r];
                switch (n) {
                    case t.DesktopAppSearch.Name:
                        e.name && a.appName.toLowerCase() == e.name.toLowerCase() && (e.appId ? a.appId == e.appId && (i = !0) : i = !0);
                        break;
                    case t.DesktopAppSearch.ContactId:
                        e.contactId && a.appId == Airdroid.Config.dependApps.ContactLink && a.data.contactId == e.contactId && (i = !0);
                        break;
                    case t.DesktopAppSearch.LinkPath:
                        e.linkPath && a.appId == Airdroid.Config.dependApps.linkFolder && a.data.linkpath == e.linkPath && (i = !0)
                }
                if (i) break
            }
        }), i
    }
})), Airdroid.AppWindowManage = Core.extend(Airdroid.Base, {
    _appMultiWindows: {},
    _widgetWindows: {},
    _desktop: null,
    _quickViewDom: null,
    _frequentContactsDom: null,
    WindowTypes: {
        AppWin: "0",
        AppMultiWin: "1",
        IconFolder: "2",
        WidgetWin: "3"
    },
    frquentContactIconAr: [],
    updateQuickView: function(e, t, i) {
        this.hasQuickView() && this.showQuickView(e, t, i)
    },
    updateQuickViewPosition: function(e, t, i, n) {
        this._quickViewDom && this._quickViewDom.attr("relateAppId") == _.last(n.attr("folderid").split("_")) && (this.updateQuickView(t, i, n), this._quickViewDom.stop(), this._quickViewDom.transit({
            left: e.left + 105,
            top: e.top
        }, 600))
    },
    hasQuickView: function() {
        return !!this._quickViewDom
    },
    showQuickView: function(e, t, i) {
        var n = this;
        if (n._quickViewDom) {
            if (n._quickViewDom.attr("folder_id") == e.id) return n._quickViewDom;
            n.removeFloatLayer()
        }
        if (null == n._quickViewDom) {
            n._quickViewDom = $(n.util.getTemplate("sys/quick_view", "index", {
                lang: Airdroid.Util.getLang("Common", null)
            })), n._quickViewDom.attr("relateAppId", e.id), n._quickViewDom.css({
                left: i.position().left + 105 + "px",
                top: i.position().top + "px"
            }).appendTo(n._desktop._desktopDom), _.each(t, function(i) {
                var o = "icon_" + i.appType + "_" + i.id,
                    r = $(n.util.getTemplate("sys/quick_view", "icon", {
                        icon_src: i.icon,
                        icon_title: i.appName
                    }));
                if (r.attr("id", o), r.find("img").error(function() {
                        $(this).attr("src", i.defaultIcon)
                    }), r.click(function() {
                        $(this).hasClass("noclick") || (n.removeFloatLayer(), n.createApp(i))
                    }), r.draggable({
                        scope: "folder",
                        revert: !0,
                        start: function(e, t) {
                            t.helper.addClass("noclick")
                        },
                        helper: function() {
                            var o = $(this),
                                r = {
                                    fromFolder: e,
                                    from: "desktopFolder-item",
                                    rect: {
                                        xPos: n._quickViewDom.position().left,
                                        yPos: n._quickViewDom.position().top,
                                        width: n._quickViewDom.width(),
                                        height: n._quickViewDom.height()
                                    },
                                    appconfig: i,
                                    callback: function() {
                                        var e = _.indexOf(t, i);
                                        t.splice(e, 1)
                                    }
                                };
                            return o.data("dragData", r), o
                        }
                    }), r.appendTo(n._quickViewDom.find(".quick-view-container")), i.appId === n.config.dependApps.UrlLink) {
                    var a = Airdroid.Service.getFavicon(i.data.url);
                    r.find(".quick-view-tinyicon").css("background", "url(" + a + ")").removeClass("is-hide")
                }
            }), t && 0 != t.length || n._quickViewDom.find(".quick-view-container").addClass("no-frequent-contact").html(n.util.getLang("Desktop", "No_Frequent_Contacts")).css({
                height: "70px"
            }), n._quickViewDom.height() + 20 + n._quickViewDom.position().top > n._desktop._desktopDom.height() && n._quickViewDom.css("top", n._desktop._desktopDom.height() - n._quickViewDom.height() + "px");
            var o = i.position().top - n._quickViewDom.position().top + 25;
            n._quickViewDom.find("#left_arrow").css("top", o + "px")
        }
        return n._quickViewDom
    },
    showFrequentContacts: function(e, t) {
        var i = this;
        if (i.util.clearContextMenu(), null == i._frequentContactsDom && (i._frequentContactsDom = $(Airdroid.Util.getTemplate("sys", "sp_frequent_contacts")), i._frequentContactsDom.find(".frequent-contacts-title").html(i.util.getLang("Modules").FrequentContacts), i._frequentContactsDom.css({
                left: t.position().left + 105 + "px",
                top: t.position().top + "px"
            }).appendTo(i._desktop._desktopDom)), t.data("frequent_contacts") && t.data("frequent_contacts").length > 0) {
            i._frequentContactsDom.show();
            var n = (t.height(), i._frequentContactsDom.height() + 20),
                o = i._desktop._desktopDom.height();
            i._frequentContactsDom.css({
                left: t.position().left + 105 + "px",
                top: t.position().top + "px"
            }).appendTo(i._desktop._desktopDom), n + i._frequentContactsDom.position().top > o && i._frequentContactsDom.css("top", o - n + "px");
            var r = t.position().top - i._frequentContactsDom.position().top + 25;
            i._frequentContactsDom.find("#left_arrow").css("top", r + "px")
        } else i.util.showLoadingMask(i._frequentContactsDom.find(".frequent-contacts-container").css("height", "85px"), "white"), i._frequentContactsDom.find(".frequent-contacts-title").html(i.util.getLang("Modules").FrequentContacts), i._frequentContactsDom.css({
            left: t.position().left + 105 + "px",
            top: t.position().top + "px"
        }).appendTo(i._desktop._desktopDom), Airdroid.Service.getFrequentContact(i.config.frequentContactSize, function(e) {
            function n() {
                if (i.frquentContactIconAr.length > 0) {
                    var e = $(i.frquentContactIconAr.shift()),
                        t = e.attr("imgsrc"),
                        o = e.attr("src");
                    try {
                        e.error(function() {
                            $(this).attr("src", o), n()
                        }).attr("src", t).imgpreload(function() {
                            n()
                        })
                    } catch (r) {}
                }
            }
            i._frequentContactsDom.find(".frequent-contacts-container").empty();
            var o = i.util.unescape(e);
            t.data("frequent_contacts", o.list), o.list.length > 0 ? (i._frequentContactsDom.find(".frequent-contacts-container").css("height", ""), _.each(o.list, function(e) {
                $(i.util.getTemplate("sys", "sp_frequent_contacts_icon", {
                    icon_src: e.has_photo ? Airdroid.Service.getContactIconRawById(e.rid) : "",
                    icon_title: e.name,
                    default_icon: Airdroid.Service.getImgAssets("feature/contact.png")
                })).click(function() {
                    i.removeFloatLayer();
                    var t = {
                        type: "name",
                        data: {
                            name: e.name,
                            number: e.numbers[0],
                            cid: e.rid
                        }
                    };
                    Airdroid.DesktopManage._currentDesktop._windowManage.mergerChatWindow(t)
                }).appendTo(i._frequentContactsDom.find(".frequent-contacts-container"))
            }), i.frquentContactIconAr = [], i._frequentContactsDom.find("img").each(function() {
                $(this).attr("imgsrc") && i.frquentContactIconAr.push($(this))
            }), n()) : i._frequentContactsDom.find(".frequent-contacts-container").addClass("no-frequent-contact").html(i.util.getLang("Desktop", "No_Frequent_Contacts")), i._frequentContactsDom.show();
            var r = t.height(),
                a = i._frequentContactsDom.height() + 20,
                s = i._desktop._desktopDom.height();
            a + i._frequentContactsDom.position().top > s && i._frequentContactsDom.css("top", s - a + "px").find("#left_arrow").css("top", 50 + r / 2 + "px");
            var c = t.position().top - i._frequentContactsDom.position().top + 25;
            i._frequentContactsDom.find("#left_arrow").css("top", c + "px"), i.util.removeLoadingMask(i._frequentContactsDom.find(".frequent-contacts-container"))
        }, function() {
            i.util.removeLoadingMask(i._frequentContactsDom.find(".frequent-contacts-container")), i._frequentContactsDom.find(".frequent-contacts-container").addClass("no-frequent-contact").html(i.util.getLang("Desktop", "No_Frequent_Contacts"))
        });
        return i._frequentContactsDom
    },
    removeFloatLayer: function() {
        null != this._quickViewDom && (this._quickViewDom.find(".quick-view-icon").remove(), this._quickViewDom.remove(), this._quickViewDom = null), null != this._frequentContactsDom && this._frequentContactsDom.hide()
    },
    ensureModuleLoaded: function(e, t) {
        if (void 0 != e.css && "" !== e.css) {
            var i = e.css.split(",");
            for (var n in i) i[n] = Airdroid.Config.baseUri + i[n];
            head.js.apply(null, i)
        }
        if ("" != (e.js || "")) {
            var o = e.js.split(",");
            for (var n in o) o[n] = Airdroid.Config.baseUri + o[n];
            o.push(t), head.js.apply(null, o)
        }
    },
    createApp: function(e, t) {
        var i = this;
        if (!Airdroid.Runtime.bgListLoaded) return console.info("bglist files is not all loaded..."), void 0;
        if (null == e) return Airdroid.Util.alert(Airdroid.Util.getLang("Common", "Msg_AppConfigNotFound")), Airdroid.Util.trackEvent("error", "Msg_AppConfigNotFound"), void 0;
        if (!Airdroid.AppManage.checkLoginLevel(e.loginLevel)) return Airdroid.DeviceManage.isCurrentDeviceRemote() && Airdroid.UserManage.checkMonthDataFlowOverage() ? Airdroid.UserManage.monthDataFlowOverage() : Airdroid.AppManage.doWhenLoginLevelNotEnough(function() {
            Airdroid.AppManage.createAppByAppId(e.appId, t)
        }), void 0;
        if (Airdroid.DeviceManage.isCurrentDeviceRemote() && e.opts.isRP && !Airdroid.Util.checkPremium()) return Airdroid.Util.confirm(Airdroid.Util.getLang("Common", "Remote_Need_Premium"), function() {
            Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.remote_feature_need_premium)
        }), void 0;
        if (e.opts.isP && !Airdroid.Util.checkPremium()) return Airdroid.Util.confirm(Airdroid.Util.getLang("Common", "Need_Premium"), function() {
            Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.feature_need_premium)
        }), void 0;
        if (Airdroid.DeviceManage.checkCurrentDeviceIs3G() && (e.appId == Airdroid.Config.dependApps.CallOut || e.appId == Airdroid.Config.dependApps.CallRing)) return Airdroid.CenterManage.showDeviceStopService(), void 0;
        if (Airdroid.Util.checkChromeOSPresent(e)) return Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.Present, {}), !1;
        if (Airdroid.AppManage.appStatistics(e.id, e.appId, e), "redirectApp" == e.className) {
            Airdroid.Util.trackEvent("R-redirectApp", e.appName);
            var n = _.isObject(e.data) && e.data.url || e.url;
            return /(mailto|callto|tel|wtai|sms|skype|gtalk|msnim|ymsgr|geopoint):\/\//.test(n) ? window.location.href = n : window.open(n), void 0
        }
        e.appId == Airdroid.Config.dependApps.ContactLink ? Airdroid.DesktopManage._currentDesktop.contactLinkClick(e.data) : 1 == e.window ? (i.runWindowApp(e, t), Airdroid.Util.trackEvent("M-" + e.className, "Open")) : 1 == e.widget && (i.runWidget(e, t), Airdroid.Util.trackEvent("W-" + e.className, "Open"))
    },
    runWindowApp: function(e, t) {
        var i = this;
        (_.isUndefined(t) || null == t) && (t = {}), i.removeFloatLayer();
        var n = i._desktop,
            o = null;
        if (_.isUndefined(e.opts.multi) || 1 != e.opts.multi) {
            var r = "appwin_" + e.appId;
            o = Airdroid.DesktopManage._appSingleWindows[r], _.isUndefined(o) ? (o = new Airdroid.AppWindow, o._appWinId = r, o._winType = i.WindowTypes.AppWin, o._desktop = i._desktop, o._appConfig = e, o.createView(), Airdroid.DesktopManage._appSingleWindows[r] = o, i.ensureModuleLoaded(e, function() {
                var i;
                i = _.isUndefined(Airdroid.Module[e.className]) ? new Airdroid.Module.Default : new Airdroid.Module[e.className], i._appWin = o, o._app = i, i.createAppView(), o.setData(t), i.triggerResize()
            }), Airdroid.DesktopManage.setCurrentDesktop(n)) : (o.setData(t), o.show(), Airdroid.DesktopManage.setCurrentDesktop(o._desktop), o.proxyFunc_AfterDataChanged())
        } else {
            if (_.isUndefined(t.uniqueId) && (t.uniqueId = _.uniqueId("multiwin_" + e.appId)), o = i.getMultiAppWin(e, t.uniqueId), null == o) {
                var a = "appmultiwin_ar_" + e.appId;
                o = new Airdroid.AppWindow, o._appWinId = _.uniqueId("multiappwin_" + e.appId), o._winType = i.WindowTypes.AppMultiWin, o._desktop = i._desktop, o._appConfig = e, o._initData = t, o.createView(), o.setInitPosition(), _.isUndefined(i._appMultiWindows[a]) && (i._appMultiWindows[a] = []), i._appMultiWindows[a].push(o), i.ensureModuleLoaded(e, function() {
                    var i;
                    i = _.isUndefined(Airdroid.Module[e.className]) ? new Airdroid.Module.Default : new Airdroid.Module[e.className], i._appWin = o, o._app = i, i.createAppView(), o.setData(t), i.triggerResize()
                })
            } else o.setData(t), o.show(), o.proxyFunc_AfterDataChanged();
            Airdroid.DesktopManage.setCurrentDesktop(n)
        }
    },
    runWidget: function(e, t) {
        var i = this;
        _.isUndefined(t) && (t = null);
        var n = "widget_" + e.appId,
            o = i._widgetWindows[n];
        _.isUndefined(o) ? (o = new Airdroid.AppWindow, o._appWinId = n, o._winType = i.WindowTypes.WidgetWin, o._desktop = i._desktop, o._appConfig = e, o.createView(), i._widgetWindows[n] = o, i.ensureModuleLoaded(e, function() {
            var i;
            i = _.isUndefined(Airdroid.Widget[e.className]) ? new Airdroid.Widget.Default : new Airdroid.Widget[e.className], i._appWin = o, o._app = i, i.createAppView(), o.setData(t), i.triggerResize()
        })) : (o.setData(t), o.show())
    },
    updateAppWin: function(e, t) {
        var i = {};
        i = e == this.WindowTypes.IconFolder ? this.getMultiAppWin(t, "desktop_folder_" + t.id) : this.getAppWin(e, t), null == i || _.isUndefined(i) || (i._appConfig = t, i.updateTitle(t.appName))
    },
    getAppWin: function(e, t) {
        var i = null;
        return e == this.WindowTypes.AppWin ? i = Airdroid.DesktopManage._appSingleWindows["appwin_" + t.appId] : e == this.WindowTypes.WidgetWin && (i = this._widgetWindows["widget_" + t.appId]), i
    },
    getMultiAppWin: function(e, t, i) {
        var n = this,
            o = "appmultiwin_ar_" + e.appId,
            r = null;
        return !_.isUndefined(n._appMultiWindows[o]) && _.isArray(n._appMultiWindows[o]) && (_.each(n._appMultiWindows[o], function(e) {
            e.checkExist(t) && (r = e)
        }), null != r && i && (n._appMultiWindows[o] = _.without(n._appMultiWindows[o], r))), r
    },
    removeAppWin: function(e, t) {
        t._appConfig && (e == this.WindowTypes.AppWin ? delete Airdroid.DesktopManage._appSingleWindows[t._appWinId] : e == this.WindowTypes.AppMultiWin ? this.getMultiAppWin(t._appConfig, t._uniqueId, !0) : e == this.WindowTypes.WidgetWin && delete this._widgetWindows[t._appWinId])
    },
    mergerChatWindow: function(e) {
        var t = this;
        Airdroid.AppManage.createAppByAppId(t.config.dependApps.sms, e)
    },
    clearWindowManage: function() {
        this._appMultiWindows = {}, this._widgetWindows = {}, this._quickViewDom = null, this._frequentContactsDom = null
    }
}), Airdroid.Connect = Core.extend(Airdroid.Base, {
    status: {
        wait: "wait",
        connecting: "connecting",
        connected: "connected",
        fail: "fail"
    },
    connect_type: {
        login: "1",
        reconnect: "2",
        switchdevice: "3"
    },
    _connectType: null,
    _connectStatus: null,
    _isConnecting: !1,
    _isCheckAuth: !1,
    _connectTimer: null,
    _wakeTimer: null,
    _successCb: null,
    _failCb: null,
    _logHandle: null,
    _tp_type: "account",
    _startTime: null,
    _dfTimer: null,
    _connectId: null,
    _connectTime: null,
    _connectSuccessStartTime: null,
    _websocketPingTimerId: null,
    _websocketPingTime: 7e3,
    LOCAL_STORAGE_MAX_COUNT: 15,
    _checkLanWhenRemoteTimer: null,
    CONNECT_FAIL_TYPE: {
        dfNetwork: "df_network",
        dfBusy: "df_busy",
        qrNoAccount: "qrNoAccount",
        getToken: "getToken",
        timeout: "timeout",
        binaryNetwork: "binary_network",
        binaryBusy: "binary_busy"
    },
    _construct: function(e) {
        this._deviceObj = e, this._deviceOpt = this._deviceObj._deviceOpt, this._id = this._deviceObj.getId(), this._longId = this._deviceObj.getLongId(), this._lang = Airdroid.Util.getLang("Common"), this._connectStatus = this.status.wait
    },
    resetStatusParams: function() {
        var e = this;
        clearTimeout(e._connectTimer), clearInterval(e._wakeTimer), e._isConnecting = !1, e._isCheckAuth = !1, clearTimeout(e._dfTimer)
    },
    isConnecting: function() {
        return this._isConnecting
    },
    resetConnectId: function() {
        this._connectId = _.uniqueId("connect_")
    },
    getConnectId: function() {
        return this._connectId
    },
    wakePhone: function(e, t) {
        var i = this;
        console.info("==wakePhone=="), i.connectTrackEvent("action", "wake"), Airdroid.DeviceManage.setRequestDeviceObj(i._deviceObj), Airdroid.Service.wakeSrv({}, function(n) {
            "200" == n.code && (i.connectTrackEvent("action", "wake_success"), i._deviceObj.setNetOptions(n.netOpts, !0), $.isFunction(e) && e(n)), "401" == n.code ? i._deviceObj.isConnecting() && Airdroid.Util.checkUserLogin() && (i.connectTrackEvent("action", "wake_auth"), Airdroid.Util.alert(i._lang.reconnect_expired, function() {
                Airdroid.CenterManage.showReLogin()
            }), i.connectFail(!0)) : ($.isFunction(t) && t(n), i.connectTrackEvent("action", "wake_fail"))
        }, function() {
            $.isFunction(t) && t(), i.connectTrackEvent("action", "wake_fail")
        })
    },
    showAgainConenctPage: function() {
        var e = this;
        Airdroid.Util.closeCurrentBlock();
        var t = e._successCb;
        setTimeout(function() {
            Airdroid.DeviceManage.selectTargetDevice({
                successCb: function() {
                    t()
                },
                tp_type: e._tp_type,
                connectingDeviceObj: e._deviceObj,
                animate: !1
            })
        }, 10)
    },
    doPing: function(e, t) {
        var i = this;
        return i.isConnecting() ? (Airdroid.Service.ping(function() {
            $.isFunction(e) && e()
        }, function() {
            $.isFunction(t) && t()
        }), void 0) : (console.log("ping"), !1)
    },
    setDeviceIpAddress: function() {
        var e = this,
            t = "",
            i = e._deviceObj.getNetOptions();
        t = Airdroid.Util.isHttps() ? "https://" + i.ip + ":" + i.ssl_port : "http://" + i.ip + ":" + i.port, e._deviceObj.setHostAddress(t), e._deviceObj.isCurrentDevice() && Airdroid.Service.setHostAddress(e._deviceObj.getHostAddress())
    },
    validateLocal: function(e) {
        var t = this;
        console.info("==validateLocal==");
        var i = t._deviceObj.getNetOptions();
        t._deviceObj.isRemote() ? e(!1) : i.ip ? (t.setDeviceIpAddress(), Airdroid.DeviceManage.setRequestDeviceObj(t._deviceObj), t.doPing(function() {
            e(!0)
        }, function() {
            e(!1)
        })) : e(!1)
    },
    checkIsLazyConnect: function() {
        return !(this._deviceObj.isCurrentDevice() || this._connectType === this.connect_type.switchdevice)
    },
    doCheckLoginError: function() {
        var e = this;
        return e.connectFail(!0), e.checkIsLazyConnect() ? !1 : (Airdroid.AppManage.destroyModule(Airdroid.Config.dependApps.loginWidget), Airdroid.Util.closeCurrentBlock(), !0)
    },
    deviceLogin: function(e, t) {
        var i = this;
        if (console.info("==deviceLogin=="), i._deviceObj.getToken() || i._isCheckAuth) return !1;
        i._isCheckAuth = !0;
        var n = {
            keeplogin: 0,
            type: 0,
            key: ""
        };
        if (Airdroid.UserManage.checkUserLogin() && i._deviceOpt) {
            var o = (new Date).getTime();
            n.type = 2, n.key = o + hex_md5(o + i._longId + i._deviceOpt.logicKey)
        } else n.type = 1, n.key = hex_md5(Airdroid.Runtime.qrCode);
        i._deviceObj.setLoginKey(n.key), Airdroid.DeviceManage.setRequestDeviceObj(i._deviceObj), Airdroid.Service.checkLogin(n, function(n) {
            if (console.log("====checklogin " + JSON.stringify(n) + " id " + i._id), n.sdklevel && i._deviceObj.setSdkLevel(n.sdklevel), n.appver < parseInt(Airdroid.Config.compatibleVersion)) {
                if (!i.doCheckLoginError()) return !1;
                if (i._deviceObj.getSdkLevel() > 0 && 8 > i._deviceObj.getSdkLevel()) return i.checkIsLazyConnect() || Airdroid.Util.gotItMsgTip(i._lang.android_version_no_support_tip, function() {
                    window.location.href = Airdroid.Util.getOldVersionUrl(n.appver)
                }, i._lang.continue_use_oldversion), !1;
                i._connectType == i.connect_type.switchdevice ? Airdroid.Util.confirm(i._lang.switch_update_tip, function() {
                    Airdroid.Util.backToHistoryVersion(n.appver, i._id)
                }, null, {
                    iconType: "alert",
                    okBtnMsg: i._lang.continue_use_oldversion
                }) : Airdroid.AppManage.checkAppInitByAppId(Airdroid.Config.dependApps.Update) || Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.Update, n)
            } else if (!Airdroid.Config.isBeta && n.beta || Airdroid.Config.isBeta && !n.beta) {
                if (!i.doCheckLoginError()) return !1;
                var o, r;
                Airdroid.Config.isBeta ? (o = i._lang.beta_to_release_tip.format("<a href='https://plus.google.com/communities/101598567262600598159'>", "</a>"), r = Airdroid.Config.releaseUrl, Airdroid.Util.trackEvent("AboutBeta", "BetaToRelease")) : (o = i._lang.release_to_beta_tip, r = Airdroid.Config.betaUrl, Airdroid.Util.trackEvent("AboutBeta", "ReleaseToBeta")), Airdroid.Util.confirm(o, function() {
                    Airdroid.Util.backToHistoryVersion(n.appver, i._id, r)
                }, null, {
                    iconType: "alert"
                })
            } else 1 == n.pass ? (i._deviceObj.setToken(n["7bb"]), e && e(n)) : t && t()
        }, function() {
            t && t()
        })
    },
    connectLocal: function(e) {
        var t = this;
        console.info("==conncetLocal=="), t._deviceObj.setLan(), t.deviceLogin(function(i) {
            var n = Airdroid.Util.getPhoneSocketUrl(i) + t._deviceObj.getToken();
            t._deviceObj.initLanSocket(n), t._deviceObj.closeRemoteSocket(), e && e(!0)
        }, function() {
            e && e(!1)
        })
    },
    connectRemote: function(e) {
        var t = this;
        console.info("==connectRemote=="), t._deviceObj.setRemote(), t._deviceObj.closeLanSocket(), t.setConnectTimeOut(2e4), t.deviceLogin(function(i) {
            t._deviceObj.getStreamUrlInRemote(function() {
                i.usewifi || t._deviceObj.setConnect3G(!0), e && e(!0)
            }, function(i) {
                e && e(!1, 1 === i ? t.CONNECT_FAIL_TYPE.binaryBusy : t.CONNECT_FAIL_TYPE.binaryNetwork)
            })
        }, function() {
            e && e(!1, t.CONNECT_FAIL_TYPE.getToken)
        })
    },
    connectLog: function(e) {
        var t = this;
        console.log("==" + e + "=="), _.isFunction(t._logHandle) && t._logHandle(e)
    },
    getCommonLog: function() {
        var e = this,
            t = e._deviceObj.getNetOptions();
        return {
            ip: t.ip,
            account_id: Airdroid.UserManage.getAccountId(),
            device_id: e._longId,
            is_remote: e._deviceObj.isRemote() ? 1 : 0,
            connect_time: e._connectTime,
            browser: Airdroid.Util.browser.getBrowserName(),
            data_url: e._deviceObj.getDFUrl(),
            app_ver: Airdroid.Config.androidVersionCode,
            model: e._deviceObj.getModel(),
            network: e._deviceObj.isConnect3G() ? "3g" : "wifi"
        }
    },
    setLoginlog: function(e) {
        var t = this;
        t._connectTime = ((new Date).getTime() - t._startTime) / 1e3;
        var i = e ? 1e4 : 2e3,
            n = t._deviceObj.getRemoteSocket(),
            o = n.getWsStr();
        n.clearWsStr(), setTimeout(function() {
            Airdroid.Service.connectStateLog($.extend(t.getCommonLog(), {
                tp_type: t._tp_type,
                is_vip: Airdroid.Util.checkPremium() ? 1 : 0,
                status: e ? 1 : 0,
                country: Airdroid.UserManage.getAccountCounty(),
                type: t._connectType,
                ws_str: o
            }))
        }, i)
    },
    connectProblemLocalStorage: function(e) {
        var t = this;
        e.date = (new Date).toLocaleString(), delete e.device_id;
        try {
            var i = [];
            Airdroid.Util.getLocalStorageItem("airdroid_connect_l") && (i = decodeURIComponent(Airdroid.Util.getLocalStorageItem("airdroid_connect_l")).split("====")), i.length >= t.LOCAL_STORAGE_MAX_COUNT && i.shift(), i.push(JSON.stringify(e)), Airdroid.Util.setLocalStorageItem("airdroid_connect_l", encodeURIComponent(i.join("====")))
        } catch (n) {}
    },
    recordBrokenLog: function(e) {
        var t = this;
        if (t._connectSuccessStartTime) {
            var i = ((new Date).getTime() - t._connectSuccessStartTime) / 1e3,
                n = $.extend(t.getCommonLog(), {
                    connected_time: i,
                    type: e
                });
            t.connectProblemLocalStorage($.extend(!0, {}, n)), Airdroid.Service.connectBrokenLog($.extend(!0, {}, n)), t._connectSuccessStartTime = null
        }
    },
    connectSuccess: function(e) {
        var t = this;
        return t._connectStatus === t.status.fail ? (t.resetStatusParams(), !1) : (t._connectStatus = t.status.connected, t._deviceObj.setConnect(), _.isFunction(t._successCb) && (t._successCb(), t._successCb = null), !e && t._needLog && (t._needLog = !0, t.connectTrackEvent("connect", t._deviceObj.isRemote() ? "remoteSuccess" : "localSuccess"), t.connectTrackEvent("connect", t._deviceObj.isRemote() ? "remote_" + t._tp_type + "_Success" : "local_" + t._tp_type + "_Success"), t.setLoginlog(!0), t._connectSuccessStartTime = (new Date).getTime()), t._deviceObj.isCurrentDevice() && (t._deviceObj.isConnect3G() && (Airdroid.Util.closeCurrentBlock(), Airdroid.Util.gotItMsgTip(t._lang.Msg_NotWifiNetWork)), Airdroid.TaskbarManage.showTaskBar()), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.device_connected, {
            deviceObj: t._deviceObj
        }), console.log("connect success"), t.resetStatusParams(), t.checkLANConnectWhenRemote(), void 0)
    },
    connectTrackEvent: function(e, t) {
        Airdroid.Util.trackEvent("Connect", e, t)
    },
    connectFail: function(e, t) {
        var i = this;
        if (this._connectStatus = this.status.fail, i.resetStatusParams(), i._deviceObj.offLine(), _.isFunction(this._failCb) && (this._failCb(), this._failCb = null), !e && i._needLog) {
            i._needLog = !0;
            var n = i._deviceObj.isRemote();
            i.connectTrackEvent("connect", n ? "remoteFailed" : "localFailed"), i.connectTrackEvent("connect", n ? "remote_" + i._tp_type + "_Failed" : "local_" + i._tp_type + "_Failed"), i.setLoginlog(!1), t && (i.connectTrackEvent("fail", n ? "remote_" + t : "local_" + t), i.connectProblemLocalStorage($.extend(i.getCommonLog(), {
                failType: t
            })))
        }
        console.log("connect fail")
    },
    goLocalConnect: function(e) {
        var t = this;
        t._connectStatus = t.status.connecting, t.connectLocal(function(i) {
            i ? (e && t.connectTrackEvent("DfMatch", "localSuccess"), t.connectSuccess()) : (e && t.connectTrackEvent("DfMatch", "localFail"), t.connectFail(!1, t.CONNECT_FAIL_TYPE.getToken))
        })
    },
    connectPing: function() {
        var e = this;
        return e.isConnecting() ? (e.validateLocal(function(t) {
            t ? e.goLocalConnect() : Airdroid.Runtime.QRNoAccount ? e.connectFail(!1, e.CONNECT_FAIL_TYPE.qrNoAccount) : e._connectStatus == e.status.wait && setTimeout(function() {
                e.connectPing()
            }, 500)
        }), void 0) : !1
    },
    connectMatch: function() {
        var e = this;
        e.validateLocal(function(t) {
            t ? e.goLocalConnect(!0) : e.connectRemote(function(t, i) {
                t ? (e.connectTrackEvent("DfMatch", "RemoteSuccess"), e.connectSuccess()) : (e.connectTrackEvent("DfMatch", "RemoteFail"), e.connectFail(!1, i))
            })
        })
    },
    relativeServer: function() {
        var e = function() {
            Airdroid.UserManage.setInfoChange(), Airdroid.UserManage.getUserInfo(function() {
                console.log("")
            }, function() {
                setTimeout(function() {
                    e()
                }, 6e4)
            })
        };
        Airdroid.Util.checkUserLogin() && e()
    },
    switchPhone: function(e, t, i) {
        var n = this;
        if (console.log("，id：" + n._id + ", ：" + n._deviceObj.getName()), n._deviceObj.isConnect()) Airdroid.DeviceManage.setCurrentDevice(n._deviceObj.getDeviceOpt()), Airdroid.DeviceManage.initDeviceConnect(n._id), n._successCb = e, n.connectSuccess(!0);
        else {
            var o = {
                connectType: n.connect_type.switchdevice,
                successCb: function() {
                    Airdroid.DeviceManage.setCurrentDevice(n._deviceObj.getDeviceOpt()), n._deviceObj.setConnect(), Airdroid.Util.removeLoadTip(), Airdroid.Util.Notifications.removeAllNotice(), $.isFunction(e) && e(), n.relativeServer(), Airdroid.Util.trackEvent("SwitchPhone", "Success")
                },
                failCb: function() {
                    Airdroid.Util.removeLoadTip(), $.isFunction(t) && t(), Airdroid.Util.trackEvent("SwitchPhone", "Fail")
                },
                showHandle: function() {
                    $.isFunction(i) && i()
                }
            };
            n.connectPhone(o)
        }
    },
    reconnectPhone: function(e, t, i) {
        var n = this;
        if (n._isConnecting) return console.log("== =="), !1;
        console.log("，id：" + n._id + ", ：" + n._deviceObj.getName()), n._deviceObj.closeLanSocket();
        var o = {
            connectType: n.connect_type.reconnect,
            successCb: function() {
                Airdroid.Util.removeLoadTip(), $.isFunction(e) && e(), n.relativeServer(), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.connect_type_change, {}), Airdroid.Util.trackEvent("Reconnect", "Success")
            },
            failCb: function() {
                Airdroid.Util.removeLoadTip(), $.isFunction(t) && t(), Airdroid.Util.trackEvent("Reconnect", "Fail")
            },
            showHandle: function() {
                $.isFunction(i) && i(), Airdroid.Util.trackEvent("Reconnect", "Start")
            }
        };
        n.connectPhone(o)
    },
    lbConnectError: function(e) {
        var t = this;
        t.connectTrackEvent("action", e + "_fail"), t._dfTimer = setTimeout(function() {
            t._deviceObj.isConnect() || t.connectFail(!1, e)
        }, 15e3)
    },
    setConnectRemote: function() {
        var e = this;
        e._deviceObj.setRemote(), e._connectStatus === e.status.connecting && e.connectMatch()
    },
    setConnectTimeOut: function(e) {
        var t = this;
        clearTimeout(t._connectTimer), t._connectTimer = setTimeout(function() {
            t._connectStatus !== t.status.connected && (t.connectFail(!1, t.CONNECT_FAIL_TYPE.timeout), clearInterval(t._wakeTimer))
        }, e)
    },
    connectPhone: function(e) {
        var t = this;
        if (t._deviceObj.isCurrentDevice() && !t._deviceObj.checkConExpired()) return Airdroid.Util.alert(t._lang.reconnect_expired, function() {
            Airdroid.CenterManage.showReLogin()
        }), Airdroid.Util.removeLoadTip(), !1;
        var i = {
            successCb: null,
            failCb: null,
            logHandle: null,
            showHandle: null,
            tp_type: t._tp_type,
            needLog: !0
        };
        e = $.extend(!0, i, e), t._successCb = e.successCb, t._failCb = e.failCb, t._logHandle = e.logHandle, t._tp_type = e.tp_type, t._needLog = e.needLog, t._connectStatus = t.status.wait, t._connectType = e.connectType || t.connect_type.login, t.resetStatusParams(), t._isConnecting = !0, t._connectSuccessStartTime = null, t.resetConnectId(), t._deviceObj.initPushSubSocket();
        var n = Airdroid.Util.checkUserLogin() ? t._lang.connect_device_name_tip.format(t._deviceObj.getName()) : t._lang.Connecting_To_Device;
        if (t.connectLog(n), t._deviceObj.offLine(), t._deviceObj.setLan(), Airdroid.Runtime.setRemote = "1" === Airdroid.Util.getUrlParam("remote") ? !0 : Airdroid.Runtime.setRemote, t._deviceObj.setConnectType(Airdroid.Runtime.setRemote), Airdroid.AppManage.getConfig(function() {
                Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.get_user_config_succeed, {})
            }), t._startTime = (new Date).getTime(), t._deviceObj.addListener(t._deviceObj._eventType.phoneMatch, function(e) {
                t._connectStatus !== t.status.connected && t._connectStatus !== t.status.connecting && t._connectStatus !== t.status.fail && (t._connectStatus = t.status.connecting, console.log("===="), t._deviceObj.setNetOptions(e.data.netOpts, !0), t.connectMatch())
            }, null, !0), _.isFunction(e.showHandle) && e.showHandle(), !Airdroid.Runtime.QRNoAccount) {
            t.wakePhone(), t.connectTrackEvent("action", "df");
            var o = 0,
                r = 2,
                a = function(e) {
                    r > o ? (o += 1, console.log(""), $.ajax.apply($, s)) : t.lbConnectError(e)
                },
                s = [{
                    url: Airdroid.Config.loadBalanceUrl,
                    dataType: "jsonp",
                    data: {
                        id: t._longId,
                        st: "data",
                        side: "web",
                        dt: "jsonp"
                    },
                    success: function(e) {
                        if ("1" == e.code) {
                            t._deviceObj.setDFUrl(e.weburl);
                            var i = !Airdroid.Util.isHttps() && Airdroid.Util.OS.MacOS && Airdroid.Util.browser.safari ? e.wsurl : e.wssurl;
                            t._deviceObj.initRemoteSocket(i, function() {
                                console.log(" "), t._deviceObj.getStreamUrlInRemote(), t._deviceObj.isConnect() && !t._deviceObj.isRemote() && (t._deviceObj.closeRemoteSocket(), console.log("，"))
                            }, function() {
                                console.log(" ")
                            }), t.connectTrackEvent("action", "df_success")
                        } else a(t.CONNECT_FAIL_TYPE.dfBusy), console.log("")
                    },
                    error: function() {
                        a(t.CONNECT_FAIL_TYPE.dfNetwork), console.log("!!")
                    }
                }];
            $.ajax.apply($, s), t.setConnectTimeOut(3e4), t._wakeTimer = setInterval(function() {
                t._connectStatus == t.status.wait ? t.wakePhone() : clearInterval(t._wakeTimer)
            }, 5e3)
        }
        t.connectPing()
    },
    checkLANConnectWhenRemote: function() {
        var e = this;
        if (!Airdroid.Runtime.setRemote && e._deviceObj.isConnect() && e._deviceObj.isRemote() && e._deviceObj.isCurrentDevice()) {
            var t = function() {
                    clearTimeout(e._checkLanWhenRemoteTimer), e._checkLanWhenRemoteTimer = setTimeout(function() {
                        e.checkLANConnectWhenRemote()
                    }, 1e4)
                },
                i = e._deviceObj.getNetOptions();
            if (_.isObject(i) && i.ip) {
                var n = "http://" + i.ip + ":" + i.port + "/sdctl/comm/ping/";
                Airdroid.DeviceManage.setRequestDeviceObj(e._deviceObj), Airdroid.Service.webSrvRequest(n, "", {
                    product: "intl"
                }, function(i) {
                    if ("1" == i.result) {
                        if (e._deviceObj.isConnect()) {
                            e.setDeviceIpAddress(), e._deviceObj.setLan();
                            var n = Airdroid.Util.getPhoneSocketUrl(e._deviceObj.getNetOptions()) + e._deviceObj.getToken();
                            e._deviceObj.initLanSocket(n), clearTimeout(e._checkLanWhenRemoteTimer), e.connectTrackEvent("changeToLan"), Airdroid.TaskbarManage.setConnectModel()
                        }
                    } else t()
                }, function() {
                    t()
                }, null, 1e4, !0)
            }
        }
    }
}), Airdroid.Device = Core.extend(Airdroid.Base, {
    _isConnect: !1,
    _connect3G: !1,
    connectType: {
        Lan: 0,
        Remote: 1,
        Lite: 2
    },
    _currentConnectType: 0,
    _token: null,
    _loginKey: null,
    _streamParam: null,
    _dataForwardUrl: null,
    _host_address: "",
    _express_host_address: "",
    _lanSocket: null,
    _remoteSocket: null,
    _currentSocket: null,
    _deviceOpt: null,
    _connectObj: null,
    _delayRequestQueue: null,
    _reconExpired: "",
    _reconnectTime: 72e5,
    _userDisconnect: !1,
    _deviceStatus: null,
    _hasUnreadSMS: !1,
    _hasUnreadCall: !1,
    _checkConnectTimerId: null,
    _checkConnectTime: 3e5,
    _forbiddenRequestPathArr: ["/sdctl/device/overview/", "/sdctl/comm/ping/", "/sdctl/comm/checklogin/"],
    _eventType: {
        phoneMatch: "phoneMatch"
    },
    _construct: function(e) {
        e = e || {}, this._deviceOpt = e, e.id || (e.id = -1), this._lang = Airdroid.Util.getLang("Common"), this._connectObj = new Airdroid.Connect(this), this._lanSocket = new Airdroid.LanSocket(this), this._remoteSocket = new Airdroid.RemoteSocket(this), this._subSocket = new Airdroid.SubSocket(this), this._dataCenter = {}, this._deviceStatus = {}, this._delayRequestQueue = [], this.initDataModel(), this.registerGopush()
    },
    registerGopush: function() {
        var e = this;
        Airdroid.Util.checkSupportGoPush() && (Airdroid.Util.getLocalStorageItem("goPush_" + e.getLongId()) || Airdroid.UserManage.getPushPubUrl(function(t) {
            Airdroid.Service.webSrvRequest(t, "/channel/save", {
                key: e._subSocket.getPushKey("web"),
                deviceType: "Web",
                appType: "airdroid",
                otherParams: JSON.stringify({
                    AccountId: parseInt(Airdroid.UserManage.getAccountId())
                })
            }, function() {
                Airdroid.Util.setLocalStorageItem("goPush_" + e.getLongId(), 1)
            }, function() {}, null, null, !0)
        }))
    },
    initDataModel: function() {
        var e = this;
        e._dataCenter.contact = new Airdroid.DataCenter.Contact(e), e._dataCenter.contact.total = 0, e._dataCenter.image = new Airdroid.Model.Image(e)
    },
    getContactDataCenter: function() {
        return this._dataCenter.contact
    },
    getImageDataCenter: function() {
        return this._dataCenter.image
    },
    setDeviceOpt: function(e) {
        var t = this.getNetOptions();
        this._deviceOpt = e, $.isEmptyObject(t) || this.setNetOptions(t)
    },
    setExpiredTime: function() {
        this._reconExpired = (new Date).getTime()
    },
    deleteExpiredTime: function() {
        this._reconExpired = ""
    },
    checkConExpired: function() {
        var e = this;
        if (e._reconExpired) {
            var t = e._reconExpired,
                i = (new Date).getTime();
            if (e.deleteExpiredTime(), i - t >= e._reconnectTime) return console.log("== ，=="), !1
        }
        return !0
    },
    setConnect: function() {
        if (this._isConnect = !0, this.isCurrentDevice()) {
            if (Airdroid.TaskbarManage.setDeviceConnectStatus(!0), Airdroid.Config.isLiteVersion) return !1;
            Airdroid.Message.hideReconnectNotice(), Airdroid.UserManage.setUserOtherLogin(!1), this.deleteExpiredTime()
        }
        this.startCheckConnectTimer()
    },
    startCheckConnectTimer: function() {
        var e = this;
        if (!e.isRemote()) {
            e._checkConnectTimerId && e.stopCheckConnectTimer();
            var t = function() {
                e.isCurrentDevice() ? (console.log("======>，,：" + e.getName()), Airdroid.CenterManage.showDeviceStopService()) : (console.log("======>，,：" + e.getName()), e.offLine(!1, Airdroid.Util.breakConnectType.PHONE_OFFLINE))
            };
            e._checkConnectTimerId = setTimeout(function() {
                console.log("，,：" + e.getName()), Airdroid.DeviceManage.setRequestDeviceObj(e), Airdroid.Service.getAndroidSummary(function() {
                    e.startCheckConnectTimer()
                }, function() {
                    t()
                })
            }, e._checkConnectTime)
        }
    },
    stopCheckConnectTimer: function() {
        clearTimeout(this._checkConnectTimerId)
    },
    setNoConnect: function(e, t) {
        var i = this;
        if (this._isConnect = !1, i.stopCheckConnectTimer(), this.isCurrentDevice()) {
            if (Airdroid.TaskbarManage.setDeviceConnectStatus(!1), !Airdroid.Util.checkShowReconnectTip()) return !1;
            e && ($.isFunction(e) ? e() : (console.log("==  =="), Airdroid.Message.showReconnectNotice())), t && i._connectObj.recordBrokenLog(t), i.setExpiredTime()
        }
    },
    getId: function() {
        return this._deviceOpt.id || ""
    },
    getLongId: function() {
        return this._deviceOpt.deviceId || ""
    },
    getImsi: function() {
        return this._deviceOpt.imsi || ""
    },
    getDeiveImg: function(e) {
        return e ? this._deviceOpt.model_pic + "-l.jpg" : this._deviceOpt.model_pic + "-s.png"
    },
    getDevicePushToken: function() {
        return this._deviceOpt.push_token || ""
    },
    getChannelToken: function() {
        return this._deviceOpt.channelToken || ""
    },
    getModel: function() {
        return this._deviceOpt.model || ""
    },
    getVersion: function() {
        return this._deviceOpt.appVer || ""
    },
    getToken: function() {
        return this._token
    },
    getLoginKey: function() {
        return this._loginKey
    },
    getStreamParam: function() {
        return this._streamParam
    },
    getDFUrl: function() {
        return this._dataForwardUrl
    },
    getLanSocket: function() {
        return this._lanSocket
    },
    getRemoteSocket: function() {
        return this._remoteSocket
    },
    getHostAddress: function() {
        return this._host_address
    },
    getDeviceModel: function() {
        if (!this._deviceOpt.model) return "";
        var e = this._deviceOpt.manu,
            t = this._deviceOpt.model;
        return t.indexOf(e) > -1 ? t : e + " " + t
    },
    getName: function() {
        return this._deviceOpt.name || this.getDeviceModel() || ""
    },
    getDeviceOpt: function() {
        return this._deviceOpt
    },
    getLogicKey: function() {
        return this._deviceOpt.logicKey
    },
    getSdkLevel: function() {
        return this._deviceStatus && parseInt(this._deviceStatus.sdklevel) || parseInt(this._deviceOpt.sdkApiLevel) || 0
    },
    getDeviceStatusObj: function() {
        return this._deviceStatus
    },
    getNetOptions: function() {
        return this._deviceOpt.netOpts || {}
    },
    setNetOptions: function(e, t) {
        var i = this;
        e.ip && (this._deviceOpt.netOpts = $.extend(!0, {}, this._deviceOpt.netOpts, e), t && Airdroid.Service.updateNetOptions({
            net_opts: i._deviceOpt.netOpts,
            device_id: i.getLongId(),
            logic_key: i.getLogicKey(),
            account_id: Airdroid.UserManage.getAccountId()
        }, function(e) {
            "1" == e.code ? Airdroid.Util.trackEvent("Connect", "updateNetOpts", "success") : Airdroid.Util.trackEvent("Connect", "updateNetOpts", "fail")
        }, function() {
            Airdroid.Util.trackEvent("Connect", "updateNetOpts", "network")
        }))
    },
    setConnect3G: function(e) {
        this._connect3G = e
    },
    setSdkLevel: function(e) {
        this._deviceOpt.sdkApiLevel = e
    },
    setRemote: function() {
        this._currentConnectType = this.connectType.Remote
    },
    setLan: function() {
        this._currentConnectType = this.connectType.Lan, this.setConnect3G(!1)
    },
    setConnectType: function(e) {
        e ? this.setRemote() : this.setLan()
    },
    setToken: function(e) {
        this._token = e
    },
    setLoginKey: function(e) {
        this._loginKey = e
    },
    setStreamParam: function(e) {
        this._streamParam = e
    },
    setDFUrl: function(e) {
        this._dataForwardUrl = e
    },
    setLanSocket: function(e) {
        this._lanSocket = e
    },
    setRemoteSocket: function(e) {
        this._remoteSocket = e
    },
    setHostAddress: function(e) {
        this._host_address = e, this._express_host_address = this._host_address
    },
    setUserDisconnect: function(e) {
        this._userDisconnect = e
    },
    setDeviceStatusObj: function(e) {
        this._deviceStatus = $.extend(this._deviceStatus, e)
    },
    setHasUnreadSMS: function(e) {
        this._hasUnreadSMS = e
    },
    setHasUnreadCall: function(e) {
        this._hasUnreadCall = e
    },
    isHasUnreadSMS: function() {
        return this._hasUnreadSMS
    },
    isHasUnreadCall: function() {
        return this._hasUnreadCall
    },
    isConnect3G: function() {
        return this._connect3G
    },
    isRemote: function() {
        return this._currentConnectType === this.connectType.Remote
    },
    isDefault: function() {
        return this._deviceOpt && "1" == this._deviceOpt.is_default
    },
    isConnect: function() {
        return this._isConnect
    },
    isConnecting: function() {
        return this._connectObj.isConnecting()
    },
    isUserDisconnect: function() {
        return this._userDisconnect
    },
    checkAndReconnectLANSocket: function() {
        var e = this;
        e.isConnect() && !e.isRemote() && e._lanSocket.isReConnectFail() && (e._lanSocket.resetConnectCount(), e._lanSocket.reConnect())
    },
    stopReconnectSocket: function() {
        this._lanSocket.setConnectCountMax()
    },
    closeLanSocket: function() {
        this._lanSocket.closeSocket()
    },
    closeRemoteSocket: function() {
        this._remoteSocket.closeSocket()
    },
    getStreamUrlInRemote: function(e, t) {
        var i = this;
        if (i.getStreamParam()) return _.isFunction(e) && e(), !1;
        var n = {
                id: i.getLongId(),
                st: "bitdata",
                side: "web",
                imsi: i.getImsi()
            },
            o = 0,
            r = 2;
        Airdroid.Util.trackEvent("Connect", "action", "binary");
        var a = function(e) {
                r > o ? (o += 1, console.log("，"), $.ajax.apply($, s)) : _.isFunction(t) && t(e)
            },
            s = [{
                url: Airdroid.Config.loadBalanceUrl,
                async: !0,
                dataType: "json",
                cache: !0,
                data: n,
                success: function(t) {
                    "1" == t.code ? (Airdroid.Util.trackEvent("Connect", "action", "binary_success"), i.setStreamParam({
                        weburl: t.weburl,
                        dsurl: t.dsurl,
                        dsport: t.dsport,
                        bdsurl: t.bdsurl
                    }), _.isFunction(e) && e()) : (Airdroid.Util.trackEvent("Connect", "action", "binary_busy_fail"), a(1))
                },
                error: function() {
                    Airdroid.Util.trackEvent("Connect", "action", "binary_network_fail"), a(0)
                }
            }];
        $.ajax.apply($, s)
    },
    httpToStreamInterface: function(e, t) {
        var i = this;
        if (!i.getStreamParam()) return !1;
        var n = i.getStreamParam();
        t.token = t["7bb"] + "token_end", t.matchid = i.getLongId() + "mid_end", t.dfurl = i.getDFUrl() + "dfurl_end", t.dsurl = n.dsurl + "dsurl_end", t.dsport = n.dsport + "dsport_end", t.bitdata = 1;
        var o = n.weburl + e;
        return o = /\?/.test(o) ? o + "&" + $.param(t) : o + "?" + $.param(t)
    },
    isCurrentDevice: function() {
        return Airdroid.DeviceManage.isCurrentDeviceObj(this)
    },
    addToRequestQueue: function(e) {
        0 > this._forbiddenRequestPathArr.indexOf(e.arg[1]) && this._delayRequestQueue.push(e)
    },
    clearRequestQueue: function() {
        this.isConnecting() || (this._delayRequestQueue = [])
    },
    deleteCurrentRequest: function(e) {
        var t = this;
        _.each(t._delayRequestQueue, function(i, n) {
            i && i.rid == e && t._delayRequestQueue.splice(n, 1)
        })
    },
    sendSocketCheck: function() {
        this.isRemote() || this._lanSocket.send("check")
    },
    addToken: function(e) {
        return e = e || {}, e["7bb"] = this.getToken(), e
    },
    offLine: function(e, t) {
        var i = this;
        e = e || !1, this.closeLanSocket(), this.isRemote() || this.closeRemoteSocket(), this.isConnect() && (this.setNoConnect(e, t), this.setToken(null), Airdroid.MessageManage.fireEvent(Airdroid.MessageManage.EventTypes.device_disconnect, {
            deviceObj: i
        }))
    },
    destroy: function() {
        Airdroid.DeviceManage.logoutDevice(this.getId())
    },
    reSendRequest: function() {
        var e = this;
        if (e.getToken()) {
            console.log("，，");
            var t = $.extend(!0, [], e._delayRequestQueue);
            e.clearRequestQueue(), _.each(t, function(t) {
                e.isCurrentDevice() && Airdroid.Service.jsonpRequest.apply(Airdroid.Service, t.arg)
            })
        }
    },
    doConnect: function(e) {
        this._connectObj.connectPhone(e)
    },
    cancelConnect: function() {
        this.isConnecting() && this._connectObj.connectFail(!0)
    },
    reconnect: function(e) {
        var t = this;
        this._connectObj.reconnectPhone(function() {
            console.log("===="), t.reSendRequest(), t.isCurrentDevice() && Airdroid.TaskbarManage.setConnectModel(), $.isFunction(e) && e()
        }, function() {
            Airdroid.Runtime.QRNoAccount ? Airdroid.Util.gotItMsgTip(t._lang.QrNotSameWifiNoAccount, function() {
                Airdroid.Runtime.QRNoAccount = !1, Airdroid.CenterManage.showReLogin()
            }, t._lang.UseAccountLogin) : Airdroid.CenterManage.showReconnectBoxWhenOffline(t._lang.connect_device_error)
        }, function() {
            Airdroid.Util.showLoadTip(t._lang.connect_device_tip)
        })
    },
    switchDevice: function(e, t, i) {
        this._connectObj.switchPhone(e, t, i)
    },
    getConnectId: function() {
        return this._connectObj.getConnectId()
    },
    getSubSocket: function() {
        return this._subSocket
    },
    initPushSubSocket: function(e, t) {
        var i = this;
        Airdroid.Util.checkSupportGoPush() && Airdroid.UserManage.getPushSubUrl(function(n) {
            n = n + "/sub?" + "key=" + i._subSocket.getPushKey("web") + "&token=" + i._subSocket.getPushToken(), i._subSocket.create({
                url: n,
                successCb: e,
                failCb: t
            })
        })
    },
    initRemoteSocket: function(e, t, i) {
        var n = this;
        e = e + "/web?id=" + n.getLongId() + "&token=" + n.getChannelToken(), n._remoteSocket.create({
            url: e,
            successCb: t,
            failCb: i
        })
    },
    initLanSocket: function(e, t, i) {
        var n = this;
        n._lanSocket.create({
            url: e,
            successCb: t,
            failCb: i
        })
    },
    getErrorDataFromPhone: function(e, t, i, n) {
        var o = this;
        switch (t.err) {
            case "forbidden":
                e === o.getConnectId() && (o.isCurrentDevice() ? Airdroid.CenterManage.onServerForbidden(o) : o.offLine(!1, Airdroid.Util.breakConnectType.PHONE_OFFLINE));
                break;
            case "overage":
                o.isConnecting() && o.isRemote() && Airdroid.AppManage.destroyModule(Airdroid.Config.dependApps.loginWidget), o.isCurrentDevice() && Airdroid.UserManage.monthDataFlowOverageFromPhone();
                break;
            case "auth_failed":
                e === o.getConnectId() && (n(), Airdroid.Util.trackEvent("connect", "checklogin", "auth_failed"));
                break;
            case "illegal_key":
                e === o.getConnectId() && (n(), Airdroid.Util.trackEvent("connect", "checklogin", "illegal_key"));
                break;
            case "no_account":
                e === o.getConnectId() && (n(), Airdroid.AppManage.destroyModule(Airdroid.Config.dependApps.loginWidget), Airdroid.Util.closeCurrentBlock(), Airdroid.CenterManage.showBindDeviceBox(), Airdroid.Util.trackEvent("connect", "checklogin", "no_account"))
        }
    }
}), WEB_SOCKET_SWF_LOCATION = Airdroid.Config.baseUri + "assets/swf/WebSocketMainInsecure.swf", WEB_SOCKET_DEBUG = !0,
    function() {
        if (window.WEB_SOCKET_FORCE_FLASH);
        else {
            if (window.WebSocket) return;
            if (window.MozWebSocket) return window.WebSocket = MozWebSocket, void 0
        }
        var e;
        return e = window.WEB_SOCKET_LOGGER ? WEB_SOCKET_LOGGER : window.console && window.console.log && window.console.error ? window.console : {
            log: function() {},
            error: function() {}
        }, 10 > swfobject.getFlashPlayerVersion().major ? (Airdroid.Runtime.flashPlayerUpdate = !0, void 0) : ("file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), window.WebSocket = function(e, t, i, n, o) {
            var r = this;
            r.__id = WebSocket.__nextId++, WebSocket.__instances[r.__id] = r, r.readyState = WebSocket.CONNECTING, r.bufferedAmount = 0, r.__events = {}, t ? "string" == typeof t && (t = [t]) : t = [], r.__createTask = setTimeout(function() {
                WebSocket.__addTask(function() {
                    r.__createTask = null, WebSocket.__flash.create(r.__id, e, t, i || null, n || 0, o || null)
                })
            }, 0)
        }, WebSocket.prototype.send = function(e) {
            if (this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";
            var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
            return 0 > t ? !0 : (this.bufferedAmount += t, !1)
        }, WebSocket.prototype.close = function() {
            return this.__createTask ? (clearTimeout(this.__createTask), this.__createTask = null, this.readyState = WebSocket.CLOSED, void 0) : (this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id)), void 0)
        }, WebSocket.prototype.addEventListener = function(e, t) {
            e in this.__events || (this.__events[e] = []), this.__events[e].push(t)
        }, WebSocket.prototype.removeEventListener = function(e, t) {
            if (e in this.__events)
                for (var i = this.__events[e], n = i.length - 1; n >= 0; --n)
                    if (i[n] === t) {
                        i.splice(n, 1);
                        break
                    }
        }, WebSocket.prototype.dispatchEvent = function(e) {
            for (var t = this.__events[e.type] || [], i = 0; t.length > i; ++i) t[i](e);
            var n = this["on" + e.type];
            n && n.apply(this, [e])
        }, WebSocket.prototype.__handleEvent = function(e) {
            "readyState" in e && (this.readyState = e.readyState), "protocol" in e && (this.protocol = e.protocol);
            var t;
            if ("open" == e.type || "error" == e.type) t = this.__createSimpleEvent(e.type);
            else if ("close" == e.type) t = this.__createSimpleEvent("close"), t.wasClean = e.wasClean ? !0 : !1, t.code = e.code, t.reason = e.reason;
            else {
                if ("message" != e.type) throw "unknown event type: " + e.type;
                var i = decodeURIComponent(e.message);
                t = this.__createMessageEvent("message", i)
            }
            this.dispatchEvent(t)
        }, WebSocket.prototype.__createSimpleEvent = function(e) {
            if (document.createEvent && window.Event) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !1, !1), t
            }
            return {
                type: e,
                bubbles: !1,
                cancelable: !1
            }
        }, WebSocket.prototype.__createMessageEvent = function(e, t) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var i = document.createEvent("MessageEvent");
                return i.initMessageEvent("message", !1, !1, t, null, null, window, null), i
            }
            return {
                type: e,
                data: t,
                bubbles: !1,
                cancelable: !1
            }
        }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__initialized = !1, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(e) {
            WebSocket.__addTask(function() {
                WebSocket.__flash.loadManualPolicyFile(e)
            })
        }, WebSocket.__initialize = function() {
            if (!WebSocket.__initialized) {
                if (WebSocket.__initialized = !0, WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), "" == window.WEB_SOCKET_SWF_LOCATION) return e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"), void 0;
                if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR && !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) && WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) {
                    var t = RegExp.$1;
                    location.host != t && e.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('" + location.host + "' != '" + t + "'). " + "See also 'How to host HTML file and SWF file in different domains' section " + "in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message " + "by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;")
                }
                var i = document.createElement("div");
                i.id = "webSocketContainer", i.style.position = "absolute", WebSocket.__isFlashLite() ? (i.style.left = "0px", i.style.top = "0px") : (i.style.left = "-100px", i.style.top = "-100px");
                var n = document.createElement("div");
                n.id = "webSocketFlash", i.appendChild(n), document.body.appendChild(i), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                    hasPriority: !0,
                    swliveconnect: !0,
                    allowScriptAccess: "always"
                }, null, function(t) {
                    t.success || e.error("[WebSocket] swfobject.embedSWF failed")
                })
            }
        }, WebSocket.__onFlashInitialized = function() {
            setTimeout(function() {
                WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var e = 0; WebSocket.__tasks.length > e; ++e) WebSocket.__tasks[e]();
                WebSocket.__tasks = []
            }, 0)
        }, WebSocket.__onFlashEvent = function() {
            return setTimeout(function() {
                try {
                    for (var t = WebSocket.__flash.receiveEvents(), i = 0; t.length > i; ++i) WebSocket.__instances[t[i].webSocketId].__handleEvent(t[i])
                } catch (n) {
                    e.error(n)
                }
            }, 0), !0
        }, WebSocket.__log = function(t) {
            e.log(decodeURIComponent(t))
        }, WebSocket.__error = function(t) {
            e.error(decodeURIComponent(t))
        }, WebSocket.__addTask = function(e) {
            WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
        }, WebSocket.__isFlashLite = function() {
            if (!window.navigator || !window.navigator.mimeTypes) return !1;
            var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
            return e && e.enabledPlugin && e.enabledPlugin.filename ? e.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1 : !1
        }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || swfobject.addDomLoadEvent(function() {
            WebSocket.__initialize()
        }), void 0)
    }(), Airdroid.BaseSocket = Core.extend(Airdroid.Base, {
    $abstract: {
        create: function() {},
        closeSocket: function() {}
    },
    _construct: function(e) {
        this._socket = null, this._socketUrl = null, this._deviceObj = e, this._deviceId = this._deviceObj.getId(), this._lang = Airdroid.Util.getLang("Common")
    },
    init: function(e) {
        var t = this;
        t._socketUrl = e.url || t._socketUrl, t._socket = new WebSocket(t._socketUrl), t._socket.onopen = function() {
            _.isFunction(e.successCb) && e.successCb()
        }, t._socket.onmessage = function(t) {
            $log.info("phone websocket reciver data===>" + t.data), _.isFunction(e.messageCb) && e.messageCb(t)
        }, t._socket.onclose = function() {
            $log.info("websocket closed"), _.isFunction(e.failCb) && e.failCb()
        }, t._socket.onerror = function() {
            $log.info("websocket error"), _.isFunction(e.errorCb) ? e.errorCb() : _.isFunction(e.failCb) && e.failCb()
        }
    },
    close: function(e) {
        var t = this;
        t._socket && 1 === t._socket.readyState && (_.isFunction(e) && e(), t._socket.close())
    },
    send: function(e) {
        var t = this;
        console.info("send socket data ==>" + e), t._socket && 1 === t._socket.readyState && t._socket.send(e)
    },
    handlerPushData: function(e) {
        var t = this;
        if (!(null == e || 0 > e.indexOf("event"))) {
            var i = e.split("(][)");
            _.each(i, function(e) {
                if (null != e && "" != e) {
                    var i = $.parseJSON(e);
                    Airdroid.MessageManage.socketEventHandler(i.event, i.data, t._deviceObj)
                }
            })
        }
    }
}), Airdroid.LanSocket = Core.extend(Airdroid.BaseSocket, {
    _connectCount: 1,
    MAX_CONNECT_TIME: 3,
    _initCallBack: null,
    _checkReConnectFail: !1,
    create: function(e) {
        var t = this;
        e = e || {}, e.url = e.url || t._socketUrl, t.init({
            url: e.url,
            successCb: function() {
                var i = {
                    event: "device_status",
                    send: "web",
                    data: ""
                };
                console.log("websocket"), t.send(JSON.stringify(i)), $.isFunction(t._initCallBack) && t._initCallBack(), _.isFunction(e.successCb) && (e.successCb(), e.successCb = null), t._checkReConnectFail = !1
            },
            failCb: function() {
                t._deviceObj.isUserDisconnect() || !t._deviceObj.isCurrentDevice() ? t._deviceObj.setUserDisconnect(!1) : t.reConnect(), _.isFunction(e.failCb) && (e.failCb(), e.failCb = null)
            },
            messageCb: function(e) {
                t.resetConnectCount(), t.handlerPushData(e.data)
            }
        })
    },
    closeSocket: function() {
        var e = this;
        e.close(function() {
            e._deviceObj.setUserDisconnect(!0)
        })
    },
    reConnect: function() {
        var e = this;
        return e._deviceObj.isConnect() && e._deviceObj.isRemote() ? !1 : (this._connectCount < this.MAX_CONNECT_TIME ? (e.create(), e._initCallBack || (e._initCallBack = function() {
            e._deviceObj.reSendRequest(), Airdroid.Message.hideReconnectNotice(), e._initCallBack = null
        }), this._connectCount++) : e._checkReConnectFail = !0, void 0)
    },
    isReConnectFail: function() {
        return this._checkReConnectFail
    },
    resetConnectCount: function() {
        this._connectCount = 1
    },
    setConnectCountMax: function() {
        this._connectCount = this.MAX_CONNECT_TIME
    }
}), Airdroid.RemoteSocket = Core.extend(Airdroid.BaseSocket, {
    _requestQueque: {},
    _reconTimeId: null,
    _connectWsArr: [],
    create: function(e) {
        var t = this;
        e = e || {}, e.url = e.url || t._socketUrl, t._socket && 3 != t._socket.readyState || t.init({
            url: e.url,
            successCb: function() {
                _.isFunction(e.successCb) && (e.successCb(), e.successCb = null)
            },
            failCb: function() {
                (t._deviceObj.isUserDisconnect() || !t._deviceObj.isCurrentDevice()) && t._deviceObj.setUserDisconnect(!1), _.isFunction(e.failCb) && (e.failCb(), e.failCb = null)
            },
            messageCb: function(e) {
                t.onSocketMessage($.parseJSON(e.data))
            }
        })
    },
    closeSocket: function() {
        var e = this;
        e.close(function() {
            e._deviceObj.setUserDisconnect(!0)
        });
        for (var t in e._requestQueque) e._requestQueque[t] && e._requestQueque[t].stopTimer();
        e._requestQueque = {}
    },
    httpToSocketReuest: function(e, t, i, n, o, r) {
        var a = this,
            s = e,
            c = s.indexOf("sdctl/comm/ping") > -1 ? !0 : !1,
            d = r || 4e4;
        t && (s = /\?/.test(s) ? s + "&" + $.param(t) : s + "?" + $.param(t));
        var l = {
                pid: _.uniqueId("webrequest"),
                from: "web",
                to: "phone",
                ptype: "request",
                body: {
                    command: s
                }
            },
            u = {
                "package": l,
                setTimeout: !0,
                timerId: null,
                connectId: a._deviceObj.getConnectId(),
                successCallBack: function(e) {
                    return void 0 != e && e.err ? (a._deviceObj.getErrorDataFromPhone(this.connectId, e, i, n), void 0) : (_.isFunction(i) && i(e), clearTimeout(a._reconTimeId), void 0)
                },
                errorCallBack: function(e) {
                    _.isFunction(n) && n(e)
                },
                completeCallBack: function(e) {
                    _.isFunction(o) && o(e)
                },
                startTimer: function() {
                    this.timerId = setTimeout(function() {
                        var e = function() {
                            a._deviceObj.isConnect() && (a._deviceObj.offLine(!0, Airdroid.Util.breakConnectType.DISCONNECTION), a.closeSocket())
                        };
                        c ? e() : (Airdroid.DeviceManage.setRequestDeviceObj(a._deviceObj), Airdroid.Service.ping(function() {}, function() {
                            e()
                        }, 1e4))
                    }, d)
                },
                stopTimer: function() {
                    this.timerId && clearTimeout(this.timerId)
                }
            };
        this._requestQueque[l.pid] = u, u.setTimeout && u.startTimer(), a.send(JSON.stringify(l))
    },
    getWsStr: function() {
        return this._connectWsArr.join("==")
    },
    clearWsStr: function() {
        this._connectWsArr = []
    },
    onSocketMessage: function(e) {
        var t = this;
        if (t._deviceObj.isConnecting() && t._connectWsArr.push(JSON.stringify(e)), "response" == e.ptype) {
            var i = t._requestQueque[e.pid];
            i && (i.setTimeout && i.stopTimer(), "success" == e.body.result ? _.isFunction(i.successCallBack) && i.successCallBack($.parseJSON(e.body.data)) : _.isFunction(i.errorCallBack) && i.errorCallBack(), _.isFunction(i.completeCallBack) && i.completeCallBack(), delete t._requestQueque[e.pid])
        } else if ("match" == e.ptype) {
            var n = JSON.parse(e.body.data);
            t._deviceObj.fireEvent(t._deviceObj._eventType.phoneMatch, {
                netOpts: n
            })
        } else if ("event" == e.ptype)
            if ("server" == e.from)
                if (_.isUndefined(e.body.ps)) {
                    if (_.isUndefined(e.body.ws)) _.isUndefined(e.body.verify) || 0 == e.body.verify && t._deviceObj.offLine();
                    else if (0 == e.body.ws)
                        if (t._deviceObj.isCurrentDevice()) {
                            if (t._deviceObj._connectObj.isConnecting()) return !1;
                            console.log("===="), t._deviceObj.offLine(!1, Airdroid.Util.breakConnectType.OTHER_LOGIN), Airdroid.Util.kickOutMsg()
                        } else t._deviceObj.offLine(!1, Airdroid.Util.breakConnectType.OTHER_LOGIN)
                } else 0 == e.body.ps ? t._deviceObj.isConnect() && t._deviceObj.isRemote() && (t._reconTimeId && clearTimeout(t._reconTimeId), t._reconTimeId = setTimeout(function() {
                    t._deviceObj.offLine(!0, Airdroid.Util.breakConnectType.DISCONNECTION)
                }, 12e4)) : (t._deviceObj._connectObj.isConnecting() || t._deviceObj.reSendRequest(), clearTimeout(t._reconTimeId), t._deviceObj.getToken() && t._deviceObj.setConnect());
            else {
                var o = e.body.eventarray[0];
                t.handlerPushData(o)
            }
    }
}), Airdroid.SubSocket = Core.extend(Airdroid.BaseSocket, {
    subSocket: null,
    heartbeat: 60,
    timerOutTimer: null,
    heartbeatTimer: null,
    _goPushPubQueque: {},
    create: function(e) {
        var t = this;
        e = e || {}, e.url = e.url || t._socketUrl, t._socket && 3 != t._socket.readyState || t.init({
            url: e.url,
            successCb: function() {
                clearInterval(t.heartbeatTimer), t.runHeartbeatTask(), _.isFunction(e.successCb) && (e.successCb(), e.successCb = null)
            },
            failCb: function() {
                Airdroid.Util.trackEvent("goPush", "sub", "fail"), _.isFunction(e.failCb) && (e.failCb(), e.failCb = null)
            },
            messageCb: function(e) {
                "+" == e.data[0] && (console.log(""), clearTimeout(t.timerOutTimer))
            }
        })
    },
    closeSocket: function() {
        var e = this;
        e.close()
    },
    runHeartbeatTask: function() {
        var e = this;
        e.heartbeatTimer = setInterval(function() {
            console.log(""), e.send("h"), e.timerOutTimer = setTimeout(function() {
                e.closeSocket(), e._deviceObj.isConnect() && (Airdroid.Util.trackEvent("goPush", "sub", "reconnect"), e.create())
            }, 1e3 * (parseInt(e.heartbeat) + 15))
        }, 1e3 * e.heartbeat)
    },
    getPushKey: function(e, t) {
        var i, n;
        return i = Airdroid.Config.userApiUrl.indexOf("https://id.airdroid.com/") > -1 ? "p" : "t", n = Airdroid.UserManage.GOPUSH_KEY[e] || "100", "web" == e ? i + "-" + n + "-" + Airdroid.UserManage.getAccountId() : i + "-" + n + "-" + t.getLongId()
    },
    getPushToken: function(e) {
        return e ? e.getDevicePushToken() : (Airdroid.UserManage.getAccount() || {}).web_push_token
    },
    getPubPushCommonParam: function(e) {
        var t = this,
            i = JSON.stringify($.extend(!0, {}, e.msg, {
                from: "web",
                deviceid: t._deviceObj.getLongId(),
                body: {
                    uid: _.uniqueId("webpushrequest")
                }
            }));
        return delete e.msg, $.extend(!0, {}, {
            key: t.getPushKey("phone", t._deviceObj),
            token: t.getPushToken(t._deviceObj),
            mtype: "",
            from: "web",
            save: "1",
            expire: "5",
            gcmId: "",
            collapseKey: "",
            msg: i
        }, e)
    },
    pushPubHandle: function(e, t, i, n) {
        var o = JSON.parse(e.msg).body.uid,
            r = {
                "package": e,
                setTimeout: !0,
                timerId: null,
                successCallBack: function(e) {
                    _.isFunction(t) && t(e)
                },
                errorCallBack: function(e) {
                    _.isFunction(i) && i(e)
                },
                completeCallBack: function(e) {
                    _.isFunction(n) && n(e)
                },
                startTimer: function() {},
                stopTimer: function() {
                    this.timerId && clearTimeout(this.timerId)
                }
            };
        this._goPushPubQueque[o] = r, r.setTimeout && r.startTimer()
    },
    onPushSubMessage: function(e) {
        var t = this,
            i = e.uid,
            n = t._goPushPubQueque[i];
        n && (n.setTimeout && n.stopTimer(), "ok" == e.msg ? _.isFunction(n.successCallBack) && ("wake2" == e.ptype && (e.code = "200"), n.successCallBack(e)) : _.isFunction(n.errorCallBack) && n.errorCallBack(e), _.isFunction(n.completeCallBack) && n.completeCallBack(), delete t._goPushPubQueque[i])
    }
}),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        var t = [],
            i = e(document),
            n = navigator.userAgent.toLowerCase(),
            o = e(window),
            r = [],
            a = {
                ieQuirks: null,
                msie: /msie/.test(n) && !/opera/.test(n),
                opera: /opera/.test(n)
            };
        a.ie6 = a.msie && /msie 6./.test(n) && "object" != typeof window.XMLHttpRequest, a.ie7 = a.msie && /msie 7.0/.test(n), e.modal = function(t, i) {
            return e.modal.impl.init(t, i)
        }, e.modal.close = function() {
            e.modal.impl.close()
        }, e.modal.focus = function(t) {
            e.modal.impl.focus(t)
        }, e.modal.setContainerDimensions = function() {
            e.modal.impl.setContainerDimensions()
        }, e.modal.setPosition = function() {
            e.modal.impl.setPosition()
        }, e.modal.update = function(t, i) {
            e.modal.impl.update(t, i)
        }, e.fn.modal = function(t) {
            return e.modal.impl.init(this, t)
        }, e.modal.defaults = {
            appendTo: "body",
            focus: !0,
            opacity: 50,
            overlayId: "simplemodal-overlay",
            overlayCss: {},
            containerId: "simplemodal-container",
            containerCss: {},
            dataId: "simplemodal-data",
            dataCss: {},
            minHeight: null,
            minWidth: null,
            maxHeight: null,
            maxWidth: null,
            autoResize: !1,
            autoPosition: !0,
            zIndex: 1e3,
            close: !0,
            closeHTML: '<a class="modalCloseImg" title="Close"></a>',
            closeClass: "simplemodal-close",
            escClose: !0,
            overlayClose: !1,
            fixed: !0,
            position: null,
            persist: !1,
            modal: !0,
            onOpen: null,
            onShow: null,
            onClose: null
        }, e.modal.impl = {
            d: {},
            init: function(t, i) {
                var n = this;
                if (n.d.data) return !1;
                if (a.ieQuirks = a.msie && !e.support.boxModel, n.o = e.extend({}, e.modal.defaults, i), n.zIndex = n.o.zIndex, n.occb = !1, "object" == typeof t) t = t instanceof e ? t : e(t), n.d.placeholder = !1, t.parent().parent().size() > 0 && (t.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({
                    display: "none"
                })), n.d.placeholder = !0, n.display = t.css("display"), n.o.persist || (n.d.orig = t.clone(!0)));
                else {
                    if ("string" != typeof t && "number" != typeof t) return alert("SimpleModal Error: Unsupported data type: " + typeof t), n;
                    t = e("<div></div>").html(t)
                }
                return n.create(t), t = null, n.open(), e.isFunction(n.o.onShow) && n.o.onShow.apply(n, [n.d]), n
            },
            create: function(i) {
                var n = this;
                n.getDimensions(), n.o.modal && a.ie6 && (n.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(n.o.iframeCss, {
                    display: "none",
                    opacity: 0,
                    position: "fixed",
                    height: r[0],
                    width: r[1],
                    zIndex: n.o.zIndex,
                    top: 0,
                    left: 0
                })).appendTo(n.o.appendTo)), n.d.overlay = e("<div></div>").attr("id", n.o.overlayId).addClass("simplemodal-overlay").css(e.extend(n.o.overlayCss, {
                    display: "none",
                    opacity: n.o.opacity / 100,
                    height: n.o.modal ? t[0] : 0,
                    width: n.o.modal ? t[1] : 0,
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: n.o.zIndex + 1
                })).appendTo(n.o.appendTo), n.d.container = e("<div></div>").attr("id", n.o.containerId).addClass("simplemodal-container").css(e.extend({
                    position: n.o.fixed ? "fixed" : "absolute"
                }, n.o.containerCss, {
                    display: "none",
                    zIndex: n.o.zIndex + 2
                })).append(n.o.close && n.o.closeHTML ? e(n.o.closeHTML).addClass(n.o.closeClass) : "").appendTo(n.o.appendTo), n.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                    height: "100%",
                    outline: 0,
                    width: "100%"
                }).appendTo(n.d.container), n.d.data = i.attr("id", i.attr("id") || n.o.dataId).addClass("simplemodal-data").css(e.extend(n.o.dataCss, {
                    display: "none"
                })).appendTo("body"), i = null, n.setContainerDimensions(), n.d.data.appendTo(n.d.wrap), (a.ie6 || a.ieQuirks) && n.fixIE()
            },
            bindEvents: function() {
                var n = this;
                e("." + n.o.closeClass).bind("click.simplemodal", function(e) {
                    e.preventDefault(), n.close()
                }), n.o.modal && n.o.close && n.o.overlayClose && n.d.overlay.bind("click.simplemodal", function(e) {
                    e.preventDefault(), n.close()
                }), i.bind("keypress.simplemodal", function(e) {
                    n.o.modal && 9 === e.keyCode ? n.watchTab(e) : n.o.close && n.o.escClose && 27 === e.keyCode && (e.preventDefault(), n.close())
                }), o.bind("resize.simplemodal orientationchange.simplemodal", function() {
                    n.getDimensions(), n.o.autoResize ? n.setContainerDimensions() : n.o.autoPosition && n.setPosition(), a.ie6 || a.ieQuirks ? n.fixIE() : n.o.modal && (n.d.iframe && n.d.iframe.css({
                        height: r[0],
                        width: r[1]
                    }), n.d.overlay.css({
                        height: t[0],
                        width: t[1]
                    }))
                })
            },
            unbindEvents: function() {
                e("." + this.o.closeClass).unbind("click.simplemodal"), i.unbind("keydown.simplemodal"), o.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
            },
            fixIE: function() {
                var t = this,
                    i = t.o.position;
                e.each([t.d.iframe || null, t.o.modal ? t.d.overlay : null, "fixed" === t.d.container.css("position") ? t.d.container : null], function(e, t) {
                    if (t) {
                        var n = "document.body.clientHeight",
                            o = "document.body.clientWidth",
                            r = "document.body.scrollHeight",
                            a = "document.body.scrollLeft",
                            s = "document.body.scrollTop",
                            c = "document.body.scrollWidth",
                            d = "document.documentElement.clientHeight",
                            l = "document.documentElement.clientWidth",
                            u = "document.documentElement.scrollLeft",
                            p = "document.documentElement.scrollTop",
                            h = t[0].style;
                        if (h.position = "absolute", 2 > e) h.removeExpression("height"), h.removeExpression("width"), h.setExpression("height", "" + r + " > " + n + " ? " + r + " : " + n + ' + "px"'), h.setExpression("width", "" + c + " > " + o + " ? " + c + " : " + o + ' + "px"');
                        else {
                            var f, g;
                            if (i && i.constructor === Array) {
                                var m = i[0] ? "number" == typeof i[0] ? "" + i[0] : i[0].replace(/px/, "") : t.css("top").replace(/px/, "");
                                if (f = -1 === m.indexOf("%") ? m + " + (t = " + p + " ? " + p + " : " + s + ') + "px"' : parseInt(m.replace(/%/, "")) + " * ((" + d + " || " + n + ") / 100) + (t = " + p + " ? " + p + " : " + s + ') + "px"', i[1]) {
                                    var _ = "number" == typeof i[1] ? "" + i[1] : i[1].replace(/px/, "");
                                    g = -1 === _.indexOf("%") ? _ + " + (t = " + u + " ? " + u + " : " + a + ') + "px"' : parseInt(_.replace(/%/, "")) + " * ((" + l + " || " + o + ") / 100) + (t = " + u + " ? " + u + " : " + a + ') + "px"'
                                }
                            } else f = "(" + d + " || " + n + ") / 2 - (this.offsetHeight / 2) + (t = " + p + " ? " + p + " : " + s + ') + "px"', g = "(" + l + " || " + o + ") / 2 - (this.offsetWidth / 2) + (t = " + u + " ? " + u + " : " + a + ') + "px"';
                            h.removeExpression("top"), h.removeExpression("left"), h.setExpression("top", f), h.setExpression("left", g)
                        }
                    }
                })
            },
            focus: function(t) {
                var i = this,
                    n = t && -1 !== e.inArray(t, ["first", "last"]) ? t : "first",
                    o = e(":input:enabled:visible:" + n, i.d.wrap);
                setTimeout(function() {
                    o.length > 0 ? o.focus() : i.d.wrap.focus()
                }, 10)
            },
            getDimensions: function() {
                var e = window.innerHeight === void 0 ? o.height() : window.innerHeight;
                t = [i.height(), i.width()], r = [e, o.width()]
            },
            getVal: function(e, t) {
                return e ? "number" == typeof e ? e : "auto" === e ? 0 : e.indexOf("%") > 0 ? parseInt(e.replace(/%/, "")) / 100 * ("h" === t ? r[0] : r[1]) : parseInt(e.replace(/px/, "")) : null
            },
            update: function(e, t) {
                var i = this;
                return i.d.data ? (i.d.origHeight = i.getVal(e, "h"), i.d.origWidth = i.getVal(t, "w"), i.d.data.hide(), e && i.d.container.css("height", e), t && i.d.container.css("width", t), i.setContainerDimensions(), i.d.data.show(), i.o.focus && i.focus(), i.unbindEvents(), i.bindEvents(), void 0) : !1
            },
            setContainerDimensions: function() {
                var e = this,
                    t = a.ie6 || a.ie7,
                    i = e.d.origHeight ? e.d.origHeight : a.opera ? e.d.container.height() : e.getVal(t ? e.d.container[0].currentStyle.height : e.d.container.css("height"), "h"),
                    n = e.d.origWidth ? e.d.origWidth : a.opera ? e.d.container.width() : e.getVal(t ? e.d.container[0].currentStyle.width : e.d.container.css("width"), "w"),
                    o = e.d.data.outerHeight(!0),
                    s = e.d.data.outerWidth(!0);
                e.d.origHeight = e.d.origHeight || i, e.d.origWidth = e.d.origWidth || n;
                var c = e.o.maxHeight ? e.getVal(e.o.maxHeight, "h") : null,
                    d = e.o.maxWidth ? e.getVal(e.o.maxWidth, "w") : null,
                    l = c && r[0] > c ? c : r[0],
                    u = d && r[1] > d ? d : r[1],
                    p = e.o.minHeight ? e.getVal(e.o.minHeight, "h") : "auto";
                i = i ? e.o.autoResize && i > l ? l : p > i ? p : i : o ? o > l ? l : e.o.minHeight && "auto" !== p && p > o ? p : o : p;
                var h = e.o.minWidth ? e.getVal(e.o.minWidth, "w") : "auto";
                n = n ? e.o.autoResize && n > u ? u : h > n ? h : n : s ? s > u ? u : e.o.minWidth && "auto" !== h && h > s ? h : s : h, e.d.container.css({
                    height: i,
                    width: n
                }), e.d.wrap.css({
                    overflow: o > i || s > n ? "auto" : "visible"
                }), e.o.autoPosition && e.setPosition()
            },
            setPosition: function() {
                var e, t, i = this,
                    n = r[0] / 2 - i.d.container.outerHeight(!0) / 2,
                    a = r[1] / 2 - i.d.container.outerWidth(!0) / 2,
                    s = "fixed" !== i.d.container.css("position") ? o.scrollTop() : 0;
                i.o.position && "[object Array]" === Object.prototype.toString.call(i.o.position) ? (e = s + (i.o.position[0] || n), t = i.o.position[1] || a) : (e = s + n, t = a), i.d.container.css({
                    left: t,
                    top: e
                })
            },
            watchTab: function(t) {
                var i = this;
                if (e(t.target).parents(".simplemodal-container").length > 0) {
                    if (i.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", i.d.data[0]), !t.shiftKey && t.target === i.inputs[i.inputs.length - 1] || t.shiftKey && t.target === i.inputs[0] || 0 === i.inputs.length) {
                        t.preventDefault();
                        var n = t.shiftKey ? "last" : "first";
                        i.focus(n)
                    }
                } else t.preventDefault(), i.focus()
            },
            open: function() {
                var t = this;
                t.d.iframe && t.d.iframe.show(), e.isFunction(t.o.onOpen) ? t.o.onOpen.apply(t, [t.d]) : (t.d.overlay.show(), t.d.container.show(), t.d.data.show()), t.o.focus && t.focus(), t.bindEvents()
            },
            close: function() {
                var t = this;
                if (!t.d.data) return !1;
                if (t.unbindEvents(), e.isFunction(t.o.onClose) && !t.occb) t.occb = !0, t.o.onClose.apply(t, [t.d]);
                else {
                    if (t.d.placeholder) {
                        var i = e("#simplemodal-placeholder");
                        t.o.persist ? i.replaceWith(t.d.data.removeClass("simplemodal-data").css("display", t.display)) : (t.d.data.hide().remove(), i.replaceWith(t.d.orig))
                    } else t.d.data.hide().remove();
                    t.d.container.hide().remove(), t.d.overlay.hide(), t.d.iframe && t.d.iframe.hide().remove(), t.d.overlay.remove(), t.d = {}
                }
            }
        }
    }),
    function() {
        "use strict";
        Airdroid.UI.Mask = Core.extend(Airdroid.Base, {
            opt: {
                dom: null,
                content: {
                    message: "",
                    css: {},
                    overlayCSS: {}
                }
            },
            _construct: function(e) {
                this.opt = $.extend(!0, {}, this.opt, e), this.opt.dom = this.opt.dom || $("body"), this.initialize && "function" == typeof this.initialize && this.initialize.apply(this, arguments)
            },
            setMask: function(e) {
                var t = this,
                    e = e || t.opt.content,
                    i = t.opt.dom;
                i.is(":visible") && (i.block(e), i.data("ui_mask", t))
            },
            removeMask: function() {
                this.opt.dom.unblock()
            }
        })
    }(window),
    function() {
        "use strict";
        Airdroid.UI.Loading = Core.extend(Airdroid.UI.Mask, {
            defaultOpt: {
                dom: null,
                color: "blue",
                bg: !1
            },
            initialize: function(e) {
                this.opt = $.extend({}, this.defaultOpt, e), this.create()
            },
            create: function() {
                var e, t, i, n, o = this,
                    r = o.opt.dom,
                    a = 0,
                    s = {};
                e = "loading-" + o.opt.color + "-mask", t = ' <div class="' + e + '"></div>', i = {
                    backgroundColor: "none",
                    cursor: "default"
                }, o.opt.bg && (s = {
                    padding: "5px 0",
                    "-moz-border-radius": "5px",
                    "-webkit-border-radius": "5px",
                    "border-radius": "5px",
                    "background-color": "#ffffff"
                }), o.setMask({
                    message: t,
                    css: $.extend({
                        border: "none",
                        width: "79px",
                        height: "10px",
                        backgroundColor: "none",
                        padding: "0"
                    }, s),
                    overlayCSS: i
                }), o.checkSupportCss3() || (n = setInterval(function() {
                    a -= 10, r.find("." + e).css("background-position", "0 " + a + "px")
                }, 50), r.bind("remove", function() {
                    clearInterval(n)
                }))
            },
            checkSupportCss3: function() {
                return !(this.util.browser.ie8 || this.util.browser.ie9)
            }
        })
    }(window);
