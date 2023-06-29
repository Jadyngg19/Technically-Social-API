const express = require('express');
const routes = require('./Routes');
const db = require('./Configuration/Connection');
const app = express();
const PORT = process.env.PORT || 3001; //27017 did not work in Insomnia 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });