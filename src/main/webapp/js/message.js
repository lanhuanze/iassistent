/**
 * Created by lan on 11/25/14.
 */

var remoteControlRequest = function() {
    var message = {};
    message.action="poll";
    message.deviceId = "f4deffa7-ca87-4c0d-8447-b8e8b4772750";
    $.ajax({
        type : "PUT", // 访问WebService使用Post方式请求
        contentType : "application/json;charset=UTF-8",
        url : "message/v1/publish",
        data : JSON.stringify(message),
        dataType : 'json', // WebService 会返回Json类型

        success : function(result) { // 回调函数，result，返回值
            if (result.count >0) {
                alert("创建成功");
                // 重新加载类型列表
            } else {
                alert("创建失败：" + result.message);
            }
        }
    });
}