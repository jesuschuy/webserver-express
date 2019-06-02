const http = require('http');

http.createServer((req , res)=>{
    //res.write('Hola mmundo');
    res.writeHead(200,{ 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Jesús Velázquez Vásquez',
        edad: 25,
        url: req.url
    }
    res.write(JSON.stringify(salida));

    res.end();
})
.listen(8080);

console.log('Escuchando el pueto 8080');