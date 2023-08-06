const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false, // Adjust as needed
  },
  keywords: {
    type: String,
    required: false, // Adjust as needed
  },
});

const User = mongoose.model("User", userSchema);

export default User;
