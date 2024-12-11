const express = require('express')
const router = express.Router()

const FilmController = require('../controllers/FilmController.js')

router.get('/', FilmController.index)
router.get('/:id', FilmController.show)

module.exports = router