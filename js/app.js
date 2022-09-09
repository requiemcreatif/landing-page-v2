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

/* HELPER FUNCTIONS */

function createElement() {
  for (let i = 0; i < sections.length; i++) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = menu[i];
    navLink.setAttribute("class", "menu-link ");
    navLink.setAttribute("href", `#${sections[i].id}`);
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
  }
}

/*Build the Desktop nav*/

(function navBuilder() {
  createElement();
})();

/*Scroll to anchor ID using scrollTO event and smooth scrolling*/

(function scrollAnchor() {
  navBar.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target;
    const sectionHighlight = document.querySelector(
      target.getAttribute("href")
    );
    sectionHighlight && sectionHighlight.scrollIntoView({ behavior: "smooth" });
  });
})();

/*Add class 'active' to section and 'active-link' to menu when near top of viewport using getBoundingClientRect*/

(function setActiveSection() {
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
})();

/*set active class for mobile and destop*/

/*Build the mobile-navbar-menu */

(function mobileNavBuilder() {
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
})();

// add .active-link-mobile to active mobile link
(function setActiveMobileLink() {
  mobileNav.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach((link) => {
      link.classList.remove("active-link-mobile");
      // change color on active link
      if (link === target) {
        link.style.color = "#a68f49";
        link.style.fontWeight = "bold";
      } else {
        link.style.color = "#000";
        link.style.fontWeight = "300";
      }
    });
    target.classList.add("active-link-mobile");
  });
})();

/*smooth scroll mobile*/

(function mobileNavScroll() {
  mobileNav.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    const targetId = target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection && targetSection.scrollIntoView({ behavior: "smooth" });
  });
})();

/* Opening mobile menu (hamburger)*/
(function openMenu() {
  openIcon.addEventListener("click", () => {
    mobileNav.style.display = "block";
    document.querySelector(".mobile-heading").style.display = "none";
  });
})();

/* Closing mobile menu (cross icon)*/
(function closeMenu() {
  closeIcon.addEventListener("click", () => {
    mobileNav.style.display = "none";
    document.querySelector(".mobile-heading").style.display = "flex";
  });
})();

/*make navbar disappear when not scrolling*/

/*need to fix the hidden menu, for some reason not working properly*/ /*seems to work now*/
(function hiddenNav() {
  let timer;
  window.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      navMenu.classList.add("display-nav");
    }, 4000);
  });
  window.addEventListener("scroll", function () {
    navMenu.classList.remove("display-nav");
  });
})();

/* collect data from subcription form and subscription message*/

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //message store in an object
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data); // to check if data is stored in an object
  const message = document.createElement("p");
  //insert input data into message name and email
  message.textContent = `Hey ${data.name}, hello dear! thanks for subscribing to the Jedi newsletter. We'll send you some tips ${data.email} to keep out of the darkside of the force. May the force be with you!`;
  message.setAttribute("class", "message");
  //append message at beginning of the form
  form.prepend(message);

  message.style.color = "#a68f49";
  message.style.fontSize = "1.5rem";
  message.style.fontWeight = "bold";
  message.style.marginTop = "1rem";
  form.appendChild(message);
  form.reset();
  //remove message after 3 seconds
  setTimeout(() => {
    message.remove();
  }, 10000);
});
// form.textContent = "Thank you for subscribing!";

// create a modal for the form

/**
 * End Main Functions
 * Begin Events
 *
 */

/* Build menu*/
// navBuilder();
// mobileNavBuilder();
// openMenu();
// closeMenu();

/*Scroll to section on link click*/
// scrollAnchor();
// mobileNavScroll();

/* Set sections as active*/
// setActiveSection();

/* Hide navbar when not scrolling*/
// hiddenNav();
