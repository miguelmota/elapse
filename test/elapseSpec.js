var request = require('request');

describe('Elapse', function() {

	it('should respond with a time', function(done) {
		var elapse = require('../index');
		elapse.time('Test');
		request('http://www.example.com/', function(err, res, body) {
			var elapsed = elapse.timeEnd('Test');
			expect(elapsed).not.toBe(null);
			done();
		});
	});

	xit('should equal close to 1500ms', function(done) {
		var elapse = require('../index');
		elapse.time('Test');
		var t = setTimeout(function() {
			var elapsed = elapse.timeEnd('Test');
			expect(elapsed).toMatch(/150[0-3]/); // Addings 4 milliseconds of padding due to event loop
			clearTimeout(t);
			done();
		}, 1500);
	});

	xit('should verify instance has time property', function(done) {
		var elapse = require('../index');
		elapse.configure({
			debug: false
		});

		elapse.time('Test');
		elapse.timeEnd('Test');

		expect((Object.getPrototypeOf(elapse)).hasOwnProperty('time')).toBeTruthy();
		done();
	});

});
