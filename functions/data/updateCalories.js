const db = require('./db');
const { formatDate } = require('../utils');
 
function updateCalories(userId, date, calories) {
	return db
		.ref(`users/${userId}/history/${date}/totalCalories`)
		.once('value')
		.then((snapshot) => snapshot.val())
		.then((totalCalories) => {
			return db.ref(`users/${userId}/history/${date}/totalCalories`).set(totalCalories + calories);
		});
}

module.exports = updateCalories;
