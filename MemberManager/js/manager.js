$(document).ready(function() {
    // 테스트 코드!! 이 코드 안없애면 계속 저장소 초기화 됨.
    //localStorage.clear();
    // 테스트 코드!! 이 코드 안없애면 계속 저장소 초기화 됨.
    initGetLocalStorageData();
});

function Member(uid, pw, name) {
    this.userID = uid;
    this.userPW = pw;
    this.uName = name;

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
    var userID = $('#userID').val();
    var userPW = $('#userPW').val();
    var uName = $('#uName').val();
    console.log('입력 된 데이터 - uid : ' + userID + ' upw : ' + userPW + 'uName : ' + uName);
    //체크로직, 정규식 검사 필요.
    if (userID == null || userID.length < 1) {
        alert("아이디가 입력이 되지 않았습니다!");
        userID.focus();
        return false;
    }
    if (userPW == null || userPW.length < 1) {
        alert("비밀번호가 입력이 되지 않았습니다!");
        userPW.focus();
        return false;
    }
    if (uName == null || uName.length < 1) {
        alert("이름입력이 되지 않았습니다!");
        uName.focus();
        return false;
    }
    // 정상이면 이 아래로 값을 입력하는 로직을 구현하여 값을 입력.
    members.push(new Member(userID, userPW, uName));
    setMemberValueToJSON(members);
    $('input').val('');
    // 테스트 결과 배열이 내부 저장공간에 들어가는거 자체는 확인 했으나 값을 확인 할 수 없음.
}

/* 
로컬스토리지가 있는지 확인해서 기존 데이터가 있으면 
'memberList' 안에 있는 데이터를 글로벌 변수 members 에 Parse 해서 대입한다.
기존 데이터가 없을경우 입력받은 members(new Member(values));를 json화 해서
jData라는 지역변수에 대입하고, 'memberList'라는 저장소에
json 데이터로 변환 된 자료를 입력한다.
*/
function initLocalStorage() {
    // 지역변수 'data'에 로컬스토리지명 'memberList'를 대입시도.
    var data = localStorage.getItem('memberList');

    if (data != null) {
        // data가 null이 아니면
        members = JSON.parse(data);
    } else {
        // data가 null이면
        var jData = JSON.stringify(members);
        localStorage.setItem('memberList', jData);
    }
}

/*
    시작 할 때
    기존 자료가 존재하지 않는다면 에러임으로 초기화 작업을 수행.
    기존 자료가 존재한다면 기존 로컬 스토리지 'memberList' 에서
    자료를 불러와서 자료가 끝날 때 까지 해당 자료를 출력한다.
*/
function initGetLocalStorageData() {
    var data = localStorage.getItem('memberList'),
        parseData = '',
        uid = ''
    upw = ''
    uName = '';
    if (data == null) {
        // 자료가 없으면 저장소를 초기화 시도한다. - 애시당초 이 상황에 오는경우가 이상한 경우지만.
        initLocalStorage();
    } else {
        // 자료가 있으면 이하 자료 찍는 로직을 돌린다.
        parseData = JSON.parse(data);
        for (var i = 0; i < parseData.length; i++) {
            uid = parseData[i].userID;
            upw = parseData[i].userPW;
            uName = parseData[i].uName;
            $('#dListBody:last').append('<tr>' + '<td>' + i + '</td>' + '<td>' + uid + '</td>' + '<td>' + upw + '</td>' + '<td>' + uName + '</td>' + '<td>' + 'dummy' + '</td>' + '</tr>');
        }

    }
}


/*
로컬스토리지에 member(new Members(values)); 를 받아서
로컬스토리지에 저장한다.
*/
function setMemberValueToJSON(member) {
    var jData = JSON.stringify(member);
    var test = localStorage.getItem('memberList');
    if (test != null) {
        Number(localStorage.setItem('memberList', jData)) + 1;
        location.reload;
    } else {
        console.log('저장 공간이 없습니다. 저장공간을 초기화 작업합니다. 입력한 자료는 저장공간에 반영 되지 않았습니다!');
        initLocalStorage();
    }

}



/*
    공용스토리지에 데이터를 CRUD 하는 예제

    저장 - localStorage.setItem('uName'. 'value');
    검색 - getValue = localStorage.getItem('valueName')
    수정 - localStorage.setItem('beforeValue'. 'afterValue');
    삭제 - localStorage.removeItem('valueName')
    스토리지 초기화 - localStorage.clear();
*/