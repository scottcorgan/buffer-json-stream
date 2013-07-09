var through = require('through');

module.exports = function (transformCallback) {
  var _buffer = [];
  
  return through(function (data) {
    _buffer.push(data);
  }, function () {
      var self = this;
      
      this.queue(_buffer);
      process.nextTick(function () {
        self.queue(null);
      });
  });
};
