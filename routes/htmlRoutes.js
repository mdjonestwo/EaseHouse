const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  app.get("/coolers", (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname + "/../public/app.html"));
=======
    res.sendFile(path.join(__dirname + "/../public/cooler.html"));
>>>>>>> 60ba99b12b728f355dba2daebfb5899a16e79c47
  });
};
