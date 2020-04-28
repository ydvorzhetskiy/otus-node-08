const express = require('express');

const app = express();

app.use((req, res, next) => {
    // user:password
    if (req.header('Authorization') !== 'Basic dXNlcjpwYXNzd29yZA==') {
        res.header('WWW-Authenticate', 'Basic');
        res.sendStatus(401);
    } else {
        next()
    }
});

app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
});

app.get('/person', (req, res) => res.send({name: 'Ivan'}));

app.listen(3000);
