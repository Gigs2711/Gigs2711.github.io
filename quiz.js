var bttn=document.querySelector('button');
bttn.onclick = function(){
var score=0;
var myquestion1= prompt('Name 2 countries that are not part of The EU');
if((myquestion1.toLowerCase() === 'united kingdom and iceland') || (myquestion1.toLowerCase()==='uk and iceland') || (myquestion1.toLowerCase()=== 'u.k and iceland')){
alert('You are correct');
score=score+1;
}
else{
alert('You are incorrect');
}
var myquestion2= prompt('What is the financial capital of the world ');
if(myquestion2.toLowerCase()=== 'london'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion3= prompt('What is the wettest place on the earth');
if(myquestion3.toLowerCase()=== 'india'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion4= prompt('What is the richest country in the world ');
if(myquestion4.toLowerCase()=== 'qatar'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion5= prompt('What is the capital of China');
if(myquestion5.toLowerCase()=== 'beijing'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion6= prompt('What is the capital of Vanuatu');
if(myquestion6.toLowerCase()=== 'port vila'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion7= prompt('What part of asia is India part of ');
if(myquestion7.toLowerCase()=== 'south asia ' || myquestion7.toLowerCase()==='south' ){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion8= prompt('what is the tallest animal');
if(myquestion8.toLowerCase()=== 'giraffe'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion9= prompt('Who is the most successful captain of the Indian Cricket team');
if(myquestion9.toLowerCase()=== 'm.s dhoni'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
var myquestion10= prompt('What towers were bombed on 9/11 in america');
if(myquestion10.toLowerCase()=== 'twin towers'){
alert('You are correct');
score=score+1;
}
else{
alert('you are incorrect');
}
alert('your score is'+' ' + score);
}
