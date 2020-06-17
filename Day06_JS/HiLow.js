    var rndNum = 0;
    var getNum = 0;
    var gameCnt = 10;
    var gameFlag = true;

    window.onload = function() {
        rndNum = parseInt((Math.random() * 99) + 1);
    };

    function inNum() {
        getNum = document.getElementById("numBox").value;

        if (gameCnt > 0 && gameFlag == true {) if (rndNum == getNum) {
                alert("게임 끝!" + gameCnt + " 회를 남기고 맞췄습니다!");
                window.location.reload(true);
            } else if (rndNum < getNum) {
                gameCnt--;
                alert("고른 수는 무작위의 수 보다 높습니다. 남은 기회 : " + gameCnt);
            } else if (rndNum > getNum) {
                gameCnt--;
                alert("고른 수는 무작위의 수 보다 낮습니다. 남은 기회 : " + gameCnt);
            }
        }
        else {
            alert("게임 오버!");
            gameFlag = confirm("계속 하시겠습니까?");
            if (gameFlag != true) {
                alert("게임을 종료합니다.");
                window.location.reload(true);
            } else {
                gameFlag = true;
                gameCnt = 5;
                alert("계속 게임이 가능합니다. 남은 게임 횟수 : " + gameCnt);
            }
        }
    }