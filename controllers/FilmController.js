const connection = require('../database/connection.js')

function index(req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ error: err })

        res.json({
            movies: results,
            count: results.length
        })

    })

}

function show(req, res) {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err })
        if (results.lenght === 0) return res.status(404).json({ error: 'Movie not found' })

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: err })

            const film = {
                ...results[0],
                reviews: reviewsResults
            }

            res.status(200).json(film)
        })
    })
}

function reviews(req, res) {
    const movie_id = req.params.id
    const { name, vote, review } = req.body

    const now = new Date()
    const reviewDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`

    const sql = "INSERT INTO `reviews` SET name=?, vote=?, text=?, movie_id=?, created_at=?"
    connection.query(sql, [name, vote, review, movie_id, reviewDate], (err, results) => {
        if (err) return res.status(500).json({ error: err })
        return res.status(201).json({ success: true })
    })
}

module.exports = {
    index,
    show,
    reviews
}