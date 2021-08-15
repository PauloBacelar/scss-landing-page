const navSlide = () => {
  // Variables
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__menu");

  // Toggle .nav-active class
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    if (nav.classList.contains("nav-active")) {
      burger.classList.remove("fa-bars");
      burger.classList.add("fa-times");
    } else {
      burger.classList.add("fa-bars");
      burger.classList.remove("fa-times");
    }
  });
};

navSlide();
