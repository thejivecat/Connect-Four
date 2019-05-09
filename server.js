const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('Client/dist'));

app.listen(port, () => console.log("Starting up index.html"));