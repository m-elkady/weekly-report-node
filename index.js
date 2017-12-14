import express from 'express';


const app = express();
const CLIENT_ID= '828c9f83e4c929dc911f';
const CLIENT_SECRET= '394f2034848cd89238d780e0a6bd8e7bce75b1c7';

app.get('/get-login-link', (req, res) => {
    res.send({
        url: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    });
});





const server = app.listen(process.env.PORT, () => {
    console.log(`Started on port ${server.address().port}`);
});

