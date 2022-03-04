
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')//src="images/firefox-icon.png"HTML部分のsrcを意味。
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');// ('src', 'PATH_TO_IMAGE')のかたち
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');//prompt関数はalert関数のようにポップアップしユーザー入力を受け付ける関数
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);　//localStorageはAPIでsetItemはnameを作る関数
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
  }
}

if(!localStorage.getItem('name')) {　　//!localStorageでnameのデータが存在するかチェックしている
    setUserName();　　//存在しない場合上のseUserNameが実行されポップアップから名前を手に入れる
  } else {
    let storedName = localStorage.getItem('name');  //以前の訪れているのでlocalStorageからnameの値を取得
　myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}//{}は各Functionごとに閉じて良い

//上記のコードがある時このコードが機能しないのはletで変数を定義しているからか？
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() { /*let myHTML = document.querySelector('html');
myHTML.onclick = function() {}; と同等の意味*/
    alert('痛っ! つつくのはやめて!');
}
//Firefox画像をクリックすると画像を違うのにするScript
