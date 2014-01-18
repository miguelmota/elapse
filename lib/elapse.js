var Timer = function(opts) {
	opts = opts || {};
	this.debug = opts.debug;
};
 
Timer.prototype.time = function(label) {
  this._times = this._times || {};
  this._times[label] = Date.now();
};
 
Timer.prototype.timeEnd = function(label) {
	var time,
			duration,
			debug = this.debug;

  try {

    time = this._times[label];

    if (!time) {
      throw new Error('Elapse timer does not exist: ' + label);
    }

		duration = Date.now() - time;

		if (debug) {
			console.log('Elapsed time: %s: %dms', label, duration);
		}

    delete this._times[label];

  } catch (e) {

		if (debug) {
			console.error('Elapse error '+times[label]+':', e);
		}
  }

	return duration;
};
 
module.exports = Timer;
