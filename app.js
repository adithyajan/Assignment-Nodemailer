var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adithyankm99@gmail.com',
    pass: 'lnza kxhe exop vuuy'
  }
});

var mailOptions = {
  from: 'adithyankm99@gmail.com',
  to: 'akshayapradeep456@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is the email send for learning'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});