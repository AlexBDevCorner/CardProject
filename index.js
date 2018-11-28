const mkmApi = require('./api/mkmApi')

const stockList = mkmApi.stock.getStockData()
    .then(res => res.json())
    .then(jsonRes => console.log(jsonRes))

