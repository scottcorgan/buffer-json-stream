# buffer-json-stream

Buffer streaming JSON. Readable stream pipes in chunks of JSON, buffer-json-stream pipes out all that JSON buffered into one stream chunk.

## Install

```
npm install buffer-json-stream --save
```

## Usage

Use as a normal [Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform) stream.

```javascript

/*
In:

Chunk: { some: 'object' }
Chunk: { someOther: 'object' }

*/

someReadableStream.
  pipe(bufferJsonStream()). // Magic right there
  pipe(process.stdout);

/*
Out:

Chunk: [
  {
    some: 'object'
  },
  {
    someOther: 'object'
  }
]
*/

```

