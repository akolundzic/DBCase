const express = require("express");
const router = express.Router();
const controller = require("../controllers/stops");
const { parseit, getDistance } = require("../middleware/functions");

router.get("/:id/:id2", async (req, res, next) => {
  const id = req.params.id;
  const id2 = req.params.id2;
  let error = "";
  let distance = 0;
  let response = {};

  try {
    const hal1 = await controller.getOneStop(req, res, next, id);
    const hal2 = await controller.getOneStop(req, res, next, id2);
    console.log(hal2);
    if (hal1 != "" && hal2 != "") {
      const st1 = hal1[0];
      const st2 = hal2[0];

      let l1 = parseit(st1.Laenge);
      let l2 = parseit(st2.Laenge);
      let b1 = parseit(st1.Breite);
      let b2 = parseit(st2.Breite);
      const a = { latitude: b1, longitude: l1 };
      const b = { latitude: b2, longitude: l2 };
      distance = getDistance(a, b);
      response = {
        from: st1.NAME,
        to: st2.NAME,
        distance: distance,
        unit: "km",
      };
      res.status(200).json(response);
    } else if (hal1 == "") {
      error = "Für " + id + " wurde keine Haltestelle gefunden";
      res.status(404).json({ error: error });
    } else {
      error = "Für " + id2 + " wurde keine Haltestelle gefunden";
      res.status(404).json({ error: error });
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
