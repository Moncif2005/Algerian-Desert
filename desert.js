const humburugr = document.querySelector(".humburugr");
humburugr.addEventListener("click",()=>{
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active")
})


const script = document.createElement("script");
script.src = "scrollreveal.min.js";
script.onload = function () {
    
    const sr = ScrollReveal({
        origin: 'left',
        distance: '70px',
        duration: 2400,
        delay: 400,
        reset: true,
    });

    
  
    sr.reveal('.title',{delay:400});
    sr.reveal('.parag',{delay:430});
    sr.reveal('.about-btn', {delay:450})


    sr.reveal('.information-text', {delay:460})
    sr.reveal('.text-1', {delay:500,interval:300})
    sr.reveal('.text-2', {delay:530,interval:300})
    sr.reveal('.image-1', {delay:600,origin: 'right',interval:300})
    
    sr.reveal('.text-3', {delay:630,interval:300})
    sr.reveal('.text-4', {delay:700,interval:300})
    sr.reveal('.image-2', {delay:740,origin: 'right',interval:300})

    sr.reveal('.text-5', {delay:630,interval:300,origin: 'top'})
    sr.reveal('.text-6', {delay:700,interval:300,origin: 'top'})
    sr.reveal('.image-3', {delay:740,origin: 'bottom',interval:300})
    sr.reveal('.btn-1', {delay:750})


    sr.reveal('.text-img-1', {delay:760,interval:300,origin: 'left'})
    sr.reveal('.text-img-2', {delay:760,interval:300,origin: 'left'})
    sr.reveal('.text-img-btn', {delay:760,interval:300,origin: 'left'})
    sr.reveal('.mainPhoto', {delay:780,interval:300,origin: 'left'})
    sr.reveal('.imgCarousel', {delay:790,interval:300,origin: 'right'})

    sr.reveal('.about-text-1', {delay:760,interval:300,origin: 'top'})
    sr.reveal('.about-text-2', {delay:760,interval:300,origin: 'left'})
    sr.reveal('.about-text-3', {delay:760,interval:300,origin: 'left'})
    sr.reveal('.social', {delay:780,interval:300,origin: 'left'})


};


document.head.appendChild(script);


let images = Array.from(document.getElementsByClassName("imgCarousel"))

let mainPhoto = document.getElementById("mainPhoto")
let sliderIndex = 0;

function updateimage(event){
    let image = event.target 
    mainPhoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener("click",updateimage)
});