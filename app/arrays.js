if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for(var i=0; i < arr.length; i++){
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                var position = arr.indexOf(item);
                arr.splice(position, 1);
            }
        }

        return arr;

    },

    removeWithoutCopy : function(arr, item) {

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                var position = arr.indexOf(item);
                arr.splice(position, 1);
            }
        }

        return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(-1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var newArr = arr1.concat(arr2);
        return newArr;
    },

    insert : function(arr, item, index) {
        // splice(starting position, remove 0 items, add item)
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var matches = 0;
        for(var i=0; i < arr.length; i++){
            if(arr[i] === item) {
                matches++;
            }
        }
        return matches;
    },

    duplicates : function(arr) {
        var duplicates = [];
        arr.sort();
        for(var i=0; i < arr.length; i++){
            if(arr[i-1] === arr[i] ){
                duplicates.push(arr[i]);
            }
        }
        return duplicates;
    },

    square : function(arr) {
        for(var i=0; i < arr.length; i++){
            var newValue = Math.pow(arr[i], 2)
            arr[i] = newValue;
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var newArr = [];
        for(var i=0; i < arr.length; i++){
            if(arr[i] === target){
                newArr.push(i);
            }
        }
        return newArr;
    }
  };
});
