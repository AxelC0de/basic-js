const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

	let res = 0
	arr = arr.flat(Infinity)
	for (const i of arr) {
		if (i === '^^') {
			res++
		}
	}
	return res;
};
