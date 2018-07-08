const calories = require('../data/sample_calories');

function getCaloriesOf(food) {
	return calories[food] || 400;
}

function sumConsumablesCalories(consumables) {
	let total = 0;

	for (var i = 0; i < consumables.length; i++) {
		const amount = consumables[i].amount || 1;
		const calories = getCaloriesOf(consumables.consumable) * amount;

		total += calories;
	}

	return total;
}

const userConsumeHandler = (assistant) => {
	const { date, meal, consumables } = assistant.parameters;

	const totalCalories = sumConsumablesCalories(consumables);

	assistant.ask(`Your meal have about ${totalCalories} calories`);
};

module.exports = userConsumeHandler;
