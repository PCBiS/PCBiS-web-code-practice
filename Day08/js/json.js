let book = {
    name: "java의 정석",
    price: 10000,
    publisher: "orange media"
}

let jData = JSON.stringify(book);
let nData = '{"memberid": "cool", "membername": "COOL", "age": 27, "uselang": ["java", "python", "javascript"]}';
let newObj = JSON.parse(nData);
let parseObj = JSON.stringify(newObj);


console.log("jData's Type" + typeof(jData));
console.log("newObj's Type" + typeof(newObj));

window.onload = function() {
    document.getElementById('json').innerHTML = jData;
    document.getElementById('json2').innerHTML = parseObj;
}