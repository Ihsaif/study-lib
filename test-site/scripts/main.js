// let myHeading=document.querySelector('h1');
// myHeading.textContent='Hello World!';

document.querySelector('h1').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
  });  
//点击图片进行切换图片
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    //防止出现myName为null的情况
    if(mySrc==='images/1.jpg'){
        myImage.getAttribute('src','images/2.jpg');
    }else{
        myImage.getAttribute('src','images/1.jpg');
    }
}
//个性化，设置myName对主标题（h1）进行修改并保存myName
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '你好，' + myName+'帅比';
    }
  }
  if(!localStorage.getItem('name')){
    setUserName();
  }  else {
    let storeName=localStorage.getItem('name');
    myHeading.textContent= '你好，' +storeName+'帅比';
  }
  myButton.onclick = function() {
    setUserName();
 }
 