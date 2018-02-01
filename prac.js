var nodemailer = require('nodemailer');

var con = (function() {
    console.log('this is immediate invoked function');
  })();
  var dor = (() => {
    console.log('immediate invoked function with arrow syntax');
  })();

  var count = (function () {
    var _counter = 0;
    return function () {console.log(_counter); return _counter += 1;}
})();

count();
count();
count();


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'faisalkhanshah@gmail.com',
      pass: 'johny001!'
    }
  });
  
  var mailOptions = {
    from: 'faisalkhanshah@gmail.com',
    to: 'shah.khan@infogain.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });