const axios = require("axios");
const { sendSMS } = require("../utils/sendsms");

const book = async (req, res) => {
  const { firstname, lastname, email, phoneNumber } = req.body;

  if (!firstname || !lastname || !email || !phoneNumber)
    return res.status(500).json({ message: "invalid request" });

  sendSMS("Hello, your booking has been received", phoneNumber);

  // //consider using event emitters here
  // const url = "http://localhost:5000/api/pay";
  // await axios({
  //   method: "POST",
  //   url,
  //   data: {
  //     amount: 1000,
  //     msisdn: phoneNumber,
  //   },
  // })
  //   .then((response) => {
  //     if (response.status == 200) {
  //       res.status(200).json({
  //         message: "Stk push sent for booking fee payment of 1000",
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("book", error);
  //     res.status(500).json({ error });
  //   });

  res.status(200).json({ message: "Booking successful" });
};

module.exports = { book };
