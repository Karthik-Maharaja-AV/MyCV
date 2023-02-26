const loadText1 = document.querySelector('.one')

const loadText2 = document.querySelector('.two')

const loadText3 = document.querySelector('.three')

const loadText4 = document.querySelector('.four')


let load1=0

let load2=0

let load3=0

let load4=0

let int1 = setInterval(blurring1 , 20)

let int2 = setInterval(blurring2 , 20)

let int3 = setInterval(blurring3 , 20)

let int4 = setInterval(blurring4 , 20)
function blurring1(){
    load1++
    if(load1 >94 ){
        clearInterval(int1)
        
    }


    loadText1.innerText = `${load1}%` 
    
}
function blurring2(){
    load2++
    if(load2 >84 ){
        clearInterval(int2)
        
    }


    loadText2.innerText = `${load2}%` 
    
}
function blurring3(){
    load3++
    if(load3 >49 ){
        clearInterval(int3)
        
    }


    loadText3.innerText = `${load3}%` 
    
}
function blurring4(){
    load4++
    if(load4 >89){
        clearInterval(int4)
        
    }


    loadText4.innerText = `${load4}%` 
    
}

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
      keyboard: true,
  });