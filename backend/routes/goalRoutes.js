const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalControl')
const {protect} = require('../middleware/authMiddleWare')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)


module.exports = router