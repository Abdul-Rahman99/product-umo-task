const { Schema, model } = require("mongoose");

const uomBarcodeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    barcode: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("UomBarcode", uomBarcodeSchema);
