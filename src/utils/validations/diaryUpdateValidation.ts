import { DiaryEntry } from '../../types'
import DiaryValidation from './diaryValidation'

const validateDiaryUpdate = (data: any): Partial<DiaryEntry> => {
  const updateData: Partial<DiaryEntry> = {}

  if (data.weather !== undefined && data.weather !== null) {
    DiaryValidation.weather(data.weather)
    updateData.weather = data.weather
  }

  if (data.visibility !== undefined && data.visibility !== null) {
    DiaryValidation.visibility(data.visibility)
    updateData.visibility = data.visibility
  }

  if (data.date !== undefined && data.date !== null) {
    DiaryValidation.date(data.date)
    updateData.date = data.date
  }

  if (data.comment !== undefined && data.comment !== null) {
    DiaryValidation.comment(data.comment)
    updateData.comment = data.comment
  }

  return updateData
}

export default validateDiaryUpdate
