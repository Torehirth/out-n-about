import { createHeadlineWrapper } from "../components/article/createHeadlineWrapper.mjs";
import { createModalImage } from "../components/article/createImageElement.mjs";
import { createSubTextContainer } from "../components/article/createSinglePostTextComponents.mjs";

// render all created elements, this gets called inside the displaySinglePost function.
export const renderPost = (post, container) => {
  createHeadlineWrapper(container, post);

  createModalImage(container, post);
  // calls the function that creates the single post with the container and API placement of the content.
  createSubTextContainer(container, post.content.rendered);
};
