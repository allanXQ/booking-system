const router = require("express").Router();
const { book } = require("../controllers/book");

const { generateSTKPush } = require("../controllers/pay/generateSTKPush");
const { darajaWebhook } = require("../controllers/pay/darajaWebhook");
const { confirmPayment } = require("../controllers/pay/confirmPayment");

router.post("/book", book);
router.post("/pay", generateSTKPush);
router.post("/daraja/webhook", darajaWebhook);
router.post("/daraja/confirmation", confirmPayment);

module.exports = router;
