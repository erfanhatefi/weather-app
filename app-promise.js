const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+encodedAddress+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

//get is a function that lets us get an Http request
//it actually returns it as a promise
axios.get(geocodeUrl).then(function(response){
    if(response.data.query.count === 0){
        throw new Error('Unable to find that address!');
    }

    var latitude = response.data.query.results.channel.item.lat;
    var longtitude = response.data.query.results.channel.item.long;
    var weatherUrl = 'https://api.darksky.net/forecast/77be46c3bb15d417320755805d721c00/'+ latitude + ',' + longtitude
    console.log(response.data.query.results.channel.location.city);
    return axios.get(weatherUrl);
}).then(function(response){
    var temperature = response.currently.temperature;
    var apparentTemperature = response.currently.apparentTemperature;
    console.log('It`s currently ' + temperature + ' , it feels like ' + apparentTemperature);

}).catch(function(error){
    if(error.code === 'ECONNRESET'){
        console.log('could not connect');
    }else{
        console.log(e.message);
    }
});



//API key :     77be46c3bb15d417320755805d721c00

//new york       lat: 40.71455        lng : -74.007118
//overall for new york : https://api.darksky.net/forecast/77be46c3bb15d417320755805d721c00/40.71455,-74.007118