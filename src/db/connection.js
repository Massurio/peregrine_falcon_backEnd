const {Sequelize} = new require("sequelize");
require ("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URI, {logging: false});

try {
    sequelize.authenticate();
} catch(error) {
    console.log(error)
}

module.exports =sequelize;