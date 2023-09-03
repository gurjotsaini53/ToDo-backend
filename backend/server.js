const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/ToDoRoutes");
const app = express();
const PORT = process.env.port || 5000;
const cors = require("cors");
// mongo db database connection

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.log(err);
  });

// make server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
