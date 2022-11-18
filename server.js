//This code helps import needed depencies
const express = require('express');
const routes = require('./routes');


const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//This links models to the database and then activates the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App available on ${PORT}!`);
  });
});
