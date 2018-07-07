const { calcImc, calcCalories, calcShape } = require("../components/calories");
const strings = require("./strings");

const userBodyInfoHandler = assistant => {
  	assistant.ask('User body respondendo');
	console.log(assistant.parameters);
	assistant.ask(strings.USERBODY.MESSAGES.ALL_SET);

	const {
		age: { amount: age },
		weight: { amount: weight },
		height: { amount: height },
		gender,
		lifeStyle
	} = assistant.parameters;

	console.log(age, weight, height, gender, lifeStyle);

	let imc = calcImc(height, weight);
	let calories = calcCalories(height, weight, age, lifeStyle, gender);
	let shape = calcShape(imc);

	console.log('calories' + calories);
	console.log('imc' + imc);
	console.log('shape' + shape);

	assistant.ask(strings.USERBODY.MESSAGES.AMOUNT_OF_CALORIES.replace(/_CALORIES_/g, calories));

	console.log(strings.USERBODY.MESSAGES.AMOUNT_OF_CALORIES.replace(/_CALORIES_/g, calories));

	let messagesByShape = {
		'skinny': strings.USERBODY.MESSAGES.SKINNY_GOALS,
		'overweight': strings.USERBODY.MESSAGES.OVERWEIGHT_GOALS,
		'normal': strings.USERBODY.MESSAGES.NORMAL_GOALS
	};

	console.log(messagesByShape[shape]);

	assistant.ask(messagesByShape[shape]);
};

module.exports = userBodyInfoHandler;
