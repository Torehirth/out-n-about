import { cleanText } from "../components/cleanText.mjs";
import { createPostImage } from "../components/createPostImage.mjs";
import { displayDynamicDate } from "../components/displayDynamicDate.mjs";

// display posts function
export function displayPosts(posts, container) {
  posts.forEach((post) => {
    const cleanHeadline = cleanText(post.title.rendered);
    const cleanExcerpt = cleanText(post.excerpt.rendered);

    const postLink = document.createElement("a");
    postLink.href = `../article/index.html?id=${post.id}`;

    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    const img = createPostImage(post, "article-card-img", "medium_featured");
    articleCard.appendChild(img);

    const postDate = document.createElement("p");
    articleCard.appendChild(postDate);
    postDate.classList.add("post-date");
    // displaying the users local timezone, but only shows date
    postDate.textContent = displayDynamicDate(post.date_gmt);

    const articleCardCopy = document.createElement("div");
    articleCardCopy.classList.add("article-card-copy");

    const h4 = document.createElement("h4");
    h4.textContent = cleanHeadline;

    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("card-p-wrapper");

    const p = document.createElement("p");
    p.textContent = cleanExcerpt;

    articleCardCopy.appendChild(h4);
    articleCardCopy.appendChild(paragraphContainer);
    paragraphContainer.appendChild(p);

    articleCard.appendChild(articleCardCopy);
    postLink.appendChild(articleCard);
    container.appendChild(postLink);
  });
}
