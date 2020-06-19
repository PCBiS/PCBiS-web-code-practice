$(document).ready(function() {
    $('form').submit(function() {
        // RegExp 객체를 생성하여 사용한다.
        var idCheck = new RegExp('^[a-z]*$');
        var uid = $('#uid').val();
        if (!idCheck.test(uid)) {
            alert('영문자중 소문자만 입력이 가능합니다.');
            return false;
        }
    });
});