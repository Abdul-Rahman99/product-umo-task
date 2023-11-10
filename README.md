# Product CRUD Operations

## Overview

A Node.js application that manages products with the following structure: 
Products linked to UOM (Unit of Measure), where each UOM is linked to UOM Image and 
UOM Barcode Relation. Additionally, each UOM is linked to Addon, and Addons can have 
multiple Addon Items.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage) & [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

visual studio code, Mongodb Atlas, Postman(for manual testing)

### Installation

```bash
# Example installation commands
git clone https://github.com/Abdul-Rahman99/product-umo-task.git
cd product-umo-task
npm i
```

----------------------------------------------------------------------------------------
## Usage & API Endpoints

### 1. Running Locally

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Abdul-Rahman99/product-umo-task.git
    cd your-project
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start || nodeman: start
    ```

4. Open your web browser and visit [http://localhost:3333](http://localhost:3333) to access the application.

### 2. Making API Requests

#### Create a New Product
To create a new product, send a POST request to the following endpoint:

- **Endpoint:** `/products/create`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "title": "Product Title",
    "description": "Product Description",
    "uom": [
      {
        "title": "UOM Title",
        "description": "UOM Description"
      }
    ]
  }
  ```
  - **Response:**
  ```json
    {
    "status": "success",
    "data": {
      "_id": "generatedProductId",
      // Other product details
    }
  }
  ```

### Retrieve Product Information
To retrieve information about a product, send a GET request to the following endpoint:

- **Endpoint:** `/products/:productId`
- **Method:** `GET`
- **Response:**
  ```json
{
  "data": {
    "_id": "productId",
    // Product details
  }
}
```

### Update Product Information
To update the details of a product, send a PUT request to the following endpoint:

- **Endpoint:** `/products/update/:productId`
- **Method:** `PUT`
- **Request:**
  ```json
  {
  "title": "Updated Product Title",
  "description": "Updated Product Description"
  // Other updated fields
  }
 ```
- **Response:**
  ```json
  {
    "data": {
      "_id": "productId",
      // Updated product details
    }
  }
   ```

### Delete Product Information
To delete a product, send a DELETE request to the following endpoint:

- **Endpoint:** `/products/delete/:productId`
- **Method:** `DELETE`
- **Response:**
    (200) ok

----------------------------------------------------------------------------------------------------- 
## TESTING 

### Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Running Tests

To run the tests, follow these steps:

1. Open a terminal and navigate to the root directory of your project:

    ```bash
    cd /path/to/your/project
    ```

2. Install the test dependencies:

    ```bash
    npm install --save-dev
    ```

3. Run the tests:

    ```bash
    npm test
    ```

The testing framework will execute the test scripts you've written and provide output indicating whether the tests passed or failed.

#### Test Scripts

  ```json
  "scripts": {
    "test": "mocha --timeout 10000",
    }
  ```


----------------------------------------------------------------------------------------

### Built With

Node.js
Express.js
MongoDB
Mongoose

### third-party libraries:
  cors
  dotenv
  esm
  express
  express-async-handler
  express-validator
  mongoose
  morgan
  nodemon
  slugify

-----------------------------------------------------------------------------------------------------------
