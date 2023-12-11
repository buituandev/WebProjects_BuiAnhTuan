const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('scroll_to_top_btn');
  let progressValue = document.getElementById('value');
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#f6ac0f ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//Login popup
document.querySelectorAll("#login-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".popup-overlay").classList.add("active");
    document.querySelector(".popup").classList.add("active");
  });
});

document.querySelector(".fa-solid.fa-xmark").addEventListener("click", () => {
  document.querySelector(".popup-overlay").classList.remove("active");
  document.querySelector(".popup").classList.remove("active");
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest('.dropdown')) {
    return;
  }

  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//date picker
$(function () {
  $("#res-date").datepicker();
});

// header container
ScrollReveal().reveal(".header_container .section_subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// space container
ScrollReveal().reveal(".space_card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature_card", {
  ...scrollRevealOption,
  interval: 500,
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// news container
ScrollReveal().reveal(".news_card", {
  ...scrollRevealOption,
  interval: 500,
});

// modal
var modal = document.getElementById('RestaurantModal');
var modalTitle = document.getElementById('RestaurantModalTitle');
var modalBody = modal.getElementsByClassName('modal-body')[0];

var buttons = document.querySelectorAll('[data-bs-target="#RestaurantModal"]');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var newTitle = button.getAttribute('data-title');
    var newMessage = button.getAttribute('data-message');

    modalTitle.textContent = newTitle;
    modalBody.textContent = newMessage;
  });
});