fot(var i = 1; i <= 100; i++) // 1~100 합
{
  console.log(i);
}

for(ver i = 1; i <= 100; i++) //홀수 출력
{
  if(i%2)
  {
    console.log(i);
  }
}

for(var i = 1; i <= 9; i++) //구구단
{
  console.log(i + '단');
  for(var j = 1; j <= 9; j++)
  {
    console.log(i + ' X ' + j + ' = ' + i*j);
  }
  console.log('');
}


var sum = 0; ///입력값의 합

setInterval (function ()
{
  input = parseInt(prompt("숫자를 입력하시오.")); 
  if(input)
    sum = sum + input;
  else
     alert(sum);

},1000);
