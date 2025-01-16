import { DiaryValidationError } from '../../errors/errors'
import isVisibility from './isVisibility'
import isWeather from './isWeather'

const DiaryValidation = {
  id: (id: any) => {
    if (typeof id !== 'number' || isNaN(id)) throw new DiaryValidationError('El ID debe ser un valor numérico')
    if (id <= 0) throw new DiaryValidationError('El ID es inválido')
  },

  weather: (weather: any) => {
    if (typeof weather !== 'string') throw new DiaryValidationError('El clima debe ser un string')
    if (!isWeather(weather)) throw new DiaryValidationError('El Clima es inválido')
  },

  visibility: (visibility: any) => {
    if (typeof visibility !== 'string') throw new DiaryValidationError('La visibilidad debe ser un string')
    if (!isVisibility(visibility)) throw new DiaryValidationError('La visibilidad es inválida')
  },

  date: (date: any) => {
    if (typeof date !== 'string' || isNaN(Date.parse(date))) throw new DiaryValidationError('La fecha es inválida')
  },

  comment: (comment: any) => {
    if (typeof comment !== 'string' || comment.trim().length === 0) throw new DiaryValidationError('El comentario es inválido')
  }
}

export default DiaryValidation
