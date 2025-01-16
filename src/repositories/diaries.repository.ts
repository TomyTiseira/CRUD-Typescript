import { ResultSetHeader, RowDataPacket } from 'mysql2'
import pool from '../config/db'
import Diary from '../models/diaries.model'
import { DiaryEntry, NewDiaryEntry } from '../types'
import { BaseDataError } from '../errors/errors'

const DiaryRepository = {
  getAllDiaries: async (allInfo: boolean, includeInactive: boolean): Promise<DiaryEntry[]> => {
    try {
      const fields = ['id', 'date', 'weather', 'visibility']
      if (allInfo) fields.push('comment', 'isActive')

      const whereClause = includeInactive ? '' : 'WHERE isActive = 1'

      const query = `SELECT ${fields.join(', ')} FROM diary ${whereClause}`

      const [rows] = await pool.query<RowDataPacket[]>(query)
      return rows.map((row: any) => Diary.fromRow(row))
    } catch (error) {
      console.error('Error al obtener la información:', error)
      throw new BaseDataError('Hubo un problema al obtener la información de la base de datos')
    }
  },

  getDiaryById: async (id: number): Promise<DiaryEntry | null> => {
    try {
      const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM diary WHERE id = ?', [id])
      return rows.length > 0 ? Diary.fromRow(rows[0]) : null
    } catch (error) {
      console.error('Error al obtener la información:', error)
      throw new BaseDataError('Hubo un problema al obtener la información de la base de datos')
    }
  },

  createDiary: async (diary: NewDiaryEntry): Promise<number> => {
    try {
      const [results] = await pool.query<ResultSetHeader>('INSERT INTO diary (weather, visibility, date, comment) VALUES (?, ?, ?, ?)', [diary.weather, diary.visibility, diary.date, diary.comment])

      return results.insertId
    } catch (error) {
      console.error('Error al crear el diario:', error)
      throw new BaseDataError('No se pudo crear el diario')
    }
  },

  updateDiary: async (id: number, updates: Partial<DiaryEntry>): Promise<number | null> => {
    try {
      const fields = Object.keys(updates).map((key) => `${key} = ?`).join(', ')
      const values = Object.values(updates)

      const query = `UPDATE diary SET ${fields} WHERE id = ?`
      const [results] = await pool.query<ResultSetHeader>(query, [...values, id])

      if (results.affectedRows === 0) return null

      return id
    } catch (error) {
      console.error('Error al actualizar el diario:', error)
      throw new BaseDataError('No se pudo actualizar el diario')
    }
  },

  deleteDiary: async (id: number): Promise<number | null> => {
    try {
      const [results] = await pool.query<ResultSetHeader>('UPDATE diary SET isActive = ? WHERE id = ?', [false, id])
      if (results.affectedRows === 0) return null

      return id
    } catch (error) {
      console.error('Error al eliminar el diario:', error)
      throw new BaseDataError('No se pudo eliminar el diario')
    }
  }
}

export default DiaryRepository
