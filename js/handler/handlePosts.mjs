import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { message } from "../components/message.mjs";
import { displayPosts } from "../ui/displayPosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// handle posts function, displaying 10 posts initially then 10 more on each click.
// The function fetches all posts if the allPosts array is empty, then displays the posts.
export let allPosts = []; // empty array to store all posts
export let currentIndex = 0; // index to keep track of the current post
export const postsPerPage = 10; // Number of posts to display per page
export const loadMoreBtn = document.querySelector("#load-btn");

export async function handlePosts(container) {
  try {
    loadMoreBtn.disabled = true;

    if (allPosts.length === 0) {
      allPosts = await fetchAllPosts(container);
    }

    const postsToDisplay = allPosts.slice(currentIndex, currentIndex + postsPerPage);

    displayPosts(postsToDisplay, container);

    currentIndex += postsPerPage;

    if (currentIndex >= allPosts.length) {
      loadMoreBtn.classList.add("is-hidden");
    } else {
      loadMoreBtn.disabled = false;
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}
loadMoreBtn.addEventListener("click", () => {
  handlePosts(postWrapper);
});
