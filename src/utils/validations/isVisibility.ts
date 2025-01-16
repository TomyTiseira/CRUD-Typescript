import { Visibility } from '../../enums'

const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string)
}

export default isVisibility
