let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let options = require('../options');
let databaseUrl = "mongodb://debo12:debo1234@ds018538.mlab.com:18538/practice-db";
var collections = ["products_new"];
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

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
    db.products_new.save({
        title: req.body.title,
        picUrl: req.body.picUrl
    },(err,saved)=>{
      if(err || !saved){
          console.log("User not Saved");
      } 
      else{
          sConnect();
      }
    });
});

function sConnect(){
    var myBucket = 'my.unique.bucket.name';

    var myKey = 'myBucketKey';
    
    s3.upload(params, function(err, data) {
        console.log(err, data);
    });
}
    

module.exports = router;
