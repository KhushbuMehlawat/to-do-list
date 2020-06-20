var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.set('view engine', 'ejs');
var items= [];

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(request, response){
    var today = new Date(); 
    var options= {
       weekday : "long",
       day : "numeric",
       month : "long",
       year : "numeric"   
    } 
      var day = today.toLocaleDateString("en-US", options);
     response.render("list", {day: day, NewListItems:items});
});

app.post("/", function(req,res){
   var item = req.body.NewItems;
   items.push(item);
   res.redirect("/") ;
});

app.listen(3000, function(request, response){
    console.log("server is running on port 3000.");
});
