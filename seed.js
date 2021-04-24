const { ObjectId } = require("bson");
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
        _id: new ObjectId(),
        Product: "test",
        Unit: "",
        Quantity: null,
        Julian: null,
        Filled: true,
        Location: "20L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "test2",
        Unit: "",
        Quantity: null,
        Julian: null,
        Filled: false,
        Location: "20L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Filled: false,
        Location: "18L",
        __v: 0,
      },
    ],
  },
];
