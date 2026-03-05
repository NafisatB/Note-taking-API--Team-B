const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoute");

const app = express();


app.use(express.json());
app.use(cors());

app.use("/notes", noteRoutes);

module.exports = app;