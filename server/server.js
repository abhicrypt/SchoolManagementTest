const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const app = express()

require('./models/db')
app.use(express.json())
app.use(cors())
app.use(`/api` , router)

app.listen('8000' , err => {
    if(err) console.log(err)
    console.log('Server is started at PORT number : 8000')
})

var collectionNames
const uri = 'mongodb://localhost:27017/todolist'; // Replace with your MongoDB connection URI
const databaseName = 'todolist'; // Replace with your database name
const { MongoClient } = require('mongodb');
async function getCollections() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(databaseName);
    
    const collections = await db.listCollections().toArray();
    
    // collections.forEach(collection => {
    //   console.log(collection.name);
    // });
    collectionNames = collections.map((collection) => collection.name);

    console.log("Collections:", collectionNames);

    client.close();
  } catch (error) {
    console.error(error);
  }
}
app.get("/collection-names", (req, res) => {
    res.status(200).json(collectionNames);
    
  });

getCollections();




