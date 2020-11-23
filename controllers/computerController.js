const db = require("../models");
const computer = db.Computer
const attribution = db.Attribution
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
    computer.findAll({
        attributes: ['id', 'name'],
        include: [
                {
                    model: attribution,
                    attributes: ['id', 'date', 'hour'],
                    required: false,
                include: [{
                    model: customer,
                    attributes: ['id', 'firstname', 'lastname'],
                    required: false
                }]
            }

            ]
    }).then(data => {
            let returnedComputer = []
            data.forEach( computer => {
                let attributions = []
                if (computer.Attributions.length !== 0) {
                    attributions = [
                       computer.Attributions
                    ]

                        // id: computer.Attributions.id,
                        // date: computer.Attributions.date,
                        // hour: computer.Attributions.hour,
                        // customerId: computer.Attributions.customerId,

                }
                returnedComputer.push({
                    id : computer.id,
                    name : computer.name,
                    Attributions: attributions
                })
            })

            res.status(200).json(returnedComputer);
    });

};

// Find a single Tutorial with an id
exports.findComputerAttribution = (req, res) => {
    attribution.findAll().then(data => {
        res.status(200).json({data})
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res, next) => {
    const id = req.body.id;
    try {
        const computer = await computer.findOne({
            where: { id }
        });
        if(!computer){
            return res.status(200).json({
                success: false,
                message: 'Information introuvable',
            })
        }
        await computer.destroy();
        return res.status(200).json({
            success: true,
            message: 'Attribution annulée',
            content: id
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}