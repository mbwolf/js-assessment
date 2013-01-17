if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        var result = fn.apply(this, arr);
        return result;
    },

    speak : function(fn, obj) {
        var result = fn.call(obj, "Hello", "Rebecca");
        return result;
    },

    functionFunction : function(str) {
        var arg1 = str;
        return function(arg2){
            var greeting = arg2
            return arg1 + ", " + greeting;
        }
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        var result = null;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    },

    callIt : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
