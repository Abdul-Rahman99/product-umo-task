// @desc    This approach is to link Addon with UOM (Both approaches can be implemented by the need)
// @usage   To use this approach just remove the comments (ctrl+a) + (ctrl+/)
// @note    You must delete the other approch or a confelicsion will aappear

// const mongoose = require("mongoose");

// // Schema for UOM Image
// const uomImageSchema = new mongoose.Schema({
//   url: String,
// });

// // Schema for Barcode
// const barcodeSchema = new mongoose.Schema({
//   barcode: String,
// });

// // Schema for UOM Barcode Relation
// const uomBarcodeRelationSchema = new mongoose.Schema({
//   barcodes: [barcodeSchema],
// });

// // Schema for Addon Item
// const addonItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
// });

// // Schema for Addon
// const addonSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   items: [addonItemSchema],
// });

// // Schema for UOM
// const uomSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   images: [uomImageSchema],
//   barcodeRelation: uomBarcodeRelationSchema,
//   addons: [addonSchema],
// });

// // Schema for Product
// const productSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   uoms: [uomSchema],
// });

// const UOMImage = mongoose.model("UOMImage", uomImageSchema);
// const Barcode = mongoose.model("Barcode", barcodeSchema);
// const UOMBarcodeRelation = mongoose.model(
//   "UOMBarcodeRelation",
//   uomBarcodeRelationSchema
// );

// const AddonItem = mongoose.model("AddonItem", addonItemSchema);
// const Addon = mongoose.model("Addon", addonSchema);
// const UOM = mongoose.model("UOM", uomSchema);
// const Product = mongoose.model("Product", productSchema);

// module.exports = {
//   UOMImage,
//   Barcode,
//   UOMBarcodeRelation,
//   AddonItem,
//   Addon,
//   UOM,
//   Product,
// };
