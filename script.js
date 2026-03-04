const header = document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});



const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {

if(nav.style.display === "block"){

nav.style.display="none";

}else{

nav.style.display="block";

}

};



const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

img.onclick = () => {

lightbox.style.display="flex";
lightboxImg.src = img.src;

};

});

lightbox.onclick = () => {

lightbox.style.display="none";

};