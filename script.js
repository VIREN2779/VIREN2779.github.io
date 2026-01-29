const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent (demo)");
});