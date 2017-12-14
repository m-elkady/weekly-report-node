import express from 'express';


const app = express();
const CLIENT_ID= '828c9f83e4c929dc911f';

app.get('/get-login-link', (req, res) => {
    res.send({
        url: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    });
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Started on port ${server.address().port}`);
});

