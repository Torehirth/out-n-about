import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../utils/cardHoverEffect.mjs";

toggleMobileNav();
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

import { fetchPost } from "../api/fetchPost.mjs";

// const postWrapper = document.querySelector("#post-wrapper");

// fetchPost(postWrapper);
