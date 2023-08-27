/*const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
*/
const inputFile = document.querySelector('#imagem');
const pictureImage = document.querySelector('.pictureImage');
const pictureImageTXT= "Selecione uma imagem";
pictureImage.innerHTML = pictureImageTXT;


/*

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


*/
inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0]

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__Image');

            pictureImage.innerHTML= "";
            pictureImage.appendChild(img);
        });
      reader.readAsDataURL(file);
    }else{
        pictureImage.innerHTML = pictureImageTXT;
    }
});