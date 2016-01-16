/*

Example Usage:
merge({}, defaults, config)

Merge Order:
{} <= defaults <= config

*/

function merge(target) {
	var mergeObjects = Array.prototype.slice.call(arguments, 1);
	return mergeObjects.reduce(function(acc, cur) {
		Object.keys(cur).forEach(function(key) {
			acc[key] = cur[key];
		});
		return acc;
	}, target);
}
