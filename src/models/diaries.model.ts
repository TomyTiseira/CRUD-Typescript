import { Visibility, Weather } from '../enums'

class Diary {
  constructor (
    public id: number,
    public weather: Weather,
    public visibility: Visibility,
    public date: string,
    public comment: string,
    public isActive: boolean
  ) { }

  static fromRow (row: any): Diary {
    return new Diary(row.id, row.weather, row.visibility, row.date, row.comment, row.isActive)
  }
}

export default Diary
