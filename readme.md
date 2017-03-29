# qb-assign

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