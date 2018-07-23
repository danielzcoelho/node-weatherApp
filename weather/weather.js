const request = require('request');

var getWeather = (lat, lng, callback) => {

  request ({

    url: `https://api.darksky.net/forecast/00fd769cbc26516cf1a53b97f37c5cc2/${lat},${lng}`,
    json: true

  }, (error, response, body) => {
    
    if (error) {
      callback('Unable to connect to forecast.io servers');

    } else {
      if (response.statusCode === 400) {
        callback('Unable to fetch weather');

      } else {
        if (response.statusCode === 200) {
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          });
        }
      }
    }
  })
};

module.exports = {
  getWeather
};