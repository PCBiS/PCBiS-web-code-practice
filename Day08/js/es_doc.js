// tag element 먼저 생성.

// let cTag = document.createElement('h1'); // <h1></h1> 태그를 생성해줌. (1번)
// let cText = document.createTextNode('Hello!'); // 텍스트 객체('Hello!')를 만들어 줌. (2번)

// cTag.appendChild(cText); // h1 태그 안으로 hello라는 텍스트 객체를 집어넣음 (3번)

// document.body.appendChild(cTag); // 이렇게 만들어진 태그를 Document 객체에 작성함(4번)
// 이렇게 하면 문서가 완성되기 전에 실행되기 떄문에 해당 태그는 작동하지 않기 때문에.

window.onload = function() { // window.onload 문서 생성완료 시점에서 실행해준다. (5번)
    let cTag = document.createElement('h1'); // <h1></h1> 태그를 생성해줌. (1번)
    let cText = document.createTextNode('JavaScript에서 동적으로 만든 텍스트!'); // 텍스트 객체('Hello!')를 만들어 줌. (2번)
    let img = document.createElement('img');
    img.src = '../image/chicken.jpeg';
    img.width = 480;

    cTag.appendChild(cText); // h1 태그 안으로 hello라는 텍스트 객체를 집어넣음 (3번)


    document.body.appendChild(cTag); // 이렇게 만들어진 태그를 Document 객체에 작성함(4번)
    document.body.appendChild(img);
}