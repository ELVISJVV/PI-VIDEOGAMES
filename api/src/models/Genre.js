const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Genre', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
           
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    }, { timestamps: false });
};
