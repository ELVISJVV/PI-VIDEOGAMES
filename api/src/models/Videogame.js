const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
  
    release_date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genres:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  }, { timestamps: false });
};
