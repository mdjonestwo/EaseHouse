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
  Filled: {
    type: Boolean,
    default: function () {
      if (this.Product) {
        return true;
      }
      return false;
    },
  },
  Location: {
    type: String,
  },
});

const Pallet = mongoose.model("Pallet", PalletSchema);

module.exports = Pallet;
