const config = require('config');
const express = require('express');
const bodyParser= require('body-parser');
const cors = require("cors");

const indexRouter = require("./routes/index");
const plantsRouter = require("./routes/plants");

const port = config.get('port');

const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.listen(port, () => console.log(`api listening on ${port}`));

app.use(bodyParser.json());

app.use("/api/", indexRouter);
app.use("/api/plants", plantsRouter);

module.exports = app;