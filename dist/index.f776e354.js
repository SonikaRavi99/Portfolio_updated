"use strict";const stickyNavbar=document.querySelector(".navbar-sticky"),section1=document.querySelector(".section-1"),about=document.querySelector(".about"),services=document.querySelector(".services"),resume=document.querySelector(".resume"),portfolio=document.querySelector(".portfolio"),contact=document.querySelector(".contact"),sections=document.querySelectorAll("section"),navLinks=document.querySelectorAll(".nav-links"),mainNavLinks=document.querySelectorAll(".main-nav-links"),ScrollClick=function(t){t.forEach((function(e){e.addEventListener("click",(function(c){t.forEach((t=>t.style.color="#fff")),e.style.color="#20c997",sections.forEach((function(t){t.id==c.target.getAttribute("href").slice(1)&&t.scrollIntoView()}))}))}))};ScrollClick(navLinks);const changeOnScroll=function(t){t.forEach((function(t){t.style.color="#fff",ele.getAttribute("id")==t.hash.slice(1)&&(t.style.color="#20c997")}))};window.addEventListener("scroll",(function(){section1.getBoundingClientRect().top<-135?(stickyNavbar.classList.remove("bg-transparent"),stickyNavbar.classList.add("bg-black")):(stickyNavbar.classList.add("bg-transparent"),stickyNavbar.classList.remove("bg-black")),sections.forEach((function(t){const e=t.getBoundingClientRect().height;t.getBoundingClientRect().y<5&&t.getBoundingClientRect().y>-e&&(mainNavLinks.forEach((function(e){e.style.color="#fff",t.getAttribute("id")==e.hash.slice(1)&&(e.style.color="#20c997")})),navLinks.forEach((function(e){e.style.color="#fff",t.getAttribute("id")==e.hash.slice(1)&&(e.style.color="#20c997")})))}))}));
//# sourceMappingURL=index.f776e354.js.map