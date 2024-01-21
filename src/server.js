const express = require('express');
const app = express();
const port = 8085;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('This is a GET API');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});