var React = require('react');

var WeatherMsg = ({temp, location}) => {  // we can destructure {temp, location} in the params
  return (
    <div>
      <p>Temp is {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMsg;
