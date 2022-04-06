const { DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Temperament", {
      name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
  },
  {
    timestamps:false,
    // timestamps: true,
    // createdAt: false,
    // updatedAt: "Actualizacion",
  }
  );
};