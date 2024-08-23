import { displayImagePopup } from "../../handler/handleImageModal.mjs";

export const createImageElement = (container, post) => {
  const placeholderImg = "../assets/img/placeholder.webp";
  // using the optional chaining operator (?) after each nested property, it prevents errors if some part of the url/chain returns null or undefined
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const altUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

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

  // call the image modal when clicked
  postImage.addEventListener("click", displayImagePopup);
};
