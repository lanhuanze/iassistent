/**
 * Created by lan on 11/25/14.
 */
var connectVNC = function (result) {
    if (result.count >0) {
        jQuery("#vncFrame").css("display","block");
        //alert("创建成功");
        // 重新加载类型列表
        console.log("result is;" + result);
    } else {
        alert("创建失败：" + result.message);
    }
};

var remoteControlRequest = function() {
    var message = {};
    message.action="poll";
    message.target = "f4deffa7-ca87-4c0d-8447-b8e8b4772750";
    jQuery.ajax({
        type : "PUT", // 访问WebService使用Post方式请求
        contentType : "application/json;charset=UTF-8",
        url : "action/v1/create",
        data : JSON.stringify(message),
        dataType : 'json', // WebService 会返回Json类型
        success :function (result) {
            if (result.count >0) {
                jQuery("#vncFrame").css("display","block");
                //alert("创建成功");
                // 重新加载类型列表
                console.log("result is;" + result);
            } else {
                alert("创建失败：" + result.message);
            }
        }
    });
}