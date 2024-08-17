// Email regex validation
export const isEmailValid = (email) => {
  // Regular expression for email validation, converts it to a lowercase string, tests it against the email validation regex pattern, and returns the validation result true or false
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toString().toLowerCase());
};
