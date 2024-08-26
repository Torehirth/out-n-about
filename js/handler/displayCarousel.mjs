import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { carousel } from "../data/constants.mjs";
import { scrollCarouselByDrag } from "../handler/scrollCarouselByDrag.mjs";
import { handleCarouselFunctionality } from "../handler/handleCarouselFunctionality.mjs";

// calling the carousel functions after the posts have loaded.
export const displayCarousel = async () => {
  try {
    await fetchAllPosts(carousel);

    handleCarouselFunctionality();
    scrollCarouselByDrag(carousel);
  } catch (error) {
    console.error(error, "something went wrong fetching latest posts");
  }
};
