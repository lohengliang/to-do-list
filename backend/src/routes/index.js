import express from 'express';
var router = express.Router();

/* const todoItemController = require('../controllers').todoItem; */
import todoItemController from '../controllers/todoitem';

router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.get('/retrieve-todo', function (req, res, next) {
  todoItemController.findAll(req, res);
});

router.post('/create-todo', function (req, res, next) {
  todoItemController.create(req, res);
});

router.put('/update-todo', function (req, res, next) {
  todoItemController.update(req, res);
});

router.delete('/delete-todo', function (req, res, next) {
  todoItemController.destroy(req, res);
});

module.exports = router;
