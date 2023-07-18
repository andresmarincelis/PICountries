const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activities', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        validate: {
            isNumeric: true,
            min: 1,
            max: 5, 
        }
        },
        duracion: {
            type: DataTypes.INTEGER,
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        }
    }, {
        timestamps: false
    })
}