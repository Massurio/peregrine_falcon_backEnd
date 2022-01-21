const Stage = require("../models/stages");
const Location = require("../models/locations");
const Location2privateAccom = require("../models/location2privateAccomm");


exports.getStageData = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const stageData = await Stage.findAll();
            res.status(200).send({stageData});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};

exports.getLocationData = async (req, res) => {
    try {
        if (!req.user) {
            res.status(400).send(`you are not logged in`);
        } else {
            const locationData = await Location.findAll();
            res.status(200).send({locationData});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
};