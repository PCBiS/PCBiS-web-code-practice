window.onload = function() {
    let eventCount = 0;
    var header1 = document.getElementById('header1');

    header1.onmouseleave = function() {
        this.style.color = 'black';
        this.style.backgroundColor = 'white';
        eventCount++;
        console.log(eventCount);
    }

    header1.onmouseover = function() {
        this.style.color = 'blue';
        this.style.backgroundColor = 'gray';
        eventCount++;
        console.log(eventCount);
    }

    header1.onclick = function() {
        this.style.color = 'red';
        this.style.backgroundColor = 'black';
        alert(this);

        eventCount++;
        console.log(eventCount);
    }

    // 3초 대기후 .onclick 이벤트 강제 실행
    // setTimeout(function() {
    //     header1.onclick();
    // }, 3000);


    function show(d) {
        alert(d);
    }


    // 프론트 유효성 검사요령
    let myForm = document.getElementById('myForm');
    myForm.onsubmit = function() {
        let uid = document.getElementById('uid');
        let pwd = document.getElementById('pwd');

        if (uid.value == null || uid.value.length < 1) {
            alert("아이디 정보를 입력하지 않았습니다!");
            return false;
        }
        if (pwd.value == null || pwd.value.length < 1) {
            alert("비밀번호가 입력 되지 않았습니다!");
            return false;
        }


        return true;
    };


}