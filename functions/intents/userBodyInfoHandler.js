const { calcImc, calcCalories, calcShape } = require("../components/calories");
const strings = require("./strings");

const userBodyInfoHandler = assistant => {
	console.log(assistant.parameters);

	const {
		age: { amount: age },
		weight: { amount: weight },
		height: { amount: height },
		gender,
		lifeStyle
	} = assistant.parameters;

	let imc = calcImc(height, weight);
	let calories = calcCalories(height, weight, age, lifeStyle, gender);
	let shape = calcShape(imc);

	let messagesByShape = {
		'skinny': strings.USERBODY.MESSAGES.SKINNY_GOALS,
		'overweight': strings.USERBODY.MESSAGES.OVERWEIGHT_GOALS,
		'normal': strings.USERBODY.MESSAGES.NORMAL_GOALS
	};

	const message = `
		${strings.USERBODY.MESSAGES.ALL_SET}
		${strings.USERBODY.MESSAGES.AMOUNT_OF_CALORIES.replace(/_CALORIES_/g, calories)}
		${messagesByShape[shape]}
	`;

	assistant.ask(message);
};

module.exports = userBodyInfoHandler;
