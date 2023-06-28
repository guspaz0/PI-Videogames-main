const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platforms: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
        efaultValue: [],
    },
    background_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    released: {
        type: DataTypes.DATEONLY,
        allowNull:true
    },
    rating: {
        type: DataTypes.DECIMAL(4,2)
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
};
