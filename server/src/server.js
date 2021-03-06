var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json({ limit: "50mb" }));

var path = require('path')
import itemsController from "./routes/items.routes.js";


app.use("/api/items", itemsController);
app.use('/raees', express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
});