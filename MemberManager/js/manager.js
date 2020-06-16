function Member(uid, pw, name) {
    let userID = uid;
    let userPW = pw;
    let uName = name;

    this.getUserID = function() {
        return userID;
    }
    this.getUserPW = function() {
        return userPW;
    }
    this.getUname = function() {
        return uName;
    }

    this.setUserID = function(uid) {
        this.userID = uid;
    }
    this.setUserPW = function(pw) {
        this.userPW = pw;
    }
    this.setUname = function(name) {
        this.uName = name;
    }

}


var members = [];

function getData() {
    var userID = document.getElementById('userID');
    var userPW = document.getElementById('userPW');
    var uName = document.getElementById('uName');
    //체크로직, 정규식 검사 필요.
    if (userID.value == null || userID.value.length < 1) {
        alert("아이디가 입력이 되지 않았습니다!");
        userID.focus();
        return false;
    }
    if (userPW.value == null || userPW.value.length < 1) {
        alert("비밀번호가 입력이 되지 않았습니다!");
        userPW.focus();
        return false;
    }
    if (uName.value == null || uName.value.length < 1) {
        alert("이름입력이 되지 않았습니다!");
        uName.focus();
        return false;
    }
    //정상이면 이 아래로 값을 입력하는 로직을 구현하여 값을 입력.
    //alert(this.userID.value + ' + ' + this.userPW.value + ' + ' + this.uName.value);
    members.push(new Member(userID, userPW, uName));
    //alert(members[0].getUname().value);

    document.getElementById('inputMemberValue').reset();
}

function setMemberValueToJSON(member) {

}

/* 
로컬스토리지가 있는지 확인해서 기존 데이터가 있으면 
'memberList' 안에 있는 데이터를 글로벌 변수 members 에 Parse 해서 대입한다.
기존 데이터가 없을경우 입력받은 members(new Member(values));를 json화 해서
jData라는 지역변수에 대입하고, 'memberList'라는 저장소에
json 데이터로 변환 된 자료를 입력한다.
*/
function initLocalStorage() {
    var data = localStorage.getItem('memberList');
    if (data != null) {
        members = JSON.parse(data);
    } else {
        var jData = JSON.stringify(members);
        localStorage.setItem('memberList', jData);
    }
}

/*
    
*/
function saveLocalStorage() {
    var jData = JSON.stringify(members);
    localStorage.setItem('memberList', jData);
}



/*
    공용스토리지에 데이터를 CRUD 하는 예제

    저장 - localStorage.setItem('uName'. 'value');
    검색 - getValue = localStorage.getItem('valueName')
    수정 - localStorage.setItem('beforeValue'. 'afterValue');
    삭제 - localStorage.removeItem('valueName')
    스토리지 초기화 - localStorage.clear();
*/