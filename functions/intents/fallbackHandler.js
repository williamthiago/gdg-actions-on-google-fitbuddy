const { Image } = require("actions-on-google");
const fetchGif = require("../components/gif");
const { randomValueFromArray: rand } = require("../components/randomizer");
const strings = require("./strings");

const fallbackHandler = assistant => {
  assistant.ask(rand(strings.FALLBACK.MESSAGES));

  return fetchGif(rand(strings.FALLBACK.GIFS)).then(imageUrl => {
    assistant.ask(
      new Image({
        alt: strings.FALLBACK.GIF_TITLE,
        url: imageUrl
      })
    );
  });
};

module.exports = fallbackHandler;
