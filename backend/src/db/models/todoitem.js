'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  return TodoItem;
};