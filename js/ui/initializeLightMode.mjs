export const initializeLightMode = (darkButton, lightButton) => {
  darkButton.classList.add("is-showing");
  lightButton.classList.remove("is-showing");
  document.documentElement.classList.remove("dark-mode");
};
