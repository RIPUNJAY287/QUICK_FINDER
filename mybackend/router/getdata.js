const express = require('express');
const router = express.Router();
router.get('/',async(req,res)=>{
    try{

    }
    catch(err){
    res.send('get request');
    }
})
module.exports =router;