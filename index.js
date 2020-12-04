const express= require('express');

const app=express();

const contacts={
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
};

app.get('/welcome',(req,res)=>{
res.status(200).send('Welcome to Dominos!');
return;
});

app.get('/contact',(req,res)=>{
    res.status(200).send(contacts);
    return;
    });

    app.get('*',(req,res)=>{
        res.status(404).send('nothing.... ');
        });

app.listen(8081,()=>console.log('listening'));