import express from "express"
import connectDB from "./Database/MongoDB.js";
const app = express();

app.get("/", (req, res) =>{
    res.send("Hey!!")
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})