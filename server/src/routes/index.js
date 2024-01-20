const router = require("express").Router();
const { book } = require("../controllers/book");

router.post("/book", book);
router.post("/book/:id", book);

module.exports = router;
