// seleksi DOM 
const header = document.querySelector("header");
const searchInput = document.querySelector(".search-input");
const search = document.querySelector(".search");
const searchIcon = document.querySelector("#search-icon");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelector("#nav-link");
const navLinkAll = document.querySelectorAll("#nav-link");
const logo = document.querySelector("#logo");

// ganti warna navbar jika skroll ke bawah
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    header.classList.add("header-scrolled");

    // ganti warna ikon
    searchIcon.setAttribute("color", "black");
    hamburgerIcon.setAttribute("color", "black");

    // ganti warna logo dan mixblendmode
    logo.style.color = "black";
    logo.style.mixBlendMode = "normal";

    // buat hamburger ikon mixblendmode normal
    hamburgerIcon.style.mixBlendMode = "normal";
    searchIcon.style.mixBlendMode = "normal";

    // tambah kelas pada text link navigasi
    if (window.innerWidth > 1280) {
      navLinkAll.forEach((el) => {
        el.classList.add("nav-link-noscrolled");
      });
    }
  } else {
    header.classList.remove("header-scrolled");

    // ganti warna ikon
    searchIcon.setAttribute("color", "white");
    hamburgerIcon.setAttribute("color", "white");

    // ganti warna logo dan mixblendmode
    logo.style.color = "white";
    logo.style.mixBlendMode = "difference";

    // buat hamburger ikon mixblendmode difference/berbeda dari latar
    hamburgerIcon.style.mixBlendMode = "difference";
    searchIcon.style.mixBlendMode = "difference";

    // hapus kelas pada text link navigasi
    if (window.innerWidth > 1280) {
      navLinkAll.forEach((el) => {
        el.classList.remove("nav-link-noscrolled");
      });
    }
  }

});

// aktifkan input search
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("search-input-active");
  search.classList.toggle("search-clicked");
});

// aktifkan sidebar dan ganti ikon hamburger ke x
hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-active");

  if (navMenu.classList.contains("nav-menu-active")) {
    hamburgerIcon.setAttribute("name", "x");
  } else {
    hamburgerIcon.setAttribute("name", "menu-alt-right");
  }
});

// tutup sidebar jika tidak klik ikon hamburger dan navigation bar
document.addEventListener("click", (e) => {
  if (e.target.id !== hamburgerIcon.id && e.target.id !== navMenu.id) {
    navMenu.classList.remove("nav-menu-active");
    hamburgerIcon.setAttribute("name", "menu-alt-right");
  }
});

// set foto gallery
const galleryItem = document.querySelectorAll(".gallery-item");
galleryItem.forEach((el, index) => {
  el.style.backgroundImage = `url("./src/assets/gallery/image-${
    index + 1
  }.png")`;
});

// scroll to top jika klik logo
logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
