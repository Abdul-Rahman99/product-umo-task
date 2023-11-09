const path = require("path");

// Dependancies
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const cors = require("cors");
// const compression = require("compression");

dotenv.config({ path: "config.env" });

const dbConnection = require("./config/database") ;
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");

const productRoutes = require("./routes/productRoutes");


// connect to the DB
dbConnection();

// Express App
const app = express();
app.use(express.json()); // parsing to json


// Middlewares

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/products", productRoutes);


app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global Errors Handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 3333 ;
const server = app.listen(PORT, () => {
  console.log(`App Running on PORT ${PORT}`);
});

// @desc    Handling rejection outside Express
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("Shutting Down Server......");
    process.exit(1);
  });
});

module.exports = app