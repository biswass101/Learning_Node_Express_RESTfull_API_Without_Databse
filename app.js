const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const usersRouter = require('./routes/users.routes')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/users', usersRouter)

//Home Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


//Wrong Route
app.use((req, res, next) => {
    res.status(404).json({
        message : "Route Not Found"
    })
})

//Server Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message : "Something Broke"
    })
})

module.exports = app