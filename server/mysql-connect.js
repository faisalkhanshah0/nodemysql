const mysql = require('mysql');

console.log('mysql-connect executed');

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'toor',
    database: 'hr'

});

con.connect((err, result) => {
    if(err){
        return console.log('something went wrong : ',err);
    }

    console.log('All good and connected.');
});


module.exports = {
    con
}
