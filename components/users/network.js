const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res)
{
    const filterName = req.query.name || null;
    controller.getUsers(filterName)
        .then((userList) => {
            response.success(req,res,userList,200)
        })
        .catch(e =>{
            response.error(req,res, "Error inesperado", 500, e)
        })
});

router.post('/', function(req,res)
{
    controller.addUser(req.body.name).then((data) => {
        response.success(req,res,data,201);
    })
    .catch(e =>{
        response.error(req,res,"Información inválida", 400, 'Error en el controlador');
    });
});

module.exports = router;