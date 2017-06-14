var axios = require('axios');

const OPEN_WEATHER_MAP_URL =
"http://api.openweathermap.org/data/2.5/weather?appid=7568e5865f3f61a42b6234abd4b102a9&units=imperial";

module.exports = {
  getTemp: function (location) {
    //return promise
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (resp) {
      debugger;
      if(resp.data.cod && resp.data.message) {  // catch errors
        throw new Error(resp.data.message);
      }
      return resp.data.main.temp;
    }, function (resp) {
      throw new Error(resp);
    })
  }
}
