import { body, formSection, headingContainer, successMessageContainer } from "../data/constants.mjs";

// Exit modal function
export const exitModal = () => {
  successMessageContainer.classList.add("is-hidden");
  formSection.style.display = "block";
  headingContainer.style.display = "block";
  body.classList.remove("darken-background");
  body.classList.remove("black-section");
  body.classList.add("grey-section");
};
