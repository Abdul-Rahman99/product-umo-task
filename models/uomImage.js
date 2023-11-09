const { Schema, model } = require("mongoose");

const uomImageSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("UomImage", uomImageSchema);
