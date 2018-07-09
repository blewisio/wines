# wines

types of wine

```javascript
const wines = require('wines');

console.log(wines.reds());
// ['Cabernet Sauvignon', 'Chianti', 'Malbec', ...]

console.log(wines.whites());
// ['Champagne', 'Chardonnay', 'Pinot Grigio', ...]
```

## Installation

If using `yarn`:
```
yarn add wines
```

Otherwise:
```
npm install wines --save
```

## Functions

#### `wines.all()`

Returns all wines and their data.

#### `wines.list()`

Returns all wines (names only).

#### `wines.reds()`

Returns the red wines (names only).

#### `wines.roses()`

Returns the rosé wines (names only).

#### `wines.whites()`

Returns the white wines (names only).

## License

ISC