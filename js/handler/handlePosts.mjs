import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { message } from "../components/message.mjs";
import { displayPosts } from "../ui/displayPosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// handle posts function, displaying 10 posts initially then 10 more on each click.
// The function fetches all posts if the allPosts array is empty, then displays the posts.
let allPosts = []; // empty array to store all posts
let currentIndex = 0; // index to keep track of the current post
const postsPerPage = 10; // Number of posts to display per page
const loadMoreBtn = document.querySelector("#load-btn");

export async function handlePosts(container) {
  try {
    loadMoreBtn.disabled = true;

    if (allPosts.length === 0) {
      allPosts = await fetchAllPosts(postWrapper);
    }
    // using slice method to set how many posts that are displayed and the next set of posts. It starts from currentIndex and goes up to currentIndex + postPerPage ( 0, 0 + 10 => 10, 10 + 10 .. (in other words: first 0-10 then 10-20 and so on til max posts))
    const postsToDisplay = allPosts.slice(currentIndex, currentIndex + postsPerPage);

    // calling the function that render html for the cards
    displayPosts(postsToDisplay, postWrapper);

    //  after displaying the posts, the currentIndex is incremented by postsPerPage. this updates the index so the next time posts are loaded, it knows where to start
    currentIndex += postsPerPage;

    // hide the button when theres no more posts
    if (currentIndex >= allPosts.length) {
      loadMoreBtn.classList.add("is-hidden");
    } else {
      // enable button if it is more posts
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
