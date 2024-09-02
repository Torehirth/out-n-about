import { cleanText } from "../helper/cleanText.mjs";

// create post image for cards
export const createPostImage = (post, className, imageSize) => {
  const img = document.createElement("img");

  // Error handling for featured media
  // checking if the object has the right path and doesn't return falsy.
  // using standard JS property access [] to have the size changeable.
  const imageUrl = post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.[imageSize]?.source_url;
  const placeholderImg = "../assets/img/placeholder.webp";
  const altUrl = post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

  // the logical OR operator (||) returns the first truthy value from left to right.
  img.src = imageUrl || placeholderImg;
  img.alt = altUrl || "No image available";
  img.classList.add(className);
  img.title = cleanText(post.title.rendered);
  // lazy loading for images on modern browsers
  img.loading = "lazy";

  img.onerror = () => {
    // onerror event handler in case network or url issue.
    img.src = placeholderImg;
    img.alt = "Image failed to load";
    console.error("Error loading the image", imageUrl);
  };

  return img;
};
