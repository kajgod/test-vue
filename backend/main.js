//#region express setup
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3334;
//#endregion

//#region validation
const validation = require("../shared/validation");
const { validateEmail, validateText } = validation;
const formatResponse = (load) => {
  const { email, text } = load;
  const isValidEmail = validateEmail(email),
    isValidText = validateText(text);
  if (isValidEmail && isValidText)
    return { message: "Your message has been sent!" };
  const errors = [];
  if (!isValidEmail) errors.push("E-mail isn't valid.");
  if (!isValidText) errors.push("Message should be longer than 30 characters.");
  return { errors };
};
//#endregion

//#region routing
app.post("/API/contact", (req, res) => {
  const { email = "", text = "" } = req.body;
  const response = formatResponse({ email, text });
  const status = response.errors ? 422 : 200;
  res.status(status).json(response);
});

app.listen(port, () => {
  console.log(`Backend ready on http://localhost:${port}`);
});
//#endregion
