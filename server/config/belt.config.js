const mongoose = require('mongoose');
const db = "mongodb+srv://root:root@jokerapi.pdmns.mongodb.net/beltExam?retryWrites=true&w=majority";

// Mongoose connection/config
mongoose.connect(`${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));