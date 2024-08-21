import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../components/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../components/scrollCarouselByDrag.mjs";
import { carousel, cardImages } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";
import { message } from "../components/message.mjs";

// mobile hamburger menu
toggleMobileNav();
// blog post carousel
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);

import { getQueryParameter } from "../helper/getQueryParameter.mjs";
import { apiUrl } from "../data/constants.mjs";
const id = getQueryParameter("id");
const postContainer = document.querySelector("#blog-post-container");

// -----------------------------------------------------------------------

const fetchPost = async (container) => {
  if (!id) {
    // redirect to all articles if postId is falsy
    // document.location.href = "../articles/index.html";
  }

  try {
    const response = await fetch(`${apiUrl}/${id}?_embed`);

    if (!response.ok) {
      throw new Error("There was an error fetching the post");
    }

    const post = await response.json();
    console.log(post);

    return post;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong fetching the post.. Try again shortly!");
  }
};

// -------------------------------

export const updateUrlWithTitle = (title) => {
  // getting the pathname
  const currentUrl = window.location.pathname;
  // regex to change out the "%20" with "-"(hyphen)
  const hyphenatedTitle = title.replace(/\s+/g, "-");
  // appending the title as a query parameter
  const updatedUrl = `${currentUrl}?title=${hyphenatedTitle}`;
  // updates the url pathname without reloading the page
  history.replaceState(null, " ", updatedUrl);
};

// -------------------------------

// changing the document title to the article title + website name
export const updateDocumentTitle = (title) => {
  document.title = `${title} | Out 'n About`;
};

// -------------------------------

export const createHeadlineWrapper = (container, post) => {
  // deletes
  container.textContent = "";
  const headlineWrapper = document.createElement("div");
  container.appendChild(headlineWrapper);
  headlineWrapper.classList.add("headline-wrapper");

  const headline = document.createElement("h1");
  headlineWrapper.appendChild(headline);

  // using a regex in the replace method to replace html tag as empty, and html entity as (')
  headline.textContent = post.title.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'");

  // using a regex in the replace method to replace html tag as empty, and html entity as (')
  const headingParagraph = document.createElement("p");
  headlineWrapper.appendChild(headingParagraph);
  headingParagraph.textContent = post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'");
};

// -------------------------------

export const createImageElement = (container, post) => {
  const placeholderImg = "../assets/img/placeholder.webp";
  // using the optional chaining operator (?) after each nested property, it prevents errors if some part of the url/chain returns null or undefined
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url;
  const altUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.alt_text;

  // create and append img element
  const postImage = document.createElement("img");
  container.appendChild(postImage);
  postImage.classList.add("post-img");

  // set attributes
  // the logical OR operator (||) returns the first truthy value from left to right.
  postImage.src = imageUrl || placeholderImg;
  postImage.alt = altUrl || "No image available";

  postImage.onerror = () => {
    // onerror event handler in case network or url issue.
    postImage.src = placeholderImg;
    postImage.alt = "Image failed to load";
    console.error("Error loading the image", imageUrl);
  };

  // return postImage;
};

// -------------------------------

export const createSubTextContainer = (container, postContent) => {
  const subTextContainer = document.createElement("div");
  container.appendChild(subTextContainer);
  subTextContainer.classList.add("sub-text-container");

  // parses the post content and separates the different html tags and stores them in a document object (looks like a html file)
  const parser = new DOMParser();
  const contentDoc = parser.parseFromString(postContent, "text/html");
  // selects the h3 from the newly created object
  const headings = contentDoc.querySelectorAll("h3");

  console.log(contentDoc);

  // loops through each h3 element of the object and stores all of the "p" siblings in the paragraphs array
  headings.forEach((heading) => {
    // finds the paragraphs following this heading
    const paragraphs = [];
    let nextElement = heading.nextElementSibling;

    // // loop breaks when a non-"P" element is found
    while (nextElement && nextElement.tagName === "P") {
      paragraphs.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    // Create a sub text wrapper with the heading and paragraphs
    createSubTextWrapper(subTextContainer, heading, paragraphs);
  });
};

// -------------------------------

export const createSubTextWrapper = (container, heading, paragraphs) => {
  const subTextWrapper = document.createElement("div");
  container.appendChild(subTextWrapper);
  subTextWrapper.classList.add("sub-text-wrapper");

  // adds one "h3" heading to the each wrapper,
  createSubHeadings(subTextWrapper, heading);
  // adds all the associated "p" elements to the wrapper
  paragraphs.forEach((paragraph) => {
    createSubParagraphs(subTextWrapper, paragraph);
  });
};

// -------------------------------

export const createSubHeadings = (container, heading) => {
  // create and append h3 elements
  const subHeading = document.createElement("h3");
  container.appendChild(subHeading);
  subHeading.classList.remove("wp-block-heading");

  // preserves inner HTML to keep formatting
  subHeading.innerHTML = heading.innerHTML;
};

// -------------------------------

export const createSubParagraphs = (container, paragraph) => {
  // create and append p elements
  const subParagraph = document.createElement("p");
  container.appendChild(subParagraph);

  // preserves inner HTML to keep formatting
  subParagraph.innerHTML = paragraph.innerHTML;
};

// -------------------------------

export const renderPost = (post, container) => {
  createHeadlineWrapper(container, post);

  createImageElement(container, post);

  createSubTextContainer(container, post.content.rendered);
};

// -----------------------------------

export const displaySinglePost = async () => {
  try {
    // getting json response and assigning it as post
    const post = await fetchPost(postContainer);

    // changing the document title to the article title
    const postTitle = post.title.rendered;
    updateDocumentTitle(postTitle);

    // updating the URL pathname with the article title
    // updateUrlWithTitle(postTitle);

    // calls the render post function
    renderPost(post, postContainer);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the post");
  }
};

displaySinglePost();

// when page reload (Live Server extension) the updateUrlWithTitle function generates and error by not fetching the post.
// have to try this when pushed to static host or make error handling or corrections (browser/web safe).
