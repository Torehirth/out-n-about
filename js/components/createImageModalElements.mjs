export const imageModalContainer = document.querySelector("#image-modal");
export let imageModalWrapper;
export let modalExitButton;

export const createImageModalElements = () => {
  // create wrapper
  imageModalWrapper = document.createElement("div");
  imageModalWrapper.classList.add("image-popup-wrapper");
  imageModalContainer.appendChild(imageModalWrapper);

  // create exit button
  modalExitButton = document.createElement("button");
  modalExitButton.classList.add("modal-exit-btn", "exit-btn");
  modalExitButton.setAttribute("type", "button");
  modalExitButton.innerHTML = "&times;";
  imageModalWrapper.appendChild(modalExitButton);
};
