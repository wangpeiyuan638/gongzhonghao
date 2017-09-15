$(function () {
    var flag = false;
    var url = 'checkUser';
    var truePinCode = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9Xx])$/;
    var mydata = JSON.stringify({
        "openId": wxOpenId,
        "activeId": "1",
        "name": "123"
    });


    common.Ajax(url, mydata, function (res) {
        var result = JSON.parse(res);
        console.log(result);
        if (result.success == true) {
            sessionStorage.setItem("name", result.obj.name);
            sessionStorage.setItem("phone", result.obj.phone);
            window.location.href = "personal.html";
        }
    });


    $('.name').on('blur', function () {
        if($(this).val() == ""){
            flag = false;
            $tipMark('请输入真实姓名');
        }
        if ($(this).val().length > 10) {
            flag = false;
            $tipMark('请输入十个以内的字符');
        } else if ($(this).val() && $(this).val().length < 10) {
            flag = true;
        }
    });
    $('.phone').on('blur', function () {
        if (!(/^1[34578]\d{9}$/.test($(this).val()))) {
            flag = false;
            $tipMark("手机号码有误，请重填");
            return false;
        } else {
            flag = true;
        }
    });


    $('.confirm').on('click', function () {
        if (flag === true) {
            $('.confirm button').css('background', '#e75454');
            // window.location.href = 'personal.html';
            var IdType = $('.IdType').val();
            var ID = $('.ID').val();
            var name = $('.name').val();
            var phone = $('.phone').val();
            console.log(IdType, ID, name, phone);
            var url = 'bingUserInfo';
            var mydataBind = JSON.stringify({
                "IdType": IdType,
                "ID": ID,
                "name": name,
                "phone": phone,
                "openId": wxOpenId
            });
            common.Ajax(url, mydataBind, function (res) {
                var result = JSON.parse(res);
                console.log(result);
                if (result.success == true) {
                    var URL = 'checkUser';
                    var data = JSON.stringify({
                        "openId": wxOpenId
                    });


                    /*console.log(URL, data);
                     common.Ajax(URL, data, function (res) {
                     var result = JSON.parse(res);
                     console.log(result);
                     if (result.success == true) {
                     sessionStorage.setItem("name", result.obj.name);
                     sessionStorage.setItem("phone", result.obj.phone);
                     window.location.href = "personal.html";
                     }
                     });*/
                }
            });
        } else {
            $tipMark('请完善相关信息');
        }
    });


});