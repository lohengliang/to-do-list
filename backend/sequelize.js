const todoitemModel = require('./models/todoitem')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('to-do-app-database', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

const todoitem = todoitemModel(sequelize);

todoitem.sync().then(function () {
    console.log("synced with database");
})

module.exports = todoitem;