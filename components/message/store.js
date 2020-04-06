const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

db.connect('mongodb+srv://db_user_node:db_user_node@nodetest-6arkr.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'telegram'
});

//console.log('[db] conectada con exito');

function addMessage(message) {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
}