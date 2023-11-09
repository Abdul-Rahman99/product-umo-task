const { Schema, model } = require("mongoose");
const Uom = require("./uom");
const Addon = require("./addon");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    uom: [Uom.schema],
    addons: [Addon.schema],
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
