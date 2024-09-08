export const closeSearchBar = (formContainer, contentContainer, backgroundElement) => {
  formContainer.classList.add("is-hidden");
  // hide the posts/content
  contentContainer.classList.add("is-hidden");
  // reset input values when not visible
  formContainer.reset();
  // set the element opacity to 1
  backgroundElement.style.opacity = "1";
};


