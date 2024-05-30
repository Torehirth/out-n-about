import { carousel, prevBtn, nextBtn, cards } from "../data/constants.mjs";
import { updateCarouselButtonOpacity } from "../utils/updateCarouselButtonOpacity.mjs";

const gap = parseInt(window.getComputedStyle(carousel).gap); // get the gap between the cards
const cardWidth = cards[0].offsetWidth; // get the width of the card + gap
let currentIndex = 0; // set the current index to 0

// function for scrolling the carousel based on the index, letting the user scroll to start of each card
export const scrollCarousel = (index) => {
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
    scrollCarousel(currentIndex);
  }
});

// add event listeners to next carousel button
nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    scrollCarousel(currentIndex);
  }
});

// updates the current index based on the scroll position of the carousel
carousel.addEventListener("scroll", () => {
  const scrollPosition = carousel.scrollLeft;
  currentIndex = Math.round(scrollPosition / (cardWidth + gap));
});

// call the updateButtonOpacity function inside the event listener to update button opacity
carousel.addEventListener("scroll", updateCarouselButtonOpacity);

// add event listeners to the carousel to scroll by dragging
let isDragging = false;
let startPosition = 0;
let startScrollLeft = 0;

// if isDragging is true, change the cursor to grabbing, else change it to pointer
function changeCursor() {
  carousel.style.cursor = isDragging ? "grabbing" : "pointer";
}

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startPosition = event.clientX;
  startScrollLeft = carousel.scrollLeft;
  changeCursor(); // Change cursor to 'grabbing'
  event.preventDefault();
});

carousel.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const distance = event.clientX - startPosition;
    carousel.scrollLeft = startScrollLeft - distance;
    changeCursor(); // Maintain 'grabbing' cursor while dragging
  }
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  changeCursor(); // Change cursor back to 'pointer'
});
