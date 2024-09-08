import { createPostImage } from "../components/createPostImage.mjs";
import { cleanText } from "../helper/cleanText.mjs";

export function createNewsArticleElements(container, posts) {
  // remove the loading indicator when loaded
  container.innerHTML = "";

  // using the sort method and the new Date constructor to display the posts in descending order (latest post first). (reverse: (a-b))
  // as default the WP API shows the last made posts first, but I'm adding this as backup or to show how.
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // using the slice(start, end) method to display only the latest post
  const latestPost = posts.slice(0, 1);

  latestPost.forEach((post) => {
    // creating and appending all html elements.
    const newsCard = document.createElement("div");
    newsCard.classList.add("card-container");
    container.appendChild(newsCard);

    // calling the createPostImage function her to assign its properties to the variable
    const img = createPostImage(post, "card-img", "medium_large");
    newsCard.appendChild(img);

    const cardCopy = document.createElement("div");
    cardCopy.classList.add("card-copy");
    newsCard.appendChild(cardCopy);

    const headlineContent = document.createElement("h3");
    // calling the cleanText function to get rid of html tags and replacing html entities with apostrophe(')
    headlineContent.textContent = cleanText(post.title.rendered);
    cardCopy.appendChild(headlineContent);

    const paragraphContent = document.createElement("p");
    // calling the cleanText function to get rid of html tags and replacing html entities with apostrophe(')
    paragraphContent.textContent = cleanText(post.excerpt.rendered);
    cardCopy.appendChild(paragraphContent);

    const articleButton = document.createElement("a");
    articleButton.href = `../article/index.html?id=${post.id}`;
    articleButton.classList.add("plain-text-btn", "news-btn");
    articleButton.type = "button";
    articleButton.textContent = "Read more";
    // calling the cleanText function to get rid of html tags and replacing html entities with apostrophe(')
    articleButton.title = cleanText(post.title.rendered);
    cardCopy.appendChild(articleButton);

    const buttonIcon = document.createElement("span");
    buttonIcon.classList.add("font-weight-7", "material-symbols-sharp");
    buttonIcon.textContent = "keyboard_arrow_right";
    articleButton.appendChild(buttonIcon);

    // navigating to the post after clicking on the newsCard container (the whole news card)
    const navigateTo = () => {
      document.location.href = `../article/index.html?id=${post.id}`;
    };
    newsCard.onclick = navigateTo;
  });
}
