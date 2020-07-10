const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
  },
  address: {
    type: String,
  },
  created_post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  no_of_post: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
