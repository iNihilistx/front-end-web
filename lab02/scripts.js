function greetMe(){
    console.log("HI")
    alert("Hi");
}

let buttonTrigger = document.getElementById('buttonTrigger');

buttonTrigger.addEventListener('click', greetMe)