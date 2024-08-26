import { newsWrapper } from "../data/constants.mjs";
import { message } from "../components/message.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { createNewsArticleElements } from "../components/createNewsArticleElements.mjs";

export const displayNewsArticle = async () => {
  try {
    const posts = await fetchAllPosts();

    createNewsArticleElements(newsWrapper, posts);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "something went wrong displaying the news article");
  }
};
