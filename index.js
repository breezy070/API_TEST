const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");


async function getApiData() {

    
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;


    console.log("lat: " + latitude);
    console.log("lon: " + longitude);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain&daily=sunrise,sunset`;
    const options = {
        method: 'GET',
        // headers: {
        //     'x-rapidapi-key': "961c8493b3msh7791f7995ea79d5p181750jsn32726307c3d7",
        //     'x-rapidapi-host': 'meteostat.p.rapidapi.com'
        // }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
