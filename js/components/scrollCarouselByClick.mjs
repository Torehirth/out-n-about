import { carousel, prevBtn, nextBtn, cards } from "../data/constants.mjs";
import { updateCarouselButtonOpacity } from "../utils/updateCarouselButtonOpacity.mjs";

const gap = parseInt(window.getComputedStyle(carousel).gap); // get the gap between the cards
const cardWidth = cards[0].offsetWidth; // get the width of the card + gap
let currentIndex = 0; // set the current index to 0
// function for scrolling the carousel based on the index, letting the user scroll to start of each card
export const scrollCarouselByClick = (index) => {
  const scrollAmount = index * (cardWidth + gap);
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
};

// add event listeners to prev carousel button
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollCarouselByClick(currentIndex);
  }
});

// add event listeners to next carousel button
nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;

    scrollCarouselByClick(currentIndex);
  }
});

// updates the current index based on the scroll position of the carousel
carousel.addEventListener("scroll", () => {
  const scrollPosition = carousel.scrollLeft;
  currentIndex = Math.round(scrollPosition / (cardWidth + gap));
  // call the updateButtonOpacity function inside the event listener to update button opacity by scroll position
  updateCarouselButtonOpacity();
});
