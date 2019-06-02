const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//helpers

app.get('/', (req, res) => {
    //res.send('Hello World');
    /*
    let salida = {
        nombre: 'Jesús Velázquez Vásquez',
        edad: 25,
        url: req.url
    }
    res.send(salida);
    */

    res.render('home', {
        nombre: 'Jesús',
        //anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    /*
    res.render('about', {
        anio: new Date().getFullYear()

    });
    */
   res.render('about');

});


/*
app.get('/data',(req, res) =>{
    res.send('Hola data'); 
})
*/
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})