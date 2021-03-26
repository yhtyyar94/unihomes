const mongoose = require('mongoose')
require('dotenv').config()

/**Create .env file in backend folder and add your mongodb connection as db_connection**/

module.exports = () => {
    mongoose.connect(process.env.db_connection, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true})
    mongoose.connection.on('open', () => {
        console.log('Connected to Database')
    })
    mongoose.connection.on('error', (err) => {
        console.log('DB connection failed' + err)
    })
}


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://softwarechasers:softwarechasers@cluster0.kmmfi.mongodb.net/unihomes?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
