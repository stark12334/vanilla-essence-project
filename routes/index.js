let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let options = require('../options');
let databaseUrl = "mongodb://debo12:debo1234@ds018538.mlab.com:18538/practice-db";
var collections = ["products_new"];

// storing Database url and collection name 
var db = require("mongojs")(databaseUrl);

// index page
router.get('/index',(req,res,next)=>{
    db.products_new.find((err,products_new)=>{
        if(err){
            res.send(err);
        }
        res.json(products_new);
     });
});

router.post('/index',(req,res,next)=>{
    // db.products_new.save({
    //     id: req.id,
    //     title: req.title,
    //     picUrl: req.picUrl
    // },(err,saved)=>{
    //   if(err || !saved){
    //       console.log("User not Saved");
    //   } 
    //   else{
    //       console.log(id);
    //   }
    // });
    console.log(req);
});

module.exports = router;
