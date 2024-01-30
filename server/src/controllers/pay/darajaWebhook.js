require("dotenv").config();
const { default: mongoose } = require("mongoose");
const { sendSMS } = require("../../utils/sendsms");
const crypto = require("crypto");

const darajaWebhook = async (req, res) => {
  try {
    const { Msisdn, Amount, ResultDesc, ResultCode, MpesaReceiptNumber } =
      req.body;
    const body = `You booking confirmation code is- ${crypto.randomBytes(256)}`;

    await sendSMS(body, Msisdn);

    return res.status(200).json({ message: "payment success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { darajaWebhook };
