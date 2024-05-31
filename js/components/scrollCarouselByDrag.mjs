// gathered event listeners to scroll the carousel by dragging under one function
export const scrollCarouselByDrag = (carousel) => {
  let isDragging = false;
  let startPosition = 0;
  let startScrollLeft = 0;

  // if isDragging is true, change the cursor to grabbing, else change it to pointer
  const changeCursor = () => {
    carousel.style.cursor = isDragging ? "grabbing" : "pointer";
  };
  // mouse down event listener to start dragging
  carousel.addEventListener("mousedown", (event) => {
    isDragging = true;
    startPosition = event.clientX;
    startScrollLeft = carousel.scrollLeft;
    changeCursor(); // Change cursor to 'grabbing'
    event.preventDefault(); // prevents the carousel from selecting text while dragging and sticking to the cursor
  });
  // mouse move event listener to drag the carousel
  carousel.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const distance = event.clientX - startPosition;
      carousel.scrollLeft = startScrollLeft - distance;
      changeCursor(); // Maintain 'grabbing' cursor while dragging
    }
  });
  // mouse up event listener to stop dragging
  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    changeCursor(); // Change cursor back to 'pointer'
  });
};
