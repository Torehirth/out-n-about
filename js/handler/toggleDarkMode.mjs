import { initializeDarkMode } from "../ui/initializeDarkMode.mjs";
import { initializeLightMode } from "../ui/initializeLightMode.mjs";

const darkModeButton = document.querySelector("#dark-mode-button");
const lightModeButton = document.querySelector("#light-mode-button");
const darkModeButtonContainer = document.querySelector(".dark-mode-container");

export const toggleDarkMode = () => {
  darkModeButtonContainer.addEventListener("click", (e) => {
    if (darkModeButton.classList.contains("is-showing")) {
      initializeDarkMode(darkModeButton, lightModeButton);
    } else {
      initializeLightMode(darkModeButton, lightModeButton);
    }
  });
};