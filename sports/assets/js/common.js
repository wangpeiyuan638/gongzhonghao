var common = {
    // ajax数据请求
    Ajax: function (url, mydata, callback) {
        $.ajax({
            type: "post",
            contentType: "application/json",
            /*url: "http://192.168.1.104:8080/sport/front/user/" + url,*/
            url: "/front/user/" + url,
            data: mydata,
            success: function (res) {
                callback(res);
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
};
window.common = common;

/* tipMark */
var $tipMark = function (msg) {
    if ($(".tipmark").length >= 1) {
        $("body .tipmark").html("<a class='tip'>" + msg + "</a>");
        clearTimeout(time);
        time = setTimeout(function () {
            $(".tipmark").remove();
        }, 2000);
    } else {
        $("body").prepend("<div class='tipmark'><a class='tip'>" + msg + "</a></div>");
        time = setTimeout(function () {
            $(".tipmark").remove();
        }, 2000);
    }
};

/* url */
var wxRedirect = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb9abc697a5dfc946&redirect_uri=http%3A%2F%2Fbarry.pw%2Fstatic%2Findex.html&response_type=code&scope=snsapi_userinfo&state=7#wechat_redirect";

var Request = new Object();
function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/* cookie */
function setCookie(name, value, expires) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expires  * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
/* cookie */

/* pub */
var serverIp = "http://barry.pw";
var wxOpenId = sessionStorage.getItem('openId');