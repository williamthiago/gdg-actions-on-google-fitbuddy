module.exports = {
    WELCOME: {
        FIRST_TIME: {
            MESSAGES: [
                'Hello, I want to help you to became healthy!',
                'Hey ya! I can help you to take care of your meals!',
                'Let\'s take care of your health together?',
                'How about we plan your meals!',
			],
			HELP_MESSAGE: 'I will ask some questions to know you, after that I can suggest the right amount you can consume targeting a normal IMC. To start, what\'s your age, weight, age? Or are you thing in tell me your secrets of consume?',
            GIFS: ['hello', 'hi', 'hi+strange'],
            GIF_TITLE: 'Hello!!!'
        },
        OVERWEIGHT: {
            MESSAGES: [
                'Hi! Good to see you again WILLIAM, I\'m happy to see you taking care about your health',
                'Hello WILLIAM, what can I do to help you about your health meals?',
                'Heeeey! Let\'s burn more calories',
            ],
            GIFS: ['hello+again', 'good+to+see+you'],
            GIF_TITLE: 'Hello again!!!'
        },
        SKINNY: {
            MESSAGES: [
                'Hi! Good to see you again WILLIAM, I\'m happy to see you taking care about your health',
                'Hello WILLIAM, what can I do to help you about your health meals?',
                'Heeeey! How about an Ice Cream with chocolate? :D',
            ],
            GIFS: ['hello+again', 'good+to+see+you', 'ice+cream'],
            GIF_TITLE: 'Hello again!!!'
        }
    },

    FALLBACK: {
        MESSAGES: [
            'Woah! I\'m having trouble listening',
        ],
        GIFS: ['deaf', '404', 'say+again'],
        GIF_TITLE: 'I\'m deaf LOL'
	},

	USERBODY: {
		MESSAGES: {
			ALL_SET: 'All set! Now I have everything I need to continue.',
			AMOUNT_OF_CALORIES: 'The right amount of daily calories for you is _CALORIES_',
			SKINNY_GOALS: 'Eating all of this, you will increase about 1Kg per week. Great right?',
			OVERWEIGHT_GOALS: 'I bet you can lose 1Kg per week, we are the champions!',
			NORMAL_GOALS: 'You can eat this and continue in your current shape, no worries!'
		}
	}
};
