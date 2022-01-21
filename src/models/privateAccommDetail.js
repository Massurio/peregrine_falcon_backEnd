const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const PrivateAccommDetail = sequelize.define('PrivateAccommDetail',{
     ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    privateAccommName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    privateAccommStreetAdress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onedPersonRateMin: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    onedPersonRateMax: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    twoPersonRateMin: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    twodPersonRateMax: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    rateNotes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    tel1CountryCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel1PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel2CountryCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tel2PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    privateAccommWebsiteURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    privateAccommBookingDotComURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    privateAccommAdditionalComments: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'privateAccommDetail',
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

  module.exports = PrivateAccommDetail;