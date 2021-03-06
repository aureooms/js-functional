[js-functional](http://make-github-pseudonymous-again.github.io/js-functional)
==

Functional programming code bricks for JavaScript

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-functional/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-functional.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-functional)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-functional.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-functional)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-functional)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-functional)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-functional#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-functional#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-functional)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-functional.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-functional)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-functional.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-functional/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-functional.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-functional)

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
jspm install npm:@aureooms/js-functional
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-functional
```

### bower
```terminal
bower install @aureooms/js-functional
```

### ender
```terminal
ender add @aureooms/js-functional
```

### jam
```terminal
jam install @aureooms/js-functional
```

### spm
```terminal
spm install @aureooms/js-functional --save
```

### npm
```terminal
npm install @aureooms/js-functional --save
```

## Require
### jspm
```js
let functional = require( "github:aureooms/js-functional" ) ;
// or
import functional from '@aureooms/js-functional' ;
```
### duo
```js
let functional = require( "aureooms/js-functional" ) ;
```

### component, ender, spm, npm
```js
let functional = require( "@aureooms/js-functional" ) ;
```

### bower
The script tag exposes the global variable `functional`.
```html
<script src="bower_components/@aureooms/js-functional/js/dist/functional.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-functional" ] , function ( functional ) { ... } ) ;
```

## References

  - https://github.com/natefaubion/adt.js
