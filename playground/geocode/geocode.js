const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    //could not use Google`s API due to billings
    //url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBWZifKyqkqlZSw-GGioVN1qbZmWKlj_yE&address=1301%20lombard%20street%20philadelphia%20",
    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+encodedAddress+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    json: true
  },function(error, response, body) {
    if (error) {
      callback('Unable to connect to YAHOO servers.');
    } else if (body.query.count === 0) {
      callback('Unable to find that address.');
    } else if (body.query.count === 1) {
      callback(undefined, {       //argumetns are : error / response / body
        //console.log(JSON.stringify(body, undefined, 2));
    //console.log(JSON.stringify(response, undefined, 2));    
    //console.log(JSON.stringify(error, undefined, 2));
        title: body.query.results.channel.title,
        latitude: body.query.results.channel.item.lat,
        longitude: body.query.results.channel.item.long
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;