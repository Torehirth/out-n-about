export const initializeLightMode = (darkButton, lightButton) => {
  console.log("Switching to Light Mode");
  darkButton.classList.remove("is-showing");
  lightButton.classList.add("is-showing");
  document.documentElement.classList.remove("dark-mode");
};
