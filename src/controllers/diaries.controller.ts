import { Request, Response, NextFunction } from 'express'
import DiariesService from '../services/diaries.service'

export const getDiaries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { allInfo, includeInactive } = req.query
    const allInfoBoolean = allInfo === 'true'
    const includeInactiveBoolean = includeInactive === 'true'

    const diaries = await DiariesService.getAllDiaries(allInfoBoolean, includeInactiveBoolean)
    res.json(diaries)
  } catch (error) {
    next(error)
  }
}

export const getDiaryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const idParsed = parseInt(id)
    const diary = await DiariesService.getDiaryById(idParsed)

    res.json(diary)
  } catch (error) {
    next(error)
  }
}

export const createDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { weather, visibility, date, comment } = req.body
    const newDiary = { weather, visibility, date, comment }
    const diaryId = await DiariesService.createDiary(newDiary)

    res.json({ id: diaryId })
  } catch (error) {
    next(error)
  }
}

export const updateDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const updates = req.body
    const diaryId = await DiariesService.updateDiary(+id, updates)

    res.json({ id: diaryId })
  } catch (error) {
    next(error)
  }
}

export const deleteDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const diaryId = await DiariesService.deleteDiary(+id)

    res.json({ id: diaryId })
  } catch (error) {
    next(error)
  }
}
