const { connect, connection } = require('mongoose');

// Create connection using MongoDB compass, will test tmrw
const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkAPIDB';

connect(connectionString);

module.exports = connection;