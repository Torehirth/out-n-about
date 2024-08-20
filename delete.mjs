// import { getQueryParameter } from "../helper/getQueryParameter.mjs";
// import { apiUrl } from "../data/constants.mjs";

// const id = getQueryParameter("id");
// const postContainer = document.querySelector("#blog-post-container");

// function init(apiURL, postId, container) {
//   if (!postId) {
//     redirectToAllArticles();
//     return;
//   }

//   fetchPost(apiURL, postId)
//     .then((post) => handlePost(post, container))
//     .catch((error) => handleError(error, container));
// }

// async function fetchPost(apiURL, postId) {
//   const response = await fetch(`${apiURL}/${postId}?_embed`);
//   if (!response.ok) throw new Error("There was an error fetching the post");
//   return response.json();
// }

// function handlePost(post, container) {
//   updateDocumentTitle(post.title.rendered);
//   updateUrlWithTitle(post.title.rendered);
//   renderPost(post, container);
// }

// function renderPost(post, container) {
//   container.innerHTML = `
//         <div class="headline-wrapper">
//             <h1>${post.title.rendered.replace(/&#8217;/g, "'")}</h1>
//             <p>${post.excerpt.rendered.replace(/<[^>]+>/g, "").replace(/&#8217;/g, "'")}</p>
//         </div>
//         <img class="post-img" src="${post._embedded["wp:featuredmedia"][0].source_url || "../assets/img/placeholder.webp"}" alt="Post Image"/>
//         <div class="sub-text-container">
//             <div class="sub-text-wrapper">
//                 <h3>${getSubText(post.content.rendered, 0)}</h3>
//                 ${getSubParagraphs(post.content.rendered, 3, 3)}
//             </div>
//             <div class="sub-text-wrapper">
//                 <h3>${getSubText(post.content.rendered, 1)}</h3>
//                 ${getSubParagraphs(post.content.rendered, 5, 3)}
//             </div>
//         </div>
//     `;
// }

// function updateDocumentTitle(title) {
//   document.title = `${title} | Out n' About`;
// }

// function updateUrlWithTitle(title) {
//   const currentUrl = window.location.pathname;
//   const hyphenatedTitle = title.replace(/\s+/g, "-");
//   const updatedUrl = `${currentUrl}?title=${hyphenatedTitle}`;
//   history.replaceState(null, " ", updatedUrl);
// }

// function getSubText(content, index) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(content, "text/html");
//   const h3Elements = doc.querySelectorAll("h3");
//   return h3Elements[index] ? h3Elements[index].textContent : "";
// }

// function getSubParagraphs(content, startIndex, count) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(content, "text/html");
//   const pElements = doc.querySelectorAll("p");
//   let paragraphs = "";
//   for (let i = startIndex; i < startIndex + count; i++) {
//     paragraphs += `<p>${pElements[i] ? pElements[i].textContent : ""}</p>`;
//   }
//   return paragraphs;
// }

// function redirectToAllArticles() {
//   document.location.href = "../articles/index.html";
// }

// function handleError(error, container) {
//   console.error(error);
//   container.innerHTML = `<div class="error">Something went wrong displaying the post. Try again shortly!</div>`;
// }

// // Initialize the blog post
// init(apiUrl, id, postContainer);

// ---------------------------------------------------------------

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
//     // Clear existing content
//     this.container.innerHTML = "";

//     // Create elements
//     const headlineWrapper = this.createHeadlineWrapper();
//     const postImage = this.createPostImage();
//     const subTextContainer = this.createSubTextContainer();

//     // Append elements to the container
//     this.container.appendChild(headlineWrapper);
//     this.container.appendChild(postImage);
//     this.container.appendChild(subTextContainer);

//     // Now, update the content within the newly created elements
//     this.updatePostTitle(post.title.rendered.replace(new RegExp("&#8217;", "g"), "'"));
//     this.updatePostExcerpt(post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'"));
//     this.updatePostImage(post._embedded["wp:featuredmedia"][0].source_url || "../assets/img/placeholder.webp");

//     // Update the sub-text content
//     this.updatePostContent(post.content.rendered);
//   }

//   createBackLink() {
//     const backLink = document.createElement("a");
//     backLink.id = "back-btn";
//     backLink.classList.add("plain-text-btn");
//     backLink.href = "../articles/index.html";
//     backLink.innerHTML = `
//             <span class="font-weight-7 material-symbols-sharp">keyboard_arrow_left</span>Back to articles
//         `;
//     return backLink;
//   }

//   createHeadlineWrapper() {
//     const headlineWrapper = document.createElement("div");
//     headlineWrapper.classList.add("headline-wrapper");

//     const h1 = document.createElement("h1");
//     const p = document.createElement("p");

//     headlineWrapper.appendChild(h1);
//     headlineWrapper.appendChild(p);

//     return headlineWrapper;
//   }

//   createPostImage() {
//     const postImage = document.createElement("img");
//     postImage.classList.add("post-img");
//     postImage.alt = "Lorem";
//     return postImage;
//   }

//   createSubTextContainer() {
//     const subTextContainer = document.createElement("div");
//     subTextContainer.classList.add("sub-text-container");

//     for (let i = 0; i < 2; i++) {
//       const subTextWrapper = document.createElement("div");
//       subTextWrapper.classList.add("sub-text-wrapper");

//       const h3 = document.createElement("h3");
//       subTextWrapper.appendChild(h3);

//       for (let j = 0; j < 3; j++) {
//         const p = document.createElement("p");
//         subTextWrapper.appendChild(p);
//       }

//       subTextContainer.appendChild(subTextWrapper);
//     }

//     return subTextContainer;
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

//     // Assuming your content has two `<h3>` sections you want to populate
//     const h3Elements = doc.querySelectorAll("h3");
//     const pElements = doc.querySelectorAll("p");

//     if (h3Elements.length >= 2 && pElements.length >= 6) {
//       this.container.querySelector(".sub-text-wrapper:first-of-type h3").textContent = h3Elements[0].textContent;
//       this.container.querySelector(".sub-text-wrapper:last-of-type h3").textContent = h3Elements[1].textContent;

//       const firstWrapperParagraphs = this.container.querySelectorAll(".sub-text-wrapper:first-of-type p");
//       const secondWrapperParagraphs = this.container.querySelectorAll(".sub-text-wrapper:last-of-type p");

//       for (let i = 0; i < 3; i++) {
//         firstWrapperParagraphs[i].textContent = pElements[i + 3].textContent;
//         secondWrapperParagraphs[i].textContent = pElements[i + 5].textContent;
//       }
//     } else {
//       // Handle cases where the expected content structure isn't found
//       console.error("Unexpected content structure. Unable to update sub-text.");
//     }
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

// new BlogPost(apiUrl, id, postContainer);
