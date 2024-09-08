import { body, formSection, headingContainer, successMessageContainer } from "../data/constants.mjs";

// Exit modal function
export const exitFormSuccessModal = () => {
  successMessageContainer.classList.add("is-hidden");
  formSection.style.display = "block";
  headingContainer.style.display = "block";
  body.classList.remove("darken-background");
  body.classList.remove("black-section");
};
