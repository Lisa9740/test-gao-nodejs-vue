const db = require("../models");
const attribution = db.Attribution
const computer = db.Computer
const customer = db.Customer
/*const Op = db.Sequelize.Op;*/

// Create and Save a new computer
exports.create = (req, res) => {
    computer.create(req.body).then(data =>{
        res.status(200).json(data);
    })
};

// Retrieve all Computers from the database.
exports.findAll = (req, res) => {
    attribution.findAll({
        attributes: ['id', 'date', 'hour'],
        include: [
            {
                model: customer,
                attributes: ['id', 'firstname', 'lastname'],
                required: false,
            },
            {
                model: computer,
                attributes: ['id', 'name'],
                required: false,
            }

        ]
    }).then(data => {
        res.status(200).json(data);
    });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};