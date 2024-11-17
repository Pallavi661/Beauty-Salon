// JavaScript for animations
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const serviceItems = document.querySelectorAll(".service-item");

    // Apply fade-in animation to the header
    header.style.opacity = "0";
    header.style.transform = "translateY(20px)";
    setTimeout(() => {
        header.style.transition = "all 1.5s ease-out";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 100); // Delay to ensure smooth animation

    // Apply fade-in animation to service items
    serviceItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "all 1.5s ease-out";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, 500 + index * 200); // Stagger animation by 200ms
    });
});
