// changing the document title to the article title + website name
export const updateDocumentTitle = (title) => {
  document.title = `${title} | Out 'n About`;
};

// changing the searchbar URL to include both post ID and title
// if only changed to show post title, the page can' t reload (not able to get the post as it is fetched through id).
export const updateUrlWithTitle = (id, title, container) => {
  try {
    // Get the current pathname
    const currentUrl = window.location.pathname;

    // Encode the title to be URL-safe
    const hyphenatedTitle = encodeURIComponent(title.trim().replace(/\s+/g, "-"));

    // Append both the ID and title as query parameters
    const updatedUrl = `${currentUrl}?id=${id}&title=${hyphenatedTitle}`;

    history.replaceState(null, "", updatedUrl);
  } catch (error) {
    console.error("An error occurred while updating the URL:", error.message);
    container.innerHTML = message("error", "Something went wrong updating the URL query parameter");
  }
};
