// Seleksi DOM
const header = document.querySelector(".site-header");
const searchInput = document.querySelector(".search-form__input");
const searchForm = document.querySelector(".search-form");
const searchIcon = document.querySelector("#search-icon"); // Pastikan ID ini dipakai di HTML

const hamburgerIcon = document.querySelector("#hamburger-menu"); // ID sudah sesuai
const navMenu = document.querySelector(".nav__menu");

let lastScrollTop = 0;
window.addEventListener("scroll", (e) => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scroll ke bawah
    header.classList.add("site-header--scrolltop")
  } else if (currentScroll < lastScrollTop) {
    // Scroll ke atas
    header.classList.remove("site-header--scrolltop")

  }

  lastScrollTop = currentScroll;
});



hamburgerIcon.addEventListener("click", () => {
  console.log(navMenu)
  navMenu.classList.toggle("active")
})

window.addEventListener("click", (e) => {
  const isClickInsideHamburger = hamburgerIcon.contains(e.target);
  const isClickInsideNavMenu = navMenu.contains(e.target);

  // Jika klik BUKAN di hamburger dan BUKAN di navMenu, tutup menu
  if (!isClickInsideHamburger && !isClickInsideNavMenu) {
    navMenu.classList.remove("active");
  }
});



const attractionCards = document.querySelector(".attractions-section__cards")

const destinasiWisata = [
  {
    title : "Pantai Carita",
    img : "./src/assets/gallery/pantai-carita.png", 
    alt : "Pantai Carita",
    description : "Nikmati keindahan pantai pasir putih dengan latar belakang Gunung Krakatau yang menakjubkan."
  },
  {
    title : "Pantai Bugel",
    img : "./src/assets/gallery/pantai-bugel.png", 
    alt : "Pantai Bugel",
    description : "Keindahan pantai dengan rumput hijau dan pemandangan yang menakjubkan, cocok untuk berkemah."
  },
  {
    title : "Taman Nasional Ujung Kulon",
    img : "./src/assets/gallery/ujung-kulon.png", 
    alt : "Taman Nasional Ujung Kulon",
    description : "Temukan flora dan fauna langka, termasuk badak Jawa, di taman nasional pertama Indonesia ini."
  },
  {
    title : "Curug Goong",
    img : "./src/assets/gallery/curug-goong.png", 
    alt : "curug goong",
    description : "Wisata air terjun curug goong, nikmati kesejukan alam dan keindahan suara arus sungai."
  },
]



destinasiWisata.forEach((data) => {
  const {title,img,alt,description} = data

  const attractionCard = document.createElement("div")
  attractionCard.classList.add("attactions__card")
  const attractionCardImg = document.createElement("img")
  attractionCardImg.setAttribute("src", img)
  attractionCardImg.setAttribute("alt", alt)
  attractionCardImg.classList.add("attractions__card-image");

  const attractionCardTitle = document.createElement("h3")
  attractionCardTitle.textContent = title
  const attractionCardDesc = document.createElement("p")
  attractionCardDesc.textContent = description


  attractionCard.append(attractionCardImg, attractionCardTitle, attractionCardDesc)

  attractionCards.appendChild(attractionCard)
})


