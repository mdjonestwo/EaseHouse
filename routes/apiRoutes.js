const express = require("express");
const router = express.Router();
const db = require("../models");

  // Add Pallet to db
  router.post("/cooler", (req, res) => {
    db.Pallet.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //Get all pallets in db
  router.get("/cooler/", (req, res) => {
    console.log(res)
    db.Pallet.find({})
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
  });

  //Get specific pallet from db
  router.get("/cooler/:location", (req, res) => {
    console.log("Get");
    db.Pallet.find({ Location: req.params.location })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //Get specific pallet for updating
  router.get("/cooler/update/:id", (req, res) => {
    console.log("Get UPDATE");
    db.Pallet.findById({ _id: req.params.id})
      .then((response) => {
        res.json(response);

      })
      .catch((err) => {
        res.json(err);
      });
    
  });

  //Update specific pallet
  router.put("/cooler/update/:id", (req, res) => {
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
      { new: true }
    )
      .then((response) => {
        res.json(response);
        console.log("go to bed" + response)
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  // Delete pallet
  router.delete("/cooler/:id", (req, res) => {
    console.log("Delete");
    db.Pallet.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // ********************** User API Routes **********************
  // router.get("/users", (req, res) => {
  //   db.User.find()
  //     .then((response) => {
  //       res.json(response);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

module.exports = router; 