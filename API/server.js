const express = require("express");
const app = express();
const PORT = 8000;
const countriesData = require("../countriesData.json");
const cors = require("cors");
app.use(cors());
let countriesNames = []
for(let i = 0; i < countriesData.length; i ++){
    countriesNames.push(countriesData[i].name)
}



app.get('/all', (req, res) => {
    res.json({
        data: countriesNames
    });
})




app.listen(PORT, () => {
    console.log("Server is running at port 8000...")
})