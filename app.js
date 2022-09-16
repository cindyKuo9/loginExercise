const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

require('./config/mongoose')
const routes = require('./routes')

const app = express()
const port = 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({secret: 'mySecret', saveUninitialized: false, resave: true}))
app.use(routes)


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
