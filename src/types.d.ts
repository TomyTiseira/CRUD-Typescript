export type Status = 400 | 401 | 403 | 404 | 500

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
  isActive: boolean
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export interface Error {
  status: Status
  name: string
  message: string
}

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
