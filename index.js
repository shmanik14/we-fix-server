const express = require('express')
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const objectId = require('mongodb').ObjectId;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cxkd4.mongodb.net/weFix?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 4000

client.connect(err => {
    const serviceCollection = client.db("weFix").collection("services");
    const testimonialCollection = client.db("weFix").collection("testimonials");

    app.post('/addService', (req,res) => {
        const service = req.body;
        paintCollection.insertOne(service)
        .then(result => {
            console.log(result);
            res.send(result.insertedCount > 0)
        })
    })


})

app.get('/', (req, res) => {
    res.send('Hello Painting Precision')
  })
  
app.listen(port)