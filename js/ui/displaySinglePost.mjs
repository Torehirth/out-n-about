import { renderPost } from "../components/article/renderPost.mjs";
import { fetchPost } from "../api/fetchPost.mjs";
import { message } from "../components/message.mjs";
import { postContainer } from "../data/constants.mjs";
import { updateDocumentTitle, updateUrlWithTitle } from "../helper/updateTitles.mjs";
import { getQueryParameter } from "../helper/getQueryParameter.mjs";

export const displaySinglePost = async (container) => {
  // clear the loading indicator after the post is loaded.
  container.innerHTML = "";
  try {
    // getting json response and assigning it as post
    const post = await fetchPost(postContainer);

    // changing the document title to the article title
    const postTitle = post.title.rendered;
    updateDocumentTitle(postTitle);

    // updating the URL pathname with the article title
    updateUrlWithTitle(getQueryParameter("id"), postTitle, postContainer);
    console.log(post);

    // calls the render post function
    renderPost(post, postContainer);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the post");
  }
};
