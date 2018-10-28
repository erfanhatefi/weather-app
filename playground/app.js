const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log('address is : ');
    console.log(results.address);
    weather.getWeather(results.latitude, results.longtitude, function(errorMessage, weatherResults){
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log('It`s currently ' + weatherResults.temperature + ' . It feels like '+ weatherResults.apparentTemperature);
      }
    });
  }
});

//API key :     77be46c3bb15d417320755805d721c00

//new york       lat: 40.71455        lng : -74.007118
//overall for new york : https://api.darksky.net/forecast/77be46c3bb15d417320755805d721c00/40.71455,-74.007118