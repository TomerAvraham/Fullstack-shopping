const router = require('express').Router()
const connection = require('../helpers/DBconfig')

router.get('/', (req, res) => {
    connection.query('select cart.id, products.name, products.price from cart inner join products on cart.product_id = products.id', (err, result) => {
        if (err) return res.sendStatus(500)
        res.json(result)
    })
})

router.get('/sum', (req, res) => {
    connection.query('select sum(products.price) from cart inner join products on cart.product_id = products.id', (err, result) => {
        if (err) return res.sendStatus(500)
        res.json(result)
    })
})

router.post('/add', (req, res) => {
    const { product_id } = req.body
    connection.query(`insert into cart (product_id) values(${product_id})`, (err, result) => {
        if (err) return res.sendStatus(500)
        res.json(result)
    })
})

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    connection.query(`delete from cart where id = ${id}`, (err, result) => {
        if (err) return res.sendStatus(500)
        res.json(result)
    })
})

module.exports = router