const axios = require("axios");

const book = async (req, res) => {
  const { firstname, lastname, email, phoneNumber } = req.body;

  if (!firstname || !lastname || !email || !phoneNumber)
    return res.status(500).json({ message: "invalid request" });

  //consider using event emitters here
  const url = "http://localhost:5000/api/pay";
  await axios({
    method: "POST",
    url,
    data: {
      amount: 10,
      phone: phoneNumber,
    },
  })
    .then((response) => {
      if (response.status == 200) {
        res.status(200).json({
          message: "Stk push sent for booking fee payment",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = { book };
