const express = require("express");
const dotenv=require("dotenv");
//Install express to create a server
const app = express();
dotenv.config({path:"./DBConfig.env"})
//Install Nodemon to automayically restart te server when there's a change in file
// Alter the start script in Package.json to start from app.js using "start": "nodemon app.js"
const dbURL=process.env.DB_URL;

//To connect MongoDB install mongoose
const mongoose= require("mongoose");

//To avoid Cors error install cors npm
const cors=require('cors');

//To avoid parsing issue install body-parser npm
const bodyParser=require("body-parser");

//CReating router component
const portfolioRoutes=require("./routes/react-portfolio");

app.use(cors());
app.use(bodyParser.json());


app.use("/myPortfolio",portfolioRoutes);
//Connecting MongoDB server client

mongoose.connect(dbURL);
const con= mongoose.connection;
try {
  con.on("open",()=>{
    console.log("MongoDB Connected!!!")
  });
} catch (error) {
  console.log(error);
}

app.get('/', (req, res) => {
  res.send("Hello....This")
})

app.listen(3000);