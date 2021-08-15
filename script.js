const navSlide = () => {
  // Variables
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__menu");

  // Toggle .nav-active class
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
