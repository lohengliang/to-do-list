import { TodoItem } from '../db/models';

export const findAll = async (req, res) => {
  const result = await TodoItem.findAll();
  res.json(result);
};

/* Assuming HTTP request body has the keys 'content' and 'completed' */
export const create = async (req, res) => {
  const result = await TodoItem.create({
    content: req.body.content,
    completed: req.body.completed,
  });
  res.json(result);
};

/* Assuming HTTP request body has the keys 'content', 'completed' and 'todoItemId' */
export const update = async (req, res) => {
  const result = await TodoItem.update({
    content: req.body.content,
    completed: req.body.completed,
  }, {
    where: {
      id: req.body.todoItemId
    }
  });
  res.json(result);
};

/* Assuming HTTP request body has the key 'todoItemId' */
export const destroy = async (req, res) => {
  const result = await TodoItem
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
};