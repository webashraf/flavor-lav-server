const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefsData = require("./jsonData/chef.json");

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Flavor Lav server is running");
})


app.get("/chef", (req, res)=>{
    res.send(chefsData);
})

app.get("/chef/:id", (req, res) =>{
    const id  = req.params.id;
    const chef =  chefsData.find(chefs => chefs.id == id);
    res.send(chef);
})





app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})