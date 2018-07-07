const db = require('./db');
const { formatDate } = require('../utils');

const db = require('./db');

function addMeal(userId, date, type, consumables) {
	const date = formatDate(date || new Date());

	//TODO: update the total of calories

	return Promise.all(
		consumables.map((consumable) =>
			db.ref(`users/${user.id}/history/${date}/meals`).push({
				type,
				consumable: consumable.consumable,
				quantity: consumable.amount || 1
			})
		)
	);
}

module.exports = addMeal;
