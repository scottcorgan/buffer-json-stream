# buffer-json-stream

Buffer streaming JSON. Readable stream pipes in chunks of JSON, buffer-json-stream pipes out all that JSON buffered into one stream chunk.

## Install

```
npm install buffer-json-stream --save
```

## Usage

```javascript

someReadableStream.pipe(bufferJsonStream()).pipe(process.stdout);

```

