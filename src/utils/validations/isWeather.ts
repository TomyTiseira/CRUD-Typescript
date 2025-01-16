import { Weather } from '../../enums'

const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string)
}

export default isWeather
