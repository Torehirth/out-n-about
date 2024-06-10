export const cardHoverEffect = (images) => {
  images.forEach((cardImage) => {
    if (
      cardImage.addEventListener("mouseover", () => {
        cardImage.style.transform = "scale(0.98)";
        cardImage.style.transition = "transform ease 0.3s";
      })
    );
    else {
      cardImage.addEventListener("mouseout", () => {
        cardImage.style.transform = "scale(1)";
        cardImage.style.transition = "transform ease 0.3s";
      });
    }
  });
};
