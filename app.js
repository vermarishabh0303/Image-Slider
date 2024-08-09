const slides = document.querySelectorAll(".slide")

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
) 
const left = document.querySelector(".left");
const right = document.querySelector(".right");



let counter = 0;
const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            if(counter>slides.length-1){
                counter=0;
            }
            if(counter<0){
                counter=slides.length-1;
            }
            slide.style.transform = `translateX(-${(counter)*100}%)`
        }
    )
}

const goPrev = ()=>{
    counter--;
    slideImage();
}

const goNext = ()=>{
    counter++;
    slideImage();
}


left.addEventListener('click', ()=>{goPrev()});
right.addEventListener('click', ()=>{goNext()});


let slideInterval;

const startSlideshow = ()=>{
    slideInterval = setInterval(()=>{
        goNext();
    }, 2000);
};

startSlideshow();

// clearInterval(slideInterval);