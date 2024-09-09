export const initializeDarkMode = (darkButton, lightButton) => {
  darkButton.classList.remove("is-showing");
  lightButton.classList.add("is-showing");
  document.documentElement.classList.add("dark-mode");
};
