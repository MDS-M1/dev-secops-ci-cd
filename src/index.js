const express = require('express');

const app = express();
const port = 8080;

app.disable("x-powered-by");

app.get('/', (req, res) => {
    res.send('Hello world!');
});

let server; // Declare server variable outside of the app.listen function

server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = {
    app,
    closeServer: () => {
        server.close();
    }
};