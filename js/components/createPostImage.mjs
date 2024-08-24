// create post image for cards
export const createPostImage = (post, className) => {
  const img = document.createElement("img");

  // Error handling for featured media
  // checking if the object has the right path and doesn't return falsy.
  const imageUrl = post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_featured?.source_url;
  const placeholderImg = "../assets/img/placeholder.webp";
  const altUrl = post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

  // the logical OR operator (||) returns the first truthy value from left to right.
  img.src = imageUrl || placeholderImg;
  img.alt = altUrl || "No image available";
  img.classList.add(className);
  // lazy loading for images on modern browsers
  img.loading = "lazy";

  return img;
};
