const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(4500, () => console.log('Listening on port 4500!'));