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
console.log();

function displayPosts(posts, container) {
  posts.forEach((post) => {
    // Checking for image URL existence, replace with placeholder if not found
    const imgSrc =
      post.yoast_head_json && post.yoast_head_json.og_image
        ? post.yoast_head_json.og_image[0].url
        : "../assets/img/clement-delhaye-cnluLIyhpBA-unsplash-qhd-lossy.webp";

    container.innerHTML += `<div class="card-container">
            <img src="${imgSrc}" alt="" class="card-img" />
            <div class="card-copy">
              <h3>${post.title.rendered}</h3>
              <p>${post.excerpt.rendered}</p>
            </div>
          </div>`;
  });
}

async function handlePosts(container) {
  try {
    const posts = await fetchPosts(container);
    console.log(posts);

    displayPosts(posts, container);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

handlePosts(postWrapper);
