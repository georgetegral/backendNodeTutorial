const express = require('express');
const router = express.Router();

var app = express();
app.use(router);

router.get('/message', function(req,res)
{
    res.send('Hola desde get');
});
router.post('/message', function(req,res)
{
    res.send('Hola desde post');
});

app.listen(3000);

console.log('Escuchando en http://localhost:3000')