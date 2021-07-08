$(() => {
    // Au démarrage du site, on récupère la liste de tous les pays
	// et on "branche" une fonction au click du bouton
    getAllCountries();


    $("#btnShowData").click(handleClick);

});



// Fonction qui effectue une requête au backend quand on clique
// sur le bouton Show Data en récupérant la valeur de l'input
// entrée par l'utilisateur
const handleClick = async () => {
    if($("#countryName").is(':checked')){
        const userSearchValue = $("#inputValue").val();
        const res = await fetch(`http://localhost:8000/${userSearchValue}`);
        const jsonRes = await res.json();
        updateList(jsonRes.data);
    } else if ($("#capitalName").is(':checked')){
        const userSearchValue = $("#inputValue").val();
        const res = await fetch(`http://localhost:8000/country/${userSearchValue}`);
        const jsonRes = await res.json();
        updateList(jsonRes.data);
    } else if (!$("#countryName").is(':checked') && !$("#capitalName").is(':checked')){
        alert("You haven't checked any options !")
    } else {
        alert("This country name or capital doesn't exist !")
    }
}

const getAllCountries = async () => {
    const allCountries = await fetch("http://localhost:8000/all");
    // On transforme la réponse en objet JSON utilisable dans notre code JS
    const countries = await allCountries.json();
    console.log(countries);
    updateList(countries.data);

}

// Fonction qui permet de mettre à jour la liste en injectant du HTML
// dans cette dernière
const updateList = (list) => {
    // Effacer la liste existante 
    $("#countryList").empty();

    // Mise à jour de la liste à l'écran 
    list.forEach((country) => {
        $("#countryList").append(
            `
            <li>
                <p>${country.name} - ${country.capital}</p>
            </li>
            `
        ) 

    }); 

}

const getCountry = () => {

}






/* $(() => {
    getInitialData();

    $("button").click(handleClick)
});

async function getInitialData() {
    const res = await fetch("http://localhost:8000/all");
    const jsonRes = await res.json();

    updateList(jsonRes.data);
}

function updateList(list) {
    // Effacer la list existante 

    $("#list").empty();

    // Mise à jour de la liste à l'écran
    list.forEach(country) =>
    $("#list").append(
        `
        <li>
            <p>${country.name} - ${country.capital}</p>
        </li>
        `
        ) 
    )
}


async function handleClick() {
    const userSearchValue = $("input").val();
    console.log(userSearchValue);
    const res = await fetch(`http://localhost:8000/${userSearchValue}`);
    const resJson = await res.json();

    updateList(jsonRes.data);

}
*/




