module.exports = function() {
    var ret = Object(arguments[0])
    for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i]
        if (src != null) {
            Object.keys(src).forEach(function (k) { ret[k] = src[k] })
        }
    }
    return ret
}

