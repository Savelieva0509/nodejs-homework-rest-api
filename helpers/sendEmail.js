const elasticemail = require("elasticemail");
require("dotenv").config();

const { ELASTICEMAIL_API_KEY } = process.env;

const client = elasticemail.createClient({
  username: "savelieva0509@gmail.com",
  apiKey: ELASTICEMAIL_API_KEY,
});

const sendEmail = async (data) => {
  const email = { ...data, from: "savelieva0509@gmail.com" };
  await client.mailer.send(email);
  return true;
};

// const email = {
//   from: "savelieva0509@gmail.com",
//   from_name: "Liudmyla Babenko",
//   to: "harih87739@bustayes.com",
//   subject: "Hello",
//   body_text: "Hello World!",
// };

module.exports = sendEmail;
