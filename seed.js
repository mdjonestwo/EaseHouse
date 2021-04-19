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
        Product: "hey",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "20L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "yes!",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "19L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "18L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "17L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "16L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "15L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "14L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "13L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "12L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "11L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "10L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "9L",
        __v: 0,
      },
      {
        _id: new ObjectId(),
        Product: "",
        Unit: "",
        Quantity: null,
        Julian: null,
        Location: "8L",
        __v: 0,
      },
    ],
  },
];
