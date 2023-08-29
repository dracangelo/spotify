const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// refreshing our code here
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi ({
        redirectUri: 'http://localhost:3000',
        clientId: 'c85bb889d5674e5aae41a3b5d9efa39a',
        clientSecret: '85239db1bec54f02b357dd39fa4e7c9f',
        refreshToken: 
        
    })
})

// login application
app.post('/login', (req, res) => {
    const code = req.body.code;
    // new spotify web api
    const spotifyApi = new SpotifyWebApi ({
        redirectUri: 'http://localhost:3000',
        clientId: 'c85bb889d5674e5aae41a3b5d9efa39a',
        clientSecret: '85239db1bec54f02b357dd39fa4e7c9f'
        
    })
    spotifyApi.authorizationCodeGrant(code).then(date => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    // error response fallback
    .catch((err) => {
        console.log(err)
        res.sendStatus(400) 
    })
});

app.listen(3001)