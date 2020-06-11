// //숫자 1 + 문자 1 = 11 (더하기 연산자는 문자열 우선.)
// alert(1 + '1');

// //문자 7 * 숫자 5 = 35 (더하기 연산자 이외에는 수학연산 우선.)
// alert('7' * 5);

// // Not an Number : 숫자가 아님. 결과는 NaN
// alert(3 * NaN);


// let n = prompt('숫자를 입력해주세요.');
// // alert(typeof(n));
// let m = Number(n);
// // alert(typeof(m));
// alert(m + 10);

// // boolean 자료형 변환 
// // 아래 5개의 경우만이 False 리턴값을 지니며 이게 아니면 모두 True
// alert(Boolean(0));
// alert(Boolean(NaN));
// alert(Boolean(''));
// alert(Boolean(null));
// alert(Boolean(undefined));

// alert(!!0); - 0 : False
// alert(!!NaN); - NaN : False
// alert(!!''); - '' : False
// alert(!!null); null : False
// alert(!!undefined); undefined : False