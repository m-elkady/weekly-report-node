var express = require('express');
var GitHubApi = require('github');
var path = require('path');

const CLIENT_ID = '828c9f83e4c929dc911f';
const CLIENT_SECRET = '394f2034848cd89238d780e0a6bd8e7bce75b1c7';



var org = require('./routes/org');
var repos = require('./routes/repos');


const app = express();

app.use('/org', org);
app.use('/repos', repos);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



module.exports = app;


