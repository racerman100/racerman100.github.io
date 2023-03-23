const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button =>{
button.addEventListener("click", () =>{
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newindex = [...slides.children].indexOf(activeSlide)+offset

    if(newindex < 0) newindex = slides.children.length - 1
    if(newindex >= slides.children.length) newindex = 0

    slides.children[newindex].dataset.active = true
    delete activeSlide.dataset.active
})
})