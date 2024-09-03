const dropDownContainer = document.querySelector(".drop-down-container");
const dropDownWrapper = document.querySelector(".drop-down-wrapper");
const dropDownIcon = document.querySelector(".drop-down-btn span");

export const toggleCategoryDropDownButton = () => {
  dropDownContainer.addEventListener("click", (e) => {
    // to stop event bubbling up or interfere with other elements
    // e.stopPropagation();
    console.log(e.target);

    if (!dropDownWrapper.classList.contains("open")) {
      // opens drop down menu
      dropDownWrapper.classList.add("open");
      // makes the button icon change direction to up
      dropDownIcon.textContent = "keyboard_arrow_up";
    } else {
      // closes drop down menu
      dropDownWrapper.classList.remove("open");
      // makes the button icon change direction to down
      dropDownIcon.textContent = "keyboard_arrow_down";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropDownContainer.contains(e.target)) {
      dropDownWrapper.classList.remove("open");
    }
  });
};
