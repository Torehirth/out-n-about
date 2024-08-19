import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";

// mobile hamburger menu
toggleMobileNav();
// blog post carousel
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

import { getQueryParameter } from "../helper/getQueryParameter.mjs";
import { apiUrl } from "../data/constants.mjs";
const id = getQueryParameter("id");

export default class BlogPost {
  constructor(apiUrl, id) {
    this.apiUrl = apiUrl;
    this.id = id;
    this.container = document.getElementById("blog-post-container");
    this.init();
  }

  async init() {
    if (!this.id) {
      this.redirectToAllArticles();
      return;
    }

    try {
      const post = await this.fetchPost();
      this.handlePost(post);
    } catch (error) {
      this.handleError(error);
    }
  }

  async fetchPost() {
    const response = await fetch(`${this.apiUrl}/${this.id}?_embed`);

    if (!response.ok) {
      throw new Error("There was an error fetching the post");
    }
    return response.json();
  }

  handlePost(post) {
    console.log(post);
    this.updateDocumentTitle(post.title.rendered);
    this.updateUrlWithTitle(post.title.rendered);
    this.renderPost(post);
  }

  // changing the document title to the article title
  updateDocumentTitle(title) {
    document.title = `${title} | Out n' About`;
  }

  updateUrlWithTitle(title) {
    // getting the pathname
    const currentUrl = window.location.pathname;
    // regex to change out the "%20" with "-"(hyphen)
    const hyphenatedTitle = title.replace(/\s+/g, "-");
    // appending the title as a query parameter
    const updatedUrl = `${currentUrl}?title=${hyphenatedTitle}`;
    // updates the url pathname without reloading the page
    history.replaceState(null, " ", updatedUrl);
  }

  renderPost(post) {
    // using the "new RegExp()" constructor for excluding the HTML-tags and "&#8217" (apostrophe) entity from the response.
    this.updatePostTitle(post.title.rendered.replace(new RegExp("&#8217;", "g"), "'"));
    this.updatePostExcerpt(post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'"));

    // checks if image path exists, if not it displays placeholder image, if it does it calls the updatePostImage function
    if (
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0] &&
      post._embedded["wp:featuredmedia"][0].source_url
    ) {
      this.updatePostImage(post._embedded["wp:featuredmedia"][0].source_url);
    } else {
      this.updatePostImage("../assets/img/placeholder.webp");
    }

    this.updatePostContent(post.content.rendered);
  }

  updatePostTitle(title) {
    this.container.querySelector("h1").textContent = title;
  }

  updatePostExcerpt(excerpt) {
    this.container.querySelector(".headline-wrapper p").textContent = excerpt || "";
  }

  updatePostImage(imageUrl) {
    this.container.querySelector(".post-img").src = imageUrl || "../assets/img/placeholder.webp";
  }

  updatePostContent(content) {
    const plainText = content.replace(/<\/?[^>]+(>|$)/g, "");
    this.container.querySelector(".sub-text-container").textContent = plainText;
    console.log(content);
  }

  redirectToAllArticles() {
    document.location.href = "../articles/index.html";
  }

  handleError(error) {
    console.error(error);
    this.container.innerHTML = this.showMessage("error", "Something went wrong displaying the post. Try again shortly!");
  }

  showMessage(type, message) {
    return `<div class="${type}">${message}</div>`;
  }
}

let Article = new BlogPost(apiUrl, id);
console.log(Article);

// const fetchPost = async () => {
//   if (!id) {
//     // redirect to all articles if id is falsy
//     // document.location.href = "../articles/index.html";
//   }

//   try {
//     const response = await fetch(`${apiUrl}/${id}`);

//     if (!response.ok) {
//       throw new Error("There was an error fetching the post");
//     }

//     const post = await response.json();

//     // changing the document title to the article title
//     const postTitle = post.title.rendered;
//     updateDocumentTitle(postTitle);
//     // updating the URL pathname with the article title
//     updateUrlWithTitle(postTitle);

//     displaySinglePost(post);

//     return post;
//   } catch (error) {
//     console.error(error);
//     container.innerHTML = message("error", "Something went wrong displaying the post.. Try again shortly!");
//   }
// };

// fetchPost();

// export const updateUrlWithTitle = (articleTitle) => {
//   // getting the pathname
//   const currentUrl = window.location.pathname;
//   // regex to change out the "%20" with "-"(hyphen)
//   const hyphenatedTitle = articleTitle.replace(/\s+/g, "-");
//   // appending the title as a query parameter
//   const updatedUrl = `${currentUrl}?title=${hyphenatedTitle}`;
//   // updates the url pathname without reloading the page
//   history.replaceState(null, " ", updatedUrl);
// };

// // changing the document title to the article title + website name
// export const updateDocumentTitle = (articleTitle) => {
//   document.title = `${articleTitle} | Out 'n About`;
// };

// export const displaySinglePost = (blogPost) => {
//   const postContainer = document.querySelector("#blog-post-section");

//   if (!postContainer) {
//     container.innerHTML = message("error", "Something went wrong displaying the post");
//     console.error(`Container with ID ${containerId} not found`);
//     return;
//   }

//   const backBtn = headlineWrapper;
//   headline;
//   intro;
//   postImg;
//   subTextContainer;
//   subTextWrappers;
//   subTextHeadings;
//   paragraphs;

//   // append post to the right element
//   console.log(blogPost);
// };
