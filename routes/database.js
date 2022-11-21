const express = require('express');
const router = express.Router();
const controller = require("../controllers/stops");
/* GET users listing. */

router.get("/", async (req, res) => {
    res.send("DB Test Page")
});

module.exports = router;