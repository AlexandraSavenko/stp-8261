/* empty css                      */import{S as d}from"./assets/vendor-34a460a6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".header-burger"),a=document.querySelector(".header-mob-menu");document.querySelector(".header-wrapper");const m=document.querySelector("main");let u=!1;c.addEventListener("click",()=>{a.classList.contains("is-open")?(a.classList.remove("is-open"),document.body.classList.remove("scroll-lock")):(a.classList.add("is-open"),document.body.classList.add("scroll-lock"),m.classList.toggle("filter-blur")),u?(c.classList.remove("open"),u=!1):(c.classList.add("open"),u=!0)});window.matchMedia("(min-width: 1200px)").addEventListener("change",o=>{o.matches&&(a.classList.remove("is-open"),document.body.classList.remove("scroll-lock"),c.classList.remove("open"))});const v=document.querySelectorAll(".nav-link");v.forEach(o=>{o.addEventListener("click",function(t){t.preventDefault();const s=this.getAttribute("href").substring(1);document.getElementById(s).scrollIntoView({behavior:"smooth"}),a.classList.remove("is-open"),m.classList.remove("filter-blur"),document.body.classList.remove("scroll-lock"),c.classList.toggle("open"),u=!1})});let i;function w(){window.innerWidth<1200?i||(i=new d(".benefits-swiper",{slidesPerView:1,spaceBetween:24,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}})):i&&(i.destroy(!0,!0),i=null)}w();window.addEventListener("resize",w);const y=new d(".features-swiper",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1200:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}});function g(){const o=document.querySelector(".features-swiper .swiper-button-prev"),t=document.querySelector(".features-swiper .swiper-button-next");this.isBeginning?o.classList.remove("active"):o.classList.add("active"),this.isEnd?t.classList.remove("active"):t.classList.add("active")}y.on("slideChange",g);let l;function f(){window.innerWidth<1200?l||(l=new d(".gallery-swiper",{slidesPerView:1,spaceBetween:24,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0}})):l&&(l.destroy(!0,!0),l=null)}f();window.addEventListener("resize",f);new d(".reviews-swiper",{slidesPerView:1,spaceBetween:24,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1200:{slidesPerView:3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".cookie-popup"),t=document.querySelector(".overlay"),s=localStorage.getItem("cookies-reply");setTimeout(()=>{s||(o.classList.add("show-popup"),t.classList.add("show-overlay"))},5e3),document.querySelectorAll(".decline-btn, .accept-btn").forEach(n=>{n.addEventListener("click",e=>{localStorage.setItem("cookies-reply",e.target.className),o.classList.remove("show-popup"),t.classList.remove("show-overlay")})})});
//# sourceMappingURL=commonHelpers2.js.map
