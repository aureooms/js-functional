[js-functional](http://aureooms.github.io/js-functional)
==

Functional programming code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-functional.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-functional/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-functional.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-functional)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-functional.svg?style=flat)](http://bower.io/search/?q=aureooms-js-functional)
[![Build Status](http://img.shields.io/travis/aureooms/js-functional.svg?style=flat)](https://travis-ci.org/aureooms/js-functional)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-functional.svg?style=flat)](https://coveralls.io/r/aureooms/js-functional)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-functional.svg?style=flat)](https://david-dm.org/aureooms/js-functional#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-functional.svg?style=flat)](https://david-dm.org/aureooms/js-functional#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-functional.svg?style=flat)](https://codeclimate.com/github/aureooms/js-functional)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-functional.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-functional)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-functional.svg?style=flat)](https://github.com/aureooms/js-functional/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-functional.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-functional)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-functional
# or
jspm install npm:aureooms-js-functional
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-functional
```

### bower
```terminal
bower install aureooms-js-functional
```

### ender
```terminal
ender add aureooms-js-functional
```

### jam
```terminal
jam install aureooms-js-functional
```

### spm
```terminal
spm install aureooms-js-functional --save
```

### npm
```terminal
npm install aureooms-js-functional --save
```

## Require
### jspm
```js
let functional = require( "github:aureooms/js-functional" ) ;
// or
import functional from 'aureooms-js-functional' ;
```
### duo
```js
let functional = require( "aureooms/js-functional" ) ;
```

### component, ender, spm, npm
```js
let functional = require( "aureooms-js-functional" ) ;
```

### bower
The script tag exposes the global variable `functional`.
```html
<script src="bower_components/aureooms-js-functional/js/dist/functional.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-functional" ] , function ( functional ) { ... } ) ;
```

## References

  - https://github.com/natefaubion/adt.js
