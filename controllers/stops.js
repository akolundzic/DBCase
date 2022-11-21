const express = require("express");
const app = express();
const {stopschema} = require("../models/bahnhoefe");

const getStops = async (req, res) => {
    const {NAME,DS1006}= req.body;
    try {
        await stopschema.findOne({ NAME:NAME }).then((data)=>{
            res.status(200).json(data);
        });
    }
    catch(err){
        res.status(400).json(err);
    }

};