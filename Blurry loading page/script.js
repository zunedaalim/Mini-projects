const loadText=document.querySelector('.loading-text')
const video=document.querySelector('.video-container video') 

let load=0;
let int = setInterval(blurring,25)
function blurring(){
    load++;
    
    if(load>99){
        clearInterval(int)
    }
    loadText.innerText=`${load}%`
    loadText.style.opacity = (100-load)/100
    video.style.filter =`blur(${30-(load/3.333)}px)`
}