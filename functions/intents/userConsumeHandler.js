function getCaloriesOf(food) {
	return 100;
}

function sumConsumablesCalories(consumables) {
	let total = 0;

	for (var i = 0; i < consumables; i++) {
		const amount = consumables[i].amount || 1;
		const calories = getCaloriesOf(consumables.consumable);

		total += calories;
	}

	return total;
}

const userConsumeHandler = (assistant) => {
	const { date, meal, consumables } = assistant.parameters;

	sumConsumablesCalories(consumables);

	assistant.ask(`Your meal have about ${totalCalories} calories`);
};

module.exports = userConsumeHandler;
