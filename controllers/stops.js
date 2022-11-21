const express = require("express");
const app = express();
const { testit, stopsschema } = require("../models/bahnhoefe");
const mongoose = require("mongoose");

const getOneStop = async (req, res) => {
  const { NAME, NAME2 } = req.body;
  const errors = {};
  errors["data"] = false;
  errors["message"] = "";
  let dataStops = {};
  try {
    const obj = await stopsschema.findOne({ NAME: NAME2 });
    const obj2 = await stopsschema.findOne({ NAME: NAME });
    if (obj2 != null && obj != null) {
      dataStops = {
        station1: {
          NAME: obj.NAME,
          DS100: obj.DS100,
          Laenge: obj.Laenge,
          Breite: obj.Breite,
        },
        station2: {
          NAME: obj2.NAME,
          DS100: obj2.DS100,
          Laenge: obj2.Laenge,
          Breite: obj2.Breite,
        },
      };
      res.status(200).send(dataStops);
      return dataStops;
    } else if (obj.NAME == obj2.NAME) {
      errors["message"] = "Haltestellen sind gleich";
      res.status(400).json({ errors: errors });
    } else {
      errors["message"] = "Die Haltestelle gibt es nicht";
      res.status(400).json({ errors: errors });
    }
  } catch (e) {
    res.status(400).json({ errors: e.message });
  }
};
const testrequest = async (req, res, next) => {
  res.send("Test Page");
};
module.exports = {
  getOneStop: getOneStop,
  testrequest: testrequest,
};
