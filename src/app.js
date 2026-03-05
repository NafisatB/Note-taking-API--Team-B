const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();


app.use(express.json());
app.use(cors());

app.use("/notes", noteRoutes);
app.use(errorHandler);

module.exports = app;