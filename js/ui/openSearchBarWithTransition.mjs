export const openSearchBarWithTransition = (formContainer, formInput) => {
  // removes "hidden" class that displays search bar
  formContainer.classList.remove("is-hidden");
  // removes the "visible" class
  formContainer.classList.remove("visible");
  // the timeout function adds the transition effect on the search bar
  setTimeout(() => {
    formContainer.classList.add("visible");
    // sets the input in focus
    formInput.focus();
  }, 20);
};
