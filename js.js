function classToggle() {
  const navs = document.querySelectorAll(".navbar");
  navs.forEach(nav => nav.classList.toggle("navbar__ToogleShow"));
}

document
  .querySelector(".navbar__fa-bars")
  .addEventListener("click", classToggle);
