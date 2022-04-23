var faq = document.querySelectorAll(".faq-box");

faq.forEach((faq) => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle("active");
    })
})

