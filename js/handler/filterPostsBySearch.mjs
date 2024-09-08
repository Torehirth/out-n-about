// ----- search functionality -------
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCards } from "../ui/displayCards.mjs";
import { searchContentContainer, searchInput, mainContainer } from "../data/constants.mjs";
import { message } from "../components/message.mjs";

export const filterPostsBySearch = async (container) => {
  try {
    // fetch all posts
    const posts = await fetchAllPosts(container);

    // filter posts based on current search input value
    searchInput.addEventListener("input", (e) => {
      // get the search input values from the search bar
      const searchValue = e.target.value.toLowerCase().trim();
      // filter the content of the posts by the search value
      const filteredPosts = posts.filter((post) => post.content.rendered.toLowerCase().trim().includes(searchValue));

      if (searchValue.length) {
        // if the search value has a "length" show the content container, hide it if not
        searchContentContainer.classList.remove("is-hidden");
        // lowers the opacity on "main" HTML element when search content is showing
        mainContainer.style.opacity = "0.2";
      } else {
        searchContentContainer.classList.add("is-hidden");
        // sets the opacity back to 1 when no content is showing
        mainContainer.style.opacity = "1";
      }

      if (filteredPosts.length) {
        // clear container for posts after each event to only display posts that includes search value
        container.innerHTML = "";
        // if there is posts that includes the search value, display them.
        displayCards(filteredPosts, container);
      } else {
        // show a message that there is no posts by that search value
        container.innerHTML = message("info", `No posts found by search value: ${searchValue}`);
      }
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "something went wrong filtering the posts by search");
  }
};
