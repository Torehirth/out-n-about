import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";

toggleMobileNav();

// import { message } from "../components/message.mjs";
// // import { apiUrl, postsPerPageQueryParam, embedQueryParam } from "../data/constants.mjs";

// export const apiUrl = "https://exam.torehirth.no/wp-json/wp/v2/posts";

// // Fetching posts function
// export async function fetchPosts(container, page = 1, perPage = 10) {
//   try {
//     const response = await fetch(`${apiUrl}?page=${page}&per_page=${perPage}&_embed`);

//     if (!response.ok) {
//       throw new Error("there was an error fetching the posts");
//     }

//     const posts = await response.json();

//     return posts;
//   } catch (error) {
//     console.error(error);
//     container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
//   }
// }

// // Displaying the posts
// const postWrapper = document.querySelector("#posts-wrapper");

// export function displayPosts(posts, container) {
//   postWrapper.innerHTML = "";
//   posts.forEach((post) => {
//     // the first replaces the html tags in excerpt with an empty string, the second replaces the html entity &#8217; with an apostrophe
//     const cleanHeadline = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");
//     const cleanText = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");

//     const a = document.createElement("a");
//     a.href = `../article/index.html?id=${post.id}`;

//     const articleCard = document.createElement("div");
//     articleCard.classList.add("article-card");

//     // Error handling for featured media
//     if (
//       // checking if the object has the right path and if the path is not empty
//       post._embedded &&
//       post._embedded["wp:featuredmedia"] &&
//       post._embedded["wp:featuredmedia"][0] &&
//       post._embedded["wp:featuredmedia"][0].link &&
//       post._embedded["wp:featuredmedia"][0].alt_text
//     ) {
//       const img = document.createElement("img");
//       img.src = post._embedded["wp:featuredmedia"][0].link;
//       img.alt = post._embedded["wp:featuredmedia"][0].alt_text;
//       img.title = cleanText;
//       img.classList.add("article-card-img");
//       articleCard.appendChild(img);
//     } else {
//       console.error("Missing or invalid featured media for post:", post);
//       // adding a placeholder image if one of the paths is invalid
//       const img = document.createElement("img");
//       img.src = "../assets/img/image-2935360_1280.webp";
//       img.alt = "no image available";
//       img.classList.add("article-card-img");
//       articleCard.appendChild(img);
//     }

//     const articleCardCopy = document.createElement("div");
//     articleCardCopy.classList.add("article-card-copy");

//     const h4 = document.createElement("h4");
//     h4.textContent = cleanHeadline;

//     const paragraphContainer = document.createElement("div");
//     paragraphContainer.classList.add("card-p-wrapper");

//     const p = document.createElement("p");
//     p.textContent = cleanText;

//     articleCardCopy.appendChild(h4);
//     articleCardCopy.appendChild(paragraphContainer);
//     paragraphContainer.appendChild(p);

//     articleCard.appendChild(articleCardCopy);
//     a.appendChild(articleCard);
//     container.appendChild(a);
//   });
// }

// // handle posts function
// let allPosts = [];
// let currentPage = 1;
// export const postsPerPage = "10"; // Number of posts to display per page
// export let areAllPostsLoaded = false;
// export const loadMoreBtn = document.querySelector("#load-btn");

// export async function handlePosts(container) {
//   if (areAllPostsLoaded) return;
//   try {
//     loadMoreBtn.disabled = true;

//     const posts = await fetchPosts(container, currentPage, postsPerPage);

//     if (posts.length < postsPerPage) {
//       areAllPostsLoaded = true;
//       loadMoreBtn.classList.add("is-hidden");
//       // return;
//     }
//     console.log(currentPage);
//     console.log(areAllPostsLoaded);

//     allPosts = [...allPosts, ...posts]; // same as allPosts.concat(posts)
//     currentPage++;

//     displayPosts(posts, container);
//     loadMoreBtn.disabled = false;
//   } catch (error) {
//     console.error(error);
//     container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
//   }
// }

// loadMoreBtn.addEventListener("click", () => {
//   handlePosts(postWrapper);
// });

// handlePosts(postWrapper);

// I'm trying to fetch and display 10 posts first and then display the rest of the posts when click the load more btn. I have made the posts on my Wordpress site and are fetching them through the Wordpress rest API.
// The provided code shows 10 posts at first but when I click the load more btn it keeps adding 10 posts indefinitely. Can you see whats wrong?

import { message } from "../components/message.mjs";
// import { apiUrl, postsPerPageQueryParam, embedQueryParam } from "../data/constants.mjs";

export const apiUrl = "https://exam.torehirth.no/wp-json/wp/v2/posts";

// Fetching posts function
export async function fetchAllPosts(container) {
  try {
    const response = await fetch(`${apiUrl}?&per_page=100&_embed`);

    if (!response.ok) {
      throw new Error("there was an error fetching the posts");
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

// Displaying the posts
const postWrapper = document.querySelector("#posts-wrapper");
postWrapper.innerHTML = "";
export function displayPosts(posts, container) {
  posts.forEach((post) => {
    // the first replaces the html tags in excerpt with an empty string, the second replaces the html entity &#8217; with an apostrophe
    const cleanHeadline = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");
    const cleanText = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");

    const a = document.createElement("a");
    a.href = `../article/index.html?id=${post.id}`;

    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    // Error handling for featured media
    if (
      // checking if the object has the right path and if the path is not empty
      post._embedded &&
      post._embedded["wp:featuredmedia"] &&
      post._embedded["wp:featuredmedia"][0] &&
      post._embedded["wp:featuredmedia"][0].link &&
      post._embedded["wp:featuredmedia"][0].alt_text
    ) {
      const img = document.createElement("img");
      img.src = post._embedded["wp:featuredmedia"][0].link;
      img.alt = post._embedded["wp:featuredmedia"][0].alt_text;
      img.title = cleanText;
      img.classList.add("article-card-img");
      articleCard.appendChild(img);
    } else {
      console.error("Missing or invalid featured media for post:", post);
      // adding a placeholder image if one of the paths is invalid
      const img = document.createElement("img");
      img.src = "../assets/img/image-2935360_1280.webp";
      img.alt = "no image available";
      img.classList.add("article-card-img");
      articleCard.appendChild(img);
    }

    const articleCardCopy = document.createElement("div");
    articleCardCopy.classList.add("article-card-copy");

    const h4 = document.createElement("h4");
    h4.textContent = cleanHeadline;

    const paragraphContainer = document.createElement("div");
    paragraphContainer.classList.add("card-p-wrapper");

    const p = document.createElement("p");
    p.textContent = cleanText;

    articleCardCopy.appendChild(h4);
    articleCardCopy.appendChild(paragraphContainer);
    paragraphContainer.appendChild(p);

    articleCard.appendChild(articleCardCopy);
    a.appendChild(articleCard);
    container.appendChild(a);
  });
}

// handle posts function
let allPosts = [];
let currentIndex = 0;
export const postsPerPage = 10; // Number of posts to display per page
export const loadMoreBtn = document.querySelector("#load-btn");

export async function handlePosts(container) {
  try {
    loadMoreBtn.disabled = true;

    if (allPosts.length === 0) {
      allPosts = await fetchAllPosts(container);
    }
    const postsToDisplay = allPosts.slice(currentIndex, postsPerPage + currentIndex);

    displayPosts(postsToDisplay, container);

    currentIndex += postsPerPage;

    if (currentIndex >= allPosts.length) {
      loadMoreBtn.classList.add("is-hidden");
    } else {
      loadMoreBtn.disabled = false;
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the posts.. Try again shortly!");
  }
}

loadMoreBtn.addEventListener("click", (e) => {
  handlePosts(postWrapper);
});

handlePosts(postWrapper);
