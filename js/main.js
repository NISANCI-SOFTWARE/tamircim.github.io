/*---------------------------------------------*/

/*Design Mobile Header*/

const btnMenuOpen = document.querySelector("#mobile_menu");
const btnMenuClose = document.querySelector("#mobile_menu_close");

const menu = document.querySelector("#mobile_link");

btnMenuOpen.addEventListener("click", function () {
  menu.style.display = "block";
  btnMenuOpen.style.display = "none";
  btnMenuClose.style.display = "block";
});

btnMenuClose.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

const clickMobileHome = document.querySelector(".home-mobile");
clickMobileHome.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

const clickMobileAbout = document.querySelector(".about-mobile");
clickMobileAbout.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});


const clickMobileServcies = document.querySelector(".services-mobile");
clickMobileServcies.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

const clickMobileComment = document.querySelector(".comment-mobile");
clickMobileComment.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});

const clickMobileContact = document.querySelector(".contact-mobile");
clickMobileContact.addEventListener("click", function () {
  menu.style.display = "none";
  btnMenuOpen.style.display = "block";
  btnMenuClose.style.display = "none";
});
