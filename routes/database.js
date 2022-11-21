const { raw } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/stops");
/* GET users listing. */



router.get("/", async (req, res)=>{
    const out=await controller.getOneStop(req, res);
    console.log(out);
   
});

module.exports = router;
