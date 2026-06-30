/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});


/* ==========================================
   JAM DIGITAL
========================================== */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    clock.innerHTML = `${h}:${m}:${s}`;

}

setInterval(updateClock,1000);

updateClock();


/* ==========================================
   TANGGAL
========================================== */

const dateElement = document.getElementById("date");

if(dateElement){

const today = new Date();

const option = {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
};

dateElement.innerHTML = today.toLocaleDateString("id-ID",option);

}


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav ul");

menuBtn.onclick=function(){

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";
nav.style.flexDirection="column";
nav.style.position="absolute";
nav.style.top="80px";
nav.style.right="20px";
nav.style.background="#111";
nav.style.padding="20px";
nav.style.borderRadius="15px";
nav.style.gap="20px";

}

};


/* ==========================================
   ANIMASI SCROLL
========================================== */

const cards=document.querySelectorAll(".card,.box,.project-box");

function reveal(){

cards.forEach(card=>{

const windowHeight=window.innerHeight;

const cardTop=card.getBoundingClientRect().top;

if(cardTop<windowHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();


/* ==========================================
   KIRIM PESAN
========================================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Terima kasih 😊\nPesan Anda berhasil dikirim.");

form.reset();

});

}


/* ==========================================
   TYPING EFFECT
========================================== */

const title=document.querySelector(".home h2");

const text="Mahasiswa S1 Teknologi Informasi";

let i=0;

function typing(){

if(title){

title.innerHTML=text.substring(0,i);

i++;

if(i<=text.length){

setTimeout(typing,80);

}

}

}

if(title){

title.innerHTML="";

typing();

}


/* ==========================================
   GALERI ZOOM
========================================== */

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});


/* ==========================================
   DARK MODE
========================================== */

const darkButton=document.createElement("button");

darkButton.innerHTML="🌙";

darkButton.style.position="fixed";
darkButton.style.bottom="95px";
darkButton.style.right="25px";
darkButton.style.width="55px";
darkButton.style.height="55px";
darkButton.style.border="none";
darkButton.style.borderRadius="50%";
darkButton.style.background="#ff2d55";
darkButton.style.color="#fff";
darkButton.style.cursor="pointer";
darkButton.style.zIndex="999";

document.body.appendChild(darkButton);

let dark=true;

darkButton.onclick=function(){

if(dark){

document.body.style.background="#ffffff";
document.body.style.color="#111";

document.querySelectorAll(".card,.box,.project-box,.contact-info,.contact-form,.clock-card,.calendar-card,.info div").forEach(item=>{

item.style.background="#f2f2f2";
item.style.color="#111";

});

dark=false;

}else{

location.reload();

}

};


/* ==========================================
   AUDIO
========================================== */

const music=document.getElementById("music");

if(music){

music.volume=0.3;

}


/* ==========================================
   COPYRIGHT
========================================== */

console.log("Website Portofolio Badet Hermawan");

