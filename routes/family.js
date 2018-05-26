var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET get Family */
router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err
    var dbo = db.db("family");
    var request = {
        id:parseInt(req.query.id)
    }
    console.log("Request:::",request);
    dbo.collection('members').find(request).toArray(function (err, result) {
        if (err) throw err
        console.log(result)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(result);
        db.close();
        })
    })
  
});

module.exports = router;
