const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
      Name: {
        type: String,
    
      },
      Password: {
        type: String,
      }

});

const User = mongoose.model("User", UserSchema);

User.createCollection().then(function(collection) {
  console.log('Collection is created!');
  console.log(collection)
});


module.exports = User;