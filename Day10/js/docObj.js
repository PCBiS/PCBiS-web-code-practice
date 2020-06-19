$(document).ready(function() {
    // 클래스 속성을 추가, 삭제
    // 추가 : addClass(class attr)
    // 추가 : removeClass(class attr)
    $('h1').addClass('title');

    $('#btn01').click(function() {
        $('#img01').attr('src', '../image/chicken.jpeg');
        $('#img01').attr('width', '33%');
    });

    btn03.click(function() {
        $('img:last').attr({
            src: '../image/icon_30.png'
        });
    });

    // 속성 값을 컨트롤 할 때 : .css()
    // jQuery.css(style attr_name) : getter -> 현재 속성값을 반환

    // var colorVal = $('div.memo').first().css('color');
    // console.log(colorVal);

    // css();
    // var colors = ['orange', 'green', 'purple'];


    // jQuery.html()
    // jQuery.text()
    var headerDiv = $('div.header');

    console.log('div.headers html : ' + headerDiv.html());
    console.log('div.headers text : ' + headerDiv.text());

    // jQuery.html(html 문자열)
    headerDiv.html('<h3>변경 된 문자열.</h3>');
    //headerDiv.text('<h3>변경 된 문자열.</h3>');

    var btn08 = $('button.btn.rm:eq(0)');
    var btn09 = $('button.btn.rm').eq(1);
    var btn10 = $('button.btn.insert:first');
    var btn11 = $('button.btn.insert:first');

    // jQuery.empty() : 객체 안의 내용을 지워준다.
    btn08.click(function() {
        headerDiv.empty();
    });
    // jQuery.remove() : 캐스팅 된 객체를 지워준다.
    btn09.click(function() {
        headerDiv.remove();
    });

    btn10.click(function() {
        var txt = '제목 요소가 추가됩니다.';
    });


});