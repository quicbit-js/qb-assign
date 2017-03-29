var test = require('test-kit').tape()
var assign = require('.')

test('assign', function (t) {
    t.tableAssert([
        [ 'args',                                        'exp' ],
        [ [ null ],                                      {} ],
        [ [ {} ],                                        {} ],
        [ [ null,{a:1} ],                                {a:1} ],
        [ [ null,{a:1},{a:3} ],                          {a:3} ],
        [ [ null,{a:1,b:2},{a:3,d:4} ],                  {a:3,b:2,d:4} ],
        [ [ undefined,{a:1},{a:null,d:null} ],           {a:null,d:null} ],
        [ [ undefined,{a:1,b:2},{a:undefined,d:null} ],  {a:undefined,b:2,d:null} ],
    ],
    function (args) {
        return assign.apply(null, args)
    })
})