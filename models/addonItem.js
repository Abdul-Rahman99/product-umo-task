const { Schema, model } = require("mongoose");

const addonItemSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

module.exports = model("AddonItem", addonItemSchema);
