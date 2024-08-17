// error message and style
export const setError = (element, message) => {
  const inputMessageContainer = element.nextElementSibling;
  element.classList.add("form-error");
  element.classList.remove("form-success");
  inputMessageContainer.innerText = message;
};
