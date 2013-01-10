if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var my_regex = /\d/;
        return my_regex.test(str);
    },

    containsRepeatingLetter : function(str) {
        var my_regex = /([a-zA-Z])\1/;
        return my_regex.test(str);
    },

    endsWithVowel : function(str) {
        var lastLetter = str.charAt(str.length - 1);
        var my_regex = /[aeiouAEIOU]/;
        return my_regex.test(lastLetter);
    },

    captureThreeNumbers : function(str) {
        var my_regex = /\d\d\d/;
        var results;
        if((results = my_regex.exec(str)) !== null){
            return results[0];
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
        var my_regex = /^\d{3}-?\d{3}-?\d{4}-?$/;
        return my_regex.test(str);
    },

    isUSD : function(str) {
        var my_regex = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
        return my_regex.test(str);
    }
  };
});
