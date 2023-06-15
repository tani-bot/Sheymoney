const express = require('express')
const router = express.Router()
const Transaction = require('../models/transactions')
const { emit } = require('nodemon')

router.post("/add-transaction", async (req, res) => {
    try{
    const newTransaction = new Transaction(req.body)
    newTransaction.save()
    res.send(newTransaction)    
    }
    catch{
        res.send('error')
    }
});

router.post('/get-all-transactions',async (req,res)=>{
    try{
    const all_transactions = await Transaction.find({userid : req.body})
    res.send(all_transactions)
    }
    catch{
        res.send('error')
    }
})

module.exports = router