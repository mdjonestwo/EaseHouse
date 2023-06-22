const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Import your routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Register the routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/easehousedb")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR!", err);
  });

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
