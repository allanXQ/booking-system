const { default: axios } = require("axios");

let InitiatorName = "testapi";
let InitiatorPassword = "Safaricom999!*!";
let PartyA = "600995";
let PartyB = "600000";
let PhoneNumber = "254708374149";
let BusinessShortCode = "174379";
let PassKey =
  "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";

const pay = async (req, res) => {
  try {
    // const { amount, phone } = req.body;
    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, -3);

    const password = getMpesaPassword(timestamp);

    const headers = {
      Authorization: "Bearer YOUR_ACCESS_TOKEN", // You will need to generate an access token
    };

    const data = {
      BusinessShortCode: BusinessShortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: 10,
      PartyA: PartyA,
      PartyB: PartyB,
      PhoneNumber,
      CallBackURL: "https://your-callback-url.com",
      AccountReference: "Account",
      TransactionDesc: "Payment Description",
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl",
      data,
      { headers }
    );

    // Save the response to MongoDB for tracking
    // ...
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { pay };
