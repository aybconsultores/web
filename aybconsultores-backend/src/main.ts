import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { verifyToken } from "./middleware/Authentication";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(verifyToken);

const server = app.listen(process.env.PORT || 8080, () => {
  const address:any = server.address();
  const host = address.address.replace("::", "localhost");
  const port = address.port;
  
  console.log("App listening at http://%s:%s", host, port);
});

app.get("/news", (request, response) => {
  response.send("news sample 1");
});

/*
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

let database;

const server = app.listen(process.env.PORT || 8080, function () {
  const host = server.address().address.replace("::", "localhost");
  const port = server.address().port;
  
  console.log("App listening at http://%s:%s", host, port);

  MongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        throw error; 
    }
    database = client.db(process.env.DATABASE_NAME);
    collectionNews = database.collection("news");
    console.log(`Connected to ${process.env.DATABASE_NAME}`);
  });
});

app.get("/news", (request, response) => {
  collectionNews.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

app.get("/news/:id", (request, response) => {
  collectionNews.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

app.post('/news',(request, response) => {
  collectionNews.insertOne(request.body, (error, result) => {
    if(error) {
        return response.status(500).send(error);
    }
    response.send(result.result);
  });
});
*/
