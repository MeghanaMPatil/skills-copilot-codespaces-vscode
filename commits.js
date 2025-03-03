// create web server
const express = require('express');
const app = express();

// create a route
app.get('/commits', (req, res) => {
    res.send([1, 2, 3]);
});

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));