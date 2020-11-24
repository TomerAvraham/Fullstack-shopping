const router = require('express').Router()
const connection = require('../helpers/DBconfig')

router.get('/', (req, res) => {
    connection.query('select * from products', (err, result) => {
        if (err) return res.sendStatus(500)
        res.json(result)
    })
})

module.exports = router