const express = require('express');

let router = express.Router();

module.exports=router;

router.get('/',(req,res)=>{
	res.render('list',{})
})