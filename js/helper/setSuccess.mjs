// success message and style
export const setSuccess = (element) => {
  const inputMessageContainer = element.nextElementSibling;
  element.classList.add("form-success");
  element.classList.remove("form-error");
  inputMessageContainer.innerText = "";
};
