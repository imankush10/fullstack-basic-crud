const express = require('express');
const cors = require('cors');
const app = express();
const Cards = require('./db');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/cards', async (req,res)=>{
    const data = await Cards.find({});
    res.status(200).json(data);
})

app.post('/addCard', async(req,res)=>{
    const {name,description,interests,social,socialLink, key} = req.body;
    let card = await Cards.findOne({key});
    if(card){
        card.name = name;
        card.description = description;
        card.interests = interests;
        card.social = social;
        card.socialLink = socialLink;
    } else{
        card = new Cards({
            name,
            description,
            interests,
            social,
            socialLink,
            key
        })
    }
    await card.save();
    res.status(201).json({ message: 'Card processed successfully' });
})

app.delete('/deleteCard', async(req,res)=>{
    await Cards.deleteOne({key:req.body.key});
    res.status(201).json({message:'Card deleted successfully'});
})

app.put('/editCard')


app.listen(PORT);