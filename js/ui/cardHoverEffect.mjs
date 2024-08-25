// export const cardHoverEffect = (img) => {
//   const imgContainer = img;
//   if (
//     imgContainer.addEventListener("mouseover", () => {
//       imgContainer.style.transform = "scale(0.98)";
//       imgContainer.style.transition = "transform ease 0.3s";
//     })
//   );
//   else {
//     imgContainer.addEventListener("mouseout", () => {
//       imgContainer.style.transform = "scale(1)";
//       imgContainer.style.transition = "transform ease 0.3s";
//     });
//   }
// };

// export const cardHoverEffect = (img) => {
//   const imgContainer = img;

//   if (imgContainer instanceof HTMLElement) {
//     imgContainer.addEventListener("mouseover", () => {
//       imgContainer.style.transform = "scale(0.98)";
//       imgContainer.style.transition = "transform ease 0.3s";
//     });

//     imgContainer.addEventListener("mouseout", () => {
//       imgContainer.style.transform = "scale(1)";
//       imgContainer.style.transition = "transform ease 0.3s";
//     });
//   } else {
//     console.error("imgContainer is not a valid DOM element", imgContainer);
//   }
// };
