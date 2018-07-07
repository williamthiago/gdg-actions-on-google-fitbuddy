const { calcImc, calcCalories, calcShape } = require("../components/calories");
const strings = require("./strings");

const userBodyInfoHandler = assistant => {
  	assistant.ask('User body respondendo');
	console.log(assistant.parameters);
	assistant.ask(strings.USERBODY.MESSAGES.ALL_SET);

	let imc = calcImc(1.9, 60);
	let calories = calcCalories(1.9, 60, 30, 'sedentary', 'male');
	let shape = calcShape(imc);

	assistant.ask(strings.USERBODY.MESSAGES.AMOUNT_OF_CALORIES.replace(/_CALORIES_/g, calories));

	let messagesByShape = {
		'skinny': strings.USERBODY.MESSAGES.SKINNY_GOALS,
		'overweight': strings.USERBODY.MESSAGES.OVERWEIGHT_GOALS,
		'normal': strings.USERBODY.MESSAGES.NORMAL_GOALS
	};

	assistant.ask(messagesByShape[shape]);
};

module.exports = userBodyInfoHandler;
