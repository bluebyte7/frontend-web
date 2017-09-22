//var log = document.getElementsById('log');
//console.log(log)
//log.innerHTML = '안녕';

//var log = document.getElementsById('log');

//console.log(log)

//var a = document.querySelectorAll('#log a');
//
//console.log(a.length, a[0], a[1]);

//var div = document.createElement('div');
//div.style.border = "1px solid red";
//div.innerHTML = "Hello world!!"
//log.document.appendChild(div);
//
//
// log.innerHTML = log.innerHTML + '<div style="color:red">hello</div>';
// log.innerHTML += '<div style="color:red">hello</div>';

//window.addEventListener('load', function(){
//    alert("load");
//});

//window.load=function(){
//    alert("load");
//};

// window.addEventListener('load', function(){
//     console.log('안녕??');
// });

// var log = document.getElementById('log');
// function printLog(event)
// {
//   console.log('log!!');
//   // debugger;
// }
// // log.addEventListener('mouseover', printLog)


//log.addEventListener('click',printlog)


var divs = document.querySelectorAll('#wrap div');
//console.log(div);

function.changeBg(event){
  console.log('changeBg');
  console.log(event.currentTarget);

  //divs[0].style.backgroundColor = 'blue';
  //console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'blue';
}
for(var i = 0; i < divs.lenght; i++){
  divs[i].addEventListener('clivk',changeBg);
}
