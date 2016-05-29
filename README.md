# Reduce a stream to a promise

## Usage

```
let reduceStream = require('reduce-stream-to-promise')

function concat(acc, curr) { 
  return acc + curr;
}

reduceStream(concat, '', stream).then(result => console.log(result))
```
