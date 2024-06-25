document.querySelector(".menu-open").addEventListener("click", () => {
  document.querySelector(".menu").classList.add("menu--active");
});

document.querySelector(".menu-close").addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("menu--active");
});
