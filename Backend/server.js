require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin:[
    "http://localhost:5173",
    "https://workshop-landing-page-five.vercel.app"
  ],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("PORT:", process.env.PORT);
console.log("MONGO:", process.env.MONGO_URI);

const enquiryRoute = require("./routes/enquiryRoutes");
app.use("/api", enquiryRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ MongoDB Error:", err);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
});