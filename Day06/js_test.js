// 데이터의 출력.
// alert() 함수 : 문자열, 숫자, 함수, 객체, 배열
// console.log() : 문자열, 숫자, 함수, 객체, 배열

// 데이터 : 문자
// 문자 표현 : -> '' or ""

var str1 = 'Hello';
var str2 = 'Number';
var num1 = 10;
var num2 = 8;
var num3 = 3.14;

alert(str1);
document.writeln(str1);
document.writeln(num1);
document.writeln(num2);

// 연산자 : 산술연산자(+, =, *, /)
// 연산 순위는 () 최우선, 이후 기본순서는 동일.

document.writeln((num1 + num2) * num3);

// Boolean (true = 1 / false = 0 )
document.writeln(true);

// 연산자 : 비교연산자 -> >, <, >=, <=, ==, !=
document.writeln(num1 < num2);
// 자바와는 다르게 문자열도 비교는 가능하다.
// 기준은 국어사전 혹은 영어사전 기준 앞쪽에 있으면 값이 작은 것.
document.writeln(str1 < str2);

// 연산자 : 논리연산자 -> !, &&, ||
alert(num1 > 5 && num1 <= 10);

// 변수 : 데이터를 저장하기 위한 목적으로 선언.
// 변수 선언방법 : var 변수명 -> 변수명 = 데이터;
//                 var 변수명 = 데이터;

var name = "king";
alert(name);
// 

let age = 20;
//let age = 33;

// 함수 : function 함수이름(매개변수) {실행코드}
// 익명 함수 : function (매개변수) {실행코드}
// 객체 : {}
// 배열 : []

num1 + 1;
alert(num1);

let stringVar = '문자열';
let numberVar = 273;
let booleanVar = false;
let functionVar = function() {
    alert('this is function');
}
let objectVar = {};
let arrayVar = [1, 2, 3, "텍스트"];


alert(stringVar);
alert(numberVar);
alert(booleanVar);
alert(functionVar);
alert(objectVar);
alert(arrayVar);

functionVar();