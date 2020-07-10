const mongoose = require("mongoose");

//using promises with mongoose
mongoose.Promise = global.Promise;

//connect to db
const DB_URL =
  "mongodb+srv://sophia:0059937232@soph-qjwk8.mongodb.net/Soph?retryWrites=true&w=majority";

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  throw err;
}

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${DB_URL}`);
});

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
