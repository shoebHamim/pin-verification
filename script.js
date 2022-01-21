const generate_button=document.getElementById('generate-button');
var pin='';
generate_button.addEventListener('click',function(){
    pin = Math.floor(1000 + Math.random() * 9000);
   
    const input_pin=document.getElementById('input-pin');
    input_pin.value=pin;
});
const provide_pin=document.getElementById('provide-pin');

const one=document.getElementById(1);
one.addEventListener('click',function(){
    provide_pin.value+=1;
})
const two=document.getElementById(2);
two.addEventListener('click',function(){
    provide_pin.value+=2;
})
const three=document.getElementById(3);
three.addEventListener('click',function(){
    provide_pin.value+=3;
})
const four=document.getElementById(4);
four.addEventListener('click',function(){
    provide_pin.value+=4;
})
const five=document.getElementById(5);
five.addEventListener('click',function(){
    provide_pin.value+=5;
})
const six=document.getElementById(6);
six.addEventListener('click',function(){
    provide_pin.value+=6;
})
const seven=document.getElementById(7);
seven.addEventListener('click',function(){
    provide_pin.value+=7;
})
const eight=document.getElementById(8);
eight.addEventListener('click',function(){
    provide_pin.value+=8;
})
const nine=document.getElementById(9);
nine.addEventListener('click',function(){
    provide_pin.value+=9;
})
const zero=document.getElementById(0);
zero.addEventListener('click',function(){
    provide_pin.value+=0;
})
const clear=document.getElementById('clear');
clear.addEventListener('click',function(){
    provide_pin.value='';
})

document.getElementById('submit-pin').addEventListener('click',function(){
    const given_pin= parseInt(provide_pin.value);
    if(given_pin==pin){
        console.log("Correct");
    }
    else{
        console.log('incorrect');
    }
})

