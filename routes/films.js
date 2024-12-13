const express = require('express')
const router = express.Router()

const FilmController = require('../controllers/FilmController.js')

router.get('/', FilmController.index)
router.get('/:id', FilmController.show)
router.post('/:id/review', FilmController.reviews)

module.exports = router