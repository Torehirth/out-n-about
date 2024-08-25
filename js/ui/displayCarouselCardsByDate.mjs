import { displayDynamicDate } from "../components/displayDynamicDate.mjs";
import { createPostImage } from "../components/createPostImage.mjs";
import { cleanText } from "../components/cleanText.mjs";

export const displayCarouselCardsByDate = (container, posts, numberOfPosts) => {
  container.innerHTML = "";
  // using the sort method and the new Date constructor to display the posts in descending order (latest post first). (reverse: (a-b))
  // as default the WP API shows the last made posts first, but I'm adding this as backup.
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // using the slice method to change the number of posts I want to display in the carousel.
  const limitedPosts = posts.slice(0, numberOfPosts);

  limitedPosts.forEach((post) => {
    const outerCardContainer = document.createElement("div");
    container.appendChild(outerCardContainer);
    outerCardContainer.id = "carousel-cards";

    // console.log(post);

    const postLink = document.createElement("a");
    postLink.classList.add("post-carousel-card");
    outerCardContainer.appendChild(postLink);
    postLink.href = `../article/index.html?id=${post.id}`;

    // calling the createPostImage function her to assign its properties to the variable
    const img = createPostImage(post, "post-carousel-card-img");
    postLink.appendChild(img);
    img.loading = "lazy";

    // image hover effect
    if (
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(0.98)";
        img.style.transition = "transform ease 0.3s";
      })
    );
    else {
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        img.style.transition = "transform ease 0.3s";
      });
    }

    const postDate = document.createElement("p");
    postLink.appendChild(postDate);
    postDate.classList.add("post-date");
    // displaying the users local timezone, but only shows date
    postDate.textContent = displayDynamicDate(post.date_gmt);

    const textWrapper = document.createElement("div");
    postLink.appendChild(textWrapper);
    textWrapper.classList.add("post-carousel-card-copy");

    const cardTitle = document.createElement("h4");
    textWrapper.appendChild(cardTitle);
    // calling the cleanText function to get rid of html tags and replacing html entities with apostrophe(')
    cardTitle.textContent = cleanText(post.title.rendered);

    const cardParagraph = document.createElement("p");
    textWrapper.appendChild(cardParagraph);
    // calling the cleanText function to get rid of html tags and replacing html entities with apostrophe(')
    cardParagraph.textContent = cleanText(post.excerpt.rendered);
  });
};
