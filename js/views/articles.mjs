import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../utils/cardHoverEffect.mjs";

toggleMobileNav();
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

import { message } from "../components/message.mjs";
import { allPostsURL } from "../data/constants.mjs";

export async function fetchPosts(container) {
  try {
    const response = await fetch(allPostsURL);
    if (!response.ok) {
      throw new Error("there was an error fetching the posts");
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

const postWrapper = document.querySelector("#posts-wrapper");

postWrapper.innerHTML = "";

function displayPosts(posts, container) {
  posts.forEach((post) => {
    console.log(post);

    // replaces the html tags in the excerpt with an empty string
    const cleanText = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    container.innerHTML += `
                            <a href="../article/index.html?id=${post.id}">
                              <div class="article-card">
                                <img src="${post._embedded["wp:featuredmedia"][0].link}" alt="" class="article-card-img" />
                                <div class="article-card-copy">
                                  <h4>${post.title.rendered}</h4>
                                  <p>${cleanText}</p>
                                </div>
                              </div>
                            </a>
                         `;
  });
}

async function handlePosts(container) {
  try {
    const posts = await fetchPosts(container);
    displayPosts(posts, container);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

handlePosts(postWrapper);

console.log(document.title);
