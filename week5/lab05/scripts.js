"use strict";

myHeight.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

myBg.addEventListener('input', ev => {
    document.documentElement.setProperty('--bg-colour', myBg.value);
});

login.addEventListener('submit', ev => {
    alert(`logged in ${myUser.value}`)
    login.reset();
    ev.preventDefault();
});

myFg.addEventListener('input', ev => {
    document.documentElement.style.setProperty('--fg-colour', myFg.value);
});

const checkConfirmation = (ev) => {
    if(myPassword.value != myConfirmation.value){
        myConfirmation.setCustomValidity("Nah, that's wrong!")
    } else{
        myConfirmation.setCustomValidity('');
    }
};


myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);
