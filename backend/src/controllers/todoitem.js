import { TodoItem } from '../db/models';


module.exports = {
  async findAll(req, res) {
    var result = await TodoItem.findAll();
    res.json(result);
  },
  /* Assuming HTTP request body has the keys 'content' and 'completed' */
  async create(req, res) {
    var result = await TodoItem.create({
      content: req.body.content,
      completed: req.body.completed,
    });
    res.json(result);
  },
  /* Assuming HTTP request body has the keys 'content', 'completed' and 'todoItemId' */
  async update(req, res) {
    var result = await TodoItem.update({
        content: req.body.content,
        completed: req.body.completed,
      }, {
        where: {
          id: req.body.todoItemId
        }
    });
    res.json(result);
  },
  /* Assuming HTTP request body has the key 'todoItemId' */
  async destroy(req, res) {
    var result = await TodoItem
    .destroy({
      where: {
        id: req.body.todoItemId
      }
    }, {
      where: {
        id: req.body.todoItemId
      }
    });
    res.json(result);
  },
};
