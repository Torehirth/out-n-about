import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";
import { createPostImage } from "../components/createPostImage.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";

// trying to increase loading speeds in terms of Lighthouse
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();
});

toggleMobileNav();
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

// ---------------- create carousel --------------

export const createSliderCard = (container, post) => {
  const outerCardContainer = document.createElement("div");
  container.appendChild(outerCardContainer);

  const innerCardContainer = document.createElement("a");
  innerCardContainer.classList.add("carousel-card");
  outerCardContainer.appendChild(innerCardContainer);

  // calling the createPostImage function her to assign its properties to the variable
  const img = createPostImage(post, "post-carousel-card-copy");
  innerCardContainer.appendChild(img);
};

// ----------------- display carousel --------------

const displayCarouselCards = async () => {
  try {
    const post = await fetchAllPosts(carousel);

    createSliderCard(carousel, post);
  } catch (error) {}
};

displayCarouselCards();
