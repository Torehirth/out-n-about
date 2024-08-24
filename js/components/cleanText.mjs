export const cleanText = (text) => {
  // the first replaces the html tags in excerpt with an empty string, the second replaces the html entity &#8217; with an apostrophe
  return text.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#8217;/g, "'");
};
