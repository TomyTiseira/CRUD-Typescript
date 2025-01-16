import { Router } from 'express'
import { createDiary, deleteDiary, getDiaries, getDiaryById, updateDiary } from '../controllers/diaries.controller'

const diariesRouter = Router()

diariesRouter.get('/', getDiaries)
diariesRouter.get('/:id', getDiaryById)
diariesRouter.post('/', createDiary)
diariesRouter.put('/:id', updateDiary)
diariesRouter.delete('/:id', deleteDiary)

export default diariesRouter
