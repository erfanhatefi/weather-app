const request = require('request');

request({
    //could not use Google`s API due to billings
    //url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBWZifKyqkqlZSw-GGioVN1qbZmWKlj_yE&address=1301%20lombard%20street%20philadelphia%20",
    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
    json: true
} , function(error, reponse, body){        //argumetns are : error / response / body
    console.log(JSON.stringify(body, undefined, 2));
});