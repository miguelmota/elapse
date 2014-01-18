var request = require('request');
var Elapse = require('../index');
var elapse = new Elapse({debug: true});

describe('Elapse', function() {
	it('should respond with a time', function(done) {
		elapse.time('Test');
		request('http://www.example.com/', function(err, res, body) {
			var elapsed = elapse.timeEnd('Test');
			expect(elapsed).not.toBe(null);
			done();
		});
	});
	it('should equal close to 1500ms', function(done) {
		elapse.time('Test');
		var t = setTimeout(function() {
			var elapsed = elapse.timeEnd('Test');
			expect(elapsed).toMatch(/150[0-3]/); // Addings 4 milliseconds of padding due to event loop
			clearTimeout(t);
			done();
		}, 1500);
	});
});
