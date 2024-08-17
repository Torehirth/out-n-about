import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";

// mobile hamburger menu
toggleMobileNav();
// blog post carousel
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

// ---------
// fetch blog post
// render blog post
// display blog post

import { getQueryParameter } from "../helper/getQueryParameter.mjs";
import { apiUrl } from "../data/constants.mjs";
const id = getQueryParameter("id");

const fetchPost = async () => {
  if (!id) {
    // redirect to all articles if id is falsy
    document.location.href = "../articles/index.html";
  }

  try {
    const response = await fetch(`${apiUrl}/${id}`);

    if (!response.ok) {
      throw new Error("There was an error fetching the post");
    }

    const post = await response.json();

    const title = post.title.rendered;
    document.title = title;

    return post;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the post.. Try again shortly!");
  }
};

fetchPost();

// const updatePageTitle = (newTitle) => {
//   document.title = newTitle;
// };
