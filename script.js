// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});

// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }
    else{
        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
    }

});

// ===============================
// Search
// ===============================

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(value))
card.style.display="block";

else
card.style.display="none";

});

});

// ===============================
// Category Filter
// ===============================

const buttons=document.querySelectorAll(".filter-section button");

const cards=document.querySelectorAll(".card");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

let filter=button.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter))
card.style.display="block";

else
card.style.display="none";

}

});

});

});

// ===============================
// Lightbox
// ===============================

const galleryImages=document.querySelectorAll(".card img");

const lightbox=document.querySelector(".lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const caption=document.querySelector(".caption");

const close=document.querySelector(".close");

const prev=document.querySelector(".prev");

const next=document.querySelector(".next");

let currentIndex=0;

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){

lightboxImg.src=galleryImages[currentIndex].src;

caption.innerHTML=

galleryImages[currentIndex].parentElement.querySelector("h3").innerText;

}

close.onclick=()=>{

lightbox.style.display="none";

}

next.onclick=()=>{

currentIndex++;

if(currentIndex>=galleryImages.length)
currentIndex=0;

showImage();

}

prev.onclick=()=>{

currentIndex--;

if(currentIndex<0)
currentIndex=galleryImages.length-1;

showImage();

}

// ===============================
// Keyboard Support
// ===============================

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight"){

next.click();

}

if(e.key==="ArrowLeft"){

prev.click();

}

if(e.key==="Escape"){

close.click();

}

}

});

// ===============================
// Close when clicking outside
// ===============================

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}

else{

nav.style.boxShadow="0 4px 20px rgba(0,0,0,.08)";

}

});

// ===============================
// Smooth Button Animation
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mousedown",()=>{

button.style.transform="scale(.95)";

});

button.addEventListener("mouseup",()=>{

button.style.transform="scale(1)";

});

});

// ===============================
// Scroll Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".6s";

observer.observe(card);

});

// ===============================
// Image Hover Tilt Effect
// ===============================

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/20);

const rotateY=((rect.width/2-x)/20);

card.style.transform=

`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

// ===============================
// Console
// ===============================

console.log("Professional Image Gallery Loaded Successfully");