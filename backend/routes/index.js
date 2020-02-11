var express = require('express');
var router = express.Router();

const todoitem = require('../sequelize');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.post('/', function (req, res, next) {
  res.send('Hello World!');
});

router.put('/', function (req, res, next) {
  res.send('Hello World!');
});

router.delete('/', function (req, res, next) {
  res.send('Hello World!');
});

router.get('/retrieve-todo', function (req, res, next) {
  todoitem.findAll().then(todoitem => res.json(todoitem))
});

/* Assuming HTTP request body has the keys 'content' and 'completed' */
router.post('/create-todo', function (req, res, next) {
  console.log(req.body);
  todoitem.create({
    content: req.body.content,
    completed: req.body.completed,
  })
    .then(todoitem => res.json(todoitem))
});

/* Assuming HTTP request body has the keys 'content', 'completed' and 'todoitemid' */
router.put('/update-todo', function (req, res, next) {
  todoitem.update({
    content: req.body.content,
    completed: req.body.completed,
  }, {
    where: {
      id: req.body.todoitemid
    }
  })
    .then(todoitem => res.json(todoitem))
});

/* Assuming HTTP request body has the key 'todoitemid' */
router.delete('/delete-todo', function (req, res, next) {
  todoitem.destroy({
    where: {
      id: req.body.todoitemid
    }
  }, {
    where: {
      id: req.body.todoitemid
    }
  })
    .then(todoitem => res.json(todoitem))
});

module.exports = router;
