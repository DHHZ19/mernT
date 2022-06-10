const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalControl')


router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router