var items = [];

function product(name, price, amount) {
    this.productName = name;
    this.productPrice = price;
    this.productAmount = amount;
}

$(document).ready(function() {

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
        alert(name);
    });
});

function refresh() {
    location.reload();
}