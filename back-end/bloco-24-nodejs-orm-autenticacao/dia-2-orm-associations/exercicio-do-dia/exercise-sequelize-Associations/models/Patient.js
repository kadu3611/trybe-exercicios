'use strict';
const Patients = (sequelize, DataTypes) => {
  const Patients = sequelize.define("Patients", {
    patient_id:{ 
      type: DataTypes.INTEGER, // número inteiro
      primaryKey: true, // Seŕa a primaryKey que será remetida a outra tabela de n para n
      autoIncrement: true, // irá incrementar
    },
    fullname: DataTypes.STRING,
    plan_id: { type:DataTypes.INTEGER, foreignKey: true}, // Chave estrangeira:true;
  },
  {
    timestamps: false,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan'}); // Chave estrangeira vinda da plan_id 1 para 1
  }
  return Patients;
    };


module.exports = Patients;
