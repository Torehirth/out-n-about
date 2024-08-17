import { apiUrl } from "../data/constants.mjs";
import { message } from "../components/message.mjs";

// Fetching all posts function
export async function fetchAllPosts(container) {
  try {
    const response = await fetch(`${apiUrl}?&per_page=15&_embed`);

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
