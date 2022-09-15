let textarea = document.getElementById("comment");
let cont = document.getElementById("cont");
cont.innerText = 500;
textarea.addEventListener('input', function(){
    cont.innerText = (500 - textarea.value.length);
})