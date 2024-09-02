import { baseURL } from "../data/constants.mjs";
import { message } from "../components/message.mjs";

// Fetching all posts function with categoryId as empty by default
export async function fetchAllPosts(container, categoryId = "") {
  // checks if categoryId is truthy/false, returns id if truthy or empty if falsy.
  const categoryParameter = categoryId ? `categories=${categoryId}` : "";
  // posts per page
  const perPage = 20;
  // URL with per page -, categories -and embed parameter.
  const apiURL = `${baseURL}?per_page=${perPage}&${categoryParameter}&_embed`;
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("There was an error fetching the posts");
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}
