const randomValueFromArray = (arr) => {
    let index = Math.round(Math.random() * arr.length) - 1;
    return item = arr[index];
}

module.exports = {
    randomValueFromArray
};