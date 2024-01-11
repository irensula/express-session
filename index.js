const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({ secret: 'thisisnotagoodsecret' }));

app.get('/viewcount', (req, res) => {
    res.send('You have viewed this page x times');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})