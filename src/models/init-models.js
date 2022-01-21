const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

import AlbergueDetail from  "./albergueDetail.js";
import Location from  "./locations.js";
import Location2albergues from  "./location2albergues.js";
import Location2paragraph from  "./location2paragraphs.js";
import Location2privateAccomm from  "./location2privateAccomm.js";
import LocationParagraphs from  "./locationParagraphs.js";
import PrivateAccommDetail from  "./privateAccommDetail.js";
import Stage from  "./stages.js";
import Stage2location from  "./stages2locations.js";
import User from  "./users.js";

export default function initModels(sequelize) {
  const albergueDetail = AlbergueDetail.init(sequelize, DataTypes);
  const location = Location.init(sequelize, DataTypes);
  const location2albergues = Location2albergues.init(sequelize, DataTypes);
  const location2paragraphs = Location2paragraph.init(sequelize, DataTypes);
  const location2privateAccomm = Location2privateAccomm.init(sequelize, DataTypes);
  const locationParagraphs = LocationParagraphs.init(sequelize, DataTypes);
  const privateAccommDetail = PrivateAccommDetail.init(sequelize, DataTypes);
  const stage = Stage.init(sequelize, DataTypes);
  const stage2locations = Stage2location.init(sequelize, DataTypes);
  const users = User.init(sequelize, DataTypes);

  privateAccommDetail.belongsToMany(location, { as: 'locationID_locations', through: Location2privateAccomm, foreignKey: "privateAccommID", otherKey: "locationID" });
  location.belongsToMany(privateAccommDetail, { as: 'privateAccommID_privateAccommDetail', through: Location2privateAccomm, foreignKey: "locationID", otherKey: "privateAccommID" });
  albergueDetail.belongsToMany(location, { as: 'locationID_locations', through: location2albergues, foreignKey: "albergueID", otherKey: "locationID" });
  location.belongsToMany(albergueDetail, { as: 'albergueID_albergueDetails', through: location2albergues, foreignKey: "locationID", otherKey: "albergueID" });
  location.belongsToMany(locationParagraphs, { as: 'paragraphID_locationParagraphs', through: location2paragraphs, foreignKey: "locationID", otherKey: "paragraphID" });
  locations.belongsToMany(stage, { as: 'stageID_stages', through: stage2locations, foreignKey: "locationID", otherKey: "stageID" });
  locationParagraphs.belongsToMany(location, { as: 'locationID_location_location2paragraphs', through: location2paragraphs, foreignKey: "paragraphID", otherKey: "locationID" });
  stage.belongsToMany(location, { as: 'locationID_location_stage2locations', through: stage2locations, foreignKey: "stageID", otherKey: "locationID" });
  location2albergues.belongsTo(albergueDetail, { as: "albergue", foreignKey: "albergueID"});
  albergueDetail.hasMany(location2albergues, { as: "location2albergues", foreignKey: "albergueID"});
  location2albergues.belongsTo(location, { as: "location", foreignKey: "locationID"});
  location.hasMany(location2albergues, { as: "location2albergues", foreignKey: "locationID"});
  location2paragraphs.belongsTo(location, { as: "location", foreignKey: "locationID"});
  location.hasMany(location2paragraphs, { as: "location2paragraphs", foreignKey: "locationID"});
  stage.belongsTo(location, { as: "stageStartLocation", foreignKey: "stageStartLocationID"});
  location.hasMany(stage, { as: "stages", foreignKey: "stageStartLocationID"});
  stage.belongsTo(location, { as: "stageFinishLocation", foreignKey: "stageFinishLocationID"});
  location.hasMany(stage, { as: "stageFinishLocation_stages", foreignKey: "stageFinishLocationID"});
  stage2locations.belongsTo(location, { as: "location", foreignKey: "locationID"});
  location.hasMany(stage2locations, { as: "stage2locations", foreignKey: "locationID"});
  location2paragraphs.belongsTo(locationParagraphs, { as: "paragraph", foreignKey: "paragraphID"});
  locationParagraphs.hasMany(location2paragraphs, { as: "location2paragraphs", foreignKey: "paragraphID"});
  stage2locations.belongsTo(stage, { as: "stage", foreignKey: "stageID"});
  stage.hasMany(stage2locations, { as: "stage2locations", foreignKey: "stageID"});

  return {
    albergueDetail,
    locations,
    location2albergues,
    location2paragraphs,
    location2privateAccomm,
    locationParagraphs,
    privateAccommDetail,
    stages,
    stages2locations,
    users,
  };
}
