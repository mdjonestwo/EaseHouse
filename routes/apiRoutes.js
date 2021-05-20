const db = require("../models");

module.exports = (app) => {
  //GET ONE PALLET ROUTE
  app.get("/api/cooler/:location", (req, res) => {
    console.log("Get");
    db.Pallet.find({ Location: req.params.location })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //GET ALL PALLETS ROUTE
  app.get("/api/cooler/", (req, res) => {
    db.Pallet.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //GET PRODUCTS ON A PALLET

  //POST ROUTE
  app.post("/api/cooler", (req, res) => {
    db.Pallet.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // DELETE ROUTE
  app.delete("/api/cooler/:id", (req, res) => {
    console.log("Delete");
    db.Pallet.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //PUT ROUTE
  app.put("/api/cooler/:id", (req, res) => {
    db.Pallet.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Product: req.body.Product,
          Unit: req.body.Unit,
          Quantity: req.body.Quantity,
          Julian: req.body.Julian,
        },
      },
      { overwrite: true }
    )
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });
};
