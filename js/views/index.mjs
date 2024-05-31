import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel } from "../data/constants.mjs";

// let currentIndex = 0; // set the current index to 0

toggleMobileNav();
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
