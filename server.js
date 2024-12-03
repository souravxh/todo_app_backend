const express =require("express");
const mongoose =require("mongoose");
const cors = require("cors");

const app=express();
const PORT =5000;

app.use(express.json());
app.use(cors());

mongoose
.connect(
    "mongodb+srv://souravjha20212156:admin12345@cluster0.glizg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
 {}
)
.then(() => {
    console.log("CONNECTED TO THE DATABASE");
}
);


app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
}
);
const userRoute=require("./user.route")
const todoRoute=require("./todo.route")
app.use("/user",userRoute);
app.use("/todo",todoRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);