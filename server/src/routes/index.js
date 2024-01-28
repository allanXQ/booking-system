const router = require("express").Router();
const { book } = require("../controllers/book");
const { pay } = require("../controllers/pay");
const { tinypesaWebhook } = require("../controllers/tinypesaWebhook");

router.post("/book", book);
router.post("/pay", pay);
router.post("/tinypesa/webhook", tinypesaWebhook);

module.exports = router;
