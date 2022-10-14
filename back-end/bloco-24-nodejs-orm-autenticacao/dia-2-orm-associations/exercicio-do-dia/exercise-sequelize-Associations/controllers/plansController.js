const {Patient, Plans} = require('../models');
const getAllPlan = (req, res) => {
    Plans.findAll({
        where: { plan_id: req.params.id},
        includes: [{ model: Patient, as: 'patients'}],
    }).
    then((listOfPatients) => {
        if(!listOfPatients.length) {
            return res.status(404).json({ message: 'No plan found'});
        }
        return res.status(200).json(listOfPatients);
    });
    // catch(() => {
    //     return res.status(500).json({ message: 'Algo deu errado'})
    // })
}
module.exports = {
    getAllPlan,
}