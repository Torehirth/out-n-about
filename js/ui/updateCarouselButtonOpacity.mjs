import { carousel, prevBtn, nextBtn } from "../data/constants.mjs";

//function for updating the opacity of the carousel buttons
prevBtn.style.opacity = 0; // set the opacity of the left button to 0 to start with.
prevBtn.disabled = true;

export function updateCarouselButtonOpacity() {
  // left button
  if (carousel.scrollLeft <= 0) {
    prevBtn.style.opacity = 0;
  } else {
    prevBtn.style.opacity = 1;
    prevBtn.disabled = false;
  }
  // right button
  if (carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft <= 5) {
    nextBtn.style.opacity = 0;
    nextBtn.disabled = true;
  } else {
    nextBtn.style.opacity = 1;
    nextBtn.disabled = false;
  }
}
