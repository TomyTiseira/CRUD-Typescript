import { NextFunction, Request, Response } from 'express'
import { Error } from '../types'

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): any => {
  const statusCode = err.status ?? 500
  res.status(statusCode).json({
    error: {
      status: statusCode,
      name: err.name ?? 'Error',
      message: err.message ?? 'Ocurrió un error inesperado'
    }
  })
}
