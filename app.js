const slides = document.querySelectorAll(".slide")

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)
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