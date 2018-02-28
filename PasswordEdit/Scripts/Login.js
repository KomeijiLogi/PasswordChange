function clickEvent() {
    
    $("#loadingAnimate").show();
    $("#confirmPw").attr('disabled', 'disabled');
    mui.toast('已点击密码修改，请稍后');
     
    //$("#confirmPw").attr('disabled', 'disabled');           //调整提交按钮为禁用 
    $.ajax({
        method: 'post',
        url: '/Home/Index',
        data: $('form').serialize()

    }).done(function (data) {
        $("#loadingAnimate").hide();
        mui.alert(data);
        $('input[type="password"]').val('');
        $("#confirmPw").removeAttr('disabled');
    }).fail(function (e) {
        $("#confirmPw").removeAttr('disabled');
    });
   
}



mui.init();

mui.ready(function () {
    //clickEvent();

});

    


