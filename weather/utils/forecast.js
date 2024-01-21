let request = require("request");

function getForecast(lat, long, callback) {
  let uri =
    "http://api.weatherstack.com/current?access_key=42ed08a064975f97932f05e7bfea5ff1&query=" +
    lat +
    "," +
    long;
  request({ uri: uri, json: true }, (err, response) => {
    if (err) {
      callback("Something went wrong", undefined);
    } else if (response.body.error) {
      callback("Location not Found", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]} . Its ${response.body.current.temperature} tempreature, it feels like ${response.body.current.feelslike} tempreature`
      );
    }
  });
}

module.exports = { getForecast };
