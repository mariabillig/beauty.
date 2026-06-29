/*==========================================================
 MARIA BILLIG BEAUTY
 script.js
==========================================================*/

/* MENU MOBILE */

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    menu.classList.toggle("active");

});

/* FECHA AO CLICAR EM UM LINK */

document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

/* FECHA AO CLICAR FORA */

document.addEventListener("click",(e)=>{

    if(
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){

        menu.classList.remove("active");

    }

});

/*======================================
 NAVBAR
======================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        navbar.classList.add("scroll");

    }else{

        navbar.classList.remove("scroll");

    }

});

/*======================================
 BOTÃO TOPO
======================================*/

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*======================================
 BARRA DE PROGRESSO
======================================*/

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scroll=

document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const percent=(scroll/height)*100;

progress.style.width=percent+"%";

});

/*======================================
 ANIMAÇÕES
======================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".fade-up,.zoom,.slide-left,.slide-right"

).forEach(el=>{

observer.observe(el);

});

/*======================================
 FAQ
======================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

item.querySelector(".faq-question")

.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

/*======================================
 CONTADORES
======================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=

new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=

+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*======================================
 GALERIA
======================================*/

document.querySelectorAll(".gallery-item img")

.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*======================================
 SCROLL SUAVE
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=

document.querySelector(

this.getAttribute("href")

);

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*======================================
 CARREGAMENTO
======================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log(

"Maria Billig Beauty carregado com sucesso."

);
