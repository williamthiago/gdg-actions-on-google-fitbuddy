const db = require('./db');

function createUser(user) {
	return db.ref(`users/${user.id}`).set({
		id: user.id,
		name: user.name.display,
		height: user.height,
		weight: user.weight,
		age: user.age,
		lifeStyle: user.lifeStyle,
		gender: user.gender
	});
}

module.exports = createUser;
