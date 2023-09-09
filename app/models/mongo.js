require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection
db.once('open', () => console.log('db connected'))
db.on('error', (error) => console.log(error))