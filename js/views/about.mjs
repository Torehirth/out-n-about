import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
toggleMobileNav();
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";

scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);
