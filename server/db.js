const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/kyōyū";

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Connected to MongoDB successfully");
    });
  } catch (error) {
    console.log(`MongoDb Connection error: ${error}`);
  }
};

module.exports = connectToMongo;
