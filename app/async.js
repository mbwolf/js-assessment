if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {

      var results = [];

      $.ajax({
        url: url,
        type: "GET",
        data: "json",
        success: function(data){
          var people = data.people;

          for(var i=0; i < people.length; i++){
            results.push(people[i].name);
          }

          return results.sort();
        }
      });

    }
  };
});
