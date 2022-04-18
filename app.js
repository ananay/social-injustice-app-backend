const express = require('express')
const app = express()
const data_controller = require("./controllers/data_controller")
const cors = require("cors")

app.get('/', (req, res) => {
    res.json({
        'success': true
    })
})

app.use(cors())

app.get("/latest_data", (req, res) => {
    res.json(JSON.parse(data_controller.get_latest_data()))
})

app.listen(9000, () => {
    console.log("Listening on http://localhost:9000")
})