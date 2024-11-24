import express from 'express'
import { createRecord, deleteRecord, getRecordById, getRecords, updateRecord } from '../controllers/recordController.js'

const router = express.Router()

router.route('/').get(getRecords).post(createRecord)
router
  .route('/:id')
  .get(getRecordById)
  .put(updateRecord)
  .delete(deleteRecord)

export default router
