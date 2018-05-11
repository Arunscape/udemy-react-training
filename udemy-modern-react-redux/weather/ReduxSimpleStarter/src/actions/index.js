import axios from 'axios'

const apikey = 'd020af2362754ab6313a71c7ca8cc257'
const requesturl = `http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}&q=`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather( city ) {
  const url = `${requesturl}${city},ca`
  const request = axios.get( url )
  // console.log( 'Request', request )

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}