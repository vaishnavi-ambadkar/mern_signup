// const mongoose = require('mongoose');

// const EmployeeSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     dob: Date, // Added Date of Birth field
//     password: String,
//     confirmPassword: String // Added Confirm Password field
// });

// const EmployeeModel = mongoose.model("employees", EmployeeSchema);
// module.exports = EmployeeModel;

// const mongoose = require('mongoose');

// const EmployeeSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     dob: Date, // Added Date of Birth field
//     password: String,
//     confirmPassword: String, // Added Confirm Password field
//     imageUrl: String, // Added image URL field to store the Cloudinary image URL
// });

// const EmployeeModel = mongoose.model("employees", EmployeeSchema);
// module.exports = EmployeeModel;
// const mongoose = require("mongoose");

// const EmployeeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   dob: { type: Date, required: true },
//   password: { type: String, required: true },
//   imageUrl: { type: String, default: "" }, // Added imageUrl field to store the Cloudinary URL
// });

// const EmployeeModel = mongoose.model("employees", EmployeeSchema);

// module.exports = EmployeeModel;
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date, // Added Date of Birth field
    password: String,
    confirmPassword: String // Added Confirm Password field
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;