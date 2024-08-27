// function for scrolling to sections by id
export const scrollToSectionByClick = (button, sectionId) => {
  button.addEventListener("click", () => {
    sectionId.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
