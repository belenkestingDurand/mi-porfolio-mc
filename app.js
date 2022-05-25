const express = require('express')
const path = require('path')
const mainRouters = require('./routers/main')
const app = express()
app.listen(3000, ()=>{console.log('Abrir el archivo en http://localhost:3000/')})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', mainRouters)