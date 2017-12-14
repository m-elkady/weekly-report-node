var express = require('express');
var path = require('path');


var org = require('./routes/org');
var repos = require('./routes/repos');


const app = express();

app.use('/org', org);
app.use('/repos', repos);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



module.exports = app;


