const db = require('./db');

function getUser(userId) {
    return db
        .ref(`users/${userId}`)
        .once('value')
        .then((snapshot) => snapshot.val());
}

module.exports = getUser;
