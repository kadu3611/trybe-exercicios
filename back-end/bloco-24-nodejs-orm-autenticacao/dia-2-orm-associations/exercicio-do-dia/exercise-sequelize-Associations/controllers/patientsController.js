const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = (_req, res) => (
    Patients.findAll({ 
        include: { model: Plans, as: 'plan'}
    }). // Buscar o porque 'as'
    // Teória: Em Patients.findAll ele inclui o model Plans e o chama de  plan, porém tem que ser plan.
    // O 'as' ainda com dúvida, não conseguiu buscar
    then((listOfPatients) => { // listOfPatients parametro
        if(!listOfPatients.length){
            return res.status(404).send({ message: 'No patients found'});
        }
        return res.status(200).send(listOfPatients);
    }).
    catch(() => res.status(500).send({ message: 'Algo deu errado'}))
);

const getAllPatientsSurgeries = (_req, res) => {
    Patients.findAll({ 
        include: { model: Surgeries, as: 'surgeries', through: { attributes: []}},
}).
then((listOfPatients)=> {
    if(!listOfPatients.length){
    return res.status(404).send({ message: 'No patients found'});
        }
        return res.status(200).send(listOfPatients);
    }).
    catch(() => res.status(500).send({ message: 'Algo deu errado'}))
};

module.exports = {
    getAllPatientsPlans,
    getAllPatientsSurgeries,
};