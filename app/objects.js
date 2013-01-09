if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.greeting = "Yo, " + obj.name + "!";
      return obj.greeting;
    },

    alterObjects : function(constructor, greeting) {
      // console.info(constructor);
      // console.info(greeting);
    },

    iterate : function(obj) {

    }
  };
});
