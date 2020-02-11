const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('todoitem', {
        content: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN
        }
    }, {
        freezeTableName: true
    });
} 