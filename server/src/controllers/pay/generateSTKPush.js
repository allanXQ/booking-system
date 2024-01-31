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
  const accessToken = await generateAccessToken();
  const timestamp = getTimestamp();
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const password = Buffer.from(
    `${process.env.BUSINESS_SHORT_CODE}${process.env.PASS_KEY}${timestamp}`
  ).toString("base64");
  const auth = "Bearer KuotGTeG5DZJZacKDc9q1YZkQVOh"; //+ accessToken;

  axios
    .post(
      url,
      {
        BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: "10",
        PartyA: req.body.phone, //phone number to receive the stk push
        PartyB: process.env.BUSINESS_SHORT_CODE,
        PhoneNumber: req.body.phone, //phone number to receive the stk push
        CallBackURL: "https://google.com",
        AccountReference: "UMESKIA PAY",
        TransactionDesc: "Mpesa Daraja API stk push test",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    )
    .then((response) => {
      res.send(
        "😀 Request is successful done ✔✔. Please enter mpesa pin to complete the transaction"
      );
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("❌ Request failed");
    });
};

module.exports = {
  generateSTKPush,
};
