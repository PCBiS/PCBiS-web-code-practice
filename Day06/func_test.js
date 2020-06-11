// 함수 : function 함수이름(매개변수) {실행코드}
// 익명 함수 : function (매개변수) {실행코드}
// 객체 : {}
// 배열 : []

let stringVar = '문자열';
let numberVar = 273;
let booleanVar = false;
let functionVar = function() {
    alert('this is function');
}
let objectVar = {};
let arrayVar = [1, 2, 3, "텍스트"];


//alert(stringVar);
//alert(numberVar);
//alert(booleanVar);
//alert(functionVar);
//alert(objectVar);
//alert(arrayVar);

//functionVar();

// 복합 대입 연산자 : +=, -=, *=, /=, %=

// 동적으로 쓸 수 있음.
// let html_str = '';
// html_str += '<div>\n';
// html_str += '<H1>안녕하세요</H1>\n';
// html_str += '자바스크립트.';
// html_str += '</div>\n';
// document.writeln(html_str);
window.onload = function() {
    // prompt() : 사용자의 문자를 입력 받는 함수.
    let msg1 = prompt('이름을 입력하세요!', 'msg1');
    // confirm() : 사용자에게 확인을 받아 true/false 를 반환하는 함수.
    let check = confirm('입력 된 이름을 사용하시겠습니까?');

    let list;
    list = '';
    list += '<ul>'

    if (check) {
        list += '<li>' + msg1 + '</li>';
    } else {
        list += '<li> msg01 </li>';
    }

    list += '<li> msg02 </li>'
    list += '<li> msg03 </li>'
    list += '</ul>'

    document.body.innerHTML += list;
}

// 자료형 검사
// typeof() : 자료형을 확인 할 때 사용.
// alert(typeof(stringVar));