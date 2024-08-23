import { getQueryParameter } from "../helper/getQueryParameter.mjs";
import { apiUrl } from "../data/constants.mjs";
const id = getQueryParameter("id");

export const fetchPost = async (container) => {
  if (!id) {
    // redirect to all articles if postId is falsy
    document.location.href = "../articles/index.html";
  }
  try {
    const response = await fetch(`${apiUrl}/${id}?_embed`);

    if (!response.ok) {
      throw new Error("There was an error fetching the post");
    }

    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong fetching the post.. Try again shortly!");
  }
};
