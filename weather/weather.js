const request = require('request');

var getWeather = function(latitude, longtitude, callback) {
    request({
        url: 'https://api.darksky.net/forecast/77be46c3bb15d417320755805d721c00/'+ latitude + ',' + longtitude , 
        json: true
      } , function(error, response, body) {
        if(error){
          callback('Unable to connect to the Forecast.io');
        }
        else if(response.statusCode === 400){
          callback('Unable to fetch weather');
        }
        else if(response.statusCode === 200){   //like '400'
          callback(undefined, {
            temperature: body.currently.temperature
            ,apparentTemperature: body.currently.apparentTemperature
          })
        }
      });
}

module.exports.getWeather = getWeather;