var items = [];

function product(name, price, amount) {
    this.productName = name;
    this.productPrice = price;
    this.productAmount = amount;
}

$(document).ready(function() {
    initGetSessionStorageData();

    $('.coffeeList').css('display', 'contents');
    $('.drinkList').css('display', 'none');
    $('.dessertList').css('display', 'none');
    $('.etcList').css('display', 'none');

    $('#coffeeList').click(function() {
        $('.coffeeList').css('display', 'contents');
        $('.drinkList').css('display', 'none');
        $('.dessertList').css('display', 'none');
        $('.etcList').css('display', 'none');
    });
    $('#drinkList').click(function() {
        $('.coffeeList').css('display', 'none');
        $('.drinkList').css('display', 'contents');
        $('.dessertList').css('display', 'none');
        $('.etcList').css('display', 'none');
    });
    $('#dessertList').click(function() {
        $('.coffeeList').css('display', 'none');
        $('.drinkList').css('display', 'none');
        $('.dessertList').css('display', 'contents');
        $('.etcList').css('display', 'none');
    });
    $('#etcList').click(function() {
        $('.coffeeList').css('display', 'none');
        $('.drinkList').css('display', 'none');
        $('.dessertList').css('display', 'none');
        $('.etcList').css('display', 'contents');
    });

    $('.items').click(function() {
        var name = $('p.name', this).text();
        var price = $('p.price', this).text();
        items.push(new product(name, price, 1));
        sessionStorage.setItem('basket', JSON.stringify(items));
        location.reload();
    });
});

function initSessionStorage() {
    var data = sessionStorage.getItem('basket');

    if (data != null) {
        items = JSON.parse(data);
    } else {
        var jsonData = JSON.stringify(items);
        sessionStorage.setItem('basket', jsonData);
    }
}

function initGetSessionStorageData() {
    var data = sessionStorage.getItem('basket'),
        name = '',
        price = '',
        amount = '';
    console.log(data);
    if (data == null) {
        // 자료가 없으면 저장소를 초기화 시도한다. - 애시당초 이 상황에 오는경우가 이상한 경우지만.
        initSessionStorage();
    } else {
        // 자료가 있으면 이하 자료 찍는 로직을 돌린다.
        items = JSON.parse(data);
        for (var i = 0; i < items.length; i++) {
            name = items[i].userID;
            price = items[i].userPW;
            amount = items[i].uName;
            console.log(name + ' ' + price + ' ' + amount);
            //$('#dListBody:last').append();
        }

    }
}



function refresh() {
    location.reload();
}