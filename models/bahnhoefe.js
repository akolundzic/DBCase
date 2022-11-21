const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stopsSchema = new Schema({
  EVA_NR: { type: String },
  DS100: { type: String },
  IFOPT: { type: String },
  NAME: { type: String },
  Verkehr: { type: String },
  Laenge: { type: String },
  Breite: { type: String },
  Betreiber_Name: { type: String },
  Status: { type: String },
});

const stopsschema = mongoose.model("Bahnhoefe", stopsSchema);
module.exports = { stopsschema };
