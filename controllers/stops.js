const express = require("express");
const app = express();
const { testit, stopsschema } = require("../models/bahnhoefe");
const mongoose = require("mongoose");
const errors = {};
//get on stops
const getOneStop = async (req, res, next, id) => {

  const filter = { DS100: id };
  try {
    const stop = await stopsschema.find(filter);
    if (stop) {
      res.status(200);
      return stop
    } else {
      errors["message"] = "Die Haltestelle gibt es nicht";
      res.status(400).json({ errors: errors });
    }
  } catch (e) {
    res.status(400).json({ errors: e.message });
  }
  next();
};

module.exports = {
  getOneStop: getOneStop,
};
