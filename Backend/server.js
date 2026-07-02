const express=require("express");
const cors=require("cors");
//const Complaint=require("./models/complaint");
require("./config/db");
const adminRoutes=require("./routes/adminRoutes");
const userRoutes=require("./routes/userRoutes");
const complaintRoutes=require("./routes/complaintRoutes");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/complaints",complaintRoutes);
app.use("/api/admin",adminRoutes);
app.get("/",(req,res)=>{res.send("Server running on port ");

});
const PORT=5000;
app.use("/uploads",
express.static("uploads"));
app.listen(PORT, () => {
console.log("Server running on port 5000");
});

