/*

Merge Order:
{} <= defaults <= config

*/

function merge(target) {
	var mergeObjects = Array.prototype.slice.call(arguments, 1);
	return mergeObjects.reduce(function(acc, cur) {
		Object.getOwnPropertyNames(cur).forEach(function(key) {
			var propValue = Object.getOwnPropertyDescriptor(cur, key);
			Object.defineProperty(acc, key, propValue);
		});
		return acc;
	}, target);
}
