let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let options = require('../options');
let url = `mongodb://${options.storageConfig.user}:${options.storageConfig.password}@ds157158.mlab.com:57158/${options.storageConfig.database}`;
let dbname = options.storageConfig.database;

// storing Database url and collection name 
let db = mongojs(url,[dbname]);

// index page
router.get('/index',(req,res,next)=>{
    db.dbname.find((err,dbname)=>{
        if(err){
            res.send(err);
        }
        res.json(dbname);
     });
    console.log(url);
});

module.exports = router;
