import { errorsName } from '../constants/errorsName'
import { Status } from '../types'

const createErrorClass = (name: string, status: Status): new (message: string) => Error => {
  return class extends Error {
    status: Status // Añadimos 'status' como propiedad

    constructor (message: string) {
      super(message)
      this.name = name
      this.status = status

      // En TypeScript, necesitamos establecer el prototipo correcto para la clase extendida
      Object.setPrototypeOf(this, new.target.prototype) // Correcta configuración del prototipo
    }
  }
}

export const BaseDataError = createErrorClass(errorsName.BASEDATAERROR, 500)
export const DiaryValidationError = createErrorClass(errorsName.DIARYVALIDATIONERROR, 400)
export const DiaryError = createErrorClass(errorsName.DIARYERROR, 404)
