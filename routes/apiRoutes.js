const db = require("../models");

module.exports = (app) => {
  app.get("/api/cooler", (req, res) => {
    db.Pallet.find({}).then((response) => {
      res.json(response);
    });
  });

  app.post("/api/cooler", (req, res) => {
    db.Pallet.create(req.body).then((response) => {
      res.json(response);
    });
  });
};
