if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {

      var
        greeting = str1,
        name = str2;

      var sayHello = function(){
        var result = greeting + ", " + name;
          return result;
      }

      return sayHello();

    }
  }
});

