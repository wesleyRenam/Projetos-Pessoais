const btnMobile = document.getElementById('btn-mobile');
const loginMobile = document.querySelector('.div-menu-mobile')
btnMobile.addEventListener('click', function(event){
    loginMobile.classList.toggle('div-menu-mobile');
})

let textarea = document.getElementById("comment");
let cont = document.getElementById("cont");
cont.innerText = 500;
textarea.addEventListener('input', function(){
    cont.innerText = (500 - textarea.value.length);
})