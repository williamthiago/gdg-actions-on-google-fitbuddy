const { Image, Permission } = require('actions-on-google');
const fetchGif = require('../components/gif');
const { randomValueFromArray: rand } = require('../components/randomizer');
const strings = require('./strings');

const welcomeHandler = (assistant) => {
	let messageTime = 'FIRST_TIME'; // FIRST_TIME, OVERWEIGHT, SKINNY

	if (!assistant.user.id) {
		assistant.ask(
			new Permission({
				context: 'We want to know your name',
				permissions: [ 'NAME' ]
			})
		);
	}

	assistant.ask(rand(strings.WELCOME[messageTime].MESSAGES));

	return fetchGif(rand(strings.WELCOME[messageTime].GIFS)).then((imageUrl) => {
		assistant.ask(
			new Image({
				alt: strings.WELCOME[messageTime].GIF_TITLE,
				url: imageUrl
			})
		);
	});
};

module.exports = welcomeHandler;
