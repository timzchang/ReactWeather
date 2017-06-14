var React = require('react');

class WeatherForm extends React.Component {
  onFormSubmit (e) {
    e.preventDefault();
    var location = this.location.value;
    if (location.length > 0) {
      this.location.value = "";
      this.props.onSearch(location);
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
            <p>Get Weather</p>
            <input type="text" placeholder="Enter city name" ref={(l) => this.location = l}></input>
            <button>Get Weather</button>
        </form>
      </div>
    )
  }
}

module.exports = WeatherForm
