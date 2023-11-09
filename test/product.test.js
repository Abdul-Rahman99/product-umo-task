const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const Product = require("../models/product");
var request = require("supertest");

var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

// Configure chai
chai.use(chaiHttp);

describe("Product CRUD Operations", function () {

  let createdProductId ;

  it("return list of products", function (done) {
    request(app)
      .get("/products")
      .expect(200)
      .expect((res) => {
        console.log("Products list >>> " + JSON.stringify(res.body));
      })
      .end(done);
  });

  // Create a product
  it("should create a new product", function (done) {
    request(app)
      .post("/products/create")
      .send({
        title: "Test Product1",
        description: "This is a test product",
        uom: [{ title: "Test UOM", description: "Test UOM Description" }],
      })
      .expect(201)
      .expect((res) => {
        createdProductId = res.body.data._id;
        console.log("Created Product ID >>> " + createdProductId);
      })
      .end(done);
  });

  // Retrieve product information
  it("should retrieve product information", function (done) {
    request(app)
      .get(`/products/${createdProductId}`)
      .expect(200)
      .expect((res) => {
        console.log("Retrieved Product Info >>> " + JSON.stringify(res.body));
      })
      .end(done);
  });

  // Update a product details
   it("should update product details", function (done) {
     request(app)
       .put(`/products/update/${createdProductId}`)
       .send({
         title: "Updated Test Product1",
         description: "Updated description",
       })
       .expect(200)
       .expect((res) => {
         console.log("Updated Product Info >>> " + JSON.stringify(res.body));
       })
       .end(done);
   });

   // Delete a product
   it("should delete a product", function (done) {
     request(app)
       .delete(`/products/delete/${createdProductId}`)
       .expect(200)
       .expect((res) => {
         console.log("Deleted Product Info >>> " + JSON.stringify(res.body));
       })
       .end(done);
   });
});
