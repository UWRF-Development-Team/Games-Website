const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/startButton', (req, res) => {
    res.json("button was clicked")
})

app.listen(3000)