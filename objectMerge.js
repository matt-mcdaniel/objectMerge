var defaults = {
	'type': 'For Profit',
	'price': 10000,
	'environment': 'rural'
}

var config = {
	'type': 'Non Profit',
	'name': 'The Saratoga',
	'city': 'Little Rock',
}

var merged = merge({}, defaults, config);

// create merge object: {} <= defaults <= config
function merge(target) {
	var mergeObjects = Array.prototype.slice.call(arguments, 1);
	return mergeObjects.reduce(function(acc, cur) {
		Object.keys(cur).forEach(function(key) {
			acc[key] = cur[key];
		});
		return acc;
	}, target);
}

console.log(merged);