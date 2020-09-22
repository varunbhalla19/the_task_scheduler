const mongoose = require("mongoose");

const uri =
  "mongodb+srv://node_mongo_project:Su4Z5vwEAKhdUke9@varunmongocluster.hjtgo.mongodb.net/taskscheduler?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

exports.db = db;
