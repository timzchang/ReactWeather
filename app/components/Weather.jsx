var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

// The big one inside the window, grabs from form and passes to message
var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    // debugger;  <-- this a breakpoint
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp:temp,
        isLoading: false
      })
    },function (err) {
      that.setState({
        isLoading: false,
        temp: null,
        location: null
      });
      alert(err);
      // console.log(err);
    })
  },
  render: function () {
    var temp = this.state.temp;
    var location = this.state.location;
    var isLoading = this.state.isLoading;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location){
        return <WeatherMsg temp={temp} location={location}/>;
      } else {
        return;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
