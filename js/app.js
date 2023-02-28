/* Show menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*remove menu mobile */
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll section Active link */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/* Change background header */

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* show scroll topr */

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else header.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/* mixitup filter portfolio */
const mixer = mixitup(".portfolio_container", {
  selectors: {
    target: ".portfolio_content",
  },
  animation: {
    duration: 400,
  },
});
/* Link active portfolio*/
const linkPortfolio = document.querySelectorAll(".portfolio_item");
function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}
linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

/*Gsap animation greensock*/
gsap.from(".home_img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home_data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home_greeting, .home_name, .home_profesion, .home_button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav_logo, .nav_toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav_item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".home_social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
/* contact https://smtpjs.com/ */
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const project = document.getElementById("project_name");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form_contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");
});
Email.send({
  SecureToken: "7d5c823c-4799-41d3-9d3b-42b3583945e1",
  To: "gaborf703@gmail.com",
  From: "gaborf703@gmail.com",
  Subject: "This is the subject",
  Body: "And this is the body",
}).then((message) => alert(message));
