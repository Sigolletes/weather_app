

// FUNCTION FOR GET LATITUDE AND LONGITUDE OF A CITY OR TOWN
async function coordinates(city) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=&{city}`, {
      headers: {
        'X-Api-Key': 'hNEVS5nvnsLq/duIAcYtaw==dz2EDizcyvLNAwrj',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
console.log(await coordinates(madrid));


// FUNCTION FOR GET THE WEATHER OF A COORDINATES
async function searchWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=7b9431912f75bac931c562be0a2c6a14`);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
console.log(await searchWeather());



weatherKey="7b9431912f75bac931c562be0a2c6a14"
geoKey="hNEVS5nvnsLq/duIAcYtaw==dz2EDizcyvLNAwrj"
