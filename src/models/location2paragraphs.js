const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Location2paragraph = sequelize.define('Location2paragraph',{
      locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    paragraphID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locationParagraphs',
        key: 'ID'
      }
    }
  }, {
    tableName: 'location2paragraphs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationID" },
          { name: "paragraphID" },
        ]
      },
      {
        name: "paragraphID",
        using: "BTREE",
        fields: [
          { name: "paragraphID" },
        ]
      },
    ]
  });

  module.exports = Location2paragraph;
