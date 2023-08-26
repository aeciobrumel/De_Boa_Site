const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const imagemInput = document.getElementById('imagem');
const imagemPreview = document.getElementById('imagem-preview');

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



console.log("teste")

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



imagemInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        imagemPreview.style.display = 'block';
        imagemPreview.src = URL.createObjectURL(file);
    } else {
        imagemPreview.style.display = 'none';
        imagemPreview.src = '#';
    }
});