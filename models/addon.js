const { Schema, model } = require("mongoose");
const AddonItem = require("./addonItem");

const addonSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    items: [AddonItem.schema],
  },
  { timestamps: true }
);

module.exports = model("Addon", addonSchema);
