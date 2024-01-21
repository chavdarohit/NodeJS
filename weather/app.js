let { getGeoCode } = require("./utils/geocode");
let { getForecast } = require("./utils/forecast");

let location = process.argv[2];
if (!location) {
  console.log("Please enter location in the Command Line");
  return;
}

getGeoCode(location, (error, data) => {
  if (!error) {
    console.log("data", data.name);

    getForecast(data.latitude, data.longitude, (error, data) => {
      if (!error) console.log(data);
      else console.log(error);
    });
  } else console.log("Error", error);
});
