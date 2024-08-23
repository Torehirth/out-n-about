import { imageModalContainer, imageModalWrapper, modalExitButton, createImageModalElements } from "../components/createImageModalElements.mjs";
import { fetchPost } from "../api/fetchPost.mjs";
import { postContainer } from "../data/constants.mjs";

export const displayImagePopup = async () => {
  try {
    if (!imageModalWrapper || !modalExitButton) {
      createImageModalElements();
    }

    // Placeholder for the post fetching logic
    const post = await fetchPost(postContainer); // Ensure 'fetchPost' and 'postContainer' are defined
    const imageUrl = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const altText = post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

    // Clear previous modal content except for the exit button to prevent stacking and visual bugs
    imageModalWrapper.querySelectorAll("img").forEach((img) => img.remove());

    // Create image element with properties
    const modalImage = document.createElement("img");
    modalImage.classList.add("modal-image");
    modalImage.src = imageUrl || "";
    modalImage.alt = altText || "No image available";
    imageModalWrapper.appendChild(modalImage);

    // Show the modal
    imageModalContainer.classList.remove("is-hidden");
    imageModalContainer.classList.add("image-modal-container");
    imageModalContainer.style.display = "flex";
  } catch (error) {
    console.error("Error displaying image popup:", error);
    imageModalContainer.innerHTML = "<p>Error loading image. Please try again later.</p>";
    imageModalContainer.classList.remove("is-hidden");
    imageModalContainer.style.display = "flex";
  }
};

export const closeImagePopup = () => {
  imageModalContainer.classList.add("is-hidden");
  imageModalContainer.style.display = "none";
};
