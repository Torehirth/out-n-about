import { cleanText } from "../components/cleanText.mjs";
import { createPostImage } from "../components/createPostImage.mjs";

// display posts function
export function displayPosts(posts, container) {
  posts.forEach((post) => {
    const cleanHeadline = cleanText(post.title.rendered);
    const cleanExcerpt = cleanText(post.excerpt.rendered);

    const postLink = document.createElement("a");
    postLink.href = `../article/index.html?id=${post.id}`;

    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    const img = createPostImage(post, "article-card-img");
    articleCard.appendChild(img);

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
