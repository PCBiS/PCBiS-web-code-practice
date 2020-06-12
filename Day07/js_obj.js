// var person = {
//     name: "손흥민",
//     age: 27,
//     hello: function() {
//         alert("안녕하세요 저는 " + this.name + "입니다.");
//         alert("나이는 " + this.age + " 세 입니다.");
//         this.bye();
//     },
//     bye: function() {
//         alert("bye!");
//     }
// };

// person.hello();

/*-----------------------------------------------------*/

var students = [];

students.push({ name: 'A1', kor: 90, math: 10, eng: 90 });
students.push({ name: 'A2', kor: 69, math: 80, eng: 80 });
students.push({ name: 'A3', kor: 92, math: 70, eng: 70 });
students.push({ name: 'A4', kor: 77, math: 60, eng: 60 });
students.push({ name: 'A5', kor: 91, math: 70, eng: 80 });

// 각각의 요소 객체에 동적으로 합을 구하는 메서드를 추가
for (var i = 0; i < students.length; i++) {
    students[i].getSum = function() {
        return this.kor + this.math + this.eng;
    };
}

// 각각의 요소 객체에 동적으로 평균점수를 구하는 메서드를 추가
for (var i = 0; i < students.length; i++) {
    students[i].getAvg = function() {
        return this.getSum() / 3;
    };
}

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}



/*
    생성자 함수 : new 키워드를 이용하여 객체를 생성.
    생성자 함수의 이름은 대문자로 시작.
*/

function Student(uname, kor_score, eng_score, math_score) {
    this.name = uname;
    this.kor = kor_score;
    this.eng = eng_score;
    this.math = math_score;
    /*
    this.getSum = function() {
        return this.kor + this.eng + this.math;
    }

    this.getAvg = function() {
        return this.getSum() / 3;
    }
    */
}

Student.prototype.getSum = function() {
    return this.kor + this.eng + this.math;
};

Student.prototype.getAvg = function() {
    return this.getSum() / 3;
}

var stu = [];
stu.push(new Student("A01", 80, 74, 77));
stu.push(new Student("A02", 77, 89, 87));
stu.push(new Student("A03", 88, 94, 97));
stu.push(new Student("A04", 77, 64, 67));
stu.push(new Student("A05", 81, 74, 79));

var stuList = '';

for (var i = 0; i < stu.length; i++) {
    stuList += '<h4> ';
    stuList += '이름:' + stu[i].name;
    stuList += ', 총점:' + stu[i].getSum();
    stuList += ', 평균:' + stu[i].getAvg();
    stuList += '</h4>';
};

document.writeln(stuList);


stu.sort(function(left, right) {
    return right.getSum() - left.getSum();
});