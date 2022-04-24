const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const logo2= document.getElementById("logo2");

const menuIcon = document.getElementById("menu-icon");


window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        nav.style.backgroundColor = "white";
        logo.setAttribute("src", "./images/logo2.png");
        menuIcon.style.fill = "#005000"
    }
    else{
        nav.style.backgroundColor = "#005000";
        logo.setAttribute("src", "./images/logo.png")
        menuIcon.style.fill = "white"

    }
}





const dropDown = document.getElementById("dropdown");
const close = document.getElementById("close");
    

menuIcon.addEventListener("click", function(){
        close.style.display = "block";
        menuIcon.style.display = "none";
        dropDown.style.right = "0";
})

close.addEventListener("click", function(){
    close.style.display = "none";
    menuIcon.style.display = "block";
    dropDown.style.right = "-100%";
})



const faq = document.querySelectorAll(".faq-box");

faq.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle("active");
    })
})