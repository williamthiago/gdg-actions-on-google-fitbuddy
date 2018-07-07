const { Image } = require("actions-on-google");
const fetchGif = require("../components/gif");
const { randomValueFromArray: rand } = require("../components/randomizer");
const strings = require("./strings");

const welcomeHandler = assistant => {
  let messageTime = "FIRST_TIME"; // FIRST_TIME, OVERWEIGHT, SKINNY

  assistant.ask(rand(strings.WELCOME[messageTime].MESSAGES));

  return fetchGif(rand(strings.WELCOME[messageTime].GIFS)).then(imageUrl => {
    assistant.ask(
      new Image({
        alt: strings.WELCOME[messageTime].GIF_TITLE,
        url: imageUrl
      })
    );
  });
};

module.exports = welcomeHandler;
