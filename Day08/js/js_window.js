  //window.open('http:www.naver.com', 'new');
  //window.open(
  // 'http:www.daum.net', 
  // 'new2', 
  // 'width=300, height=300, left=10, top=10');

  //var child = window.open('','','width=300, height=200');

  //child.document.write('<h1>안녕하세요. from parent</h1>');

  var html = '';
  html += '<img src="https://upload.wikimedia.org/wikipedia/ko/thumb/5/56/%EB%AF%B8%EB%8B%88%EC%96%B8%EC%A6%88.jpg/220px-%EB%AF%B8%EB%8B%88%EC%96%B8%EC%A6%88.jpg">';
  html += '<br>';
  html += '<input type="button" value="닫기" onclick="window.close();">';

  //child.document.write(html);

  alert(location.href);

  console.log(location.href);
  console.log(location);


  // setTimeout(function(){
  //     location.href='https:www.naver.com';
  // },3000);

  window.onload = function() {

      var html_val = document.getElementById('test').innerText;

      alert(html_val);

  };


  function change() {
      let h1 = document.getElementById('test');
      h1.innerText = '반갑습니다.'
  }