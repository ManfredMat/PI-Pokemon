const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,      
    },
    life:{
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    strenght:{
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    height:{
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    weight:{
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
  });
};
