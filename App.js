const express = require("express");
const mongoose = require("mongoose");
const transactionsRoutes = require("./routes/transactionsRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

app.use("/api", transactionsRoutes); // Prefix all routes with '/api'

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
