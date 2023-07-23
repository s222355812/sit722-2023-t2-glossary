var express = require('express');
var router = express.Router();

const itemList =[
  {
    'id':1,'title':'Heading 1', 'description': 'This is workshop activity'
  },
  {
    'id':2,'title':'Heading 2', 'description': 'This activity is for week 1 '
  },
  {
    'id':3,'title':'Heading 3', 'description': 'demo code'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub:'Some additional information', items:itemList });
});

module.exports = router;
