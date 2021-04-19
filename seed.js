const seeder = require("mongoose-seed");

const db = "mongodb://localhost/happydirtdb";

seeder.connect(db, function () {
  seeder.loadModels(["./models"]);
  seeder.clearModels("Pallet", function () {
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

const data = [
  {
    model: "Pallet",
    documents: [
      {
        _id: "507f1f77bcf86cd799439011",
        Product: "Test",
        Unit: "empty",
        Quantity: null,
        Julian: null,
        Location: "10L",
        __v: 0,
      },
    ],
  },
];
