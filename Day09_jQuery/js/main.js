// $() -> window
// $ -> jQuery를 의미.
// $() : 객체를 생성.

/* 
$(document).ready(function() {} 
 == window.onload = function(){} 과 동일한 기능.
*/

$(document).ready(function() {
    // alert("hello, jQuery!");
    // $('h1').click(function() {
    //     alert('클릭했습니다.');
    // });
    //$('input[type=text]').val('userid');
    // $('input:text').val('userid');
    // $('input[type=password]').val('pre1234'); // onload전에 문자열이 있을리 없으니 더미값을 임의로 셋팅
    // $('input:password').val('pre1234');

    // var id = $('input[type=text]').val();
    // var pw = $('input[type=password]').val(); // 값을 가져와서 각 변수에 대입.
    // alert(id + " / " + pw); // 가져온 값을 출력.

    setTimeout(function() {
        //     var salVal = $('select.loc > option:selected');
        //     alert(salVal.val());
        $('h2').removeClass('Check');
    }, 5000);

    $('tr:odd').css('background-color', 'gray');
    $('tr:even').css('background-color', 'aquamarine');
    $('tr:first').css('background-color', 'blue');
    $('tr:last').css('backgrosaasAxAXZzund-color', 'orange');

    var urlList = [
        { name: 'Daum', url: 'https://www.daum.net' },
        { name: 'Naver', url: 'https://www.naver.com' },
        { name: 'Google', url: 'https://www.google.com' }
    ];

    var html = '';

    $.each(urlList, function(idx, item) {
        html += "<h1><a href=" + item.url + ">" + item.name + "</a></h1>"
    });

    $('#list').html(html);

    $('h2').each(function(idx, item) {
        $(item).html($(item).html() + " : " + idx);
    });


    $('h2').addClass('Check');

});
/* 
위와 아래는 같은 코드임.
$(function() {
    alert("hello, jQuery Short!")
});
*/