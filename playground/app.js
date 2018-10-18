const request = require('request');

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBWZifKyqkqlZSw-GGioVN1qbZmWKlj_yE&address=1301%20lombard%20street%20philadelphia%20",
    json: true
} , function(error, reponse, body){        //argumetns are : error / response / body
    console.log(JSON.stringify(body, undefined, 2));
});