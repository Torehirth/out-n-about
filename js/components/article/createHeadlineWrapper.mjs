export const createHeadlineWrapper = (container, post) => {
  
  container.textContent = "";
  const headlineWrapper = document.createElement("div");
  container.appendChild(headlineWrapper);
  headlineWrapper.classList.add("headline-wrapper");

  const headline = document.createElement("h1");
  headlineWrapper.appendChild(headline);

  // using a regex in the replace method to replace html tag as empty, and html entity as (')
  headline.textContent = post.title.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'");

  // using a regex in the replace method to replace html tag as empty, and html entity as (')
  const headingParagraph = document.createElement("p");
  headlineWrapper.appendChild(headingParagraph);
  headingParagraph.textContent = post.excerpt.rendered.replace(new RegExp("<[^>]+>", "g"), "").replace(new RegExp("&#8217;", "g"), "'");
};

