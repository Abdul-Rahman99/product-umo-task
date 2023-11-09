const asyncHandler = require("express-async-handler");

const ApiError = require("../utils/apiError");
const Product = require("../models/product");

// @desc    Create product
// @route   POST  /api/v1/products
const createProduct = asyncHandler(async (req, res) => {
  // Assuming the data comes from the request body
  try {
    const newProduct = await Product.create(req.body);
    console.log("Product created:", newProduct);

    // Send a JSON response with the created product
    res.status(201).json({ data: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);

    // Handle the error gracefully
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// @desc    Get specific product by id
// @route   GET /api/v1/products/:productId
const getProduct = asyncHandler(async (req, res, next) => {
  try {
    // Assuming the product ID is in the request params
    const productId = req.params.productId;
    const product = await Product.findById(productId).populate(
      "uom.images uom.barcodes addons.items"
    ); // Populate the referenced documents

    if (!product) {
      return next(new ApiError(`No document for this product ${product}`, 404));
    }

    res.status(200).json({ data: product });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// @desc    Get all products
// @route   GET /api/v1/products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


// @desc    Update specific product
// @route   PUT /api/v1/products/:productId
const updateProduct = asyncHandler(async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true, runValidators: true } // Options to return the updated document and run validators
    ).populate("uom.images uom.barcodes addons.items");

    if (!updatedProduct) {
      return next(
        new ApiError(`No document for this product ${updatedProduct}`, 404)
      );
    }
    res.status(200).json({ date: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// @desc    Delete specific product
// @route   DELETE /api/v1/products/:productId
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId).populate(
      "uom.images uom.barcodes addons.items"
    );

    if (!deletedProduct) {
      new ApiError(`No document for this product ${deleteProduct}`, 404);
    }

    res.status(200).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  getAllProducts ,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
