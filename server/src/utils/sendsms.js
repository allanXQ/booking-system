const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

function sendSMS(body, recipient) {
  client.messages
    .create({
      body: body, // SMS content
      to: recipient, // Recipient's number
      from: "+10987654321", // Replace with your Twilio number
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

// Example usage
sendSMS("Hello from Twilio!", "+1234567890");
