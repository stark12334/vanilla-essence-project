let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let options = require('../options');
let databaseUrl = `mongodb://${options.storageConfig.user}:${options.storageConfig.password}@ds157158.mlab.com:57158/${options.storageConfig.database}`;
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// storing Database url
var db = require("mongojs")(databaseUrl);

//lists all the available products
router.get('/index',(req,res,next)=>{
    db.products_new.find((err,products_new)=>{
        if(err){
            res.send(databaseUrl);
        }
        res.json(products_new);
     });
});

// save the product details to DB and s3 bucket as well
router.post('/index',(req,res,next)=>{
    db.products_new.save({
        title: req.body.title,
        picUrl: req.body.picUrl
    },(err,products_new)=>{
      if(err || !products_new){
          console.log("User not Saved");
      } 
      else{
        //   sConnect();
        console.log('saved');
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
