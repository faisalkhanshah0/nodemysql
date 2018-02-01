var express = require('express');
var router = express.Router();
var { con } = require('.././server/mysql-connect');



/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = 'select * from emp';

    con.query(sql, (err, result) => {
    if(err){
    return console.log('query not executed :',err);
    }

    // console.log('record found',JSON.stringify(result, undefined, 2));
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
    // res.render('index', { title: 'Express' });

    });

  // res.render('index', { title: 'Express' });
});

module.exports = router;
