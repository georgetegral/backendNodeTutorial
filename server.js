const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req,res)
{
    console.log(req.headers);
    res.header({
        "custom-header": "hola"
    })
    //res.send('Hola desde get');
    response.success(req,res,"lista de mensajes",201);
});
router.post('/message', function(req,res)
{
    console.log(req.query);
    if (req.query.error == 'ok')
    {
        response.success(req,res,"Error simulado");
    }
    response.success(req,res,"Creado correctamente",201);
});
router.delete('/message', function(req,res)
{
    console.log(req.body);
    console.log(req.query);
    res.send('¡Mensaje '+req.body.text+' añadido correctamente!');
});

app.use('/app',express.static('public'));

app.listen(3000);

console.log('Escuchando en http://localhost:3000')