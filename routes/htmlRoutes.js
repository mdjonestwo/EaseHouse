const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  app.get("/coolers", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/app.html"));

    // res.sendFile(path.join(__dirname + "/../public/cooler.html"));
  });
};
