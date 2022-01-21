const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Location2albergue = sequelize.define('Location2albergue',{
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    albergueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'albergueDetail',
        key: 'ID'
      }
    }
  }, {
    tableName: 'location2albergues',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locationID" },
          { name: "albergueID" },
        ]
      },
      {
        name: "albergueID",
        using: "BTREE",
        fields: [
          { name: "albergueID" },
        ]
      },
    ]
  });

  module.exports = Location2albergue;
