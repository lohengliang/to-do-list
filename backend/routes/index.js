import express from 'express';
var router = express.Router();

import todoItemController from '../controllers';

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

export default router;
