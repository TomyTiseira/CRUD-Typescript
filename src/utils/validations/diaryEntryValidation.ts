import DiaryValidation from './diaryValidation'

const validateDiaryEntry = (data: any): void => {
  DiaryValidation.weather(data.weather)
  DiaryValidation.visibility(data.visibility)
  DiaryValidation.date(data.date)
  DiaryValidation.comment(data.comment)
}

export default validateDiaryEntry
