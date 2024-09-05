// prevent submission from key press
export const preventSubmissionOnKeyPress = (inputElement, key) => {
  inputElement.addEventListener("keydown", (e) => {
    if (e.key === key) {
      e.preventDefault();
    }
  });
};
