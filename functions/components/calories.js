const calcImc = (height, weight) => weight / (height * height);

const isFemale = (gender) => gender === 'female';

const isSkinny = (imc) => imc < 18;

const isOverweight = (imc) => imc > 25;

const lifestyleFactors = {
	'sedentary': 1.2,
	'normal': 1.55,
	'fitness': 1.9
};

const calcFemaleCalories = (height, weight, age, lifestyleFactor) =>
	lifestyleFactor * (655 + ((9.6 * weight) + (1.8 * height * 100) - (4.7 * age)));


const calcMaleCalories = (height, weight, age, lifestyleFactor) =>
	lifestyleFactor * (66 + ((13.7 * weight) + (5 * height * 100) - (6.8 * age)));

const calcShape = (imc) =>
	isSkinny(imc) ? 'skinny' :
	isOverweight(imc) ? 'overweight' :
	'normal';

const calcCalories = (height, weight, age, lifestyle, gender) => {
	let imc = calcImc(height, weight);
	let lifestyleFactor = lifestyleFactors[lifestyle];
	let calories = isFemale(gender) ?
		calcFemaleCalories(height, weight, age, lifestyleFactor) :
		calcMaleCalories(height, weight, age, lifestyleFactor);

	calories = Math.round(calories);

	let caloriesTable = {
		skinny: calories + 1000,
		overweight: calories - 500,
		normal: calories
	};

	let shape = calcShape(imc);

	return caloriesTable[shape];
}

module.exports = {
	calcImc,
	calcShape,
	calcCalories
};
