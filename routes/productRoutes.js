const express = require("express");
const asyncHandler = require("express-async-handler");

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
} = require("../utils/validators/customValidations");

const router = express.Router();

// Define routes for products
router.get("/", getAllProducts);
router.get("/:productId", getProduct);

router.post("/create", validateCreateProduct, createProduct);
router.put("/update/:productId", validateUpdateProduct, updateProduct);
router.delete(
  "/delete/:productId",
  validateDeleteProduct,
  deleteProduct
);

module.exports = router;
