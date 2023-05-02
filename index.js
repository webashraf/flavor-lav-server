const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefData = require("./jsonData/chef.json");

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Flavor Lav server is running");
})








app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})