const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	if (!Array.isArray(arr)) {
		return false
	}
	let arrStr = []
	for (const i of arr) {
		if (typeof i === 'string') {
			arrStr.push(i)
		}
	}

	let arrFirst = []
	for (let i of arrStr) {
		i = i.trim().substring(0, 1).toUpperCase()
		arrFirst.push(i)
	}

	// arrFirst = [... new Set(arrFirst)]

	arrFirst.sort((a, b) => a.localeCompare(b));
	arrFirst = arrFirst.join('')

	return arrFirst;
};
