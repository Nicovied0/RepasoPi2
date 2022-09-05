const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allouwNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allouwNull: false
    },
    species: {
      type: DataTypes.STRING,
      allouwNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allouwNull: false
    },
    image: {
      type: DataTypes.STRING,
      allouwNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      allouwNull: false,
      defaultValue: true
    }
  });
};
