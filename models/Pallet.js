const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PalletSchema = new Schema({
  Day: {
    type: Date,
    default: Date.now,
  },
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
  Location: {
    type: String,
  },
});

const Pallet = mongoose.model("Pallet", PalletSchema);

module.exports = Pallet;
