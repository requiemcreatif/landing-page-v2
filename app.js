/*Define Global Variables*/

const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar-list");
const menu = [
  "Home",
  "Showcase",
  "Experience",
  "Projects",
  "Testimonials",
  "Contact",
];
const navMenu = document.querySelector(".navbar-menu");
const navToggle = document.querySelector(".navbar-toggle");
// mobile global variables
const mobileNav = document.querySelector("#mobile-navbar-list");
const mobileMenu = document.querySelector(".mobile-navbar-menu");
const openIcon = document.querySelector(".open-menu");
const closeIcon = document.querySelector(".close");

/*Build the nav*/

function navBuilder() {
  for (let i = 0; i < sections.length; i++) {
    // maybe to refactor
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = menu[i];
    navLink.setAttribute("class", "menu-link ");
    navLink.setAttribute("href", `#${sections[i].id}`);
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
    // maybe to refactor
  }
}

/*Build the mobile-navbar-menu */

function mobileNavBuilder() {
  for (let i = 0; i < sections.length; i++) {
    const mobileNavIcon = document.createElement("i");
    // maybe to refactor
    const mobileNavItem = document.createElement("li");
    const mobileNavLink = document.createElement("a");
    mobileNavLink.textContent = menu[i];
    mobileNavLink.setAttribute("class", "mobile-link ");
    mobileNavLink.setAttribute("href", `#${sections[i].id}`);
    mobileNavItem.appendChild(mobileNavLink);
    mobileNav.appendChild(mobileNavItem);
    // maybe to refactor
    mobileNavIcon.setAttribute("class", "fa-solid fa-angle-right");
    mobileNavItem.appendChild(mobileNavIcon);
  }
}

function openMenu() {
  openIcon.addEventListener("click", () => {
    mobileNav.style.display = "block";
    document.querySelector(".mobile-heading").style.display = "none";
  });
}

function closeMenu() {
  closeIcon.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.querySelector(".mobile-heading").style.display = "flex";
  });
}

function mobileNavScroll() {
  mobileNav.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    const targetId = target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
}

/*Add class 'active' to section and 'active-link' to menu when near top of viewport using getBoundingClientRect*/

function setActiveSection() {
  sections.forEach((section) => {
    window.addEventListener("scroll", () => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`[href="#${sectionId}"]`);
      if (rect.top >= 0 && rect.top <= 100) {
        section.classList.add("active");
        navLink.classList.add("active-link");
      } else {
        section.classList.remove("active");
        navLink.classList.remove("active-link");
      }
    });
  });
}

/*Scroll to anchor ID using scrollTO event and smooth scrolling*/

function scrollAnchor() {
  navBar.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target;
    const sectionHighlight = document.querySelector(
      target.getAttribute("href")
    );
    sectionHighlight.scrollIntoView({ behavior: "smooth" });
  });
}

/*make navbar disappear when not scrolling*/

/*need to fix the hidden menu, for some reason not working properly*/

/*function hiddenNav() {
  let timer;
  window.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      navMenu.classList.add("display-nav");
    }, 1000);
    console.log("nav is not hidden");
  });
  window.addEventListener("scroll", function () {
    navMenu.classList.remove("display-nav");
  });
}*/

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navBuilder();
mobileNavBuilder();
openMenu();
closeMenu();
// Scroll to section on link click
scrollAnchor();
mobileNavScroll();
// Set sections as active
setActiveSection();

// Hide navbar when not scrolling
// hiddenNav();
