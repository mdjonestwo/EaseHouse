const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PalletSchema = new Schema({
  Day: {
    type: Date,
    default: Date.now,
  },
  Product: {
    type: String,
    require: [true, "Select a product"],
  },
  Unit: {
    type: String,
    require: [true, "Select a farm code"],
  },
  Quantity: {
    type: Number,
    require: [true, "Add a quantity"],
  },
  Julian: {
    type: Number,
    require: [true, "Add julian date"],
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
