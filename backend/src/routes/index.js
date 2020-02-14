import express from 'express';
var router = express.Router();

import { findAll, create, update, destroy } from '../controllers/todoItem.js';

router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.get('/retrieve-todo', function (req, res, next) {
  findAll(req, res);
});

router.post('/create-todo', function (req, res, next) {
  create(req, res);
});

router.put('/update-todo', function (req, res, next) {
  update(req, res);
});

router.delete('/delete-todo', function (req, res, next) {
  destroy(req, res);
});

module.exports = router;
