const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/startButton', (req, res) => {
    res.text("The button was clicked")
    //insert the method from vanilla js that clears the board when the button is clicked
})

app.listen(3000)