(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const o={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};o.openMenuBtn.addEventListener("click",n),o.closeMenuBtn.addEventListener("click",n);function n(){o.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&(mobileMenu.classList.remove("is-open"),openMenuBtn.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}),document.querySelectorAll(".menu-link").forEach(l=>{l.addEventListener("click",()=>{o.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll")})})})();new Swiper(".myswiper",{loop:!0,pagination:{el:".swiper-pagination",type:"fraction"},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev "}});$(window).scroll(function(){$(this).scrollTop()>200?$(".scroll-to-top").fadeIn():$(".scroll-to-top").fadeOut()});$(".scroll-to-top").click(function(){return $("html, body").animate({scrollTop:0},800),!1});
