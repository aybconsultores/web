const express = require('express');
const firebaseAdmin = require('firebase-admin');
const bodyParser = require('body-parser');
const auth = require('./auth');
const app = express();

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(auth.firestoreConfig)
});

const db = firebaseAdmin.firestore();

// Need to parse HTTP request body
app.use(bodyParser.json());

app.post('/collection/:collectionName(*)',(req, res) => {
  const collectionName = req.params.collectionName;
  const content = req.body.data[0];
  // console.log(content);
  db.collection(collectionName)
    .doc(content.key)
    .set(content);
  res.send("success");
});

const server = app.listen(8080, function () {
  const host = server.address().address.replace("::", "localhost");
  const port = server.address().port;
  
  console.log("App listening at http://%s:%s", host, port);
});
