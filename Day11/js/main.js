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

    for (var i = 1970; i <= 2037; i++) {
        var selected = '';
        if (i == 2000) {
            selected = 'selected';
        }
        $('#year').append('<option ' + selected + ' value="' + i + '">' + i + '</option>');
    }

    for (var i = 1; i <= 12; i++) {
        var selected = '';
        if (i == 6) {
            selected = 'selected';
        }
        $('#month').append('<option ' + selected + ' value="' + i + '">' + i + '</option>');
    }
    // 1달이 31일인경우 1,3,5,7,8,10,12
    // 1달이 30일인경우 4,6,11
    // 1달이 28일인경우 2
    for (var i = 1; i <= 31; i++) {
        var selected = '';
        if (i == 15) {
            selected = 'selected';
        }
        $('#day').append('<option ' + selected + ' value="' + i + '">' + i + '</option>');
    }
});