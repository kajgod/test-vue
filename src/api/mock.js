import { validateEmail, validateText } from "../../shared/validation";

const pause = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default {
  submitForm: async (load) => {
    await pause(250);
    const { email, text } = load;
    const isValidEmail = validateEmail(email),
      isValidText = validateText(text);
    if (isValidEmail && isValidText)
      return { message: "Your message has been sent!" };
    const errors = [];
    if (!isValidEmail) errors.push("E-mail isn't valid.");
    if (!isValidText)
      errors.push("Message should be longer than 30 characters.");
    return { errors };
  },
};
