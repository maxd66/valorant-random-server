const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mddunn66:madmax66@cluster0.ephon.mongodb.net/valorant-random?retryWrites=true&w=majority" ||
      "mongodb://localhost/valorant_random_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

module.exports = mongoose.connection;
