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

// import { getQueryParameter } from "../helper/getQueryParameter.mjs";
// import { apiUrl } from "../data/constants.mjs";
// const id = getQueryParameter("id");
// const postContainer = document.querySelector("#blog-post-container");

// export default class BlogPost {
//   constructor(apiURL, postId, container) {
//     this.apiURL = apiURL;
//     this.postId = postId;
//     this.container = container;
//     this.init();
//   }

//   async init() {
//     if (!this.postId) {
//       this.redirectToAllArticles();
//       return;
//     }

//     try {
//       const post = await this.fetchPost();
//       this.handlePost(post);
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async fetchPost() {
//     const response = await fetch(`${this.apiURL}/${this.postId}?_embed`);

//     if (!response.ok) {
//       throw new Error("There was an error fetching the post");
//     }
//     return response.json();
//   }

//   handlePost(post) {
//     console.log(post);
//     this.updateDocumentTitle(post.title.rendered);
//     this.updateUrlWithTitle(post.title.rendered);
//     this.renderPost(post);
//   }

//   // changing the document title to the article title
//   updateDocumentTitle(title) {
//     document.title = `${title} | Out n' About`;
//   }

//   updateUrlWithTitle(title) {
//     // getting the pathname
//     const currentUrl = window.location.pathname;
//     // regex to change out the "%20" with "-"(hyphen)
//     const hyphenatedTitle = title.replace(/\s+/g, "-");
//     // appending the title as a query parameter
//     const updatedUrl = `${currentUrl}?title=${hyphenatedTitle}`;
//     // updates the url pathname without reloading the page
//     history.replaceState(null, " ", updatedUrl);
//   }

//   renderPost(post) {
//     // using the "new RegExp()" constructor for excluding the HTML-tags and "&#8217" (apostrophe) entity from the response.
//     this.updatePostTitle(post.title.rendered.replace(new RegExp("&#8217;", "g"), "'"));
//     this.updatePostExcerpt(post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'"));

//     // checks if image path exists, if not it displays placeholder image, if it does it calls the updatePostImage function
//     if (
//       post._embedded &&
//       post._embedded["wp:featuredmedia"] &&
//       post._embedded["wp:featuredmedia"][0] &&
//       post._embedded["wp:featuredmedia"][0].source_url
//     ) {
//       this.updatePostImage(post._embedded["wp:featuredmedia"][0].source_url);
//     } else {
//       this.updatePostImage("../assets/img/placeholder.webp");
//     }

//     this.updatePostContent(post.content.rendered);
//   }

//   updatePostTitle(title) {
//     this.container.querySelector("h1").textContent = title;
//   }

//   updatePostExcerpt(excerpt) {
//     this.container.querySelector(".headline-wrapper p").textContent = excerpt || "";
//   }

//   updatePostImage(imageUrl) {
//     this.container.querySelector(".post-img").src = imageUrl || "../assets/img/placeholder.webp";
//   }

//   updatePostContent(content) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(content, "text/html");
//     const plainText = doc.body.innerText;
//     // const plainText = content.replace(/<\/?[^>]+(>|$)/g, "");
//     this.container.querySelector(".sub-text-container").textContent = plainText;
//     console.log(content);
//   }

//   redirectToAllArticles() {
//     document.location.href = "../articles/index.html";
//   }

//   handleError(error) {
//     console.error(error);
//     this.container.innerHTML = this.showMessage("error", "Something went wrong displaying the post. Try again shortly!");
//   }

//   showMessage(type, message) {
//     return `<div class="${type}">${message}</div>`;
//   }
// }

// let Article = new BlogPost(apiUrl, id, postContainer);
// console.log(Article);

// -----------------------------------------------------------------------

import { getQueryParameter } from "../helper/getQueryParameter.mjs";
import { apiUrl } from "../data/constants.mjs";
const id = getQueryParameter("id");
const postContainer = document.querySelector("#blog-post-container");

export default class BlogPost {
  constructor(apiURL, postId, container) {
    this.apiURL = apiURL;
    this.postId = postId;
    this.container = container;
    this.init();
  }

  async init() {
    if (!this.postId) {
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
    const response = await fetch(`${this.apiURL}/${this.postId}?_embed`);

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
    // Clear existing content
    this.container.innerHTML = "";

    // Create elements
    const backLink = this.createBackLink();
    const headlineWrapper = this.createHeadlineWrapper();
    const postImage = this.createPostImage();
    const subTextContainer = this.createSubTextContainer();

    // Append elements to the container
    this.container.appendChild(headlineWrapper);
    this.container.appendChild(postImage);
    this.container.appendChild(subTextContainer);

    // Now, update the content within the newly created elements
    this.updatePostTitle(post.title.rendered.replace(new RegExp("&#8217;", "g"), "'"));
    this.updatePostExcerpt(post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'"));
    this.updatePostImage(post._embedded["wp:featuredmedia"][0].source_url || "../assets/img/placeholder.webp");

    // Update the sub-text content
    this.updatePostContent(post.content.rendered);
  }

  createBackLink() {
    const backLink = document.createElement("a");
    backLink.id = "back-btn";
    backLink.classList.add("plain-text-btn");
    backLink.href = "../articles/index.html";
    backLink.innerHTML = `
            <span class="font-weight-7 material-symbols-sharp">keyboard_arrow_left</span>Back to articles
        `;
    return backLink;
  }

  createHeadlineWrapper() {
    const headlineWrapper = document.createElement("div");
    headlineWrapper.classList.add("headline-wrapper");

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    headlineWrapper.appendChild(h1);
    headlineWrapper.appendChild(p);

    return headlineWrapper;
  }

  createPostImage() {
    const postImage = document.createElement("img");
    postImage.classList.add("post-img");
    postImage.alt = "Lorem";
    return postImage;
  }

  createSubTextContainer() {
    const subTextContainer = document.createElement("div");
    subTextContainer.classList.add("sub-text-container");

    for (let i = 0; i < 2; i++) {
      const subTextWrapper = document.createElement("div");
      subTextWrapper.classList.add("sub-text-wrapper");

      const h3 = document.createElement("h3");
      subTextWrapper.appendChild(h3);

      for (let j = 0; j < 3; j++) {
        const p = document.createElement("p");
        subTextWrapper.appendChild(p);
      }

      subTextContainer.appendChild(subTextWrapper);
    }

    return subTextContainer;
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
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    // Assuming your content has two `<h3>` sections you want to populate
    const h3Elements = doc.querySelectorAll("h3");
    const pElements = doc.querySelectorAll("p");

    if (h3Elements.length >= 2 && pElements.length >= 6) {
      this.container.querySelector(".sub-text-wrapper:first-of-type h3").textContent = h3Elements[0].textContent;
      this.container.querySelector(".sub-text-wrapper:last-of-type h3").textContent = h3Elements[1].textContent;

      const firstWrapperParagraphs = this.container.querySelectorAll(".sub-text-wrapper:first-of-type p");
      const secondWrapperParagraphs = this.container.querySelectorAll(".sub-text-wrapper:last-of-type p");

      for (let i = 0; i < 3; i++) {
        firstWrapperParagraphs[i].textContent = pElements[i].textContent;
        secondWrapperParagraphs[i].textContent = pElements[i + 3].textContent;
      }
    } else {
      // Handle cases where the expected content structure isn't found
      console.error("Unexpected content structure. Unable to update sub-text.");
    }
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

new BlogPost(apiUrl, id, postContainer);

// ---------------------------------------------------------------------

// const fetchPost = async () => {
//   if (!postId) {
//     // redirect to all articles if postId is falsy
//     // document.location.href = "../articles/index.html";
//   }

//   try {
//     const response = await fetch(`${apiURL}/${postId}`);

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
//     console.error(`Container with postId ${containerpostId} not found`);
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
