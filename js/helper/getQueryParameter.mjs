export const getQueryParameter = (param) => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const value = params.get(param);
  return value;
};
