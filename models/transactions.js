const mongoose = require('mongoose')
const transactionSchema = mongoose.Schema({
    userid : String,
    input: String,
    type: String,
    category: String,
    date: String,
    refernce: String,
    description: String
})

const Transaction = mongoose.model("transactions",transactionSchema)
module.exports = Transaction