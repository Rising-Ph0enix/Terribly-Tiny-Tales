const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = process.env.port || 3000;

app.use('/', routes);
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

module.exports = app;