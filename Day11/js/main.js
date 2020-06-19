$(document).ready(function() {
    $('#memo').keyup(function() {
        var strLen = $(this).val().length;
        if ((50 - strLen) < 0) {
            alert('50자 까지만 작성이 가능합니다.');
            // 사용자가 입력 한 데이터에서 50글자만 저장
            var strVal = $(this).val().substr(0, 50);
            $(this).val(strVal);
            strLen--;
        }
        $('#memo+div.cnt').text(strLen);
    });
});