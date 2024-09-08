// Creates all elements below the image on article page.
// createSubTextContainer function gets called inside the renderPost function.

export const createSubTextContainer = (container, postContent) => {
  // creates and appends the container
  const subTextContainer = document.createElement("div");
  subTextContainer.classList.add("sub-text-container");
  container.appendChild(subTextContainer);

  // using the DOMParser constructor  with the parseFromString method to parse the post content and separate the different html tags inside it, and stores them in a document object (looks like a html file)
  const parser = new DOMParser();
  const content = parser.parseFromString(postContent, "text/html");
  // selects the h3 from the newly created object
  const subtitles = content.querySelectorAll("h3");

  // loops through each h3 element of the object and stores all of the "p" siblings to the paragraphs array
  subtitles.forEach((subtitle) => {
    // finds the paragraphs following this subtitle
    const paragraphs = [];
    let nextElement = subtitle.nextElementSibling;

    // loop breaks when a non-"P" element is found or if it isn't a sibling element
    while (nextElement && nextElement.tagName === "P") {
      // pushes the next element to the paragraph array
      paragraphs.push(nextElement);
      // loop continues to check for "P" elements
      nextElement = nextElement.nextElementSibling;
    }

    // Create a sub text wrapper with the subtitle and paragraphs
    createSubTextWrapper(subTextContainer, subtitle, paragraphs);
  });
};

// creates a wrapper for each section with subtitle and paragraphs.
// gets called inside createSubTextContainer function.
const createSubTextWrapper = (container, subtitle, paragraphs) => {
  const subTextWrapper = document.createElement("div");
  container.appendChild(subTextWrapper);
  subTextWrapper.classList.add("sub-text-wrapper");

  // adds one subtitle to each wrapper,
  createSubtitles(subTextWrapper, subtitle);
  // adds all the associated "p" elements to the wrapper
  paragraphs.forEach((paragraph) => {
    createSubParagraphs(subTextWrapper, paragraph);
  });
};

// creates a h2 element
// gets called inside createSubTextWrapper function.
const createSubtitles = (container, subtitle) => {
  // creates and append subtitles
  const subsubtitle = document.createElement("h2");
  container.appendChild(subsubtitle);
  subsubtitle.classList.remove("wp-block-subtitle");

  // preserves inner HTML to keep formatting
  subsubtitle.innerHTML = subtitle.innerHTML;
};

//creates paragraph element
// gets called inside createSubTextWrapper function.
const createSubParagraphs = (container, paragraph) => {
  // creates and append p elements
  const subParagraph = document.createElement("p");
  container.appendChild(subParagraph);

  // preserves inner HTML to keep formatting
  subParagraph.innerHTML = paragraph.innerHTML;
};
