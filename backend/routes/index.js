var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.post('/', function(req, res, next) {
  res.send('Hello World!');
});

router.put('/', function(req, res, next) {
  res.send('Hello World!');
});

router.delete('/', function(req, res, next) {
  res.send('Hello World!');
});

router.get('/create-todo', function(req, res, next) {
  res.send('Hello World!');
});

router.post('/retrieve-todo', function(req, res, next) {
  res.send('Hello World!');
});

router.put('/update-todo', function(req, res, next) {
  res.send('Hello World!');
});

router.delete('/delete-todo', function(req, res, next) {
  res.send('Hello World!');
});

module.exports = router;
