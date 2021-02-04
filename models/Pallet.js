const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PalletSchema = new Schema({
  day: Date,
  Product: {
    type: String,
  },
  Unit: {
    type: String,
  },
  Quantity: {
    type: Number,
  },
  Julian: {
    type: Number,
  },
});

const Pallet = mongoose.model("Pallet", PalletSchema);

module.exports = Pallet;
