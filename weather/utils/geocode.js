let request = require("request");

function getGeoCode(address, callback) {
  const geoCodeUrl =
    "http://api.positionstack.com/v1/forward?access_key=fb49a965c230e45a173c2cb78c72f716&query=" +
    encodeURIComponent(address);

  request({ uri: geoCodeUrl, json: true }, (err, response) => {
    if (err) callback("Something wrong happened", undefined);
    else {
      callback(undefined, {
        name:
          response.body.data[0].locality +
          " , " +
          response.body.data[0].region +
          " ,  " +
          response.body.data[0].country,
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
      });
    }
  });
}


module.exports = { getGeoCode};
