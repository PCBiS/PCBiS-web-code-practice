// //윈도우(창) 이 로드 됨 과 동시에 기능을 수행한다.
// window.onload = function() {
//     alert("Page Loaded!");
// }

// /* 
// 함수 : 기능

//     function funcName(매개변수){
//         처리 할 코드를 기술.....
//         return value 는 선택적.
//     }

// 변수 대입 함수

//     var 변수명 = funcName(매개변수){
//         처리할 코드들...
//         return value 는 선택적.
//     }

// */

// // 숫자 두개를 받아서 연산을 한 후 결과를 반환하는 함수.

// var a, b, result;
// var func2;

// function sumAB1(num1, num2) {
//     result = num1 + num2;
//     return result;
// }

// func2 = function sumAB2(n1, n2) {
//     result = n1 + n2;
//     return result;
// }


// alert(sumAB1(10, 20));
// alert(func2(30, 20));


/* 
가변 매개변수  : arguments 배열을 이용.
*/

// function sumAll() {
//     //arguments 는 가변매개변수에 전달된 값들을 배열로 전달하는 변수이다.
//     var output = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         output += arguments[i];
//         console.log("output = " + output);
//     }
//     return output;
// }

// alert(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 콜백 함수 : 매개변수로 전달 된 함수
// 정의하는 함수 내부에서 실행할 목적으로 구성한다.

// function callTenTimes(callback, run) {
//     for (var i = 0; i < run; i++) {
//         if (typeof(callback) == 'function') {
//             callback();
//         }
//     }
// }
// var i = 1;

// var callback = function() {
//     console.log('핸들러 함수에 의하여 호출됨.' + (i++));
// }

// callTenTimes(callback, 1000);

// /*
//     Javascript 내장 함수
//     alert(), prompt(), confirm()
//     settimeout(callback_func, ms) -> n ms초 뒤에 콜백함수를 실행한다.
//     setInterval() -> ms 간격으로 callback 함수 실행을 반복 수행한다.
//  */

// var intervalID = setInterval(() => {
//     document.body.innerHTML = "<h3>" + new Date() + "</h3>";
// }, 1000);

// /* 
// 위에 짜진 코드는 Ramda 식임. 
// 익명 함수를 짤 때 주로 사용하며 아래 방식이 일반적으로 짜는 방식임.

// var intervalID = setInterval(function(){
//     document.body.innerHTML = "<h3>" + new Date() + "</h3>";
// }, 1000);
// */


// var test = setTimeout(() => {
//     clearInterval(intervalID);
//     alert("중지되었습니다!");
// }, 1000 * 10);

// var jsCode = '';
// jsCode += 'var num=100;'
// jsCode += 'alert(num);'

// eval(jsCode);

// var krw = '1000원';
// var usd = '1.2$';

// console.log('number() : ' + Number(krw) + ", " + Number(usd));
// console.log("parseInt() : " + parseInt(krw) + ", " + parseInt(usd));
// console.log("parseFloat() : " + parseFloat(krw) + ", " + parseFloat(usd));