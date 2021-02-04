let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/happydirtdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let palletSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    pallet: [
      {
        Product: "Green Bell Peppers",
        Unit: "1 Buschel",
        Quantity: 50,
        Julian: 035,
      },
    ],
  },
];

db.Pallet.deleteMany({})
  .then(() => db.Pallet.insertMany(palletSeed))
  .then((data) => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
