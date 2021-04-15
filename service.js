const express = require('express');

const { sequelize } = require( './service/models');

const service = express();

// parse requests of content-type: application/json
service.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
service.use(express.urlencoded({ extended: true }));

/* service.post('/authors', async(req, res) => {
    const { firstName, middleName, lastName } = req.body

    try {
        const author = await Author.create({ firstName, middleName, lastName });

        return res.json(author);
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

service.get('/authors', async (req,res) => {
    try {
        const authors = await Author.findAll();
        return res.json(authors);
    } catch(err) {
        console.log(err);
        return res.status(500).json( { error: 'Error trying to get all authors'});
    }
}) */

require("./service/routes/author.routes.js")(service);
require("./service/routes/publisher.routes.js")(service);

service.listen({port: 5000 }, async () => {
    console.log('Book Collection Service running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('database connection successful.');
})
