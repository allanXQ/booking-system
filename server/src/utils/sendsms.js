require("dotenv").config();

async function sendSMS(body, recipient) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `App ${process.env.INFOBIP_API_KEY}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  var raw = JSON.stringify({
    messages: [
      {
        destinations: [{ to: recipient }],
        from: "ServiceSMS",
        text: body,
      },
    ],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(
    "https://3g1e1n.api.infobip.com/sms/2/text/advanced",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

module.exports = { sendSMS };
