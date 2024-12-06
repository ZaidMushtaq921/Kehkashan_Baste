const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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
  isadmin: {
    type: Boolean,
    default: false,
  },
  picture: {
    type: String,
  },
  contact: {
    type: Number,
  },
  cart: {
    type: Array,
    default:[]
  },
  orders: {
    type: Array,
    default:[]
  },
});
module.exports = mongoose.model("User", userSchema);
