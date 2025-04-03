
const fadeElements = document.querySelectorAll(".fade-in");
const slideElements = document.querySelectorAll(".slide-in");

function checkVisibility() {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("show");
        }
    });

    slideElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
checkVisibility();
