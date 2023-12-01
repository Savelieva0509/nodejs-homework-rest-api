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

module.exports = sendEmail;
