const mongoose = require('mongoose');

module.exports = (() => { return mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function(error) {
    if (error) return console.error(error);
    return console.log('Conectado a MONGODB');
   });
})();