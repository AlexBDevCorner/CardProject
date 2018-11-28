var express = require('express')
var app = express()

const cors = require('cors')

app.use(cors())

const mkmApi = require('./api/mkmApi')

const PORT = 3123

app.get('/stock', function (req, res) {
    mkmApi.stock.getStockData()
        .then(res => res.json())
        .then(jsonRes => res.send(jsonRes))    
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})