import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { message } from "../components/message.mjs";
import { displayPosts } from "../ui/displayPosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// handle posts function, displaying 10 posts initially then 10 more on each click.
// The function fetches all posts if the allPosts array is empty, then displays the posts.
export let allPosts = []; // empty array to store all posts
let currentIndex = 0; // index to keep track of the current post
const postsPerPage = 10; // Number of posts to display per page
const loadMoreBtn = document.querySelector("#load-btn");
export const loadMoreWrapper = document.querySelector(".load-btn-wrapper");

// clear the loading indicator after the posts are loaded.
postWrapper.innerHTML = "";
// adding the default parameter for "all articles" category to the argument
export async function handlePosts(container, categoryId = "31") {
  try {
    loadMoreBtn.disabled = true;

    // Clear container before loading new posts
    if (currentIndex === 0) {
      container.innerHTML = ""; // Clear the container if starting over
    }

    if (allPosts.length === 0) {
      allPosts = await fetchAllPosts(container, categoryId);
    }
    // using slice method to set how many posts that are displayed and the next set of posts. It starts from currentIndex and goes up to currentIndex + postPerPage ( 0, 0 + 10 => 10, 10 + 10 .. (in other words: first 0-10 then 10-20 and so on til max posts))
    const postsToDisplay = allPosts.slice(currentIndex, currentIndex + postsPerPage);

    // calling the function that render html for the cards
    displayPosts(postsToDisplay, container);

    //  after displaying the posts, the currentIndex is incremented by postsPerPage. this updates the index so the next time posts are loaded, it knows where to start
    currentIndex += postsPerPage;

    console.log("posts: ", allPosts);

    console.log("index: ", currentIndex);

    // hide the button when theres no more posts
    if (currentIndex >= allPosts.length) {
      loadMoreWrapper.classList.add("is-hidden");
    } else {
      // enable button if it is more posts
      loadMoreBtn.disabled = false;
    }
  } catch (error) {
    console.error(error);
    postWrapper.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}
loadMoreBtn.addEventListener("click", () => {
  handlePosts(postWrapper);
});

// function for filtering posts by category on articles.html
export function filterPostsByCategory(categoryId) {
  // Reset currentIndex and allPosts for new category to display only chosen category
  currentIndex = 0;
  allPosts = [];

  handlePosts(postWrapper, categoryId);
}
