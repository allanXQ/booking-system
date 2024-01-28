const { default: axios } = require("axios");

const pay = async (req, res) => {
  const { msisdn, amount } = req.body;
  const url = " https://tinypesa.com/api/v1/express/initialize";
  await axios({
    method: "post",
    url: url,
    data: {
      amount,
      msisdn,
      account_no: "booking",
    },
    headers: {
      Apikey: process.env.TINYPESA_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 200) {
        res.status(200).json({
          message: response?.data?.message,
        });
      }
    })
    .catch((error) => {
      console.log("pay", error);
      res.status(500).json({ error });
    });
};

module.exports = { pay };
