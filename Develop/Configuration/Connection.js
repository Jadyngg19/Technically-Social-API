const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TSAPIDB');
module.exports = mongoose.connection;