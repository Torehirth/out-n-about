import { createHeadlineWrapper } from "./createHeadlineWrapper.mjs";
import { createModalImage } from "./createImageElement.mjs";
import { createSubTextContainer } from "./createSubComponents.mjs";

// render all created elements, this gets called inside the displaySinglePost function.
export const renderPost = (post, container) => {
  createHeadlineWrapper(container, post);

  createModalImage(container, post);

  createSubTextContainer(container, post.content.rendered);
};
