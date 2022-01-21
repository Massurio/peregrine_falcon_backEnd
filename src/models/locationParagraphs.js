const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const LocationParagraph = sequelize.define('LocationParagraph',{
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paragraphType: {
      type: "SET('PLAIN','DIRECTIONS','HISTORY')",
      allowNull: false
    },
    paragraphText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telCountryCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    telPhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pargraphURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'locationParagraphs',
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

  module.exports = LocationParagraph;