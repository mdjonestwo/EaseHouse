let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/happydirtdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let palletSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    pallets: [
      {
        Location: "20L",
      },
    ],
  },
];

db.Pallet.insertMany(palletSeed)
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
