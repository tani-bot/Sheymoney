const express = require('express')
const router = express.Router()
const User = require('../models/users')
const { emit } = require('nodemon')

router.post('/login',async function(req,res){
    try{
        const result = await User.findOne({email : req.body.email, password : req.body.password})
        if(result){
            res.send(result)
        }
        else{
            res.status(500).json("error")
        }
    }
    catch{
        res.status(500).json({error});
    }
})

router.post("/register", async (req, res) => {
    try{
    const newUser = new User(req.body)
    newUser.save()
    res.send('New user registered')    
    }
    catch{
        res.send('error')
    }
});

module.exports = router