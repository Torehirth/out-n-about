import { prevBtn, nextBtn } from "../data/constants.mjs";
import { updateCarouselButtonOpacity } from "../ui/updateCarouselButtonOpacity.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCarouselCardsByDate } from "../ui/displayCarouselCardsByDate.mjs";
import { carousel } from "../data/constants.mjs";

export const handleCarouselFunctionality = async () => {
  // Fetch posts to load them before carousel data will be gathered
  const posts = await fetchAllPosts();
  // create carousel elements and append posts to carousel container
  const numberOfPosts = 7;
  displayCarouselCardsByDate(carousel, posts, numberOfPosts);

  // now that the posts are loaded i can use the cards variable and get truthy values
  const cards = document.querySelectorAll("#carousel-cards");
  let currentIndex = 0;

  if (cards.length > 0) {
    const gap = parseInt(window.getComputedStyle(carousel).gap) || 0;
    const cardWidth = cards[0].offsetWidth || 0;

    const scrollCarouselByClick = (index) => {
      const scrollAmount = index * (cardWidth + gap);
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollCarouselByClick(currentIndex);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        scrollCarouselByClick(currentIndex);
      }
    });

    carousel.addEventListener("scroll", () => {
      const scrollPosition = carousel.scrollLeft;
      currentIndex = Math.round(scrollPosition / (cardWidth + gap));
      updateCarouselButtonOpacity();
    });
  } else {
    console.error("No cards available in the carousel");
  }
};
