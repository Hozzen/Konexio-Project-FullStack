var countries
const getAllCountries = async () => {
    const allCountries = await fetch("http://localhost:8000/all");

    countries = await allCountries.json();
    console.log(countries)
}

$(getAllCountries)

$("#btnShowData").click(() => {
    for(let i = 0; i < countries.data.length; i ++){
        $(countryList).append(`<li>${countries.data[i]}</li>`)
    }
    
});


