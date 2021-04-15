// const Publisher = require("../models/publisher.model.js");

// const { sequelize, Publisher  } = require( '../models');

const { Publisher } = require( '../models');

const { isEmpty } = require('lodash');

// Create and Save a new Publisher
exports.create = async(req, res) => {
    // Validate request
    if (isEmpty(req.body)) {
      return res.status(400).send({
        message: "missing content."
      });
    }
  
    const { name, url } = req.body;

    try {
        const publisher = await Publisher.create({ name, url });
        return res.status(201).json(publisher);
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

// Retrieve all Publishers from the database.
exports.findAll = async(req, res) => {
    try {
        const publishers = await Publisher.findAll();
        return res.status(200).json(publishers);
    } catch(err) {
        console.log(err);
        return res.status(500).json( { error: 'Error trying to get all publishers'});
    }
};

// Retrieve a Publisher by publisherId
exports.findOne = async(req, res) => {
    const publisherId = req.params.publisherId;

    try {
        const publisher = await Publisher.findOne({
            where: { publisherId },
        })

        if(!publisher) {
            return res.status(404).json({ message: 'There is no publisher with publisherId: ' + publisherId});
        } else {
            return res.status(200).json(publisher);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error occurred in findOne()'});
    }
}

