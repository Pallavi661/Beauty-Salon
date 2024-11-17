// Initialize GSAP Timeline for Animations
function initializeAnimations() {
    const tl = gsap.timeline();

    // Animate Navigation Bar
    tl.from("#nav", {
        y: '-20',
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
    })

    // Animate Heading Elements
    .to(".boundingelem", {
        y: 0,
        ease: "expo.out",
        duration: 2,
        stagger: 0.2
    });
}

// Custom Cursor Animation
function initializeCustomCursor() {
    const cursor = document.querySelector('.circle');

    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power3.out"
        });
    });

    // Add hover effects for specific elements
    document.querySelectorAll(".elem, .dropbtn").forEach((element) => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                backgroundColor: "#ffae42",
                ease: "power3.out"
            });
        });
        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "#0a0a0a",
                ease: "power3.out"
            });
        });
    });
}

// Image Hover Effects
function initializeImageHoverEffects() {
    const elements = document.querySelectorAll(".elem");

    elements.forEach((elem) => {
        const image = elem.querySelector("img");

        // Reset image on mouse leave
        elem.addEventListener("mouseleave", () => {
            gsap.to(image, {
                opacity: 0,
                scale: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        });

        // Animate image on mouse move
        elem.addEventListener("mousemove", (event) => {
            const rect = elem.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            gsap.to(image, {
                opacity: 1,
                scale: 1.1,
                x: offsetX - image.offsetWidth / 2,
                y: offsetY - image.offsetHeight / 2,
                duration: 0.2,
                ease: "power3.out"
            });
        });
    });
}

// Dropdown Menu Toggle
function initializeDropdownMenu() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", () => {
        const isVisible = dropdownContent.style.display === "block";
        dropdownContent.style.display = isVisible ? "none" : "block";

        // Close dropdown when clicked outside
        document.addEventListener("click", (event) => {
            if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = "none";
            }
        });
    });
}

// Initialize All Animations
document.addEventListener("DOMContentLoaded", () => {
    initializeAnimations();
    initializeCustomCursor();
    initializeImageHoverEffects();
    initializeDropdownMenu();
});



