// customValidations.js
const { body, param, validationResult } = require("express-validator");

const validatorMiddleware = require("../../middlewares/validatorMiddleware");

const validateCreateProduct = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),

  // Custom validation for UOMs
  body("uom.*.title").notEmpty().withMessage("UOM title is required"),
  body("uom.*.description")
    .notEmpty()
    .withMessage("UOM description is required"),

  // Custom validation for barcodes
  body("uom.*.barcodes.*.barcode")
    .notEmpty()
    .withMessage("Barcode is required"),

  // Custom validation for images
  body("uom.*.images.*.url").isURL().withMessage("Image URL is not valid"),

  // Custom validation for addons
  body("addons.*.title").notEmpty().withMessage("Addon title is required"),
  body("addons.*.description")
    .notEmpty()
    .withMessage("Addon description is required"),

  // Custom validation for addon items
  body("addons.*.items.*.title")
    .notEmpty()
    .withMessage("Addon Item title is required"),
  body("addons.*.items.*.description")
    .notEmpty()
    .withMessage("Addon Item description is required"),

  validatorMiddleware,
];

const validateUpdateProduct = [
  param("productId").notEmpty().withMessage("Product ID is required"),

  body("title").optional().notEmpty().withMessage("Title is required"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required"),

  // Custom validation for UOMs
  body("uom.*.title")
    .optional()
    .notEmpty()
    .withMessage("UOM title is required"),
  body("uom.*.description")
    .optional()
    .notEmpty()
    .withMessage("UOM description is required"),

  // Custom validation for barcodes
  body("uom.*.barcodes.*.barcode")
    .optional()
    .notEmpty()
    .withMessage("Barcode is required"),

  // Custom validation for images
  body("uom.*.images.*.url")
    .optional()
    .isURL()
    .withMessage("Image URL is not valid"),

  // Custom validation for addons
  body("addons.*.title")
    .optional()
    .notEmpty()
    .withMessage("Addon title is required"),
  body("addons.*.description")
    .optional()
    .notEmpty()
    .withMessage("Addon description is required"),

  // Custom validation for addon items
  body("addons.*.items.*.title")
    .optional()
    .notEmpty()
    .withMessage("Addon Item title is required"),
  body("addons.*.items.*.description")
    .optional()
    .notEmpty()
    .withMessage("Addon Item description is required"),
  validatorMiddleware,
];

const validateDeleteProduct = [
  param("productId").notEmpty().withMessage("Product ID is required"),

  validatorMiddleware,
];

module.exports = {
  validateCreateProduct,
  validateDeleteProduct,
  validateUpdateProduct
};
