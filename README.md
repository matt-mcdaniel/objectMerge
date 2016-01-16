# objectMerge.js

![alt text](http://s17.postimg.org/swamowddb/object_Merge.jpg "Object Merge Logo")

A simple, single function to merge objects into a single object. Objects' properties are overwritten in reverse of the order that they are supplied as arguments to the `merge()` function. Similar to `jQuery.extend` and Underscore's `_.extend`.

### Example Usage:

``` javascript
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

console.log(merged);


{ /* Result
	'type': 'Non Profit',
	'price': 10000,
	'environment': 'rural',
	'name': 'The Saratoga',
	'city': 'Little Rock'
}
```

License
----

MIT