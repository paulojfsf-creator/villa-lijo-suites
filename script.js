const header = document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background="white";
header.style.color="black";

}else{

header.style.background="rgba(0,0,0,0.4)";
header.style.color="white";

}

});