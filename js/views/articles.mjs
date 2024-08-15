import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";

toggleMobileNav();

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

export function displayPosts(posts, container) {
  postWrapper.innerHTML = "";
  posts.forEach((post) => {
    // the first replaces the html tags in excerpt with an empty string, the second replaces the html entity &#8217; with an apostrophe
    const cleanHeadline = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");
    const cleanText = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");

    const a = document.createElement("a");
    a.href = `../article/index.html?id=${post.id}`;

    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    // Error handling for featured media
    if (
      // checking if the object has the right path and if the path is not empty
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0] &&
      post._embedded["wp:featuredmedia"][0].link &&
      post._embedded["wp:featuredmedia"][0].alt_text
    ) {
      const img = document.createElement("img");
      img.src = post._embedded["wp:featuredmedia"][0].link;
      img.alt = post._embedded["wp:featuredmedia"][0].alt_text;
      img.title = cleanText;
      img.classList.add("article-card-img");
      articleCard.appendChild(img);
    } else {
      console.error("Missing or invalid featured media for post:", post);
      // adding a placeholder image if one of the paths is invalid
      const img = document.createElement("img");
      img.src = "../assets/img/image-2935360_1280.webp";
      img.alt = "no image available";
      img.classList.add("article-card-img");
      articleCard.appendChild(img);
    }

    const articleCardCopy = document.createElement("div");
    articleCardCopy.classList.add("article-card-copy");

    const h4 = document.createElement("h4");
    h4.textContent = cleanHeadline;

    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("card-p-wrapper");

    const p = document.createElement("p");
    p.textContent = cleanText;

    articleCardCopy.appendChild(h4);
    articleCardCopy.appendChild(paragraphContainer);
    paragraphContainer.appendChild(p);

    articleCard.appendChild(articleCardCopy);
    a.appendChild(articleCard);
    container.appendChild(a);
  });
}

export async function handlePosts(container) {
  try {
    const posts = await fetchPosts(container);
    displayPosts(posts, container);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

handlePosts(postWrapper);
