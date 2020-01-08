var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
  res.render('form');
});

router.post('/', function (req, res, next) {

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
    subject: "Ficha para cadastro Ano 2020",
    test: "olá xxx",
    html:
      `<h2>Ficha para cadastro Ano 2020</h2>
       <p>Nome.....: ${req.body.nome}</p>
       <p>Email....:${req.body.email}</p>
       <p>Assunto..: ${req.body.assunto}</p>
       <p>Menssagem: ${req.body.mensagem}</p>`
      

  }).then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err);
  })


  res.json({
    request: req.body
  });




});

module.exports = router;
