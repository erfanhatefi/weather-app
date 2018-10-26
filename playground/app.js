const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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
    console.log("ERROR");
    console.log(errorMessage);
  } else {
    console.log("RESULTS:");
    console.log(JSON.stringify(results, undefined, 2));
  }
});