let a = 10;
let b = 20;
a = 20;


function sumNum() {
    alert(a + b);
}

// let b = 20;

sumNum(); // NaN
alert("not sumNum : " + (a + b)); // a+b=40