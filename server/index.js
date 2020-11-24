const express = require('express')
const cors = require('cors')
const port = 1000
const app = express()
require('./helpers/DBconfig')

app.use(express.json())
app.use(cors())

app.use('/products', require('./routes/products'))
app.use('/cart', require('./routes/cart'))

app.listen(port, () => console.log(`Server ${port} is live`))