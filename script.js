
//set varriables
let un = document.querySelector('#un')
let pw1 = document.querySelector('#pw1')
let pw2 = document.querySelector('#pw2')


let unresult = document.querySelector('#unresult')
let pw1result = document.querySelector('#pw1result')
let pw2result = document.querySelector('#pw2result')


//Function when forms submitted
let submitForm = () =>{
    unresult.innerHTML = un.value
    pw1result.innerHTML = pw1.value
    pw2result.innerHTML = pw2.value
}
//check if password is 8 letters
if(un.value.length < 8){
    alert("Please enter atleast 8 letters")
    console.log(un.value)
}else{
    console.log(un.value)
}


//check if passwords are matching


//Event Listener
submitForm.addEventListener('click', (e) => {submitForm();
    e.preventDefault() })
