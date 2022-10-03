const bodyParser = require('body-parser')
const cors = require('cors')
const consign = require('consign')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}