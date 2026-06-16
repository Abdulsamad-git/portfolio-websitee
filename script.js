// --- Mobile Navigation Menu Toggle ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Navbar Active State Change on Scroll ---
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// --- Simple Contact Form Submission Handler ---
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form Submitted Successfully:", { name, email, message });
    
    alert(`Thank you, ${name}! Your message was successfully captured.`);
    contactForm.reset();
});