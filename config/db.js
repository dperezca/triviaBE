const mongoose = require("mongoose");
const DB_URI = "mongodb://127.0.0.1:27017/trivia";
const DB = require("../config");

module.exports = () => {
  const connect = async () => {
    try {
      console.log("hola", DB);
      await mongoose.connect(DB);
      console.log("Conectado a BD");
    } catch (error) {
      console.log(error);
    }
  };
  connect();
};
