const fetch = require('node-fetch');
const config = require('../config');

const fetchGif = (text) => fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${config.GIPHY_KEY}&s=${text}`)
    .then(res => res.json())
    .then(res => res.data.embed_url);

module.exports = fetchGif;
