const express = require('express')
const server = express()
const FilmsRouter = require('./routes/films.js')
const NotFound = require('./middlewares/NotFound.js')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler.js')

const HOST = process.env.HOST
const PORT = process.env.PORT

server.use('/films', FilmsRouter)

server.use(NotFound)

server.use(ServerErrorsHandler)

server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})
