const express = require("express");
const app = express();
require("./database");
const path = require("path");
const hbs = require("express-handlebars");

//settings
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use('/public',express.static(path.join(__dirname, 'public')));
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use(require('./routes/index.routes'));

//static files

module.exports = app;