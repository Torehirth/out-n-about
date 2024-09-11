export const initializeDarkMode = (darkButton, lightButton) => {
  console.log('Switching to Dark Mode');
  darkButton.classList.add("is-showing");
  lightButton.classList.remove("is-showing");
  document.documentElement.classList.add("dark-mode");
};
