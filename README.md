# babel-plugin-css-spring

wat

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-css-spring
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["css-spring"]
}
```

### Via CLI

```sh
$ babel --plugins css-spring script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["css-spring"]
});
```
