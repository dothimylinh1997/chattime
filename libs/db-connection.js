const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://chat:chat1997@ds123224.mlab.com:23224/chatdb', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', err => console.error(err));
