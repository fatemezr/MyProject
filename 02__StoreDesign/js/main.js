let slideIndex = 1;

function setSlide (input,index){
    slideIndex = index;
    let slide = document.querySelector(`#${input}`);
    let slides = [...document.querySelector(`.slides`).children];

    slides.forEach((element)=>{
        element.classList.remove("active")
    })
    slide.classList.add("active")
    
    
}

setInterval(()=>{
    slideIndex +=1;
    if (slideIndex==4) {
        slideIndex =1;        
    }
    setSlide(`slide${slideIndex}`,slideIndex)
},5000)