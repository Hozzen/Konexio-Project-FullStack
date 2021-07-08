const express = require("express");
const app = express();
const PORT = 8000;
const countriesData = require("./countriesData.json");
const cors = require("cors");
app.use(cors());
/* let countriesNames = []
for(let i = 0; i < countriesData.length; i ++){
    countriesNames.push(countriesData[i].name)
} */



app.get('/all', (req, res) => {
    res.json({
        data: countriesData
    });
})

app.get("/:countryName", (req, res) => {
    const countryName = req.params.countryName.toLowerCase();

    /* On filtre les données des pays pour récupérer juste l'objet contenant le pays qui nous intéresse */
    const countryData = countriesData.filter((country) => country.name.toLowerCase() === countryName)

    res.json({
        data: countryData,
    })
})

app.get("/:countryCapital", (req, res) => {
    const countryCapital = req.params.countryCapital.toLowerCase();

    /* On filtre les données des pays pour récupérer juste l'objet contenant la capital qui nous intéresse */
    const countryData = countriesData.filter((country) => country.capital.toLowerCase() === countryCapital);

    res.json({
        data: countryData,
    })
})




app.listen(PORT, () => {
    console.log("Server is running at port 8000...")
})