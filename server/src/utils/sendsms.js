require("dotenv").config();

const twilio = require("twilio");
const { RequestClient } = twilio;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken, {
  httpClient: new RequestClient({ timeout: 500000 }),
});

function sendSMS(body, recipient) {
  client.messages
    .create({
      body: body, // SMS content
      to: recipient, // Recipient's number
      from: "+12062022568", // Replace with your Twilio number
    })
    .then((message) => {
      console.log("Message sent successfully.");
      console.log("Message SID: " + message.sid);
      console.log("Message Status: " + message.status);
      console.log("Date Sent: " + message.dateSent);
    })
    .catch((error) => {
      console.error("Error sending SMS: ", error);
    });
}

module.exports = { sendSMS };
