const mongoose = require('mongoose');
mongoose.connect('mongodb:/localhost3001/TSAPIDB');
module.exports = mongoose.connection;