var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "gronesoft.atendimento@gmail.com",
      pass: "maxwel1104"

    }
  })

  transporter.sendMail({
    from: "GroneSoft Informática <gronesoft.atendimento@gmail.com>",
    to: "gronesoft.atendimento@gmail.com",
    subject: "oi, xxxxxx",
    test: "olá xxx",
    html: "<h1>he,he,he,he</h1>"
  }).then(message =>{
    console.log(message);
  }).catch(err => {
    console.log(err);
  })



  // res.render('index', { title: 'Express' });
});

module.exports = router;
