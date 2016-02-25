var path = require('path');
var logger = require('winston');

// MongoDB
var mongo = require('mongodb');
var monk = require('monk');
// var db = monk('localhost:27017/nodetest1');

var routes = require('./routes/index');
var users = require('./routes/users');


