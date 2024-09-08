import { loadMoreWrapper } from "../handler/handlePosts.mjs";
import { allPosts } from "../handler/handlePosts.mjs";
import { filterPostsByCategory } from "../handler/filterPostsByCategory.mjs";

// highlight the category buttons and update headline to category name
export const handleCategoryButtons = () => {
  const buttons = document.querySelectorAll(".category-button");
  const headline = document.querySelector(".main-heading");
  const allPostsButton = document.querySelector(".all-posts-btn.all-posts-btn");
  // call the function with categoryId for all posts initially to display all posts and highlight the "All" category button.
  filterPostsByCategory("31");
  // highlight the "All" button initially
  allPostsButton.classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Get the category ID from the data attribute
      const categoryId = button.getAttribute("data-category-id");

      // change the h1 to display the category name
      // using parentElement to get the button target when clicking the span (or other elements)
      if (event.target.type === "button" || event.target.parentElement.type === "button") {
        // using firstChild.nodeValue to get only the button element text, excluding the span element
        headline.textContent = event.target.closest("button").firstChild.nodeValue.trim();
      }

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

        if (categoryId === "31") {
          // highlight the "All" button when clicked
          allPostsButton.classList.add("active");
          // change the h1 to display the category name
          headline.textContent = "All articles";
          // display "load more" button when "all" category is clicked
          loadMoreWrapper.classList.remove("is-hidden");
        }

        // display the "load more" button if category has more than 10 posts
        if (allPosts.length >= 10) {
          loadMoreWrapper.classList.remove("is-hidden");
        }

        // Call the function to filter posts by the selected category
        filterPostsByCategory(categoryId);
      }
    });
  });
};

// ID number for the specific categories.
// ID 31 = all articles
// ID 12 = climbing
// ID 28 = fly fishing
// ID 8 = outdoor adventure
// ID 13 = skiing
// ID 6 = travel
// // ID 30 = france
// // ID 10 = italy
// // ID 9 = norway
// // ID 11 = spain
// // ID 29 = thailand
