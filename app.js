const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        'success': true
    })
})

app.listen(9000, () => {
    console.log("Listening on http://localhost:9000")
})