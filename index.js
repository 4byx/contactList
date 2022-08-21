const express = require('express');
const path = require('path');
const port = 3000;

const app = express();


// ejs setup
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'htmlfiles'));



// css setup
app.use(express.static('assets'));
app.use(express.urlencoded());



const contactsList = [
    {
        name : "Abhimanyu Ahuja",
        phone : 9485540007
    },
    {
        name : "Shubham rana",
        phone : 8252834534
    },
    {
        name : "Ashmit",
        phone : 239842358
    }
]


// rendering contacts page 
app.get('/contacts',function(req,res){
    return res.render('contacts',{
        title : 'contacts-list',
        ContactList : contactsList
    })
});


app.post('/create-contact',function(req,res){
    contactsList.push(req.body);
    return res.redirect('back');
});




// listening to port
app.listen(port,function(err){
    if(err){
        console.log('there is an error',err);
        return;
    }
    console.log('server is up and running');
})






