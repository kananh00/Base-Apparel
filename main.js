var arrBtn = document.getElementById('arrow-button');
var email = document.getElementById('email');
var errorMsg = document.getElementById('email-error');
var errorSign = document.getElementById('error-icon')
var isValid;
email.addEventListener('input', function(e){
    var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    var currentValue = e.target.value;
    isValid = pattern.test(currentValue)
})
arrBtn.addEventListener('click', function(){
    if(isValid){
        errorMsg.style.display = 'none'
        errorSign.style.display = 'none'
    }
    if(!isValid){
        errorMsg.style.display = 'block'
        errorSign.style.display = 'flex'
        email.style.border = '2px solid red'
    }
})