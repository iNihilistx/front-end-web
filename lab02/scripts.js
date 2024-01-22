function greetMe(){
    console.log("HI")
    alert("Hi");
}

var buttonTrigger = document.getElementById('buttonTrigger');

buttonTrigger.addEventListener('click', greetMe)