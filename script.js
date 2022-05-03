const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const logo2= document.getElementById("logo2");
const links = document.querySelectorAll(".link");

const menuIcon = document.getElementById("menu-icon");


window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        nav.style.backgroundColor = "white";
        nav.style.filter = "drop-shadow(0px 3px 3px rgba(83, 83, 83, 0.15))";
        logo.setAttribute("src", "./images/logo2.png");
        menuIcon.style.fill = "#005000";
    }
    else{
        nav.style.backgroundColor = "#005000";
        nav.style.filter = "none";
        logo.setAttribute("src", "./images/logo.png");
        menuIcon.style.fill = "white";
    }
}

const x = window.matchMedia("(min-width: 1100px)");

if(x.matches){
    window.onscroll = function(){
        var textColor = window.scrollY;
        if(textColor >= 50){
            nav.style.backgroundColor = "white";
            nav.style.filter = "drop-shadow(0px 3px 3px rgba(83, 83, 83, 0.15))";
            logo.setAttribute("src", "./images/logo2.png");
            for(var i = 0; i < links.length; i++){
                links[i].style.color = "#005000";
            }
        }
        else{
            nav.style.backgroundColor = "#005000";
            nav.style.filter = "none";
            logo.setAttribute("src", "./images/logo.png");
            for(var i = 0; i < links.length; i++){
                links[i].style.color = "white";
            }
        }
    }
}



const dropDown = document.getElementById("dropdown");
const close = document.getElementById("close");
    

menuIcon.addEventListener("click", function(){
    close.style.display = "block";
    menuIcon.style.display = "none";
    dropDown.style.display = "block";
    dropDown.style.right = "0";
})

close.addEventListener("click", function(){
    close.style.display = "none";
    menuIcon.style.display = "block";
    dropDown.style.display = "none";
    dropDown.style.right = "-100%";
})



const faq = document.querySelectorAll(".faq-box");

faq.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle("active");
    })
})