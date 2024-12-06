const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username must be provided"],
  },
  email: {
    type: String,
    required: [true, "user Email must be provided"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
    select: false,
  },
  picture: {
    type: String,
  },
  products: {
    type: Array,
    default: [],
  },
  gstin:{
    type:String
  }
});
module.exports = mongoose.model("Owner", ownerSchema);
