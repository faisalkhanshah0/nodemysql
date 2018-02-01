var express = require('express');

var router = express.Router();
var { con } = require('.././server/mysql-connect');
var bodyParser = require('body-parser');



/* GET home page. */
router.get('/', function(req, res, next) {
  

    res.setHeader('Content-Type', 'text/html');
    // res.send(result);
    res.render('deletes', { title: 'Delete',comment : 'nothing' });


  // res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  console.log('here is the entered data : ',req.body);
  var eid = req.body.eid;
  var name = req.body.name;
  var obj = {
    eid,
    name
  };

  console.log(obj);
  if(obj.eid!='')
  {
    var sql = 'delete from emp where eid = ?';
  con.query(sql, obj.eid, (err, result) => {
    if(err){
      return console.log('Delete process not done :',err);
    }

    res.setHeader('Content-Type', 'text/html');
    res.render('deletes', { 
      title: 'Delete',
      comment : 'deleted record' 
      
    });
    res.end();
  });
  }
  else if(obj.name!='')
  {
    var sql = 'delete from emp where name = ?';
  con.query(sql, obj.name, (err, result) => {
    if(err){
      return console.log('Delete process not done :',err);
    }

    res.setHeader('Content-Type', 'text/html');
    res.render('deletes', { 
      title: 'Delete',
      comment : 'deleted record' 
      
    });
    res.end();
  });
  }
  
  
  // res.send(obj);
});

module.exports = router;
