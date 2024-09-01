import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer, postWrapper } from "../data/constants.mjs";
// import { filterPostsByCategory } from "../handler/handlePosts.mjs";
// trying to increase loading speeds in terms of Lighthouse statistics
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();
});

// toggling mobile nav
toggleMobileNav();
// fetching and displaying posts
// handlePosts(postWrapper, categoryId);

// scroll to header by "to top button"
scrollToSectionByClick(toTopButtonWrapper, headerContainer);

import { filterPostsByCategory, loadMoreWrapper } from "../handler/handlePosts.mjs";
// const loadMoreWrapper = document.querySelector(".load-btn-wrapper");

// add clicked look on the category buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#category-button");
  const headline = document.querySelector(".main-heading");

  const allPostsButton = document.querySelector(".all-posts-btn.all-posts-btn");
  allPostsButton.classList.add("active");

  // call the function with categoryId for all posts initially to display all posts and highlight the "All" category button.
  filterPostsByCategory("31");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Get the category ID from the data attribute
      const categoryId = button.getAttribute("category-id");
      // change the h1 to display the category name
      headline.textContent = event.target.textContent;

      // Check if the category buttons already has the class "active"
      if (button.classList.contains("active")) {
        // If it has, remove the class "active" (styling)
        button.classList.remove("active");
        // and add class to "All" category button.
        allPostsButton.classList.add("active");
        // change the h1 to display the category name
        headline.textContent = "All articles";
        // call the function to reset to show all posts if no category is active
        filterPostsByCategory("31");
        // display the "load more" button when category button is clicked twice(deactivated)
        loadMoreWrapper.classList.remove("is-hidden");
      } else {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add class "active" to clicked button
        button.classList.add("active");
        // and remove from "All" category button.
        allPostsButton.classList.remove("active");
        // to get the "All" category button display the "load more" button on the bottom
        if (categoryId === "31") {
          loadMoreWrapper.classList.remove("is-hidden");
          // highlight the "All" button when clicked
          allPostsButton.classList.add("active");
          // change the h1 to display the category name
          headline.textContent = "All articles";
        }
        // Call the function to filter posts by the selected category
        filterPostsByCategory(categoryId);
      }
    });
  });
});
