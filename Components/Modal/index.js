window.addEventListener('DOMContentLoaded', (event) => {
let modal = document.getElementById('mymodal');
let btn = document.getElementById('mybtn');
let closebtn = document.getElementById('closebtn');

btn.onclick = function() {
    modal.classList.remove("hidden");
}
  
closebtn.onclick = function() {
    modal.classList.add("hidden");
}
window.onclick = function(e){
    if(e.target == modal){
   
    }
}
});