var fs = require('fs');

fs.readFile('./countries.json', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  var dataCountries = JSON.parse(data);
	// console.log(dataCountries);
  // console.log(process.argv[2]);



  for (var i = 0; i < dataCountries.length; i++) {
    if (dataCountries[i].name === process.argv[2]) {
      // console.log(dataCountries[i]);
      console.log( "The country is " + dataCountries[i].name);
      console.log( "The capital is " + dataCountries[i].capital);
      console.log( "The population is " + dataCountries[i].population);
      console.log( "The Language is " + dataCountries[i].demonym);
      console.log( "The timezone is " + dataCountries[i].timezones);
      console.log( "The native name is " + dataCountries[i].nativeName);

    }
  }

});
