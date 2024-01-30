// controllers/lipanampesa.js
require("dotenv").config();
const axios = require("axios");

const { generateAccessToken } = require("../../utils/generateAccessToken");
const { getTimestamp } = require("../../utils/timestamp"); // Assuming you have this utility function

// @desc initiate stk push
// @method POST
// @route /stkPush
// @access public
const generateSTKPush = async (req, res) => {
  try {
    const accessToken = await generateAccessToken();
    console.log(accessToken);
    const timestamp = getTimestamp();
    const password = Buffer.from(
      `${process.env.BUSINESS_SHORT_CODE}${process.env.PASS_KEY}${timestamp}`
    ).toString("base64");

    const requestBody = {
      BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerBuyGoodsOnline", // Or 'CustomerBuyGoodsOnline' depending on your use case
      Amount: req.body.amount, // Amount to be transacted
      PartyA: req.body.phone, // Phone number initiating the transaction
      PartyB: process.env.BUSINESS_SHORT_CODE, // Usually the same as BusinessShortCode
      PhoneNumber: req.body.phone, // Phone number to receive STK prompt
      CallBackURL: "https://yourdomain.com/path/to/your/callback", // Your callback URL
      AccountReference: "Your Reference", // A reference for the transaction
      TransactionDesc: "Payment Description", // A description for the transaction
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  generateSTKPush,
};
