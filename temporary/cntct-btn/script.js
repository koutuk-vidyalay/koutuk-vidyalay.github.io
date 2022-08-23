let hSa = document.querySelector('.hide-show-a');
let hSb = document.querySelector('.hide-show-b');
let hSc = document.querySelector('.hide-show-c');
let hSd = document.querySelector('.hide-show-d');
let hSe = document.querySelector('.hide-show-e');


const key = document.querySelector('.key').onclick =function key(){
hSa.classList.toggle("block");
hSb.classList.toggle("block");
hSc.classList.toggle("block");
hSd.classList.toggle("block");
hSe.classList.toggle("block");
}
let body = document.querySelector("body");
document.onclick = body.style.background = "whitesmoke";
