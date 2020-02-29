var express = require('express');
var app = express();
var path = require('path')
import itemsController from "./routes/items.routes.js";

app.use('/raees', express.static(path.join(__dirname, 'build')));

app.use("/api/items", itemsController);

app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
});