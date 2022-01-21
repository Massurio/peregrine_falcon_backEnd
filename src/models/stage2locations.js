const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Stage2location= sequelize.define('Stage2location',{
    stageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stage',
        key: 'ID'
      }
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'locations',
        key: 'ID'
      }
    },
    distanceFromPriorLocationInMetres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timeFromPriorLocationInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'stages2locations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stageID" },
          { name: "locationID" },
        ]
      },
      {
        name: "locationID",
        using: "BTREE",
        fields: [
          { name: "locationID" },
        ]
      },
    ]
  });


  module.exports = Stage2location;

