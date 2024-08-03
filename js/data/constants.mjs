// ---mobile nav menu---
export const hamburgerMenu = document.querySelector(".hamburger");
export const mobileNav = document.querySelector(".mobile-nav");
export const navLinks = document.querySelectorAll(".mobile-nav-link");
export const mobileNavLinks = document.querySelector(".mobile-nav-links");
export const mobileSoMeLinks = document.querySelectorAll(".mobile-social-media-links");
// ---card carousel---
export const prevBtn = document.querySelector("#prev-btn");
export const nextBtn = document.querySelector("#next-btn");
export const carousel = document.querySelector("#post-carousel");
export const cards = Array.from(carousel.children); // extracting cards (children) from carousel (parent) in an array
export const cardImages = document.querySelectorAll(".post-carousel-card img");
// --- API ---
export const allPostsURL = "https://exam.torehirth.no/wp-json/wp/v2/posts";