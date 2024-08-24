import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";

toggleMobileNav();
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

// ----------------------- Carousel --------------

export const createSliderCard = (container) => {
  const outerCardContainer = document.createElement("div");
  container.appendChild(outerCardContainer);

  const innerCardContainer = document.createElement("div");
  innerCardContainer.classList.add("carousel-card");
  outerCardContainer.appendChild(innerCardContainer);

  const cardImage = document.createElement("img");
  cardImage.classList.add("post-carousel-card-img")
  // cardImage.src = "";
  // cardImage.alt = 
  

  
};
