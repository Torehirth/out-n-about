// Creates all elements below the image on article page.
// createSubTextContainer function gets called inside the renderPost function.

export const createSubTextContainer = (container, postContent) => {
  const subTextContainer = document.createElement("div");
  container.appendChild(subTextContainer);
  subTextContainer.classList.add("sub-text-container");

  // parses the post content and separates the different html tags and stores them in a document object (looks like a html file)
  const parser = new DOMParser();
  const contentDoc = parser.parseFromString(postContent, "text/html");
  // selects the h3 from the newly created object
  const headings = contentDoc.querySelectorAll("h3");

  // loops through each h3 element of the object and stores all of the "p" siblings in the paragraphs array
  headings.forEach((heading) => {
    // finds the paragraphs following this heading
    const paragraphs = [];
    let nextElement = heading.nextElementSibling;

    // // loop breaks when a non-"P" element is found
    while (nextElement && nextElement.tagName === "P") {
      paragraphs.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    // Create a sub text wrapper with the heading and paragraphs
    createSubTextWrapper(subTextContainer, heading, paragraphs);
  });
};

// creates a wrapper for each section with h3 element and paragraphs.
// gets called inside createSubTextContainer function.
export const createSubTextWrapper = (container, heading, paragraphs) => {
  const subTextWrapper = document.createElement("div");
  container.appendChild(subTextWrapper);
  subTextWrapper.classList.add("sub-text-wrapper");

  // adds one "h3" heading to each wrapper,
  createSubHeadings(subTextWrapper, heading);
  // adds all the associated "p" elements to the wrapper
  paragraphs.forEach((paragraph) => {
    createSubParagraphs(subTextWrapper, paragraph);
  });
};

// creates a h3 element
// gets called inside createSubTextWrapper function.
export const createSubHeadings = (container, heading) => {
  // creates and append h3 elements
  const subHeading = document.createElement("h3");
  container.appendChild(subHeading);
  subHeading.classList.remove("wp-block-heading");

  // preserves inner HTML to keep formatting
  subHeading.innerHTML = heading.innerHTML;
};

//creates paragraph element
// gets called inside createSubTextWrapper function.
export const createSubParagraphs = (container, paragraph) => {
  // creates and append p elements
  const subParagraph = document.createElement("p");
  container.appendChild(subParagraph);

  // preserves inner HTML to keep formatting
  subParagraph.innerHTML = paragraph.innerHTML;
};
