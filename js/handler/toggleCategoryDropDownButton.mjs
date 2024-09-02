const dropDownContainer = document.querySelector(".drop-down-container");
const dropDownWrapper = document.querySelector(".drop-down-wrapper");

export const toggleCategoryDropDownButton = () => {
  dropDownContainer.addEventListener("click", (e) => {
    // to stop event bubbling up or interfere with other elements
    e.stopPropagation();
    console.log(e.target);

    if (!dropDownWrapper.classList.contains("open")) {
      dropDownWrapper.classList.add("open");
    } else {
      dropDownWrapper.classList.remove("open");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropDownContainer.contains(e.target)) {
      dropDownWrapper.classList.remove("open");
    }
  });
};
