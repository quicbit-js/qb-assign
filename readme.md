# qb-assign

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![dependencies][proddep-image]][proddep-link]
[![dev dependencies][devdep-image]][devdep-link]
[![code analysis][code-image]][code-link]


[npm-image]:       https://img.shields.io/npm/v/qb-assign.svg
[downloads-image]: https://img.shields.io/npm/dm/qb-assign.svg
[npm-url]:         https://npmjs.org/package/qb-assign
[proddep-image]:   https://www.bithound.io/github/quicbit-js/qb-assign/badges/dependencies.svg
[proddep-link]:    https://www.bithound.io/github/quicbit-js/qb-assign/master/dependencies/npm
[devdep-image]:    https://www.bithound.io/github/quicbit-js/qb-assign/badges/devDependencies.svg
[devdep-link]:     https://www.bithound.io/github/quicbit-js/qb-assign/master/dependencies/npm
[code-image]:      https://www.bithound.io/github/quicbit-js/qb-assign/badges/code.svg
[code-link]:       https://www.bithound.io/github/quicbit-js/qb-assign

A tiny Object.assign implementation that works down to IE9

Object.assign support is still just shy of healthy (no IE, > Chrome 45), so this tiny implementation 
uses Object.keys() which has broader support (> IE9, > Chrome 5).  Using Object.keys() reduces
the code and skips prototypes which is a bit sleeker than for..in.

## Install

npm install qb-assign

## Usage

Same api as [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

    var assign = require('qb-assign')
    
    var opt = assign( {a: 1, b: 2}, {a: 7, c: 3} )
    console.log(opt) 
    
    > { a: 7, b: 2, c: 3 }