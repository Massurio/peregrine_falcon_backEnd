const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const AlbergueDetail = sequelize.define('AlbergueDetail',{
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    albergueName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    numberOfBeds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberOfDorms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    albergueStreetAdress: {
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
    kitchenFacilitiesAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    washingMachineAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dryingMachineAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    communalMealAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    openingPeriod: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    openingTimes: {
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
    albergueWebsiteURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    albergueBookingDotComURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    albergueAdditionalComments: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'albergueDetail',
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

  module.exports = AlbergueDetail;