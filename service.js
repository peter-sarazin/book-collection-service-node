const express = require('express');

const {sequelize} = require( './src/models');

const service = express();

// parse requests of content-type: application/json
service.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
service.use(express.urlencoded({extended: true}));

require('./src/routes/author.routes.js')(service);
require('./src/routes/book.routes.js')(service);
require('./src/routes/publisher.routes.js')(service);

service.listen({port: 5000}, async () => {
  console.log('Book Collection Service running on http://localhost:5000');
  await sequelize.authenticate();
  console.log('database connection successful.');
});
