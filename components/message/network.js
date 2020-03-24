const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

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
    controller.addMessage(req.body.user, req.body.message).then((fullMessage) => {
        response.success(req,res,fullMessage,201);
    })
    .catch(e =>{
        response.success(req,res,"Información inválida", 400, 'Error en el controlador');
    });

});

module.exports = router;