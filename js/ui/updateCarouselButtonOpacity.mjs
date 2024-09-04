import { carousel, prevBtn, nextBtn } from "../data/constants.mjs";

//function for updating the opacity of the carousel buttons
prevBtn.style.display = "none"; // hide the left button initially

export function updateCarouselButtonOpacity() {
  // left button
  if (carousel.scrollLeft <= 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
  // right button
  if (carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft <= 5) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}
