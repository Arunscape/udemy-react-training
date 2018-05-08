import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/map'

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#176;C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
  </table> )
  }

  renderWeather( citydata ) {
    const name = citydata.city.name
    const temps = citydata.list.map( weather => weather.main.temp - 273.15 )
    const pressures = citydata.list.map( weather => weather.main.pressure )
    const humidities = citydata.list.map( weather => weather.main.humidity )
    // const lon = citydata.city.coord.lon
    // const lat = citydata.city.coord.lat
    const { lon, lat } = citydata.city.coord

    // console.log( temps.map( temp => temp - 273.15 ) )
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps}      color='orange' units = "&#176;C" /></td>
        <td><Chart data={pressures}  color='green'  units = "hPa"     /></td>
        <td><Chart data={humidities} color='black'  units = "%"       /></td>
      </tr>
    )
  }
}

// function mapStateToProps(weather){
//   return {weather:state.weather}
// }
function mapStateToProps( { weather } ) {
  return { weather } //return {weather:weather}
}

export default connect( mapStateToProps )( WeatherList )