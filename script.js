const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent (demo)");
});