import { DiaryError, DiaryValidationError } from '../errors/errors'
import DiaryRepository from '../repositories/diaries.repository'
import isEmpty from '../utils/isEmply'
import validateDiaryEntry from '../utils/validations/diaryEntryValidation'
import validateDiaryUpdate from '../utils/validations/diaryUpdateValidation'
import DiaryValidation from '../utils/validations/diaryValidation'

const DiariesService = {
  getAllDiaries: async (allInfo: boolean, includeInactive: boolean) => await DiaryRepository.getAllDiaries(allInfo, includeInactive),

  getDiaryById: async (id: number) => {
    DiaryValidation.id(id)

    const diary = await DiaryRepository.getDiaryById(id)
    if (diary === null) throw new DiaryError('Diario no encontrada')

    return diary
  },

  createDiary: async (data: any) => {
    validateDiaryEntry(data)

    const diaryId = await DiaryRepository.createDiary(data)
    return diaryId
  },

  updateDiary: async (id: number, updates: any): Promise<number> => {
    const data = validateDiaryUpdate(updates)

    await DiariesService.getDiaryById(id)

    if (isEmpty(data)) throw new DiaryValidationError('No hay datos válidos para actualizar')

    const diaryId = await DiaryRepository.updateDiary(id, data)
    if (diaryId === null) throw new DiaryError('No se ha podido actualizar el diario')

    return diaryId
  },

  deleteDiary: async (id: number): Promise<number> => {
    const currentDiary = await DiariesService.getDiaryById(id)
    if (!currentDiary.isActive) throw new DiaryError('El diario ya está eliminado')

    const diaryId = await DiaryRepository.deleteDiary(id)
    if (diaryId === null) throw new DiaryError('No se ha podido eliminar el diario')

    return diaryId
  }
}

export default DiariesService
