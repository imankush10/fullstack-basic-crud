require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("MongoDB connected successfully")
})

const cardSchema = new mongoose.Schema({
    name:String,
    description:String,
    interests:[String],
    social:String,
    socialLink:String,
    key:String
})

const Cards = mongoose.model('Cards', cardSchema);

module.exports = Cards;