import { setAllPosts, setCurrentIndex, handlePosts } from "./handlePosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// function for filtering posts by category on articles.html
export function filterPostsByCategory(categoryId) {
  // Reset currentIndex and allPosts for new category to display only chosen category
  // calling the setter functions to change the currentIndex and allPosts variable from handlePosts function (treated as constant variables when imported).
  setCurrentIndex(0);
  setAllPosts([]);

  handlePosts(postWrapper, categoryId);
}
