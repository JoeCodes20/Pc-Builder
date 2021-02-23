// service section beginning
const servicePrevBtn = document.getElementById('prev')
const serviceNextBtn = document.getElementById('next')
const slider = document.querySelector('.image-slider')
const images = document.querySelectorAll('.image-slider img')

let counter = 1;
slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'

serviceNextBtn.addEventListener('click', ()=>{
    if(counter >= images.length -1) return;
    slider.style.transition= 'transform .5s ease-in-out'
    counter++
    slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
})
servicePrevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    slider.style.transition= 'transform .5s ease-in-out'
    counter--
    slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
})

slider.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'cloneStart'){
        slider.style.transition = 'none'
        counter = images.length -2
        slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
    }
    if(images[counter].id === 'cloneEnd'){
        slider.style.transition = 'none'
        counter = images.length - counter
        slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
    }
})