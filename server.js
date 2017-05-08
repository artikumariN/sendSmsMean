  var  express        =    require("express"),
      app             =    express(),
      mailer          =    require('express-mailer'),
      path            =    require('path'),
      twilio          =    require("twilio"),
      client          =    new twilio('ACb23dd19a634e53606238a6aeb2446592','455216ca8fe7703787c936d1856ee07b'),
      bodyParser      =    require("body-parser");

    app.use(express.static(__dirname + "/public/"));
    var viewPath  =path.join(__dirname + "/public/");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/',function(req,res){
      res.sendFile(viewPath+"view/index.html");
    });
    app.post('/sendSMS',function(req,res){
      console.log(req.body);
      client.messages.create
      ({
          to:'+91'+req.body.mobileNO,
          from:'+18067310390',
          body:req.body.msg
      }).then(function(message)
        res.send("Message has been send Successfull!")
      });;
    });

      app.listen(8081,function(req,res){
        console.log("app listening on port no 8081");
      });
