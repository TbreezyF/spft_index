const express = require('express');
const app = express();
const index = require('./routes/index');
const path = require('path');
const dotenv = require('dotenv').config();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);

app.listen(process.env.PORT || 8081, () => {
    console.log('Sproft Media sever is listening on port ' + process.env.PORT);
});