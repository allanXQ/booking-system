require("dotenv").config();

const accountSid = "AC48b3706eea19b5accd13d10f89b2fa67";
const authToken = "e6a25bf606d49ef46a0d7eeeed813f77";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+12062022568",
    to: "+254748517525",
  })
  .then((message) => console.log(message));
