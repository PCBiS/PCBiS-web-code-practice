$(document).ready(function() {
    initGetLocalStorageData();
});

function Member(uid, pw, name) {
    this.userID = uid;
    this.userPW = pw;
    this.uName = name;

    getUserID = function() {
        return this.userID;
    }
    getUserPW = function() {
        return this.userPW;
    }
    getUname = function() {
        return this.uName;
    }

    setUserID = function(uid) {
        this.userID = uid;
    }
    setUserPW = function(pw) {
        this.userPW = pw;
    }
    setUname = function(name) {
        this.uName = name;
    }

}

var members = [];

function getData() {
    var storage = localStorage.getItem('memberList');
    var userID = $('#userID').val();
    var userPW = $('#userPW').val();
    var uName = $('#uName').val();
    alert('입력 된 데이터 - uid : ' + userID + ' upw : ' + userPW + ' uName : ' + uName);
    alert('데이터 타입 - uid : ' + typeof(userID) + ' upw : ' + typeof(userPW) + ' uName : ' + typeof(uName));
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
    console.log(members);
    $('input').val('');
    if (storage != null) {
        localStorage.setItem('memberList', JSON.stringify(members));
        console.log(localStorage.getItem('memberList'));
        location.reload();
    } else {
        console.log('저장 공간("memberList")이 없습니다. 저장공간을 초기화 작업합니다. 입력한 자료는 저장공간에 반영 되지 않았습니다!');
        initLocalStorage();
    }
}

function memberMOD(i) {
    // 해당 idx에 해당하는 값을 가져와서
    var modifyBeforeID = $('#dListBody > tr:eq(' + i + ') > td:eq(1)').text();
    var modifyBeforePW = $('#dListBody > tr:eq(' + i + ') > td:eq(2)').text();
    var modifyBeforeName = $('#dListBody > tr:eq(' + i + ') > td:eq(3)').text();
    // 기존 저장폼에 덮어씌우고
    $('#userID').val(modifyBeforeID);
    $('#userPW').val(modifyBeforePW);
    $('#uName').val(modifyBeforeName);
    // 저장하기 버튼을 수정하기로 바꾸고.
    $('#sendBtn').html('수정하기');
    // 수정하기로 이름이 바뀐 버튼의 onclick 기능을 수정기능(index)으로 변경함.
    $('#sendBtn').attr('onclick', 'setMemberMOD(' + i + ')');
}
// 기존값을 받아야 수정할 원본값을 찾을 수 있으니 전달해준다.
function setMemberMOD(i) {
    // 원본값에서 수정이 되었던 안되었던 관계 없이 idx는 memberMOD에서
    // id, pw, name은 웹페이지에서 직접 받아온다.(수정이 되었을 수도, 안되었을 수도 있으니까.) 
    var afterID = $('#userID').val();
    var afterPW = $('#userPW').val();
    var afterName = $('#uName').val();

    // 받아 온 값을 members[i]에 대입한뒤.
    members[i].id = afterID;
    members[i].pw = afterPW;
    members[i].uName = afterName;

    // 저장을 한다.
    localStorage.setItem('memberList', JSON.stringify(members));
    // 수정을 위해 고쳤던 '#sendBtn' 버튼의 기능을 원상복구 하고
    $('#sendBtn').html('저장하기');
    $('#sendBtn').attr('onclick', 'getData()');
    // page를 리로드 해서 다시 테이블을 draw한다.
    //location.reload();
}


function memberDEL(i) {
    var isDelete = confirm(i + ' 번 자료를 삭제하시겠습니까?');
    if (isDelete != true) {
        location.reload();
    } else {
        alert(i + '번 자료를 삭제하였습니다!');
        members.splice(i, 1);
        localStorage.setItem('memberList', JSON.stringify(members));
        location.reload();
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
        uid = '',
        upw = '',
        uName = '';
    if (data == null) {
        // 자료가 없으면 저장소를 초기화 시도한다. - 애시당초 이 상황에 오는경우가 이상한 경우지만.
        initLocalStorage();
    } else {
        // 자료가 있으면 이하 자료 찍는 로직을 돌린다.
        members = JSON.parse(data);
        for (var i = 0; i < members.length; i++) {
            uid = members[i].userID;
            upw = members[i].userPW;
            uName = members[i].uName;
            $('#dListBody:last').append('<tr>' + '<td>' + i + '</td>' + '<td>' + uid + '</td>' + '<td>' + upw + '</td>' + '<td>' + uName + '</td>' + '<td>' + '<a href="javascript:memberMOD(' + i + ')">수정</a> / <a href="javascript:memberDEL(' + i + ')">삭제</a>' + '</td > ' + ' < /tr>');
        }

    }
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
    공용스토리지에 데이터를 CRUD 하는 예제

    저장 - localStorage.setItem('uName'. 'value');
    검색 - getValue = localStorage.getItem('valueName')
    수정 - localStorage.setItem('beforeValue'. 'afterValue');
    삭제 - localStorage.removeItem('valueName')
    스토리지 초기화 - localStorage.clear();
*/