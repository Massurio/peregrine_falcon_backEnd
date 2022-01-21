const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Location2privateAccomm = sequelize.define('Location2privateAccomm',{
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    privateAccommID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'location2privateAccomm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationID" },
          { name: "privateAccommID" },
        ]
      },
    ]
  });
 
  module.exports = Location2privateAccomm;
