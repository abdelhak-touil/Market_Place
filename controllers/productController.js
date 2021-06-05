const Product = require("../models/productModel");
const expressAsyncHandler = require("express-async-handler");

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(401);
  throw new Error("Not Authorized");
  res.json(products);
});

const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

module.exports = getProducts;
module.exports = getProductById;
