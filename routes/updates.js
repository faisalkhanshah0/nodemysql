var express = require('express');

var router = express.Router();
var { con } = require('.././server/mysql-connect');
var bodyParser = require('body-parser');



/* GET home page. */
router.get('/', function(req, res, next) {
  

    res.setHeader('Content-Type', 'text/html');
    // res.send(result);
    res.render('updates', { title: 'Update',comment : 'nothing' });


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
  
    var sql = 'update emp SET name = ? where eid = ?';
  con.query(sql, [obj.name, obj.eid], (err, result) => {
    if(err){
      return console.log('Update process not done :',err);
    }

    res.setHeader('Content-Type', 'text/html');
    res.render('updates', { 
      title: 'Update',
      comment : 'updated record' 
      
    });
    res.end();
  });
  
  
  
  
  // res.send(obj);
});

module.exports = router;
