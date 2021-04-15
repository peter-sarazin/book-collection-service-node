const express = require('express');

const { sequelize } = require( './service/models');

const service = express();

// parse requests of content-type: application/json
service.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
service.use(express.urlencoded({ extended: true }));

require("./service/routes/author.routes.js")(service);
require("./service/routes/book.routes.js")(service);
require("./service/routes/publisher.routes.js")(service);

service.listen({port: 5000 }, async () => {
    console.log('Book Collection Service running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('database connection successful.');
})
