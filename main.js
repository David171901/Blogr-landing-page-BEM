document.querySelectorAll(".navbar__left .navbar__item").forEach((el)=>{
    el.addEventListener("click",()=>{
        el.querySelector('.navbar__sublist').classList.toggle("navbar__sublist--visible")
    })
})