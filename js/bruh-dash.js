var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return array.shift();
  },

  // returns the last element of an array
  last: function (array) {
    return array.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, z) {
    return array.indexOf(z);

  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, x) {
    return array.lastIndexOf(x);

  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    var popped = array.pop();
    return array;

  },

  // returns an array with all falsey values removed
  compact: function (array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === false) {
        return array.filter(Boolean);
      };
    }
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, x, y) {
    return array.slice(x, y);

  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function (arr, n = 1) {
    if (n === 0) {
      return arr;
    }
    return arr.slice(n);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function (arr, n) {
    if (n === 0) {
      return arr;
    } else if (typeof n === 'undefined') {
      var popped = arr.pop();
      return arr;
    }
    return arr.slice(0, -n);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (typeof n === 'undefined') {
      return arr.slice(0, 1);
    }
    return arr.slice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (typeof n === 'undefined') {
      return arr.slice(-1);
    } else if (n === 0) {
      var emptyArr = arr = [];
      return emptyArr;
    }
    return arr.slice(-n);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, val, start, end) {
    return arr.fill(val, start, end);
  },

  // removes all given values from an array
  pull: function (arr, n) {
    for (var i = 0; i < arr.length; i++) {
      arr.splice(n, 1);
    }
    return arr;

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, n) {
    var arrTwo = [];
    for (var i = 0; i < n.length; i++) {
      arrTwo.push(arr[n[i]]);
    }
    return arrTwo;
  },



  // creates an array excluding all the specified values
  without: function (arr, x, y) {
    const arrTwo = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== x && arr[i] !== y) {
        arrTwo.push(arr[i]);
      }
    }
    return arrTwo;
  },

  // returns an array with specified values excluded
  difference: function (arr, x, y) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== x && arr[i] !== y) {
        arr.splice(x, 1);
        arr.splice(y, 1);
      }
    }
    return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arr, arr2) {
    let arrTwo = [];
    for (var i = 0; i < arr.length; i++) {
      let second = [arr[i], arr2[i]];
      arrTwo.push(second);
    }
    return arrTwo;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr, arr2) {
    const x = [];
    const y = [];
    for (var i = 0; i < arr.length; i++) {
      x.push(arr[i][0]);
      y.push(arr[i][1]);
    }
    return [x, y];

  },

  // creates an array of elements into groups of length of specified size
  chunk: function (arr, x) {
    if (x === 0) {
      return [];
    }
    if (x < 1 || x === null || isNaN(x)) {
      x = 1;
    }
    var chunkArr = [];
    for (var i = 0; i < arr.length; i += x) {
      chunkArr.push(arr.slice(i, i + x));
    }
    return chunkArr;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function () {},

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function () {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function () {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function () {

  }
};