const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  productprice: {
    type: Number,
    required: true,
  },
  productimage: {
    type: String,
    required: true,
  },
  productdiscount: {
    type: Number,
    default: 0,
  },
  productbgColor: {
    type: String,
  },
  panelcolor: {
    type: String,
  },
  textColor: {
    type: String,
  },
});
module.exports = mongoose.model("Product", productSchema);
