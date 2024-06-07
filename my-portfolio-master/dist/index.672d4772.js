"use strict";
// selecting elements
const stickyNavbar = document.querySelector(".navbar-sticky");
const section1 = document.querySelector(".section-1");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const resume = document.querySelector(".resume");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links");
const mainNavLinks = document.querySelectorAll(".main-nav-links");
const scrollTopButton = document.querySelector(".scroll-to-top");
const responseForm = document.querySelector(".form-response");
const responseName = document.querySelector(".response-name");
const responseEmail = document.querySelector(".response-email");
const responseText = document.querySelector(".response-text");
const sendResponseButton = document.querySelector(".send-msg-btn");
const responseFeedback = document.querySelector(".response-feedback");
console.log(responseForm);
// submitting response to firebase
responseForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const name = responseName.value;
    const email = responseEmail.value;
    const text = responseText.value;
    try {
        const response = await fetch("https://portfolio-24f88-default-rtdb.firebaseio.com/response.json", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                needs: text
            }),
            headers: {
                "content-type": "application/json"
            }
        });
        if (response.ok) responseFeedback.classList.remove('response-inactive');
        else {
            responseFeedback.classList.remove('response-inactive');
            throw new Error('Sending response failed');
        }
    } catch (error) {
        responseFeedback.textContent = error.message;
    }
});
//implementing scrolling behavior and changing color of a link when it is active
const ScrollClick = function(links) {
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            links.forEach((ele)=>ele.style.color = "#fff"
            );
            link.style.color = "#20c997";
            sections.forEach(function(ele) {
                if (ele.id == e.target.getAttribute("href").slice(1)) ele.scrollIntoView();
            });
        });
    });
};
ScrollClick(navLinks);
// ScrollClick(mainNavLinks);
const changeOnScroll = function(links) {
    links.forEach(function(mainLink) {
        mainLink.style.color = "#fff";
        if (ele.getAttribute("id") == mainLink.hash.slice(1)) mainLink.style.color = "#20c997";
    });
};
//implementing changing of a link color in main nav when a window is scrolled up or down
window.addEventListener("scroll", function() {
    const coords = section1.getBoundingClientRect();
    if (coords.top < -135) {
        stickyNavbar.classList.remove("bg-transparent");
        stickyNavbar.classList.add("bg-black");
        scrollTopButton.style.opacity = "1";
    } else {
        stickyNavbar.classList.add("bg-transparent");
        stickyNavbar.classList.remove("bg-black");
        scrollTopButton.style.opacity = "0";
    }
    sections.forEach(function(ele) {
        const height = ele.getBoundingClientRect().height;
        if (ele.getBoundingClientRect().y < 5 && ele.getBoundingClientRect().y > -height) {
            mainNavLinks.forEach(function(mainLink) {
                mainLink.style.color = "#fff";
                if (ele.getAttribute("id") == mainLink.hash.slice(1)) mainLink.style.color = "#20c997";
            });
            navLinks.forEach(function(mainLink) {
                mainLink.style.color = "#fff";
                if (ele.getAttribute("id") == mainLink.hash.slice(1)) mainLink.style.color = "#20c997";
            });
        }
    });
});
// revealing elements on scroll
const reveal = function() {
    const reveals = document.querySelectorAll(".anime-div");
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) reveals[i].classList.add("activate");
        else reveals[i].classList.remove("activate");
    }
};
window.addEventListener("scroll", reveal);
// implementing srroll to top on click
scrollTopButton.addEventListener("click", function() {
    section1.scrollIntoView();
});

//# sourceMappingURL=index.672d4772.js.map
