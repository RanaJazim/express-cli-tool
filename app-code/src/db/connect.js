const mongoose = require("mongoose");
const config = require("config");

module.exports = async () => {
  const dbConnString = config.get("db.connString");

  try {
    const connection = await mongoose.connect(dbConnString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    return connection;
  } catch (err) {
    throw err;
  }
};
