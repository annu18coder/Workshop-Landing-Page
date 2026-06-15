const Enquiry = require("../models/model");

const submitEnquiry = async (req, res) => {
    const { name, email, phone } = req.body || {};

    if (!name || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: "All fields required!",
        });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(404).json({
            success: false,
            message: "Invalid email format",
        });
    }

    if (phone.length != 10) {
        return res.status(404).json({
            success: false,
            message: "Invalid Phone Number",
        });
    }

    try {
        const newEnquiry = new Enquiry({ name, email, phone });
        if (newEnquiry) {
            await newEnquiry.save();
            return res.status(200).json({
                success: true,
                message: "Enquiry submitted successfully!",
            });
        }
    }
    catch (err) {
        console.log("SAVE ERROR:", err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = submitEnquiry;