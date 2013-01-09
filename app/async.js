if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {

      $.ajax({
        url: url,
        type: "GET",
        data: "json",
        success: function(data){
          var people = data.people,
              arr = [];
          for(var i=0; i < people.length; i++){
            arr.push(people[i].name);
            arr.sort();
          }
          //console.info(arr);
          return arr;
        }
      })
    }
  };
});
