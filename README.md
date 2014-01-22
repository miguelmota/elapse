# Elapse v0.1.0

[![Dependency Status](https://gemnasium.com/miguelmota/elapse.png)](https://gemnasium.com/miguelmota/elapse)

Simple timer to track how long an operation takes.

## Install

Available via [npm](https://npmjs.org/package/elapse)

```bash
npm install elapse
```

## Usage

```javascript
var elapse = require('elapse');

elapse.time('LabelName');
elapse.timeEnd('LabelName');
```

### Example

Debug option set to true (default) outputs to stdout

```javascript
var elapse = require('elapse');

elapse.configure({
	debug: true
});

elapse.time('AsyncOperation');
setTimeout(function() {
	elapse.timeEnd('AsyncOperation');
	// Outputs:
	// Elapsed time: AsyncOperation: 1500ms
}, 1500);

```

Or you can store the result in a variable

```javascript
var elapse = require('elapse');

elapse.configure({
	debug: false
});

elapse.time('AsyncOperation');
setTimeout(function() {
	var elapsed = elapse.timeEnd('AsyncOperation');
	console.log(elapsed); // 1500
}, 1500);

```

## Test

Tests created using [Jasmine](http://pivotal.github.io/jasmine/)

```
npm test
```

## License

Released under the MIT License.
