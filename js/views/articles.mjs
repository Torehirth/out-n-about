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
  const allPostsButton = document.querySelector(".category-button all-posts-btn");

  // call the function without categoryId initially to display all posts.
  filterPostsByCategory("31");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the category ID from the data attribute
      const categoryId = button.getAttribute("category-id");

      // Check if the button already has the class "active"
      if (button.classList.contains("active")) {
        // If it has, remove the class "active" (styling)
        button.classList.remove("active");
        // Optionally, you might want to reset to show all posts if no category is active
        filterPostsByCategory("31");
        // display the "load more" button when category button is clicked twice(deactivated)
        loadMoreWrapper.classList.remove("is-hidden");
      } else {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Add class "active" to clicked button
        button.classList.add("active");

        // to get the "All" category button display the "load more" button on the bottom
        if (categoryId === "") {
          loadMoreWrapper.classList.remove("is-hidden");
        }

        // Call the function to filter posts by the selected category
        filterPostsByCategory(categoryId);
      }
    });
  });
});
