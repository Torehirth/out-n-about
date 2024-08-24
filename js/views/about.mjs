import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
toggleMobileNav();
import { scrollCarouselByClick } from "../handler/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../handler/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";

scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);
