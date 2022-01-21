const generate_button=document.getElementById('generate-button');
generate_button.addEventListener('click',function(){
    const pin = Math.floor(1000 + Math.random() * 9000);
    // console.log(pin);
    const input_pin=document.getElementById('input-pin');
    input_pin.value=pin;
})
