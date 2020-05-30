const express = require('express')
const { join } = require('path')
const app = express()
const mysql = require('mysql2')

module.exports = mysql.createConnection('mysql://root:root@localhost:3306/burgers_db')

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', '.hbs')
app.use(express.json())

// // change ./routes name and ./connection later
app.use(require('./routes'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => console.log('http://localhost:3000'))

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// // change ./routes name and ./connection later
// app.use(require('./routes'))

// require('./connection')
//   .sync({ force: true })
//   .then(() => app.listen(3000, () => console.log('http://localhost:3000')))
//   .catch(err => console.error(err))