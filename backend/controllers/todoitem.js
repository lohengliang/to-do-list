const TodoItem = require('../db/models').TodoItem;

module.exports = {
  findAll(req, res) {
    return TodoItem
      .findAll()
      .then(todoItem => res.json(todoItem))
  },
  /* Assuming HTTP request body has the keys 'content' and 'completed' */
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        completed: req.body.completed,
      })
      .then(todoItem => res.json(todoItem))
  },
  /* Assuming HTTP request body has the keys 'content', 'completed' and 'todoItemId' */
  update(req, res) {
    return TodoItem
      .update({
        content: req.body.content,
        completed: req.body.completed,
      }, {
        where: {
          id: req.body.todoItemId
        }
      })
      .then(todoItem => res.json(todoItem))
  },
  /* Assuming HTTP request body has the key 'todoItemId' */
  destroy(req, res) {
    return TodoItem
      .destroy({
        where: {
          id: req.body.todoItemId
        }
      }, {
        where: {
          id: req.body.todoItemId
        }
      })
      .then(todoItem => res.json(todoItem))
  },
};