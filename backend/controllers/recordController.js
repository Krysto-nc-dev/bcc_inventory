import asyncHandler from '../middlewares/async.js'
import Record from '../models/recordModel.js'

// @desc    Get all records
// @route   GET /api/records
// @access  Public
const getRecords = asyncHandler(async (req, res) => {
  const records = await Record.find().populate('zone').populate('agent')
  res.status(200).json(records)
})

// @desc    Create a new record
// @route   POST /api/records
// @access  Public
const createRecord = asyncHandler(async (req, res) => {
  const { zone, typeAction, agent, codeBarre } = req.body

  const record = new Record({
    zone,
    typeAction,
    agent,
    codeBarre,
  })

  const createdRecord = await record.save()
  res.status(201).json(createdRecord)
})

// @desc    Get record by ID
// @route   GET /api/records/:id
// @access  Public
const getRecordById = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id).populate('zone').populate('agent')

  if (record) {
    res.status(200).json(record)
  } else {
    res.status(404)
    throw new Error("Record not found")
  }
})

// @desc    Update record
// @route   PUT /api/records/:id
// @access  Public
const updateRecord = asyncHandler(async (req, res) => {
  const { zone, typeAction, agent, codeBarre } = req.body

  const record = await Record.findById(req.params.id)

  if (record) {
    record.zone = zone || record.zone
    record.typeAction = typeAction || record.typeAction
    record.agent = agent || record.agent
    record.codeBarre = codeBarre || record.codeBarre

    const updatedRecord = await record.save()
    res.status(200).json(updatedRecord)
  } else {
    res.status(404)
    throw new Error("Record not found")
  }
})

// @desc    Delete record
// @route   DELETE /api/records/:id
// @access  Public
const deleteRecord = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id)

  if (record) {
    await record.deleteOne()
    res.status(200).json({ message: "Record removed" })
  } else {
    res.status(404)
    throw new Error("Record not found")
  }
})

export {
  getRecords,
  createRecord,
  getRecordById,
  updateRecord,
  deleteRecord,
}
