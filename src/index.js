const express = require('express')
const app = express()
const { engine } = require('express-handlebars');
const { dirname } = require('path/posix');
const path = require('path');


app.use(express.static(path.join(__dirname, 'public'))); // setup url folder public
app.engine('hbs', engine({
  extname:'.hbs'
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home')
})


app.listen(3000)