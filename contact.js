var contact= document.querySelector('#contactid');
var fn=document.querySelector('#fn');
var ln=document.querySelector('#ln');
var ea=document.querySelector('#ea');
contact.onclick=function(){
if(fn.value==='' || ln.value===''|| ea.value===''){
alert('Please enter your details');
}
else{
alert('Your information has been sent successfully !');
}
}
