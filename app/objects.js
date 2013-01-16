if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.greeting = "Yo, " + obj.name + "!";
      return obj.greeting;
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for (var prop in obj) {
        // Only look at properties inside original object, ignore prototypes
        if(obj.hasOwnProperty(prop)){
          result.push(prop + ": " + obj[prop]);
        }
      }
      return result;
    }
  };
});
