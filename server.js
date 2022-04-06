const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const {MongoClient} = require('mongodb')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// async function main(){
//   const uri = "mongodb+srv://MrJones:7vr4HKqZjazXXRTR@cluster0.iqlmk.mongodb.net/happydirtdb?retryWrites=true&w=majority"

//   const client = new MongoClient(uri)

//   try {
//     await client.connect();

//     await listDatabases(client);

//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close;
//   }

// }

// main().catch(console.error);




mongoose.connect(process.env.MONGODB_URI || 'mongodb://l/happydirtdb', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
