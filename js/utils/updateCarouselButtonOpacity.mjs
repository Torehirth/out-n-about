import { carousel, prevBtn, nextBtn } from "../data/constants.mjs";

//function for updating the opacity of the carousel buttons
prevBtn.style.opacity = 0.3; // set the opacity of the left button to 0.3 to start with.
export function updateCarouselButtonOpacity() {
  // left button
  if (carousel.scrollLeft <= 0) {
    prevBtn.style.opacity = 0.3;
  } else {
    prevBtn.style.opacity = 1;
  }
  // right button
  if (carousel.scrollLeft >= carousel.scrollLeftMax) {
    nextBtn.style.opacity = 0.3;
  } else {
    nextBtn.style.opacity = 1;
  }
}
