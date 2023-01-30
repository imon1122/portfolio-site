// ======PRELOADER======
const preloader = document.querySelector(".preloader")
window.onload = ()=>{
    preloader.style.display = "none";
}
// ===========STICKY MENU============
const nav = document.querySelector("nav");
const links = document.querySelectorAll("#custom-links");
const sections = document.querySelectorAll("section");
window.onscroll = ()=>{
    if(window.pageYOffset > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
 var scrollposition = document.documentElement.scrollTop;

}


// =====================AUTO TYPE TEXT===============
const texts = document.querySelectorAll(".image-content span");
var i = 0;
function autotype(){
    for(text of texts){
        text.style.display = "none";
    }
    i++;
    if(i>texts.length){
        i = 1;
    }
    texts[i-1].style.display = "block";
}
setInterval(autotype, 3000);



// ===============AUTO ACTIVE MENU TAB====================
