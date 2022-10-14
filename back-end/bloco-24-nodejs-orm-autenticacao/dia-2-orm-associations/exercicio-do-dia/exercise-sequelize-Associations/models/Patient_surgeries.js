
const PatientSurgeries = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define("Patient_surgeries",
  {},
  {
    timestamps: false
  });
   PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients', // renomeia
      through: PatientSurgeries, //  Será usada através de: PatientSurgeries
      foreignKey: 'surgery_id', // Primeira chave estrangeira
      otherKey: 'patient_id', // Segunda Chave estrangeira

    });

    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    })
   }

   return PatientSurgeries;
};

module.exports = PatientSurgeries;