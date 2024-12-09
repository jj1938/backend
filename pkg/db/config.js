const mongoose = require("mongoose");
const { getSection } = require("../config");

const uri = `mongodb+srv://${getSection("development").MONGO_USERNAME}:${
  getSection("development").MONGO_PASSWORD
}@${getSection("development").MONGO_CLUSTER}/${
  getSection("development").MONGO_DATABASE
}?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("ERROR", err);
  }
}

// connect();
module.exports = connect;
