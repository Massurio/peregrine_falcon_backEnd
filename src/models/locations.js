const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Location= sequelize.define('Location',{
     ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    locationName: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    locationPic1URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationPic2URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationPic3URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationPic4URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });

  module.exports = Location;