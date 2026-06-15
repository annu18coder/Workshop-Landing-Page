const mongoose = require("mongoose");

// Schema design
const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        
        phone: {
            type: String,
            required: [true, "Phone Number is required"],
            minlength: 10,
            maxlength: 10,
        }
    },
    
    {timestamps: true,}
);

module.exports = mongoose.model("Enquiry", enquirySchema);