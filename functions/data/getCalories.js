const db = require('./db');
const { formatDate } = require('../utils');
 
function updateCalories(userId, date, calories) {
	return db
		.ref(`users/${userId}/history/${date}/totalCalories`)
		.once('value')
		.then((snapshot) => snapshot.val())
		 
}

module.exports = updateCalories;
