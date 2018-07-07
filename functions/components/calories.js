const calcImc = (height, weight) => weight / (height * height);

const isFemale = (gender) => gender === 'female';

const isSkinny = (imc) => imc < 18;

const isOverweight = (imc) => imc > 25;

const lifestyleFactors = {
	'sedentary': 1.2,
	'work': 1.375,
	'low_exercise': 1.55,
	'medium_exercise': 1.725,
	'hard_exercise': 1.9
};

const calcFemaleCalories = (height, weight, age, lifestyleFactor) =>
	lifestyleFactor * (655 + ((9.6 * weight) + (1.8 * height) - (4.7 * age)));


const calcMaleCalories = (height, weight, age, lifestyleFactor) =>
	lifestyleFactor * (66 + ((13.7 * weight) + (5 * height) - (6.8 * age)));

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

	let caloriesTable = {
		skinny: calories + 1000,
		overweight: calories - 1000,
		normal: calories
	};

	let shape = calcShape(imc);

	return caloriesTable[shape];
}

module.exports = {
	calcImc,
	calcCalories
};
