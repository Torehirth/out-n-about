// convert the time and date to the users local timezone and displays only the date.
export const displayDynamicDate = (dateGMT) => {
  const universalDateGMT = dateGMT;
  // set the time to the users timezone
  const localDate = new Date(universalDateGMT);
  // converts the time and date to display only date
  return localDate.toLocaleDateString();
};
