import React from "react";
import { connect } from "react-redux";
import { fetchWeatherFromService } from "../actions/weather";

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeatherFromService();
    // this.props.fetchGiphyFromService();
  }
  render() {
    return <p>{this.props.weatherDesc}</p>;
  }
}

const mapStateToProps = state => {
  return {
    weatherDesc: state.weatherDesc
  };
};

export default connect(
  mapStateToProps,
  { fetchWeatherFromService }
)(Weather);
// export default Weather;
