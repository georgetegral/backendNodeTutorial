const express = require('express');
const message = require('../components/message/network');
const user = require('../components/users/network');

const routes = function(server)
{
    server.use('/message', message);
    server.use('/users', user)
}

module.exports = routes;