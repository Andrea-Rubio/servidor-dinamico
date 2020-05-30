const express = require('express');

const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.render('index',{
        autor: "Andrea Rubio Padilla",
        year : new Date().getFullYear(),
        title : "Inicio",
    });
});

app.get('/leonardo', (req, res)=> {
    res.render('daVinci',{
        autor: "Andrea Rubio Padilla",
        year : new Date().getFullYear(),
        title : "Leonardo da Vinci", 
    });
});

app.get('/vincent', (req, res)=> {
    res.render('vanGogh',{
        autor: "Andrea Rubio Padilla",
        year : new Date().getFullYear(),
        title : "Vincent Van Gogh",
    });
});

app.get('/pablo', (req, res)=> {
    res.render('picasso', {
        autor: "Andrea Rubio Padilla",
        year : new Date().getFullYear(),
        title : "Pablo Picasso",
    });
});

app.get('/claude', (req, res)=> {
    res.render('monet', {
        autor: "Andrea Rubio Padilla",
        year : new Date().getFullYear(),
        title : "Claude Monet"
    });
});


app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});
