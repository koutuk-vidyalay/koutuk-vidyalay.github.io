document.querySelector('#info').onclick = function(){confirm(
"How to download BOOKS..!\n\n 1. Go to new page. \n 2. Click downlad. \n 3. Click save file. \n 4. At last extract zip file."

)}


const details = document.querySelectorAll(".bookDetails");
details.forEach((targetDetail) => { targetDetail.addEventListener("click", () => { 
 details.forEach((detail) => { if (detail !== targetDetail) { detail.removeAttribute("open"); } }); }); });


let notice = "hii";
document.querySelector("name").innerHTML = notice;
