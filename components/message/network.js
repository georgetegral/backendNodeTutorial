const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', function(req,res)
{
    console.log(req.headers);
    res.header({
        "custom-header": "hola"
    })
    response.success(req,res,"lista de mensajes",201);
});
router.post('/', function(req,res)
{
    console.log(req.query);
    if (req.query.error == 'ok')
    {
        response.success(req,res,"Error simulado", 500, 'es solo una simulacion de los errores');
    }
    response.success(req,res,"Creado correctamente",201);
});

module.exports = router;