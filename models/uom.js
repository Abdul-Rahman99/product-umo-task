const { Schema, model } = require("mongoose");
const UomImage = require("./uomImage");
const UomBarcode = require("./uomBarcode");

const uomSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    images: [UomImage.schema],
    barcodes: [UomBarcode.schema],
  },
  { timestamps: true }
);

module.exports = model("Uom", uomSchema);
