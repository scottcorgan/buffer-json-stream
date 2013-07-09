var test = require('tape');
var through = require('through');
var bufferJsonStream = require('../index');

test('Buffering', function (t) {
  t.plan(1);
  
  var stream = through().pause();
  
  stream.queue({
    some: 'object'
  });
  
  stream.queue({
    someOther: 'object'
  });
  
  //
  stream.pipe(bufferJsonStream()).on('data', function (data) {
    
    t.deepEqual(data, [
      { some: 'object' },
      { someOther: 'object' }
    ], 'Buffers stream of JSON objects');
    
    t.end();
  });
  
  stream.resume().end();
});
