const mongoose = require("mongoose");

module.exports = async () => {
  const dbConnString = "mongodb://localhost:27017/your-db-name";

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
