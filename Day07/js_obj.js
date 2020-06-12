var person = {
    name: "손흥민",
    age: 27,
    hello: function() {
        alert("안녕하세요 저는 " + this.name + "입니다.");
        alert("나이는 " + this.age + " 세 입니다.");
        this.bye();
    },
    bye: function() {
        alert("bye!");
    }
};

person.hello();